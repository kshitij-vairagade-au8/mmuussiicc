(this["webpackJsonpksm-player"]=this["webpackJsonpksm-player"]||[]).push([[0],{56:function(e,t,a){e.exports=a(77)},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=(a(61),a(4)),i=(a(62),"https://accounts.spotify.com/authorize"),s=window.location.origin+"/",u="d3384f96a6054701a7cf023eb714c440",m=["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"],p="".concat(i,"?client_id=").concat(u,"&redirect_uri=").concat(s,"&scopes=").concat(m.join("%20"),"&response_type=token&show_dialog=true");"".concat(i,"?client_id=").concat(u,"&redirect_uri=").concat(s,"&scopes=").concat(m.join("%20"),"&response_type=token&show_dialog=true");var d=function(){return r.a.createElement("div",{className:"login"},r.a.createElement("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),r.a.createElement("a",{href:p},"Login with Spotify Clone"))},E=(a(63),a(31)),f=a.n(E),y=(a(64),a(65),a(21)),v=(a(66),Object(n.createContext)()),_=function(e){var t=e.initialState,a=e.reducer,c=e.children;return r.a.createElement(v.Provider,{value:Object(n.useReducer)(a,t)},c)},h=function(){return Object(n.useContext)(v)};var b=function(e){var t=e.spotify,a=e.title,n=e.id,c=e.Icon,l=h(),i=Object(o.a)(l,2);Object(y.a)(i[0]);var s=i[1];return r.a.createElement("div",{className:"sidebarOption"},c&&r.a.createElement(c,{className:"sidebarOption__icon"}),c?r.a.createElement("h4",null,a):r.a.createElement("p",{onClick:function(e){return function(e,a){s({type:"SET_CURRENT_PLAYLIST",id:e}),t.getPlaylistTracks(e).then((function(e){s({type:"SET_TRACKS",tracks:e})}))}(n)}},a))},g=a(34),S=a.n(g),O=a(37),j=a.n(O),k=a(25),N=a.n(k),T=a(32),w=a(33),P=a(15),C=a(51),L=a(50),A=function(e){Object(C.a)(a,e);var t=Object(L.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={lat:void 0,lon:void 0,city:void 0,temperatureC:void 0,temperatureF:void 0,icon:void 0,errorMessage:void 0},e.getPosition=function(){return new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}))},e.getWeather=function(){var t=Object(T.a)(N.a.mark((function t(a,n){var r,c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(n,"&appid=a8ad87d117297e38c24b75a8ff1f512b&units=metric"));case 2:return r=t.sent,t.next=5,r.json();case 5:c=t.sent,e.setState({lat:a,lon:n,city:c.name,temperatureC:Math.round(c.main.temp),temperatureF:Math.round(1.8*c.main.temp+32),icon:c.weather[0].icon});case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(P.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getPosition().then((function(t){e.getWeather(t.coords.latitude,t.coords.longitude)})).catch((function(t){e.setState({errorMessage:t.message})})),this.timeID=setInterval((function(){return e.getWeather(e.state.lat,e.state.lon)}),6e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeID)}},{key:"render",value:function(){var e=this.state,t=e.city,a=e.temperatureC,n=e.temperatureF;e.icon;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("p",{className:"container"},r.a.createElement("b",null,"Weather")),r.a.createElement("p",{className:"header"},r.a.createElement("b",null,t)),r.a.createElement("p",null,"Temp : ",a," \xb0C"),r.a.createElement("p",null,"Temp : ",n," \xb0F")):r.a.createElement("div",null,"Loading...")}}]),a}(n.Component),I=a(22),R=a.n(I);var U=function(e){var t,a=e.spotify,c=h(),l=Object(o.a)(c,1)[0].playlists,i=Object(n.useState)({name:"Monthly Subscription",price:219,productBy:"Spotify"});return i.product,i.setProduct,r.a.createElement("div",{className:"sidebar"},r.a.createElement("img",{className:"sidebar_logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),r.a.createElement(b,{title:"Home",Icon:S.a,Component:ve}),r.a.createElement(b,{title:"Your Library",Icon:j.a}),r.a.createElement("br",null),r.a.createElement("strong",{className:"sidebar__title"},"Playlists"),r.a.createElement("hr",null),null===l||void 0===l||null===(t=l.items)||void 0===t?void 0:t.map((function(e){return r.a.createElement(b,{spotify:a,title:e.name,id:e.id,key:e.id})})),r.a.createElement(A,null),r.a.createElement(R.a,{stripeKey:"",token:"",name:"Payment"},r.a.createElement("button",{className:"Premium"},"Go Premium")," "))},x=(a(73),a(74),function(e){var t=e.placeholder,a=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:a})}),Y=a(91);var M=function(e){e.spotify;var t,a=h(),n=Object(o.a)(a,1)[0].user;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__left"},r.a.createElement(x,null)),r.a.createElement("div",{className:"header__right"},r.a.createElement(R.a,{stripeKey:"",token:"",name:"Payment"},r.a.createElement("button",{className:"pre"},"Premium")," "),r.a.createElement(Y.a,{src:null===n||void 0===n||null===(t=n.images[0])||void 0===t?void 0:t.url,alt:null===n||void 0===n?void 0:n.display_name}),r.a.createElement("h4",null,null===n||void 0===n?void 0:n.display_name)))},G=a(39),F=a.n(G),K=a(38),D=a.n(K),W=a(40),z=a.n(W),V=a(41),B=a.n(V),H=(a(75),Object(n.createContext)()),J=function(e){var t=e.initialState,a=e.reducer,c=e.children;return r.a.createElement(H.Provider,{value:Object(n.useReducer)(a,t)},c)},q=function(){return Object(n.useContext)(H)};var $=function(e){var t=e.track,a=h(),n=Object(o.a)(a,2);Object(y.a)(n[0]);var c=n[1],l=q(),i=Object(o.a)(l,2),s=i[0],u=s.playing,m=s.repeat,p=i[1];return r.a.createElement("div",{className:"songRow",onClick:function(e){return function(e,t){c({type:"SET_TRACK",track:t});var a=u;p({type:"SET_PLAYING",playing:!1});var n=new Audio(t.preview_url);n.loop=m,p({type:"SET_AUDIO",audio:n}),a&&p({type:"SET_PLAYING",playing:!0}),document.title="".concat(t.name," \xb7 ").concat(t.artists.map((function(e){return e.name})).join(", "))}(0,t)}},r.a.createElement("img",{className:"songRow__album",src:t.album.images[0].url,alt:""}),r.a.createElement("div",{className:"songRow__info"},r.a.createElement("h1",null,t.name),r.a.createElement("p",null,t.artists.map((function(e){return e.name})).join(", ")),r.a.createElement("p",null,t.album.name)))};var Q=function(e){var t=e.spotify,a=h(),n=Object(o.a)(a,1)[0],c=n.current_playlist,l=n.tracks,i=n.track,s=q(),u=Object(o.a)(s,2),m=u[0],p=m.playing,d=m.volume,E=u[1];return r.a.createElement("div",{className:"body"},r.a.createElement(M,{spotify:t}),r.a.createElement("div",{className:"body__info"},r.a.createElement("img",{src:c?null===c||void 0===c?void 0:c.images[0].url:"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png",alt:""}),r.a.createElement("div",{className:"body__infoText"},r.a.createElement("strong",null,"Playlists"),r.a.createElement("h2",null,null===c||void 0===c?void 0:c.name),r.a.createElement("p",null,null===c||void 0===c?void 0:c.description))),r.a.createElement("div",{className:"body__songs"},r.a.createElement("div",{className:"body__icons"},p?r.a.createElement(D.a,{onClick:i?function(){E({type:"SET_PLAYING",playing:!1})}:null,className:"body__shuffle"}):r.a.createElement(F.a,{onClick:i?function(){E({type:"SET_PLAYING",playing:!0}),E({type:"SET_VOLUME",volume:d/100})}:null,fontSize:"large",className:"body__shuffle"}),r.a.createElement(z.a,{fontSize:"large"}),r.a.createElement(B.a,null)),null===l||void 0===l?void 0:l.items.map((function(e){return r.a.createElement($,{track:e.track,key:e.track.id})}))))},X=(a(76),a(45)),Z=a.n(X),ee=a(43),te=a.n(ee),ae=a(46),ne=a.n(ae),re=a(42),ce=a.n(re),le=a(47),oe=a.n(le),ie=a(89),se=a(90),ue=a(48),me=a.n(ue),pe=a(49),de=a.n(pe),Ee=a(44),fe=a.n(Ee);var ye=function(){var e=h(),t=Object(o.a)(e,2),a=t[0],n=a.track,c=a.tracks,l=t[1],i=q(),s=Object(o.a)(i,2),u=s[0],m=u.audio,p=u.playing,d=u.volume,E=u.repeat,f=u.shuffle,y=s[1],v=function(){!E&&f&&_(),y({type:"SET_REPEAT",repeat:!E})},_=function(){!f&&E&&v(),y({type:"SET_SHUFFLE",shuffle:!f})};return m&&(m.onended=function(){if(f)for(;;){var e=Math.floor(Math.random()*c.items.length),t=c.items[e].track;if(n!==t){l({type:"SET_TRACK",track:t});var a=p;y({type:"SET_PLAYING",playing:!1});var r=new Audio(t.preview_url);r.loop=E,y({type:"SET_AUDIO",audio:r}),a&&y({type:"SET_PLAYING",playing:!0}),document.title="".concat(t.name," \xb7 ").concat(t.artists.map((function(e){return e.name})).join(", "));break}}f||E||y({type:"SET_PLAYING",playing:!1})}),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer__left"},r.a.createElement("img",{className:"footer__albumLogo",src:n?n.album.images[0].url:"",alt:""}),r.a.createElement("div",{className:"footer__songInfo"},r.a.createElement("h4",null,n?n.name:"No song selected"),r.a.createElement("p",null,n?n.artists.map((function(e){return e.name})).join(", "):null))),r.a.createElement("div",{className:"footer__center"},r.a.createElement(ce.a,{onClick:n?_:null,className:f?"footer__green":"footer__icon"}),r.a.createElement(te.a,{className:"footer__icon"}),p?r.a.createElement(fe.a,{onClick:n?function(){y({type:"SET_PLAYING",playing:!1})}:null,fontSize:"large",className:"footer__icon"}):r.a.createElement(Z.a,{onClick:n?function(){y({type:"SET_PLAYING",playing:!0}),y({type:"SET_VOLUME",volume:d/100})}:null,fontSize:"large",className:"footer__icon"}),r.a.createElement(ne.a,{className:"footer__icon"}),r.a.createElement(oe.a,{onClick:n?v:null,className:E?"footer__green":"footer__icon"})),r.a.createElement("div",{className:"footer__right"},r.a.createElement(ie.a,{container:!0,spacing:2},r.a.createElement(ie.a,{item:!0},r.a.createElement(me.a,null)),r.a.createElement(ie.a,{item:!0},r.a.createElement(de.a,null)),r.a.createElement(ie.a,{item:!0,xs:!0},r.a.createElement(se.a,{"aria-labelledby":"discrete-slider",valueLabelDisplay:"off",onChange:function(e,t){y({type:"SET_VOLUME",volume:t/100})},min:0,max:100})))))};var ve=function(e){var t=e.spotify;return r.a.createElement("div",{className:"player"},r.a.createElement("div",{className:"player_body"},r.a.createElement(U,{spotify:t}),r.a.createElement(Q,{spotify:t})),r.a.createElement(ye,null))},_e=new f.a;var he=function(){var e=h(),t=Object(o.a)(e,2),a=t[0].token,c=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var a=t.split("=");return e[a[0]]=decodeURIComponent(a[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(c({type:"SET_TOKEN",token:t}),_e.setAccessToken(t),_e.getMe().then((function(e){c({type:"SET_USER",user:e})})),_e.getUserPlaylists().then((function(e){c({type:"SET_PLAYLISTS",playlists:e})})))}),[]),r.a.createElement("div",{className:"app"}," ",a?r.a.createElement(ve,{spotify:_e}):r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=a(3),ge=function(e,t){switch(t.type){case"SET_USER":return Object(be.a)(Object(be.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(be.a)(Object(be.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(be.a)(Object(be.a)({},e),{},{playlists:t.playlists});case"SET_CURRENT_PLAYLIST":var a=null;return e.playlists.items.forEach((function(e){e.id===t.id&&(a=e)})),Object(be.a)(Object(be.a)({},e),{},{current_playlist:a});case"SET_TRACKS":return Object(be.a)(Object(be.a)({},e),{},{tracks:t.tracks});case"SET_TRACK":return Object(be.a)(Object(be.a)({},e),{},{track:t.track});default:return e}},Se=function(e,t){switch(t.type){case"SET_AUDIO":return Object(be.a)(Object(be.a)({},e),{},{audio:t.audio});case"SET_PLAYING":return t.playing?e.audio&&e.audio.play():e.audio&&e.audio.pause(),Object(be.a)(Object(be.a)({},e),{},{playing:t.playing});case"SET_VOLUME":return e.audio&&(e.audio.volume=t.volume),Object(be.a)(Object(be.a)({},e),{},{volume:t.volume});case"SET_REPEAT":return e.audio&&(e.audio.loop=t.repeat),Object(be.a)(Object(be.a)({},e),{},{repeat:t.repeat});case"SET_SHUFFLE":return e.audio?Object(be.a)(Object(be.a)({},e),{},{shuffle:t.shuffle}):e;default:return e}};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,{initialState:{user:null,playlists:[],playing:!1,item:null,current_playlist:null,tracks:null,track:null,token:null},reducer:ge},r.a.createElement(J,{initialState:{audio:null,playing:!1,volume:.3,repeat:!1,shuffle:!1},reducer:Se},r.a.createElement(he,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.418230da.chunk.js.map