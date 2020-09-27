(this["webpackJsonpmaz-calendar"]=this["webpackJsonpmaz-calendar"]||[]).push([[3],{140:function(e,t,n){e.exports=n(141)},141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),s=n(77),i=n.n(s)()(),u=document.getElementById("app-site");(function(){var e=n(198).default;o.a.render(r.a.createElement(e,{store:i,history:s.history}),u)})()},150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},198:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(50),o=n(19),s=n(11),i=n(33);t.default=function(e){var t=e.store,n=e.history;return r.a.createElement(o.a,{store:t},r.a.createElement(c.a,{history:n},r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",component:i.b}))))}},199:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ue})),n.d(t,"history",(function(){return ce}));var a=n(36),r=(n(92),n(130)),c=n(115),o=n(50),s=n(89),i=n(15),u=n(4),l={alertMessage:"",alertMessageFlag:null,loader:{actions:[]}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload,r=t.flag,c=e.loader,o=c.actions;switch(n){case u.c.SHOW_MESSAGE:return Object(i.a)(Object(i.a)({},e),{},{alertMessage:a,alertMessageFlag:r});case u.c.HIDE_MESSAGE:return Object(i.a)(Object(i.a)({},e),{},{alertMessage:"",alertMessageFlag:null});case u.c.START_LOADER:return Object(i.a)(Object(i.a)({},e),{},{loader:Object(i.a)(Object(i.a)({},c),{},{actions:[].concat(Object(s.a)(o),[a.action])})});case u.c.STOP_LOADER:return Object(i.a)(Object(i.a)({},e),{},{loader:Object(i.a)(Object(i.a)({},c),{},{actions:o.filter((function(e){return e.name!==a.name}))})});default:return e}},p={initURL:"",token:localStorage.getItem("token"),rememberMe:!1};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.a.INIT_URL:return Object(i.a)(Object(i.a)({},e),{},{initURL:t.payload});case u.a.GET_TOKEN_SILENTLY_SUCCESS:case u.a.SIGN_IN_SUCCESS:return Object(i.a)(Object(i.a)({},e),{},{token:t.payload.access});case u.a.SIGN_OUT_SUCCESS:return Object(i.a)(Object(i.a)({},e),{},{token:null,initURL:""});default:return e}},E={navCollapsed:!1,width:window.innerWidth},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@@router/LOCATION_CHANGE":return Object(i.a)(Object(i.a)({},e),{},{navCollapsed:!1});case u.d.TOGGLE_COLLAPSED_NAV:return Object(i.a)(Object(i.a)({},e),{},{navCollapsed:t.isNavCollapsed});case u.d.WINDOW_WIDTH:return Object(i.a)(Object(i.a)({},e),{},{width:t.width});default:return e}},b={events:[]};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.b.GET_EVENTS_SUCCESS:return Object(i.a)(Object(i.a)({},e),{},{events:t.payload});default:return e}},v=function(e){return Object(a.c)({router:Object(o.b)(e),theme:f,common:d,auth:m,calendar:h})},O=n(9),S=n.n(O),g=n(31),j=n(7),T=n(8),N=n(33),_={signIn:function(e){return N.a.post("/api/auth/jwt/create/",e).then((function(e){return 200!==e.status?Promise.reject(e):e.data}))},getTokenSilently:function(e){var t='mutation {\n            refreshToken(refreshToken: "'.concat(e,'") {\n                success,\n                errors,\n                token,\n            }\n        }');return N.a.post("/graphql",{query:t}).then((function(e){return 200!==e.status?Promise.reject(e):e.data.data}))},revokeRefreshToken:function(e){var t='mutation {\n            revokeToken(refreshToken: "'.concat(e,'") {\n                revoked\n            }\n        }');return N.a.post("/graphql",{query:t}).then((function(e){return 200!==e.status?Promise.reject(e):e.data.data}))}};var y={getEvents:function(){return N.a.get("/api/events").then((function(e){return e.data.errors?Promise.reject(e):e.data}))},createEvent:function(e){return N.a.post("/api/events/",e).then((function(e){return e.data.errors?Promise.reject(e):e.data}))},updateEvent:function(e){return N.a.patch("/api/events/",e).then((function(e){return e.data.errors?Promise.reject(e):e.data}))},deleteEvent:function(e){return N.a.delete("/api/events/",e).then((function(e){return e.data.errors?Promise.reject(e):e.data}))}};var x=n(45),k=n.n(x),w=S.a.mark(D),A=S.a.mark(R),L=S.a.mark(G),C=S.a.mark(V),I=S.a.mark(W),U=function(){var e=Object(g.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.signIn(t).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function D(e){var t,n,a;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.type,n=e.payload,r.prev=1,r.next=4,Object(j.d)(T.c.startLoader(t));case 4:return r.next=6,Object(j.b)(U,n);case 6:if(!(a=r.sent)){r.next=14;break}return localStorage.setItem("token",a.access),localStorage.setItem("refreshToken",a.refresh),r.next=12,Object(j.d)(T.a.signInSuccess(a));case 12:r.next=17;break;case 14:return"Something went wrong. Please try later.",r.next=17,Object(j.d)(T.c.showMessage("Something went wrong. Please try later.","error"));case 17:r.next=29;break;case 19:if(r.prev=19,r.t0=r.catch(1),"Error: Network Error"!==r.t0){r.next=26;break}return r.next=24,Object(j.d)(T.c.showMessage("Network Error, Please try later.","error"));case 24:r.next=29;break;case 26:if(!r.t0.response){r.next=29;break}return r.next=29,Object(j.d)(T.c.showMessage(r.t0.response.data.detail,"error"));case 29:return r.prev=29,r.next=32,Object(j.d)(T.c.stopLoader(t));case 32:return r.finish(29);case 33:case"end":return r.stop()}}),w,null,[[1,19,29,33]])}var M=function(){var e=Object(g.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.revokeRefreshToken(t).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function R(e){var t,n;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.type,a.prev=1,a.next=4,Object(j.d)(T.c.startLoader(t));case 4:return n=localStorage.getItem("refreshToken"),localStorage.removeItem("token"),localStorage.removeItem("refreshToken"),a.next=9,Object(j.d)(T.a.signOutSuccess());case 9:if(!n){a.next=12;break}return a.next=12,Object(j.b)(M,n);case 12:a.next=19;break;case 14:if(a.prev=14,a.t0=a.catch(1),!a.t0.response){a.next=19;break}return a.next=19,Object(j.d)(T.c.showMessage(a.t0.response.data.error,"error"));case 19:return a.prev=19,a.next=22,Object(j.d)(T.c.stopLoader(t));case 22:return a.finish(19);case 23:case"end":return a.stop()}}),A,null,[[1,14,19,23]])}function G(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.e)(u.a.SIGN_IN,D);case 2:return e.next=4,Object(j.e)(u.a.SIGN_OUT,R);case 4:case"end":return e.stop()}}),L)}var P=function(){var e=Object(g.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getTokenSilently(t).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function V(e){var t,n,a,r,c;return S.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.type,o.prev=1,o.next=4,Object(j.d)(T.c.startLoader(t));case 4:if(!(n=localStorage.getItem("refreshToken"))){o.next=20;break}return o.next=8,Object(j.b)(P,n);case 8:if(!(a=o.sent).refreshToken.success){o.next=15;break}return localStorage.setItem("token",a.refreshToken.token),o.next=13,Object(j.d)(T.a.getTokenSilentlySuccess(a.refreshToken));case 13:o.next=20;break;case 15:return r=a.refreshToken.errors.nonFieldErrors,c="",c=r?k.a.map(r,"message").join(" "):"Something went wrong. Please try later.",o.next=20,Object(j.d)(T.c.showMessage(c,"error"));case 20:o.next=27;break;case 22:if(o.prev=22,o.t0=o.catch(1),!o.t0.response){o.next=27;break}return o.next=27,Object(j.d)(T.c.showMessage(o.t0.response.data.error,"error"));case 27:return o.prev=27,o.next=30,Object(j.d)(T.c.stopLoader(t));case 30:return o.finish(27);case 31:case"end":return o.stop()}}),C,null,[[1,22,27,31]])}function W(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.e)(u.a.GET_TOKEN_SILENTLY,V);case 2:case"end":return e.stop()}}),I)}var H=n(22),z=S.a.mark(Q),F=S.a.mark($),Y=S.a.mark(ee),K=S.a.mark(te),q=S.a.mark(ne),B=function(){var e=Object(g.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getEvents(t).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(g.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.createEvent(t).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(g.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.updateEvent(t).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(g.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.deleteEvent(t).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function Q(e){var t,n,a;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.type,n=e.payload,r.prev=1,r.next=4,Object(j.d)(T.c.startLoader(t));case 4:return r.next=6,Object(j.b)(B,n);case 6:return a=r.sent,r.next=9,Object(j.d)(T.b.getEventsSuccess(a));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(1),r.next=15,Object(j.d)(T.c.showMessage(r.t0.response.data,"error"));case 15:return r.prev=15,r.next=18,Object(j.d)(T.c.stopLoader(t));case 18:return r.finish(15);case 19:case"end":return r.stop()}}),z,null,[[1,11,15,19]])}function $(e){var t,n,a;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.type,n=e.payload,r.prev=1,r.next=4,Object(j.d)(T.c.startLoader(t));case 4:return r.next=6,Object(j.b)(J,n);case 6:return a=r.sent,r.next=9,Object(j.d)(T.b.createEventSuccess(a));case 9:return r.next=11,Object(j.d)(Object(H.d)(u.b.URL_CALENDAR));case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(1),r.next=17,Object(j.d)(T.c.showMessage(r.t0.response.data,"error"));case 17:return r.prev=17,r.next=20,Object(j.d)(T.c.stopLoader(t));case 20:return r.finish(17);case 21:case"end":return r.stop()}}),F,null,[[1,13,17,21]])}function ee(e){var t,n,a;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.type,n=e.payload,r.prev=1,r.next=4,Object(j.d)(T.c.startLoader(t));case 4:return r.next=6,Object(j.b)(Z,n);case 6:return a=r.sent,r.next=9,Object(j.d)(T.b.updateEventSuccess(a));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(1),r.next=15,Object(j.d)(T.c.showMessage(r.t0.response.data,"error"));case 15:return r.prev=15,r.next=18,Object(j.d)(T.c.stopLoader(t));case 18:return r.finish(15);case 19:case"end":return r.stop()}}),Y,null,[[1,11,15,19]])}function te(e){var t,n;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.type,n=e.payload,a.prev=1,a.next=4,Object(j.d)(T.c.startLoader(t));case 4:return a.next=6,Object(j.b)(X,n);case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(1),a.next=12,Object(j.d)(T.c.showMessage(a.t0.response.data,"error"));case 12:return a.prev=12,a.next=15,Object(j.d)(T.c.stopLoader(t));case 15:return a.finish(12);case 16:case"end":return a.stop()}}),K,null,[[1,8,12,16]])}function ne(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)([Object(j.e)(u.b.GET_EVENTS,Q),Object(j.e)(u.b.CREATE_EVENT,$),Object(j.e)(u.b.UPDATE_EVENT,ee),Object(j.e)(u.b.DELETE_EVENT,te)]);case 2:case"end":return e.stop()}}),q)}var ae=S.a.mark(re);function re(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)([G,W,ne].map(j.c));case 2:case"end":return e.stop()}}),ae)}var ce=(0,n(27).createBrowserHistory)(),oe=Object(c.a)(ce),se=Object(r.a)(),ie=[se,oe];function ue(e){var t=Object(a.e)(v(ce),e,Object(a.d)(a.a.apply(void 0,ie)));return se.run(re),t}},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return ce}));var a=n(0),r=n.n(a),c=n(45),o=n.n(c),s=n(19),i=n(11),u=n(128),l=n(245),d=n(117),p=n(206),m=(n(150),n(151),n(152),n(153),n(94),n(154),n(155),n(156),n(157),n(73)),E=n.n(m),f=n(74),b=n.n(f),h={palette:{primary:{light:E.a[500],main:E.a[700],dark:E.a[900],contrastText:"#fff"},secondary:{light:b.a[300],main:b.a.A200,dark:b.a[700],contrastText:"#fff"}},status:{danger:"orange"},typography:{button:{fontWeight:400,textAlign:"capitalize"}}},v=n(43),O=n(68),S=function(e){var t=e.component,n=e.token,a=Object(O.a)(e,["component","token"]);return r.a.createElement(i.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(i.a,{to:"/logout"})}}))},g=n(8),j=Object(i.h)((function(e){var t=e.match;return r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"".concat(t.url,"/calendar"),component:Object(v.a)((function(){return n.e(9).then(n.bind(null,361))}))}),r.a.createElement(i.b,{path:"".concat(t.url,"/5xx"),component:Object(v.a)((function(){return n.e(2).then(n.bind(null,360))}))}),r.a.createElement(i.b,{component:Object(v.a)((function(){return n.e(0).then(n.bind(null,335))}))}))})),T=n(42),N=n(82),_=n(230),y=n(234),x=n(235),k=Object(i.h)((function(e){var t=Object(s.d)(),n="d-none";return Object(s.e)((function(e){return e.theme})).width<1200&&(n="d-block d-xl-none"),r.a.createElement(_.a,{className:"app-main-header"},r.a.createElement(y.a,{className:"app-toolbar",disableGutters:!1},r.a.createElement(x.a,{className:"jr-menu-icon mr-3 ".concat(n),"aria-label":"Menu",onClick:function(){var n=!e.navCollapsed;t(g.d.toggleCollapsedNav(n))}},r.a.createElement("span",{className:"menu-icon"})),r.a.createElement("div",{className:"ellipse-shape"})))})),w=n(29),A=n(249),L=n(4),C=n(124),I=function(e){return r.a.createElement(C.Scrollbars,Object.assign({},e,{autoHide:!0,renderTrackHorizontal:function(e){return r.a.createElement("div",Object.assign({},e,{style:{display:"none"},className:"track-horizontal"}))}}))},U=n(239),D=n(202),M=n(248),R=n(236),G=Object(R.a)((function(e){return{tooltip:{minWidth:140,fontSize:e.typography.pxToRem(17),border:"1px solid #2d3238",boxShadow:"5px 5px 20px -5px #000",padding:"15px 20px 15px 20px",whiteSpace:"nowrap",backgroundColor:"#2d3238",color:"#c7d0d9",marginLeft:"0px",borderRadius:"0px",marginTop:"1px"}}})),P=function(e){var t=e.children,n=e.name,a=Object(O.a)(e,["children","name"]),c=G();return r.a.createElement(M.a,Object.assign({disableFocusListener:!n,disableHoverListener:!n,disableTouchListener:!n,classes:c},a),t)},V=function(e){var t=e.name,n=e.icon,a=e.link;return r.a.createElement(U.a,{component:"div",className:"nav-menu-item"},r.a.createElement(P,{name:t,placement:"right",title:r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{color:"inherit"},t))},r.a.createElement(w.b,{className:"prepend-icon nav-menu-link",exact:!0,to:a},!!n&&r.a.createElement("i",{className:"zmdi zmdi-hc-fw zmdi-"+n}))))},W=n(86),H=n(240),z=n(241),F=n(127),Y=n.n(F),K=n(126),q=n.n(K),B=function e(t){var n=Object(i.g)(),c=t.name,o=t.icon,s=t.children,u=void 0===s?[]:s,l=u&&u.length>0,d=r.a.useState(!1),p=Object(W.a)(d,2),m=p[0],E=p[1];Object(a.useEffect)((function(){!function e(t,n){if(!t.children)return!1;for(var a=0;a<t.children.length;a++){if(t.children[a].children&&e(t.children[a],n))return!0;if(t.children[a].link===n||n.includes(t.children[a].link))return!0}return!1}(t,n.location.pathname)?E(!1):E(!0)}),[n.location.pathname]);var f=r.a.createElement(P,{name:c,placement:"right",title:r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{color:"inherit"},c))},r.a.createElement(H.a,{className:"nav-collapse-btn",button:!0,onClick:function(){E(!m)}},r.a.createElement("div",{className:"d-flex"},!!o&&r.a.createElement("i",{className:"zmdi zmdi-hc-fw  zmdi-"+o}),l&&!m&&r.a.createElement(q.a,{fontSize:"small",className:"nav-arrow"}),l&&m&&r.a.createElement(Y.a,{fontSize:"small",className:"nav-arrow"})))),b=l?r.a.createElement(z.a,{className:"nav-collapse-item",in:m,timeout:"auto"},r.a.createElement(U.a,{component:"div",disablePadding:!0},u.map((function(t,n){switch(t.type){case"section":return r.a.createElement(J,Object.assign({},t,{key:n}));case"collapse":return r.a.createElement(e,Object.assign({},t,{key:n}));case"item":return r.a.createElement(V,Object.assign({},t,{key:n}))}})))):null;return r.a.createElement("div",{className:"nav-collapse"},f,b)},J=function e(t){var n=t.name,a=t.icon,c=t.children,o=void 0===c?[]:c,s=o&&o.length>0,i=r.a.createElement(U.a,{component:"div",className:"nav-header"},!!a&&r.a.createElement("i",{className:"zmdi zmdi-hc-fw  zmdi-"+a}),n),u=s?r.a.createElement(U.a,{component:"div",disablePadding:!0},o.map((function(t,n){switch(t.type){case"section":return r.a.createElement(e,Object.assign({},t,{key:n}));case"collapse":return r.a.createElement(B,Object.assign({},t,{key:n}));case"item":return r.a.createElement(V,Object.assign({},t,{key:n}))}}))):null;return r.a.createElement("div",{className:"nav-section"},i,u)},Z=function(e){var t=e.menuItems;return r.a.createElement(U.a,{component:"nav",disablePadding:!0,className:"side-nav-menu"},t.map((function(e,t){switch(e.type){case"section":return r.a.createElement(J,Object.assign({},e,{key:t}));case"collapse":return r.a.createElement(B,Object.assign({},e,{key:t}));case"item":return r.a.createElement(V,Object.assign({},e,{key:t}))}})))},X=function(){return r.a.createElement(I,{className:"scrollbar"},r.a.createElement(Z,{menuItems:[{type:"section",name:"Main",children:[{name:"MAZ Calendar",type:"item",icon:"calendar",link:"/app/calendar"}]},{type:"section",name:"Settings",children:[{name:"Logout",type:"item",icon:"run",link:"/logout"}]}]}))},Q=Object(i.h)((function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.theme})),n=t.navCollapsed,c=t.width;Object(a.useEffect)((function(){window.addEventListener("resize",(function(){e(g.d.updateWindowWidth(window.innerWidth))}))}),[e]);var o="d-flex",i="permanent";return c<1200&&(o="d-xl-flex",i="temporary"),r.a.createElement("div",{className:"app-sidebar d-none ".concat(o)},r.a.createElement(A.a,{className:"app-sidebar-content",variant:i,open:!i.includes("temporary")||n,onClose:function(){var t=!n;e(g.d.toggleCollapsedNav(t))},classes:{paper:"side-nav"}},r.a.createElement("div",{className:"mirfak-logo-div d-flex flex-row align-items-center"},r.a.createElement(w.a,{to:L.b.URL_CALENDAR},"MAZ")),r.a.createElement(X,null)))})),$=n(244),ee=function(){return r.a.createElement("footer",{className:"app-footer justify-content-center"},r.a.createElement("span",{className:"d-inline-block"},"Powered by MAZ Systems \xa9 2020 | ",r.a.createElement($.a,{href:"mailto:geekashu@gmail.com"},"geekashu@gmail.com")," | Ashish Kumar Saini"))},te=n(51),ne=Object(i.h)((function(e){var t=Object(s.d)(),n=Object(s.e)((function(e){return e.theme})).width,c=Object(s.e)(te.c.getAlertMessage()),o=Object(s.e)(te.c.getAlertMessageFlag());Object(a.useEffect)((function(){var e=null;c&&("success"===o?T.b.isActive(e)||(e=T.b.success(c)):"error"===o?T.b.isActive(e)||(e=T.b.error(c)):T.b.isActive(e)||(e=Object(T.b)(c)),t(g.c.hideMessage()))}),[c,o,t]),N.isIOS&&N.isMobile?document.body.classList.add("ios-mobile-view-height"):document.body.classList.contains("ios-mobile-view-height")&&document.body.classList.remove("ios-mobile-view-height");var i="mini-drawer";return n<1200&&(i="fixed-drawer"),r.a.createElement("div",{className:"app-container ".concat(i)},r.a.createElement(Q,null),r.a.createElement("div",{className:"app-main-container"},r.a.createElement("div",{className:"app-header"},r.a.createElement(k,null)),r.a.createElement("main",{className:"app-main-content-wrapper"},r.a.createElement("div",{className:"app-main-content"},e.children),r.a.createElement(ee,null))),r.a.createElement(T.a,null))})),ae=function(){return r.a.createElement(ne,null,r.a.createElement(j,null))},re=function(){var e=Object(s.d)();return Object(a.useEffect)((function(){ce.defaults.headers.common.Authorization=null,e(g.a.signOut())}),[e]),r.a.createElement(i.a,{to:"/"})},ce=n(181).create({baseURL:"http://159.65.157.95",headers:{"Content-Type":"application/json"}});t.b=function(e){var t=Object(s.d)(),c=Object(s.e)(te.a.getInitURL()),m=Object(s.e)(te.a.getAuthToken()),E=e.match,f=e.location,b=e.history;if(Object(a.useEffect)((function(){window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__=!0,""===c&&t(g.a.setInitUrl(f.pathname))}),[t,c,f.pathname]),Object(a.useEffect)((function(){ce.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers.Authorization="JWT "+t),e}),(function(e){return Promise.reject(e)}))}),[]),Object(a.useEffect)((function(){ce.interceptors.response.use((function(e){return e}),(function(e){return e.response?e.response.status>=500?b.push("/app/5xx"):401===e.response.status&&b.push("/logout"):b.push("/app/5xx"),Promise.reject(e)}))}),[]),"/"===f.pathname)return o.a.isNil(m)?r.a.createElement(i.a,{to:"/login"}):""===c||"/"===c||"/login"===c?r.a.createElement(i.a,{to:L.b.URL_CALENDAR}):r.a.createElement(i.a,{to:c});var O=Object(u.a)(h);return document.body.classList.remove("rtl"),O.direction="ltr",r.a.createElement(l.a,{theme:O},r.a.createElement(p.b,{dateAdapter:d.a},r.a.createElement("div",{className:"app-main"},r.a.createElement(i.d,null,r.a.createElement(S,{path:"".concat(E.url,"app"),token:m,component:ae}),r.a.createElement(i.b,{path:"/login",component:Object(v.a)((function(){return Promise.all([n.e(1),n.e(8)]).then(n.bind(null,370))}))}),r.a.createElement(i.b,{path:"/logout",component:re}),r.a.createElement(i.b,{path:"/5xx",component:Object(v.a)((function(){return n.e(2).then(n.bind(null,360))}))}),r.a.createElement(i.b,{component:Object(v.a)((function(){return n.e(0).then(n.bind(null,335))}))})))))}},4:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return o}));var a={SHOW_MESSAGE:"COMMON_SHOW_MESSAGE",HIDE_MESSAGE:"COMMON_HIDE_MESSAGE",START_LOADER:"COMMON_START_LOADER",STOP_LOADER:"COMMON_STOP_LOADER"},r={INIT_URL:"AUTH_INIT_URL",SIGN_IN:"AUTH_SIGN_IN",SIGN_IN_SUCCESS:"AUTH_SIGN_IN_SUCCESS",SIGN_OUT:"AUTH_SIGN_OUT",SIGN_OUT_SUCCESS:"AUTH_SIGN_OUT_SUCCESS",GET_TOKEN_SILENTLY:"AUTH_GET_TOKEN_SILENTLY",GET_TOKEN_SILENTLY_SUCCESS:"AUTH_GET_TOKEN_SILENTLY_SUCCESS"},c={TOGGLE_COLLAPSED_NAV:"THEME_TOGGLE_COLLAPSED_NAV",WINDOW_WIDTH:"THEME_WINDOW_WIDTH"},o={GET_EVENTS:"CALENDAR_GET_EVENTS",GET_EVENTS_SUCCESS:"CALENDAR_GET_EVENTS_SUCCESS",CREATE_EVENT:"CALENDAR_CREATE_EVENT",CREATE_EVENT_SUCCESS:"CALENDAR_CREATE_EVENT_SUCCESS",UPDATE_EVENT:"CALENDAR_UPDATE_EVENT",UPDATE_EVENT_SUCCESS:"CALENDAR_UPDATE_EVENT_SUCCESS",DELETE_EVENT:"CALENDAR_DELETE_EVENT",DELETE_EVENT_SUCCESS:"CALENDAR_DELETE_EVENT_SUCCESS",URL_CALENDAR:"/app/calendar/"}},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(9),r=n.n(a),c=n(31),o=n(118),s=n(119),i=n(131),u=n(129),l=n(0),d=n.n(l),p=n(81),m=n.n(p),E=n(95),f=n.n(E),b=n(120),h=(n(162),n(163),function(e){var t=e.className;return d.a.createElement("div",{className:"loader ".concat(t)},d.a.createElement("svg",{className:"circular",viewBox:"25 25 50 50"},d.a.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"})))}),v=n(29),O=n(4),S=function(){return d.a.createElement("div",{className:"app-wrapper page-error-container animated slideInUpTiny animation-duration-3"},d.a.createElement("div",{className:"page-error-content"},d.a.createElement("div",{className:"error-code mb-4 animated zoomInDown"},"d'oh"),d.a.createElement("h2",{className:"text-center fw-regular title bounceIn animation-delay-10 animated"},"Something went wrong. We have been notified of the same. Please try again after some time."),d.a.createElement("p",{className:"text-center zoomIn animation-delay-20 animated"},d.a.createElement(v.a,{className:"btn btn-primary",to:O.b.URL_CALENDAR},"Go Home"))))};function g(e){return function(t){Object(i.a)(a,t);var n=Object(u.a)(a);function a(e){var t;return Object(o.a)(this,a),(t=n.call(this,e)).state={component:null},t}return Object(s.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){m.a.start()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"componentDidMount",value:function(){var t=Object(c.a)(r.a.mark((function t(){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.mounted=!0,t.next=3,e();case 3:n=t.sent,a=n.default,m.a.done(),this.mounted&&this.setState({component:d.a.createElement(a,this.props)});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component||d.a.createElement("div",{className:"loader-view",style:{height:"calc(100vh - 200px)"}},d.a.createElement(h,null));return d.a.createElement(b.ErrorBoundary,{FallbackComponent:S,onError:function(e){console.log(e)}},d.a.createElement(f.a,{type:"text",rows:7,ready:null!==e},e))}}]),a}(l.Component)}},51:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var a=n(38),r=function(e){return e.common},c={getAlertMessage:function(){return Object(a.a)(r,(function(e){return e.alertMessage}))},getAlertMessageFlag:function(){return Object(a.a)(r,(function(e){return e.alertMessageFlag}))},isLoading:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(a.a)(r,(function(e){return e.loader.actions.some((function(e){return t.includes(e.name)}))}))}},o=function(e){return e.auth},s={getInitURL:function(){return Object(a.a)(o,(function(e){return e.initURL}))},getAuthToken:function(){return Object(a.a)(o,(function(e){return e.token}))},isRememberMe:function(){return Object(a.a)(o,(function(e){return e.rememberMe}))}},i=n(45),u=n.n(i),l=n(46),d=n.n(l),p=function(e){return e.calendar},m=function(e){var t=null;if("00:00:00"!==e.interval){if(""===e.day&&""===e.week&&""===e.weekday&&""===e.month&&""===e.year){var n=d.a.duration(e.interval);t=d()(e.start).add(n).toDate()}}else""===e.day&&""===e.week&&""===e.weekday&&""===e.month&&""===e.year&&(t=d()(e.start).endOf("day").toDate());return t},E=function(e){var t=!1;return"00:00:00"===e.interval&&""===e.day&&""===e.week&&""===e.weekday&&""===e.month&&""===e.year&&(t=!0),t},f={getEvents:function(){return Object(a.a)(p,(function(e){return u.a.flatMap(e.events,(function(e){e.title,e.description;var t=e.appointments;return u.a.map(t,(function(e){return{title:e.title,allDay:E(e),start:d()(e.start).toDate(),end:m(e),desc:e.description}}))}))}))}}},77:function(e,t,n){e.exports=n(199)},8:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return s}));var a=n(4),r={hideMessage:function(){return{type:a.c.HIDE_MESSAGE}},showMessage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:a.c.SHOW_MESSAGE,payload:e,flag:t}},startLoader:function(e,t){return{type:a.c.START_LOADER,payload:{action:{name:e,params:t}}}},stopLoader:function(e){return{type:a.c.STOP_LOADER,payload:{name:e}}}},c={setInitUrl:function(e){return{type:a.a.INIT_URL,payload:e}},signIn:function(e){return{type:a.a.SIGN_IN,payload:e}},signInSuccess:function(e){return{type:a.a.SIGN_IN_SUCCESS,payload:e}},signOut:function(){return{type:a.a.SIGN_OUT}},signOutSuccess:function(){return{type:a.a.SIGN_OUT_SUCCESS}},getTokenSilently:function(){return{type:a.a.GET_TOKEN_SILENTLY}},getTokenSilentlySuccess:function(e){return{type:a.a.GET_TOKEN_SILENTLY_SUCCESS,payload:e}}},o={toggleCollapsedNav:function(e){return{type:a.d.TOGGLE_COLLAPSED_NAV,isNavCollapsed:e}},updateWindowWidth:function(e){return{type:a.d.WINDOW_WIDTH,width:e}}},s={getEvents:function(){return{type:a.b.GET_EVENTS}},getEventsSuccess:function(e){return{type:a.b.GET_EVENTS_SUCCESS,payload:e}},createEvent:function(e){return{type:a.b.CREATE_EVENT,payload:e}},createEventSuccess:function(e){return{type:a.b.CREATE_EVENT_SUCCESS,payload:e}},updateEvent:function(e){return{type:a.b.UPDATE_EVENT,payload:e}},updateEventSuccess:function(e){return{type:a.b.UPDATE_EVENT_SUCCESS,payload:e}},deleteEvent:function(e){return{type:a.b.DELETE_EVENT,payload:e}},deleteEventSuccess:function(){return{type:a.b.DELETE_EVENT_SUCCESS}}}}},[[140,4,5]]]);
//# sourceMappingURL=main.8d3b98c3.chunk.js.map