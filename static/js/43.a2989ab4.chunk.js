(this["webpackJsonpjobplicant-web"]=this["webpackJsonpjobplicant-web"]||[]).push([[43],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var c=n(2),r=n.n(c),o=n(15),i=n.n(o),a=n(17),s=n(136),l=n(114),p=n(135);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function b(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){return(j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){return!t||"object"!==j(t)&&"function"!==typeof t?f(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return h(this,n)}}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e){var t=e.appendTo||document.body,n=document.createDocumentFragment();a.c.appendChild(n,t),e=x(x({},e),{visible:void 0===e.visible||e.visible});var c=r.a.createElement(N,e);i.a.render(c,n);var o=function(t){e=x(x({},e),t),i.a.render(r.a.cloneElement(c,e),n)};return{_destroy:function(){i.a.unmountComponentAtNode(n)},show:function(){o({visible:!0,onHide:function(){o({visible:!1})}})},hide:function(){o({visible:!1})},update:function(e){o(e)}}}var N=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(i,e);var t,n,c,o=O(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={visible:e.visible},t.reject=t.reject.bind(f(t)),t.accept=t.accept.bind(f(t)),t.hide=t.hide.bind(f(t)),t}return t=i,(n=[{key:"acceptLabel",value:function(){return this.props.acceptLabel||Object(p.b)("accept")}},{key:"rejectLabel",value:function(){return this.props.rejectLabel||Object(p.b)("reject")}},{key:"accept",value:function(){this.props.accept&&this.props.accept(),this.hide("accept")}},{key:"reject",value:function(){this.props.reject&&this.props.reject(),this.hide("reject")}},{key:"show",value:function(){this.setState({visible:!0})}},{key:"hide",value:function(e){var t=this;this.setState({visible:!1},(function(){t.props.onHide&&t.props.onHide(e)}))}},{key:"componentDidUpdate",value:function(e){e.visible!==this.props.visible&&this.setState({visible:this.props.visible})}},{key:"renderFooter",value:function(){var e=Object(a.l)("p-confirm-dialog-accept",this.props.acceptClassName),t=Object(a.l)("p-confirm-dialog-reject",{"p-button-text":!this.props.rejectClassName},this.props.rejectClassName),n=r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{label:this.rejectLabel(),icon:this.props.rejectIcon,className:t,onClick:this.reject}),r.a.createElement(l.a,{label:this.acceptLabel(),icon:this.props.acceptIcon,className:e,onClick:this.accept,autoFocus:!0}));if(this.props.footer){var c={accept:this.accept,reject:this.reject,acceptClassName:e,rejectClassName:t,acceptLabel:this.acceptLabel(),rejectLabel:this.rejectLabel(),element:n,props:this.props};return a.f.getJSXElement(this.props.footer,c)}return n}},{key:"renderElement",value:function(){var e=Object(a.l)("p-confirm-dialog",this.props.className),t=Object(a.l)("p-confirm-dialog-icon",this.props.icon),n=a.f.findDiffKeys(this.props,i.defaultProps),c=a.f.getJSXElement(this.props.message,this.props),o=this.renderFooter();return r.a.createElement(s.a,u({visible:this.state.visible},n,{className:e,footer:o,onHide:this.hide,breakpoints:this.props.breakpoints}),r.a.createElement("i",{className:t}),r.a.createElement("span",{className:"p-confirm-dialog-message"},c))}},{key:"render",value:function(){var e=this.renderElement();return r.a.createElement(a.h,{element:e,appendTo:this.props.appendTo})}}])&&b(t.prototype,n),c&&b(t,c),i}(c.Component);v(N,"defaultProps",{visible:!1,message:null,rejectLabel:null,acceptLabel:null,icon:null,rejectIcon:null,acceptIcon:null,rejectClassName:null,acceptClassName:null,className:null,appendTo:null,footer:null,breakpoints:null,onHide:null,accept:null,reject:null})},958:function(e,t,n){"use strict";n.r(t);var c=n(142),r=n(2),o=n(22),i=n(11),a=n(186),s=n(43),l=n(123),p=n.n(l),u=n(130),b=n(127),f=(n(157),n(10)),d={container:{backgroundImage:"url(".concat(a.a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100%",height:"160px",position:"relative"},topBarContainer:{width:"600px",marginTop:"30px"},topBarTextContainer:{alignSelf:"center"},topBarHeaderTextStyle:{fontSize:"22px",fontWeight:"500",marginLeft:"8px",marginBottom:"4px"},topBarSubHeaderTextStyle:{color:"black",fontSize:"16px",fontWeight:"500",marginLeft:"8px"},btnApply:{backgroundColor:"#5B2946",color:"white",padding:"12px 0",marginTop:"10px",fontSize:"18px",fontWeight:500},overListItem:{marginBottom:"16px"},overviewListHeader:{fontSize:"18px",fontWeight:500},overviewListText:{fontSize:"16px",fontWeight:"normal"},contactItem:{marginBottom:"10px",fontSize:"16px",fontWeight:500}};t.default=function(){var e=Object(o.d)(),t=Object(i.g)(),n=Object(i.i)();console.log("param",n);var a=Object(o.e)((function(e){return e.instantJob.instantjob})),l=Object(o.e)((function(e){return e.job.jobApplicationRequest}));Object(o.e)((function(e){return e.job.loading}));console.log("details",a),Object(r.useEffect)((function(){e(Object(s.i)(n.id))}),[]);return null===a?Object(f.jsx)(c.a,{}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{style:d.container,children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"d-flex",style:d.topBarContainer,children:[Object(f.jsx)("div",{className:"company-logo",children:Object(f.jsx)("img",{src:"https://source.unsplash.com/random/100x100",alt:"company-logo",style:{borderRadius:"50%",height:"75px",justifyContent:"center"}})}),Object(f.jsx)("div",{className:"company-caption",style:d.topBarTextContainer,children:Object(f.jsx)("h4",{style:d.topBarHeaderTextStyle,children:a.title})})]})})}),Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row mt-4 mb-5",children:[Object(f.jsxs)("div",{className:"col-md-9",children:[Object(f.jsx)("div",{className:"d-flex justify-content-end",children:Object(f.jsxs)("button",{onClick:function(){return t.goBack()},className:"btn btn-primary",style:{backgroundColor:"#5B2946",border:"none",padding:"8px 24px"},children:[Object(f.jsx)("i",{className:"pi pi-arrow-left"})," Back"]})}),Object(f.jsxs)("div",{className:"p-card p-4 mt-2",children:[Object(f.jsx)("h4",{className:"p-title",children:"Job Description"}),Object(f.jsx)("p",{className:"mt-3",children:null===a||void 0===a?void 0:a.description})]}),Object(f.jsxs)("div",{className:"p-card p-4 mt-3",children:[Object(f.jsx)("h4",{className:"p-title",children:"Instant Job Detail"}),Object(f.jsx)("div",{className:"mt-3",children:Object(f.jsxs)("div",{className:"p-text-secondary",children:[Object(f.jsxs)("p",{className:"font-weight-bold app-color ",children:[" Service : ",Object(f.jsx)(b.a,{children:a.service})," "]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{className:"font-weight-bold app-color",children:" Location : "})," ",a.location]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{className:"font-weight-bold app-color",children:"Address : "}),a.address," "]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{className:"font-weight-bold app-color",children:"Phone Number : "}),a.phoneNumber," "]}),Object(f.jsxs)("div",{className:"p-grid",children:[Object(f.jsxs)("div",{className:"p-col-4",children:[Object(f.jsx)("span",{className:"font-weight-bold app-color",children:"Start Date: "})," ",p()(a.startDate).format("MMMM DD, YYYY")," "]}),Object(f.jsxs)("div",{className:"p-col-6",children:[Object(f.jsx)("span",{className:"font-weight-bold app-color",children:"End Date: "})," ",p()(a.endDate).format("MMMM DD, YYYY")]})]}),Object(f.jsxs)("p",{className:"float-right font-weight-bold",children:[" ",p()(a.createdAt).fromNow()," "]})]})})]}),Object(f.jsx)("button",{onClick:function(){return t=a.id,void Object(u.a)({message:"You are about to apply for this job?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){e(Object(s.b)(t))},reject:function(){}});var t},className:"btn btn-block",style:d.btnApply,children:l?Object(f.jsxs)("span",{children:[Object(f.jsx)("i",{className:"pi pi-spin pi-spinner"})," Please wait..."]}):"Apply"})]}),Object(f.jsx)("div",{className:"col-md-3"})]})})]})}}}]);
//# sourceMappingURL=43.a2989ab4.chunk.js.map