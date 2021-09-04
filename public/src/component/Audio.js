import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import WaveAudio from "./WaveAudio";

import Main from "../hooks";

function Audio({ type = 0, answer, close }) {
  const { lstream, rstream, startCall } = Main(type, close);

  useEffect(() => {
    if (type === 0) {
      stopAudioOnly(lstream);
      stopAudioOnly(rstream);
    }
  }, [type]);

  useEffect(() => {
    if (startCall) {
      answer();
    }
  }, [startCall]);

  return type === 1 ? (
    <Loader type="Bars" color="rgba(102, 193, 113, 1)" height={80} width={80} />
  ) : type === 2 && rstream ? (
    <WaveAudio stream={rstream} lstream={lstream} />
  ) : (
    <div></div>
  );
}

export default Audio;

function stopAudioOnly(stream) {
  if (stream) {
    stream.getTracks().forEach(function (track) {
      track.stop();
      console.log("st", stream);
    });
  }
}
