"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[409],{6409:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(9439),a=n(2791),o=n(4420),c=n(8137),i=n(9438),u=function(e){return e.contacts},l=function(e){return e.filter},s=function(e){var t=u(e).contacts,n=l(e);if(n){var r=n.toLowerCase(),a=t.filter((function(e){var t=e.name,n=e.number;return t.toLowerCase().trim().includes(r)||n.trim().includes(r)}));return r&&!a.length&&alert("No contacts matching your request"),a}return t},d=n(2587),m=n(4294),f=n(184),h=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],l=t[1],s=(0,a.useState)(""),h=(0,r.Z)(s,2),x=h[0],y=h[1],g=(0,o.v9)(u).contacts,p=(0,o.I0)(),v=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":l(r);break;case"number":y(r);break;default:return}},b=function(){l(""),y("")};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=n.toLowerCase();if(g.find((function(e){return e.name.toLowerCase()===t})))return alert("".concat(n,": is already in contacts")),l(""),void y("");p((0,i.je)({id:(0,c.x0)(),name:n,number:x})),alert("Contact ".concat(n," has been added to your Contacts")),b()},children:[(0,f.jsx)(d.Z,{style:{marginBottom:20},onChange:v,id:"outlined-basic",name:"name",type:"text",value:n,label:"Name",fullWidth:!0,required:!0}),(0,f.jsx)(d.Z,{style:{marginBottom:20},onChange:v,type:"tel",name:"number",value:x,label:"Number",fullWidth:!0,required:!0}),(0,f.jsx)(m.Z,{style:{textTransform:"none",margin:"auto",display:"block"},variant:"contained",type:"submit",children:"Add contact"})]})})},x=n(493),y=n(4852),g=n(890),p=n(697),v=n(7247),b=function(){var e=(0,o.v9)(s),t=(0,o.I0)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(x.Z,{style:{width:"100%",backgroundColor:"#fff"},children:e.map((function(e){var n=e.name,r=e.number,a=e.id;return(0,f.jsxs)(y.ZP,{style:{display:"flex",alignItems:"center"},children:[(0,f.jsxs)(g.Z,{style:{marginRight:25},typography:"h6",color:"#1976d2",component:"span",children:[n,":"]}),(0,f.jsxs)(p.Z,{style:{marginLeft:"auto"},children:[(0,f.jsx)(g.Z,{style:{marginRight:25},typography:"h6",color:"#1976d2",component:"span",children:r}),(0,f.jsx)(m.Z,{variant:"outlined",startIcon:(0,f.jsx)(v.Z,{}),type:"button",onClick:function(){return function(e,n){return t((0,i.xX)(e)),alert("Contact ".concat(n," has been deleted from your Contacts"))}(a,n)},children:"Delete"})]})]},a)}))})})},j=n(4808),C=(0,c.x0)(),Z=function(){var e=(0,o.v9)(l),t=(0,o.I0)();return(0,f.jsx)(d.Z,{style:{marginBottom:15},onChange:function(e){var n=e.target.value.toLowerCase();t((0,j.M)(n))},id:C,type:"text",value:e,label:" Find contacts by name",placeholder:"Search",fullWidth:!0})},k=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h,{}),(0,f.jsx)(Z,{}),(0,f.jsx)(b,{})]})}}}]);
//# sourceMappingURL=409.ee52a1e0.chunk.js.map