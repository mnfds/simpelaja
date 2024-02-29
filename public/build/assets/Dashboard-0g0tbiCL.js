import{_ as g}from"./AuthenticatedLayout-uBCviqzS.js";import{Q as x,o,c as l,a as i,u as t,w as m,F as u,Z as _,b as e,g as d,d as p,t as a}from"./app-6xvXvQMU.js";const b={class:"py-4 font-sans"},w={class:"max-w-7xl py-2 mx-auto sm:px-6 lg:px-8"},v={class:"mx-4 pb-8"},f={class:"text-2xl text-slate-600"},k={key:0,class:"text-polynesian-blue font-bold"},y={class:"mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4"},M={class:"relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"},z=e("div",{class:"bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",class:"w-6 h-6 text-white"},[e("path",{d:"M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"})])],-1),V={class:"p-4 text-right"},B={class:"block antialiased text-sm leading-normal font-normal text-blue-gray-600"},D={class:"block antialiased tracking-normal text-2xl font-semibold leading-snug text-blue-gray-900"},A={class:"relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"},C=e("div",{class:"bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",class:"w-6 h-6 text-white"},[e("path",{"fill-rule":"evenodd",d:"M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z","clip-rule":"evenodd"})])],-1),N={class:"p-4 text-right"},P=e("p",{class:"block antialiased text-sm leading-normal font-normal text-blue-gray-600"}," Total Penduduk",-1),S={class:"block antialiased tracking-normal text-2xl font-semibold leading-snug text-blue-gray-900"},T={key:0,class:"relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"},j=e("div",{class:"bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",class:"w-6 h-6 text-white"},[e("path",{d:"M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"})])],-1),F={class:"p-4 text-right"},H=e("p",{class:"block antialiased text-sm leading-normal font-normal text-blue-gray-600"}," Total SDM ",-1),J={class:"block antialiased tracking-normal text-2xl font-semibold leading-snug text-blue-gray-900"},$={__name:"Dashboard",setup(E){const{auth:s,desa:r,puskesmas:n,penduduk:c,sdm:h}=x().props;return(I,K)=>(o(),l(u,null,[i(t(_),{title:"Dashboard"}),i(g,null,{default:m(()=>[e("div",b,[e("div",w,[e("div",v,[e("span",f,[t(s).user.role=="admin"?(o(),l("span",k,"ADMIN")):d("",!0),p(" Aplikasi Sistem Pelaporan Kinerja Puskesmas (Simpel Aja) ")])]),e("div",y,[e("div",M,[z,e("div",V,[e("p",B,a(t(s).user.role=="puskesmas"?"Jumlah Desa":"Jumlah Puskesmas"),1),e("h4",D,a(t(s).user.role=="puskesmas"?t(r):t(n)),1)])]),e("div",A,[C,e("div",N,[P,e("h4",S,a(t(c)),1)])]),t(s).user.role=="puskesmas"?(o(),l("div",T,[j,e("div",F,[H,e("h4",J,a(t(h)),1)])])):d("",!0)])])])]),_:1})],64))}};export{$ as default};
