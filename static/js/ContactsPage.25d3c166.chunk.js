"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[518],{4053:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(885),a=n(2791),i=n(2333),o="ContactList_list__csErn",c="ContactList_text__+NWAW",l=n(184),s=function(e){var t=e.id,n=e.name,r=e.number,a=e.onDeleteContact;return(0,l.jsxs)("li",{className:o,children:[(0,l.jsxs)("span",{className:c,children:[n,": "]}),(0,l.jsx)("span",{children:r}),(0,l.jsx)(i.Z,{variant:"contained",type:"button",onClick:function(){return a(t)},sx:{marginLeft:3},children:"Delete"})]})},u=n(5048),d=n(3661),f=function(e){return e.filter},p=function(){var e,t=(0,u.v9)(f),n=(0,d.wY)().data,a=(0,d.AP)(),i=(0,r.Z)(a,1)[0],o=t.toLowerCase(),c=null!==(e=null===n||void 0===n?void 0:n.filter((function(e){return e.name.toLowerCase().includes(o)})))&&void 0!==e?e:[],p=function(e){return i(e)};return(0,l.jsx)("ul",{children:n&&c.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,l.jsx)(s,{id:t,name:n,number:r,onDeleteContact:p},t)}))})},m="ContactForm_form__dhl+T",v=n(4585),h=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],o=t[1],c=(0,a.useState)(""),s=(0,r.Z)(c,2),u=s[0],f=s[1],p=(0,d.wY)().data,h=(0,d.Tn)(),b=(0,r.Z)(h,2),g=b[0],x=b[1].isLoading,j=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":o(r);break;case"number":f(r);break;default:return}};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("form",{className:m,onSubmit:function(e){return e.preventDefault(),p.find((function(e){return e.name===n}))?(alert("A contact with the name: ".concat(n," already exists.")),o(""),void f("")):p.find((function(e){return e.number===u}))?(alert("Number: ".concat(u," is already in use.")),o(""),void f("")):(g({name:n,number:u}),o(""),void f(""))},children:[(0,l.jsx)(v.Z,{fullWidth:!0,type:"text",name:"name",label:"Name",onChange:j,value:n,sx:{marginTop:3}}),(0,l.jsx)(v.Z,{fullWidth:!0,type:"tel",name:"number",label:"Number",onChange:j,value:u,sx:{marginTop:3}}),(0,l.jsx)(i.Z,{variant:"contained",type:"submit",disabled:x,sx:{marginTop:3},children:"Add contact"})]})})},b=n(5122),g=function(){var e=(0,u.v9)(f),t=(0,u.I0)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(v.Z,{fullWidth:!0,type:"text",value:e,onChange:function(e){return t((0,b.W)(e.target.value))},id:"filter"})})},x=n(2299),j=n.n(x),y={display:"block",margin:"0 auto",borderColor:"bisque"},_=function(){var e=(0,a.useState)(!0),t=(0,r.Z)(e,1)[0],n=(0,a.useState)("bisque"),i=(0,r.Z)(n,1)[0];return(0,l.jsx)("div",{children:(0,l.jsx)(j(),{color:i,loading:t,cssOverride:y,size:150})})},w=function(){var e=(0,d.wY)().isLoading;return(0,l.jsxs)("div",{style:{marginTop:100,marginLeft:300,width:900},children:[(0,l.jsx)("p",{style:{fontSize:30,color:"#010101"},children:"Phonebook"}),(0,l.jsx)(h,{}),(0,l.jsx)("p",{style:{fontSize:30,color:"#010101"},children:"Contacts"}),(0,l.jsx)(g,{}),e?(0,l.jsx)(_,{}):(0,l.jsx)(p,{})]})}},2299:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t},c=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(2791)),s=n(8945),u=(0,n(7074).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,n=void 0===t||t,a=e.color,i=void 0===a?"#000000":a,o=e.speedMultiplier,d=void 0===o?1:o,f=e.cssOverride,p=void 0===f?{}:f,m=e.size,v=void 0===m?35:m,h=c(e,["loading","color","speedMultiplier","cssOverride","size"]),b=r({background:"transparent !important",width:(0,s.cssValue)(v),height:(0,s.cssValue)(v),borderRadius:"100%",border:"2px solid",borderTopColor:i,borderBottomColor:"transparent",borderLeftColor:i,borderRightColor:i,display:"inline-block",animation:"".concat(u," ").concat(.75/d,"s 0s infinite linear"),animationFillMode:"both"},p);return n?l.createElement("span",r({style:b},h)):null}},7074:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var i=a.sheet,o="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return i&&i.insertRule(o,0),r}},8945:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"===typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var a=(e.match(/[^0-9]*$/)||"").toString();return n[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=r,t.cssValue=function(e){var t=r(e);return"".concat(t.value).concat(t.unit)}}}]);
//# sourceMappingURL=ContactsPage.25d3c166.chunk.js.map