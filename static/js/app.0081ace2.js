(function(t){function e(e){for(var o,c,a=e[0],u=e[1],s=e[2],p=0,m=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&m.push(i[c][0]),i[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(m.length)m.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},r=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/static/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},["gatherInvoices"===t.state?n("InvoiceList",{on:{"ready-to-pay":t.collectPayment}}):t._e(),"readyToPay"===t.state?n("PayForm",{attrs:{intent:t.paymentIntentID}}):t._e()],1)},r=[],c=n("bc3a"),a=n.n(c),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Which invoices would you like to pay?")]),t._v(" Invoice Number:"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newInvoiceNumber,expression:"newInvoiceNumber"}],ref:"invoiceNumber",attrs:{type:"text",autofocus:""},domProps:{value:t.newInvoiceNumber},on:{input:function(e){e.target.composing||(t.newInvoiceNumber=e.target.value)}}}),n("br"),n("br"),t._v(" Invoice Amount:"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newInvoiceAmount,expression:"newInvoiceAmount"}],ref:"invoiceAmount",attrs:{type:"number"},domProps:{value:t.newInvoiceAmount},on:{input:function(e){e.target.composing||(t.newInvoiceAmount=e.target.value)}}}),n("br"),n("button",{on:{click:t.addInvoice}},[t._v("Add Invoice")]),t.invoices.length?n("table",{staticStyle:{width:"400px",margin:"40px auto 0"}},[t._l(t.invoices,(function(e,o){return n("tr",{key:"invoice"+o,staticStyle:{"border-bottom":"1px solid #ccc"}},[n("td",[t._v(t._s(e.number))]),n("td",[t._v(t._s(e.amount))])])})),n("tr",[n("td",{attrs:{colspan:"2"}},[t._v("Total: $"+t._s(t.total))])])],2):t._e(),t.invoices.length?n("button",{on:{click:function(e){return t.$emit("ready-to-pay",t.paymentInfo)}}},[t._v("Pay")]):t._e()])},s=[],l=(n("d81d"),n("a9e3"),{data:function(){return{newInvoiceNumber:"",newInvoiceAmount:0,invoices:[]}},computed:{total:function(){var t=0;return this.invoices.map((function(e){var n=.029*Number(e.amount)+.3;t+=Number(e.amount)+n})),t},paymentInfo:function(){return{amount:this.total,invoices:this.invoices}}},methods:{addInvoice:function(){this.invoices.push({number:this.newInvoiceNumber,amount:this.newInvoiceAmount}),this.newInvoiceNumber="",this.newInvoiceAmount=0,this.$refs.invoiceNumber.focus()}}}),p=l,m=n("2877"),v=Object(m["a"])(p,u,s,!1,null,null,null),d=v.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Payment Details:")]),n("card",{staticClass:"stripe-card",class:{complete:t.complete},attrs:{stripe:t.publicKey,options:{stripeOptions:t.stripeOptions}},on:{change:function(e){t.complete=e.complete}}}),n("button",{staticClass:"pay-with-stripe",attrs:{disabled:!t.complete},on:{click:t.pay}},[t._v("Submit")])],1)},h=[],b=n("b2f0"),y={data:function(){return{complete:!1,publicKey:window.stripePublicKey,stripeOptions:{sku:"sku_FdQKocNoVzznpJ",quantity:1}}},props:["intent"],components:{Card:b["Card"]},methods:{pay:function(){var t=this;console.log("this is the this ",this),console.log("this is the public key ",this.publicKey),Object(b["createToken"])().then((function(e){window.stripe.confirmCardPayment(t.intent,{payment_method:{card:e.token,billing_details:{name:"Jenny Rosen"}}}).then((function(t){t.error?console.log("Error!",t):console.log("Success!",t)})),console.log(e.token)}))}}},w=y,_=Object(m["a"])(w,f,h,!1,null,null,null),I=_.exports,g={name:"App",data:function(){return{state:"gatherInvoices",amount:0,paymentIntentID:null}},components:{InvoiceList:d,PayForm:I},methods:{collectPayment:function(t){var e=this;this.state="readyToPay",this.amount=t.amount,a()({method:"post",url:"/intent",data:{invoices:t.invoices,amount:Math.round(100*this.amount)}}).then((function(t){e.paymentIntentID=t.intentID}))}}},P=g,O=(n("034f"),Object(m["a"])(P,i,r,!1,null,null,null)),x=O.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.0081ace2.js.map