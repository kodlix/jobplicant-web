(this["webpackJsonpjobplicant-web"]=this["webpackJsonpjobplicant-web"]||[]).push([[12],{332:function(e,t,i){},577:function(e,t,i){},578:function(e,t,i){},585:function(e,t){},587:function(e,t){},620:function(e,t){},621:function(e,t){},740:function(e,t){},971:function(e,t,i){"use strict";i.r(t);var n=i(113),l=i(114),c=i(2),s=i.n(c),r=i(11),o=i(42),a=(i(577),i(293),i(294),i(10)),d=function(e){var t=e.onSelected,i=(e.url,e.selected),n=e.template,l=(Object(r.g)(),n.id),c=n.title,s=n.image;return Object(a.jsx)("div",{className:"card template-card ".concat(i===l?"selected":""),onClick:function(){return t(l,n)},children:Object(a.jsxs)("div",{className:"card-body p-2",children:[Object(a.jsx)("p",{className:"p-pt-2 font-weight-bold",children:c}),Object(a.jsx)("img",{src:s,style:{width:"100%"},alt:"Template-1"})]})})},j=i.p+"static/media/template~1.50fc9e71.png",x=i.p+"static/media/template2.e89cee7a.jpg",b=i.p+"static/media/template3.149e9858.jpg",p=i.p+"static/media/template4.4dfab9c5.jpg",h=[{id:1,title:"CV Template 1",url:"template-1",image:j},{id:2,title:"CV Template 2",url:"template-2",image:x},{id:3,title:"CV Template 3",url:"template-3",image:b},{id:4,title:"CV Template 4",url:"template-4",image:p}],y=(i(578),i(123)),f=i.n(y),u=i(213),O=i(131),m=(i(332),function(e){var t=e.editMode,i=Object(c.useState)(0),l=Object(n.a)(i,2),s=l[0],r=l[1];return Object(a.jsxs)(a.Fragment,{children:[t&&Object(a.jsx)(O.a,{options:[{label:"Novice",value:20},{label:"Amateur",value:50},{label:"Professional",value:75},{label:"Expert",value:100}],value:s,onChange:function(e){return r(e.value)},placeholder:"Skill level",className:"form-control"}),Object(a.jsx)("div",{style:{padding:"10px"}}),Object(a.jsx)("div",{className:"info-progress",children:Object(a.jsx)(u.a,{value:s})})]})}),S=function(e){var t=e.profileInfo,i=e.editMode,n=e.setEditMode;return console.log("profile info",t),Object(a.jsx)("div",{className:"template-container",children:Object(a.jsxs)("div",{className:"p-grid",children:[Object(a.jsx)("div",{className:"p-col-4",children:Object(a.jsxs)("div",{className:"sidebar-content",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("div",{className:"header",children:[Object(a.jsxs)("h3",{children:[t.firstName," ",t.lastName]}),Object(a.jsx)("p",{className:"heading-3",children:"Sales Representative"})]})}),Object(a.jsxs)("div",{className:"section personal-info",children:[Object(a.jsx)("header",{children:"Personal Info"}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("h4",{className:"info-title",children:"Phone"}),Object(a.jsx)("p",{className:"info-text",children:null===t||void 0===t?void 0:t.phoneNumber})]}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("h4",{className:"info-title",children:"Email"}),Object(a.jsx)("p",{className:"info-text",children:null===t||void 0===t?void 0:t.contactEmail})]}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("h4",{className:"info-title",children:"LinkedIn"}),Object(a.jsx)("p",{className:"info-text",children:"linkedIn.com/in/jillmorganzety"})]})]}),Object(a.jsxs)("div",{className:"section skill",children:[Object(a.jsxs)("header",{children:["Skills ",i?Object(a.jsx)("i",{className:"pi pi-times",style:{color:"white",fontSize:"16px"},onClick:function(){return n(!1)}}):Object(a.jsx)("i",{className:"pi pi-pencil",style:{color:"white",fontSize:"16px"},onClick:function(){return n(!0)}})," "]}),null===t||void 0===t?void 0:t.skills.map((function(e,t){return Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("h4",{className:"info-title",children:e}),Object(a.jsx)(m,{editMode:i,skill:e})]},t)}))]}),Object(a.jsxs)("div",{className:"section language",children:[Object(a.jsx)("header",{children:"Language"}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("h4",{className:"info-title",children:"Spanish"}),Object(a.jsx)("p",{className:"info-progress",children:Object(a.jsx)(u.a,{value:45})}),Object(a.jsx)("p",{className:"info-small-right-text",children:"C1 Certified"})]}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("h4",{className:"info-title",children:"Italian"}),Object(a.jsx)("p",{className:"info-progress",children:Object(a.jsx)(u.a,{value:60})}),Object(a.jsx)("p",{className:"info-small-right-text",children:"Basic"})]})]})]})}),Object(a.jsx)("div",{className:"p-col-8",children:Object(a.jsxs)("div",{className:"main-content",children:[Object(a.jsx)("p",{className:"bio",children:t.profile}),Object(a.jsxs)("div",{className:"experience",children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h4",{children:"Experience"}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"experience-list",children:t.experiences.map((function(e){return Object(a.jsxs)("div",{className:"experience-item",children:[Object(a.jsxs)("div",{className:"experience-duration",children:[Object(a.jsx)("span",{children:f()(e.startDate).format("YYYY-MM")})," - ",Object(a.jsx)("span",{children:f()(e.endDate).format("YYYY-MM")})]}),Object(a.jsxs)("div",{className:"experience-body",children:[Object(a.jsx)("h4",{children:e.jobTitle}),Object(a.jsxs)("p",{className:"company",children:[e.company,", ",e.location]}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Managed organizational sales and group of sales Representative"}),Object(a.jsx)("li",{children:"Curabitur in efficitur ex, ac rutrum purus. Quisque pellentesque iaculis orci"}),Object(a.jsx)("li",{children:"Proin vulputate varius est, ut dictum neque aliquet sit amet. Curabitur blandit nunc in"}),Object(a.jsx)("li",{children:"Curabitur in efficitur ex, ac rutrum purus. Quisque pellentesque iaculis orci"})]}),Object(a.jsx)("h4",{className:"key-achievement",children:"Key Achievement"}),Object(a.jsx)("p",{className:"achievement",children:"Achieved over $500,000 in sales in each fiscal quarter from 2019."})]})]},e.id)}))})]})]})})]})})},g=i(22),v=i(28),T=i(142),w=i(125),V=w.StyleSheet.create({container:{backgroundColor:"#000",paddingVertical:"8px ",paddingLeft:"12px",fontSize:"12px",fontWeight:500,color:"#f4f4f4",display:"flex",flexDirection:"row",justifyContent:"space-between"}}),N=function(e){var t=e.label;return Object(a.jsx)(w.Text,{style:V.container,children:t})},I=w.StyleSheet.create({container:{paddingTop:"8px",paddingLeft:"12px"},titleStyle:{fontSize:"12px",color:"#aaa"},textStyle:{fontSize:"12px",fontWeight:500,color:"#eee"}}),z=function(e){var t=e.title,i=e.label;return Object(a.jsxs)(w.View,{style:I.container,children:[Object(a.jsx)(w.Text,{style:I.titleStyle,children:t}),Object(a.jsx)(w.Text,{style:I.textStyle,children:i})]})},C=w.StyleSheet.create({container:{paddingTop:"8px",paddingLeft:"12px"},titleStyle:{fontSize:"12px",color:"#aaa"}}),W=function(e){var t=e.title;e.value;return Object(a.jsx)(w.View,{style:C.container,children:Object(a.jsx)(w.Text,{style:C.titleStyle,children:t})})},Y=w.StyleSheet.create({container:{backgroundColor:"#222",width:"30%",height:"100%"},header:{padding:"6px 12px",marginBottom:"16px"},headerTitle:{fontSize:"16px",fontWeight:"bold",color:"#fff"},headerText:{fontSize:"12px",color:"#E0E0E0"},headerContainerStyle:{paddingBottom:"24px"}}),D=function(e){var t=e.profileInfo;return Object(a.jsxs)(w.View,{style:Y.container,fixed:!0,wrap:!1,children:[Object(a.jsxs)(w.View,{style:Y.header,children:[Object(a.jsxs)(w.Text,{style:Y.headerTitle,children:[null===t||void 0===t?void 0:t.firstName," ",null===t||void 0===t?void 0:t.lastName]}),Object(a.jsx)(w.Text,{style:Y.headerText,children:"Sales Representative"})]}),Object(a.jsx)(N,{label:"Personal Info"}),Object(a.jsxs)(w.View,{style:Y.headerContainerStyle,children:[Object(a.jsx)(z,{title:"Phone",label:null===t||void 0===t?void 0:t.contactPhone}),Object(a.jsx)(z,{title:"E-mail",label:null===t||void 0===t?void 0:t.contactEmail}),Object(a.jsx)(z,{title:"LinkedIn",label:"linkedin.com/in/jilimorganzety"})]}),Object(a.jsx)(N,{label:"Skills"}),Object(a.jsx)(w.View,{style:Y.headerContainerStyle,children:null===t||void 0===t?void 0:t.skills.map((function(e,t){return Object(a.jsx)(W,{title:e},t)}))}),Object(a.jsx)(N,{label:"Hobbies"}),Object(a.jsx)(w.View,{style:Y.headerContainerStyle,children:null===t||void 0===t?void 0:t.hobbies.map((function(e,t){return Object(a.jsx)(W,{title:e},t)}))})]})},E=w.StyleSheet.create({container:{flexDirection:"row",paddingBottom:"8px"},momentContainer:{width:"20%",padding:"8px"},momentStyle:{fontSize:"11px"},bodyContainer:{width:"80%",padding:"4px"},bodyText:{fontSize:"10px",textAlign:"justify"},bodyHeaderStyle:{},bodyHeaderTitle:{fontSize:"12px",fontWeight:500},bodyHeaderSubtitle:{fontSize:"10px",fontWeight:500,fontStyle:"italic"},space:{padding:"4px"}}),k=function(e){var t=e.experience;return Object(a.jsxs)(w.View,{style:E.container,wrap:!1,children:[Object(a.jsxs)(w.View,{style:E.momentContainer,children:[Object(a.jsxs)(w.Text,{style:E.momentStyle,children:[f()(t.startDate).format("YYYY-MM")," - "]}),Object(a.jsx)(w.Text,{style:E.momentStyle,children:f()(t.endDate).format("YYYY-MM")})]}),Object(a.jsxs)(w.View,{style:E.bodyContainer,children:[Object(a.jsxs)(w.View,{style:E.bodyHeaderStyle,children:[Object(a.jsx)(w.Text,{style:E.bodyHeaderTitle,children:t.jobTitle}),Object(a.jsxs)(w.Text,{style:E.bodyHeaderSubtitle,children:[t.company,", ",t.location]})]}),Object(a.jsx)(w.View,{style:E.space}),Object(a.jsxs)(w.View,{style:E.bodyText,children:[Object(a.jsx)(w.Text,{children:"Managed organizational sales and group of sales Representative"}),Object(a.jsx)(w.Text,{children:"Curabitur in efficitur ex, ac rutrum purus. Quisque pellentesque iaculis orci"}),Object(a.jsx)(w.Text,{children:"Proin vulputate varius est, ut dictum neque aliquet sit amet. Curabitur blandit nunc in"}),Object(a.jsx)(w.Text,{children:"Curabitur in efficitur ex, ac rutrum purus. Quisque pellentesque iaculis orci"})]}),Object(a.jsx)(w.View,{style:E.space}),Object(a.jsxs)(w.View,{style:[E.bodyText],children:[Object(a.jsx)(w.Text,{children:"Key Achievement"}),Object(a.jsx)(w.Text,{children:"Achieved over $500,000 in sales in each fiscal quarter from 2019."})]})]})]})},B=w.StyleSheet.create({container:{flexDirection:"row",marginBottom:"8px"},momentContainer:{width:"20%",padding:"8px"},momentStyle:{fontSize:"11px"},bodyContainer:{width:"80%",padding:"4px"},bodyText:{fontSize:"10px",textAlign:"justify"},bodyHeaderStyle:{},bodyHeaderTitle:{fontSize:"12px",fontWeight:500},bodyHeaderSubtitle:{fontSize:"10px",fontWeight:500,fontStyle:"italic"},space:{padding:"4px"}}),P=function(e){var t=e.education;return Object(a.jsxs)(w.View,{style:B.container,children:[Object(a.jsx)(w.View,{style:B.momentContainer,children:Object(a.jsx)(w.Text,{style:B.momentStyle,children:f()(t.yearOfGraducation).format("YYYY")})}),Object(a.jsxs)(w.View,{style:B.bodyContainer,children:[Object(a.jsxs)(w.View,{style:B.bodyHeaderStyle,children:[Object(a.jsx)(w.Text,{style:B.bodyHeaderTitle,children:t.qualification}),Object(a.jsxs)(w.Text,{style:B.bodyHeaderSubtitle,children:[t.institution,", ",t.country]})]}),Object(a.jsx)(w.View,{style:B.space}),Object(a.jsxs)(w.View,{style:B.bodyText,children:[Object(a.jsxs)(w.Text,{children:["Course: ",Object(a.jsx)("strong",{children:t.course})]}),Object(a.jsx)(w.Text,{children:"Curabitur in efficitur ex, ac rutrum purus. Quisque pellentesque iaculis orci"}),Object(a.jsx)(w.Text,{children:"Proin vulputate varius est, ut dictum neque aliquet sit amet. Curabitur blandit nunc in"}),Object(a.jsx)(w.Text,{children:"Curabitur in efficitur ex, ac rutrum purus. Quisque pellentesque iaculis orci"})]}),Object(a.jsx)(w.View,{style:B.space}),Object(a.jsxs)(w.View,{style:[B.bodyText],children:[Object(a.jsx)(w.Text,{children:"Key Achievement"}),Object(a.jsx)(w.Text,{children:"Achieved over $500,000 in sales in each fiscal quarter from 2019."})]})]})]})},L=w.StyleSheet.create({container:{width:"70%",paddingTop:"7px",paddingHorizontal:"8px"},bioStyle:{fontSize:"12px",fontWeight:500,lineHeight:"1.2",marginBottom:"20px"},bioTextStyle:{textAlign:"justify"},headerStyle:{borderTopWidth:"2px",borderTopColor:"#333",borderBottomColor:"#333",borderBottomWidth:"2px",paddingVertical:"4px"},headerTitleStyle:{fontSize:"14px",fontWeight:400},space:{padding:"16px"}}),M=function(e){var t=e.profileInfo;return Object(a.jsxs)(w.View,{style:L.container,children:[Object(a.jsx)(w.View,{style:L.bioStyle,children:Object(a.jsx)(w.Text,{style:L.bioTextStyle,children:t.profile})}),Object(a.jsx)(w.View,{style:L.headerStyle,children:Object(a.jsx)(w.Text,{style:L.headerTitleStyle,children:"Experiences"})}),Object(a.jsx)(w.View,{children:t.experiences.map((function(e,t){return Object(a.jsx)(k,{experience:e},t)}))}),Object(a.jsx)(w.View,{style:L.space}),Object(a.jsx)(w.View,{style:L.headerStyle,children:Object(a.jsx)(w.Text,{style:L.headerTitleStyle,children:"Education"})}),Object(a.jsx)(w.View,{children:t.educations.map((function(e,t){return Object(a.jsx)(P,{education:e},t)}))})]})},H=w.StyleSheet.create({page:{backgroundColor:"#e4e4e4",position:"relative"},sidePanelBackground:{backgroundColor:"#e4e4e4",width:"180px",height:"100vh",position:"absolute",top:0,bottom:0,zIndex:-1},contents:{flexDirection:"row",justifyContent:"space-between"}}),A=function(e){var t=e.profileInfo;e.editMode,e.setEditMode;return Object(a.jsx)(w.Document,{children:Object(a.jsxs)(w.Page,{size:"A4",style:H.page,wrap:!1,children:[Object(a.jsxs)(w.View,{style:H.contents,children:[Object(a.jsx)(D,{profileInfo:t}),Object(a.jsx)(M,{profileInfo:t})]}),Object(a.jsx)(w.View,{style:H.sidePanelBackground,fixed:!0})]})})},q=w.StyleSheet.create({container:{flexDirection:"row",justifyContent:"space-between"},left:{alignSelf:"flex-start"},nameContainer:{flexDirection:"row"},nameTextStyle:{fontSize:"30px",fontWeight:"normal"},nameTextStyleBold:{fontWeight:"bold",fontSize:"30px"},subtitleTexStyle:{fontWeight:17,letterSpacing:2},right:{alignSelf:"flex-end"},rightTextContainer:{flexDirection:"row"},rightKeyTextBold:{fontSize:12,fontWeight:"bold"},rightTextStyle:{fontSize:12,fontWeight:"normal"}}),R=function(e){var t=e.profileInfo;return Object(a.jsxs)(w.View,{style:q.container,children:[Object(a.jsxs)(w.View,{style:q.left,children:[Object(a.jsxs)(w.View,{style:q.nameContainer,children:[Object(a.jsx)(w.Text,{style:q.nameTextStyleBold,children:null===t||void 0===t?void 0:t.firstName}),Object(a.jsx)(w.Text,{children:" "}),Object(a.jsxs)(w.Text,{style:q.nameTextStyle,children:[" ",null===t||void 0===t?void 0:t.lastName]})]}),(null===t||void 0===t?void 0:t.experiences[0])&&Object(a.jsx)(w.Text,{style:q.subtitleTexStyle,children:null===t||void 0===t?void 0:t.experiences[0].jobTitle})]}),Object(a.jsxs)(w.View,{style:q.right,children:[(null===t||void 0===t?void 0:t.contactPhoneNumber)&&Object(a.jsxs)(w.View,{style:q.rightTextContainer,children:[Object(a.jsx)(w.Text,{style:q.rightKeyTextBold,children:"T:"}),Object(a.jsx)(w.Text,{style:q.rightTextStyle,children:null===t||void 0===t?void 0:t.contactPhoneNumber})]}),(null===t||void 0===t?void 0:t.contactEmail)&&Object(a.jsxs)(w.View,{style:q.rightTextContainer,children:[Object(a.jsx)(w.Text,{style:q.rightKeyTextBold,children:"E:"}),Object(a.jsxs)(w.Text,{style:q.rightTextStyle,children:[" ",null===t||void 0===t?void 0:t.contactEmail]})]}),(null===t||void 0===t?void 0:t.website)&&Object(a.jsxs)(w.View,{style:q.rightTextContainer,children:[Object(a.jsx)(w.Text,{style:q.rightKeyTextBold,children:"A:"}),Object(a.jsxs)(w.Text,{style:q.rightTextStyle,children:[" ",null===t||void 0===t?void 0:t.website]})]})]})]})},K=w.StyleSheet.create({container:{marginTop:"10px"},divider:{border:"1px solid #bbb",width:"100%",height:1},profileContainer:{paddingTop:"16px"},titleStyle:{fontSize:"14px",fontWeight:"bold",paddingBottom:"8px"},descriptionStyle:{fontSize:"12px",paddingBottom:"10px"}}),F=function(e){var t=e.profileInfo;return Object(a.jsxs)(w.View,{style:K.container,children:[Object(a.jsx)(w.View,{style:K.divider}),Object(a.jsxs)(w.View,{style:K.profileContainer,children:[Object(a.jsx)(w.Text,{style:K.titleStyle,children:"PROFILE"}),Object(a.jsx)(w.Text,{style:K.descriptionStyle,children:t.profile})]})]})},Q=w.StyleSheet.create({container:{},titleStyle:{fontSize:"12px",fontWeight:"bold"},space:{padding:"8px"},itemContainer:{marginBottom:"8px"},itemStyle:{fontSize:12,fontWeight:"normal"},itemStyleBold:{fontSize:12,fontWeight:"bold"}}),G=function(e){var t=e.profileInfo;return console.log("education",t),Object(a.jsxs)(w.View,{style:Q.container,children:[Object(a.jsx)(w.Text,{style:Q.titleStyle,children:"EDUCATION"}),Object(a.jsx)(w.View,{style:Q.space}),null===t||void 0===t?void 0:t.educations.map((function(e,t){return Object(a.jsxs)(w.View,{style:Q.itemContainer,children:[Object(a.jsx)(w.Text,{style:Q.itemStyleBold,children:e.institution}),Object(a.jsxs)(w.Text,{style:Q.itemStyleBold,children:[e.city,", ",e.country]}),Object(a.jsxs)(w.Text,{style:Q.itemStyle,children:[e.qualification," in"]}),Object(a.jsx)(w.Text,{style:Q.itemStyle,children:e.course}),Object(a.jsx)(w.Text,{style:Q.itemStyle,children:f()(e.yearOfGraduation).format("YYYY")})]},t)}))]})},X=w.StyleSheet.create({container:{},titleStyle:{fontSize:"12px",fontWeight:"bold"},space:{padding:"8px"},itemStyle:{fontSize:12,fontWeight:"normal"},itemStyleBold:{fontSize:12,fontWeight:"bold"}}),U=function(e){var t=e.profileInfo;return Object(a.jsxs)(w.View,{style:X.container,children:[Object(a.jsx)(w.Text,{style:X.titleStyle,children:"SKILLS"}),Object(a.jsx)(w.View,{style:X.space}),null===t||void 0===t?void 0:t.skills.map((function(e,t){return Object(a.jsx)(w.Text,{style:X.itemStyle,children:e},t)}))]})},$=w.StyleSheet.create({container:{marginTop:"10px"},divider:{border:"1px solid #bbb",width:"100%",height:1},experienceStyle:{paddingTop:"12px"},titleStyle:{fontSize:14},space:{padding:"10px"},rowStyle:{flexDirection:"row"},dateStyle:{fontSize:12},jobTitleStyle:{fontSize:12},jobDescriptionStyle:{fontSize:11,textAlign:"justify",flexWrap:"wrap"},jobItemsStyle:{fontSize:11},experienceContentStyle:{borderLeftWidth:"1px",borderLeftColor:"#999",paddingLeft:4,paddingBottom:8,textAlign:"justify",flexWrap:"wrap",marginRight:10}}),J=function(e){var t=e.profileInfo;return Object(a.jsxs)(w.View,{style:$.container,children:[Object(a.jsx)(w.View,{style:$.divider}),Object(a.jsx)(w.View,{style:$.experienceStyle,children:Object(a.jsx)(w.Text,{style:$.titleStyle,children:"WORK EXPERIENCE"})}),Object(a.jsx)(w.View,{style:$.space}),null===t||void 0===t?void 0:t.experiences.map((function(e,t){return Object(a.jsxs)(w.View,{style:$.rowStyle,wrap:!1,children:[Object(a.jsx)(w.View,{children:Object(a.jsxs)(w.Text,{style:$.dateStyle,children:[f()(e.startDate).format("YYYY-MM")," -"," ",f()(e.endDate).format("YYYY-MM")]})}),Object(a.jsx)(w.View,{style:$.space}),Object(a.jsxs)(w.View,{style:$.experienceContentStyle,children:[Object(a.jsxs)(w.Text,{style:$.jobTitleStyle,children:[e.jobTitle," / ",e.company]}),Object(a.jsx)(w.View,{style:$.space}),Object(a.jsx)(w.Text,{style:$.jobDescriptionStyle,children:e.description})]})]})}))]})},Z=w.StyleSheet.create({container:{},titleStyle:{fontSize:"12px",fontWeight:"bold"},space:{padding:"8px"},itemStyle:{fontSize:12,fontWeight:"normal"},itemStyleBold:{fontSize:12,fontWeight:"bold"}}),_=function(){return Object(a.jsxs)(w.View,{style:Z.container,children:[Object(a.jsx)(w.Text,{style:Z.titleStyle,children:"EXPERTISE"}),Object(a.jsx)(w.View,{style:Z.space}),Object(a.jsx)(w.Text,{style:Z.itemStyle,children:"Building organizations"}),Object(a.jsx)(w.Text,{style:Z.itemStyle,children:"Strategic Planning"}),Object(a.jsx)(w.Text,{style:Z.itemStyle,children:"client Management"}),Object(a.jsx)(w.Text,{style:Z.itemStyle,children:"Social Perceptiveness"}),Object(a.jsx)(w.Text,{style:Z.itemStyle,children:"Business Development"})]})},ee=w.StyleSheet.create({container:{},titleStyle:{fontSize:"12px",fontWeight:"bold"},space:{padding:"8px"},itemStyle:{fontSize:12,fontWeight:"normal"},itemStyleBold:{fontSize:12,fontWeight:"bold"}}),te=function(e){var t=e.profileInfo;return Object(a.jsxs)(w.View,{style:ee.container,children:[Object(a.jsx)(w.Text,{style:ee.titleStyle,children:"INTEREST"}),Object(a.jsx)(w.View,{style:ee.space}),null===t||void 0===t?void 0:t.interests.map((function(e,t){return Object(a.jsx)(w.Text,{style:ee.itemStyle,children:e},t)}))]})},ie=w.StyleSheet.create({container:{},titleStyle:{fontSize:"12px",fontWeight:"bold"},space:{padding:"8px"},itemStyle:{fontSize:12,fontWeight:"normal"},itemStyleBold:{fontSize:12,fontWeight:"bold"}}),ne=function(e){var t=e.profileInfo;return Object(a.jsxs)(w.View,{style:ie.container,children:[Object(a.jsx)(w.Text,{style:ie.titleStyle,children:"HOBBIES"}),Object(a.jsx)(w.View,{style:ie.space}),null===t||void 0===t?void 0:t.hobbies.map((function(e,t){return Object(a.jsx)(w.Text,{style:ie.itemStyle,children:e},t)}))]})},le=w.StyleSheet.create({page:{backgroundColor:"#e4e4e4",paddingVertical:"20px",position:"relative",paddingHorizontal:"20px"},sidePanelBackground:{backgroundColor:"#333",width:"180px",height:"100vh",position:"absolute",zIndex:-1},contents:{flexDirection:"row",justifyContent:"space-between"},divider:{border:"1px solid #bbb",width:"100%",height:1},rowStyle:{flexDirection:"row",justifyContent:"space-evenly",paddingTop:12}}),ce=function(e){var t=e.profileInfo;e.editMode,e.setEditMode;return Object(a.jsx)(w.Document,{children:Object(a.jsxs)(w.Page,{size:"A4",style:le.page,children:[Object(a.jsx)(R,{profileInfo:t}),Object(a.jsx)(F,{profileInfo:t}),Object(a.jsx)(w.View,{style:le.divider}),Object(a.jsxs)(w.View,{style:le.rowStyle,children:[Object(a.jsx)(G,{profileInfo:t}),Object(a.jsx)(U,{profileInfo:t}),Object(a.jsx)(_,{profileInfo:t})]}),Object(a.jsx)(J,{profileInfo:t}),Object(a.jsx)(w.View,{style:le.divider}),Object(a.jsxs)(w.View,{style:le.rowStyle,children:[Object(a.jsx)(te,{profileInfo:t}),Object(a.jsx)(ne,{profileInfo:t})]})]})})},se=w.StyleSheet.create({container:{},titleContainer:{textAlign:"center",flexDirection:"column",justifyContent:"center",alignItems:"center"},titleStyle:{fontSize:18,fontWeight:"bold",paddingTop:8,paddingBottom:4},subtitleStyle:{letterSpacing:2,fontSize:14,fontWeight:"normal"},spacer:{padding:4},contactContainer:{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",paddingVertical:4},contactTextStyle:{fontSize:10},contactSpacer:{paddingHorizontal:4}}),re=function(e){var t=e.profileInfo;return Object(a.jsxs)(w.View,{style:se.container,children:[Object(a.jsxs)(w.View,{style:se.titleContainer,children:[Object(a.jsxs)(w.Text,{style:se.titleStyle,children:[null===t||void 0===t?void 0:t.firstName," ",null===t||void 0===t?void 0:t.lastName]}),(null===t||void 0===t?void 0:t.experiences[0])&&Object(a.jsx)(w.Text,{style:se.subtitleStyle,children:null===t||void 0===t?void 0:t.experiences[0].jobTitle})]}),Object(a.jsx)(w.View,{style:se.spacer}),Object(a.jsxs)(w.View,{style:se.contactContainer,children:[Object(a.jsx)(w.Text,{style:se.contactTextStyle,children:null===t||void 0===t?void 0:t.contactPhoneNumber}),(null===t||void 0===t?void 0:t.contactEmail)&&Object(a.jsx)(w.Text,{style:se.contactSpacer,children:"|"}),Object(a.jsx)(w.Text,{style:se.contactTextStyle,children:null===t||void 0===t?void 0:t.contactEmail}),(null===t||void 0===t?void 0:t.website)&&Object(a.jsx)(w.Text,{style:se.contactSpacer,children:"|"}),Object(a.jsx)(w.Text,{style:se.contactTextStyle,children:null===t||void 0===t?void 0:t.website})]})]})},oe=w.StyleSheet.create({page:{},divider:{border:"1px solid #bbb",width:"100%",height:1,marginHorizontal:30,marginRight:36},space:{padding:8},container:{paddingVertical:12,paddingHorizontal:30},titleStyle:{textAlign:"center",fontSize:13,fontWeight:"bold",paddingBottom:8},descriptionStyle:{fontSize:11},contentStyle:{},contentTitle:{fontWeight:"bold",fontSize:12},contentSubtitle:{fontWeight:"semibold",fontSize:11},contentDescription:{fontSize:11,fontWeight:"semibold"},contentListStyle:{},contentListItemStyle:{fontSize:11,fontWeight:"semibold"},skillTextContainer:{flexDirection:"row"},skillTextStyleBold:{fontSize:11,fontWeight:"heavy"},skillTextStyle:{fontSize:11,fontWeight:"semibold",marginLeft:12},publicationTextStyle:{fontSize:12,fontWeight:"semibold",marginLeft:12},space1:{padding:2}}),ae=function(e){var t=e.profileInfo;e.editMode,e.setEditMode;return console.log("profile info",t),Object(a.jsx)(w.Document,{children:Object(a.jsxs)(w.Page,{size:"A4",style:oe.page,children:[Object(a.jsx)(re,{profileInfo:t}),Object(a.jsx)(w.View,{style:oe.divider}),Object(a.jsxs)(w.View,{style:oe.container,children:[Object(a.jsx)(w.Text,{style:oe.titleStyle,children:"PROFILE"}),Object(a.jsx)(w.Text,{style:oe.descriptionStyle,children:null===t||void 0===t?void 0:t.profile})]}),Object(a.jsx)(w.View,{style:oe.divider}),Object(a.jsxs)(w.View,{style:oe.container,children:[Object(a.jsx)(w.Text,{style:oe.titleStyle,children:"EDUCATION"}),t.educations.map((function(e,t){return Object(a.jsxs)(w.View,{style:oe.contentStyle,children:[Object(a.jsxs)(w.Text,{style:oe.contentTitle,children:[e.institution,", ",e.city,", ",e.country]}),Object(a.jsxs)(w.Text,{style:oe.contentSubtitle,children:[e.qualification," in ",e.course,", ",f()(e.yearOfGraducation).format("YYYY")]}),Object(a.jsx)(w.View,{style:oe.space1})]},t)}))]}),Object(a.jsx)(w.View,{style:oe.divider}),Object(a.jsxs)(w.View,{style:oe.container,children:[Object(a.jsx)(w.Text,{style:oe.titleStyle,children:"PROFESSIONAL EXPERIENCE"}),null===t||void 0===t?void 0:t.experiences.map((function(e,t){return Object(a.jsxs)(w.View,{children:[Object(a.jsxs)(w.View,{style:oe.contentStyle,children:[Object(a.jsx)(w.Text,{style:oe.contentTitle,children:e.jobTitle}),Object(a.jsxs)(w.Text,{style:oe.contentSubtitle,children:[e.company," / ",f()(e.startDate).format("YYYY-MM")," - ",f()(e.endDate).format("YYYY-MM")," "]})]}),Object(a.jsxs)(w.View,{children:[Object(a.jsx)(w.View,{style:oe.space}),Object(a.jsx)(w.Text,{style:oe.contentDescription,children:e.jobDescription})]})]},t)}))]}),Object(a.jsx)(w.View,{style:oe.divider}),Object(a.jsxs)(w.View,{style:oe.container,children:[Object(a.jsx)(w.Text,{style:oe.titleStyle,children:"SKILLS"}),Object(a.jsx)(w.View,{style:oe.skillTextContainer,children:null===t||void 0===t?void 0:t.skills.map((function(e,t){return Object(a.jsx)(w.Text,{style:oe.skillTextStyle,children:e},t)}))})]}),Object(a.jsx)(w.View,{style:oe.divider}),Object(a.jsxs)(w.View,{style:oe.container,children:[Object(a.jsx)(w.Text,{style:oe.titleStyle,children:"HOBBIES"}),null===t||void 0===t?void 0:t.hobbies.map((function(e,t){return Object(a.jsx)(w.Text,{style:oe.publicationTextStyle,children:e})}))]})]})})},de=w.StyleSheet.create({container:{backgroundColor:"#00008B",paddingTop:24,justifyContent:"center",alignItems:"center"},titleStyle:{fontSize:22,fontWeight:"light",color:"#f5f5f5"},subtitle:{fontSize:13,fontWeight:"light",color:"#f5f5f5"},spacer:{padding:8},divider:{border:"1px solid #f3f3f3",height:1,width:"100%",marginTop:16}}),je=function(e){var t=e.profileInfo;return Object(a.jsxs)(w.View,{style:de.container,children:[Object(a.jsxs)(w.Text,{style:de.titleStyle,children:[null===t||void 0===t?void 0:t.firstName," ",null===t||void 0===t?void 0:t.lastName]}),Object(a.jsx)(w.View,{style:de.spacer}),(null===t||void 0===t?void 0:t.experiences[0])&&Object(a.jsx)(w.Text,{style:de.subtitle,children:null===t||void 0===t?void 0:t.experiences[0].jobTitle}),Object(a.jsx)(w.View,{style:de.divider}),Object(a.jsx)(w.View,{style:de.spacer})]})},xe=w.StyleSheet.create({container:{},contactItem:{marginVertical:"2px",flexDirection:"row"},contactItemTextStyle:{fontSize:"10px"},titleStyle:{fontSize:"12px",fontWeight:"light",paddingBottom:4},ballStyle:{backgroundColor:"#00008B",borderRadius:"50px",width:10,height:10,textAlign:"center",marginRight:3}}),be=function(e){var t=e.profileInfo;return Object(a.jsxs)(w.View,{style:xe.container,children:[Object(a.jsx)(w.Text,{style:xe.titleStyle,children:"CONTACT"}),(null===t||void 0===t?void 0:t.contactEmail)&&Object(a.jsxs)(w.View,{style:xe.contactItem,children:[Object(a.jsx)(w.View,{style:xe.ballStyle,children:Object(a.jsx)(w.Text,{children:"#"})}),Object(a.jsx)(w.Text,{style:xe.contactItemTextStyle,children:null===t||void 0===t?void 0:t.contactEmail})]}),(null===t||void 0===t?void 0:t.contactPhoneNumber)&&Object(a.jsxs)(w.View,{style:xe.contactItem,children:[Object(a.jsx)(w.View,{style:xe.ballStyle,children:Object(a.jsx)(w.Text,{children:"#"})}),Object(a.jsx)(w.Text,{style:xe.contactItemTextStyle,children:null===t||void 0===t?void 0:t.contactPhoneNumber})]}),t.website&&Object(a.jsxs)(w.View,{style:xe.contactItem,children:[Object(a.jsx)(w.View,{style:xe.ballStyle,children:Object(a.jsx)(w.Text,{children:"#"})}),Object(a.jsx)(w.Text,{style:xe.contactItemTextStyle,children:null===t||void 0===t?void 0:t.website})]})]})},pe=w.StyleSheet.create({container:{},contactItem:{marginVertical:"2px",flexDirection:"row"},contactItemTextStyle:{fontSize:"10px"},titleStyle:{fontSize:"11px",fontWeight:"light"},contentStyle:{paddingTop:"8px"},contentTitleStyle:{fontSize:"10px",fontWeight:"bold"},contentDescriptionStyle:{fontSize:"9px",flexWrap:"wrap"}}),he=function(e){var t=e.profileInfo;return Object(a.jsxs)(w.View,{style:pe.container,children:[Object(a.jsx)(w.Text,{style:pe.titleStyle,children:"EDUCATION"}),t.educations.map((function(e,t){return Object(a.jsxs)(w.View,{style:pe.contentStyle,children:[Object(a.jsx)(w.Text,{style:pe.contentTitleStyle,children:e.institution}),Object(a.jsx)(w.Text,{style:pe.contentTitleStyle,children:e.country}),Object(a.jsxs)(w.Text,{style:pe.contentDescriptionStyle,children:[e.qualification," in ","\n",e.course," ","\n",f()(e.yearOfGraducation).format("YYYY")]})]},t)}))]})},ye=w.StyleSheet.create({container:{},contentListStyle:{marginVertical:"2px"},contactItemTextStyle:{fontSize:"11px"},titleStyle:{fontSize:"12px",fontWeight:"light"}}),fe=function(e){var t=e.profileInfo;return Object(a.jsxs)(w.View,{style:ye.container,children:[Object(a.jsx)(w.Text,{style:ye.titleStyle,children:"SKILLS"}),Object(a.jsx)(w.View,{style:ye.contentListStyle,children:null===t||void 0===t?void 0:t.skills.map((function(e,t){return Object(a.jsx)(w.Text,{style:ye.contactItemTextStyle,children:e},t)}))})]})},ue=w.StyleSheet.create({container:{},contentListStyle:{marginVertical:"2px"},contactItemTextStyle:{fontSize:"12px"},titleStyle:{fontSize:"11px",fontWeight:"normal"},content:{marginTop:"7px"},contentTitleStyle:{fontWeight:"extrabold",fontSize:"9px"},contentDescriptionStyle:{fontSize:"9px"}}),Oe=function(e){var t=e.profileInfo;return Object(a.jsxs)(w.View,{style:ue.container,children:[Object(a.jsx)(w.Text,{style:ue.titleStyle,children:"HOBBIES"}),t.hobbies.map((function(e){return Object(a.jsx)(w.View,{style:ue.content,children:Object(a.jsx)(w.Text,{style:ue.contentTitleStyle,children:e})})}))]})},me=w.StyleSheet.create({container:{},titleStyle:{fontSize:"12px",fontWeight:"semibold"},contentStyle:{paddingTop:"8px"},contentHeader:{},contentHeaderTitleStyle:{fontSize:"11px",fontWeight:"semibold"},contentHeaderDescriptionStyle:{fontSize:"10px",flexWrap:"wrap",textAlign:"justify"},contactItem:{},contentItemTextStyle:{fontSize:"10px"},spacer:{padding:4}}),Se=function(e){var t=e.profileInfo;return Object(a.jsxs)(w.View,{style:me.container,children:[Object(a.jsx)(w.Text,{style:me.titleStyle,children:"WORK EXPERIENCE"}),t.experiences.map((function(e,t){return Object(a.jsxs)(w.View,{wrap:!1,style:me.contentStyle,children:[Object(a.jsxs)(w.View,{style:me.contentHeader,children:[Object(a.jsx)(w.Text,{style:me.contentHeaderTitleStyle,children:e.jobTitle}),Object(a.jsxs)(w.Text,{style:me.contentHeaderDescriptionStyle,children:[e.company," / ",f()(e.startDate).format("YYYY-MM")," - ",f()(e.endDate).format("YYYY-MM")]})]}),Object(a.jsx)(w.View,{style:me.spacer}),Object(a.jsx)(w.View,{style:me.contentItem,children:Object(a.jsx)(w.Text,{style:me.contentItemTextStyle,children:e.description})})]},t)}))]})},ge=w.StyleSheet.create({container:{},contactItem:{marginVertical:"6px",flexDirection:"row"},titleStyle:{fontSize:"12px",fontWeight:"semibold"},spacer:{padding:4},descriptionStyle:{fontSize:"10px",flexWrap:"wrap"}}),ve=function(e){var t=e.profileInfo;return Object(a.jsxs)(w.View,{style:ge.container,children:[Object(a.jsx)(w.Text,{style:ge.titleStyle,children:"PROFILE"}),Object(a.jsx)(w.View,{style:ge.spacer}),Object(a.jsx)(w.Text,{style:ge.descriptionStyle,children:t.profile})]})},Te=w.StyleSheet.create({page:{},container:{},spacer:{padding:10},divider:{border:"1px solid #999",marginVertical:10},content:{marginHorizontal:"24px",marginTop:"16px",flexDirection:"row"},sidebar:{width:"20%"},main:{width:"80%",marginLeft:"15px",borderLeftWidth:"1px",borderLeftColor:"#999",borderLeftStyle:"solid",paddingLeft:10}}),we=function(e){var t=e.profileInfo;return Object(a.jsx)(w.Document,{children:Object(a.jsx)(w.Page,{size:"A4",style:Te.page,children:Object(a.jsxs)(w.View,{style:Te.container,children:[Object(a.jsx)(je,{profileInfo:t}),Object(a.jsx)(w.View,{style:Te.spacer}),Object(a.jsxs)(w.View,{style:Te.content,children:[Object(a.jsxs)(w.View,{style:Te.sidebar,children:[Object(a.jsx)(be,{profileInfo:t}),Object(a.jsx)(w.View,{style:Te.divider}),Object(a.jsx)(he,{profileInfo:t}),Object(a.jsx)(w.View,{style:Te.divider}),Object(a.jsx)(fe,{profileInfo:t}),Object(a.jsx)(w.View,{style:Te.divider}),Object(a.jsx)(Oe,{profileInfo:t})]}),Object(a.jsxs)(w.View,{style:Te.main,children:[Object(a.jsx)(ve,{profileInfo:t}),Object(a.jsx)(w.View,{style:Te.divider}),Object(a.jsx)(Se,{profileInfo:t})]})]})]})})})},Ve=function(e){var t=e.selected,i=(e.selectedTemplate,e.setShowPreview),l=(e.handleSelected,Object(c.useState)(!0)),s=Object(n.a)(l,2),r=(s[0],s[1],Object(g.d)()),d=Object(g.e)((function(e){return e.account.profileInfo})),j=Object(g.e)((function(e){return e.account.loading})),x=Object(c.useState)(!1),b=Object(n.a)(x,2),p=(b[0],b[1]);Object(c.useEffect)((function(){r(Object(v.e)())}),[]);var h=Object(w.usePDF)({document:A}),y=Object(n.a)(h,2),f=(y[0],y[1],function(e){switch(e){case 1:return Object(a.jsx)(A,{profileInfo:d});case 2:return Object(a.jsx)(ce,{profileInfo:d});case 3:return Object(a.jsx)(ae,{profileInfo:d});case 4:return Object(a.jsx)(we,{profileInfo:d});default:return Object(a.jsx)(S,{profileInfo:d})}});return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"generate-cv",children:Object(a.jsx)("div",{className:"content-container",children:Object(a.jsxs)("div",{className:"p-card",children:[Object(a.jsx)("div",{className:"p-card-header",children:Object(a.jsx)("div",{className:"p-4",children:Object(a.jsx)(o.b,{to:"#",onClick:function(){i(!1)},className:"bk-btn p-pt-2 app-color ml-auto",children:Object(a.jsx)("i",{className:"pi pi-arrow-left fs-5",children:"Back"})})})}),Object(a.jsx)("div",{className:"p-card-body",children:Object(a.jsx)("div",{className:"p-grid justify-content-center",children:Object(a.jsx)("div",{className:"p-col-12 p-md-12 p-lg-12 preview-pane",style:{position:"relative"},children:Object(a.jsx)("section",{children:Object(a.jsxs)("div",{className:"cv-preview-box",children:[null!==f(t)&&Object(a.jsx)(w.PDFDownloadLink,{document:f(t),fileName:"template-one.pdf",style:{textDecoration:"none",padding:"10px",color:"white",backgroundColor:"var(--primary-color)",borderRadius:"4px",width:"50%",margin:"20px auto",display:"block"},children:function(e){e.blob;var t=e.url,i=e.loading;e.error;return t&&p(!0),i?"Loading document...":"Download Pdf"}}),j?Object(a.jsx)(T.a,{}):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"d-sm-block d-md-none",children:Object(a.jsx)("h5",{children:"PDF not supported on mobile view, please view on desktop."})}),Object(a.jsx)(w.PDFViewer,{className:"col-12 d-sm-none d-md-block",height:"740px",children:f(t)})]})]})})})})})]})})})})},Ne=function(e){var t=e.selected,i=e.handleSelected,n=e.setShowPreview,c=Object(r.j)();Object(r.g)();return console.log("selected: ".concat(t)),Object(a.jsx)("div",{className:"generate-cv",children:Object(a.jsx)("div",{className:"content-container",children:Object(a.jsx)("div",{className:"p-grid",children:Object(a.jsx)("div",{className:"p-col-12",children:Object(a.jsxs)("div",{className:"p-card",children:[Object(a.jsx)("div",{className:"p-card-header",children:Object(a.jsxs)("div",{className:"p-d-flex p-flex-column p-flex-md-row p-3",children:[Object(a.jsx)("div",{children:Object(a.jsx)(o.b,{to:"/howtostart",className:"bk-btn p-pt-2 app-color mr-sm-4",style:{width:"inherit"},children:Object(a.jsx)("i",{className:"pi pi-arrow-left fs-5",children:"Back"})})}),Object(a.jsx)("h4",{className:"cv-header py-3 py-md-0",children:"Select a CV Template to generate from"}),Object(a.jsx)(l.a,{disabled:-1===t,label:"Generate",className:"p-button ml-md-auto mr-2 p-as-md-start",onClick:function(){n(!0)}})]})}),Object(a.jsx)("div",{className:"p-card-body",children:Object(a.jsx)("div",{className:"p-grid",children:h.map((function(e,n){return Object(a.jsx)("div",{className:"p-col-12 p-md-4",children:Object(a.jsx)(d,{onSelected:i,template:e,selected:t,url:"".concat(c.url,"/").concat(e.url)})},n)}))})})]})})})})})};t.default=function(){var e=s.a.useState(-1),t=Object(n.a)(e,2),i=t[0],l=t[1],c=s.a.useState(null),o=Object(n.a)(c,2),d=o[0],j=o[1],x=s.a.useState(!1),b=Object(n.a)(x,2),p=b[0],h=b[1],y=(Object(r.j)(),function(e,t){l(e),j(t)});return Object(a.jsxs)("div",{children:[!p&&Object(a.jsx)(Ne,{selected:i,handleSelected:y,setShowPreview:h}),p&&Object(a.jsx)(Ve,{selected:i,handleSelected:y,setShowPreview:h,selectedTemplate:d})]})}}}]);
//# sourceMappingURL=12.75e92325.chunk.js.map