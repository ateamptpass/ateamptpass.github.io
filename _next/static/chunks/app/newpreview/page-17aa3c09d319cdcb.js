(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{8708:function(e,t,r){Promise.resolve().then(r.bind(r,9110))},9110:function(e,t,r){"use strict";r.r(t);var c=r(7437),n=r(2265),o=r(3562),a=r(8883),s=r(6952),i=r(4687);t.default=()=>{s.featureInquireInfo.jsBridgeValue;let[e,t]=(0,n.useState)(!0),[r,l]=(0,n.useState)("");(0,o.$)("clientId"),(0,o.$)("secret"),(0,o.$)("callbackUrl");let[u,d]=(0,n.useState)(!1),[p,f]=(0,n.useState)(""),[g,w]=(0,n.useState)(""),[b,k]=(0,n.useState)(!1),[$,m]=(0,n.useState)(""),[h,S]=(0,n.useState)(!1),j=()=>{(0,i.Z)()},x=(e,t)=>{d(!0),f("init auth error: "+e),w("Error description: "+t)},I=e=>{e.includes("error")&&S(!0),k(!0),m(e)};return(0,n.useEffect)(()=>{window.bridge={initAuthErrorCallback:x,initAuthCallbackOption:I}},[]),(0,n.useEffect)(()=>{var e;let t=(0,o.$)("clientId");(0,o.$)("secret");let r=(0,o.$)("callbackUrl"),c=(0,o.$)("scope"),n=(0,o.$)("acr"),a=(0,o.$)("prompt"),s=(0,o.$)("purpose"),i=(0,o.$)("state"),u=null!==(e=(0,o.$)("callback"))&&void 0!==e?e:"";window.JSBridge?l("window.JSBridge.initAuth?.(".concat(t,",").concat(r,",code,").concat(c,",").concat(i,",").concat(a,",").concat(s,",").concat(n,",").concat(u,")")):window.webkit&&l("window.webkit.messageHandlers.observer.postMessage({name: initAuth,clientId:".concat(t,",redirectUri:").concat(r,",responseType:code,scope:").concat(c,",state:").concat(i,",prompt:").concat(a,",purpose:").concat(s,",acrValue:").concat(n,",callbackOption:").concat(u,"})"))},[]),(0,n.useEffect)(()=>{setTimeout(()=>{t(!1)},2e3)},[]),(0,c.jsx)(a.im,{children:(0,c.jsx)(a.tz,{children:e?(0,c.jsx)(a.RW,{}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.SI,{}),(0,c.jsx)(a._x,{buttonprops:{marginBottom:200},onBtnBackClick:()=>{history.back()}}),u?(0,c.jsx)(a.wF,{error:p,errorDetail:g}):b?(0,c.jsx)(a.LM,{isCallbackError:h,callback:$}):(0,c.jsxs)(a.Z9,{children:[(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.nj,{textName:"Command",textProps:{fontWeight:"600"}}),(0,c.jsx)(a.oU,{JSbridgeValue:r})]}),(0,c.jsx)(a.r0,{textName:"เข้าสู่ระบบ PaotangID",onClick:()=>{j()}})]})]})})})}},6952:function(e,t,r){"use strict";r.d(t,{featureInquireInfo:function(){return o}});var c=r(305);class n{onInquireJSBridgeInfo(e){(0,c.z)(()=>{this.jsBridgeValue=e})}constructor(){this.jsBridgeValue=null,(0,c.rC)(this,{jsBridgeValue:c.LO})}}let o=new n},4687:function(e,t,r){"use strict";var c=r(6952),n=r(3562);t.Z=()=>{let{jsBridgeValue:e}=c.featureInquireInfo,t=(0,n.$)("clientId");(0,n.$)("secret");let r=(0,n.$)("callbackUrl"),o=(0,n.$)("scope"),a=(0,n.$)("acr"),s=(0,n.$)("prompt"),i=(0,n.$)("purpose"),l=(0,n.$)("state"),u=(0,n.$)("callback");if((0,n.$)("appName"),console.log("call JSBride"),console.log(u),window.JSBridge){var d,p;null===(d=(p=window.JSBridge).initAuth)||void 0===d||d.call(p,t,r,"code",o,l,s,i,a,u)}else window.webkit&&window.webkit.messageHandlers.observer.postMessage({name:"initAuth",clientId:t,redirectUri:r,responseType:"code",scope:o,state:l,prompt:s,purpose:i,acr:a,callbackOption:u})}},3562:function(e,t,r){"use strict";r.d(t,{$:function(){return n},q:function(){return c}});let c=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},n=e=>{{let t=localStorage.getItem(e);return t?JSON.parse(t):null}}}},function(e){e.O(0,[147,717,12,971,23,744],function(){return e(e.s=8708)}),_N_E=e.O()}]);