import{ap as M,A as V,aq as Y,ak as E,U as b,i as q,ar as D,m as A,as as L,g as H,at as W,B as j,au as S,e as w,s as m,a as P,f as g,j as $,av as x,aw as z,w as G,d as U,ax as F,h as R,c as J,l as K,Y as Q,ay as X,_ as Z,G as aa}from"./html.B5LUluYV.js";const ra=new Set,O=new Set;function ta(a,r,e,o){function n(t){if(o.capture||p.call(r,t),!t.cancelBubble){var l=D,f=A;E(null),b(null);try{return e.call(this,t)}finally{E(l),b(f)}}}return a.startsWith("pointer")||a.startsWith("touch")||a==="wheel"?V(()=>{r.addEventListener(a,n,o)}):r.addEventListener(a,n,o),n}function oa(a,r,e,o,n){var t={capture:o,passive:n},l=ta(a,r,e,t);(r===document.body||r===window||r===document)&&M(()=>{r.removeEventListener(a,l,t)})}function p(a){var N;var r=this,e=r.ownerDocument,o=a.type,n=((N=a.composedPath)==null?void 0:N.call(a))||[],t=n[0]||a.target,l=0,f=a.__root;if(f){var c=n.indexOf(f);if(c!==-1&&(r===document||r===window)){a.__root=r;return}var _=n.indexOf(r);if(_===-1)return;c<=_&&(l=c)}if(t=n[l]||a.target,t!==r){Y(a,"currentTarget",{configurable:!0,get(){return t||e}});var T=D,u=A;E(null),b(null);try{for(var s,i=[];t!==null;){var d=t.assignedSlot||t.parentNode||t.host||null;try{var h=t["__"+o];if(h!==void 0&&!t.disabled)if(q(h)){var[C,...I]=h;C.apply(t,[a,...I])}else h.call(t,a)}catch(y){s?i.push(y):s=y}if(a.cancelBubble||d===r||d===null)break;t=d}if(s){for(let y of i)queueMicrotask(()=>{throw y});throw s}}finally{a.__root=r,delete a.currentTarget,E(T),b(u)}}}const ea=["touchstart","touchmove"];function sa(a){return ea.includes(a)}function la(a,r){var e=r==null?"":typeof r=="object"?r+"":r;e!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=e,a.nodeValue=e==null?"":e+"")}function na(a,r){return B(a,r)}function ua(a,r){L(),r.intro=r.intro??!1;const e=r.target,o=R,n=g;try{for(var t=H(e);t&&(t.nodeType!==8||t.data!==W);)t=j(t);if(!t)throw S;w(!0),m(t),P();const l=B(a,{...r,anchor:t});if(g===null||g.nodeType!==8||g.data!==$)throw x(),S;return w(!1),l}catch(l){if(l===S)return r.recover===!1&&z(),L(),G(e),w(!1),na(a,r);throw l}finally{w(o),m(n)}}const v=new Map;function B(a,{target:r,anchor:e,props:o={},events:n,context:t,intro:l=!0}){L();var f=new Set,c=u=>{for(var s=0;s<u.length;s++){var i=u[s];if(!f.has(i)){f.add(i);var d=sa(i);r.addEventListener(i,p,{passive:d});var h=v.get(i);h===void 0?(document.addEventListener(i,p,{passive:d}),v.set(i,1)):v.set(i,h+1)}}};c(U(ra)),O.add(c);var _=void 0,T=F(()=>{var u=e??r.appendChild(J());return K(()=>{if(t){Q({});var s=aa;s.c=t}n&&(o.$$events=n),R&&X(u,null),_=a(u,o)||{},R&&(A.nodes_end=g),t&&Z()}),()=>{var d;for(var s of f){r.removeEventListener(s,p);var i=v.get(s);--i===0?(document.removeEventListener(s,p),v.delete(s)):v.set(s,i)}O.delete(c),k.delete(_),u!==e&&((d=u.parentNode)==null||d.removeChild(u))}});return k.set(_,T),_}let k=new WeakMap;const da=`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M16.758 11.423A.79.79 0 0117 12a.79.79 0 01-.242.577l-6.356 6.188a.838.838 0 01-1.162.002.785.785 0 01.002-1.132L15.03 12 9.242 6.365a.785.785 0 01-.002-1.132.838.838 0 011.162.002l6.356 6.188z"></path>
</svg>`;export{da as C,oa as e,ua as h,la as s};
//# sourceMappingURL=chevron-right.BKZRRIR5.js.map
