import{s as W,f as ce,n as M,o as Ae}from"../chunks/scheduler.CMPPwE_A.js";import{S as J,i as K,g,s as P,m as L,h as v,j as b,f as p,c as S,n as q,z as te,k as f,a as k,y as u,o as R,e as V,A as se,d as C,p as $e,t as D,b as Ee,r as Y,u as Z,v as x,w as ee}from"../chunks/index.D4dQamgC.js";import{s as he,a as fe}from"../chunks/config.DW-oLCK5.js";function B(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function ue(r,t,l){const e=r.slice();return e[2]=t[l],e}function de(r,t,l){const e=r.slice();return e[2]=t[l],e[4]=l,e}function ke(r){let t,l=B(r[0].credits),e=[];for(let s=0;s<l.length;s+=1)e[s]=pe(ue(r,l,s));return{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=V()},l(s){for(let o=0;o<e.length;o+=1)e[o].l(s);t=V()},m(s,o){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(s,o);k(s,t,o)},p(s,o){if(o&1){l=B(s[0].credits);let a;for(a=0;a<l.length;a+=1){const h=ue(s,l,a);e[a]?e[a].p(h,o):(e[a]=pe(h),e[a].c(),e[a].m(t.parentNode,t))}for(;a<e.length;a+=1)e[a].d(1);e.length=l.length}},d(s){s&&p(t),se(e,s)}}}function Pe(r){let t,l,e,s,o=r[0].credits[r[0].credits.length-1].name+"",a,h,n=B(r[0].credits.filter(r[1])),c=[];for(let i=0;i<n.length;i+=1)c[i]=me(de(r,n,i));return{c(){for(let i=0;i<c.length;i+=1)c[i].c();t=P(),l=g("span"),e=g("a"),s=g("span"),a=L(o),this.h()},l(i){for(let w=0;w<c.length;w+=1)c[w].l(i);t=S(i),l=v(i,"SPAN",{class:!0});var _=b(l);e=v(_,"A",{href:!0,class:!0});var d=b(e);s=v(d,"SPAN",{class:!0});var m=b(s);a=q(m,o),m.forEach(p),d.forEach(p),_.forEach(p),this.h()},h(){f(s,"class","svelte-1t8wnfh"),f(e,"href",h=r[0].credits[r[0].credits.length-1].slug),f(e,"class","svelte-1t8wnfh"),f(l,"class","author-item svelte-1t8wnfh")},m(i,_){for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(i,_);k(i,t,_),k(i,l,_),u(l,e),u(e,s),u(s,a)},p(i,_){if(_&1){n=B(i[0].credits.filter(i[1]));let d;for(d=0;d<n.length;d+=1){const m=de(i,n,d);c[d]?c[d].p(m,_):(c[d]=me(m),c[d].c(),c[d].m(t.parentNode,t))}for(;d<c.length;d+=1)c[d].d(1);c.length=n.length}_&1&&o!==(o=i[0].credits[i[0].credits.length-1].name+"")&&R(a,o),_&1&&h!==(h=i[0].credits[i[0].credits.length-1].slug)&&f(e,"href",h)},d(i){i&&(p(t),p(l)),se(c,i)}}}function pe(r){let t,l,e=r[2].name+"",s,o;return{c(){t=g("a"),l=g("span"),s=L(e),this.h()},l(a){t=v(a,"A",{href:!0,class:!0});var h=b(t);l=v(h,"SPAN",{class:!0});var n=b(l);s=q(n,e),n.forEach(p),h.forEach(p),this.h()},h(){f(l,"class","svelte-1t8wnfh"),f(t,"href",o=""+(F+r[2].slug)),f(t,"class","svelte-1t8wnfh")},m(a,h){k(a,t,h),u(t,l),u(l,s)},p(a,h){h&1&&e!==(e=a[2].name+"")&&R(s,e),h&1&&o!==(o=""+(F+a[2].slug))&&f(t,"href",o)},d(a){a&&p(t)}}}function _e(r){let t,l=", ";return{c(){t=g("span"),t.textContent=l},l(e){t=v(e,"SPAN",{"data-svelte-h":!0}),te(t)!=="svelte-11svw"&&(t.textContent=l)},m(e,s){k(e,t,s)},d(e){e&&p(t)}}}function me(r){let t,l,e,s=r[2].name+"",o,a,h,n=r[4]<r[0].credits.length-1&&_e();return{c(){t=g("span"),l=g("a"),e=g("span"),o=L(s),h=P(),n&&n.c(),this.h()},l(c){t=v(c,"SPAN",{class:!0});var i=b(t);l=v(i,"A",{href:!0,class:!0});var _=b(l);e=v(_,"SPAN",{class:!0});var d=b(e);o=q(d,s),d.forEach(p),_.forEach(p),h=S(i),n&&n.l(i),i.forEach(p),this.h()},h(){f(e,"class","svelte-1t8wnfh"),f(l,"href",a=""+(F+r[2].slug)),f(l,"class","svelte-1t8wnfh"),f(t,"class","author-item svelte-1t8wnfh")},m(c,i){k(c,t,i),u(t,l),u(l,e),u(e,o),u(t,h),n&&n.m(t,null)},p(c,i){i&1&&s!==(s=c[2].name+"")&&R(o,s),i&1&&a!==(a=""+(F+c[2].slug))&&f(l,"href",a),c[4]<c[0].credits.length-1?n||(n=_e(),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(c){c&&p(t),n&&n.d()}}}function Se(r){let t,l,e,s,o,a,h,n,c,i=r[0].headline+"",_,d,m,w=r[0].description+"",N,H,T,O=ge(r[0].date)+"",U,Q,y,j,le="By ",X;function ae($,E){return $[0].credits.length>1?Pe:ke}let z=ae(r),A=z(r);return{c(){t=g("div"),l=g("a"),e=g("img"),h=P(),n=g("div"),c=g("h1"),_=L(i),d=P(),m=g("p"),N=L(w),H=P(),T=g("p"),U=L(O),Q=P(),y=g("p"),j=g("span"),j.textContent=le,X=P(),A.c(),this.h()},l($){t=v($,"DIV",{class:!0});var E=b(t);l=v(E,"A",{href:!0,class:!0});var ne=b(l);e=v(ne,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,class:!0}),ne.forEach(p),h=S(E),n=v(E,"DIV",{class:!0});var I=b(n);c=v(I,"H1",{class:!0});var re=b(c);_=q(re,i),re.forEach(p),d=S(I),m=v(I,"P",{class:!0});var oe=b(m);N=q(oe,w),oe.forEach(p),H=S(I),T=v(I,"P",{class:!0});var ie=b(T);U=q(ie,O),ie.forEach(p),Q=S(I),y=v(I,"P",{class:!0});var G=b(y);j=v(G,"SPAN",{"data-svelte-h":!0}),te(j)!=="svelte-ir768l"&&(j.textContent=le),X=S(G),A.l(G),G.forEach(p),I.forEach(p),E.forEach(p),this.h()},h(){f(e,"loading","lazy"),f(e,"decoding","auto"),ce(e.src,s=r[0].img)||f(e,"src",s),f(e,"alt",o=r[0].description),f(e,"class","svelte-1t8wnfh"),f(l,"href",a=r[0].url),f(l,"class","svelte-1t8wnfh"),f(c,"class"," svelte-1t8wnfh"),f(m,"class","flexible description svelte-1t8wnfh"),f(T,"class","date svelte-1t8wnfh"),f(y,"class","authors svelte-1t8wnfh"),f(n,"class","article-data svelte-1t8wnfh"),f(t,"class","content svelte-1t8wnfh")},m($,E){k($,t,E),u(t,l),u(l,e),u(t,h),u(t,n),u(n,c),u(c,_),u(n,d),u(n,m),u(m,N),u(n,H),u(n,T),u(T,U),u(n,Q),u(n,y),u(y,j),u(y,X),A.m(y,null)},p($,[E]){E&1&&!ce(e.src,s=$[0].img)&&f(e,"src",s),E&1&&o!==(o=$[0].description)&&f(e,"alt",o),E&1&&a!==(a=$[0].url)&&f(l,"href",a),E&1&&i!==(i=$[0].headline+"")&&R(_,i),E&1&&w!==(w=$[0].description+"")&&R(N,w),E&1&&O!==(O=ge($[0].date)+"")&&R(U,O),z===(z=ae($))&&A?A.p($,E):(A.d(1),A=z($),A&&(A.c(),A.m(y,null)))},i:M,o:M,d($){$&&p(t),A.d()}}}const F="https://www.washingtonpost.com/people/";function ge(r){const t=new Date(r),l={year:"numeric",month:"long",day:"numeric"};return t.toLocaleDateString("en-US",l)}function Ne(r,t,l){let{data:e}=t;const s=(o,a)=>a<e.credits.length-1;return r.$$set=o=>{"data"in o&&l(0,e=o.data)},[e,s]}class Te extends J{constructor(t){super(),K(this,t,Ne,Se,W,{data:0})}}function ve(r,t,l){const e=r.slice();return e[1]=t[l],e}function be(r){let t,l,e=B(r[0]),s=[];for(let a=0;a<e.length;a+=1)s[a]=we(ve(r,e,a));const o=a=>D(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();t=V()},l(a){for(let h=0;h<s.length;h+=1)s[h].l(a);t=V()},m(a,h){for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(a,h);k(a,t,h),l=!0},p(a,h){if(h&1){e=B(a[0]);let n;for(n=0;n<e.length;n+=1){const c=ve(a,e,n);s[n]?(s[n].p(c,h),C(s[n],1)):(s[n]=we(c),s[n].c(),C(s[n],1),s[n].m(t.parentNode,t))}for($e(),n=e.length;n<s.length;n+=1)o(n);Ee()}},i(a){if(!l){for(let h=0;h<e.length;h+=1)C(s[h]);l=!0}},o(a){s=s.filter(Boolean);for(let h=0;h<s.length;h+=1)D(s[h]);l=!1},d(a){a&&p(t),se(s,a)}}}function we(r){let t,l;return t=new Te({props:{data:r[1]}}),{c(){Y(t.$$.fragment)},l(e){Z(t.$$.fragment,e)},m(e,s){x(t,e,s),l=!0},p(e,s){const o={};s&1&&(o.data=e[1]),t.$set(o)},i(e){l||(C(t.$$.fragment,e),l=!0)},o(e){D(t.$$.fragment,e),l=!1},d(e){ee(t,e)}}}function ye(r){let t,l,e=r[0]!==void 0&&be(r);return{c(){t=g("section"),e&&e.c(),this.h()},l(s){t=v(s,"SECTION",{class:!0});var o=b(t);e&&e.l(o),o.forEach(p),this.h()},h(){f(t,"class","svelte-udtwb0")},m(s,o){k(s,t,o),e&&e.m(t,null),l=!0},p(s,[o]){s[0]!==void 0?e?(e.p(s,o),o&1&&C(e,1)):(e=be(s),e.c(),C(e,1),e.m(t,null)):e&&($e(),D(e,1,1,()=>{e=null}),Ee())},i(s){l||(C(e),l=!0)},o(s){D(e),l=!1},d(s){s&&p(t),e&&e.d()}}}function Ce(r,t,l){let e;return Ae(async()=>{l(0,e=await fetch("https://raw.githubusercontent.com/LuisSevillano/post-graphics-feed/main/api/wapo_graphics_feed.json").then(s=>s.json())),console.log(e)}),[e]}class Ie extends J{constructor(t){super(),K(this,t,Ce,ye,W,{})}}function Le(r){let t,l=`<h2 class="svelte-1ac0pwy">About this project</h2> <p>There is currently no tag or page where all the articles published by The Washington Post&#39;s
		graphics team can be found. To address this, I have manually compiled an array of names of all
		the authors on the team and used the Post&#39;s API to fetch data about their articles, including
		the headline, subtitle, authors, date, image, and URL.</p> <p>The data is updated daily thanks to a GitHub Actions workflow. To avoid overloading the Post&#39;s
		API, only the latest five articles from each author are requested. The code that fetches and
		parses the data can be found in the api folder of the <a href="https://github.com/LuisSevillano/post-graphics-feed">repository</a>.</p> <p>This project is open source and aims to allow everyone to follow the incredible work published
		by this outstanding team. If you work here and are not on the <a href="https://github.com/LuisSevillano/post-graphics-feed/blob/main/api/authors.json">list</a> or want to add someone, please open a pull request in the repository.</p>`;return{c(){t=g("footer"),t.innerHTML=l,this.h()},l(e){t=v(e,"FOOTER",{class:!0,"data-svelte-h":!0}),te(t)!=="svelte-160lv9i"&&(t.innerHTML=l),this.h()},h(){f(t,"class","svelte-1ac0pwy")},m(e,s){k(e,t,s)},p:M,i:M,o:M,d(e){e&&p(t)}}}class qe extends J{constructor(t){super(),K(this,t,null,Le,W,{})}}function De(r){let t,l,e,s,o,a,h,n,c,i,_,d;return c=new Ie({}),_=new qe({}),{c(){t=g("main"),l=g("header"),e=g("h1"),s=L(he),o=P(),a=g("h3"),h=L(fe),n=P(),Y(c.$$.fragment),i=P(),Y(_.$$.fragment),this.h()},l(m){t=v(m,"MAIN",{class:!0});var w=b(t);l=v(w,"HEADER",{class:!0});var N=b(l);e=v(N,"H1",{class:!0});var H=b(e);s=q(H,he),H.forEach(p),o=S(N),a=v(N,"H3",{class:!0});var T=b(a);h=q(T,fe),T.forEach(p),N.forEach(p),n=S(w),Z(c.$$.fragment,w),i=S(w),Z(_.$$.fragment,w),w.forEach(p),this.h()},h(){f(e,"class","svelte-hbnbq5"),f(a,"class","svelte-hbnbq5"),f(l,"class","svelte-hbnbq5"),f(t,"class","svelte-hbnbq5")},m(m,w){k(m,t,w),u(t,l),u(l,e),u(e,s),u(l,o),u(l,a),u(a,h),u(t,n),x(c,t,null),u(t,i),x(_,t,null),d=!0},p:M,i(m){d||(C(c.$$.fragment,m),C(_.$$.fragment,m),d=!0)},o(m){D(c.$$.fragment,m),D(_.$$.fragment,m),d=!1},d(m){m&&p(t),ee(c),ee(_)}}}class Re extends J{constructor(t){super(),K(this,t,null,De,W,{})}}export{Re as component};
