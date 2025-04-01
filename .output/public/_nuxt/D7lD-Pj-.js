import{aw as v,d as b,ae as A,aa as E,c as D,e as o,o as r,O as B,k as s,M as a,y as d,V as g,ax as j,S as t,E as k,h,Q as c,ay as C,j as _}from"./Brcm05Lx.js";import{_ as F}from"./dGgjZl8m.js";const L=""+new URL("solana.BHJbFuEZ.png",import.meta.url).href,f=()=>v("color-mode").value,S={key:0,class:"flex bg-[#da342e] pl-2 pr-2 rounded-r-md -ml-1.5 z-[2] items-center"},V=["src"],Q={class:"text-white text-base text-ellipsis md:text-clip overflow-hidden w-12 md:whitespace-normal md:break-words md:overflow-visible md:text-sm md:w-auto mr-1.5"},W={key:1,class:"flex bg-[#DA342E] px-2 rounded-r-md w-fit -ml-1.5 z-[2] items-center"},R=b({__name:"ConnectButton",props:{left:{type:Boolean}},setup(w){f();const{publicKey:n}=A(),i=E(),e=D(()=>n.value);return(m,u)=>{const l=g,y=F;return r(),o("div",{class:B([[m.left?"justify-left":"justify-center",s(e)&&"flex flex-1"],"parent relative duration-500 rounded-md"])},[a(l,{name:"heroicons:wallet",class:"mr-2 z-10 absolute left-2 -translate-y-1/2 top-1/2 text-white w-5 h-5"}),a(s(j)),s(e)&&s(i).balanceSol.fetched?(r(),o("div",S,[t("img",{src:s(L),alt:"SOL",class:"h-4 bg-white p-1 md:h-5 mr-1.5 rounded-full"},null,8,V),t("span",Q,k(s(i).balanceSol.getFormattedAmount()),1)])):s(e)?(r(),o("div",W,[a(y,{size:2,class:"mx-4"})])):d("",!0)],2)}}}),x="data:image/webp;base64,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",p=""+new URL("fushuma-white.BIQSomyV.png",import.meta.url).href,U=""+new URL("fushuma-avatar.BHdJEF_R.png",import.meta.url).href,I={class:"min-h-screen flex flex-col bg-white dark:!bg-black transition-colors duration-300"},q={class:"border-b border-gray-200 bg-white dark:border-gray-800 sticky top-0 z-50 py-4 dark:bg-black shadow-sm"},T={class:"container mx-auto px-4 py-3"},N={class:"flex justify-between items-center"},Z={class:"flex items-center space-x-2"},J={href:"https://fushuma.com/",target:"_blank",class:"text-2xl font-bold text-[#DA342E] dark:text-[#DA342E] hover:opacity-80 transition-opacity"},G=["src"],M=["src"],Y=["src"],O={class:"hidden md:flex ml-6 uppercase font-semibold space-x-6"},X={class:"flex items-center space-x-4"},z={class:"flex-grow bg-white dark:bg-black transition-colors"},P={class:"bg-gray-100 dark:bg-[#0a0a0a] py-10 border-t border-gray-200 darxk:border-gray-800"},K={class:"container mx-auto px-4"},H={class:"grid grid-cols-1 md:grid-cols-5 gap-8"},$={class:"md:col-span-3 space-y-4"},tt={class:"text-2xl font-bold text-[#DA342E] dark:text-[#DA342E]"},et=["src"],st=["src"],at={class:"flex space-x-4 pt-2"},ot={target:"_blank",href:"https://twitter.com/FushumaChain",class:"text-gray-500 hover:text-[#DA342E] dark:text-gray-400 dark:hover:text-[#DA342E] transition-colors flex items-center"},rt={target:"_blank",href:"https://t.me/FushumaChain",class:"text-gray-500 hover:text-[#DA342E] dark:text-gray-400 dark:hover:text-[#DA342E] transition-colors flex items-center"},nt={target:"_blank",href:"https://www.facebook.com/FushumaChain",class:"text-gray-500 hover:text-[#DA342E] dark:text-gray-400 dark:hover:text-[#DA342E] transition-colors flex items-center"},lt={target:"_blank",href:"https://reddit.com/r/Fushuma",class:"text-gray-500 hover:text-[#DA342E] dark:text-gray-400 dark:hover:text-[#DA342E] transition-colors flex items-center"},ct={class:"md:col-span-1"},dt={class:"space-y-2"},it={class:"border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center text-gray-500 dark:text-gray-400"},ht={__name:"default",setup(w){const n=f();return(i,e)=>{const m=C,u=R,l=g;return r(),o("div",I,[t("header",q,[t("div",T,[t("div",N,[t("div",Z,[t("a",J,[t("img",{class:"md:hidden h-8",src:s(U)},null,8,G),s(n).value==="dark"?(r(),o("img",{key:0,class:"hidden md:block md:h-9 w-full",src:s(x)},null,8,M)):d("",!0),s(n).value==="light"?(r(),o("img",{key:1,class:"hidden md:block md:h-9 w-full",src:s(p)},null,8,Y)):d("",!0)]),t("nav",O,[e[1]||(e[1]=t("a",{target:"_blank",href:"https://fushuma.com/blueprint-for-decentralization/",class:"py-2 hover:text-[#DA342E] dark:text-gray-300 dark:hover:text-[#DA342E] transition-colors"}," Blueprint ",-1)),a(m,{target:"_blank",href:"https://fushuma.com/about-fushuma/",class:"py-2 hover:text-[#DA342E] dark:text-gray-300 dark:hover:text-[#DA342E] transition-colors"},{default:h(()=>e[0]||(e[0]=[c(" About ")])),_:1})])]),t("div",X,[a(u)])])])]),t("main",z,[_(i.$slots,"default")]),t("footer",P,[t("div",K,[t("div",H,[t("div",$,[t("div",tt,[s(n).value==="dark"?(r(),o("img",{key:0,class:"h-10",src:s(x)},null,8,et)):d("",!0),s(n).value==="light"?(r(),o("img",{key:1,class:"h-10",src:s(p)},null,8,st)):d("",!0)]),e[6]||(e[6]=t("p",{class:"text-gray-600 dark:text-gray-400 max-w-md"}," Fushuma Launchpad is the premier platform for launching Solana projects with seamless integration and comprehensive support. ",-1)),t("div",at,[t("a",ot,[a(l,{name:"simple-icons:x",class:"mr-1 w-4 h-4"}),e[2]||(e[2]=c(" X "))]),t("a",rt,[a(l,{name:"mdi:telegram",class:"mr-1 w-5 h-5"}),e[3]||(e[3]=c(" Telegram "))]),t("a",nt,[a(l,{name:"mdi:facebook",class:"mr-1 w-5 h-5"}),e[4]||(e[4]=c(" Facebook "))]),t("a",lt,[a(l,{name:"mdi:reddit",class:"mr-1 w-5 h-5"}),e[5]||(e[5]=c(" Reddit "))])])]),t("div",ct,[e[10]||(e[10]=t("h3",{class:"font-semibold text-lg mb-4 text-gray-900 expletus dark:text-white"},"Links",-1)),t("ul",dt,[t("li",null,[a(m,{to:"/fushuma-roadmap",class:"text-gray-600 hover:text-[#DA342E] dark:text-gray-400 dark:hover:text-[#DA342E] transition-colors"},{default:h(()=>e[7]||(e[7]=[c("Fushuma Roadmap")])),_:1})]),e[8]||(e[8]=t("li",null,[t("a",{target:"_blank",href:"https://fushuma.com/fuma-tokenomics/",class:"text-gray-600 hover:text-[#DA342E] dark:text-gray-400 dark:hover:text-[#DA342E] transition-colors"},"Fushuma Tokenomics")],-1)),e[9]||(e[9]=t("li",null,[t("a",{target:"_blank",href:"https://fushuma.com/dojo/",class:"text-gray-600 hover:text-[#DA342E] dark:text-gray-400 dark:hover:text-[#DA342E] transition-colors"},"Blog ")],-1))])]),e[11]||(e[11]=t("div",{class:"md:col-span-1"},[t("h3",{class:"font-semibold text-lg mb-4 text-gray-900 expletus dark:text-white"}," Technical Partners "),t("ul",{class:"space-y-2"},[t("li",null,[t("a",{href:"https://www.zeeve.io/",target:"_blank",class:"hover:text-[#DA342E] dark:text-gray-400 dark:hover:text-[#DA342E] transition-colors"},"Zeeve")])])],-1))]),t("div",it,[t("p",null,k(new Date().getFullYear())+" Fushuma. All rights reserved.",1)])])])])}}};export{ht as default};
