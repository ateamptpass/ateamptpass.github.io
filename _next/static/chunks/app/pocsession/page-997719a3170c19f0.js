(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[815],{9186:function(e,n,t){Promise.resolve().then(t.bind(t,7410))},7410:function(e,n,t){"use strict";t.r(n);var s=t(7437),i=t(2265),o=t(5856),r=t(8883);n.default=()=>{let[e,n]=(0,i.useState)({inputSession1:"",inputSession2:""}),[t,d]=(0,i.useState)(""),[l,p]=(0,i.useState)(""),[u,x]=(0,i.useState)(!0);(0,i.useEffect)(()=>{setTimeout(()=>{x(!1)},1e3)},[]);let a=t=>{let{name:s,value:i}=t.target;n({...e,[s]:i})};return(0,s.jsx)(r.im,{children:u?(0,s.jsx)(r.RW,{}):(0,s.jsxs)(r.tz,{children:[(0,s.jsx)(r.SI,{}),(0,s.jsx)(r._x,{buttonprops:{marginBottom:200},onBtnBackClick:()=>{history.back()}}),(0,s.jsx)("h1",{style:{padding:"8px",textAlign:"center",fontSize:"20px",fontWeight:"600",marginTop:"10px",color:"#4457E3"},children:"Poc Session"}),(0,s.jsxs)(r.Z9,{children:[(0,s.jsxs)("form",{onSubmit:n=>{n.preventDefault(),console.log(e),(0,o.t)("inputSession1",e.inputSession1),(0,o.t)("inputSession2",e.inputSession2)},children:[(0,s.jsx)("div",{style:{padding:"8px"},children:(0,s.jsxs)("label",{children:["InputSession1:",(0,s.jsx)("input",{style:{border:"1.7px solid #ddd5d5",borderRadius:"4px",margin:"8px",padding:"8px",color:"#000000"},type:"text",name:"inputSession1",value:e.inputSession1,onChange:a})]})}),(0,s.jsx)("div",{style:{padding:"8px"},children:(0,s.jsxs)("label",{children:["InputSession2:",(0,s.jsx)("input",{style:{border:"1.7px solid #ddd5d5",borderRadius:"4px",padding:"8px",margin:"8px",color:"#000000"},type:"inputSession2",name:"inputSession2",value:e.inputSession2,onChange:a})]})}),(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("button",{style:{textAlign:"center",border:"1.7px solid #ddd5d5",borderRadius:"8px",padding:"8px",background:"#4457E3",cursor:"pointer",margin:"8px",color:"white",width:"90%",fontSize:"16px"},type:"submit",children:"save data in sessionStorge"})})]}),(0,s.jsx)("div",{style:{padding:"16px",textAlign:"center",fontSize:"20px",fontWeight:"600",color:"#4457E3",borderTop:"1px solid #9DC7F9"},children:"Get Session Storge"}),(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("button",{style:{border:"1.7px solid #ddd5d5",borderRadius:"8px",padding:"8px",background:"#F27459",cursor:"pointer",color:"white",width:"90%",fontSize:"16px"},onClick:()=>{let e=(0,o.G)("inputSession1"),n=(0,o.G)("inputSession2");d(e),p(n)},children:"get data from sessionStorge"})}),(0,s.jsx)("div",{style:{padding:"8px"},children:(0,s.jsxs)("label",{children:["InputSession1: ",t]})}),(0,s.jsx)("div",{style:{padding:"8px"},children:(0,s.jsxs)("label",{children:["InputSession2: ",l]})})]})]})})}},5856:function(e,n,t){"use strict";t.d(n,{G:function(){return i},t:function(){return s}});let s=(e,n)=>{sessionStorage.setItem(e,JSON.stringify(n))},i=e=>{let n=sessionStorage.getItem(e);return n?JSON.parse(n):null}}},function(e){e.O(0,[147,717,12,971,23,744],function(){return e(e.s=9186)}),_N_E=e.O()}]);