(this.webpackJsonpmusicplayer=this.webpackJsonpmusicplayer||[]).push([[0],{37:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(22),i=s.n(n),c=(s(37),s(5)),r=s(2),l=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"player_details",children:[Object(r.jsx)("div",{className:"image_details",children:Object(r.jsx)("img",{className:"imgg",src:e.song.img_src,alt:"photu",style:{animationPlayState:e.isPlaying?"running":"paused"}})}),Object(r.jsx)("h3",{className:"details_title",children:e.song.title}),Object(r.jsx)("h4",{className:"details_artist",children:e.song.artist})]})})},j=s(25),o=s(19),u=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"player_controls",children:[Object(r.jsx)("button",{className:"skip_btn",children:Object(r.jsx)(j.a,{className:"button",icon:o.a,onClick:function(){e.onSelect(!1)}})}),Object(r.jsx)("button",{className:"play_btn",onClick:function(){e.setIsPlaying(!e.isPlaying)},children:Object(r.jsx)(j.a,{className:"button",icon:e.isPlaying?o.c:o.d})}),Object(r.jsx)("button",{className:"skip_btn",children:Object(r.jsx)(j.a,{className:"button",icon:o.b,onClick:function(){e.onSelect(!0)}})})]})})},b=s(13),d=[{title:"Zinda",artist:"Siddharth Mahadevan",img_src:"./images/zinda1.jpg",src:"./songs/Zinda.mp3"},{title:"Wishlist",artist:"Dino James",img_src:"./images/wishlist.jpg",src:"./songs/Wishlist.mp3"},{title:"Kar Har Maidan Fateh",artist:"Sukhvindar Singh",img_src:"./images/karHarMaidanFateh.jpg",src:"./songs/KarHarMaidaanFateh.mp3"},{title:"Akela",artist:"Abhijeet Srivastava",img_src:"./images/akela.jpg",src:"./songs/Akela.mp3"},{title:"Toh aa Gye Hum",artist:"Jubin Nautiyal",img_src:"./images/jubin1.jpg",src:"./songs/TohAagayeHum.mp3"},{title:" Main Hoya Gumshuda",artist:"King \ud83d\udc51",img_src:"./images/Gumshuda.jpg",src:"./songs/Gumshuda.mp3"},{title:"Yaaro ne Mere Vaaste",artist:"Rajeev Raja",img_src:"./images/yaaro ne mere vaaste.jpg",src:"./songs/yaaro.mp3"},{title:"Apni Yaari",artist:"Sanam",img_src:"./images/apni yaari.jpg",src:"./songs/apniyari.mp3"},{title:"Jannat Ve",artist:"Darshan Raval",img_src:"./images/jannatve.jpg",src:"./songs/jannatve.mp3"}],m=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),s=t[0],n=t[1],i=Object(b.useSpring)({left:s?-500:0}),j=Object(b.useSpring)({left:s?0:500});var o={border:"1px solid Black",color:"Black",fontWeight:900,fontSize:"15px"},m=Object(a.useRef)(null),g=Object(a.useRef)(null),h=Object(a.useState)(0),O=Object(c.a)(h,2),p=O[0],f=O[1],x=Object(a.useState)(p+1),y=Object(c.a)(x,2),v=y[0],N=y[1],_=Object(a.useState)(!1),S=Object(c.a)(_,2),k=S[0],P=S[1],M=Object(a.useState)(0),C=Object(c.a)(M,2),F=C[0],T=C[1],A=Object(a.useState)(0),H=Object(c.a)(A,2),w=H[0],B=H[1],I=Object(a.useState)(0),J=Object(c.a)(I,2),R=J[0],E=J[1],G=Object(a.useState)(0),W=Object(c.a)(G,2),K=W[0],Y=W[1],z=Object(a.useState)(0),D=Object(c.a)(z,2),L=D[0],V=D[1];Object(a.useEffect)((function(){!0===k?m.current.play():m.current.pause()})),Object(a.useEffect)((function(){N((function(){return p+1>d.length-1?0:p+1}))}),[p]);return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container",style:{backgroundImage:"url(".concat(d[p].img_src,")")},children:Object(r.jsxs)("div",{className:"player-playlist",children:[Object(r.jsx)(b.animated.button,{onClick:function(){n(!1)},id:"loginBtn",style:o,children:"Player"}),Object(r.jsx)(b.animated.button,{onClick:function(){n(!0)},id:"registerBtn",style:o,children:"Playlist"}),Object(r.jsxs)(b.animated.div,{className:"player",style:i,children:[Object(r.jsx)("audio",{ref:m,src:d[p].src,onTimeUpdate:function(){T((function(){return m.current.currentTime/m.current.duration*100}));var e=Math.floor(m.current.currentTime),t=Math.floor(e/60),s=e-60*t;if(s<10&&(s="0"+s),V(t),Y(s),m.current.duration){var a=Math.floor(m.current.duration),n=Math.floor(a/60),i=a-60*n;i<10&&(i="0"+i),E(n),B(i)}}}),Object(r.jsx)("h4",{className:"playing",children:"Playing Now"}),Object(r.jsx)(l,{song:d[p],isPlaying:k}),Object(r.jsxs)("div",{className:"duration",children:[Object(r.jsxs)("div",{children:[L,":",K]}),Object(r.jsxs)("div",{children:[R,":",w]})]}),Object(r.jsx)("div",{className:"progress",onClick:function(e){var t=e.nativeEvent.offsetX/g.current.offsetWidth*m.current.duration;m.current.currentTime=t},ref:g,children:Object(r.jsx)("div",{className:"progress__filled",style:{width:"".concat(F,"%")}})}),Object(r.jsx)(u,{onSelect:function(e){f(!0===e?function(e){return console.log(e),e===d.length-1?0:e+1}:function(e){return console.log(e),0===e?d.length-1:e-1})},isPlaying:k,setIsPlaying:P}),Object(r.jsxs)("p",{className:"footer",children:[Object(r.jsx)("strong",{children:"Next up: "}),d[v].title]})]}),Object(r.jsxs)(b.animated.div,{className:"playlist",style:j,children:[Object(r.jsx)("h2",{children:"PLAYLIST"}),Object(r.jsx)("br",{}),Object(r.jsx)("hr",{}),d.map((function(e,t){return Object(r.jsxs)("div",{className:"item",onClick:function(){!function(e){f((function(t){return e}))}(t)},children:[Object(r.jsx)("img",{src:e.img_src,alt:""}),Object(r.jsxs)("div",{className:"item_details",children:[Object(r.jsx)("h6",{children:e.title}),Object(r.jsx)("h6",{children:e.artist})]})]},t)}))]})]})})})},g=function(){return Object(r.jsx)(m,{})};i.a.render(Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(g,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.c93a82b3.chunk.js.map