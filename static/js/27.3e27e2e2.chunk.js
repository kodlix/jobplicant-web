(this["webpackJsonpjobplicant-web"]=this["webpackJsonpjobplicant-web"]||[]).push([[27],{562:function(e,s,t){},943:function(e,s,t){"use strict";t.r(s);var c=t(0),l=t(113),a=t(2),r=t(122),i=t(244),n=t(42),d=t(114),o=t(45),j=t(22),b=t(124),m=t(52),p=t(561),h=(t(562),t(10));s.default=function(e){e.props;var s,t,x=Object(j.e)((function(e){return e.auth.loading})),O=Object(b.a)({mode:"onChange",reValidateMode:"onChange"}),g=O.register,u=O.handleSubmit,f=O.formState.errors,N=Object(j.d)(),v=Object(a.useRef)(null),w=Object(a.useState)(!1),y=Object(l.a)(w,2),k=y[0],S=y[1],F=Object(a.useState)(""),M=Object(l.a)(F,2),E=M[0];M[1];Object(a.useEffect)((function(){console.log(E)}),[E]);return Object(a.useEffect)((function(){g("rememberme")}),[g]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"p-fluid",children:Object(h.jsxs)("div",{className:"p-grid p-mx-0",children:[Object(h.jsx)(m.a,{ref:v}),Object(h.jsx)("div",{className:"login-pane-left p-col-12 p-md-7 p-lg-8 p-p-5 small-screen",children:Object(h.jsxs)("div",{className:"left-content",children:[Object(h.jsx)("div",{children:Object(h.jsx)("h1",{className:"p-mb-0 p-text-center title",children:"Joplicant Home for all"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("h2",{className:"p-text-center sub-title",children:" Job seekers, Artisan, Employer"})}),Object(h.jsx)("section",{className:"about p-mt-4 p-mb-4",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Artisans meets employers"}),Object(h.jsx)("li",{children:" You need to get a skilled worker for that urgent need? not too worry,"}),Object(h.jsx)("li",{children:" Employeers find employees you need to get a skilled worker for that urgent need? not too worry,"}),Object(h.jsx)("li",{children:"Employees find the right jobs you need to get a skilled worker for that urgent need? not too worry,"})]})})]}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:"You need to get a skilled worker for that urgent need? not too worry, Instant Job Hire is all you need to connect to the right person within you."})})})]})}),Object(h.jsxs)("div",{className:"login-pane-right p-col-12 p-md-5 p-lg-4",children:[Object(h.jsx)("div",{className:"brand-logo text-center",children:Object(h.jsx)("img",{src:"/assets/logo.png",width:"150",alt:"brand-logo"})}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)("div",{className:" panel-login",children:Object(h.jsxs)("div",{className:"",children:[Object(h.jsxs)("div",{className:"p-mt-0 p-mb-0",children:[Object(h.jsx)("h3",{className:"sm-page-title text-center",children:"Login to your account"}),Object(h.jsxs)("p",{className:"p-m-4 text-center ",children:["Don\u2019t have an account? ",Object(h.jsx)(n.b,{className:"lnk-toggler font-weight-bold sign-up","data-panel":".panel-signup",to:"/register",children:"Sign Up Free!"})]})]}),Object(h.jsxs)("div",{className:"p-grid p-mt-0 sm-social-media text-center",children:[Object(h.jsx)("div",{className:"p-col-6",children:Object(h.jsx)(n.b,{to:"/",children:Object(h.jsxs)("span",{className:"p-badge p-badge-secondary p-badge-xl",style:{fontSize:"4rem",minWidth:"6rem",height:"4rem",lineHeight:"3rem"},children:["  ",Object(h.jsx)("i",{className:"pi pi-facebook styleclass",style:{fontSize:40}})," "]})})}),Object(h.jsx)("div",{className:"p-col-6",children:Object(h.jsx)(n.b,{to:"/",className:"",children:Object(h.jsx)("span",{className:"p-badge p-badge-danger p-badge-xl ",style:{fontSize:"4rem",minWidth:"6rem",height:"4rem",lineHeight:"3rem"},children:Object(h.jsx)("i",{className:"pi pi-google p-pt-1",style:{fontSize:40,paddingTop:"20px"},children:" "})})})})]}),Object(h.jsx)("div",{className:"p-col-xs-12 p-col-sm-12 p-mb-2 text-center",children:Object(h.jsx)("span",{className:"spanOr font-weight-bolder",children:"or"})}),Object(h.jsx)("form",{onSubmit:u((function(e){e.type="artisan",console.log(e),N(Object(o.d)(e))})),children:Object(h.jsxs)("div",{className:"p-fluid",children:[Object(h.jsxs)("div",{className:"p-field",children:[Object(h.jsx)(r.a,Object(c.a)(Object(c.a)({type:"email",name:"email",placeholder:"Mobile number or email address"},g("email",{required:"Please enter an email address or phone number"})),{},{id:"email"})),Object(h.jsx)("label",{htmlFor:"email",className:"",children:"required"===(null===f||void 0===f||null===(s=f.email)||void 0===s?void 0:s.type)&&Object(h.jsxs)("span",{className:"text-danger font-weight-bold",children:[" ",Object(h.jsx)("p",{children:f.email.message})]})})]}),Object(h.jsxs)("div",{className:"p-field",children:[Object(h.jsx)(p.a,Object(c.a)({toggleMask:!0,name:"password",placeholder:"Password",feedback:!1},g("password",{required:"Please enter your password."}))),Object(h.jsx)("label",{htmlFor:"password",className:"",children:"required"===(null===f||void 0===f||null===(t=f.password)||void 0===t?void 0:t.type)&&Object(h.jsxs)("span",{className:"text-danger font-weight-bold p-mr-6 error-msg",children:[" ",Object(h.jsx)("p",{children:f.password.message})]})})]}),Object(h.jsxs)("div",{className:"p-d-flex p-jc-between",children:[Object(h.jsxs)("div",{className:"p-field-checkbox",children:[Object(h.jsx)(i.a,{inputId:"rememberMe",name:"rememberme",id:"rememberMe",checked:k,onChange:function(e){return S(e.checked)}})," ",Object(h.jsx)("label",{htmlFor:"rememberMe",children:Object(h.jsx)("span",{className:"label-text p-ml-1",children:"Remember me"})})]}),Object(h.jsx)("div",{children:Object(h.jsx)(n.b,{className:"font-weight-bold forgot-pwd",to:"/forgotpassword",children:"Forgot password?"})})]}),Object(h.jsx)(d.a,{label:"Login",type:"submit",className:"form-group",loading:x})]})})]})})})]})]})})})}}}]);
//# sourceMappingURL=27.3e27e2e2.chunk.js.map