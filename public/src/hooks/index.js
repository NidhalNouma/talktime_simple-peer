import Peer from "simple-peer";
import Socket from "simple-websocket";

import { useState, useEffect, useRef } from "react";

function Main(type, close) {
  const [lstream, setStream] = useState();
  const [rstream, setRStream] = useState();
  const [startCall, setStartCall] = useState(false);

  const [socket, setSocket] = useState(null);

  const peer = useRef(null);

  useEffect(() => {
    if (type === 1) {
      let url = window.location.host;
      if (!process.env.NODE_ENV || process.env.NODE_ENV === "development")
        url = "localhost:8080";

      setSocket(new Socket({ url: "ws://" + url }));

      console.log("start ...");
    } else if (type === 0) {
      setStartCall(false);
      if (socket) {
        socket.send(JSON.stringify({ type: "end" }));
        socket.destroy();
        setSocket(null);
        if (peer && peer.current) {
          peer.current.destroy();
          peer.current = null;
        }
        console.log("ERROR send end");
      }
    }
  }, [type]);

  useEffect(() => {
    if (socket) {
      let stream = null;

      socket.on("error", function (err) {
        console.error("[socket error]", err.stack || err.message || err);
      });

      socket.once("connect", function () {
        getMediaUser(next, (s) => (stream = s));
      });

      socket.on("data", function (message) {
        console.log("got socket message: " + message);
        try {
          message = JSON.parse(message);
        } catch (err) {
          console.error("[socket error]", err.stack || err.message || err);
        }

        if (message.type === "signal") {
          handleSignal(message.data);
        } else if (message.type === "count") {
          console.log(message.data);
        } else if (message.type === "end") {
          next();
        } else if (message.type === "peer") {
          handlePeer(message.data);
        }
      });

      function next(event) {
        if (event && event.preventDefault) {
          event.preventDefault();
        }
        if (peer && peer.current) {
          console.log("ok");
          if (socket && socket.connected)
            socket.send(JSON.stringify({ type: "end" }));
          peer.current.destroy();
          close();
        }
        if (socket && socket.connected)
          socket.send(JSON.stringify({ type: "peer" }));
        //
      }

      function handlePeer(data) {
        data = data || {};

        peer.current = new Peer({
          initiator: !!data.initiator,
          stream: stream,
        });

        peer.current.on("error", function (err) {
          console.error("peer error", err.stack || err.message || err);
        });

        peer.current.on("connect", function () {
          setStartCall(true);
        });

        peer.current.on("signal", function (data) {
          socket.send(JSON.stringify({ type: "signal", data: data }));
        });

        peer.current.on("stream", function (stream) {
          setRStream(stream);
        });

        peer.current.on("data", function (message) {
          // addChat(message, "remote");
        });

        // Takes ~3 seconds before this event fires when peerconnection is dead (timeout)
        peer.current.on("close", next);
      }

      function handleSignal(data) {
        if (peer && peer.current) peer.current.signal(data);
      }
    }
  }, [socket]);

  function getMediaUser(next, fn) {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then(function (s) {
        fn(s);
        setStream(s);
        console.log("stream ,", s);
        next();
      })
      .catch(function (err) {
        console.error(err);
        window.alert("You must share your micrephone to use this app!");
      });
  }

  return { lstream, rstream, startCall };
}

export default Main;
