(this.webpackJsonptalktime=this.webpackJsonptalktime||[]).push([[0],{41:function(e,t,n){},83:function(e,t){},85:function(e,t){},92:function(e,t){},93:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(33),a=n.n(o),s=(n(41),n(34)),i=n.n(s),l=n(3),u=n(13),f=n.n(u),j=n(1);var b=function(e){var t=e.stream,n=e.lstream,r=Object(c.useState)(new f.a),o=Object(l.a)(r,1)[0],a=Object(c.useState)(new f.a),s=Object(l.a)(a,1)[0],i=Object(c.useState)(0),u=Object(l.a)(i,2),b=u[0],d=u[1],O=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=setTimeout((function(){d((function(e){return e+1}))}),1e3);return function(){return clearTimeout(e)}}),[b]),Object(c.useEffect)((function(){return t&&t.active&&o.fromStream(t,"wave",{type:"shine",colors:["rgba(149, 54, 64,1)","white","blue"]}),n&&n.active&&s.fromStream(n,"lwave",{type:"shine",colors:["rgba(45, 134, 233, 1)","white","blue"]}),console.log("Start streaming audio ...,",t),O.current.srcObject=t,function(){o.stopStream(),s.stopStream()}}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("canvas",{id:"wave"}),Object(j.jsx)("br",{}),Object(j.jsx)("canvas",{id:"lwave"}),Object(j.jsx)("audio",{ref:O,style:{display:"none"},volume:"true",autoPlay:!0})]})},d=n(35),O=n.n(d),m=n(36),v=n.n(m);var g=function(e,t){var n=Object(c.useState)(),r=Object(l.a)(n,2),o=r[0],a=r[1],s=Object(c.useState)(),i=Object(l.a)(s,2),u=i[0],f=i[1],j=Object(c.useState)(!1),b=Object(l.a)(j,2),d=b[0],m=b[1],g=Object(c.useState)(null),h=Object(l.a)(g,2),p=h[0],y=h[1],x=Object(c.useRef)(null);return Object(c.useEffect)((function(){if(1===e){var t=window.location.host;0,y(new v.a({url:"ws://"+t})),console.log("start ...")}else 0===e&&(m(!1),p&&(p.send(JSON.stringify({type:"end"})),p.destroy(),y(null),x&&x.current&&(x.current.destroy(),x.current=null),console.log("ERROR send end")))}),[e]),Object(c.useEffect)((function(){if(p){var e=function(e){e&&e.preventDefault&&e.preventDefault(),x&&x.current&&(console.log("ok"),p&&p.connected&&p.send(JSON.stringify({type:"end"})),x.current.destroy(),t()),p&&p.connected&&p.send(JSON.stringify({type:"peer"}))},n=null;p.on("error",(function(e){console.error("[socket error]",e.stack||e.message||e)})),p.once("connect",(function(){!function(e,t){navigator.mediaDevices.getUserMedia({audio:!0}).then((function(n){t(n),a(n),console.log("stream ,",n),e()})).catch((function(e){console.error(e),window.alert("You must share your micrephone to use this app!")}))}(e,(function(e){return n=e}))})),p.on("data",(function(t){console.log("got socket message: "+t);try{t=JSON.parse(t)}catch(r){console.error("[socket error]",r.stack||r.message||r)}var c;"signal"===t.type?(c=t.data,x&&x.current&&x.current.signal(c)):"count"===t.type?console.log(t.data):"end"===t.type?e():"peer"===t.type&&function(t){t=t||{},x.current=new O.a({initiator:!!t.initiator,stream:n}),x.current.on("error",(function(e){console.error("peer error",e.stack||e.message||e)})),x.current.on("connect",(function(){m(!0)})),x.current.on("signal",(function(e){p.send(JSON.stringify({type:"signal",data:e}))})),x.current.on("stream",(function(e){f(e)})),x.current.on("data",(function(e){})),x.current.on("close",e)}(t.data)}))}}),[p]),{lstream:o,rstream:u,startCall:d}};var h=function(e){var t=e.type,n=void 0===t?0:t,r=e.answer,o=e.close,a=g(n,o),s=a.lstream,l=a.rstream,u=a.startCall;return Object(c.useEffect)((function(){0===n&&(p(s),p(l))}),[n]),Object(c.useEffect)((function(){u&&r()}),[u]),1===n?Object(j.jsx)(i.a,{type:"Bars",color:"rgba(102, 193, 113, 1)",height:80,width:80}):2===n&&l?Object(j.jsx)(b,{stream:l,lstream:s}):Object(j.jsx)("div",{})};function p(e){e&&e.getTracks().forEach((function(t){t.stop(),console.log("st",e)}))}var y=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)("Call"),a=Object(l.a)(o,2),s=a[0],i=a[1];return{state:n,click:function(){0===n&&(r(1)||i("Dialling")),1===n&&(r(0)||i("Call")),2===n&&(r(0)||i("Call"))},btnText:s,answer:function(){console.log("answer call ..."),r(2),i("End")},close:function(){console.log("call closed ..."),r(0),i("Call")}}};var x=function(){var e=y(),t=e.state,n=e.click,c=e.btnText,r=e.answer,o=e.close;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("h4",{children:"TalkTime"})}),Object(j.jsx)("div",{children:Object(j.jsx)("h5",{children:"Find someone to talk to."})}),Object(j.jsx)("div",{className:"audio-animation",children:Object(j.jsx)(h,{type:t,answer:r,close:o})}),Object(j.jsx)("div",{className:"button",children:Object(j.jsx)("button",{onClick:n,className:c,children:c})}),Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsx)("a",{href:"/privacy",children:"Privacy Policy"})," | ",Object(j.jsx)("a",{href:"/terms",children:"Terms"})]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),w()}},[[93,1,2]]]);
//# sourceMappingURL=main.22d1f135.chunk.js.map