import{E as r,y as l,m as n,e as d,G as i,o as c,c as m}from"./app-DAT1wVKh.js";const v={__name:"TextInput",props:{modelValue:{type:String,required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(s,{expose:t}){const o=r(s,"modelValue"),e=l(null);return n(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),t({focus:()=>e.value.focus()}),(p,u)=>d((c(),m("input",{class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm","onUpdate:modelValue":u[0]||(u[0]=a=>o.value=a),ref_key:"input",ref:e},null,512)),[[i,o.value]])}};export{v as _};
