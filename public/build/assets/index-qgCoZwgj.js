import{_}from"./AuthenticatedLayout-fXIfv3KI.js";import{Q as x,o as r,c as d,a as s,u as n,w as o,F as h,Z as g,b as e,i,d as w,r as v,t as u,T as y}from"./app-QgNPq1f0.js";import{S as p}from"./sweetalert2.all-Rn9OMCtz.js";const b={class:"py-4 font-sans"},k={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},B=e("h2",{class:"font-semibold text-xl text-slate-500 leading-tight mb-4"}," Indikator Upaya Kesehatan Perseorangan dan Penunjang (UKPP) ",-1),P={class:"flex bg-white px-4 py-6 shadow-md","aria-label":"Breadcrumb"},C={class:"inline-flex items-center space-x-1 md:space-x-3"},j={class:"inline-flex items-center"},V=e("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),D=e("li",{"aria-current":"page"},[e("div",{class:"flex items-center"},[e("svg",{"aria-hidden":"true",class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})]),e("span",{class:"ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"}," Indikator Upaya Kesehatan Perseorangan dan Penunjang ")])],-1),K={class:"mt-6 p-6 bg-white shadow-md rounded-sm"},T={class:"flex justify-end mb-4"},U=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-bookmark-plus-fill",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"})],-1),H=e("span",null,"Tambah Pelayanan",-1),L={id:"example",class:"stripe hover",style:{width:"100%","padding-top":"1em","padding-bottom":"1em"}},N=e("thead",null,[e("tr",null,[e("th",{"data-priority":"1",class:"text-start"},"No"),e("th",{"data-priority":"2",class:"text-start"},"Pelayanan")])],-1),S={class:"font-bold"},z={class:"flex justify-between items-center"},I={class:"overflow-hidden whitespace-nowrap text-ellipsis"},M={class:"flex justify-center space-x-4 items-center"},A=e("i",{class:"fa-sharp fa-solid fa-eye"},null,-1),F=e("i",{class:"fa-sharp fa-solid fa-pen-to-square"},null,-1),q=["onClick"],E=e("i",{class:"fa-solid fa-trash"},null,-1),Q=[E],R={__name:"index",setup(Y){const m=x().props.data,f=(a,c)=>{const t=y({id:a});p.fire({title:"Apakah kamu yakin?",text:`Kamu akan menghapus program ${c} ini!`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ya, Hapus!"}).then(l=>{l.isConfirmed&&t.delete(route("delete.ukpp"),{onSuccess:()=>{p.fire({title:"Dihapus!",text:"Program telah dihapus.",icon:"success"}).then(Z=>{location.reload()})}})})};return $(document).ready(function(){$("#example").DataTable({responsive:!0}).columns.adjust().responsive.recalc()}),(a,c)=>(r(),d(h,null,[s(n(g),{title:"Indikator Upaya Kesehatan Perseorangan dan Penunjang"}),s(_,null,{default:o(()=>[e("div",b,[e("div",k,[B,e("nav",P,[e("ol",C,[e("li",j,[s(n(i),{href:a.route("dashboard"),class:"inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"},{default:o(()=>[V,w(" Dashboard ")]),_:1},8,["href"])]),D])]),e("div",K,[e("div",T,[s(n(i),{href:a.route("add.ukpps"),class:"flex items-center text-sm space-x-2 text-white shadow-sm shadow-icterina px-4 py-2 rounded-sm bg-indigo-700 hover:bg-indigo-600"},{default:o(()=>[U,H]),_:1},8,["href"])]),e("table",L,[N,e("tbody",null,[(r(!0),d(h,null,v(n(m),(t,l)=>(r(),d("tr",{key:l},[e("td",null,[e("span",S,u(l+1),1)]),e("td",z,[e("span",I,u(t.pelayanan),1),e("div",M,[s(n(i),{href:a.route("pelayanan.detail",{id:t.id}),class:"text-teal-600 hover:text-teal-500"},{default:o(()=>[A]),_:2},1032,["href"]),s(n(i),{href:a.route("edit.ukpp",{id:t.id}),class:"text-polynesian-blue hover:text-carolina-blue"},{default:o(()=>[F]),_:2},1032,["href"]),e("button",{onClick:()=>f(t.id,t.pelayanan),class:"text-red-600 hover:text-red-500"},Q,8,q)])])]))),128))])])])])])]),_:1})],64))}};export{R as default};
