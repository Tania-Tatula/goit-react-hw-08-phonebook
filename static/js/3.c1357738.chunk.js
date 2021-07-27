(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{84:function(t,e,n){"use strict";var r,a,c,o=n(88),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function i(){c=!1}function s(t){if(t){if(t!==r){if(t.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,i()}}else r!==u&&(r=u,i())}function l(){return c||(c=function(){r||s(u);for(var t,e=r.split(""),n=[],a=o.nextValue();e.length>0;)a=o.nextValue(),t=Math.floor(a*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||u},characters:function(t){return s(t),r},seed:function(t){o.seed(t),a!==t&&(i(),a=t)},lookup:function(t){return l()[t]},shuffled:l}},85:function(t,e,n){t.exports={App:"Contacts_App__QRBuA",input:"Contacts_input__1g3Ra",button:"Contacts_button__2Mahy",buttonDelete:"Contacts_buttonDelete__1p-JM",contactsBlock:"Contacts_contactsBlock__2rf2W",contactItem:"Contacts_contactItem__12iNh"}},86:function(t,e,n){"use strict";t.exports=n(87)},87:function(t,e,n){"use strict";var r=n(84),a=n(89),c=n(93),o=n(94)||0;function u(){return a(o)}t.exports=u,t.exports.generate=u,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return o=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=c},88:function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},89:function(t,e,n){"use strict";var r,a,c=n(90);n(84);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),e+=c(7),e+=c(t),r>0&&(e+=c(r)),e+=c(n)}},90:function(t,e,n){"use strict";var r=n(84),a=n(91),c=n(92);t.exports=function(t){for(var e,n=0,o="";!e;)o+=c(a,r.get(),1),e=t<Math.pow(16,n+1),n++;return o}},91:function(t,e,n){"use strict";var r,a="object"===typeof window&&(window.crypto||window.msCrypto);r=a&&a.getRandomValues?function(t){return a.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},92:function(t,e){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,a=-~(1.6*r*n/e.length),c="";;)for(var o=t(a),u=a;u--;)if((c+=e[o[u]&r]||"").length===+n)return c}},93:function(t,e,n){"use strict";var r=n(84);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},94:function(t,e,n){"use strict";t.exports=0},98:function(t,e,n){"use strict";n.r(e);var r,a,c=n(23),o=n(24),u=n(26),i=n(25),s=n(0),l=n(4),f=n(28),h=n(9),p=n(86),b=n.n(p),d=n(34),j=n(85),m=n.n(j),g=n(1),v=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.addList=function(e,n){var r={id:b.a.generate(),name:e,number:n};t.setState((function(t){return{contacts:[r].concat(Object(f.a)(t.contacts))}}))},t.loginInputId=b.a.generate(),t.handleInputChange=function(e){var n=e.currentTarget,r=n.name,a=n.value;t.setState(Object(l.a)({id:b.a.generate()},r,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:m.a.contactsBlock,children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,className:m.a.formName,children:[Object(g.jsxs)("label",{id:this.loginInputId,children:["Name",Object(g.jsx)("input",{className:m.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleInputChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(g.jsxs)("label",{id:this.loginInputId,children:["Number",Object(g.jsx)("input",{className:m.a.input,type:"tel",name:"number",value:this.state.number,onChange:this.handleInputChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(g.jsx)("button",{className:m.a.button,type:"submit",children:"Add conract"})]})})}}]),n}(s.Component),x=Object(h.b)(null,(function(t){return{onSubmit:function(e){return t(d.b.submit(e))}}}))(v),O=Object(h.b)((function(t){return{value:d.d.getValue(t)}}),(function(t){return{onChange:function(e){return t(d.a.changeFilter(e.currentTarget.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(g.jsx)("div",{className:m.a.contactsBlock,children:Object(g.jsxs)("label",{children:["Find contact by name",Object(g.jsx)("input",{className:m.a.input,type:"text",value:e,onChange:n})]})})})),w=["title","titleId"];function C(){return(C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function y(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function _(t,e){var n=t.title,c=t.titleId,o=y(t,w);return s.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":c},o),n?s.createElement("title",{id:c},n):null,r||(r=s.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),a||(a=s.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})))}var k=s.forwardRef(_),I=(n.p,Object(h.b)((function(t){return{contactList:d.d.getVisibleContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(d.b.deleteContact(e))}}}))((function(t){var e=t.contactList,n=t.onDeleteContact;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("ul",{className:m.a.contactsBlock,children:e.map((function(t){var e=t.name,r=t.number,a=t.id;return Object(g.jsxs)("li",{className:m.a.contactItem,children:[e,": ",r,Object(g.jsx)("button",{onClick:function(){return n(a)},className:m.a.buttonDelete,"aria-label":"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442",children:Object(g.jsx)(k,{width:"20",height:"20",fill:"#fff"})})]},a)}))})})}))),N=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:m.a.App,children:[Object(g.jsx)("h1",{children:"Phonebook"}),Object(g.jsx)(x,{}),Object(g.jsx)("h2",{children:"Contacts"}),Object(g.jsx)(O,{}),Object(g.jsx)(I,{})]})}}]),n}(s.Component);e.default=Object(h.b)(null,(function(t){return{fetchContacts:function(){return t(d.b.fetchContacts())}}}))(N)}}]);
//# sourceMappingURL=3.c1357738.chunk.js.map