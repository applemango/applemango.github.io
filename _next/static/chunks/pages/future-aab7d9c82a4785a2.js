(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[413],{11:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/future",function(){return n(3330)}])},9426:function(t,e,n){"use strict";var i=n(7294);let o=()=>{let[t,e]=(0,i.useState)({x:0,y:0});return(0,i.useEffect)(()=>{let t=t=>{e({x:t.clientX,y:t.clientY})};return window.addEventListener("mousemove",t),()=>window.removeEventListener("mousemove",t)},[]),t};e.Z=o},2363:function(t,e,n){"use strict";var i=n(7294);let o=()=>{let[t,e]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let t=()=>{e(window.pageYOffset)};return window.addEventListener("scroll",t),t(),()=>window.removeEventListener("scroll",t)},[]),t};e.Z=o},138:function(t,e,n){"use strict";var i=n(7294);let o=()=>{let[t,e]=(0,i.useState)([0,0]);return(0,i.useEffect)(()=>{let t=()=>{e([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),t};e.Z=o},2072:function(t,e,n){"use strict";n.r(e),n.d(e,{TitleTextWithSimpleShowAnimation:function(){return l}});var i=n(5893),o=n(9224),r=n.n(o),a=n(9777);let l=t=>{let{text:e,style:n,animation:o,delay:l}=t,s=Object.assign({offscreen:{opacity:0,y:20},onscreen:{opacity:1,y:0,transition:{type:"tween",duration:1.2,delay:l}}},o);return(0,i.jsx)(a.E.div,{initial:"offscreen",whileInView:"onscreen",viewport:{once:!1,amount:0},children:(0,i.jsx)(a.E.div,{variants:s,children:(0,i.jsx)("h1",{style:Object.assign({fontFamily:r().style.fontFamily,fontSize:256,color:"#252525"},n),children:e})})})},s=()=>(0,i.jsx)("div",{});e.default=s},3744:function(t,e,n){"use strict";n.r(e),n.d(e,{Char:function(){return u},ScrollText:function(){return h},Text:function(){return m}});var i=n(5893),o=n(3539),r=n.n(o),a=n(4737),l=n.n(a),s=n(9426),c=n(7294),d=n(1664),f=n.n(d);let h=t=>{let{text:e="docs@abc.osaka",mouse:n=!1,animationDuration:o=8e3,width:r=100}=t;return(0,i.jsx)("div",{className:l().__,children:(0,i.jsxs)("div",{className:l()._,style:{width:"".concat(2*r,"vw")},children:[(0,i.jsx)(m,{text:e,width:r,mouse:n,animationDuration:o}),(0,i.jsx)(m,{text:e,width:r,mouse:n,animationDuration:o})]})})},m=t=>{let{text:e="docs@abc.osaka",mouse:n=!1,animationDuration:o=8e3,width:r}=t;return(0,i.jsx)("p",{className:l().text,style:{animationDuration:"".concat(o/1e3,"s"),width:"".concat(r,"vw"),"--width":"-".concat(r,"vw")},children:e&&e.split("").map((t,e)=>n?(0,i.jsx)(u,{char:t},e):(0,i.jsx)("span",{children:t},e))})},u=t=>{let{char:e}=t,n=(0,s.Z)(),o=(0,c.useRef)(n),a=(0,c.useRef)(null),[l,d]=(0,c.useState)(400),f=(t,e)=>1/(Math.log2(Math.sqrt(Math.abs(t.x-e.x)**2+Math.abs(t.y-e.y)**2))+10)*8e3;return(0,c.useEffect)(()=>{o.current=n},[n]),(0,c.useEffect)(()=>{let t=setInterval(()=>{if(!a.current)return;let t={x:a.current.getBoundingClientRect().x+50,y:a.current.getBoundingClientRect().y+75};d(f(o.current,t))},10);return()=>clearInterval(t)},[]),(0,i.jsx)("span",{style:{fontWeight:Math.round(l),fontFamily:r().style.fontFamily},ref:a,children:e})},x=t=>{let{links:e=[{href:"/",content:"プライバシーポリシー | Privacy Policy"},{href:"/",content:"お問い合わせフォーム | Contact Form"},{href:"/",content:"このサイトについて | About"}],texts:n=[{animationDuration:6e3,text:"abc.osaka"},{text:"docs@abc.osaka"}]}=t;return(0,i.jsxs)("footer",{className:l().footer,children:[!!(null==n?void 0:n.length)&&n.map((t,e)=>(0,i.jsx)(h,{animationDuration:t.animationDuration,width:t.width,mouse:t.mouse,text:t.text},e)),(0,i.jsx)("p",{className:l().t,children:"mailは基本返信できません、ご了承ください"}),(0,i.jsx)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",margin:"20px 0"},children:!!(null==e?void 0:e.length)&&e.map((t,e)=>(0,i.jsx)("p",{className:l().t,style:{opacity:1,fontSize:14,marginBottom:0,marginTop:0},children:(0,i.jsx)(f(),{href:t.href,children:t.content})},e))})]})};e.default=x},7488:function(t,e,n){"use strict";n.r(e);var i=n(5893),o=n(7294),r=n(1163),a=n(1664),l=n.n(a),s=n(138),c=n(3101),d=n.n(c),f=n(9777);let h=t=>{let{page:e,color:n="#222"}=t,[a,c]=(0,s.Z)(),[h,m]=(0,o.useState)(0),[u,x]=(0,o.useState)(0),[p,g]=(0,o.useState)(0),[y,_]=(0,o.useState)(!1),w=(0,r.useRouter)(),j=(0,o.useRef)(Object.keys(e||{}).map(()=>(0,o.createRef)())),v=t=>j.current[t].current?j.current[t].current.offsetLeft:h,b=()=>Object.values(e).includes(w.pathname)?Object.values(e).indexOf(w.pathname):0;return((0,o.useEffect)(()=>{m(j.current[b()].current.offsetLeft)},[]),(0,o.useEffect)(()=>{x(v(b())),g(h-v(b()))}),e)?(0,i.jsxs)("div",{className:d().main,children:[(0,i.jsx)("div",{className:d().main_,children:Object.keys(e).length&&Object.keys(e).map((t,o)=>(0,i.jsx)("div",{className:d().links,ref:j.current[o],onMouseEnter:t=>{m(t.target.offsetLeft),_(!0)},onMouseLeave:()=>_(!1),children:(0,i.jsx)(l(),{href:e[t],children:(0,i.jsx)("p",{style:{cursor:"pointer",color:n},children:t})})},o))}),(0,i.jsx)(f.E.div,{className:d().underline,style:{backgroundColor:n,left:"".concat(u,"px")},animate:{x:y?p:0},transition:{type:"spring",duration:.1,bounce:2}})]}):(0,i.jsx)("div",{})};e.default=h},21:function(t,e,n){"use strict";n.r(e);var i=n(5893),o=n(5341),r=n.n(o),a=n(5675),l=n.n(a);let s=t=>{let{src:e,top:n}=t;return(0,i.jsx)("div",{className:r().container,children:(0,i.jsx)(l(),{layout:"fill",objectFit:"contain",loader:()=>e,src:e,alt:"",style:{objectFit:"cover"}})})};e.default=s},8569:function(t,e,n){"use strict";n.r(e);var i=n(5893),o=n(1664),r=n.n(o),a=n(7294),l=n(21),s=n(5341),c=n.n(s);let d=[{name:"abc.osaka",description:"ブログ",date:"2023 03",img:"/img/b.png",link:"https://abc.osaka/"},{name:"kanji puzzle",description:"漢字のパズルとか",date:"2023 03",img:"/img/a.png",link:"https://git.abc.osaka/kanji-puzzle/"},{name:"twitter clone",description:"twitterのclone",date:"2023 03",img:"/img/d.png",link:"https://github.com/applemango/twitter_clone"},{name:"image library",description:"画像を管理するやつ",date:"2023 03",img:"/img/c.png",link:"https://github.com/applemango/images_library"},{name:"Github",description:"github account",date:"2023 03",img:"/img/noimage.png",link:"https://github.com/applemango"},{name:"Scratch",description:"scratch account",date:"2023 03",img:"/img/noimage.png",link:"https://scratch.mit.edu/users/_applemango_"}],f=(t,e,n)=>"".concat(e,"_").concat(t,"__").concat(n),h=(t,e)=>"\n        .container_0__".concat(e," .table_line_").concat(t,"__").concat(e,":hover p {background-color: #000 !important; color: #fff !important; width: fit-content;}\n        .container_0__").concat(e,":has(.table_line_").concat(t,"__").concat(e,":hover) > .image_").concat(t,"__").concat(e,"{opacity: 1 !important; scale: 0.9 !important}\n        .container_0__").concat(e," .table_line_").concat(t,"__").concat(e,":hover svg {transform: translateX(10px);background-color: #000!important; stroke: #fff!important; scale: 2}\n        "),m=(t,e)=>{let n="";for(let i=0;i<t;i++)n=n.concat(h(i,e));return console.log(n),n},u=()=>{let[t,e]=(0,a.useState)(""),n="BGJ5g";return(0,a.useEffect)(()=>{e(m(d.length,n))},[]),(0,i.jsxs)("div",{style:{borderBottom:"1px solid #eee",position:"relative",height:"fit-content",width:"100%"},className:f(0,"container",n),children:[d.map((t,e)=>(0,i.jsx)("div",{style:{position:"absolute",width:"70%",maxWidth:700,height:"100%",right:0,opacity:0,scale:.9},className:f(e,"image",n),children:(0,i.jsx)(l.default,{src:t.img})},e)),d.map((t,e)=>(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",borderTop:"1px solid #eee",padding:"4px 8px",alignItems:"center",position:"relative",zIndex:2},className:f(e,"table_line",n),children:[(0,i.jsx)("div",{style:{width:"30%"},className:c().w70max540,children:(0,i.jsx)("p",{style:{fontSize:20,fontWeight:300,color:"#555",lineHeight:1},children:t.name})}),(0,i.jsx)("div",{className:c().hide540,style:{width:"50%"},children:(0,i.jsx)("p",{style:{fontSize:20,fontWeight:300,color:"#555",lineHeight:1},children:t.description})}),(0,i.jsx)("div",{style:{width:"20%"},className:c().w30max540,children:(0,i.jsx)("p",{style:{fontSize:20,fontWeight:300,color:"#555",lineHeight:1},children:t.date})}),(0,i.jsx)(r(),{href:t.link,children:(0,i.jsx)("div",{style:{width:16},children:(0,i.jsxs)("svg",{style:{transition:"transform .3s ease"},xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-arrow-right",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#555",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,i.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,i.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,i.jsx)("line",{x1:"13",y1:"18",x2:"19",y2:"12"}),(0,i.jsx)("line",{x1:"13",y1:"6",x2:"19",y2:"12"})]})})})]},e)),(0,i.jsx)("style",{children:t})]})};e.default=u},3913:function(t,e,n){"use strict";n.r(e);var i=n(5893),o=n(7294),r=n(2363),a=n(138);let l=t=>{let{children:e}=t,n=(0,r.Z)(),[l,s]=(0,o.useState)(0),[c,d]=(0,o.useState)(0),[f,h]=(0,o.useState)(!1),[m,u]=(0,o.useState)(0),[x,p]=(0,o.useState)(!1),[g,y]=(0,o.useState)(0),[_,w]=(0,o.useState)(0),j=(0,a.Z)(),v=(0,o.useRef)(null);return(0,o.useEffect)(()=>{window.scrollTo({top:0})},[]),(0,o.useEffect)(()=>{(null==v?void 0:v.current)&&(window.innerHeight,window.innerWidth,s(v.current.offsetWidth),d(v.current.getBoundingClientRect().top))},[v]),(0,o.useEffect)(()=>{let t=window.innerHeight,e=window.innerWidth;if(h(!1),p(!1),!(c>n)){if(c+l<n+t+(e-t))return p(!0);h(!0),u(l-(c+l-n))}},[n,l,c]),(0,o.useEffect)(()=>{if(!(null==v?void 0:v.current))return;let t=window.innerHeight,e=window.innerWidth;y(l-window.innerHeight-(e-t)),w(l-window.innerWidth)},[l,c,j]),(0,i.jsx)("div",{ref:v,style:{height:l-(window.innerWidth-window.innerHeight),width:"fit-content"},children:(0,i.jsx)("div",{style:Object.assign({width:"fit-content",height:"fit-content",willChange:"transform"},f&&!x&&{position:"fixed",top:0,transform:"translateX(-".concat(m,"px)")},x&&{transform:"translateX(-".concat(_,"px) translateY(").concat(g,"px)")}),children:e})})};e.default=l},6344:function(t,e,n){"use strict";n.r(e);var i=n(5893),o=n(5341),r=n.n(o);let a=()=>{let t=[];for(let e=2020;e<=2023;e++){let n=[];for(let t=1;t<=12;t++)if(2020!=e||!(t<4)){if(2023==e&&t>4)break;n.push(t)}t.push({title:e,data:n})}return t},l=t=>{if(!Array.isArray(t))return 1;let e=0;return t.map(t=>e+=l(t)),e},s=[{color:"#f5f5f5",start:1,end:17,line:3,name:"Game"},{color:"#f5f5f5",start:12,end:22,line:4,name:"黎明期に入る"},{color:"#f5f5f5",start:13,end:15,line:6,name:"学校を休む"},{color:"#f5f5f5",start:13,end:25,line:5,name:"人生を考え始める"},{color:"#f5f5f5",start:23,end:25,line:5,name:"時間大事にで生きようと思う"},{color:"#f5f5f5",start:18,end:20,line:1,name:"scratch"},{color:"#f5f5f5",start:21,end:22,line:1,name:"言語を作る"},{color:"#f5f5f5",start:23,end:25,line:1,name:"scratchの限界を感じる"},{color:"#f5f5f5",start:22,end:25,line:2,name:"HTML CSSを始める"},{color:"#f5f5f5",start:23,end:25,line:3,name:"ROR, djangoに手を出す"},{color:"#f5f5f5",start:26,end:37,line:2,name:"Next.jsを始める"},{color:"#f5f5f5",start:28,end:32,line:3,name:"Flaskを始める"},{color:"#f5f5f5",start:33,end:37,line:3,name:"速度を求めてGin, FastAPI, Actixに浮気する"},{color:"#f5f5f5",start:29,end:35,line:5,name:"MANABi DX QUEST"},{color:"#f5f5f5",start:33,end:35,line:5,name:"Goldをもらうためにやる"},{color:"#f5f5f5",start:29,end:33,line:4,name:"Machine Learning, DLをやる"},{color:"#f5f5f5",start:34,end:37,line:4,name:"diffusion modelやLLMに興味を持つ"},{color:"#f5f5f5",start:30,end:37,line:1,name:"ブログを始める"},{color:"#f5f5f5",start:33,end:37,line:1,name:"少しずつ伸びてきた (多い時で一日50pv)"},{color:"#f5f5f5",start:36,end:37,line:5,name:"競プロを始める"}],c=[{position:{x:1,y:6},color:"#f6f6f6",img:"",title:"入学式"},{position:{x:11.5,y:6},color:"#f6f6f6",img:"",title:"進級"},{position:{x:27,y:6},color:"#f6f6f6",img:"",title:"修学旅行"},{position:{x:34,y:6},color:"#f6f6f6",img:"",title:"進路決定"},{position:{x:36,y:6},color:"#f6f6f6",img:"",title:"卒業式"},{position:{x:23,y:4},color:"#f6f6f6",img:"",title:"抜ける"},{position:{x:18,y:3},color:"#f6f6f6",img:"",title:"飽きた"},{position:{x:26,y:1},color:"#f6f6f6",img:"",title:"やめる"},{position:{x:26,y:3},color:"#f6f6f6",img:"",title:"挫折"}],d={2020:"なんかあんまり記憶にないな、でも昨日のよう",2021:"あまり鮮明な記憶がないな、けど終了式を鮮明に覚えてる",2022:"記憶が戻ってきた",2023:"一年ってこんなに早かった?"},f=t=>{if(Object.keys(d).includes(t.toString())){let e=d[t];return e}return""},h=()=>{let t=a();return l(t.concat().map(t=>t.data)),(0,i.jsxs)("div",{style:{height:"100vh",minWidth:"120vw",width:"fit-content",padding:"0 24px",backgroundColor:"#fff",border:"1px solid #ddd",borderBottom:"none",borderLeft:"none",borderRight:"none"},children:[(0,i.jsx)("div",{style:{display:"flex",width:"fit-content",height:"fit-content"},children:t.map((t,e)=>(0,i.jsxs)("div",{style:{},children:[(0,i.jsxs)("div",{style:{padding:"4px 8px",borderRight:"1px solid #ddd",display:"flex",alignItems:"flex-end"},children:[(0,i.jsx)("p",{style:{fontSize:"max(3vw, 32px)",color:"#252525",margin:0,lineHeight:1},children:t.title}),(0,i.jsx)("p",{style:{fontSize:"1vw",color:"#252525",margin:0,marginLeft:6,marginBottom:0,lineHeight:1},children:f(t.title)})]}),(0,i.jsx)("div",{style:{display:"flex",flexWrap:"nowrap"},children:t.data.map((t,e)=>(0,i.jsx)("div",{style:{padding:"4px 8px",width:100,borderRight:"1px solid #ddd"},children:(0,i.jsx)("p",{style:{fontSize:"2vw",color:"#252525",margin:0},children:t})},e))})]},e))}),(0,i.jsxs)("div",{style:{position:"relative",height:"calc(100% - 94px)"},children:[s.map((t,e)=>(0,i.jsxs)("div",{className:r().timeline_data_item,style:{marginTop:12,height:"calc(100% / 6 - 24px)",width:(t.end-t.start+1)*100,backgroundColor:t.color,display:"flex",position:"absolute",left:(t.start-1)*100,top:"calc(100% / 6 * ".concat(t.line-1,")"),borderRadius:100,alignItems:"center",paddingLeft:24,"--hover-color":"#ddd",transition:"all 0.3s ease"},children:[(0,i.jsx)("p",{style:{fontSize:"2vh",color:"#666",fontWeight:300},children:t.name}),(0,i.jsx)("p",{style:{fontSize:"1vh",color:"#999",fontWeight:300}})]},e)),c.map((t,e)=>(0,i.jsx)("div",{className:r().timeline_data_item,style:{borderRadius:"100%",marginTop:12,height:"calc(100% / 6 - 24px)",width:"calc((100vh - 94px) / 6 - 24px)",backgroundColor:t.color,display:"flex",position:"absolute",left:(t.position.x-1)*100,top:"calc(100% / 6 * ".concat(t.position.y-1,")"),alignItems:"center",justifyContent:"center","--hover-color":"#ddd",transition:"all 0.3s ease"},children:(0,i.jsx)("p",{style:{fontSize:"2vh",color:"#666",fontWeight:300},children:t.title})},e))]})]})};e.default=h},3330:function(t,e,n){"use strict";n.r(e);var i=n(5893),o=n(3744),r=n(7488),a=n(8569),l=n(3913),s=n(2072),c=n(6344);let d=t=>{let{children:e}=t;return(0,i.jsx)("div",{style:{backgroundColor:"#f8f8f8"},children:(0,i.jsx)("div",{style:{borderRadius:"0 0 64px 64px",backgroundColor:"#fff",minHeight:"calc(100vh - 250px)",paddingBottom:64},children:(0,i.jsx)("div",{style:{minHeight:"100vh"},children:e})})})},f=[{animationDuration:8e3,text:"git.abc.osaka　　abc.osaka",width:180},{text:"FOR SCHOOL RULE",width:140}],h=[{href:"https://github.com/applemango/applemango.github.io/blob/main/pages/future/index.tsx",content:"このサイトのコード | source code"},{href:"https://abc.osaka/edit/privacy-policy",content:"プライバシーポリシー | Privacy Policy"},{href:"https://forms.gle/qh1fdKDp82Q5m4ER6",content:"お問い合わせフォーム | Contact Form"},{href:"https://abc.osaka",content:"メインページ | Main Page"}],m=()=>(0,i.jsxs)("div",{children:[(0,i.jsx)(r.default,{page:{home:"/",future:"/future",about:"/"}}),(0,i.jsxs)(d,{children:[(0,i.jsx)("div",{style:{},children:(0,i.jsx)(s.TitleTextWithSimpleShowAnimation,{style:{fontSize:"12vw",marginBottom:24,fontWeight:500,display:"flex",justifyContent:"center"},text:(0,i.jsxs)(i.Fragment,{children:["What I",(0,i.jsx)("span",{style:{width:"2vw"}}),(0,i.jsx)("span",{style:{},children:" want"}),(0,i.jsx)("span",{style:{width:"2vw"}}),"to be"]})})}),(0,i.jsxs)("div",{style:{width:"80%",margin:"0 auto"},children:[(0,i.jsx)("h1",{style:{fontSize:48,fontWeight:300,color:"#252525"},children:"What I want to be the future"}),(0,i.jsx)("p",{style:{fontSize:20,fontWeight:300,color:"#555",marginBottom:0},children:"もう卒業式ですよ、早い、ほんと早い、1年と2年の頃がつい昨日のように感じる"}),(0,i.jsx)("p",{style:{fontSize:20,fontWeight:300,color:"#555",margin:0},children:"修学旅行なんて9ヶ月前、信じられる?、信じれない本当に、もっと信じられないのはもう冬休みが終わって3ヶ月経とうとしている事"}),(0,i.jsx)("p",{style:{fontSize:20,fontWeight:300,color:"#555",margin:0},children:"義務教育期間3,000日、残り0日、中学校生活1000日あまり、残り0日、中学生というインパクトのある肩書きがなくなり高校生というありふれた肩書きになるんだよ、まぁ泣いても笑ってもこれが最後だからこれくらいでとどめておこう"}),(0,i.jsx)("p",{style:{fontSize:20,fontWeight:300,color:"#555",marginBottom:0},children:"本題に行くけど、未来のなりたい姿と言っても明確に決まっていたら進路に苦労しないんだよ、それに最終的に行く着く先は死だよ(諸説あり)"}),(0,i.jsx)("p",{style:{fontSize:20,fontWeight:300,color:"#555",margin:0},children:'そして1年の目標も"色々する"などと抽象化した人に長期的な目標が立てれるのかね、まぁ御託を並べるのはこのくらいにして一度3年間を振り返るか'}),(0,i.jsx)("h1",{style:{fontSize:48,fontWeight:300,color:"#252525"},children:"Looking back"})]}),(0,i.jsx)(l.default,{children:(0,i.jsx)("div",{style:{margin:"0 10vw 0 10vw"},children:(0,i.jsx)(c.default,{})})}),(0,i.jsxs)("div",{style:{width:"80%",margin:"0 auto"},children:[(0,i.jsx)("h2",{style:{fontSize:42,fontWeight:300,color:"#252525"},children:"The apps I made"}),(0,i.jsx)(a.default,{}),(0,i.jsx)("p",{style:{fontSize:12,fontWeight:300,color:"#555"},children:"本当はもっと色々あるけど色々と事情が..."}),(0,i.jsx)("h1",{style:{fontSize:48,fontWeight:300,color:"#252525"},children:"What I want to be the future"}),(0,i.jsx)("p",{style:{fontSize:20,fontWeight:300,color:"#555",marginBottom:0},children:"なんか最初の2年何もしてなくね?、22, 23と比べて20, 21スカスカすぎない？"}),(0,i.jsx)("p",{style:{fontSize:20,fontWeight:300,color:"#555"},children:"(一応言い訳するとGameで上位0.0001%(19/13000000)とかになったり色々したけどそんな事書いても意味ないし)"}),(0,i.jsx)("p",{style:{fontSize:20,fontWeight:300,color:"#555",margin:0},children:"まぁ過去の自分を殴るのもこれくらいにして、タイトル回収でもして終わるか、ここまで読んだ人何人くらいだろ2人ぐらいか?"}),(0,i.jsx)("p",{style:{fontSize:64,fontWeight:300,color:"#555",margin:0},children:"未来のなりたい姿"}),(0,i.jsx)("p",{style:{fontSize:24,fontWeight:300,color:"#555"},children:"ビジョンを持ってソサイエティのイシューやプログレム、人々のコモンセンスをチェンジできるようなイノベーションのイニシアチブをコンセンサスにとり、アジャイルにアビリティを駆使し、ファクトベースにPDCAを回し、コンプライアンスを守り、アピアランスやKPIだけを意識せず、ノウハウやコアコンピタスを取得しプロフィットを得たい"})]}),(0,i.jsxs)("div",{style:{width:"80%",margin:"0 auto"},children:[(0,i.jsx)(s.TitleTextWithSimpleShowAnimation,{style:{fontSize:"15vw",marginBottom:24,fontWeight:500},text:"またいつか"}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(s.TitleTextWithSimpleShowAnimation,{delay:.2,style:{fontSize:"4vw",marginBottom:24,fontWeight:500},text:"五年後"}),(0,i.jsx)(s.TitleTextWithSimpleShowAnimation,{delay:1.6,style:{fontSize:"4vw",marginBottom:24,fontWeight:500},text:"あるいは百年後、"}),(0,i.jsx)(s.TitleTextWithSimpleShowAnimation,{delay:3,style:{fontSize:"4vw",marginBottom:24,fontWeight:500},text:"または永遠に"})]}),(0,i.jsx)("p",{children:"令和6年 3月 14日"}),(0,i.jsx)("p",{style:{fontSize:20,fontWeight:300,color:"#555",margin:0},children:"一応三年後更新しようと思ってる"})]})]}),(0,i.jsx)(o.default,{texts:f,links:h})]});e.default=m},9224:function(t){t.exports={style:{fontFamily:"'__roboto_a9aaba', '__roboto_Fallback_a9aaba'"},className:"__className_a9aaba"}},3539:function(t){t.exports={style:{fontFamily:"'__roboto_a9aaba', '__roboto_Fallback_a9aaba'"},className:"__className_a9aaba"}},5341:function(t){t.exports={timeline_data_item:"any_timeline_data_item__xloke",container:"any_container__2onVn",hide540:"any_hide540___P0hZ",w70max540:"any_w70max540__a6__2",w30max540:"any_w30max540__aVXsJ"}},4737:function(t){t.exports={footer:"footer_footer__8YaAe",__:"footer______D2WO",_:"footer____6YfX9",text:"footer_text__ZEiJY",scrolls:"footer_scrolls__YeET3",t:"footer_t__a7PSL"}},3101:function(t){t.exports={main:"header_main__X_NCb",main_:"header_main___vM2uC",links:"header_links__v9lqY",underline:"header_underline__s_oWD"}},1163:function(t,e,n){t.exports=n(880)}},function(t){t.O(0,[777,664,675,774,888,179],function(){return t(t.s=11)}),_N_E=t.O()}]);