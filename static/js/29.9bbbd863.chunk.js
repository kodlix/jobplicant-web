(this["webpackJsonpjobplicant-web"]=this["webpackJsonpjobplicant-web"]||[]).push([[29],{188:function(e,t,n){},977:function(e,t,n){"use strict";n.r(t);var s=n(113),c=n(2),i=n.n(c),r=n(0),a=n(122),l=n(17);function o(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?d(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=b(e);if(t){var c=b(this).constructor;n=Reflect.construct(s,arguments,c)}else n=s.apply(this,arguments);return h(this,n)}}var O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,n,s,r=f(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=r.call(this,e)).state={},t.onClick=t.onClick.bind(d(t)),t.onFocus=t.onFocus.bind(d(t)),t.onBlur=t.onBlur.bind(d(t)),t.inputRef=Object(c.createRef)(t.props.inputRef),t}return t=a,(n=[{key:"select",value:function(e){this.inputRef.current.checked=!0,this.onClick(e)}},{key:"onClick",value:function(e){!this.props.disabled&&this.props.onChange&&(this.props.onChange({originalEvent:e,value:this.props.value,checked:!this.props.checked,stopPropagation:function(){},preventDefault:function(){},target:{name:this.props.name,id:this.props.id,value:this.props.value,checked:!this.props.checked}}),this.inputRef.current.checked=!this.props.checked,this.inputRef.current.focus())}},{key:"onFocus",value:function(){this.setState({focused:!0})}},{key:"onBlur",value:function(){this.setState({focused:!1})}},{key:"updateInputRef",value:function(){var e=this.props.inputRef;e&&("function"===typeof e?e(this.inputRef.current):e.current=this.inputRef.current)}},{key:"componentDidMount",value:function(){this.updateInputRef(),this.props.tooltip&&this.renderTooltip()}},{key:"componentDidUpdate",value:function(e){e.tooltip===this.props.tooltip&&e.tooltipOptions===this.props.tooltipOptions||(this.tooltip?this.tooltip.update(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({content:this.props.tooltip},this.props.tooltipOptions||{})):this.renderTooltip())}},{key:"componentWillUnmount",value:function(){this.tooltip&&(this.tooltip.destroy(),this.tooltip=null)}},{key:"renderTooltip",value:function(){this.tooltip=Object(l.n)({target:this.element,content:this.props.tooltip,options:this.props.tooltipOptions})}},{key:"render",value:function(){var e=this;this.inputRef&&this.inputRef.current&&(this.inputRef.current.checked=this.props.checked);var t=Object(l.l)("p-radiobutton p-component",{"p-radiobutton-checked":this.props.checked,"p-radiobutton-disabled":this.props.disabled,"p-radiobutton-focused":this.state.focused},this.props.className),n=Object(l.l)("p-radiobutton-box",{"p-highlight":this.props.checked,"p-disabled":this.props.disabled,"p-focus":this.state.focused});return i.a.createElement("div",{ref:function(t){return e.element=t},id:this.props.id,className:t,style:this.props.style,onClick:this.onClick},i.a.createElement("div",{className:"p-hidden-accessible"},i.a.createElement("input",{ref:this.inputRef,id:this.props.inputId,type:"radio","aria-labelledby":this.props.ariaLabelledBy,name:this.props.name,defaultChecked:this.props.checked,onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.props.disabled,required:this.props.required,tabIndex:this.props.tabIndex})),i.a.createElement("div",{className:n,ref:function(t){e.box=t},role:"radio","aria-checked":this.props.checked},i.a.createElement("div",{className:"p-radiobutton-icon"})))}}])&&o(t.prototype,n),s&&o(t,s),a}(c.Component);j(O,"defaultProps",{id:null,inputRef:null,inputId:null,name:null,value:null,checked:!1,style:null,className:null,disabled:!1,required:!1,tabIndex:null,tooltip:null,tooltipOptions:null,ariaLabelledBy:null,onChange:null});var x=n(42),g=n(114),y=n(124),v=n(22),N=n(45),k=(n(188),n(31)),w=n(10),C=function(e){var t,n,i=e.accountType,l=Object(y.a)({mode:"onChange",reValidateMode:"onChange"}),o=l.register,d=l.handleSubmit,p=l.setValue,u=l.formState.errors,h=Object(v.d)(),b=Object(c.useState)(null),j=Object(s.a)(b,2),m=j[0],f=j[1];return Object(c.useEffect)((function(){o("gender",{required:"Gender is required"})}),[o]),Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"p-fluid",children:Object(w.jsxs)("div",{className:"p-grid p-mx-0",children:[Object(w.jsx)("div",{className:"login-pane-left p-col-12 p-md-7 p-lg-8 p-xl-8 small-screen",children:Object(w.jsxs)("div",{className:"left-content",children:[Object(w.jsx)("div",{children:Object(w.jsx)("h1",{className:"p-mb-0 p-text-center title",children:"Joplicant Home for all"})}),Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{children:Object(w.jsxs)("p",{children:[" ",Object(w.jsx)("h2",{className:"p-text-center sub-title",children:" Job seekers, Artisan, Employer"})]})}),Object(w.jsx)("section",{className:"about font-weight-bold p-mt-4 p-mb-4",children:Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:"Artisans meets employers"}),Object(w.jsx)("li",{children:" You need to get a skilled worker for that urgent need? not too worry,"}),Object(w.jsx)("li",{children:" Employeers find employees you need to get a skilled worker for that urgent need? not too worry,"}),Object(w.jsx)("li",{children:"Employees find the right jobs you need to get a skilled worker for that urgent need? not too worry,"})]})})]}),Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"font-weight-bold",children:Object(w.jsx)("p",{children:"You need to get a skilled worker for that urgent need? not too worry, Instant Job Hire is all you need to connect to the right person within you."})})})]})}),Object(w.jsxs)("div",{className:"login-pane-right p-col-12 p-md-5 p-lg-4",children:[Object(w.jsx)("div",{className:"logo-container",children:Object(w.jsx)("img",{src:"/assets/logo.png",width:"150",alt:"brand-logo"})}),Object(w.jsxs)("div",{className:"",children:[Object(w.jsx)("div",{className:"panel-login text-center"}),Object(w.jsxs)("div",{className:"panel-signup",children:[Object(w.jsx)("div",{className:"login-title sm-page-title",children:Object(w.jsx)("h3",{className:"p-mb-3  text-center",children:"Sign up for free!"})}),Object(w.jsx)("form",{onSubmit:d((function(e){e.accountType=i,h(Object(N.e)(e))})),children:Object(w.jsxs)("div",{className:"p-fluid",children:[Object(w.jsxs)("div",{className:"p-field",children:[Object(w.jsx)(a.a,Object(r.a)({type:"text",id:"firstname",name:"firstName",placeholder:"First Name"},o("firstName",{required:"Please enter your first name"}))),Object(w.jsx)("label",{htmlFor:"firstname",className:"",children:u.firstName&&Object(w.jsxs)("span",{className:"text-danger font-weight-bold ",children:[" ",Object(w.jsx)("p",{children:u.firstName.message})]})})]}),Object(w.jsxs)("div",{className:"p-field",children:[Object(w.jsx)(a.a,Object(r.a)({type:"text",name:"lastName",id:"lastname",placeholder:"Last Name"},o("lastName",{required:"Please enter your last name"}))),Object(w.jsx)("label",{htmlFor:"lastname",className:"",children:u.lastName&&Object(w.jsxs)("span",{className:"text-danger font-weight-bold ",children:[" ",Object(w.jsx)("p",{children:u.lastName.message})]})})]}),Object(w.jsxs)("div",{className:"p-field",children:[Object(w.jsx)(a.a,Object(r.a)({type:"email",name:"email",id:"numberOrEmail",placeholder:"Mobile number or email address"},o("email",{required:!0,pattern:/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i}))),Object(w.jsxs)("label",{htmlFor:"email",className:"",children:["required"===(null===u||void 0===u||null===(t=u.email)||void 0===t?void 0:t.type)&&Object(w.jsxs)("span",{className:"text-danger font-weight-bold ",children:[" ",Object(w.jsx)("p",{children:"Please enter your email"})]}),"pattern"===(null===u||void 0===u||null===(n=u.email)||void 0===n?void 0:n.type)&&Object(w.jsxs)("span",{className:"text-danger font-weight-bold ",children:[" ",Object(w.jsxs)("p",{children:["Please enter a valid email ",Object(w.jsx)("address",{})]})]})]})]}),Object(w.jsxs)("div",{className:"p-field",children:[Object(w.jsx)(a.a,Object(r.a)({type:"password",name:"password",id:"password",placeholder:"New password"},o("password",{required:"Please enter your password"}))),Object(w.jsx)("label",{htmlFor:"password",className:"",children:u.password&&Object(w.jsxs)("span",{className:"text-danger font-weight-bold ",children:[" ",Object(w.jsx)("p",{children:u.password.message})]})})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{htmlFor:"gender",className:"p-mb-1 p-text-bold gender-margin app-color",children:" Gender"})," "]}),Object(w.jsxs)("div",{className:"p-formgroup-inline",children:[Object(w.jsxs)("div",{className:"p-field-radiobutton",children:[Object(w.jsx)(O,{inputId:"male",type:"radio",name:"gender",value:"male",onChange:function(e){f(e.value),p("gender",e.value,{shouldValidate:!0})},checked:"male"===m}),Object(w.jsx)("label",{htmlFor:"male",children:"Male"})]}),Object(w.jsxs)("div",{className:"p-field-radiobutton",children:[Object(w.jsx)(O,{inputId:"female",type:"radio",name:"gender",value:"female",onChange:function(e){f(e.value),p("gender",e.value,{shouldValidate:!0})},checked:"female"===m}),Object(w.jsx)("label",{htmlFor:"female",children:"Female"})]}),u.gender&&Object(w.jsxs)("span",{className:"text-danger font-weight-bold p-pl-1",children:[" ",Object(w.jsx)("p",{children:u.gender.message})]})]}),i===k.a.CORPORATE&&Object(w.jsxs)("div",{className:"p-field",children:[Object(w.jsx)(a.a,Object(r.a)({type:"text",className:"form-control p-mb-4",name:"companyName",id:"companyName",placeholder:"Company or Organiation Name",hidden:!1},o("companyName",{required:"Please enter your company's Name"}))),Object(w.jsx)("label",{htmlFor:"name",className:"",children:u.companyName&&Object(w.jsxs)("span",{className:"text-danger font-weight-bold ",children:[" ",Object(w.jsx)("p",{children:u.companyName.message})]})})]}),Object(w.jsx)("div",{children:Object(w.jsxs)("p",{className:"term-policy p-mb-3",children:["By clicking Sign Up, you agree to our ",Object(w.jsxs)(x.b,{to:"/",children:[" ",Object(w.jsx)("span",{className:"app-color font-weight-bold",children:"Terms, Data Policy "})]}),"\xa0 and ",Object(w.jsxs)(x.b,{to:"/",children:[" ",Object(w.jsx)("span",{className:"app-color font-weight-bold",children:"Cookie Policy."})]}),"."]})}),Object(w.jsx)(g.a,{type:"submit",label:"Sign up",className:"form-group"})]})}),Object(w.jsx)("div",{className:" text-center",children:Object(w.jsx)(x.b,{to:"/Login",className:"p-text-secondary p-mt-3 app-color font-weight-bold",children:" Already have an account?"})})]})]})]})]})})})},R=function(e){var t=e.goto,n=e.setAccountType,s=function(e,t){t.target.checked&&n(e)};return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"p-fluid",children:Object(w.jsx)("div",{className:"p-grid",children:Object(w.jsx)("div",{className:"login-pane-left p-col-12 sm-height",style:{minHeight:"104vh",margin:0},children:Object(w.jsx)("div",{className:"left-content p-col-8 mx-auto",children:Object(w.jsxs)("div",{className:"card text-center",children:[Object(w.jsx)("div",{className:"card-header appcolor ",children:"Featured"}),Object(w.jsxs)("div",{className:"card-body",children:[Object(w.jsx)("h5",{className:"card-title",children:"Select Reason for Creating an Account ?"}),Object(w.jsxs)("ul",{className:"list-group px-4 py-4",children:[Object(w.jsx)("li",{className:"list-group-item text-left",children:Object(w.jsxs)("div",{className:"form-check text-dark",children:[Object(w.jsx)("input",{className:"form-check-input",type:"radio",name:"accountType",id:"invalidCheck3",onChange:function(e){return s(k.a.INSTANT_HIRE,e)},required:!0}),Object(w.jsx)("label",{className:"form-check-label",htmlFor:"invalidCheck3"}),Object(w.jsx)("label",{htmlFor:"invalidCheck3",className:"font-weight-bold",children:"To Request for Instant Artisan Services."})]})}),Object(w.jsx)("li",{className:"list-group-item text-left",children:Object(w.jsxs)("div",{className:"form-check text-dark",children:[Object(w.jsx)("input",{className:"form-check-input",type:"radio",name:"accountType",id:"invalidCheck2",onChange:function(e){return s(k.a.ARTISAN,e)},required:!0}),Object(w.jsx)("label",{className:"form-check-label",htmlFor:"invalidCheck2"}),Object(w.jsx)("label",{htmlFor:"invalidCheck2",className:"font-weight-bold",children:"To Provide Service as an Artisan."})]})}),Object(w.jsx)("li",{className:"list-group-item text-left",children:Object(w.jsxs)("div",{className:"form-check text-dark",children:[Object(w.jsx)("input",{className:"form-check-input",type:"radio",name:"accountType",id:"invalidCheck4",onChange:function(e){return s(k.a.CORPORATE,e)},required:!0}),Object(w.jsx)("label",{className:"form-check-label",htmlFor:"invalidCheck4"}),Object(w.jsx)("label",{htmlFor:"invalidCheck4",className:"font-weight-bold",children:"To Recruit Corporate Jobseekers."})]})}),Object(w.jsx)("li",{className:"list-group-item text-left",children:Object(w.jsxs)("div",{className:"form-check text-dark",children:[Object(w.jsx)("input",{className:"form-check-input",type:"radio",name:"accountType",id:"invalidCheck",onChange:function(e){return s(k.a.JOB_SEEKER,e)},required:!0}),Object(w.jsx)("label",{htmlFor:"invalidCheck",className:"font-weight-bold",children:"To Look for Corporate Job Opportunities."})]})})]})]}),Object(w.jsx)("div",{className:"card-footer text-muted font-weight-bold",children:"STEP 1/2"}),Object(w.jsx)("div",{className:" text-right p-2 px-10",children:Object(w.jsx)("button",{type:"button",className:"btn appcolor",onClick:function(){return t(2)},children:"Next"})})]})})})})})})};t.default=function(){var e=Object(c.useState)(1),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(""),a=Object(s.a)(r,2),l=a[0],o=a[1];return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{children:[1===n&&Object(w.jsx)(R,{goto:function(e){i(e)},setAccountType:o}),2===n&&Object(w.jsx)(C,{accountType:l})]})})}}}]);
//# sourceMappingURL=29.9bbbd863.chunk.js.map