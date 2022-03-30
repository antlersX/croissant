import{E as $,a as b,b as g,c as h,o as c,d as a,e as y,r as i,f as d,g as m,h as x,i as S}from"./vendor.5d21ff2c.js";const O=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};O();var _=(o,r)=>{const n=o.__vccOpts||o;for(const[s,e]of r)n[s]=e;return n};const T={name:"Editor",mounted(){new $({state:b.create({extensions:[g,h()]}),parent:this.$refs.editor})}},j={class:"h-full w-full",ref:"editor"};function w(o,r,n,s,e,t){return c(),a("div",j,null,512)}var v=_(T,[["render",w]]),L=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));const P={name:"FileTree",mounted(){}};function E(o,r,n,s,e,t){return c(),a("div")}var F=_(P,[["render",E]]),M=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const z={name:"Center",mounted(){}},C=Object.assign(z,{setup(o){return(r,n)=>(c(),y(v,{class:"flex-grow-0 border"}))}});var N=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));const k={name:"Left",mounted(){}};function B(o,r,n,s,e,t){const l=i("FileTree");return c(),a("div",null,[d(l)])}var A=_(k,[["render",B]]),V=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const q={name:"State",mounted(){}},I={class:"px-1 my-1"};function K(o,r,n,s,e,t){return c(),a("div",I," msg: ")}var D=_(q,[["render",K]]),G=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));const H={name:"Tool",mounted(){}},J={class:"mx-1 flex"},Q=m("div",{class:"border px-5 my-1 cursor-pointer"},"upload",-1),R=[Q];function U(o,r,n,s,e,t){return c(),a("div",J,R)}var W=_(H,[["render",U]]),X=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));const Y={},Z={class:"w-full h-full flex flex-col overflow-hidden"},ee={class:"flex-grow flex"};function te(o,r){const n=i("Tool"),s=i("Left"),e=i("Center"),t=i("State");return c(),a("div",Z,[d(n),m("div",ee,[d(s,{class:"w-1/5 border"}),d(e)]),d(t)])}var oe=_(Y,[["render",te]]);const re=x({state(){return{count:0}},mutations:{increment(o){o.count++}}}),u=S(oe);var f={"./components/FileEditor.vue":L,"./components/FileTree.vue":M,"./view/Center.vue":N,"./view/Left.vue":V,"./view/State.vue":G,"./view/Tool.vue":X};for(const o in f){var p=f[o].default;u.component(p.name,p)}u.use(re);u.mount("#app");