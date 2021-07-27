(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{34:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"d",(function(){return v})),n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return w}));var c,r=n(13),a=n.n(r),o=n(19),s=n(14),u=n.n(s),i=n(2),b=Object(i.b)("contacts/fetchContactsRequest"),l=Object(i.b)("contacts/fetchContactsSuccess"),j=Object(i.b)("contacts/fetchContactsError"),d=Object(i.b)("contacts/addContactSuccess"),f=Object(i.b)("contacts/addContactsError"),O=Object(i.b)("contacts/addContactRequest"),h={fetchContactsRequest:b,fetchContactsSuccess:l,fetchContactsError:j,changeFilter:Object(i.b)("contacts/filter"),addContactRequest:O,addContactSuccess:d,addContactsError:f,deleteContactSuccess:Object(i.b)("contacts/deleteContactSuccess"),deleteContactsError:Object(i.b)("contacts/deleteContactsError"),deleteContactRequest:Object(i.b)("contacts/deleteContactRequest")},p={submit:function(t){var e=t.name,n=t.number;return function(){var t=Object(o.a)(a.a.mark((function t(c){var r,o,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={name:e,number:n},c(h.addContactRequest()),t.prev=2,t.next=5,u.a.post("/contacts",r);case 5:o=t.sent,s=o.data,c(h.addContactSuccess(s)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c(h.addContactsError(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},deleteContact:function(t){return function(e){e(h.deleteContactRequest()),u.a.delete("/contacts/".concat(t)).then((function(){return e(h.deleteContactSuccess(t))})).catch((function(t){return e(h.deleteContactsError(t.message))}))}},fetchContacts:function(){return function(t){t(h.fetchContactsRequest()),u.a.get("/contacts").then((function(e){var n=e.data;return t(h.fetchContactsSuccess(n))})).catch((function(e){return t(h.fetchContactsError(e.message))}))}}},g=n(21),m=function(t){return t.contacts.filter},v={getValue:m,getVisibleContacts:Object(g.a)([m,function(t){return t.contacts.items}],(function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},x=n(4),C=n(28),k=n(6),y=h.fetchContactsSuccess,S=h.addContactSuccess,E=h.deleteContactSuccess,A=h.changeFilter,R=Object(i.c)([],(c={},Object(x.a)(c,y,(function(t,e){return e.payload})),Object(x.a)(c,S,(function(t,e){var n=e.payload;return t.map((function(t){return t.name})).includes(n.name)?alert("".concat(n.name," is already in contacts.")):[n].concat(Object(C.a)(t))})),Object(x.a)(c,E,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),q=Object(i.c)("",Object(x.a)({},A,(function(t,e){return e.payload}))),w=Object(k.b)({items:R,filter:q})},50:function(t,e,n){},8:function(t,e,n){"use strict";n.d(e,"b",(function(){return k})),n.d(e,"a",(function(){return U})),n.d(e,"c",(function(){return L}));var c,r,a,o,s=n(2),u=Object(s.b)("auth/registerRequest"),i=Object(s.b)("auth/registerSuccess"),b=Object(s.b)("auth/registerError"),l=Object(s.b)("auth/loginRequest"),j=Object(s.b)("auth/loginSuccess"),d=Object(s.b)("auth/loginError"),f={registerRequest:u,registerSuccess:i,registerError:b,logoutRequest:Object(s.b)("auth/logoutRequest"),logoutSuccess:Object(s.b)("auth/logoutSuccess"),logoutError:Object(s.b)("auth/logoutError"),loginRequest:l,loginSuccess:j,loginError:d,getCurrentUserRequest:Object(s.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(s.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(s.b)("auth/getCurrentUserError")},O=n(4),h=n(6),p={name:null,email:null},g=Object(s.c)(p,(c={},Object(O.a)(c,f.registerSuccess,(function(t,e){return e.payload.user})),Object(O.a)(c,f.loginSuccess,(function(t,e){return e.payload.user})),Object(O.a)(c,f.logoutSuccess,(function(){return p})),Object(O.a)(c,f.getCurrentUserSuccess,(function(t,e){return e.payload})),c)),m=Object(s.c)(null,(r={},Object(O.a)(r,f.registerSuccess,(function(t,e){return e.payload.token})),Object(O.a)(r,f.loginSuccess,(function(t,e){return e.payload.token})),Object(O.a)(r,f.logoutSuccess,(function(){return null})),r)),v=function(t,e){return e.payload},x=Object(s.c)(null,(a={},Object(O.a)(a,f.registerError,v),Object(O.a)(a,f.loginError,v),Object(O.a)(a,f.logoutError,v),Object(O.a)(a,f.getCurrentUserError,v),a)),C=Object(s.c)(!1,(o={},Object(O.a)(o,f.registerSuccess,(function(){return!0})),Object(O.a)(o,f.loginSuccess,(function(){return!0})),Object(O.a)(o,f.getCurrentUserSuccess,(function(){return!0})),Object(O.a)(o,f.registerError,(function(){return!1})),Object(O.a)(o,f.loginError,(function(){return!1})),Object(O.a)(o,f.getCurrentUserError,(function(){return!1})),Object(O.a)(o,f.logoutSuccess,(function(){return!1})),o)),k=Object(h.b)({user:g,token:m,isAutenticated:C,error:x}),y=n(13),S=n.n(y),E=n(19),A=n(14),R=n.n(A);R.a.defaults.baseURL="https://connections-api.herokuapp.com";var q=function(t){R.a.defaults.headers.common.Authorization="Bearer ".concat(t)},w=function(){R.a.defaults.headers.common.Authorization=""},U={register:function(t){return function(){var e=Object(E.a)(S.a.mark((function e(n){var c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(f.registerRequest()),e.prev=1,e.next=4,R.a.post("https://connections-api.herokuapp.com/users/signup",t);case 4:c=e.sent,q(c.data.token),n(f.registerSuccess(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(f.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(E.a)(S.a.mark((function e(n){var c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(f.loginRequest()),e.prev=1,e.next=4,R.a.post("https://connections-api.herokuapp.com/users/login",t);case 4:c=e.sent,q(c.data.token),n(f.loginSuccess(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(f.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(E.a)(S.a.mark((function t(e){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(f.logoutRequest()),t.prev=1,t.next=4,R.a.post("https://connections-api.herokuapp.com/users/logout");case 4:w(),e(f.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(f.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(E.a)(S.a.mark((function t(e,n){var c,r,a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),r=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return q(r),e(f.getCurrentUserRequest()),t.prev=5,t.next=8,R.a.get("https://connections-api.herokuapp.com/users/current");case 8:a=t.sent,e(f.getCurrentUserSuccess(a.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(f.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},L={getIsAuthenticated:function(t){return t.auth.isAutenticated},getUsername:function(t){return t.auth.user.name}}},80:function(t,e,n){},83:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(27),o=n.n(a),s=(n(50),n(23)),u=n(24),i=n(26),b=n(25),l=n(5),j=n(1),d=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"preloader",children:Object(j.jsxs)("div",{className:"preloader__row",children:[Object(j.jsx)("div",{className:"preloader__item"}),Object(j.jsx)("div",{className:"preloader__item"})]})})}}]),n}(c.Component),f=n(9),O=n(16),h="/",p="/register",g="/login",m="/contacts",v=n(8),x={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},C=Object(f.b)((function(t){return{isAuthenticated:v.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(j.jsxs)("nav",{children:[Object(j.jsx)(O.b,{to:h,exact:!0,style:x.link,activeStyle:x.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),e&&Object(j.jsx)(O.b,{to:m,exact:!0,style:x.link,activeStyle:x.activeLink,children:"\u0417\u0430\u043c\u0435\u0442\u043a\u0438"})]})})),k=n.p+"static/media/default-avatar.e44fc4e2.png",y={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12}},S={onLogout:v.a.logOut},E=Object(f.b)((function(t){return{name:v.c.getUsername(t),avatar:k}}),S)((function(t){var e=t.avatar,n=t.name,c=t.onLogout;return Object(j.jsxs)("div",{style:y.container,children:[Object(j.jsx)("img",{src:e,alt:"",width:"32",style:y.avatar}),Object(j.jsxs)("span",{style:y.name,children:["Welcome, ",n]}),Object(j.jsx)("button",{type:"button",onClick:c,children:"Logout"})]})})),A={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},R=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(O.b,{to:p,exact:!0,style:A.link,activeStyle:A.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsx)(O.b,{to:g,exact:!0,style:A.link,activeStyle:A.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})},q=Object(f.b)((function(t){return{isAuthenticated:v.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(j.jsxs)("header",{className:"Nav",children:[Object(j.jsx)(C,{}),e?Object(j.jsx)(E,{}):Object(j.jsx)(R,{})]})})),w=(n(80),n(17)),U=n(29),L=["component","isAuthenticated","redirectTo"],I=Object(f.b)((function(t){return{isAuthenticated:v.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(U.a)(t,L);return Object(j.jsx)(l.b,Object(w.a)(Object(w.a)({},r),{},{render:function(t){return n?Object(j.jsx)(e,Object(w.a)({},t)):Object(j.jsx)(l.a,{to:c})}}))})),z=["component","isAuthenticated","redirectTo"],T=Object(f.b)((function(t){return{isAuthenticated:v.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(U.a)(t,z);return Object(j.jsx)(l.b,Object(w.a)(Object(w.a)({},r),{},{render:function(t){return n&&r.restricted?Object(j.jsx)(l.a,{to:c}):Object(j.jsx)(e,Object(w.a)({},t))}}))})),N=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,95))})),_=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,96))})),F=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,97))})),B=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,98))})),W=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(q,{}),Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)(d,{}),children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(T,{exact:!0,path:h,component:N}),Object(j.jsx)(T,{exact:!0,path:p,restricted:!0,redirectTo:"/contacts",component:_}),Object(j.jsx)(T,{path:g,restricted:!0,redirectTo:"/contacts",component:F}),Object(j.jsx)(I,{path:m,component:B,redirectTo:"/login"}),Object(j.jsx)(l.b,{component:N})]})})]})}}]),n}(c.Component),D={onGetCurrentUser:v.a.getCurrentUser},G=Object(f.b)(null,D)(W),J=n(28),M=n(2),V=n(18),H=n(34),K=n(44),P=n.n(K),Q=Object(J.a)(Object(M.d)({serializableCheck:{ignoredActions:[V.a,V.f,V.b,V.c,V.d,V.e]}})),X={key:"auth",storage:P.a,whitelist:["token"]},Y=Object(M.a)({reducer:{contacts:H.c,auth:Object(V.g)(X,v.b)},middleware:Q,devContacts:!1}),Z={store:Y,persistor:Object(V.h)(Y)},$=n(45);o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(f.a,{store:Z.store,children:Object(j.jsx)($.a,{loading:null,persistor:Z.persistor,children:Object(j.jsx)(O.a,{children:Object(j.jsx)(G,{})})})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.e8a3d8f6.chunk.js.map