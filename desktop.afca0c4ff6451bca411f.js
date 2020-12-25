(window.webpackJsonp=window.webpackJsonp||[]).push([[5,8,10,11],{103:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(13),o=a(22),c=a(82),s=a(0),l=a.n(s),i=a(15),m=Object(i.d)(e=>({Score:{backgroundColor:e.backgroundColorSecondary,color:e.textColorPrimary,borderTop:"1px solid "+e.borderColor,borderBottom:"1px solid "+e.borderColor,display:"block",fontSize:"1.25rem",fontWeight:600,height:"100%",padding:"0 0.5rem",textAlign:"center",appearance:"textfield",width:"2rem"}})),p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};var u=function(e){const t=m(),a=p(e,[]);return l.a.createElement("input",Object.assign({type:"number",min:0,className:t.Score},a))},d=a(84),f=Object(i.d)(e=>({WinsLossesButtonContainer:{alignItems:"center",display:"flex",flex:1,position:"relative",justifyContent:"space-between",height:"100%",width:"100%",margin:"0.25rem 0"},winsLossesButton:t=>({margin:0,fontSize:"0.75rem",padding:"0.375rem .5rem",backgroundColor:`rgba(${Object(d.c)(t.buttonBackgroundColor)}, 0.5)`,color:e.textColorPrimary,"&:hover":{backgroundColor:`rgba(${Object(d.c)(t.buttonBackgroundColorHover)}, 0.5)`,color:e.textColorSecondary}}),winsLossesButtonLeft:{borderRadius:"6px 0 0 6px"},winsLossesButtonRight:{borderRadius:"0 6px 6px 0"}})),b=a(83);var g=function(e){const{buttonBackgroundColor:t,buttonBackgroundColorHover:a,decrement:n,increment:r,score:o,setScore:s}=e,i=f({buttonBackgroundColor:t,buttonBackgroundColorHover:a});return l.a.createElement("div",{className:i.WinsLossesButtonContainer},l.a.createElement(c.b,{onClick:()=>n(),className:`${i.winsLossesButton} ${i.winsLossesButtonLeft}`},l.a.createElement(b.a,{icon:"minus"})),l.a.createElement(u,{value:o,onChange:e=>s(parseInt(e.currentTarget.value))}),l.a.createElement(c.b,{onClick:()=>r(),className:`${i.winsLossesButton} ${i.winsLossesButtonRight}`},l.a.createElement(b.a,{icon:"plus"})))},y=a(20),x=a(36),h=a(35),E=Object(i.d)(e=>({ScoreControls:e=>({flex:e.isMobile?"1 0 16rem":"0 0 auto",maxWidth:e.isMobile?"20rem":"none",marginBottom:e.isMobile?0:"1rem"}),ScoreButtonsLayout:e=>({display:"flex",marginTop:e.isMobile?"1rem":"0.5rem",justifyContent:"space-between"}),ScoreButtonsColumn:{alignItems:"flex-start",display:"flex",flex:"0 0 auto",flexDirection:"column",justifyContent:"space-around",width:"auto",maxWidth:"100%",padding:"0 0.25rem"},ScoreButtonsLabel:e=>({letterSpacing:"0.05rem",fontSize:e.isMobile?"0.75rem":"0.875rem",fontWeight:500}),ScoreButtonsHeader:e=>({fontSize:e.isMobile?"0.875rem":"1rem",letterSpacing:"0.05rem",fontWeight:500,textAlign:"center",width:"100%"}),ScoreOptions:{display:"flex",flexWrap:"wrap",margin:"1rem 0 0"},ScoreOptionButton:{flex:"1 0 8rem",margin:"0.25rem"}})),v=a(81);t.default=function(){const{t:e}=Object(v.a)(),t=Object(i.f)(),a=Object(o.c)(n.g),s=Object(o.c)(n.f),m=Object(o.c)(n.i),p=Object(o.c)(n.h),u=Object(o.c)(y.b),d=E({isMobile:u}),f=Object(o.b)();return l.a.createElement("div",{className:d.ScoreControls},l.a.createElement("div",{className:d.ScoreButtonsLayout},l.a.createElement("div",{className:d.ScoreButtonsColumn},l.a.createElement("h4",{className:d.ScoreButtonsLabel}," "),l.a.createElement("h4",{className:d.ScoreButtonsLabel},e("controls.crewmate")),l.a.createElement("h4",{className:d.ScoreButtonsLabel},e("controls.impostor"))),l.a.createElement("div",{className:d.ScoreButtonsColumn},l.a.createElement("h4",{className:d.ScoreButtonsHeader},e("controls.wins")),l.a.createElement(g,{buttonBackgroundColor:t.crewmateColorPrimary,buttonBackgroundColorHover:t.crewmateColorSecondary,decrement:()=>f(Object(n.b)()),increment:()=>f(Object(n.k)()),score:a,setScore:e=>f(Object(n.p)(e))}),l.a.createElement(g,{buttonBackgroundColor:t.imposterColorPrimary,buttonBackgroundColorHover:t.imposterColorSecondary,decrement:()=>f(Object(n.d)()),increment:()=>f(Object(n.m)()),score:m,setScore:e=>f(Object(n.r)(e))})),l.a.createElement("div",{className:d.ScoreButtonsColumn},l.a.createElement("h4",{className:d.ScoreButtonsHeader},e("controls.losses")),l.a.createElement(g,{buttonBackgroundColor:t.crewmateColorPrimary,buttonBackgroundColorHover:t.crewmateColorSecondary,decrement:()=>f(Object(n.a)()),increment:()=>f(Object(n.j)()),score:s,setScore:e=>f(Object(n.o)(e))}),l.a.createElement(g,{buttonBackgroundColor:t.imposterColorPrimary,buttonBackgroundColorHover:t.imposterColorSecondary,decrement:()=>f(Object(n.c)()),increment:()=>f(Object(n.l)()),score:p,setScore:e=>f(Object(n.q)(e))}))),l.a.createElement("div",{className:d.ScoreOptions},l.a.createElement(c.b,{className:d.ScoreOptionButton,onClick:()=>f(Object(n.n)())},e("controls.resetScores")),!u&&l.a.createElement(c.b,{className:d.ScoreOptionButton,onClick:()=>f(Object(r.e)())},e("controls.resetPositions")),!u&&l.a.createElement(c.b,{className:d.ScoreOptionButton,danger:!0,onClick:()=>(f(Object(n.n)()),f(Object(r.d)()),f(Object(x.d)()),void f(Object(h.c)()))},e("controls.resetAll"))))}},104:function(e,t,a){"use strict";a.r(t);var n=a(36),r=a(20),o=a(22),c=a(82),s=a(99),l=a.n(s),i=a(0),m=a.n(i),p=a(81);function u(e){const{t:t}=Object(p.a)();return m.a.createElement("svg",Object.assign({viewBox:"0 0 1366 768"},e),m.a.createElement("title",null,"MiraHq"),m.a.createElement("image",{href:"assets/images/Mirahq.jpg"}),m.a.createElement("text",{y:155,x:812.5},t("maps.greenhouse")),m.a.createElement("text",{y:254,x:949.5},t("maps.admin")),m.a.createElement("text",{y:232,x:784.5},t("maps.office")),m.a.createElement("text",{transform:"rotate(45.439 727.06 812.293) scale(.78224 1)",y:551.511,x:705.185},t("maps.communications")),m.a.createElement("text",{transform:"rotate(67.008 600.961 652.111) scale(.83183 1)",y:580.612,x:590.578},t("maps.lockerRoom")),m.a.createElement("text",{fontSize:28,y:666,x:778.5},t("maps.medBay")),m.a.createElement("text",{y:560,x:1054.5},t("maps.cafeteria")),m.a.createElement("text",{transform:"rotate(45 938.725 548.208)",fontSize:28,y:565,x:909.5},t("maps.storage")),m.a.createElement("text",{y:704,x:1077.5},t("maps.balcony")),m.a.createElement("text",{y:612,x:214.5},t("maps.launchpad")),m.a.createElement("text",{fontSize:28,y:400,x:408},t("maps.reactor")),m.a.createElement("text",{transform:"rotate(45 705.725 339.208)",y:420,x:653.5},t("maps.laboratory")),m.a.createElement("g",{className:"MapDescriptions"},m.a.createElement("text",{y:63,x:1140},t("maps.vents")),m.a.createElement("text",{y:98,x:1140},t("maps.ventConnections")),m.a.createElement("text",{y:135,x:1140},t("maps.wiringTasks")),m.a.createElement("text",{y:172,x:1140},t("maps.commonTasks"))))}function d(e){const{t:t}=Object(p.a)();return m.a.createElement("svg",Object.assign({viewBox:"0 0 1366 768"},e),m.a.createElement("title",null,"Polus"),m.a.createElement("image",{href:"assets/images/Polus.jpg"}),m.a.createElement("text",{y:375,x:244.5},t("maps.electrical")),m.a.createElement("text",{y:365,x:75.5},t("maps.security")),m.a.createElement("text",{y:433,x:865.5},t("maps.east")),m.a.createElement("text",{y:361,x:618.5},t("maps.storage")),m.a.createElement("text",{fontSize:32,y:260,x:994.5},t("maps.laboratory")),m.a.createElement("text",{fontSize:28,y:597,x:1035.5},t("maps.specimenRoom")),m.a.createElement("text",{transform:"rotate(45 684.608 655)",y:632,x:673.5},t("maps.admin")),m.a.createElement("text",{y:660,x:342.5},t("maps.weapons")),m.a.createElement("text",{transform:"rotate(45 424.608 494)",y:531,x:303.5},t("maps.communications")),m.a.createElement("text",{y:499,x:659.5},t("maps.office")),m.a.createElement("text",{y:500,x:71.5},t("maps.o2")),m.a.createElement("text",{y:428,x:409.5},t("maps.central")),m.a.createElement("text",{y:250,x:712.5},t("maps.northeast")),m.a.createElement("text",{y:632,x:475.5},t("maps.south")),m.a.createElement("text",{y:598,x:85.5},t("maps.southwest")),m.a.createElement("text",{y:248,x:285.5},t("maps.northwest")),m.a.createElement("g",{className:"MapDescriptions"},m.a.createElement("text",{fontSize:22,y:45,x:890},t("maps.vents")),m.a.createElement("text",{fontSize:22,y:77.5,x:890},t("maps.commonTasks")),m.a.createElement("text",{fontSize:22,y:110,x:890},t("maps.wiringTasks")),m.a.createElement("text",{fontSize:22,y:45,x:1110},t("maps.ventConnections")),m.a.createElement("text",{fontSize:22,y:77.5,x:1110},t("maps.securityCameras")),m.a.createElement("text",{fontSize:22,y:110,x:1110},t("maps.cameraZones"))))}function f(e){const{t:t}=Object(p.a)();return m.a.createElement("svg",Object.assign({viewBox:"0 0 1366 768"},e),m.a.createElement("title",null,"TheSkeld"),m.a.createElement("image",{href:"assets/images/TheSkeld.png"}))}var b=a(15),g=Object(b.d)(e=>({"@global":{image:{pointerEvents:"none"},text:{fontFamily:"Impact, Haettenschweiler, Franklin Gothic Bold, Charcoal, Helvetica Inserat, Bitstream Vera Sans Bold, Arial Black, sans serif",fontSize:"1.75rem",fill:"#ffffff",strokeWidth:"1px",stroke:"#000000",pointerEvents:"none"},".MapDescriptions":{"&>text":{fontFamily:e.fontFamily,fontSize:"1.25rem",strokeWidth:0}}},MapsPanel:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:"1rem"},MapsPanelMapsHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},MapsPanelMapsTitle:{fontSize:"1.25rem",fontWeight:500,letterSpacing:"0.05em",marginRight:"1rem",flex:"1 0 auto"},MapsPanelMapsToggle:e=>({display:e.isMobile?"flex":"inline-flex",width:e.isMobile?"100%":"auto",margin:"0 0.25rem"}),MapsPanelMapsToggleButton:{flex:"1 1 auto","&:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},MapsPanelMapsToggleButtonActive:{opacity:"0.5",cursor:"default","&:hover":{backgroundColor:e.linkColor}},MapsPanelMainContainer:{flex:1,display:"flex",flexDirection:"column",position:"relative"},MapsPanelMapContainer:{display:"contents",flex:1,backgroundColor:"#000000"},MapsPanelMap:{maxHeight:"calc(-16.5rem + 100vh)"},MapsPanelDraggableHeader:e=>({display:"flex",flexDirection:e.isMobile?"column":"row",justifyContent:"space-between",alignItems:"center",margin:"1rem 0","& h3":{fontSize:e.isMobile?"0.875rem":"1rem",fontWeight:500,letterSpacing:"0.05em",padding:"0.5rem 0"}}),MapsPanelMapPlayerIcons:{},MapsPanelMapPlayerIcon:e=>({width:e.isMobile?"1rem":"2rem",height:"auto",margin:"0.5rem 0.75rem","&:hover":{cursor:"grab"}})}));t.default=function(){const{t:e}=Object(p.a)(),t=Object(o.c)(r.b),a=Object(o.c)(r.c),s=Object(o.c)(n.b),i=Object(o.c)(n.c),b=Object(o.b)(),y=g({map:i,isMobile:t,orientation:a});let x=m.a.createElement(f,{className:y.MapsPanelMap});return"MiraHq"===i?x=m.a.createElement(u,{className:y.MapsPanelMap}):"Polus"===i&&(x=m.a.createElement(d,{className:y.MapsPanelMap})),m.a.createElement("div",{className:y.MapsPanel},m.a.createElement("div",{className:y.MapsPanelMapsHeader},!t&&m.a.createElement("h2",{className:y.MapsPanelMapsTitle},e("maps.title")),m.a.createElement("div",{className:y.MapsPanelMapsToggle},m.a.createElement(c.b,{className:y.MapsPanelMapsToggleButton,pressed:"TheSkeld"===i,onClick:()=>b(Object(n.f)("TheSkeld"))},"The Skeld"),m.a.createElement(c.b,{className:y.MapsPanelMapsToggleButton,pressed:"MiraHq"===i,onClick:()=>b(Object(n.f)("MiraHq"))},"Mira HQ"),m.a.createElement(c.b,{className:y.MapsPanelMapsToggleButton,pressed:"Polus"===i,onClick:()=>b(Object(n.f)("Polus"))},"Polus"))),m.a.createElement("div",{className:y.MapsPanelMainContainer,id:"MapsContainer"},m.a.createElement("div",{className:y.MapsPanelMapContainer},x),m.a.createElement("div",{className:y.MapsPanelDraggableHeader},m.a.createElement("h3",null,e("maps.dragInstructions")),m.a.createElement(c.b,{onClick:()=>b(Object(n.d)())},e("maps.removePlayers"))),m.a.createElement("div",{className:y.MapsPanelMapPlayerIcons},s.map(e=>m.a.createElement(l.a,{key:e.id,bounds:"#MapsContainer",position:{x:e.x,y:e.y},onStop:(t,a)=>{b(Object(n.e)({id:e.id,x:a.lastX,y:a.lastY}))}},m.a.createElement("img",{src:`assets/images/playerIcons/${e.id}.png`,className:y.MapsPanelMapPlayerIcon,onDrag:e=>e.stopPropagation(),draggable:!1}))))))}},105:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(82),o=a(3),c=a(0),s=a.n(c),l=a(22),i=a(15),m=Object(i.d)({NotesPanel:e=>({height:"100%",flexGrow:1,display:"flex",flexDirection:"column",padding:e.isMobile?"1rem":"0",width:"100%"}),NotesHeader:{display:"flex",marginBottom:"0.5rem","& h2":{fontSize:"1.25rem",fontWeight:500,letterSpacing:"0.05em",marginRight:"1rem",flex:"1 0 auto"}},NotesReset:{flex:"0 0 auto",alignSelf:"flex-start"},Notepad:{flex:"1 0 auto",marginBottom:"1rem",fontSize:"1.25rem",resize:"vertical"}}),p=a(81);t.default=function(){const e=o.b+"notes",{t:t}=Object(p.a)(),a=Object(l.c)(n.b),c=Object(l.c)(n.c),i=m({isMobile:a,orientation:c}),[u,d]=s.a.useState(localStorage.getItem(e)||"");return s.a.useEffect(()=>{localStorage.setItem(e,u)},[u]),s.a.createElement("div",{className:i.NotesPanel},!a&&s.a.createElement("div",{className:i.NotesHeader},s.a.createElement("h2",null,t("controls.notes")),s.a.createElement(r.b,{className:i.NotesReset,onClick:()=>{d("")}},t("controls.resetNotes"))),s.a.createElement("textarea",{className:i.Notepad,name:"notes",onChange:e=>{d(e.target.value)},value:u}),a&&s.a.createElement(r.b,{className:i.NotesReset,onClick:()=>{d("")}},t("controls.resetNotes")))}},120:function(e,t,a){"use strict";a.r(t);var n=a(82),r=a(3),o=a(105),c=a(0),s=a.n(c),l=a(103),i=a(15),m=Object(i.d)(e=>({ControlsContent:{display:"none",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",padding:"1rem",maxWidth:"22.5rem"},ControlsContentHeader:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignSelf:"stretch",padding:"0.5rem 0","& button":{margin:"0.25rem",flex:"1 1 auto",maxWidth:"100%"}},Divider:{width:"100%",border:0,borderBottom:"1px solid "+e.borderColor,marginBottom:"1rem"},scoreButtons:{display:"flex",flexDirection:"column",marginBottom:"0.5rem"},scoreButtonsSection:{alignItems:"center",display:"flex",justifyContent:"space-between",width:"100%"}})),p=a(81);const u=s.a.lazy(()=>a.e(12).then(a.bind(null,123))),d=s.a.lazy(()=>a.e(3).then(a.bind(null,124))),f=s.a.lazy(()=>a.e(4).then(a.bind(null,125)));var b=function(){const{t:e}=Object(p.a)(),t=m(),[a,c]=s.a.useState(!1),[i,b]=s.a.useState(!1),[g,y]=s.a.useState(!1);return s.a.useEffect(()=>{const e=localStorage.getItem(r.b+"version");null!==e&&e===r.c||c(!0),localStorage.setItem(r.b+"version",r.c)},[]),s.a.createElement("div",{id:"controls",className:t.ControlsContent},s.a.createElement(l.default,null),s.a.createElement("hr",{className:t.Divider}),s.a.createElement(o.default,null),s.a.createElement("hr",{className:t.Divider}),s.a.createElement("div",{className:t.ControlsContentHeader},s.a.createElement(n.b,{onClick:()=>b(!0)},e("menu.settings")),s.a.createElement(n.b,{onClick:()=>y(!0)},e("menu.about")),s.a.createElement(n.b,{onClick:()=>c(!0)},e("menu.changelog"))),s.a.createElement(u,{show:i,onClose:()=>b(!1)}),s.a.createElement(f,{show:a,onClose:()=>c(!1)}),s.a.createElement(d,{show:g,onClose:()=>y(!1)}))},g=a(83),y=a(97),x=Object(i.d)(e=>({Footer:{backgroundColor:e.backgroundColor,padding:"0.5rem"}}));var h=function(){const e=x(),{t:t,i18n:a}=Object(p.a)();return s.a.createElement(s.a.Fragment,null,s.a.createElement("footer",{style:{direction:a.dir()},className:e.Footer},s.a.createElement(y.a,{i18nKey:"footer.partOne"},"fusliez notes made with ",s.a.createElement(g.a,{icon:"heart"})," by the fuslie fam.")," ","|"," ",s.a.createElement("a",{href:"https://github.com/Kedyn/fusliez-notes",target:"_blank",rel:"noopener noreferrer"},t("footer.partTwo"))," ","|"," ",s.a.createElement("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSdrIUKoatKPmYTq1pxzX1jNtM9mYrBmG8sfkJFfl8NZ6EbjuA/viewform",target:"_blank",rel:"noopener noreferrer"},t("footer.partThree"))))},E=a(102),v=a(104),O=Object(i.d)(e=>({DesktopContent:{flexGrow:1,display:"flex"},DesktopDivider:{width:"1px",backgroundColor:e.borderColor},DesktopMapButton:{display:"none",width:"1rem",padding:"0.25rem",borderRadius:"0"}}));t.default=function(){const e=O(),[t,a]=s.a.useState(!1);return s.a.createElement(s.a.Fragment,null,s.a.createElement("main",{className:e.DesktopContent},!t&&s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,null),s.a.createElement("div",{className:e.DesktopDivider}),s.a.createElement(b,null)),s.a.createElement(n.b,{className:e.DesktopMapButton,onClick:()=>a(!t)},s.a.createElement(g.a,{icon:t?"arrow-right":"arrow-left",size:"xs"})),s.a.createElement(v.default,null)),s.a.createElement(h,null))}},86:function(e,t,a){var n=a(87);e.exports=function(e,t){if(null==e)return{};var a,r,o=n(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}},87:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},88:function(e,t){function a(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=a=function(e){return typeof e}:e.exports=a=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(t)}e.exports=a},89:function(e,t,a){e.exports={parse:a(90),stringify:a(93)}},90:function(e,t,a){var n=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,r=a(91),o=Object.create?Object.create(null):{};function c(e,t,a,n,r){var o=t.indexOf("<",n),c=t.slice(n,-1===o?void 0:o);/^\s*$/.test(c)&&(c=" "),(!r&&o>-1&&a+e.length>=0||" "!==c)&&e.push({type:"text",content:c})}e.exports=function(e,t){t||(t={}),t.components||(t.components=o);var a,s=[],l=-1,i=[],m={},p=!1;return e.replace(n,(function(n,o){if(p){if(n!=="</"+a.name+">")return;p=!1}var u,d="/"!==n.charAt(1),f=0===n.indexOf("\x3c!--"),b=o+n.length,g=e.charAt(b);d&&!f&&(l++,"tag"===(a=r(n)).type&&t.components[a.name]&&(a.type="component",p=!0),a.voidElement||p||!g||"<"===g||c(a.children,e,l,b,t.ignoreWhitespace),m[a.tagName]=a,0===l&&s.push(a),(u=i[l-1])&&u.children.push(a),i[l]=a),(f||!d||a.voidElement)&&(f||l--,!p&&"<"!==g&&g&&c(u=-1===l?s:i[l].children,e,l,b,t.ignoreWhitespace))})),!s.length&&e.length&&c(s,e,0,0,t.ignoreWhitespace),s}},91:function(e,t,a){var n=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,r=a(92);e.exports=function(e){var t,a=0,o=!0,c={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(n,(function(n){if("="===n)return o=!0,void a++;o?0===a?((r[n]||"/"===e.charAt(e.length-2))&&(c.voidElement=!0),c.name=n):(c.attrs[t]=n.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(c.attrs[t]=t),t=n),a++,o=!1})),c}},92:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},93:function(e,t){function a(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var a in e)t.push(a+'="'+e[a]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(a,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+a("",t)}),"")}},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(86),r=a.n(n),o=a(88),c=a.n(o),s=a(30),l=a.n(s),i=a(0),m=a.n(i),p=a(89),u=a.n(p),d=a(27),f=a(28);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t){if(!e)return!1;var a=e.props?e.props.children:e.children;return t?a.length>0:!!a}function x(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function h(e){return Array.isArray(e)?e:[e]}function E(e,t,a,n,r){if(""===t)return[];var o=n.transKeepBasicHtmlNodesFor||[],s=t&&new RegExp(o.join("|")).test(t);if(!e&&!s)return[t];var l={};!function e(t){h(t).forEach((function(t){"string"!=typeof t&&(y(t)?e(x(t)):"object"!==c()(t)||m.a.isValidElement(t)||Object.assign(l,t))}))}(e);var i=a.services.interpolator.interpolate(t,g(g({},l),r),a.language),p=u.a.parse("<0>".concat(i,"</0>"));function d(e,t,a){var n=x(e),r=b(n,t.children,a);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return m.a.isValidElement(e)}))}(n)&&0===r.length?n:r}function f(e,t,a,n){e.dummy&&(e.children=t),a.push(m.a.cloneElement(e,g(g({},e.props),{},{key:n}),t))}function b(t,a,r){var l=h(t);return h(a).reduce((function(t,a,i){var p,u,x,h=a.children&&a.children[0]&&a.children[0].content;if("tag"===a.type){var E=l[parseInt(a.name,10)];!E&&1===r.length&&r[0][a.name]&&(E=r[0][a.name]),E||(E={});var v=0!==Object.keys(a.attrs).length?(p={props:a.attrs},(x=g({},u=E)).props=Object.assign(p.props,u.props),x):E,O=m.a.isValidElement(v),j=O&&y(a,!0)&&!a.voidElement,S=s&&"object"===c()(v)&&v.dummy&&!O,C="object"===c()(e)&&null!==e&&Object.hasOwnProperty.call(e,a.name);if("string"==typeof v)t.push(v);else if(y(v)||j){f(v,d(v,a,r),t,i)}else if(S){var k=b(l,a.children,r);t.push(m.a.cloneElement(v,g(g({},v.props),{},{key:i}),k))}else if(Number.isNaN(parseFloat(a.name))){if(C)f(v,d(v,a,r),t,i);else if(n.transSupportBasicHtmlNodes&&o.indexOf(a.name)>-1)if(a.voidElement)t.push(m.a.createElement(a.name,{key:"".concat(a.name,"-").concat(i)}));else{var M=b(l,a.children,r);t.push(m.a.createElement(a.name,{key:"".concat(a.name,"-").concat(i)},M))}else if(a.voidElement)t.push("<".concat(a.name," />"));else{var w=b(l,a.children,r);t.push("<".concat(a.name,">").concat(w,"</").concat(a.name,">"))}}else if("object"!==c()(v)||O)1===a.children.length&&h?t.push(m.a.cloneElement(v,g(g({},v.props),{},{key:i}),h)):t.push(m.a.cloneElement(v,g(g({},v.props),{},{key:i})));else{var B=a.children[0]?h:null;B&&t.push(B)}}else"text"===a.type&&t.push(a.content);return t}),[])}return x(b([{dummy:!0,children:e}],p,h(e||[]))[0])}function v(e){var t=e.children,a=e.count,n=e.parent,o=e.i18nKey,s=e.tOptions,l=e.values,p=e.defaults,u=e.components,b=e.ns,y=e.i18n,x=e.t,v=r()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),O=Object(i.useContext)(d.a)||{},j=O.i18n,S=O.defaultNS,C=y||j||Object(d.d)();if(!C)return Object(f.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var k=x||C.t.bind(C)||function(e){return e},M=g(g({},Object(d.c)()),C.options&&C.options.react),w=b||k.ns||S||C.options&&C.options.defaultNS;w="string"==typeof w?[w]:w||["translation"];var B=p||function e(t,a){if(!t)return"";var n="",o=h(t),s=a.transKeepBasicHtmlNodesFor||[];return o.forEach((function(t,o){if("string"==typeof t)n+="".concat(t);else if(m.a.isValidElement(t)){var l=Object.keys(t.props).length,i=s.indexOf(t.type)>-1,p=t.props.children;if(!p&&i&&0===l)n+="<".concat(t.type,"/>");else if(p||i&&0===l)if(t.props.i18nIsDynamicList)n+="<".concat(o,"></").concat(o,">");else if(i&&1===l&&"string"==typeof p)n+="<".concat(t.type,">").concat(p,"</").concat(t.type,">");else{var u=e(p,a);n+="<".concat(o,">").concat(u,"</").concat(o,">")}else n+="<".concat(o,"></").concat(o,">")}else if("object"===c()(t)){var d=t.format,b=r()(t,["format"]),g=Object.keys(b);if(1===g.length){var y=d?"".concat(g[0],", ").concat(d):g[0];n+="{{".concat(y,"}}")}else Object(f.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(f.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),n}(t,M)||M.transEmptyNodeValue||o,N=M.hashTransKey,P=o||(N?N(B):B),z=l?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},D=g(g(g(g({},s),{},{count:a},l),z),{},{defaultValue:B,ns:w}),H=E(u||t,P?k(P,D):B,C,M,D),T=void 0!==n?n:M.defaultTransParent;return T?m.a.createElement(T,v,H):H}}}]);