(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/fm_clonk.f22ecd8a.wav"},function(e,t,a){e.exports=a.p+"static/media/ekostab.9e6886e8.wav"},function(e,t,a){e.exports=a.p+"static/media/metal-clink.830bdd8b.wav"},function(e,t,a){e.exports=a.p+"static/media/fm-wave-hit.63c0680b.wav"},function(e,t,a){e.exports=a.p+"static/media/fx-spindown.2688e80e.wav"},function(e,t,a){e.exports=a.p+"static/media/phaser-echo-hit.11e5f155.wav"},function(e,t,a){e.exports=a.p+"static/media/mean-analog-pling.6277c378.wav"},function(e,t,a){e.exports=a.p+"static/media/meep.486b9313.wav"},function(e,t,a){e.exports=a.p+"static/media/tek-beep-up.dded74ba.wav"},,,function(e,t,a){e.exports=a(19)},function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(4),c=a(16),o=a(5),l=a(1),d=a(17),p=a(0),u=a.n(p),s=a(6),r=a.n(s),m=(a(25),a(7)),v=a.n(m),b=a(8),y=a.n(b),f=a(9),h=a.n(f),E=a(10),w=a.n(E),g=a(11),j=a.n(g),k=a(12),x=a.n(k),O=a(13),B=a.n(O),I=a(14),C=a.n(I),N=a(15),S=a.n(N),F=function(e){var t=[],a="",n="",i="";for(var c in e.obj)a=c,n=e.clip(e.obj[c]),i=e.obj[c],t.push(u.a.createElement("button",{className:"drum-pad",key:n,id:n,value:a,onClick:e.play},u.a.createElement("audio",{className:"clip",id:a,src:i}),a));return document.onkeyup=function(t){e.play(t)},u.a.createElement("div",{id:"buttons"},t)},J=function(e){return u.a.createElement("div",{id:"volume"},u.a.createElement("input",{type:"range",min:"1",max:"100",className:"slider",autoFocus:"1",onChange:e.handle}))},M=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(o.a)(t).call(this))).play=function(t){var a="",n="",i="";"keyup"===t.type?(n=t.key.toUpperCase(),document.getElementById(n)&&(document.getElementById(n).volume=e.state.volume,document.getElementById(n).play(),a=e.clip(e.state.obj[n]))):"click"===t.type&&(i=t.target.value,document.getElementById(i).volume=e.state.volume,document.getElementById(i).play(),a=t.target.id),e.setState({display:a})},e.clip=function(e){return e.replace(/(\/.+\/)|(\..+)/g,"").replace(/-|_/g," ")},e.handleEvent=function(t){var a=t.target.value,n=(a/100).toFixed(1),i="";i=a<5?"Mute":"Volume: "+Math.round(a/10),e.setState({volume:n,display:i})},e.state={display:"",volume:.5,obj:{Q:v.a,W:y.a,E:h.a,A:w.a,S:j.a,D:x.a,Z:B.a,X:C.a,C:S.a}},e.play=e.play.bind(Object(l.a)(e)),e.clip=e.clip.bind(Object(l.a)(e)),e.handleEvent=e.handleEvent.bind(Object(l.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{id:"drum-machine"},u.a.createElement("div",{id:"display"},this.state.display),u.a.createElement(F,{play:this.play,clip:this.clip,obj:this.state.obj}),u.a.createElement(J,{handle:this.handleEvent}))}}]),t}(u.a.Component);r.a.render(u.a.createElement(M,null),document.getElementById("root"))},,,,,,function(e,t,a){}],[[18,1,2]]]);
//# sourceMappingURL=main.098af95c.chunk.js.map