(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[280],{6647:function(){},5069:function(e,r,o){Promise.resolve().then(o.bind(o,5616))},5616:function(e,r,o){"use strict";o.r(r);var t=o(7437),s=o(2265),n=o(5430),c=o(8883),a=o(4730),i=o(3562);o(9930).config();let l=(0,n.Pi)(()=>{let[e,r]=(0,s.useState)(!0),o=(0,i.$)("clientId"),n=(0,i.$)("secret"),l=(0,i.$)("callbackUrl"),[p,u]=(0,s.useState)(!1),[d,h]=(0,s.useState)(""),[f,g]=(0,s.useState)("");return(0,s.useEffect)(()=>{setTimeout(()=>{r(!1)},2e3)},[]),(0,s.useEffect)(()=>{var e,r;let o=new URLSearchParams(window.location.search),t=o.get("authcode"),s=o.get("state"),n=null!==(e=o.get("error"))&&void 0!==e?e:"",c=null!==(r=o.get("error_description"))&&void 0!==r?r:"";if(console.log("Authcode:",t),console.log("state:",s),g("Error: "+n),h("Error description: "+c),t){let e=(0,i.$)("env"),r="";switch(e){case"SIT":r="app-sit";break;case"SIT-SANDBOX":r="app-sit-sandbox";break;case"UAT":r="app-uat";break;case"UAT-SANDBOX":r="app-uat-sandbox";break;case"PRD":r="app-prd";break;case"PRD-SANDBOX":r="app-prd-sandbox";break;default:console.log("environment not select")}let o=(0,i.$)("clientId"),n=(0,i.$)("secret"),c=(0,i.$)("callbackUrl"),l=(0,i.$)("scope"),p={appName:r,clientID:null!=o?o:"",clientSecret:null!=n?n:"",code:null!=t?t:"",state:null!=s?s:"",redirectURI:null!=c?c:"",scope:null!=l?l:""};console.log("exchangeRequest",p),a.Z.getCustomerProfile(p)}else u(!0),console.log(p),console.log(d)},[]),(0,t.jsx)(c.im,{children:e?(0,t.jsx)(c.RW,{}):(0,t.jsxs)(c.tz,{children:[p?(0,t.jsx)(c.$0,{children:(0,t.jsx)(c.r3,{children:"Error Results"})}):(0,t.jsx)(c.$0,{children:(0,t.jsx)(c.r3,{children:"Profile"})}),(0,t.jsxs)("div",{style:{paddingLeft:"16px"},children:[(0,t.jsx)("b",{children:"clientID:"})," ",o]}),(0,t.jsxs)("div",{style:{paddingLeft:"16px"},children:[(0,t.jsx)("b",{children:"clientSecret:"})," ",n]}),(0,t.jsxs)("div",{style:{paddingLeft:"16px"},children:[(0,t.jsx)("b",{children:"redirectURI:"})," ",l]}),(0,t.jsxs)("div",{style:{paddingLeft:"16px"},children:[(0,t.jsx)("b",{children:"accessToken:"})," ",a.Z.exchangeTokenRes]}),a.Z.customerProfileErrorCodeResponse?(0,t.jsx)(c.wF,{error:a.Z.customerProfileErrorCodeResponse.code,errorDetail:a.Z.customerProfileErrorCodeResponse.message}):a.Z.customerProfileResponse?(0,t.jsx)(c.dk,{responseData:a.Z.customerProfileResponse}):a.Z.exchangeTokenApiError?(0,t.jsx)(c.wF,{error:"Error",errorDetail:"exchange Token Api catch"}):a.Z.customerProfileApiError?(0,t.jsx)(c.wF,{error:"Error",errorDetail:"An invalid response was received from the upstream server"}):p?(0,t.jsx)(c.wF,{error:f,errorDetail:d}):(0,t.jsx)(c.RW,{}),(0,t.jsx)(c.r0,{textName:"กลับสู่หน้าแรก",onClick:()=>{window.location.href="https://ptid-miniapp.ddns.net/"},buttonProps:{marginBottom:"10px"}})]})})});r.default=l},3562:function(e,r,o){"use strict";o.d(r,{$:function(){return s},q:function(){return t}});let t=(e,r)=>{localStorage.setItem(e,JSON.stringify(r))},s=e=>{{let r=localStorage.getItem(e);return r?JSON.parse(r):null}}},4730:function(e,r,o){"use strict";var t=o(305),s=o(4228);class n{async getCustomerProfile(e){console.log("getCustomerProfile",e),(0,s.ZO)(e).then(r=>{(0,t.z)(()=>{var o;if((null===(o=r.data)||void 0===o?void 0:o.code)!="0000")this.customerProfileErrorCodeResponse=r.data,console.log("Exchange Token Fail");else if(console.log("Exchange Token Success"),this.exchangeTokenRes=r.data.data.access_token,r.data.data.access_token){let o=null!==(n=r.data.data.access_token)&&void 0!==n?n:"";var n,c={appName:e.appName,accessToken:o};(0,s.VW)(c).then(e=>{(0,t.z)(()=>{var r;(null===(r=e.data)||void 0===r?void 0:r.code)!="0000"?(this.customerProfileErrorCodeResponse=e.data,console.log("GetCustomer Profile Fail")):(console.log("GetCustomer Profile Sucess"),this.customerProfileResponse=e.data)})}).catch(e=>{(0,t.z)(()=>{console.log("call api GetCustomer Profile error"),this.customerProfileApiError=!0})})}else console.log("call api Exchange Token error"),this.exchangeTokenApiError=!0})}).catch(e=>{(0,t.z)(()=>{console.log("call api error"),this.exchangeTokenApiError=!0})})}constructor(){this.customerProfileResponse=null,this.customerProfileErrorCodeResponse=null,this.exchangeTokenRes=null,this.customerProfileApiError=!1,this.exchangeTokenApiError=!1,(0,t.rC)(this,{customerProfileResponse:t.LO,customerProfileErrorCodeResponse:t.LO,customerProfileApiError:t.LO,exchangeTokenApiError:t.LO,exchangeTokenRes:t.LO,getCustomerProfile:t.aD})}}let c=new n;r.Z=c},4228:function(e,r,o){"use strict";o.d(r,{VW:function(){return n},ZO:function(){return s},lO:function(){return c}});var t=o(2126);o(9930).config();let s=async e=>{let r="".concat("https://paotang-pass-external-sit.th-service.co.in/").concat("v1/paotangpass/customer-utility/exchange-token");return await t.Z.post(r,e)},n=async e=>{let r="".concat("https://paotang-pass-external-sit.th-service.co.in/").concat("v1/paotangpass/customer-utility/get-customer-profile");return await t.Z.post(r,e)},c=async(e,r)=>{let o="".concat(r).concat("/oauth2/web/auth","?client_id=").concat(e.client_id,"&redirect_uri=").concat(e.redirect_uri,"&response_type=").concat(e.response_type,"&scope=").concat(e.scope,"&state=").concat(e.state);e.acr&&""!==e.acr.trim()&&(o+="&acr=".concat(e.acr)),e.prompt&&""!==e.prompt.trim()&&(o+="&prompt=".concat(e.prompt)),e.purpose&&""!==e.purpose.trim()&&(o+="&purpose=".concat(e.purpose)),window.open(o)}}},function(e){e.O(0,[147,218,717,190,126,12,971,23,744],function(){return e(e.s=5069)}),_N_E=e.O()}]);