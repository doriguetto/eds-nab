import{aA as W,Z as B,aB as H,ai as E,a6 as b,D as M,a9 as k,O as D,aC as S,C as Y,aD as q,a0 as P,au as L,G as w,y as O,A as $,I as y,J as j,at as z,aE as F,W as G,E as J,aF as Z,x as A,z as K,L as Q,p as U,av as X,e as x,c as rr}from"./template.-UsQU157.js";const ar=new Set,R=new Set;function er(r,a,t,o){function n(e){if(o.capture||p.call(a,e),!e.cancelBubble){var l=k,d=D;E(null),b(null);try{return t.call(this,e)}finally{E(l),b(d)}}}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?B(()=>{a.addEventListener(r,n,o)}):a.addEventListener(r,n,o),n}function or(r,a,t,o,n){var e={capture:o,passive:n},l=er(r,a,t,e);(a===document.body||a===window||a===document)&&W(()=>{a.removeEventListener(r,l,e)})}function p(r){var N;var a=this,t=a.ownerDocument,o=r.type,n=((N=r.composedPath)==null?void 0:N.call(r))||[],e=n[0]||r.target,l=0,d=r.__root;if(d){var c=n.indexOf(d);if(c!==-1&&(a===document||a===window)){r.__root=a;return}var _=n.indexOf(a);if(_===-1)return;c<=_&&(l=c)}if(e=n[l]||r.target,e!==a){H(r,"currentTarget",{configurable:!0,get(){return e||t}});var T=k,u=D;E(null),b(null);try{for(var s,i=[];e!==null;){var f=e.assignedSlot||e.parentNode||e.host||null;try{var h=e["__"+o];if(h!==void 0&&!e.disabled)if(M(h)){var[C,...V]=h;C.apply(e,[r,...V])}else h.call(e,r)}catch(g){s?i.push(g):s=g}if(r.cancelBubble||f===a||f===null)break;e=f}if(s){for(let g of i)queueMicrotask(()=>{throw g});throw s}}finally{r.__root=a,delete r.currentTarget,E(T),b(u)}}}const tr=["touchstart","touchmove"];function sr(r){return tr.includes(r)}function lr(r,a){var t=a==null?"":typeof a=="object"?a+"":a;t!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=t,r.nodeValue=t==null?"":t+"")}function nr(r,a){return m(r,a)}function ur(r,a){S(),a.intro=a.intro??!1;const t=a.target,o=A,n=y;try{for(var e=Y(t);e&&(e.nodeType!==8||e.data!==q);)e=P(e);if(!e)throw L;w(!0),O(e),$();const l=m(r,{...a,anchor:e});if(y===null||y.nodeType!==8||y.data!==j)throw z(),L;return w(!1),l}catch(l){if(l===L)return a.recover===!1&&F(),S(),G(t),w(!1),nr(r,a);throw l}finally{w(o),O(n)}}const v=new Map;function m(r,{target:a,anchor:t,props:o={},events:n,context:e,intro:l=!0}){S();var d=new Set,c=u=>{for(var s=0;s<u.length;s++){var i=u[s];if(!d.has(i)){d.add(i);var f=sr(i);a.addEventListener(i,p,{passive:f});var h=v.get(i);h===void 0?(document.addEventListener(i,p,{passive:f}),v.set(i,1)):v.set(i,h+1)}}};c(J(ar)),R.add(c);var _=void 0,T=Z(()=>{var u=t??a.appendChild(K());return Q(()=>{if(e){U({});var s=rr;s.c=e}n&&(o.$$events=n),A&&X(u,null),_=r(u,o)||{},A&&(D.nodes_end=y),e&&x()}),()=>{var f;for(var s of d){a.removeEventListener(s,p);var i=v.get(s);--i===0?(document.removeEventListener(s,p),v.delete(s)):v.set(s,i)}R.delete(c),I.delete(_),u!==t&&((f=u.parentNode)==null||f.removeChild(u))}});return I.set(_,T),_}let I=new WeakMap;export{or as e,ur as h,lr as s};
//# sourceMappingURL=render.CilbfXbt.js.map