import{P as S}from"./data-b4851112.js";import{A as D,a as m,z as P,b as d,c as i,d as e,t as o,w as L,v as j,F as k,y as $,n as C,S as y,j as B,k as F,_ as G,o as z,f as A,g as I,p as O,h as V}from"./index-a51a0223.js";import{P as H,O as N,G as T}from"./Pay-99fc8538.js";import{G as M}from"./index-c8533490.js";const E=""+new URL("../img/banner2.png",import.meta.url).href,K=""+new URL("套餐-2381ece1.svg",import.meta.url).href,U={class:"absolute w-full h-full top-0 bg-[rgba(0,0,0,0.5)]"},q={class:"w-full h-full flex justify-center items-center"},R={class:"bg-[var(--theme-model-bg)] text-[var(--theme-title)] shadow-lg shadow-[var(--theme-shadow-bg)] relative lg:w-[25rem] w-[22rem] rounded-2xl p-5"},Y=e("svg",{t:"1694499094039",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"16661",width:"32",height:"32"},[e("path",{d:"M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z",fill:"#5090F1","p-id":"16662"}),e("path",{d:"M512 455.431l169.706-169.705a8 8 0 0 1 11.313 0l45.255 45.255a8 8 0 0 1 0 11.313L568.57 512l169.705 169.706a8 8 0 0 1 0 11.313l-45.255 45.255a8 8 0 0 1-11.313 0L512 568.57 342.294 738.274a8 8 0 0 1-11.313 0l-45.255-45.255a8 8 0 0 1 0-11.313L455.43 512 285.726 342.294a8 8 0 0 1 0-11.313l45.255-45.255a8 8 0 0 1 11.313 0L512 455.43z",fill:"#FFFFFF","p-id":"16663"})],-1),Z=[Y],J=e("div",{class:"text-xl"},[e("p",null,"订单详情")],-1),Q={class:"mt-5 flex items-center"},W=e("img",{class:"rounded-lg lg:w-24 w-20",src:K,alt:""},null,-1),X={class:"flex w-full justify-around items-center"},ee={class:"flex flex-col"},te={class:"text-lg whitespace-nowrap overflow-ellipsis overflow-hidden"},se={class:"flex gap-2 items-center"},le=e("span",{class:"border-4 border-green-500 w-0 h-0 rounded-full"},null,-1),ae={class:"flex gap-2 items-center"},oe=e("span",{class:"border-4 border-green-500 w-0 h-0 rounded-full"},null,-1),ne={class:"mt-4"},re=e("p",null,"优惠码",-1),ce={class:"flex mt-2 justify-between gap-5 px-2"},de={class:"mt-5"},ie=e("p",{class:"text-sm mb-2"},"周期选项",-1),ue={class:"w-full overflow-scroll"},_e={class:"flex gap-5 flex-wrap"},pe=["onClick"],he={__name:"Plan_Pay",props:{data:Object,move_node:Function},setup(_){const n=D(),s=_,b=()=>{s.move_node()},p=m(null),v=t=>{switch(t){case"month_price":return"月付";case"quarter_price":return"季付";case"half_year_price":return"半年";case"year_price":return"年付";case"two_year_price":return"俩年付";case"three_year_price":return"三年付";case"onetime_price":return"一次性";case"reset_price":return"重置价格";default:return!1}},f=m([]),g=m(0),x=m(null);P(s.data,t=>{for(const a in t)t[a]!==null&&v(a)&&f.value.push({title:v(a),name:a,number:t[a]})},{immediate:!0});const l=()=>{H(s.data.id,p.value).then(t=>{x.value=t.data.data}).catch(t=>{y(t.data.message,null,400),p.value=null})},r=()=>{let t=f.value[g.value].name,a=s.data.id;N(t,a,p.value).then(c=>{y("订单创建成功","请支付",200),s.move_node(),M(c.data.data)}).catch(c=>{y("订单提交失败！",c.data.message,400,4e3),console.log(c.data.message.indexOf("未付款")!==-1),c.data.message.indexOf("未付款")!==-1&&T().then(h=>{n.OderList=h.data.data;for(let w=0;w<h.data.data.length;w++)console.log(h.data.data[w]),h.data.data[w].status===0&&M(h.data.data[w].trade_no)})})};return(t,a)=>(d(),i("div",U,[e("div",q,[e("div",R,[e("div",{class:"absolute top-0 right-0 cursor-pointer",onClick:b},Z),J,e("div",Q,[W,e("div",X,[e("div",ee,[e("h1",te,o(s.data.name),1),e("div",null,[e("div",se,[le,e("p",null,"周期流量："+o(s.data.transfer_enable)+"G",1)]),e("div",ae,[oe,e("p",null,"套餐限速："+o(s.data.speed_limit===null?"无限":s.data.speed_limit)+"/MS",1)])])])])]),e("div",ne,[re,e("div",ce,[L(e("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>p.value=c),class:"bg-[var(--theme-com-item)] flex-1 indent-2 rounded-lg p-1 outline-0",type:"text",placeholder:"可选项"},null,512),[[j,p.value]]),e("button",{type:"button",onClick:l,class:"text-sm rounded-lg text-black bg-green-600 px-2 py-1"},"验证优惠码")])]),e("div",de,[ie,e("div",ue,[e("div",_e,[(d(!0),i(k,null,$(f.value,(c,h)=>(d(),i("p",{onClick:w=>g.value=h,class:C([g.value===h?"text-green-400 border border-green-400":"","bg-[var(--theme-com-item)] cursor-pointer px-2 py-1 rounded-lg whitespace-nowrap"])},o(c.title)+": "+o(x.value!=null?x.value.type===1?c.number/100-(x.value.value/100).toFixed(2):(c.number/100-c.number/100*x.value.value/100).toFixed(2):(c.number/100).toFixed(2)),11,pe))),256))])])]),e("div",{class:"w-full text-center mt-5"},[e("button",{onClick:r,class:"w-[80%] p-2 bg-green-500 text-black rounded-3xl"},"去支付")])])])]))}},me=_=>{const s=B(he,{data:_,move_node:()=>{F(null,document.getElementById("Model"))}});F(s,document.getElementById("Model"))};const u=_=>(O("data-v-2a6cd940"),_=_(),V(),_),ve={class:"shadow-lg shadow-[var(--theme-shadow-bg)] text-[var(--theme-title)] relative rounded-2xl lg:-mt-7 overflow-y-scroll h-full"},fe={key:0,class:"bg-[var(--theme-com)] w-[100%] items-center lg:p-14 py-5 h-full flex gap-10"},xe=u(()=>e("div",{class:"hidden lg:block flex-1"},[e("img",{src:E,alt:""})],-1)),ge={class:"lg:w-[70%] w-full px-5 h-full"},we={class:"relative flex flex-col h-full"},be={class:"lg:ml-5"},ye={class:"w-full lg:text-xl text-xl p-2 rounded-lg inline-block"},ke={class:"bg-[var(--theme-com-item)] mt-2 sm:flex-1 w-full sm:overflow-scroll sm:ml-5 mb-2 p-5 rounded-lg"},$e=["innerHTML"],Ce={class:"px-5"},Fe=u(()=>e("p",{class:"text-xl mb-2"},"配置项：",-1)),Me={class:"flex gap-5 items-center text-lg"},Pe=u(()=>e("span",{class:"border-4 border-green-500 w-0 h-0 rounded-full"},null,-1)),Se={class:""},De={class:"flex gap-5 items-center text-lg"},Le=u(()=>e("span",{class:"border-4 border-green-500 w-0 h-0 rounded-full"},null,-1)),je={class:"w-full overflow-scroll"},Be={class:"flex gap-5"},Ge={class:"inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700 dark:bg-emerald-700 dark:text-emerald-100"},ze=u(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"-ms-1 me-1.5 h-4 w-4"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)),Ae={class:"whitespace-nowrap text-sm"},Ie={class:"flex items-center"},Oe={class:"p-5 sm:max-h-[150px] sm:overflow-y-scroll overflow-x-scroll"},Ve={class:"flex flex-row flex-nowrap gap-5 sm:flex-wrap"},He=["onClick"],Ne={class:"whitespace-nowrap overflow-hidden overflow-ellipsis"},Te={class:"absolute -top-3 text-white text-sm bg-[#08CD7C] rounded-lg px-2 left-0"},Ee={class:"flex flex-col items-center gap-0"},Ke={class:"text-[13px] whitespace-nowrap text-neutral-400"},Ue=u(()=>e("path",{d:"M512 929.959184c-230.4 0-417.959184-187.559184-417.959184-417.959184s187.559184-417.959184 417.959184-417.959184 417.959184 187.559184 417.959184 417.959184-187.559184 417.959184-417.959184 417.959184z",fill:"#08CD7C","p-id":"4231","data-spm-anchor-id":"a313x.search_index.0.i2.3aaf3a810MN6jV",class:"selected"},null,-1)),qe=u(()=>e("path",{d:"M459.755102 637.387755c-5.22449 0-10.44898-2.089796-14.628571-6.269388l-104.489796-104.489796c-8.359184-8.359184-8.359184-21.420408 0-29.779591 8.359184-8.359184 21.420408-8.359184 29.779592 0l104.489795 104.489796c8.359184 8.359184 8.359184 21.420408 0 29.779591-4.702041 4.179592-9.926531 6.269388-15.15102 6.269388z",fill:"#DCFFFA","p-id":"4232"},null,-1)),Re=u(()=>e("path",{d:"M459.755102 637.387755c-5.22449 0-10.44898-2.089796-14.628571-6.269388-8.359184-8.359184-8.359184-21.420408 0-29.779591l208.979591-208.979592c8.359184-8.359184 21.420408-8.359184 29.779592 0 8.359184 8.359184 8.359184 21.420408 0 29.779592l-208.979592 208.979591c-4.702041 4.179592-9.926531 6.269388-15.15102 6.269388z",fill:"#DCFFFA","p-id":"4233"},null,-1)),Ye=[Ue,qe,Re],Ze=u(()=>e("span",{class:"absolute top-0 right-0 px-5 py-1 text-xs tracki text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-400"},"Go~",-1)),Je={__name:"Home",setup(_){const n=m(-1),s=m(null),b=l=>{if(typeof l=="number"){const r=l.toString(),t=r.slice(0,-2),a=r.slice(-2);return`${t}.${a}`}return l},p=l=>{switch(l){case"month_price":return"月付";case"quarter_price":return"季付";case"half_year_price":return"半年";case"year_price":return"年付";case"two_year_price":return"俩年付";case"three_year_price":return"三年付";case"onetime_price":return"一次性";case"reset_price":return"重置价格";default:return!1}};z(()=>{S().then(l=>{Array.from(l.data.data).length>0&&(n.value=0,s.value=Array.from(l.data.data))})});const v=m(),f=m([]);P(n,l=>{v.value=s.value[l],f.value.splice(0);for(const r in v.value)if(v.value[r]!==null){let t=p(r);t!==!1&&f.value.push({name:t,title:r,number:v.value[r]})}});const g=l=>{let r=[];for(const t in l)if(t.indexOf("_price")!==-1&&l[t]!==null){r[0]=p(t),r[1]=b(l[t]);break}return r},x=()=>{let l=s.value[n.value];me(l)};return(l,r)=>(d(),i("div",ve,[s.value!==null?(d(),i("div",fe,[xe,e("div",ge,[e("div",we,[e("div",be,[e("p",ye,"套餐名称："+o(s.value[n.value].name),1)]),e("div",ke,[e("div",{innerHTML:s.value[n.value].content,class:""},null,8,$e)]),e("div",Ce,[Fe,e("div",Me,[Pe,e("p",Se,"周期流量："+o(s.value[n.value].transfer_enable)+"G",1)]),e("div",De,[Le,e("p",null,"巅峰限速："+o(s.value[n.value].speed_limit==null?"无限制":s.value[n.value].speed_limit)+"/MS",1)]),e("div",je,[e("ul",Be,[(d(!0),i(k,null,$(f.value,(t,a)=>(d(),i("li",{key:a,class:"rounded-md py-4 text-sm focus:relative text-gray-400 hover:text-gray-200 cursor-pointer"},[e("span",Ge,[ze,e("p",Ae,o(t.name)+": "+o(b(t.number)),1)])]))),128))])])]),e("div",Ie,[e("div",Oe,[e("ul",Ve,[(d(!0),i(k,null,$(s.value,(t,a)=>(d(),i("li",{key:a,class:C([a===n.value?"border-[#08CD7C] border-2":"border-2 border-slate-800","relative p-2 px-5 shadow-sm shadow-[#08CD7C] w-36 text-center rounded-xl cursor-pointer hover:border-[#08CD7C]"]),onClick:c=>n.value=a},[e("div",null,[e("p",Ne,o(t.name),1),e("span",Te,o(t.transfer_enable)+"G/"+o(g(t)[0]),1),e("div",Ee,[e("span",Ke,o(g(t)[1])+" - "+o(t.speed_limit==null?"无限制":t.speed_limit)+"/MS ",1)])]),(d(),i("svg",{class:C([a===n.value?"block":"hidden","icon absolute top-0 right-0"]),t:"1693782622038",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4230",width:"20",height:"20"},Ye,2))],10,He))),128))])])]),e("div",{class:"pb-24 sm:pb-5 sm:mt-5"},[e("button",{type:"button",onClick:x,class:"relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded bg-[#08CD7C] text-gray-900"},[A("立即支付 "),Ze])])])])])):I("",!0)]))}},tt=G(Je,[["__scopeId","data-v-2a6cd940"]]);export{tt as default};
