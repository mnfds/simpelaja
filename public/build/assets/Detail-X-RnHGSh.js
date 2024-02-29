import{_ as v}from"./AuthenticatedLayout-uBCviqzS.js";import{d as w}from"./dayjs.min-mXJvGpaU.js";import{Q as y,o as r,c as l,a as i,u as e,w as d,F as h,Z as b,b as t,i as m,d as c,t as o,r as _}from"./app-6xvXvQMU.js";const k={class:"py-4 font-sans"},M={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},B=t("h2",{class:"font-semibold text-xl text-slate-500 leading-tight mb-4"}," Indikator Upaya Kesehatan Masyarakat (UKM) ",-1),D={class:"flex bg-white px-4 py-6 shadow-md","aria-label":"Breadcrumb"},C={class:"inline-flex items-center space-x-1 md:space-x-3"},L={class:"inline-flex items-center"},z=t("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),K={class:"flex items-center"},U=t("svg",{"aria-hidden":"true",class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),V={class:"flex items-center"},Y=t("svg",{"aria-hidden":"true",class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),N={"aria-current":"page"},T={class:"flex items-center"},j=t("svg",{"aria-hidden":"true",class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),F={class:"ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"},H={class:"mt-6 p-6 bg-white shadow-md rounded-sm"},I={id:"example",class:"stripe hover",style:{width:"100%","padding-top":"1em","padding-bottom":"1em"}},P=t("thead",null,[t("tr",null,[t("th",{"data-priority":"1",class:"text-start"},"Puskesmas"),t("th",{"data-priority":"2",class:"text-start"},"Dilaporkan Pada"),t("th",{"data-priority":"3",class:"text-start"},"Capaian"),t("th",{"data-priority":"4",class:"text-start"},"Target"),t("th",{"data-priority":"5",class:"text-start"},"Options")])],-1),S={class:"mr-5 font-bold"},E={class:"flex items-center"},O=t("i",{class:"fa-sharp fa-solid fa-eye"},null,-1),J={__name:"Detail",setup(Q){const{data:g,user:f,sub:p}=y().props;return $(document).ready(function(){$("#example").DataTable({responsive:!0}).columns.adjust().responsive.recalc()}),(a,Z)=>(r(),l(h,null,[i(e(b),{title:"Indikator Upaya Kesehatan Masyarakat"}),i(v,null,{default:d(()=>[t("div",k,[t("div",M,[B,t("nav",D,[t("ol",C,[t("li",L,[i(e(m),{href:a.route("dashboard"),class:"inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"},{default:d(()=>[z,c(" Dashboard ")]),_:1},8,["href"])]),t("li",null,[t("div",K,[U,i(e(m),{href:a.route("ukm.program"),class:"ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"},{default:d(()=>[c(" Upaya Kesehatan Masyarakat")]),_:1},8,["href"])])]),t("li",null,[t("div",V,[Y,i(e(m),{href:a.route("program.detail",{id:a.$page.props.program.id}),class:"ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"},{default:d(()=>[c(o(a.$page.props.program.program),1)]),_:1},8,["href"])])]),t("li",N,[t("div",T,[j,t("span",F,o(a.$page.props.sub.nama),1)])])])]),t("div",H,[t("table",I,[P,t("tbody",null,[(r(!0),l(h,null,_(e(f),(n,x)=>(r(),l("tr",{key:x},[t("td",null,[t("span",null,[t("span",S,o(x+1),1),c(o(n.name),1)])]),t("td",null,[(r(!0),l(h,null,_(e(g).filter(s=>s.id_users==n.id),(s,u)=>(r(),l("div",{key:u},o(e(w)(String(s.created_at)).format("DD MMMM YYYY, HH:mm")),1))),128))]),t("td",null,[(r(!0),l(h,null,_(e(g).filter(s=>s.id_users==n.id),(s,u)=>(r(),l("div",{key:u},o(s.hasil+" "+e(p).str_target),1))),128))]),t("td",null,o(e(p).target+" "+e(p).str_target),1),t("td",E,[i(e(m),{href:a.route("program.detail.admin.user",{id_program:a.$page.props.program.id,id_sub:a.$page.props.sub.id,id_user:n.id}),class:"text-teal-600 hover:text-teal-500"},{default:d(()=>[O]),_:2},1032,["href"])])]))),128))])])])])])]),_:1})],64))}};export{J as default};
