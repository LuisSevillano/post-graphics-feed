import{w as u}from"./index.l_WRf1UY.js";var _;const w=((_=globalThis.__sveltekit_iwb2cw)==null?void 0:_.base)??"/post-graphics-feed";var g;const k=((g=globalThis.__sveltekit_iwb2cw)==null?void 0:g.assets)??w,m="1720697462933",T="sveltekit:snapshot",y="sveltekit:scroll",I="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},h=location.origin;function S(e){let t=e.baseURI;if(!t){const s=e.getElementsByTagName("base");t=s.length?s[0].href:e.URL}return t}function x(){return{x:pageXOffset,y:pageYOffset}}function c(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function b(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function O(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=b(e)}}function U(e,t){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!s||!!o||A(s,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(s==null?void 0:s.origin)===h&&e.hasAttribute("download");return{url:s,external:r,target:o,download:l}}function L(e){let t=null,s=null,o=null,r=null,l=null,a=null,n=e;for(;n&&n!==document.documentElement;)o===null&&(o=c(n,"preload-code")),r===null&&(r=c(n,"preload-data")),t===null&&(t=c(n,"keepfocus")),s===null&&(s=c(n,"noscroll")),l===null&&(l=c(n,"reload")),a===null&&(a=c(n,"replacestate")),n=b(n);function i(v){switch(v){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:d[o??"off"],preload_data:d[r??"off"],keep_focus:i(t),noscroll:i(s),reload:i(l),replace_state:i(a)}}function p(e){const t=u(e);let s=!0;function o(){s=!0,t.update(a=>a)}function r(a){s=!1,t.set(a)}function l(a){let n;return t.subscribe(i=>{(n===void 0||s&&i!==n)&&a(n=i)})}return{notify:o,set:r,subscribe:l}}function E(){const{set:e,subscribe:t}=u(!1);let s;async function o(){clearTimeout(s);try{const r=await fetch(`${k}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==m;return a&&(e(!0),clearTimeout(s)),a}catch{return!1}}return{subscribe:t,check:o}}function A(e,t){return e.origin!==h||!e.pathname.startsWith(t)}const N={url:p({}),page:p({}),navigating:u(null),updated:E()};export{I,f as P,y as S,T as a,U as b,L as c,N as d,w as e,O as f,S as g,A as i,h as o,x as s};
