(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6647:function(){},6151:function(e,a,l){Promise.resolve().then(l.bind(l,8212))},8212:function(e,a,l){"use strict";l.r(a);var t=l(7437),i=l(2265),n=l(6952),o=l(8883),s=l(3562),r=l(357);l(9930).config(),a.default=()=>{let{jsBridgeValue:e}=n.featureInquireInfo;r.env.BASR_URL_WEB;let[a,l]=(0,i.useState)(!0),[d,p]=(0,i.useState)({client_id:(0,s.$)("clientId"),redirect_uri:(0,s.$)("callbackUrl"),secret:(0,s.$)("secret")}),u=(e,a)=>{p(l=>({...l,[e]:a}))},c=e=>{p(a=>{let l={...a};return l[e]="",l})},[v,g]=(0,i.useState)([]),_=()=>{g([])},b=()=>{let e=D.map(e=>e.value);e.every(e=>v.includes(e))?g([]):g(e)},[x,m]=(0,i.useState)({label:" ",value:"",id:"acr_empty"}),f=[{label:"Possible values",value:"",id:"acr_empty"},{label:"display : PIN , value : PIN",value:"PIN",id:"acr_pin"},{label:"display : PIN + Face compare , value: PIN_FACECMP",value:"PIN_FACECMP",id:"acr_pinFaceCmp"},{label:"error",value:"ERROR",id:"acr_error"}],[h,S]=(0,i.useState)({label:" ",value:"",id:"purpose_empty"}),j=[{label:"Possible values",value:"",id:"purpose_empty"},{label:"display : เพื่อเข้าใช้งาน , value : auth",value:"auth",id:"purpose_auth"},{label:"display : เพื่อทำรายการ , value : proceed",value:"proceed",id:"purpose_proceed"},{label:"display : เพื่อยืนยันตัวตน , value : verify",value:"verify",id:"purpose_verify"}],[k,A]=(0,i.useState)({label:" ",value:"",id:"prompt_empty"}),I=[{label:"Possible values",value:"",id:"prompt_empty"},{label:"{empty}",value:"",id:"prompt_empty"},{label:"login",value:"login",id:"prompt_verify"},{label:"error",value:"error",id:"prompt_verify"}],[C,B]=(0,i.useState)({label:" ",value:"",id:"optionsCallback_empty"}),[N,y]=(0,i.useState)({label:"SIT",value:"https://paotang-pass-external-sit.th-service.co.in",id:"env_sit"}),P=[{label:"SIT",value:"https://paotang-pass-external-sit.th-service.co.in",id:"env_sit"},{label:"SIT-SANDBOX",value:"https://paotang-pass-sandbox-external-sit.th-service.co.in",id:"env_sitSandbox"},{label:"UAT",value:"https://paotang-pass-external-uat.th-service.co.in",id:"env_uat"},{label:"UAT-SANDBOX",value:"https://paotang-pass-sandbox-external-uat.th-service.co.in",id:"env_uatSandbox"},{label:"PRD",value:"https://paotang-pass.devops.krungthai.com",id:"env_prd"},{label:"PRD-SANDBOX",value:"https://paotang-pass-sandbox.devops.krungthai.com",id:"env_prdSandBox"}],[q,w]=(0,i.useState)({label:"SIT",value:"app-sit",id:"envMiniApp_sit"}),F=[{label:"SIT",value:"app-sit",id:"envMiniApp_sit"},{label:"SIT-SANDBOX",value:"app-sit-sandbox",id:"envMiniApp_sitSandbox"},{label:"UAT",value:"app-uat",id:"envMiniApp_uat"},{label:"UAT-SANDBOX",value:"app-uat-sandbox",id:"envMiniApp_uatSandbox"},{label:"PRD",value:"app-prd",id:"envMiniApp_prd"},{label:"PRD-SANDBOX",value:"app-prd-sandbox",id:"envMiniApp_prdSandbox"}],[T,U]=(0,i.useState)({label:" ",value:"",id:"flow_empty"}),E=[{label:"Possible values",value:"",id:"flow_empty"},{label:"Mini-app",value:"mini-app",id:"flow_miniApp"},{label:"QR",value:"qr",id:"flow_qr"}];(0,i.useEffect)(()=>{let e=v.join("+");(0,s.q)("clientId",d.client_id),(0,s.q)("callbackUrl",d.redirect_uri),(0,s.q)("secret",d.secret),(0,s.q)("scope",e),(0,s.q)("acr",x.value),(0,s.q)("purpose",h.value),(0,s.q)("prompt",k.value),(0,s.q)("environment",N.value),(0,s.q)("env",N.label),(0,s.q)("appName",q.value),(0,s.q)("flow",T.value),(0,s.q)("callback",C.value),(0,s.q)("state",O());let a=(0,s.$)("clientId"),l=(0,s.$)("secret"),t=(0,s.$)("callbackUrl"),i=(0,s.$)("scope"),o=(0,s.$)("acr"),r=(0,s.$)("prompt"),p=(0,s.$)("callback"),u=(0,s.$)("purpose"),c=(0,s.$)("environment"),g=(0,s.$)("flow"),_=(0,s.$)("state");console.log("client_id values: ",a),console.log("redirect_uri values: ",t),console.log("secret values: ",l),console.log("select values ACR: ",o),console.log("select values Purpose: ",u),console.log("select values Prompt: ",r),console.log("select values Environment: ",c),console.log("select values Flow: ",g),console.log("select values Callback: ",p),console.log("checkbox values: ",e),n.featureInquireInfo.onInquireJSBridgeInfo({client_id:a,redirect_uri:t,secret:l,scope:i,acr:o,purpose:u,prompt:r,state:_,callback:p})},[d,v,x,h,k,N,T,C,q]),(0,i.useEffect)(()=>{setTimeout(()=>{l(!1)},1e3)},[]),(0,i.useEffect)(()=>{window.bridge={initAuthErrorCallback:M,initAuthCallbackOption:M}},[]);let M=(e,a)=>{l(!1)},R=()=>{window.location.href="/preview"},$=()=>{c("client_id"),c("redirect_uri"),c("secret"),g([])},O=()=>{let e="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",l=a.length;for(let t=0;t<7;t++)e+=a.charAt(Math.floor(Math.random()*l));return e+a.charAt(Math.floor(Math.random()*l))},D=[{label:"Anonymous",value:"offline+openid",id:"checkBox_annonymous"},{label:"paotangid.citizen",value:"paotangid.citizen",id:"checkBox_paotangidCitizen"},{label:"paotangid.title",value:"paotangid.title",id:"checkBox_paotangidTitle"},{label:"paotangid.fullname_th",value:"paotangid.fullname_th",id:"checkBox_paotangidFullnameTH"},{label:"paotangid.fullname_en",value:"paotangid.fullname_en",id:"checkBox_paotangidFullnameEN"},{label:"paotangid.gender",value:"paotangid.gender",id:"checkBox_paotangidGender"},{label:"paotangid.birthdate",value:"paotangid.birthdate",id:"checkBox_paotangidBirthdate"},{label:"paotangid.mobile",value:"paotangid.mobile",id:"checkBox_paotangidMobile"},{label:"paotangid.email",value:"paotangid.email",id:"checkBox_paotangidEmail"},{label:"paotangid.work_profile",value:"paotangid.work_profile",id:"checkBox_paotangidWorkProfile"},{label:"paotangid.citizen_card_info",value:"paotangid.citizen_card_info",id:"checkBox_paotangidCitizenCardInfo"},{label:"paotangid.legal_address",value:"paotangid.legal_address",id:"checkBox_paotangidLegalAddress"},{label:"paotangid.mailing_address",value:"paotangid.mailing_address",id:"checkBox_paotangidMailingAddress"},{label:"paotangid.office_address",value:"paotangid.office_address",id:"checkBox_paotangidOfficeAddress"},{label:"paotangid.citizen_card_details",value:"paotangid.citizen_card_details",id:"checkBox_paotangidCitizenCardDetails"},{label:"paotangid.selfie_image",value:"paotangid.selfie_image",id:"checkBox_paotangidSelfieImage"}];return(0,t.jsx)(o.im,{children:a?(0,t.jsx)(o.RW,{}):(0,t.jsxs)(o.tz,{children:[(0,t.jsx)(o.$0,{children:(0,t.jsxs)(o.r3,{children:[(0,t.jsx)("p",{children:"PTPASS-TEST"}),(0,t.jsx)(o.SI,{})]})}),(0,t.jsxs)(o.Z9,{children:[(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.nj,{textName:"Client_ID"}),(0,t.jsx)(o.UP,{id:"input_clientId",value:d.client_id,onChange:e=>u("client_id",e.target.value),onClick:()=>c("client_id")}),(0,t.jsx)(o.nj,{textName:"Secret"}),(0,t.jsx)(o.UP,{id:"input_secret",value:d.secret,onChange:e=>u("secret",e.target.value),onClick:()=>c("secret")}),(0,t.jsx)(o.nj,{textName:"callback_url"}),(0,t.jsx)(o.UP,{id:"input_callbackUrl",value:d.redirect_uri,onChange:e=>u("redirect_uri",e.target.value),onClick:()=>c("redirect_uri")})]}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.nj,{textName:"Scope"}),(0,t.jsx)(o.uu,{options:D,checked:v,onChange:e=>{g(e)},onClickDelete:()=>_(),onClickSelectAll:()=>b()})]}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.nj,{textName:"Flow"}),(0,t.jsx)(o.UF,{options:E,onSelect:e=>{U(E.find(a=>a.value===e)||{label:" ",value:"",id:"flow_empty"})},defaultValue:""}),"mini-app"===T.value&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.nj,{textName:"*Environment"}),(0,t.jsx)(o.UF,{options:F,onSelect:e=>{w(F.find(a=>a.value===e)||{label:"SIT",value:"app-sit",id:"envMiniApp_sit"})},defaultValue:"https://paotang-pass-external-sit.th-service.co.in"})]}),"qr"===T.value&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.nj,{textName:"*Environment"}),(0,t.jsx)(o.UF,{options:P,onSelect:e=>{y(P.find(a=>a.value===e)||{label:"SIT",value:"https://paotang-pass-external-sit.th-service.co.in",id:"env_sit"})},defaultValue:"app-sit"})]}),(0,t.jsx)(o.nj,{textName:"ACR"}),(0,t.jsx)(o.UF,{options:f,onSelect:e=>{m(f.find(a=>a.value===e)||{label:" ",value:"",id:"acr_empty"})},defaultValue:""}),(0,t.jsx)(o.nj,{textName:"Prompt"}),(0,t.jsx)(o.UF,{options:I,onSelect:e=>{A(I.find(a=>a.value===e)||{label:" ",value:"",id:"prompt_empty"})},defaultValue:""}),(0,t.jsx)(o.nj,{textName:"Purpose"}),(0,t.jsx)(o.UF,{options:j,onSelect:e=>{S(j.find(a=>a.value===e)||{label:" ",value:"",id:"purpose_empty"})},defaultValue:""})]}),(0,t.jsx)(o.Tw,{textNameLeft:"ลบข้อมูลทั้งหมด",idLeft:"button_clearAll",textNameRight:"ดำเนินการต่อ",idRight:"button_next",textProps:{fontSize:"16px"},buttonPropsLeft:{backgroundColor:"#F91515",width:"100%"},buttonPropsRight:{width:"100%"},onClickLeft:()=>{$()},onClickRiight:()=>{R()}})]}),(0,t.jsx)(t.Fragment,{}),(0,t.jsx)("div",{style:{margin:"-20px 0 15px 39px"},children:"version: 1.0.19"})]})})}},6952:function(e,a,l){"use strict";l.d(a,{featureInquireInfo:function(){return n}});var t=l(305);class i{onInquireJSBridgeInfo(e){(0,t.z)(()=>{this.jsBridgeValue=e})}constructor(){this.jsBridgeValue=null,(0,t.rC)(this,{jsBridgeValue:t.LO})}}let n=new i},3562:function(e,a,l){"use strict";l.d(a,{$:function(){return i},q:function(){return t}});let t=(e,a)=>{localStorage.setItem(e,JSON.stringify(a))},i=e=>{{let a=localStorage.getItem(e);return a?JSON.parse(a):null}}}},function(e){e.O(0,[147,218,717,190,12,971,23,744],function(){return e(e.s=6151)}),_N_E=e.O()}]);