(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function b(){}function oe(e){return e()}function X(){return Object.create(null)}function N(e){e.forEach(oe)}function ie(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let q;function de(e,t){return q||(q=document.createElement("a")),q.href=t,e===q.href}function pe(e){return Object.keys(e).length===0}function j(e,t){e.appendChild(t)}function g(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode&&e.parentNode.removeChild(e)}function _e(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function T(){return G(" ")}function x(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function he(e){return Array.from(e.childNodes)}function le(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Y(e,t){e.value=t??""}function Z(e,t){for(let n=0;n<e.options.length;n+=1){const o=e.options[n];if(o.__value===t){o.selected=!0;return}}e.selectedIndex=-1}function me(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}function ge(e,t,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,o,t),r}let L;function A(e){L=e}function ye(){if(!L)throw new Error("Function called outside component initialization");return L}function be(){const e=ye();return(t,n,{cancelable:o=!1}={})=>{const r=e.$$.callbacks[t];if(r){const i=ge(t,n,{cancelable:o});return r.slice().forEach(l=>{l.call(e,i)}),!i.defaultPrevented}return!0}}const O=[],H=[],z=[],M=[],ve=Promise.resolve();let W=!1;function $e(){W||(W=!0,ve.then(se))}function B(e){z.push(e)}function we(e){M.push(e)}const K=new Set;let S=0;function se(){if(S!==0)return;const e=L;do{try{for(;S<O.length;){const t=O[S];S++,A(t),ke(t.$$)}}catch(t){throw O.length=0,S=0,t}for(A(null),O.length=0,S=0;H.length;)H.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];K.has(n)||(K.add(n),n())}z.length=0}while(O.length);for(;M.length;)M.pop()();W=!1,K.clear(),A(e)}function ke(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}const I=new Set;let E;function Ee(){E={r:0,c:[],p:E}}function Se(){E.r||N(E.c),E=E.p}function D(e,t){e&&e.i&&(I.delete(e),e.i(t))}function R(e,t,n,o){if(e&&e.o){if(I.has(e))return;I.add(e),E.c.push(()=>{I.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function Oe(e,t,n){const o=e.$$.props[t];o!==void 0&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function ue(e){e&&e.c()}function J(e,t,n,o){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),o||B(()=>{const l=e.$$.on_mount.map(oe).filter(ie);e.$$.on_destroy?e.$$.on_destroy.push(...l):N(l),e.$$.on_mount=[]}),i.forEach(B)}function U(e,t){const n=e.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function De(e,t){e.$$.dirty[0]===-1&&(O.push(e),$e(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Q(e,t,n,o,r,i,l,c=[-1]){const s=L;A(e);const f=e.$$={fragment:null,ctx:[],props:i,update:b,not_equal:r,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:X(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};l&&l(f.root);let y=!1;if(f.ctx=n?n(e,t.props||{},(a,d,...u)=>{const p=u.length?u[0]:d;return f.ctx&&r(f.ctx[a],f.ctx[a]=p)&&(!f.skip_bound&&f.bound[a]&&f.bound[a](p),y&&De(e,a)),d}):[],f.update(),y=!0,N(f.before_update),f.fragment=o?o(f.ctx):!1,t.target){if(t.hydrate){const a=he(t.target);f.fragment&&f.fragment.l(a),a.forEach(m)}else f.fragment&&f.fragment.c();t.intro&&D(e.$$.fragment),J(e,t.target,t.anchor,t.customElement),se()}A(s)}class V{$destroy(){U(this,1),this.$destroy=b}$on(t,n){if(!ie(n))return b;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!pe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function je(e){let t,n,o,r,i,l;return{c(){t=v("div"),n=v("input"),o=T(),r=v("button"),r.textContent="LOAD STATS",h(n,"placeholder","Enter website URL here"),h(n,"class","svelte-rpea6x"),h(r,"class","svelte-rpea6x"),h(t,"id","barContainer"),h(t,"class","svelte-rpea6x")},m(c,s){g(c,t,s),j(t,n),Y(n,e[0]),j(t,o),j(t,r),i||(l=[x(n,"input",e[2]),x(r,"click",e[1])],i=!0)},p(c,[s]){s&1&&n.value!==c[0]&&Y(n,c[0])},i:b,o:b,d(c){c&&m(t),i=!1,N(l)}}}function Ne(e,t,n){let{url:o=""}=t;const r=be();function i(){r("loadStat",{url:o})}function l(){o=this.value,n(0,o)}return e.$$set=c=>{"url"in c&&n(0,o=c.url)},[o,i,l]}class Pe extends V{constructor(t){super(),Q(this,t,Ne,je,F,{url:0})}}function Te(e){let t,n,o,r,i,l,c;return{c(){t=v("script"),o=T(),r=v("div"),i=v("div"),de(t.src,n="https://cdn.plot.ly/plotly-2.18.0.min.js")||h(t,"src",n),h(i,"id","owo"),h(i,"class","svelte-iuq8p"),h(r,"id","owo-container"),h(r,"class","svelte-iuq8p")},m(s,f){j(document.head,t),g(s,o,f),g(s,r,f),j(r,i),e[3](i),l||(c=x(t,"load",e[1]),l=!0)},p:b,i:b,o:b,d(s){m(t),s&&m(o),s&&m(r),e[3](null),l=!1,c()}}}function Ae(e,t,n){let{trace:o}=t,r,i=[o];const l={plot_bgcolor:"#252525",paper_bgcolor:"#252525"};function c(){Plotly.newPlot(r,i,l)}function s(f){H[f?"unshift":"push"](()=>{r=f,n(0,r)})}return e.$$set=f=>{"trace"in f&&n(2,o=f.trace)},[r,c,o,s]}class Le extends V{constructor(t){super(),Q(this,t,Ae,Te,F,{trace:2})}}function ee(e,t,n){const o=e.slice();return o[16]=t[n],o}function te(e){let t,n,o,r=e[4],i=[];for(let l=0;l<r.length;l+=1)i[l]=ne(ee(e,r,l));return{c(){t=v("select");for(let l=0;l<i.length;l+=1)i[l].c();h(t,"id","dataDateSelector"),h(t,"name","dataDate"),h(t,"size","1"),h(t,"class","svelte-ynvgva"),e[0]===void 0&&B(()=>e[7].call(t))},m(l,c){g(l,t,c);for(let s=0;s<i.length;s+=1)i[s].m(t,null);Z(t,e[0]),n||(o=x(t,"change",e[7]),n=!0)},p(l,c){if(c&16){r=l[4];let s;for(s=0;s<r.length;s+=1){const f=ee(l,r,s);i[s]?i[s].p(f,c):(i[s]=ne(f),i[s].c(),i[s].m(t,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=r.length}c&17&&Z(t,l[0])},d(l){l&&m(t),_e(i,l),n=!1,o()}}}function ne(e){let t,n=e[16]+"",o,r;return{c(){t=v("option"),o=G(n),t.__value=r=e[16],t.value=t.__value},m(i,l){g(i,t,l),j(t,o)},p(i,l){l&16&&n!==(n=i[16]+"")&&le(o,n),l&16&&r!==(r=i[16])&&(t.__value=r,t.value=t.__value)},d(i){i&&m(t)}}}function re(e){let t,n;return t=new Le({props:{trace:e[3]}}),{c(){ue(t.$$.fragment)},m(o,r){J(t,o,r),n=!0},p(o,r){const i={};r&8&&(i.trace=o[3]),t.$set(i)},i(o){n||(D(t.$$.fragment,o),n=!0)},o(o){R(t.$$.fragment,o),n=!1},d(o){U(t,o)}}}function Ce(e){let t,n,o,r,i=Object.keys(e[3]).length>0,l,c,s;function f(u){e[6](u)}let y={};e[1]!==void 0&&(y.url=e[1]),t=new Pe({props:y}),H.push(()=>Oe(t,"url",f)),t.$on("loadStat",e[5]);let a=e[4].length>0&&te(e),d=i&&re(e);return{c(){ue(t.$$.fragment),o=T(),a&&a.c(),r=T(),d&&d.c(),l=T(),c=G(e[2])},m(u,p){J(t,u,p),g(u,o,p),a&&a.m(u,p),g(u,r,p),d&&d.m(u,p),g(u,l,p),g(u,c,p),s=!0},p(u,[p]){const C={};!n&&p&2&&(n=!0,C.url=u[1],we(()=>n=!1)),t.$set(C),u[4].length>0?a?a.p(u,p):(a=te(u),a.c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null),p&8&&(i=Object.keys(u[3]).length>0),i?d?(d.p(u,p),p&8&&D(d,1)):(d=re(u),d.c(),D(d,1),d.m(l.parentNode,l)):d&&(Ee(),R(d,1,1,()=>{d=null}),Se()),(!s||p&4)&&le(c,u[2])},i(u){s||(D(t.$$.fragment,u),D(d),s=!0)},o(u){R(t.$$.fragment,u),R(d),s=!1},d(u){U(t,u),u&&m(o),a&&a.d(u),u&&m(r),d&&d.d(u),u&&m(l),u&&m(c)}}}async function qe(e="",t={}){return(await fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)})).json()}function ze(e){e=e.record;let t=e.collectionPeriods,n=e.metrics.experimental_time_to_first_byte.histogramTimeseries,o=[],r={};n.forEach(i=>{o.push({start:i.start,end:i.end})});for(let i=0;i<t.length;i++){const l=t[i],c=[];n.forEach(s=>{c.push(s.densities[i])}),r[`${l.firstDate.day}.${l.firstDate.month}.${l.firstDate.year}-${l.lastDate.day}.${l.lastDate.month}.${l.lastDate.year}`]={densities:c}}return{ranges:o,histograms:r}}function Ie(e,t,n){const o=new URLSearchParams(window.location.search);let r=o.get("apikey")||localStorage.getItem("api-key"),i=o.get("url")||"",l="",c={},s={},f,y=0,a,d=[];if(onresize=()=>{C()},r===null||r==="null"||r.length<1){let _=prompt("Api key?");localStorage.setItem("api-key",_),window.location.reload()}i!=""&&u({detail:{url:i}});function u(_){n(3,s={}),n(4,d=[]),n(2,l="");const $=_.detail.url;$.length<1||qe(`https://chromeuxreport.googleapis.com/v1/records:queryHistoryRecord?key=${r}`,{origin:$,metrics:["experimental_time_to_first_byte"]}).then(w=>{if(w.error){n(2,l=w.error.message);return}let P=ze(w);for(let k of Object.keys(P.histograms))d.push(k);c=P,n(4,d),n(0,a=void 0)})}async function p(){try{n(3,s={});let _=c,$=_.histograms[a],w=[],P=[];for(let k=0;k<_.ranges.length;k++)w.push(`${_.ranges[k].start}-${_.ranges[k].end}`),P.push($.densities[k]);setTimeout(()=>{n(3,s={marker:{color:"rgba(100,100,100,1)"},x:w,y:P,type:"bar"})},1)}catch{n(2,l=JSON.stringify(c))}}async function C(){let _=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,$=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;Math.abs(y-(_+$))<20||(clearTimeout(f),y=_+$,f=setTimeout(()=>{ce()},500))}function ce(){let _=s;n(3,s={}),setTimeout(()=>{n(3,s=_)},1)}function fe(_){i=_,n(1,i)}function ae(){a=me(this),n(0,a),n(4,d)}return e.$$.update=()=>{e.$$.dirty&1&&a&&p()},[a,i,l,s,d,u,fe,ae]}class Re extends V{constructor(t){super(),Q(this,t,Ie,Ce,F,{})}}new Re({target:document.getElementById("app")});
