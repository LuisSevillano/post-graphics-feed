import{s as W,f as ce,n as B,o as Ae}from"../chunks/scheduler.CMPPwE_A.js";import{S as J,i as K,g as p,s as P,m as N,h as _,j as m,f as u,c as S,n as y,z as Q,k as f,a as w,y as d,o as D,e as H,A as le,d as L,p as ke,t as j,b as Ee,r as Z,u as x,v as ee,w as te}from"../chunks/index.D4dQamgC.js";import{s as fe,a as he}from"../chunks/config.DW-oLCK5.js";function O(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}function ue(o,e,s){const t=o.slice();return t[2]=e[s],t}function de(o,e,s){const t=o.slice();return t[2]=e[s],t[4]=s,t}function Pe(o){let e,s=O(o[0].credits),t=[];for(let l=0;l<s.length;l+=1)t[l]=pe(ue(o,s,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=H()},l(l){for(let i=0;i<t.length;i+=1)t[i].l(l);e=H()},m(l,i){for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(l,i);w(l,e,i)},p(l,i){if(i&1){s=O(l[0].credits);let n;for(n=0;n<s.length;n+=1){const r=ue(l,s,n);t[n]?t[n].p(r,i):(t[n]=pe(r),t[n].c(),t[n].m(e.parentNode,e))}for(;n<t.length;n+=1)t[n].d(1);t.length=s.length}},d(l){l&&u(e),le(t,l)}}}function Se(o){let e,s,t=O(o[0].credits.filter(o[1])),l=[];for(let a=0;a<t.length;a+=1)l[a]=ve(de(o,t,a));function i(a,c){return a[0].credits[a[0].credits.length-1].slug?Te:Ce}let n=i(o),r=n(o);return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=P(),r.c(),s=H()},l(a){for(let c=0;c<l.length;c+=1)l[c].l(a);e=S(a),r.l(a),s=H()},m(a,c){for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(a,c);w(a,e,c),r.m(a,c),w(a,s,c)},p(a,c){if(c&1){t=O(a[0].credits.filter(a[1]));let h;for(h=0;h<t.length;h+=1){const v=de(a,t,h);l[h]?l[h].p(v,c):(l[h]=ve(v),l[h].c(),l[h].m(e.parentNode,e))}for(;h<l.length;h+=1)l[h].d(1);l.length=t.length}n===(n=i(a))&&r?r.p(a,c):(r.d(1),r=n(a),r&&(r.c(),r.m(s.parentNode,s)))},d(a){a&&(u(e),u(s)),le(l,a),r.d(a)}}}function pe(o){let e,s,t=o[2].name+"",l,i;return{c(){e=p("a"),s=p("span"),l=N(t),this.h()},l(n){e=_(n,"A",{href:!0,class:!0});var r=m(e);s=_(r,"SPAN",{class:!0});var a=m(s);l=y(a,t),a.forEach(u),r.forEach(u),this.h()},h(){f(s,"class","svelte-1t8wnfh"),f(e,"href",i=""+(F+o[2].slug)),f(e,"class","svelte-1t8wnfh")},m(n,r){w(n,e,r),d(e,s),d(s,l)},p(n,r){r&1&&t!==(t=n[2].name+"")&&D(l,t),r&1&&i!==(i=""+(F+n[2].slug))&&f(e,"href",i)},d(n){n&&u(e)}}}function Ne(o){let e,s,t,l=o[2].name+"",i,n,r=o[4]<o[0].credits.length-1&&_e();return{c(){e=p("span"),s=p("a"),t=p("span"),i=N(l),n=P(),r&&r.c(),this.h()},l(a){e=_(a,"SPAN",{class:!0});var c=m(e);s=_(c,"A",{href:!0,class:!0});var h=m(s);t=_(h,"SPAN",{class:!0});var v=m(t);i=y(v,l),v.forEach(u),h.forEach(u),n=S(c),r&&r.l(c),c.forEach(u),this.h()},h(){f(t,"class","svelte-1t8wnfh"),f(s,"href",""),f(s,"class","svelte-1t8wnfh"),f(e,"class","author-item svelte-1t8wnfh")},m(a,c){w(a,e,c),d(e,s),d(s,t),d(t,i),d(e,n),r&&r.m(e,null)},p(a,c){c&1&&l!==(l=a[2].name+"")&&D(i,l),a[4]<a[0].credits.length-1?r||(r=_e(),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(a){a&&u(e),r&&r.d()}}}function ye(o){let e,s,t,l=o[2].name+"",i,n,r,a=o[4]<o[0].credits.length-1&&me();return{c(){e=p("span"),s=p("a"),t=p("span"),i=N(l),r=P(),a&&a.c(),this.h()},l(c){e=_(c,"SPAN",{class:!0});var h=m(e);s=_(h,"A",{href:!0,class:!0});var v=m(s);t=_(v,"SPAN",{class:!0});var E=m(t);i=y(E,l),E.forEach(u),v.forEach(u),r=S(h),a&&a.l(h),h.forEach(u),this.h()},h(){f(t,"class","svelte-1t8wnfh"),f(s,"href",n=""+(F+o[2].slug)),f(s,"class","svelte-1t8wnfh"),f(e,"class","author-item svelte-1t8wnfh")},m(c,h){w(c,e,h),d(e,s),d(s,t),d(t,i),d(e,r),a&&a.m(e,null)},p(c,h){h&1&&l!==(l=c[2].name+"")&&D(i,l),h&1&&n!==(n=""+(F+c[2].slug))&&f(s,"href",n),c[4]<c[0].credits.length-1?a||(a=me(),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(c){c&&u(e),a&&a.d()}}}function _e(o){let e,s=", ";return{c(){e=p("span"),e.textContent=s},l(t){e=_(t,"SPAN",{"data-svelte-h":!0}),Q(e)!=="svelte-11svw"&&(e.textContent=s)},m(t,l){w(t,e,l)},d(t){t&&u(e)}}}function me(o){let e,s=", ";return{c(){e=p("span"),e.textContent=s},l(t){e=_(t,"SPAN",{"data-svelte-h":!0}),Q(e)!=="svelte-11svw"&&(e.textContent=s)},m(t,l){w(t,e,l)},d(t){t&&u(e)}}}function ve(o){let e;function s(i,n){return i[2].slug?ye:Ne}let t=s(o),l=t(o);return{c(){l.c(),e=H()},l(i){l.l(i),e=H()},m(i,n){l.m(i,n),w(i,e,n)},p(i,n){t===(t=s(i))&&l?l.p(i,n):(l.d(1),l=t(i),l&&(l.c(),l.m(e.parentNode,e)))},d(i){i&&u(e),l.d(i)}}}function Ce(o){let e,s,t,l=o[0].credits[o[0].credits.length-1].name+"",i;return{c(){e=p("span"),s=p("a"),t=p("span"),i=N(l),this.h()},l(n){e=_(n,"SPAN",{class:!0});var r=m(e);s=_(r,"A",{href:!0,class:!0});var a=m(s);t=_(a,"SPAN",{class:!0});var c=m(t);i=y(c,l),c.forEach(u),a.forEach(u),r.forEach(u),this.h()},h(){f(t,"class","svelte-1t8wnfh"),f(s,"href",""),f(s,"class","svelte-1t8wnfh"),f(e,"class","author-item svelte-1t8wnfh")},m(n,r){w(n,e,r),d(e,s),d(s,t),d(t,i)},p(n,r){r&1&&l!==(l=n[0].credits[n[0].credits.length-1].name+"")&&D(i,l)},d(n){n&&u(e)}}}function Te(o){let e,s,t,l=o[0].credits[o[0].credits.length-1].name+"",i,n;return{c(){e=p("span"),s=p("a"),t=p("span"),i=N(l),this.h()},l(r){e=_(r,"SPAN",{class:!0});var a=m(e);s=_(a,"A",{href:!0,class:!0});var c=m(s);t=_(c,"SPAN",{class:!0});var h=m(t);i=y(h,l),h.forEach(u),c.forEach(u),a.forEach(u),this.h()},h(){f(t,"class","svelte-1t8wnfh"),f(s,"href",n=o[0].credits[o[0].credits.length-1].slug),f(s,"class","svelte-1t8wnfh"),f(e,"class","author-item svelte-1t8wnfh")},m(r,a){w(r,e,a),d(e,s),d(s,t),d(t,i)},p(r,a){a&1&&l!==(l=r[0].credits[r[0].credits.length-1].name+"")&&D(i,l),a&1&&n!==(n=r[0].credits[r[0].credits.length-1].slug)&&f(s,"href",n)},d(r){r&&u(e)}}}function Ie(o){let e,s,t,l,i,n,r,a,c,h=o[0].headline+"",v,E,g,k=o[0].description+"",C,M,T,U=ge(o[0].date)+"",z,X,I,R,se="By ",Y;function ae(b,$){return b[0].credits.length>1?Se:Pe}let G=ae(o),A=G(o);return{c(){e=p("div"),s=p("a"),t=p("img"),r=P(),a=p("div"),c=p("h1"),v=N(h),E=P(),g=p("p"),C=N(k),M=P(),T=p("p"),z=N(U),X=P(),I=p("p"),R=p("span"),R.textContent=se,Y=P(),A.c(),this.h()},l(b){e=_(b,"DIV",{class:!0});var $=m(e);s=_($,"A",{href:!0,class:!0});var ne=m(s);t=_(ne,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,class:!0}),ne.forEach(u),r=S($),a=_($,"DIV",{class:!0});var q=m(a);c=_(q,"H1",{class:!0});var re=m(c);v=y(re,h),re.forEach(u),E=S(q),g=_(q,"P",{class:!0});var ie=m(g);C=y(ie,k),ie.forEach(u),M=S(q),T=_(q,"P",{class:!0});var oe=m(T);z=y(oe,U),oe.forEach(u),X=S(q),I=_(q,"P",{class:!0});var V=m(I);R=_(V,"SPAN",{"data-svelte-h":!0}),Q(R)!=="svelte-ir768l"&&(R.textContent=se),Y=S(V),A.l(V),V.forEach(u),q.forEach(u),$.forEach(u),this.h()},h(){f(t,"loading","lazy"),f(t,"decoding","auto"),ce(t.src,l=o[0].img)||f(t,"src",l),f(t,"alt",i=o[0].description),f(t,"class","svelte-1t8wnfh"),f(s,"href",n=o[0].url),f(s,"class","svelte-1t8wnfh"),f(c,"class"," svelte-1t8wnfh"),f(g,"class","flexible description svelte-1t8wnfh"),f(T,"class","date svelte-1t8wnfh"),f(I,"class","authors svelte-1t8wnfh"),f(a,"class","article-data svelte-1t8wnfh"),f(e,"class","content svelte-1t8wnfh")},m(b,$){w(b,e,$),d(e,s),d(s,t),d(e,r),d(e,a),d(a,c),d(c,v),d(a,E),d(a,g),d(g,C),d(a,M),d(a,T),d(T,z),d(a,X),d(a,I),d(I,R),d(I,Y),A.m(I,null)},p(b,[$]){$&1&&!ce(t.src,l=b[0].img)&&f(t,"src",l),$&1&&i!==(i=b[0].description)&&f(t,"alt",i),$&1&&n!==(n=b[0].url)&&f(s,"href",n),$&1&&h!==(h=b[0].headline+"")&&D(v,h),$&1&&k!==(k=b[0].description+"")&&D(C,k),$&1&&U!==(U=ge(b[0].date)+"")&&D(z,U),G===(G=ae(b))&&A?A.p(b,$):(A.d(1),A=G(b),A&&(A.c(),A.m(I,null)))},i:B,o:B,d(b){b&&u(e),A.d()}}}const F="https://www.washingtonpost.com/people/";function ge(o){const e=new Date(o),s={year:"numeric",month:"long",day:"numeric"};return e.toLocaleDateString("en-US",s)}function Le(o,e,s){let{data:t}=e;const l=(i,n)=>n<t.credits.length-1;return o.$$set=i=>{"data"in i&&s(0,t=i.data)},[t,l]}class qe extends J{constructor(e){super(),K(this,e,Le,Ie,W,{data:0})}}function be(o,e,s){const t=o.slice();return t[1]=e[s],t}function we(o){let e,s,t=O(o[0]),l=[];for(let n=0;n<t.length;n+=1)l[n]=$e(be(o,t,n));const i=n=>j(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=H()},l(n){for(let r=0;r<l.length;r+=1)l[r].l(n);e=H()},m(n,r){for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(n,r);w(n,e,r),s=!0},p(n,r){if(r&1){t=O(n[0]);let a;for(a=0;a<t.length;a+=1){const c=be(n,t,a);l[a]?(l[a].p(c,r),L(l[a],1)):(l[a]=$e(c),l[a].c(),L(l[a],1),l[a].m(e.parentNode,e))}for(ke(),a=t.length;a<l.length;a+=1)i(a);Ee()}},i(n){if(!s){for(let r=0;r<t.length;r+=1)L(l[r]);s=!0}},o(n){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)j(l[r]);s=!1},d(n){n&&u(e),le(l,n)}}}function $e(o){let e,s;return e=new qe({props:{data:o[1]}}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){ee(e,t,l),s=!0},p(t,l){const i={};l&1&&(i.data=t[1]),e.$set(i)},i(t){s||(L(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){te(e,t)}}}function De(o){let e,s,t=o[0]!==void 0&&we(o);return{c(){e=p("section"),t&&t.c(),this.h()},l(l){e=_(l,"SECTION",{class:!0});var i=m(e);t&&t.l(i),i.forEach(u),this.h()},h(){f(e,"class","svelte-udtwb0")},m(l,i){w(l,e,i),t&&t.m(e,null),s=!0},p(l,[i]){l[0]!==void 0?t?(t.p(l,i),i&1&&L(t,1)):(t=we(l),t.c(),L(t,1),t.m(e,null)):t&&(ke(),j(t,1,1,()=>{t=null}),Ee())},i(l){s||(L(t),s=!0)},o(l){j(t),s=!1},d(l){l&&u(e),t&&t.d()}}}function He(o,e,s){let t;return Ae(async()=>{s(0,t=await fetch("https://raw.githubusercontent.com/LuisSevillano/post-graphics-feed/main/api/wapo_graphics_feed.json").then(l=>l.json()))}),[t]}class je extends J{constructor(e){super(),K(this,e,He,De,W,{})}}function Me(o){let e,s=`<h2 class="svelte-1ac0pwy">About this project</h2> <p>There is currently no tag or page where all the articles published by The Washington Post&#39;s
		graphics team can be found. To address this, I have manually compiled an array of names of all
		the authors on the team and used the Post&#39;s API to fetch data about their articles, including
		the headline, subtitle, authors, date, image, and URL.</p> <p>The data is updated daily thanks to a GitHub Actions workflow. To avoid overloading the Post&#39;s
		API, only the latest five articles from each author are requested. The code that fetches and
		parses the data can be found in the api folder of the <a href="https://github.com/LuisSevillano/post-graphics-feed">repository</a>.</p> <p>This project is open source and aims to allow everyone to follow the incredible work published
		by this outstanding team. If you work here and are not on the <a href="https://github.com/LuisSevillano/post-graphics-feed/blob/main/api/authors.json">list</a> or want to add someone, please open a pull request in the repository.</p>`;return{c(){e=p("footer"),e.innerHTML=s,this.h()},l(t){e=_(t,"FOOTER",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-160lv9i"&&(e.innerHTML=s),this.h()},h(){f(e,"class","svelte-1ac0pwy")},m(t,l){w(t,e,l)},p:B,i:B,o:B,d(t){t&&u(e)}}}class Re extends J{constructor(e){super(),K(this,e,null,Me,W,{})}}function Be(o){let e,s,t,l,i,n,r,a,c,h,v,E;return c=new je({}),v=new Re({}),{c(){e=p("main"),s=p("header"),t=p("h1"),l=N(fe),i=P(),n=p("h3"),r=N(he),a=P(),Z(c.$$.fragment),h=P(),Z(v.$$.fragment),this.h()},l(g){e=_(g,"MAIN",{class:!0});var k=m(e);s=_(k,"HEADER",{class:!0});var C=m(s);t=_(C,"H1",{class:!0});var M=m(t);l=y(M,fe),M.forEach(u),i=S(C),n=_(C,"H3",{class:!0});var T=m(n);r=y(T,he),T.forEach(u),C.forEach(u),a=S(k),x(c.$$.fragment,k),h=S(k),x(v.$$.fragment,k),k.forEach(u),this.h()},h(){f(t,"class","svelte-hbnbq5"),f(n,"class","svelte-hbnbq5"),f(s,"class","svelte-hbnbq5"),f(e,"class","svelte-hbnbq5")},m(g,k){w(g,e,k),d(e,s),d(s,t),d(t,l),d(s,i),d(s,n),d(n,r),d(e,a),ee(c,e,null),d(e,h),ee(v,e,null),E=!0},p:B,i(g){E||(L(c.$$.fragment,g),L(v.$$.fragment,g),E=!0)},o(g){j(c.$$.fragment,g),j(v.$$.fragment,g),E=!1},d(g){g&&u(e),te(c),te(v)}}}class Ge extends J{constructor(e){super(),K(this,e,null,Be,W,{})}}export{Ge as component};
