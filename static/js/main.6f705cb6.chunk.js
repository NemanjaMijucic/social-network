(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],{14:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(25),i=c.n(n),l=c(7),j=(c(14),c(11)),r=c.n(j),o=c(6),d=c(0);var b=function(){var e={color:"white"};return Object(d.jsxs)("nav",{children:[Object(d.jsx)("h3",{children:"Social Network Page"}),Object(d.jsxs)("ul",{className:"nav-links",children:[Object(d.jsx)(o.b,{style:e,to:"/",children:Object(d.jsx)("li",{children:"Posts"})}),Object(d.jsx)(o.b,{style:e,to:"/create",children:Object(d.jsx)("li",{children:"Create"})})]})]})};var m=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(l.a)(n,2),j=i[0],r=i[1],o=Object(s.useState)(""),b=Object(l.a)(o,2),m=b[0],h=b[1],O=Object(s.useState)(""),p=Object(l.a)(O,2),u=p[0],x=p[1];return Object(d.jsx)("div",{className:"create",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:c,lastName:j,tags:m,comment:u};console.log(t),a(""),r(""),h(""),x("")},children:[Object(d.jsxs)("div",{className:"post-form",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{type:"text",placeholder:"name",onChange:function(e){a(e.target.value)},value:c})]}),Object(d.jsxs)("div",{className:"post-form",children:[Object(d.jsx)("label",{htmlFor:"last name",children:"Last Name"}),Object(d.jsx)("input",{type:"text",placeholder:"last name",onChange:function(e){r(e.target.value)},value:j})]}),Object(d.jsxs)("div",{className:"post-form",children:[Object(d.jsx)("label",{htmlFor:"tags",children:"Tags"}),Object(d.jsx)("input",{type:"text",placeholder:"tags",onChange:function(e){h(e)},value:m})]}),Object(d.jsxs)("div",{className:"post-form",children:[Object(d.jsx)("label",{htmlFor:"comment",children:"Comment"}),Object(d.jsx)("input",{type:"text",placeholder:"comment",onChange:function(e){x(e.target.value)},value:u})]}),Object(d.jsxs)("div",{className:"post-form",children:[Object(d.jsx)("label",{htmlFor:"file",children:"Image"}),Object(d.jsx)("input",{type:"file",width:"80",height:"55",name:"file"})]}),Object(d.jsx)("div",{className:"post-form",children:Object(d.jsx)("button",{type:"submit",className:"btn-submit",children:"add post"})})]})})},h=function(e){return Object(d.jsx)("div",{children:e.posts.map((function(e){var t=new Date(e.publishDate).toLocaleDateString(),c=new Date(e.publishDate).toLocaleTimeString();return Object(d.jsx)(o.b,{to:{pathname:"id/".concat(e.id),state:{id:e.id,firstName:e.owner.firstName,lastName:e.owner.lastName,img:e.image,date:t,time:c,likes:e.likes,tags:e.tags,comment:e.text}},children:Object(d.jsxs)("div",{className:"post",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsxs)("p",{children:[e.owner.firstName," ",e.owner.lastName]}),Object(d.jsx)("p",{children:t+" "+c}),Object(d.jsx)("img",{src:e.image,alt:""})]}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("p",{children:[" likes ",e.likes]}),Object(d.jsx)("div",{children:e.tags.map((function(e){return Object(d.jsx)("button",{children:e})}))}),Object(d.jsx)("p",{children:e.text})]})]})})}))})},O=c(2),p=(c(59),function(){var e=Object(O.f)().state,t=Object(s.useState)(),c=Object(l.a)(t,2),a=(c[0],c[1]);return Object(s.useEffect)((function(){r.a.get("https://dummyapi.io/data/v1/post?limit=10",{headers:{"app-id":"616e75e6a7d1af79dadb9732"}}).then((function(e){a(e.data.data.map((function(e){return e})))}))}),[]),Object(d.jsxs)("div",{className:"single_post",children:[Object(d.jsxs)("div",{className:"single_post__left",children:[Object(d.jsxs)("p",{children:[e.firstName," ",e.lastName]}),Object(d.jsx)("p",{children:e.date+" "+e.time}),Object(d.jsx)("img",{src:e.img,alt:""})]}),Object(d.jsxs)("div",{className:"single_post__right",children:[Object(d.jsxs)("p",{children:[" likes ",e.likes]}),Object(d.jsx)("div",{children:e.tags.map((function(e){return Object(d.jsx)("button",{className:"tag_button",children:e})}))}),Object(d.jsx)("p",{children:e.comment}),Object(d.jsx)("form",{children:Object(d.jsx)("textarea",{placeholder:"add comment",rows:"4",cols:"50"})})]})]})});var u=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){r.a.get("https://dummyapi.io/data/v1/post?limit=10",{headers:{"app-id":"616e75e6a7d1af79dadb9732"}}).then((function(e){a(e.data.data.map((function(e){return e})))}))}),[]),Object(d.jsx)(o.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{path:"/create/",component:m}),Object(d.jsx)(O.a,{path:"/id",component:p}),Object(d.jsx)(O.a,{path:"/",component:h,children:Object(d.jsx)(h,{posts:c},c.map((function(e){return e.id})))})]})})]})})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.6f705cb6.chunk.js.map