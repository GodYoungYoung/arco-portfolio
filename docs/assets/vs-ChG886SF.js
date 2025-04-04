import{V as a,a as i,c as u,d as c,e as _,o as m,W as l,X as t}from"./index-oR0mlNqp.js";const p=(r,n)=>{const e=r[n];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((o,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+n)))})},d=a({name:"visualscreen",__name:"vs",setup(r){const n=i();console.error(n);const e=l(()=>p(Object.assign({"./visualscreen/chaozhou.vue":()=>t(()=>import("./chaozhou-Bxp2xF5C.js").then(o=>o._),__vite__mapDeps([0,1,2])),"./visualscreen/qianse.vue":()=>t(()=>import("./qianse-GR_P1v0w.js").then(o=>o._),__vite__mapDeps([3,1,2]))}),`./visualscreen/${n.params.name}.vue`));return(o,s)=>(m(),u("div",null,[c(_(e))]))}});export{d as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chaozhou-Bxp2xF5C.js","assets/index-oR0mlNqp.js","assets/index-rcoWkR4V.css","assets/qianse-GR_P1v0w.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
