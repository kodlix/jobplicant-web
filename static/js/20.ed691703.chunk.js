(this["webpackJsonpjobplicant-web"]=this["webpackJsonpjobplicant-web"]||[]).push([[20],{557:function(e){e.exports=JSON.parse('[{"id":1,"name":"Martin Berry","lastMessage":"\ud83d\ude02\ud83d\ude02 i am feeling good","lastSeen":"Jul 6"},{"id":2,"name":"Martin Berry","lastMessage":"\ud83d\ude02\ud83d\ude02 i am feeling good","lastSeen":"Jul 6"},{"id":3,"name":"Terrence Jenkins","lastMessage":"\ud83d\ude02\ud83d\ude02 i am feeling good","lastSeen":"Jul 6"},{"id":4,"name":"Martin Berry","lastMessage":"so sad you left\ud83d\udc96\ud83d\udc96","lastSeen":"Jul 8"},{"id":5,"name":"Thomas Watson Jr","lastMessage":"feels good to be back home","lastSeen":"Jul 4"},{"id":6,"name":"Tony Trente","lastMessage":"I know am french, my english is not good","lastSeen":"Jul 6"}]')},558:function(e,t,c){},559:function(e,t,c){},973:function(e,t,c){"use strict";c.r(t);var n=c(285),s=c(55),a=c(48),r=c(286);var i=c(113),l=c(2),o=c.n(l),d=(c(157),c(318)),j=c(291),u=c(22),b=c(28),m=c(12),p=c(319),h=c(320),f=c(321),O=c(322),x=c(323),v=c(324),g=c(325),N=c(326),y=c(438),S=c(3),k=c(142),C=c(29),E=c(31),w=c(10),I=function(){var e=Object(u.d)(),t=Object(u.e)((function(e){return e.account.loading})),c=Object(u.e)((function(e){return e.account.profileInfo})),n=S.b.Auth.current().accountType,s=Object(u.e)((function(e){return e.education.updatedOrDeleted})),a=Object(u.e)((function(e){return e.userSkill.updatedOrDeleted})),r=Object(u.e)((function(e){return e.experience.updatedOrDeleted})),o=Object(l.useState)("create"),d=Object(i.a)(o,2),j=d[0],I=d[1],D=Object(l.useState)({}),J=Object(i.a)(D,2),M=J[0],L=J[1],T=Object(l.useState)(null),A=Object(i.a)(T,2),R=(A[0],A[1],Object(l.useState)(null)),P=Object(i.a)(R,2);P[0],P[1];Object(l.useEffect)((function(){e(Object(b.e)()),e(Object(C.b)())}),[s,a,r]);var _=function(t){I("create"),L({}),e(Object(m.c)(t))},F=function(t,c){I("edit"),L(c),e(Object(m.c)(t))},B=function(e){return e.getFullYear()+"/"+(1+e.getMonth()).toString().padStart(2,"0")+"/"+e.getDate().toString().padStart(2,"0")};return t?Object(w.jsx)(k.a,{}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(p.a,{openCreate:_,openEdit:F,profileInfo:c}),Object(w.jsxs)("div",{className:"p-grid",children:[Object(w.jsxs)("div",{className:"p-col-12 p-md-8 content-leftPanel",children:[Object(w.jsx)(h.a,{openCreate:_,openEdit:F,profileInfo:c,formatDate:B}),Object(w.jsx)(f.a,{openCreate:_,openEdit:F,profileInfo:c,formatDate:B})]}),Object(w.jsxs)("div",{className:"p-col-12 content-rightPanel p-md-4",children:[Object(w.jsx)(N.a,{openCreate:_,openEdit:F,profileInfo:c}),Object(w.jsx)(O.a,{openCreate:_,openEdit:F,profileInfo:c}),n!==E.a.ARTISAN&&Object(w.jsx)(x.a,{openCreate:_,openEdit:F,profileInfo:c}),n!==E.a.ARTISAN&&Object(w.jsx)(v.a,{openCreate:_,openEdit:F,profileInfo:c}),Object(w.jsx)(g.a,{openCreate:_,openEdit:F,profileInfo:c})]})]}),Object(w.jsx)(y.a,{data:c,mode:j,itemToEdit:M})]})},D=c(11),J=c(441),M=c(42),L=c(44),T={menuItemStyle:{display:"flex",flexDirection:"row",justifyContent:"flex-start",border:"1px solid black"}},A=function(){var e=Object(u.d)();return Object(l.useEffect)((function(){e(Object(L.g)())}),[]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{style:T.menuItemStyle,children:[Object(w.jsx)(M.b,{style:{color:"black",fontSize:"14px",fontWeight:"bold",textDecoration:"underline",cursor:"pointer"},children:"Applied Jobs"}),Object(w.jsx)(M.b,{style:{color:"black",fontSize:"14px",fontWeight:"bold",textDecoration:"underline",cursor:"pointer"},children:"Instant Hires"})]}),Object(w.jsx)("div",{className:"mt-3",children:Object(w.jsx)(J.default,{})})]})},R=c(47),P=function(){var e=Object(u.d)(),t=Object(u.e)((function(e){return e.contact.contacts})),c=(Object(u.e)((function(e){return e.contact.loadingContact})),t.ids);return Object(l.useEffect)((function(){e(Object(R.c)(1,10,"loadingContacts"))}),[e]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"p-card p-4 mt-2",children:Object(w.jsx)("h3",{children:"Contacts"})}),Object(w.jsxs)("div",{className:"mt-3",children:[c&&c.length>0&&c.map((function(e,c){var n=t.data[e];return n?Object(w.jsxs)("div",{className:"p-card p-4 mt-2 d-flex justify-content-between",children:[Object(w.jsxs)("div",{className:"d-flex",children:[Object(w.jsx)("img",{src:"https://source.unsplash.com/random/50x50",className:"rounded circle",alt:"image"}),Object(w.jsx)("div",{className:"p-2"}),Object(w.jsx)("div",{children:Object(w.jsxs)("ul",{children:[Object(w.jsxs)("li",{className:"d-flex",children:[Object(w.jsx)("h4",{children:"".concat(n.firstName,"  ").concat(n.lastName)}),Object(w.jsx)("span",{className:"p-1"}),Object(w.jsx)("span",{children:Object(w.jsx)("div",{className:"stars",style:{"--rating":n.ratings}})})]}),Object(w.jsx)("li",{className:"d-flex",children:null===n||void 0===n?void 0:n.description})]})})]}),Object(w.jsxs)("div",{className:"",children:[Object(w.jsx)("a",{href:"/",style:{color:"black",marginLeft:"5px"},children:"Audio Call "}),Object(w.jsx)("a",{href:"/",style:{color:"black",marginLeft:"5px"},children:"Video Call "}),Object(w.jsx)("a",{href:"/",style:{color:"black",marginLeft:"5px"},children:"Message "}),Object(w.jsx)("a",{href:"/",style:{color:"black",marginLeft:"5px"},children:"Delete "})]})]},c):null})),0===c&&Object(w.jsx)("div",{className:"p-card p-p-4 p-mb-2 d-flex justify-content-center",children:Object(w.jsx)("div",{className:"text-center",children:Object(w.jsx)("span",{className:"p-card-title ",children:"Oops. Contact List is Empty"})})})]})]})},_=[{name:"Jane Doe",ratings:3,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "},{name:"Jane Doe",ratings:5,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{name:"Jane Doe",ratings:4.5,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.  "},{name:"Jane Doe",ratings:3.5,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.  "},{name:"Jane Doe",ratings:4,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}],F=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"p-card p-4 mt-2",children:Object(w.jsx)("h3",{children:"Groups"})}),Object(w.jsx)("div",{className:"mt-3",children:_.map((function(e,t){var c=e.name,n=e.ratings,s=e.description;return Object(w.jsxs)("div",{className:"p-card p-4 mt-2 d-flex justify-content-between",children:[Object(w.jsxs)("div",{className:"d-flex",children:[Object(w.jsx)("img",{src:"https://source.unsplash.com/random/50x50",className:"rounded circle",alt:"image"}),Object(w.jsx)("div",{className:"p-2"}),Object(w.jsx)("div",{children:Object(w.jsxs)("ul",{children:[Object(w.jsxs)("li",{className:"d-flex",children:[Object(w.jsx)("h4",{children:c}),Object(w.jsx)("span",{className:"p-1"}),Object(w.jsx)("span",{children:Object(w.jsx)("div",{className:"stars",style:{"--rating":n}})})]}),Object(w.jsx)("li",{className:"d-flex",children:s})]})})]}),Object(w.jsxs)("div",{className:"",children:[Object(w.jsxs)("a",{href:"/",style:{color:"black",marginLeft:"5px"},children:["Audio Call"," "]}),Object(w.jsxs)("a",{href:"/",style:{color:"black",marginLeft:"5px"},children:["Video Call"," "]}),Object(w.jsxs)("a",{href:"/",style:{color:"black",marginLeft:"5px"},children:["Message"," "]}),Object(w.jsxs)("a",{href:"/",style:{color:"black",marginLeft:"5px"},children:["Delete"," "]})]})]},t)}))})]})},B=function(){var e,t,c=Object(u.d)(),n=Object(u.e)((function(e){return e.account.profileInfo}));return console.log("review",n),Object(l.useEffect)((function(){c(Object(b.e)())}),[c]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"p-card p-4 mt-2",children:Object(w.jsx)("h3",{children:"Reviews"})}),Object(w.jsxs)("div",{className:"mt-1",children:[(null===n||void 0===n?void 0:n.reviews)&&(null===n||void 0===n||null===(e=n.reviews)||void 0===e?void 0:e.length)>0&&(null===n||void 0===n||null===(t=n.reviews)||void 0===t?void 0:t.map((function(e,t){return Object(w.jsx)("div",{className:"p-card p-4 mt-2 d-flex justify-content-between",children:Object(w.jsxs)("div",{className:"d-flex",children:[Object(w.jsxs)("div",{className:"d-col text-center",children:[Object(w.jsx)("div",{children:Object(w.jsx)("p",{children:null===e||void 0===e?void 0:e.reviewerName})}),Object(w.jsx)("img",{src:"https://source.unsplash.com/random/50x50",className:"rounded circle",alt:"image"})]}),Object(w.jsx)("div",{className:"p-2"}),Object(w.jsx)("div",{children:Object(w.jsxs)("ul",{children:[Object(w.jsxs)("li",{className:"d-flex flex-column",children:[Object(w.jsx)("p",{className:"p-1"}),Object(w.jsx)("span",{children:Object(w.jsx)("div",{className:"stars",style:{"--rating":null===e||void 0===e?void 0:e.rating}})})]}),Object(w.jsx)("li",{className:"d-flex",children:null===e||void 0===e?void 0:e.title})]})})]})},t)}))),0===(null===n||void 0===n?void 0:n.reviews.length)&&Object(w.jsx)("strong",{className:"mx-auto text-secondary",children:"No review found"})]})]})},z=c(231),H=c(17);function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function V(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e){return(X="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){return!t||"object"!==X(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var c,n=q(e);if(t){var s=q(this).constructor;c=Reflect.construct(n,arguments,s)}else c=n.apply(this,arguments);return Y(this,c)}}var Q,U,Z,$=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(a,e);var t,c,n,s=K(a);function a(){return W(this,a),s.apply(this,arguments)}return t=a,(c=[{key:"itemClick",value:function(e,t){t.disabled?e.preventDefault():(t.url||e.preventDefault(),t.command&&t.command({originalEvent:e,item:t}))}},{key:"renderHome",value:function(){var e=this;if(this.props.home){var t=Object(H.l)("p-breadcrumb-home",{"p-disabled":this.props.home.disabled},this.props.home.className),c=Object(H.l)("p-menuitem-icon",this.props.home.icon);return o.a.createElement("li",{className:t,style:this.props.home.style},o.a.createElement("a",{href:this.props.home.url||"#",className:"p-menuitem-link","aria-disabled":this.props.home.disabled,target:this.props.home.target,onClick:function(t){return e.itemClick(t,e.props.home)}},o.a.createElement("span",{className:c})))}return null}},{key:"renderSeparator",value:function(){return o.a.createElement("li",{className:"p-breadcrumb-chevron pi pi-chevron-right"})}},{key:"renderMenuitem",value:function(e){var t=this,c=Object(H.l)(e.className,{"p-disabled":e.disabled}),n=e.label&&o.a.createElement("span",{className:"p-menuitem-text"},e.label),s=o.a.createElement("a",{href:e.url||"#",className:"p-menuitem-link",target:e.target,onClick:function(c){return t.itemClick(c,e)},"aria-disabled":e.disabled},n);if(e.template){var a={onClick:function(c){return t.itemClick(c,e)},className:"p-menuitem-link",labelClassName:"p-menuitem-text",element:s,props:this.props};s=H.f.getJSXElement(e.template,e,a)}return o.a.createElement("li",{className:c,style:e.style},s)}},{key:"renderMenuitems",value:function(){var e=this;return this.props.model?this.props.model.map((function(t,c){var n=e.renderMenuitem(t),s=c===e.props.model.length-1?null:e.renderSeparator();return o.a.createElement(o.a.Fragment,{key:t.label+"_"+c},n,s)})):null}},{key:"render",value:function(){var e=Object(H.l)("p-breadcrumb p-component",this.props.className),t=this.renderHome(),c=this.renderMenuitems(),n=this.renderSeparator();return o.a.createElement("nav",{id:this.props.id,className:e,style:this.props.style,"aria-label":"Breadcrumb"},o.a.createElement("ul",null,t,n,c))}}])&&V(t.prototype,c),n&&V(t,n),a}(l.Component);Z={id:null,model:null,home:null,style:null,className:null},(U="defaultProps")in(Q=$)?Object.defineProperty(Q,U,{value:Z,enumerable:!0,configurable:!0,writable:!0}):Q[U]=Z;var ee=function(){var e=Object(D.g)().location.pathname.split("/"),t=e.length;return Object(w.jsx)("div",{className:"breadcrumb",children:Object(w.jsx)("div",{className:"d-flex",style:{alignItems:"center"},children:e.map((function(e,c){return""===e?Object(w.jsxs)("span",{className:"d-flex",children:[Object(w.jsx)(M.b,{to:"/",children:Object(w.jsx)("i",{className:"pi pi-home",style:{fontSize:"18px",color:"#000"}})})," "," ",c+1<=t?Object(w.jsx)("span",{style:{fontSize:"15px",marginLeft:"10px",marginRight:"10px"},children:"/"}):""]},c):Object(w.jsxs)("span",{children:[" ",Object(w.jsx)(M.b,{to:"/".concat(e),style:{fontSize:"18px",color:"#000"},children:e})," ",c+1!==t?"  ":""]},c)}))})})},te=c(557),ce=(c(558),function(e){var t=e.setContact,c=e.selectedContact,n=o.a.useState(!1),s=Object(i.a)(n,2),a=s[0],r=s[1];return Object(w.jsxs)("div",{className:"chat-container ".concat(a?"show":""),children:[Object(w.jsxs)("div",{className:"chat-header",children:[Object(w.jsxs)("div",{className:"left",children:[Object(w.jsx)("img",{className:"rounded-image",src:"https://source.unsplash.com/random/50x50"}),Object(w.jsx)("h4",{children:"Messaging"})]}),Object(w.jsx)("div",{className:"right",children:Object(w.jsx)("i",{onClick:function(){r(!a)},className:"pi ".concat(a?"pi-chevron-down":"pi-chevron-up"," right-caret")})})]}),Object(w.jsxs)("div",{className:"chat-body",children:[Object(w.jsx)("div",{className:"searchbox",children:Object(w.jsx)("input",{type:"text",placeholder:"search contact",className:"search-input"})}),Object(w.jsx)("div",{className:"contact-list",children:te.map((function(e){return Object(w.jsxs)("div",{onClick:function(){return t(e)},className:"contact-item ".concat(c&&e.id===c.id?"selected":""),children:[Object(w.jsx)("img",{src:"https://source.unsplash.com/random/70x70"}),Object(w.jsxs)("div",{className:"contact-detail",children:[Object(w.jsx)("h4",{children:e.name}),Object(w.jsx)("p",{children:e.lastMessage})]}),Object(w.jsx)("div",{className:"last-seen",children:Object(w.jsx)("p",{children:e.lastSeen})})]},e.id)}))})]})]})}),ne=(c(559),function(e){var t=e.setContact,c=e.contact;return console.log(c),Object(w.jsxs)("div",{className:"chat-content-container",children:[Object(w.jsxs)("div",{className:"chat-content-header",children:[Object(w.jsxs)("div",{className:"left",children:[Object(w.jsx)("img",{className:"rounded-image",src:"https://source.unsplash.com/random/50x50"}),Object(w.jsx)("h4",{children:c.name})]}),Object(w.jsx)("div",{className:"right",children:Object(w.jsx)("i",{onClick:function(){return t(null)},className:"pi pi-times"})})]}),Object(w.jsxs)("div",{className:"chat-content-body",children:[Object(w.jsx)("div",{className:"chat-content-messages"}),Object(w.jsxs)("div",{className:"chat-content-input",children:[Object(w.jsx)("input",{type:"text"}),Object(w.jsx)("button",{children:"Send"})]})]})]})});t.default=function(e){var t,c=e.match,b=o.a.useState(null),p=Object(i.a)(b,2),h=p[0],f=p[1],O=Object(u.e)((function(e){return e.account.profileInfo})),x=Object(u.d)(),v=Object(l.useState)(""),g=Object(i.a)(v,2)[1],N=Object(l.useState)({}),y=(t=N,Object(n.a)(t)||Object(s.a)(t)||Object(a.a)(t)||Object(r.a)(),S.b.Auth.current().accountType),k=function(e){g("create"),x(Object(m.c)(e))},C=function(e){g("edit"),x(Object(m.c)(e))};return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"background",children:[Object(w.jsx)("div",{className:"pl-5",children:Object(w.jsx)(ee,{})}),Object(w.jsxs)("div",{className:"content-container",children:[Object(w.jsx)(z.a,{openCreate:k,openEdit:C,data:O}),Object(w.jsxs)("div",{className:"p-grid",children:[Object(w.jsxs)("div",{className:"p-col-12 p-md-9 content-smallscreen",children:[Object(w.jsx)("div",{className:"content-tab",children:Object(w.jsx)(j.a,{})}),Object(w.jsxs)("div",{className:"content-body",children:[Object(w.jsx)(D.b,{path:"".concat(c.path,"/"),exact:!0,component:I}),Object(w.jsx)(D.b,{path:"".concat(c.path,"/info"),component:I}),Object(w.jsx)(D.b,{path:"".concat(c.path,"/jobs"),component:A}),Object(w.jsx)(D.b,{path:"".concat(c.path,"/contacts"),component:P}),Object(w.jsx)(D.b,{path:"".concat(c.path,"/groups"),component:F}),Object(w.jsx)(D.b,{path:"".concat(c.path,"/review"),component:B})]})]}),y===E.a.ARTISAN&&Object(w.jsx)(d.a,{openCreate:k,openEdit:C})]})]}),Object(w.jsx)(ce,{setContact:f,selectedContact:h}),null!==h&&Object(w.jsx)(ne,{setContact:f,contact:h})]})})}}}]);
//# sourceMappingURL=20.ed691703.chunk.js.map