(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[872],{2193:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/future/components/footer",function(){return n(3744)}])},9426:function(t,e,n){"use strict";var a=n(7294);let o=()=>{let[t,e]=(0,a.useState)({x:0,y:0});return(0,a.useEffect)(()=>{let t=t=>{e({x:t.clientX,y:t.clientY})};return window.addEventListener("mousemove",t),()=>window.removeEventListener("mousemove",t)},[]),t};e.Z=o},3744:function(t,e,n){"use strict";n.r(e),n.d(e,{Char:function(){return m},ScrollText:function(){return f},Text:function(){return d}});var a=n(5893),o=n(3539),r=n.n(o),s=n(4737),i=n.n(s),c=n(9426),l=n(7294),u=n(1664),_=n.n(u);let f=t=>{let{text:e="docs@abc.osaka",mouse:n=!1,animationDuration:o=8e3,width:r=100}=t;return(0,a.jsx)("div",{className:i().__,children:(0,a.jsxs)("div",{className:i()._,style:{width:"".concat(2*r,"vw")},children:[(0,a.jsx)(d,{text:e,width:r,mouse:n,animationDuration:o}),(0,a.jsx)(d,{text:e,width:r,mouse:n,animationDuration:o})]})})},d=t=>{let{text:e="docs@abc.osaka",mouse:n=!1,animationDuration:o=8e3,width:r}=t;return(0,a.jsx)("p",{className:i().text,style:{animationDuration:"".concat(o/1e3,"s"),width:"".concat(r,"vw"),"--width":"-".concat(r,"vw")},children:e&&e.split("").map((t,e)=>n?(0,a.jsx)(m,{char:t},e):(0,a.jsx)("span",{children:t},e))})},m=t=>{let{char:e}=t,n=(0,c.Z)(),o=(0,l.useRef)(n),s=(0,l.useRef)(null),[i,u]=(0,l.useState)(400),_=(t,e)=>1/(Math.log2(Math.sqrt(Math.abs(t.x-e.x)**2+Math.abs(t.y-e.y)**2))+10)*8e3;return(0,l.useEffect)(()=>{o.current=n},[n]),(0,l.useEffect)(()=>{let t=setInterval(()=>{if(!s.current)return;let t={x:s.current.getBoundingClientRect().x+50,y:s.current.getBoundingClientRect().y+75};u(_(o.current,t))},10);return()=>clearInterval(t)},[]),(0,a.jsx)("span",{style:{fontWeight:Math.round(i),fontFamily:r().style.fontFamily},ref:s,children:e})},h=t=>{let{links:e=[{href:"/",content:"プライバシーポリシー | Privacy Policy"},{href:"/",content:"お問い合わせフォーム | Contact Form"},{href:"/",content:"このサイトについて | About"}],texts:n=[{animationDuration:6e3,text:"abc.osaka"},{text:"docs@abc.osaka"}]}=t;return(0,a.jsxs)("footer",{className:i().footer,children:[!!(null==n?void 0:n.length)&&n.map((t,e)=>(0,a.jsx)(f,{animationDuration:t.animationDuration,width:t.width,mouse:t.mouse,text:t.text},e)),(0,a.jsx)("p",{className:i().t,children:"mailは基本返信できません、ご了承ください"}),(0,a.jsx)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",margin:"20px 0"},children:!!(null==e?void 0:e.length)&&e.map((t,e)=>(0,a.jsx)("p",{className:i().t,style:{opacity:1,fontSize:14,marginBottom:0,marginTop:0},children:(0,a.jsx)(_(),{href:t.href,children:t.content})},e))})]})};e.default=h},3539:function(t){t.exports={style:{fontFamily:"'__roboto_a9aaba', '__roboto_Fallback_a9aaba'"},className:"__className_a9aaba"}},4737:function(t){t.exports={footer:"footer_footer__8YaAe",__:"footer______D2WO",_:"footer____6YfX9",text:"footer_text__ZEiJY",scrolls:"footer_scrolls__YeET3",t:"footer_t__a7PSL"}}},function(t){t.O(0,[664,774,888,179],function(){return t(t.s=2193)}),_N_E=t.O()}]);