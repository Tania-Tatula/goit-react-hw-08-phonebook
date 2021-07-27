(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{38:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"d",(function(){return v})),n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return w}));var c,r=n(14),a=n.n(r),o=n(20),s=n(15),u=n.n(s),i=n(2),b=Object(i.b)("contacts/fetchContactsRequest"),l=Object(i.b)("contacts/fetchContactsSuccess"),j=Object(i.b)("contacts/fetchContactsError"),d=Object(i.b)("contacts/addContactSuccess"),O=Object(i.b)("contacts/addContactsError"),f=Object(i.b)("contacts/addContactRequest"),h={fetchContactsRequest:b,fetchContactsSuccess:l,fetchContactsError:j,changeFilter:Object(i.b)("contacts/filter"),addContactRequest:f,addContactSuccess:d,addContactsError:O,deleteContactSuccess:Object(i.b)("contacts/deleteContactSuccess"),deleteContactsError:Object(i.b)("contacts/deleteContactsError"),deleteContactRequest:Object(i.b)("contacts/deleteContactRequest")},p={submit:function(t){var e=t.name,n=t.number;return function(){var t=Object(o.a)(a.a.mark((function t(c){var r,o,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={name:e,number:n},c(h.addContactRequest()),t.prev=2,t.next=5,u.a.post("/contacts",r);case 5:o=t.sent,s=o.data,c(h.addContactSuccess(s)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c(h.addContactsError(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},deleteContact:function(t){return function(e){e(h.deleteContactRequest()),u.a.delete("/contacts/".concat(t)).then((function(){return e(h.deleteContactSuccess(t))})).catch((function(t){return e(h.deleteContactsError(t.message))}))}},fetchContacts:function(){return function(t){t(h.fetchContactsRequest()),u.a.get("/contacts").then((function(e){var n=e.data;return t(h.fetchContactsSuccess(n))})).catch((function(e){return t(h.fetchContactsError(e.message))}))}}},g=n(22),m=function(t){return t.contacts.filter},v={getValue:m,getVisibleContacts:Object(g.a)([m,function(t){return t.contacts.items}],(function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},x=n(4),C=n(30),k=n(7),S=h.fetchContactsSuccess,y=h.addContactSuccess,E=h.deleteContactSuccess,A=h.changeFilter,R=Object(i.c)([],(c={},Object(x.a)(c,S,(function(t,e){return e.payload})),Object(x.a)(c,y,(function(t,e){var n=e.payload;return t.map((function(t){return t.name})).includes(n.name)?alert("".concat(n.name," is already in contacts.")):[n].concat(Object(C.a)(t))})),Object(x.a)(c,E,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),q=Object(i.c)("",Object(x.a)({},A,(function(t,e){return e.payload}))),w=Object(k.b)({items:R,filter:q})},55:function(t,e,n){},86:function(t,e,n){},89:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(29),o=n.n(a),s=(n(55),n(25)),u=n(26),i=n(28),b=n(27),l=(n(56),n(6)),j=n(1),d=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"preloader",children:Object(j.jsxs)("div",{className:"preloader__row",children:[Object(j.jsx)("div",{className:"preloader__item"}),Object(j.jsx)("div",{className:"preloader__item"})]})})}}]),n}(c.Component),O=n(10),f=n(17),h="/",p="/register",g="/login",m="/contacts",v=n(9),x={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},C=Object(O.b)((function(t){return{isAuthenticated:v.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(j.jsxs)("nav",{children:[Object(j.jsx)(f.b,{to:h,exact:!0,style:x.link,activeStyle:x.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),e&&Object(j.jsx)(f.b,{to:m,exact:!0,style:x.link,activeStyle:x.activeLink,children:"\u0417\u0430\u043c\u0435\u0442\u043a\u0438"})]})})),k=n.p+"static/media/default-avatar.e44fc4e2.png",S=n(91),y={onLogout:v.a.logOut},E=Object(O.b)((function(t){return{name:v.c.getUsername(t),avatar:k}}),y)((function(t){var e=t.avatar,n=t.name,c=t.onLogout;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("img",{src:e,alt:"",width:"32",className:"avatar"}),Object(j.jsxs)("span",{className:"name",children:["Welcome, ",n]}),Object(j.jsx)(S.a,{variant:"outline-success",type:"button",onClick:c,children:"Logout"})]})})),A={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},R=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(f.b,{to:p,exact:!0,style:A.link,activeStyle:A.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsx)(f.b,{to:g,exact:!0,style:A.link,activeStyle:A.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})},q=Object(O.b)((function(t){return{isAuthenticated:v.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(j.jsxs)("header",{className:"Nav",children:[Object(j.jsx)(C,{}),e?Object(j.jsx)(E,{}):Object(j.jsx)(R,{})]})})),w=(n(86),n(5)),U=n(19),L=["component","isAuthenticated","redirectTo"],N=Object(O.b)((function(t){return{isAuthenticated:v.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(U.a)(t,L);return Object(j.jsx)(l.b,Object(w.a)(Object(w.a)({},r),{},{render:function(t){return n?Object(j.jsx)(e,Object(w.a)({},t)):Object(j.jsx)(l.a,{to:c})}}))})),z=["component","isAuthenticated","redirectTo"],I=Object(O.b)((function(t){return{isAuthenticated:v.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(U.a)(t,z);return Object(j.jsx)(l.b,Object(w.a)(Object(w.a)({},r),{},{render:function(t){return n&&r.restricted?Object(j.jsx)(l.a,{to:c}):Object(j.jsx)(e,Object(w.a)({},t))}}))})),T=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,105))})),_=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,106))})),F=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,107))})),B=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,108))})),D=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(q,{}),Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)(d,{}),children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(I,{exact:!0,path:h,component:T}),Object(j.jsx)(I,{exact:!0,path:p,restricted:!0,redirectTo:"/contacts",component:_}),Object(j.jsx)(I,{path:g,restricted:!0,redirectTo:"/contacts",component:F}),Object(j.jsx)(N,{path:m,component:B,redirectTo:"/login"}),Object(j.jsx)(l.b,{component:T})]})})]})}}]),n}(c.Component),W={onGetCurrentUser:v.a.getCurrentUser},G=Object(O.b)(null,W)(D),J=n(30),M=n(2),V=n(18),H=n(38),K=n(49),P=n.n(K),Q=Object(J.a)(Object(M.d)({serializableCheck:{ignoredActions:[V.a,V.f,V.b,V.c,V.d,V.e]}})),X={key:"auth",storage:P.a,whitelist:["token"]},Y=Object(M.a)({reducer:{contacts:H.c,auth:Object(V.g)(X,v.b)},middleware:Q,devContacts:!1}),Z={store:Y,persistor:Object(V.h)(Y)},$=n(50);o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(O.a,{store:Z.store,children:Object(j.jsx)($.a,{loading:null,persistor:Z.persistor,children:Object(j.jsx)(f.a,{children:Object(j.jsx)(G,{})})})})}),document.getElementById("root"))},9:function(t,e,n){"use strict";n.d(e,"b",(function(){return k})),n.d(e,"a",(function(){return U})),n.d(e,"c",(function(){return L}));var c,r,a,o,s=n(2),u=Object(s.b)("auth/registerRequest"),i=Object(s.b)("auth/registerSuccess"),b=Object(s.b)("auth/registerError"),l=Object(s.b)("auth/loginRequest"),j=Object(s.b)("auth/loginSuccess"),d=Object(s.b)("auth/loginError"),O={registerRequest:u,registerSuccess:i,registerError:b,logoutRequest:Object(s.b)("auth/logoutRequest"),logoutSuccess:Object(s.b)("auth/logoutSuccess"),logoutError:Object(s.b)("auth/logoutError"),loginRequest:l,loginSuccess:j,loginError:d,getCurrentUserRequest:Object(s.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(s.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(s.b)("auth/getCurrentUserError")},f=n(4),h=n(7),p={name:null,email:null},g=Object(s.c)(p,(c={},Object(f.a)(c,O.registerSuccess,(function(t,e){return e.payload.user})),Object(f.a)(c,O.loginSuccess,(function(t,e){return e.payload.user})),Object(f.a)(c,O.logoutSuccess,(function(){return p})),Object(f.a)(c,O.getCurrentUserSuccess,(function(t,e){return e.payload})),c)),m=Object(s.c)(null,(r={},Object(f.a)(r,O.registerSuccess,(function(t,e){return e.payload.token})),Object(f.a)(r,O.loginSuccess,(function(t,e){return e.payload.token})),Object(f.a)(r,O.logoutSuccess,(function(){return null})),r)),v=function(t,e){return e.payload},x=Object(s.c)(null,(a={},Object(f.a)(a,O.registerError,v),Object(f.a)(a,O.loginError,v),Object(f.a)(a,O.logoutError,v),Object(f.a)(a,O.getCurrentUserError,v),a)),C=Object(s.c)(!1,(o={},Object(f.a)(o,O.registerSuccess,(function(){return!0})),Object(f.a)(o,O.loginSuccess,(function(){return!0})),Object(f.a)(o,O.getCurrentUserSuccess,(function(){return!0})),Object(f.a)(o,O.registerError,(function(){return!1})),Object(f.a)(o,O.loginError,(function(){return!1})),Object(f.a)(o,O.getCurrentUserError,(function(){return!1})),Object(f.a)(o,O.logoutSuccess,(function(){return!1})),o)),k=Object(h.b)({user:g,token:m,isAutenticated:C,error:x}),S=n(14),y=n.n(S),E=n(20),A=n(15),R=n.n(A);R.a.defaults.baseURL="https://connections-api.herokuapp.com";var q=function(t){R.a.defaults.headers.common.Authorization="Bearer ".concat(t)},w=function(){R.a.defaults.headers.common.Authorization=""},U={register:function(t){return function(){var e=Object(E.a)(y.a.mark((function e(n){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(O.registerRequest()),e.prev=1,e.next=4,R.a.post("https://connections-api.herokuapp.com/users/signup",t);case 4:c=e.sent,q(c.data.token),n(O.registerSuccess(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(O.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(E.a)(y.a.mark((function e(n){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(O.loginRequest()),e.prev=1,e.next=4,R.a.post("https://connections-api.herokuapp.com/users/login",t);case 4:c=e.sent,q(c.data.token),n(O.loginSuccess(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(O.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(E.a)(y.a.mark((function t(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(O.logoutRequest()),t.prev=1,t.next=4,R.a.post("https://connections-api.herokuapp.com/users/logout");case 4:w(),e(O.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(O.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(E.a)(y.a.mark((function t(e,n){var c,r,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),r=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return q(r),e(O.getCurrentUserRequest()),t.prev=5,t.next=8,R.a.get("https://connections-api.herokuapp.com/users/current");case 8:a=t.sent,e(O.getCurrentUserSuccess(a.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(O.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},L={getIsAuthenticated:function(t){return t.auth.isAutenticated},getUsername:function(t){return t.auth.user.name}}}},[[89,1,2]]]);
//# sourceMappingURL=main.a055a867.chunk.js.map