!function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(d&&d(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={7:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=function(e){return s.p+""+({0:"desktop~mobile",1:"vendors~desktop~maps",2:"vendors~desktop~mobile",3:"about",4:"changelog",5:"desktop",6:"drawer",8:"maps",9:"mobile",10:"notes",11:"score",12:"settings"}[e]||e)+".afca0c4ff6451bca411f.js"}(e);var c=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;a.push([80,13]),n()}({12:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r={crewmateWins:0,crewmateLosses:0,impostorWins:0,impostorLosses:0}},13:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"g",(function(){return u})),n.d(t,"e",(function(){return p})),n.d(t,"d",(function(){return m})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return f}));var r=n(17),o=n(6),a=n(3);function s(e,t){const n=[];let r=[];for(const e of t)n.push(Object.assign(Object.assign({},e),{players:[]})),r=r.concat(e.players);return n[e].players=r,n}const i=Object(o.b)({name:"PlayersSections",initialState:function(){var e,t;const n=localStorage.getItem(a.b+"sections");if(n){const o=JSON.parse(n);return{defaultSection:null!==(e=o.defaultSection)&&void 0!==e?e:r.a,sections:null!==(t=o.sections)&&void 0!==t?t:r.b}}return{defaultSection:r.a,sections:r.b}}(),reducers:{setDefaultSection:(e,t)=>Object.assign(Object.assign({},e),{defaultSection:t.payload}),setPlayersSections:(e,t)=>{let n=-1;return Object.assign(Object.assign({},e),{sections:[...t.payload.map((t,r)=>(t.id===e.defaultSection&&(n=r),Object.assign(Object.assign({},t),{id:r})))],defaultSection:n})},setPlayersSectionsTitle:(e,t)=>Object.assign(Object.assign({},e),{sections:[...e.sections.map((e,n)=>n===t.payload.index?Object.assign(Object.assign({},e),{title:t.payload.title}):e)]}),setPlayersFromSection:(e,t)=>Object.assign(Object.assign({},e),{sections:[...e.sections.map(e=>e.id===t.payload.sectionId?Object.assign(Object.assign({},e),{players:t.payload.players}):e)]}),resetPlayersSectionsPositions:e=>Object.assign(Object.assign({},e),{sections:s(e.defaultSection,e.sections)}),resetPlayersSections:()=>({defaultSection:r.a,sections:[...r.b.map(e=>e)]})}}),{setDefaultSection:c,setPlayersSections:l,setPlayersSectionsTitle:d,setPlayersFromSection:u,resetPlayersSectionsPositions:p,resetPlayersSections:m}=i.actions,b=e=>e.PlayersSections.defaultSection,f=e=>e.PlayersSections.sections;t.a=i},17:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));const r=[{id:0,title:"main.lists.innocent",players:[]},{id:1,title:"main.lists.suspicious",players:[]},{id:2,title:"main.lists.dead",players:[]},{id:3,title:"main.lists.usebutton",players:[]},{id:4,title:"main.lists.unknown",players:[{id:"Brown",playerName:"",color:"brown"},{id:"Red",playerName:"",color:"red"},{id:"Orange",playerName:"",color:"orange"},{id:"Yellow",playerName:"",color:"yellow"},{id:"Lime",playerName:"",color:"lime"},{id:"Green",playerName:"",color:"green"},{id:"Cyan",playerName:"",color:"cyan"},{id:"Blue",playerName:"",color:"blue"},{id:"Purple",playerName:"",color:"purple"},{id:"Pink",playerName:"",color:"pink"},{id:"White",playerName:"",color:"white"},{id:"Black",playerName:"",color:"black"}]},{id:5,title:"main.lists.unused",players:[]}],o=4},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r={showNames:!0,isColorBlind:!1}},20:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d}));var r=n(6),o=n(3);const a=Object(r.b)({name:"Device",initialState:{isMobile:window.innerWidth<=o.a,orientation:window.innerHeight>window.innerWidth?"portrait":"landscape"},reducers:{setIsMobile:(e,t)=>Object.assign(Object.assign({},e),{isMobile:t.payload}),setOrientation:(e,t)=>Object.assign(Object.assign({},e),{orientation:t.payload}),resetDevice:()=>({isMobile:window.innerWidth<=o.a,orientation:window.innerHeight>window.innerWidth?"portrait":"landscape"})}}),{setIsMobile:s,setOrientation:i,resetDevice:c}=a.actions,l=e=>e.Device.isMobile,d=e=>e.Device.orientation;t.a=a},3:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));const r="1.0.0-beta.0",o=846,a="fusliez-notes-"},35:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n(6);const o=Object(r.b)({name:"PlayerEditLock",initialState:!1,reducers:{setPlayerEditLock:(e,t)=>t.payload,togglePlayerEditLock:e=>!e,resetLock:()=>!1}}),{setPlayerEditLock:a,togglePlayerEditLock:s,resetLock:i}=o.actions,c=e=>e.PlayerEditLock;t.a=o},36:function(e,t,n){"use strict";n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return p}));var r=n(6);const o={currentMap:"TheSkeld",characters:[{id:"brown",x:0,y:0},{id:"red",x:0,y:0},{id:"orange",x:0,y:0},{id:"yellow",x:0,y:0},{id:"lime",x:0,y:0},{id:"green",x:0,y:0},{id:"cyan",x:0,y:0},{id:"blue",x:0,y:0},{id:"purple",x:0,y:0},{id:"pink",x:0,y:0},{id:"white",x:0,y:0},{id:"black",x:0,y:0}]},a=Object(r.b)({name:"Maps",initialState:o,reducers:{setCurrentMap:(e,t)=>Object.assign(Object.assign({},e),{currentMap:t.payload}),setCharactersPositions:(e,t)=>Object.assign(Object.assign({},e),{characters:t.payload}),setCharacterPosition:(e,t)=>Object.assign(Object.assign({},e),{characters:[...e.characters.map(e=>e.id===t.payload.id?Object.assign({},t.payload):e)]}),resetCharacters:e=>Object.assign(Object.assign({},e),{characters:[...o.characters.map(e=>Object.assign({},e))]}),reset:()=>({currentMap:o.currentMap,characters:[...o.characters.map(e=>Object.assign({},e))]})}}),{setCurrentMap:s,setCharactersPositions:i,setCharacterPosition:c,resetCharacters:l,reset:d}=a.actions,u=e=>e.Maps.currentMap,p=e=>e.Maps.characters;t.a=a},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));const r={fontFamily:"Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",baseFontSize:16,textColorPrimary:"#eeeeee",textColorSecondary:"#ffffff",backgroundColorPrimary:"#202225",backgroundColorSecondary:"#282b2f",linkColor:"#9EC4D5",linkColorHover:"#C2D2E3",dangerColor:"#8B0000",dangerColorHover:"#be0000",activeColor:"#667c84",borderColor:"#36383a",crewmateColorPrimary:"#008dfc",crewmateColorSecondary:"#30a4ff",imposterColorPrimary:"#af1211",imposterColorSecondary:"#dd1716",neutralColor:"#8d86b7"},o={black:{base:"#3F484E",dark:"#1E1F25"},blue:{base:"#132FD2",dark:"#09158E"},brown:{base:"#72491E",dark:"#5E2614"},cyan:{base:"#39FEDB",dark:"#24A9BE"},green:{base:"#127F2D",dark:"#0A4D2D"},lime:{base:"#50EF3A",dark:"#16A843"},orange:{base:"#EF7D0E",dark:"#B53F15"},pink:{base:"#ED53B9",dark:"#AC2CAD"},purple:{base:"#6B30BC",dark:"#3C177C"},red:{base:"#C51111",dark:"#7B0838"},white:{base:"#D5E0EF",dark:"#8396BF"},yellow:{base:"#F5F558",dark:"#C38821"}}},4:function(e,t,n){"use strict";n.d(t,"p",(function(){return i})),n.d(t,"k",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"o",(function(){return d})),n.d(t,"j",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"r",(function(){return m})),n.d(t,"m",(function(){return b})),n.d(t,"d",(function(){return f})),n.d(t,"q",(function(){return g})),n.d(t,"l",(function(){return y})),n.d(t,"c",(function(){return w})),n.d(t,"n",(function(){return h})),n.d(t,"g",(function(){return O})),n.d(t,"f",(function(){return j})),n.d(t,"i",(function(){return S})),n.d(t,"h",(function(){return v}));var r=n(6),o=n(12),a=n(3);const s=Object(r.b)({name:"Scores",initialState:function(){var e,t,n,r;const s=localStorage.getItem(a.b+"scores");if(s){const a=JSON.parse(s);return{crewmateWins:null!==(e=a.crewmateWins)&&void 0!==e?e:o.a.crewmateWins,crewmateLosses:null!==(t=a.crewmateLosses)&&void 0!==t?t:o.a.crewmateLosses,impostorWins:null!==(n=a.impostorWins)&&void 0!==n?n:o.a.impostorWins,impostorLosses:null!==(r=a.impostorLosses)&&void 0!==r?r:o.a.impostorLosses}}return o.a}(),reducers:{setCrewmateWins:(e,t)=>Object.assign(Object.assign({},e),{crewmateWins:t.payload}),incrementCrewmateWins:e=>Object.assign(Object.assign({},e),{crewmateWins:e.crewmateWins+1}),decrementCrewmateWins:e=>Object.assign(Object.assign({},e),{crewmateWins:e.crewmateWins?e.crewmateWins-1:0}),setCrewmateLosses:(e,t)=>Object.assign(Object.assign({},e),{crewmateLosses:t.payload}),incrementCrewmateLosses:e=>Object.assign(Object.assign({},e),{crewmateLosses:e.crewmateLosses+1}),decrementCrewmateLosses:e=>Object.assign(Object.assign({},e),{crewmateLosses:e.crewmateLosses?e.crewmateLosses-1:0}),setImpostorWins:(e,t)=>Object.assign(Object.assign({},e),{impostorWins:t.payload}),incrementImpostorWins:e=>Object.assign(Object.assign({},e),{impostorWins:e.impostorWins+1}),decrementImpostorWins:e=>Object.assign(Object.assign({},e),{impostorWins:e.impostorWins?e.impostorWins-1:0}),setImpostorLosses:(e,t)=>Object.assign(Object.assign({},e),{impostorLosses:t.payload}),incrementImpostorLosses:e=>Object.assign(Object.assign({},e),{impostorLosses:e.impostorLosses+1}),decrementImpostorLosses:e=>Object.assign(Object.assign({},e),{impostorLosses:e.impostorLosses?e.impostorLosses-1:0}),resetScores:()=>Object.assign({},o.a)}}),{setCrewmateWins:i,incrementCrewmateWins:c,decrementCrewmateWins:l,setCrewmateLosses:d,incrementCrewmateLosses:u,decrementCrewmateLosses:p,setImpostorWins:m,incrementImpostorWins:b,decrementImpostorWins:f,setImpostorLosses:g,incrementImpostorLosses:y,decrementImpostorLosses:w,resetScores:h}=s.actions,O=e=>e.Scores.crewmateWins,j=e=>e.Scores.crewmateLosses,S=e=>e.Scores.impostorWins,v=e=>e.Scores.impostorLosses;t.e=s},80:function(e,t,n){"use strict";n.r(t);var r=n(40),o=n(42),a=n(34),s=n(27);a.a.use(o.a).use(r.a).use(s.e).init({fallbackLng:"en-US",debug:!0,load:"currentOnly",interpolation:{escapeValue:!1},backend:{loadPath:"./assets/locales/{{lng}}/{{ns}}.json"}});a.a;var i=n(15),c=n(38),l=n(3),d=n(81),u=n(20),p=n(22),m=n(0),b=n.n(m),f=Object(i.d)(e=>({"@global":{body:{backgroundColor:e.backgroundColorPrimary,color:e.textColorPrimary,fontFamily:e.fontFamily,fontSize:e.baseFontSize},input:{color:e.textColorPrimary,fontFamily:e.fontFamily},textarea:{backgroundColor:e.backgroundColorSecondary,color:e.textColorPrimary,border:"1px solid "+e.borderColor},a:{color:e.linkColor}},LayoutDisclaimer:{position:"absolute",bottom:0,padding:"0.5rem",textAlign:"center",backgroundColor:e.backgroundColorSecondary,zIndex:20,width:"100%"}}));const g=b.a.lazy(()=>Promise.all([n.e(2),n.e(1),n.e(0),n.e(5)]).then(n.bind(null,120))),y=b.a.lazy(()=>Promise.all([n.e(2),n.e(0),n.e(9)]).then(n.bind(null,121)));var w=function(){const[e,t]=b.a.useState(window.innerWidth),[n,r]=b.a.useState(localStorage.getItem(l.b+"disclaimer")),o=Object(p.c)(u.b),a=Object(p.c)(u.c),s=Object(p.b)(),{t:i,i18n:c}=Object(d.a)();f();let m=b.a.createElement(g,null);return b.a.useEffect(()=>{const e=localStorage.getItem(l.b+"version");if(null===e||e!==l.c){const e=localStorage.getItem(l.b+"data");if(e){const t=JSON.parse(e);localStorage.setItem(l.b+"notes",t.notes),localStorage.removeItem(l.b+"data")}}},[]),b.a.useEffect(()=>{const e=()=>{t(window.innerWidth),s(Object(u.d)(window.innerWidth<=l.a))};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[e]),b.a.useEffect(()=>{const e=()=>{s(Object(u.e)(window.innerHeight<window.innerWidth?"portrait":"landscape"))};return window.addEventListener("orientationchange",e),()=>{window.removeEventListener("orientationchange",e)}},[window,a]),o&&(m=b.a.createElement(y,null)),b.a.createElement(b.a.Fragment,null,m)},h=n(60),O=n(59),j=n(54),S=n(53),v=n(56),k=n(48),C=n(55),L=n(49),P=n(50),W=n(57),E=n(51),x=n(52),I=n(58),N=n(47),B=n.n(N),D=n(24);function F(){i.e.setup(Object(D.a)());const e=new i.b,t=i.e.createStyleSheet(B.a).attach(),n=i.e.createStyleSheet({"@global":{"*, *:before, *:after":{boxSizing:"inherit"},html:{boxSizing:"border-box",height:"100%"},body:{fontWeight:400,lineHeight:1.5,height:"100%"},"#root":{display:"flex",flexDirection:"column",height:"100%",maxWidth:"1920px",margin:"0 auto",width:"100vw",overflowX:"hidden"},footer:{textAlign:"center",fontSize:"smaller"},h1:{fontSize:"2rem",margin:0},h2:{fontSize:"1.75rem",margin:".5rem 0",fontWeight:"500",lineHeight:"1.2"},h3:{margin:0},h4:{margin:".5rem 0"},img:{maxWidth:"100%",height:"auto"},input:{backgroundColor:"transparent",fontWeight:400,appearance:"none",border:"none",boxShadow:"none"},"input::-webkit-outer-spin-button,input::-webkit-inner-spin-button":{"-webkit-appearance":"none",margin:0},"input[type=number]":{"-moz-appearance":"textfield"},textarea:{fontFamily:"inherit",padding:".375rem .75rem",borderRadius:"0.5rem"},a:{textDecoration:"none","&:hover":{textDecoration:"underline"},"&:focus":{textDecoration:"underline"}},ul:{marginTop:0},li:{fontSize:"1rem"},".sr-only":{border:0,clip:"rect(0, 0, 0, 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px"}}}).attach();return e.add(t),e.add(n),e}var M=n(39),z=n(6),A=n(36),H=n(35),J=n(17),T=n(13);var U=n(4),_=n(12);var q=n(9),R=n(19);var G=Object(z.a)({reducer:{Settings:q.a.reducer,Device:u.a.reducer,Scores:U.e.reducer,PlayerEditLock:H.a.reducer,PlayersSections:T.a.reducer,Maps:A.a.reducer},middleware:[...Object(z.c)(),e=>t=>n=>{const r=e.getState();let o=Object(q.c)(r),a=Object(q.b)(r),s=!0;switch(n.type){case q.f.type:o=n.payload;break;case q.h.type:o=!Object(q.c)(r);break;case q.e.type:a=n.payload;break;case q.g.type:a=!Object(q.b)(r);break;case q.d.type:o=R.a.showNames,a=R.a.isColorBlind;break;default:s=!1}return s&&localStorage.setItem(l.b+"settings",JSON.stringify({showNames:o,isColorBlind:a})),t(n)},e=>t=>n=>{const r=e.getState();let o=Object(T.b)(r),a=Object(T.c)(r).map(e=>({id:e.id,title:e.title,players:e.players.map(e=>({id:e.id,playerName:e.playerName,color:e.color}))})),s=!0;switch(n.type){case T.f.type:o=n.payload;break;case T.h.type:a=[...n.payload.map((e,t)=>(e.id===o&&(o=t),Object.assign(Object.assign({},e),{id:t})))];break;case T.i.type:a=a.map((e,t)=>t===n.payload.index?Object.assign(Object.assign({},e),{title:n.payload.title}):e);break;case T.g.type:a=a.map(e=>e.id===n.payload.sectionId?Object.assign(Object.assign({},e),{players:n.payload.players.map(e=>({id:e.id,playerName:e.playerName,color:e.color}))}):e);break;case T.e.type:const e=[];let t=[];for(const n of a)e.push(Object.assign(Object.assign({},n),{players:[]})),t=t.concat(n.players);e[o].players=t,a=e;break;case T.d.type:o=J.a,a=J.b;break;default:s=!1}return s&&localStorage.setItem(l.b+"sections",JSON.stringify({defaultSection:o,sections:a})),t(n)},e=>t=>n=>{const r=e.getState();let o=Object(U.g)(r),a=Object(U.f)(r),s=Object(U.i)(r),i=Object(U.h)(r),c=!0;switch(n.type){case U.p.type:o=n.payload;break;case U.k.type:o++;break;case U.b.type:o--,o<0&&(o=0);break;case U.o.type:a=n.payload;break;case U.j.type:a++;break;case U.a.type:a--,a<0&&(a=0);break;case U.r.type:s=n.payload;break;case U.m.type:s++;break;case U.d.type:s--,s<0&&(s=0);break;case U.q.type:i=n.paylaod;break;case U.l.type:i++;break;case U.c.type:i--;break;case U.n.type:o=_.a.crewmateWins,a=_.a.crewmateLosses,s=_.a.impostorWins,i=_.a.impostorLosses;break;default:c=!1}return c&&localStorage.setItem(l.b+"scores",JSON.stringify({crewmateWins:o,crewmateLosses:a,impostorWins:s,impostorLosses:i})),t(n)}]});M.b.add(k.faHeart,L.faMinus,P.faPlus,E.faTimes,x.faUserAstronaut,S.faEdit,j.faCompactDisc,C.faMap,v.faEllipsisH,W.faSort,I.faUsers,O.faArrowRight,h.faArrowLeft);var V=n(31),X=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function s(e){try{c(r.next(e))}catch(e){a(e)}}function i(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}c((r=r.apply(e,t||[])).next())}))};n.n(V).a.render(b.a.createElement((function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement(p.a,{store:G},b.a.createElement(i.a,{registry:F()},b.a.createElement(i.c,{theme:c.b},b.a.createElement(b.a.Suspense,{fallback:"Loading..."},b.a.createElement(w,null))))))}),null),document.getElementById("root"));const Y=()=>{const e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")};window.addEventListener("load",Y),window.addEventListener("resize",Y);X(void 0,void 0,void 0,(function*(){"wakeLock"in navigator&&(yield null===navigator||void 0===navigator?void 0:navigator.wakeLock.request("screen"))})),document.addEventListener("visibilitychange",()=>X(void 0,void 0,void 0,(function*(){"wakeLock"in navigator&&"visible"===document.visibilityState&&(yield null===navigator||void 0===navigator?void 0:navigator.wakeLock.request("screen"))})))},9:function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"h",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(6),o=n(19),a=n(3);const s=Object(r.b)({name:"Scores",initialState:function(){var e,t;const n=localStorage.getItem(a.b+"settings");if(n){const r=JSON.parse(n);return{showNames:null!==(e=r.showNames)&&void 0!==e?e:o.a.showNames,isColorBlind:null!==(t=r.isColorBlind)&&void 0!==t?t:o.a.isColorBlind}}return o.a}(),reducers:{setShowNames:(e,t)=>Object.assign(Object.assign({},e),{showNames:t.payload}),toggleShowNames:e=>Object.assign(Object.assign({},e),{showNames:!e.showNames}),setIsColorBlind:(e,t)=>Object.assign(Object.assign({},e),{isColorBlind:t.payload}),toggleIsColorBlind:e=>Object.assign(Object.assign({},e),{isColorBlind:!e.isColorBlind}),resetSettings:()=>Object.assign({},o.a)}}),{setShowNames:i,toggleShowNames:c,setIsColorBlind:l,toggleIsColorBlind:d,resetSettings:u}=s.actions,p=e=>e.Settings.showNames,m=e=>e.Settings.isColorBlind;t.a=s}});