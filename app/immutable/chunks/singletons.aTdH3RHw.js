import{n as d,s as y}from"./scheduler.CMPPwE_A.js";const u=[];function p(e,t=d){let s;const o=new Set;function a(n){if(y(e,n)&&(e=n,s)){const c=!u.length;for(const l of o)l[1](),u.push(l,e);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function i(n){a(n(e))}function r(n,c=d){const l=[n,c];return o.add(l),o.size===1&&(s=t(a,i)||d),n(e),()=>{o.delete(l),o.size===0&&s&&(s(),s=null)}}return{set:a,update:i,subscribe:r}}var h;const E=((h=globalThis.__sveltekit_1bbkyaa)==null?void 0:h.base)??"/post-graphics-feed";var k;const w=((k=globalThis.__sveltekit_1bbkyaa)==null?void 0:k.assets)??E,A="1718188425820",I="sveltekit:snapshot",x="sveltekit:scroll",O="sveltekit:index",b={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},v=location.origin;function U(e){let t=e.baseURI;if(!t){const s=e.getElementsByTagName("base");t=s.length?s[0].href:e.URL}return t}function L(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const _={...b,"":b.hover};function m(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function N(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=m(e)}}function P(e,t){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,a=!s||!!o||S(s,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(s==null?void 0:s.origin)===v&&e.hasAttribute("download");return{url:s,external:a,target:o,download:i}}function V(e){let t=null,s=null,o=null,a=null,i=null,r=null,n=e;for(;n&&n!==document.documentElement;)o===null&&(o=f(n,"preload-code")),a===null&&(a=f(n,"preload-data")),t===null&&(t=f(n,"keepfocus")),s===null&&(s=f(n,"noscroll")),i===null&&(i=f(n,"reload")),r===null&&(r=f(n,"replacestate")),n=m(n);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:_[o??"off"],preload_data:_[a??"off"],keep_focus:c(t),noscroll:c(s),reload:c(i),replace_state:c(r)}}function g(e){const t=p(e);let s=!0;function o(){s=!0,t.update(r=>r)}function a(r){s=!1,t.set(r)}function i(r){let n;return t.subscribe(c=>{(n===void 0||s&&c!==n)&&r(n=c)})}return{notify:o,set:a,subscribe:i}}function R(){const{set:e,subscribe:t}=p(!1);let s;async function o(){clearTimeout(s);try{const a=await fetch(`${w}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==A;return r&&(e(!0),clearTimeout(s)),r}catch{return!1}}return{subscribe:t,check:o}}function S(e,t){return e.origin!==v||!e.pathname.startsWith(t)}const Y={url:g({}),page:g({}),navigating:p(null),updated:R()};export{O as I,b as P,x as S,I as a,P as b,V as c,Y as d,E as e,N as f,U as g,S as i,v as o,L as s};