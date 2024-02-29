import{_ as x}from"./AuthenticatedLayout-uBCviqzS.js";import{Q as g,o as n,c as d,a as s,u as o,w as l,F as h,Z as w,b as e,i as r,d as m,r as v,t as u,T as b}from"./app-6xvXvQMU.js";import{S as p}from"./sweetalert2.all-CR9EboZA.js";const y={class:"py-4 font-sans"},k={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},B=e("h2",{class:"font-semibold text-xl text-slate-500 leading-tight mb-4"}," Indikator Upaya Kesehatan Masyarakat (UKM) ",-1),C={class:"flex bg-white px-4 py-6 shadow-md","aria-label":"Breadcrumb"},M={class:"inline-flex items-center space-x-1 md:space-x-3"},V={class:"inline-flex items-center"},D=e("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),K=e("li",{"aria-current":"page"},[e("div",{class:"flex items-center"},[e("svg",{"aria-hidden":"true",class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})]),e("span",{class:"ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"}," Upaya Kesehatan Masyarakat ")])],-1),T={class:"mt-6 p-6 bg-white shadow-md rounded-sm"},U={class:"flex justify-end mb-4"},j=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-bookmark-plus-fill",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"})],-1),H=e("span",null,"Tambah Program",-1),L={id:"example",class:"stripe hover",style:{width:"100%","padding-top":"1em","padding-bottom":"1em"}},S=e("thead",null,[e("tr",null,[e("th",{"data-priority":"1",class:"text-start"},"Program")])],-1),z={class:"flex justify-between items-center"},N={class:"mr-5 font-bold overflow-hidden whitespace-nowrap text-ellipsis"},P={class:"flex justify-center space-x-4 items-center"},A=e("i",{class:"fa-sharp fa-solid fa-eye"},null,-1),F=e("i",{class:"fa-sharp fa-solid fa-pen-to-square"},null,-1),I=["onClick"],q=e("i",{class:"fa-solid fa-trash"},null,-1),E=[q],O={__name:"index",setup(Q){const f=g().props.data,_=(a,c)=>{const t=b({id:a});p.fire({title:"Apakah kamu yakin?",text:`Kamu akan menghapus program ${c} ini!`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ya, Hapus!"}).then(i=>{i.isConfirmed&&t.delete(route("delete.ukm"),{onSuccess:()=>{p.fire({title:"Dihapus!",text:"Program telah dihapus.",icon:"success"}).then(Y=>{location.reload()})}})})};return $(document).ready(function(){$("#example").DataTable({responsive:!0}).columns.adjust().responsive.recalc()}),(a,c)=>(n(),d(h,null,[s(o(w),{title:"Indikator Upaya Kesehatan Masyarakat"}),s(x,null,{default:l(()=>[e("div",y,[e("div",k,[B,e("nav",C,[e("ol",M,[e("li",V,[s(o(r),{href:a.route("dashboard"),class:"inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"},{default:l(()=>[D,m(" Dashboard ")]),_:1},8,["href"])]),K])]),e("div",T,[e("div",U,[s(o(r),{href:a.route("add.ukms"),class:"flex items-center text-sm space-x-2 text-white shadow-sm shadow-icterina px-4 py-2 rounded-sm bg-indigo-700 hover:bg-indigo-600"},{default:l(()=>[j,H]),_:1},8,["href"])]),e("table",L,[S,e("tbody",null,[(n(!0),d(h,null,v(o(f),(t,i)=>(n(),d("tr",{key:i},[e("td",z,[e("span",null,[e("span",N,u(i+1),1),m(u(t.program),1)]),e("div",P,[s(o(r),{href:a.route("program.detail",{id:t.id}),class:"text-teal-600 hover:text-teal-500"},{default:l(()=>[A]),_:2},1032,["href"]),s(o(r),{href:a.route("edit.ukm",{id:t.id}),class:"text-polynesian-blue hover:text-carolina-blue"},{default:l(()=>[F]),_:2},1032,["href"]),e("button",{onClick:()=>_(t.id,t.program),class:"text-red-600 hover:text-red-500"},E,8,I)])])]))),128))])])])])])]),_:1})],64))}};export{O as default};
