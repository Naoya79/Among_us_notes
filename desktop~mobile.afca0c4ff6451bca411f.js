(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,r,t){"use strict";var a=t(35),o=t(13),n=t(22),l=t(82),c=t(9),i=t(20),s=t(0),m=t.n(s),d=t(84),b=t(15),u=Object(b.d)(e=>({ColorMenuCell:{display:"flex",flex:"0 0 25%",maxWidth:"25%",justifyContent:"center",alignItems:"center"},ColorMenuSwatch:r=>({display:"block",width:"100%",height:"2rem",borderRadius:"0.25rem",padding:0,margin:"0.125rem",border:`1px solid rgba(${Object(d.c)(e.textColorSecondary)}, 0.5)`,backgroundColor:`rgb(${Object(d.b)(r.targetColor,"base")})`,"&:hover":{borderRadius:"50%",cursor:"pointer",backgroundColor:`rgb(${Object(d.b)(r.targetColor,"base")})`}})}));var g=function(e){const{targetColor:r,swapPlayersColors:t}=e,a=u({targetColor:r});return m.a.createElement("div",{className:a.ColorMenuCell},m.a.createElement("button",{className:a.ColorMenuSwatch,onClick:()=>t(),title:r},m.a.createElement("span",{className:"sr-only"},r)))},p=Object(b.d)(e=>({root:{},ColorMenu:{alignItems:"center",background:e.backgroundColorPrimary,border:"1px solid "+e.borderColor,borderRadius:"0.25rem",boxShadow:"0 0 0.25rem black",bottom:"110%",display:"flex",flexWrap:"wrap",left:0,justifyContent:"space-between",position:"absolute",width:"100%",zIndex:10},isHidden:{display:"none"}}));var y=function(e){const{isMenuShowing:r,setIsMenuShowing:t,currentColor:a}=e,l=m.a.useRef(null),c=p(),i=Object(n.c)(o.c),s=Object(n.b)();return m.a.useEffect(()=>{function e(e){var r;l.current&&!(null===(r=null==l?void 0:l.current)||void 0===r?void 0:r.contains(e.target))&&t(!1)}return document.addEventListener("click",e,!0),document.addEventListener("drag",e,!0),()=>{document.removeEventListener("click",e,!0),document.removeEventListener("drag",e,!0)}},[l]),m.a.createElement("div",{ref:l,className:`${c.ColorMenu} ${r?"":c.isHidden}`},[{color:"brown"},{color:"red"},{color:"orange"},{color:"yellow"},{color:"lime"},{color:"green"},{color:"cyan"},{color:"blue"},{color:"purple"},{color:"pink"},{color:"white"},{color:"black"}].map(({color:e})=>m.a.createElement(g,{targetColor:e,key:e,swapPlayersColors:()=>((e,r)=>{if(e!==r){const t=[...i.map(t=>Object.assign(Object.assign({},t),{players:[...t.players.map(t=>Object.assign(Object.assign({},t),{color:t.color===e?r:t.color===r?e:t.color}))]}))];s(Object(o.h)(t))}t(!1)})(a,e)})))},f=t(85),C=t.n(f),h=Object(b.d)(e=>({Player:e=>({display:"flex",flexDirection:"column",alignItems:"stretch",flex:e.showNames||e.isColorBlind?"1 0 50%":"0 0 2.5rem",maxWidth:e.showNames||e.isColorBlind?"50%":"none"}),PlayerTile:r=>({alignItems:"center",backgroundColor:r.playerName||!r.showNames?`rgb(${Object(d.b)(r.color,"dark")})`:e.backgroundColorSecondary,border:"1px solid",borderColor:r.playerName||!r.showNames?`rgb(${Object(d.b)(r.color,"base")})`:e.borderColor,borderRadius:"0.25rem",boxShadow:"1px 1px 1px rgba(0,0,0,0.25)",display:"flex",justifyContent:"center",margin:"0.375rem",opacity:r.longPressed?"0.5":1,position:"relative",transition:"border-color 0.2s ease","&:hover":{borderColor:`rgba(${Object(d.c)(e.textColorSecondary)}, 0.25)`,cursor:r.isReadOnly?"grab":"pointer"}}),PlayerIcon:e=>({display:"flex",flex:e.showNames||!e.isColorBlind?"0 0 2.25rem":"1 0 auto",alignSelf:"stretch",width:e.showNames||!e.isColorBlind?"2.25rem":"auto",height:"2rem",justifyContent:"center",alignItems:"center",backgroundColor:e.playerName||!e.showNames?`rgb(${Object(d.b)(e.color,"base")})`:"transparent",backgroundRepeat:"no-repeat",backgroundSize:"1.75rem auto",backgroundPosition:"center 0.25rem","&:hover":{cursor:e.isReadOnly?"grab":e.showNames?"pointer":"grab"}}),PlayerName:r=>({flexGrow:1,flexBasis:"0",maxWidth:"100%",paddingLeft:"0.5rem",fontSize:"1.15rem",fontWeight:600,lineHeight:1.25,letterSpacing:"0.05rem",color:""!==r.playerName?Object(d.a)(Object(d.b)(r.color,"dark"),e):e.textColorPrimary,opacity:r.isReadOnly&&""===r.playerName?.5:1}),PlayerInput:r=>({color:Object(d.a)(Object(d.b)(r.color,"dark"),e),display:"block",fontSize:r.isMobile?"1rem":r.showNames?"1.15rem":"1rem",fontFamily:e.fontFamily,fontWeight:600,letterSpacing:"0.05rem",lineHeight:1.25,padding:"0.25rem 0",textAlign:"left",width:"100%","&::placeholder":{color:e.textColorPrimary,opacity:.5}}),PlayerHelpText:{textAlign:"center",fontSize:"0.75rem",overflowX:"hidden",letterSpacing:"0.05em",fontWeight:500,opacity:.7}})),v=t(81);var O=function(e){const{t:r}=Object(v.a)(),t=Object(n.c)(i.b),l=Object(n.c)(i.c),s=Object(n.c)(c.c),d=Object(n.c)(c.b),b=Object(n.c)(a.b),[u,g]=m.a.useState(!1),p=Object(n.b)(),f=m.a.useRef(null),O=h(Object.assign({showNames:s,isMobile:t,isColorBlind:d,orientation:l},e)),{color:j,playerName:w,section:x,index:E}=e;return m.a.createElement("div",{className:O.Player,id:j,title:j},m.a.createElement("div",{className:O.PlayerTile+" player-handle"},u&&!t&&!b&&m.a.createElement(y,{isMenuShowing:u,setIsMenuShowing:g,currentColor:j}),m.a.createElement("div",{className:C()(O.PlayerIcon,"player-handle"),onClick:()=>{b||s&&!t&&g(!u)},style:{backgroundImage:`url(assets/images/playerIcons/${j}.png)`}}),s&&m.a.createElement("div",{className:O.PlayerName},!b&&m.a.createElement("input",{type:"text",placeholder:r("main."+j),className:O.PlayerInput,onChange:e=>((e,r)=>{const t=x.players.map(e=>Object.assign({},e));t[e].playerName=r.currentTarget.value,p(Object(o.g)({sectionId:x.id,players:t}))})(E,e),onKeyPress:e=>{var r,t,a,o,n,l,c,i,s,m;if("Enter"===e.key){const e=f.current,d=null!==(o=null===(a=null===(t=null===(r=e.parentElement)||void 0===r?void 0:r.parentElement)||void 0===t?void 0:t.parentElement)||void 0===a?void 0:a.nextElementSibling)&&void 0!==o?o:null===(i=null===(c=null===(l=null===(n=e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===l?void 0:l.parentElement)||void 0===c?void 0:c.parentElement)||void 0===i?void 0:i.firstElementChild,b=null===(m=null===(s=null==d?void 0:d.lastChild)||void 0===s?void 0:s.lastChild)||void 0===m?void 0:m.firstChild;null==b||b.select()}},value:w,ref:f}),b&&m.a.createElement(m.a.Fragment,null,""!==w?w:r("main."+j)))),d&&m.a.createElement("div",{className:O.PlayerHelpText},r("main."+j)))},j=t(98),w=Object(b.d)(e=>({PlayerSection:{},PlayerSectionTitle:{fontSize:"1rem",letterSpacing:"0.05rem",fontWeight:600},PlayerSectionArea:{display:"flex",flexWrap:"wrap",minHeight:"2rem",justifyContent:"flex-start",padding:"0.5rem",backgroundColor:e.backgroundColorSecondary,borderRadius:"0.25rem"}}));var x=function(e){const r=Object(n.c)(c.c),t=Object(n.c)(i.b),[a,l]=m.a.useState(!1),s=w({showNames:r}),{section:d}=e,{t:b}=Object(v.a)(),u=Object(n.b)();return m.a.useEffect(()=>{t||(a?document.querySelector("body").classList.add("dragging"):document.querySelector("body").classList.remove("dragging"))},[a]),m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:s.PlayerSection},m.a.createElement("h2",{className:s.PlayerSectionTitle},b(d.title)),m.a.createElement(j.ReactSortable,{group:"players",handle:".player-handle",delayOnTouchOnly:t,filter:t?"input":"",preventOnFilter:!1,delay:t?10:0,touchStartThreshold:3,list:d.players,setList:e=>{u(Object(o.g)({sectionId:d.id,players:e}))},className:s.PlayerSectionArea,forceFallback:!0,onChoose:()=>l(!0),onUnchoose:()=>l(!1)},d.players.map(({color:e,playerName:r},t)=>m.a.createElement(O,{key:t,color:e,playerName:r,section:d,index:t})))))},E=Object(b.d)({PlayersPanel:{marginBottom:"1rem"},PlayersControls:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",padding:"0.5rem 0","& button":{margin:"0.25rem",flex:"1 1 auto",maxWidth:"100%"}}});var P=function(){const e=Object(n.c)(c.c),r=Object(n.c)(a.b),t=Object(n.c)(i.b),s=Object(n.c)(o.c),d=Object(n.b)(),{t:b}=Object(v.a)(),u=E({isMobile:t});return m.a.createElement("div",{className:u.PlayersPanel},s.map(e=>m.a.createElement(x,{section:e,key:e.id})),m.a.createElement("div",{className:u.PlayersControls},e&&m.a.createElement(l.b,{onClick:()=>d(Object(a.d)())},b(r?"controls.unlockEditing":"controls.lockEditing")),t&&m.a.createElement(l.b,{onClick:()=>d(Object(o.e)())},b("controls.resetPositions"))))},S=t(117),k=Object(b.d)({MainContent:e=>({margin:e.isMobile?"1rem":0,padding:e.isMobile?0:"1rem",maxWidth:e.isMobile?"none":"22.5rem",height:"100%"})});r.a=function(){const e=Object(n.c)(i.b),r=k({isMobile:e});return m.a.createElement("div",{id:"main",className:r.MainContent},!e&&m.a.createElement(S.default,null),m.a.createElement(P,null))}},117:function(e,r,t){"use strict";t.r(r);var a=t(4),o=(t(108),t(20)),n=t(112),l=t(0),c=t.n(l),i=t(84),s=t(22),m=t(15),d=Object(m.d)({CircularBar:e=>({fontSize:e.isMobile?"0.5rem":"1rem"})});var b=function(e){const{progress:r,color:t,children:a}=e,l=Object(s.c)(o.b),m=Object(s.c)(o.c),b=d({color:t,progress:r,isMobile:l,orientation:m});return c.a.createElement(n.a,{value:r,className:b.CircularBar,counterClockwise:!0,styles:{path:{stroke:t},trail:{stroke:function(e){return`rgba(${Object(i.c)(e)}, 0.3)`}(String(t))}}},a)},u=t(85),g=t.n(u),p=Object(m.d)(e=>({ProgressBar:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"0 0.25rem"},ProgressBarTitle:{fontSize:"0.875rem",letterSpacing:"0.05rem",fontWeight:600,marginBottom:"0.5rem"},ProgressBarTitleOverall:{fontSize:"1.25rem"},ProgressBarTitleImpostor:{color:Object(i.d)(e.imposterColorPrimary,80)},ProgressBarTitleCrewmate:{color:Object(i.d)(e.crewmateColorPrimary,30)},CirclePrimary:{width:"6rem",height:"6rem",display:"flex",flexDirection:"column",alignItems:"center"},CircleSecondary:{width:"5rem",height:"5rem",display:"flex",flexDirection:"column",alignItems:"center"},progress:{marginBottom:"0.5rem"},CirclePercentage:{fontSize:"0.75rem",fontWeight:600,lineHeight:1,letterSpacing:"0.05rem"},CirclePercentagePrimary:{fontSize:"1rem"},CircleScores:{fontSize:"0.75rem",letterSpacing:"0.05rem"},CircleScoresPrimary:{fontSize:"1rem"}})),y=t(81);var f=function(e){const{t:r,i18n:t}=Object(y.a)(),a=Object(m.f)(),o=p(),{overallRate:n,overallWins:l,overallLosses:i,crewmateRate:s,crewmateWins:d,crewmateLosses:u,impostorRate:f,impostorWins:C,impostorLosses:h}=e;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:o.ProgressBar},c.a.createElement("span",{className:g()(o.ProgressBarTitle,o.ProgressBarTitleCrewmate)},r("main.crewmate")),c.a.createElement("div",{className:o.CircleSecondary},c.a.createElement(b,{progress:s,color:a.crewmateColorPrimary,className:o.progress},c.a.createElement("span",{className:o.CirclePercentage},s+"%"),c.a.createElement("span",{style:{direction:t.dir()},className:o.CircleScores},`${d}${r("main.w")}-${u}${r("main.l")}`)))),c.a.createElement("div",{className:o.ProgressBar},c.a.createElement("span",{className:g()(o.ProgressBarTitle,o.ProgressBarTitleOverall)},r("main.overall")),c.a.createElement("div",{className:o.CirclePrimary},c.a.createElement(b,{progress:n,color:a.neutralColor,className:o.progress},c.a.createElement("span",{className:g()(o.CirclePercentage,o.CirclePercentagePrimary)},n+"%"),c.a.createElement("span",{style:{direction:t.dir()},className:g()(o.CircleScores,o.CircleScoresPrimary)},`${l}${r("main.w")}-${i}${r("main.l")}`)))),c.a.createElement("div",{className:o.ProgressBar},c.a.createElement("span",{className:g()(o.ProgressBarTitle,o.ProgressBarTitleImpostor)},r("main.impostor")),c.a.createElement("div",{className:o.CircleSecondary},c.a.createElement(b,{progress:f,color:a.imposterColorPrimary,className:o.progress},c.a.createElement("span",{className:o.CirclePercentage},f+"%"),c.a.createElement("span",{style:{direction:t.dir()},className:o.CircleScores},`${C}${r("main.w")}-${h}${r("main.l")}`)))))},C=Object(m.d)({ScoresPanel:{marginBottom:"1rem",alignItems:"center",display:"none",justifyContent:"space-between",flex:"1 0 16rem",maxWidth:"20rem"}});r.default=function(){const e=Object(s.c)(a.g),r=Object(s.c)(a.f),t=Object(s.c)(a.i),o=Object(s.c)(a.h),n=C(),l=(e,r)=>r>0?Math.floor(e/r*100):100,i=e||0,m=r||0,d=t||0,b=o||0,u=i+d,g=m+b,p=l(u,u+g),y=l(i,i+m),h=l(d,d+b);return c.a.createElement("div",{className:n.ScoresPanel},c.a.createElement(f,Object.assign({},{overallRate:p,overallWins:u,overallLosses:g,crewmateRate:y,crewmateWins:i,crewmateLosses:m,impostorRate:h,impostorWins:d,impostorLosses:b})))}},82:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var a=t(83),o=t(0),n=t.n(o),l=t(85),c=t.n(l),i=t(15),s=t(84),m=Object(i.d)(e=>({Button:{display:"inline-block",cursor:"pointer",textAlign:"center",border:0,padding:".5rem .75rem",fontFamily:e.fontFamily,fontWeight:600,borderRadius:"0.5rem",color:e.linkColor,transition:"all 0.2s ease",backgroundColor:`rgba(${Object(s.c)(e.linkColor)}, 0.15)`,boxShadow:"1px 1px 1px rgba(0,0,0,0.25)","&:hover:enabled":{color:e.linkColorHover,backgroundColor:`rgba(${Object(s.c)(e.linkColor)}, 0.25)`},"&:focus:not(:active)":{outline:"none",boxShadow:"0 0 0.25rem "+e.linkColor},"&:active:enabled":{boxShadow:"inset 1px 1px 1px rgba(0,0,0,0.5)",backgroundColor:e.backgroundColorSecondary}},danger:{backgroundColor:`rgba(${Object(s.c)(e.dangerColor)}, 0.5)`,color:e.textColorPrimary,"&:hover":{backgroundColor:`rgba(${Object(s.c)(e.dangerColorHover)}, 0.5)`,color:e.textColorSecondary}},fullWidth:{width:"100%"},pressed:{cursor:"default",backgroundColor:e.backgroundColorPrimary,boxShadow:"inset 1px 1px 1px rgba(0,0,0,0.5)","&:hover":{color:e.linkColor,backgroundColor:e.backgroundColorSecondary}},CloseButton:{width:"2rem",lineHeight:"2rem",height:"2rem",padding:0,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}})),d=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)r.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]])}return t};function b(e){const r=m(),{className:t,children:a,fullWidth:o,danger:l,pressed:i,onClick:s}=e,b=d(e,["className","children","fullWidth","danger","pressed","onClick"]);return n.a.createElement("button",Object.assign({onClick:s,className:c()({[r.Button]:!0,[r.danger]:l,[r.pressed]:i,[r.fullWidth]:o},t)},b),a)}function u(e){const r=m(),{onClick:t}=e,o=d(e,["onClick"]);return n.a.createElement(b,Object.assign({onClick:t,className:r.CloseButton},o,{"aria-label":"Close"}),n.a.createElement(a.a,{icon:"times"}))}r.b=b},84:function(e,r,t){"use strict";t.d(r,"b",(function(){return o})),t.d(r,"c",(function(){return n})),t.d(r,"a",(function(){return l})),t.d(r,"d",(function(){return c}));var a=t(38);function o(e,r){return void 0!==a.a[e.toLowerCase()]?n("dark"===r?a.a[e.toLowerCase()].dark:a.a[e.toLowerCase()].base):"0, 0, 0"}function n(e){let r=0,t=0,a=0;return e=e.replace("#",""),r=parseInt(e.slice(0,2),16),t=parseInt(e.slice(2,4),16),a=parseInt(e.slice(4,6),16),`${r},${t},${a}`}function l(e,r){return function(e){const r=e.split(",");return.2126*parseInt(r[0])+.7152*parseInt(r[1])+.0733*parseInt(r[2])}(e)>=140?r.backgroundColorSecondary:r.textColorSecondary}function c(e,r){let t=!1;"#"==e[0]&&(e=e.slice(1),t=!0);const a=parseInt(e,16);let o=(a>>16)+r;o>255?o=255:o<0&&(o=0);let n=(a>>8&255)+r;n>255?n=255:n<0&&(n=0);let l=(255&a)+r;return l>255?l=255:l<0&&(l=0),(t?"#":"")+(l|n<<8|o<<16).toString(16)}}}]);