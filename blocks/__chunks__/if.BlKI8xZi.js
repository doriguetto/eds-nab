import{ap as x,aq as F,ar as K,T as y,as as M,g as c,at as u,a1 as N,h as w,O as j,au as k,ah as q,D as B,x as R,A as H,B as Y,H as C,F as G,y as U,G as E,K as O,L as D,M as S,I as Z,ao as z}from"./template.lQmNzb9l.js";function g(i,b=null,I){if(typeof i!="object"||i===null||x in i)return i;const o=q(i);if(o!==F&&o!==K)return i;var f=new Map,d=B(i),v=y(0);d&&f.set("length",y(i.length));var l;return new Proxy(i,{defineProperty(n,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&M();var a=f.get(e);return a===void 0?(a=y(t.value),f.set(e,a)):c(a,g(t.value,l)),!0},deleteProperty(n,e){var t=f.get(e);if(t===void 0)e in n&&f.set(e,y(u));else{if(d&&typeof e=="string"){var a=f.get("length"),r=Number(e);Number.isInteger(r)&&r<a.v&&c(a,r)}c(t,u),L(v)}return!0},get(n,e,t){var _;if(e===x)return i;var a=f.get(e),r=e in n;if(a===void 0&&(!r||(_=N(n,e))!=null&&_.writable)&&(a=y(g(r?n[e]:u,l)),f.set(e,a)),a!==void 0){var s=w(a);return s===u?void 0:s}return Reflect.get(n,e,t)},getOwnPropertyDescriptor(n,e){var t=Reflect.getOwnPropertyDescriptor(n,e);if(t&&"value"in t){var a=f.get(e);a&&(t.value=w(a))}else if(t===void 0){var r=f.get(e),s=r==null?void 0:r.v;if(r!==void 0&&s!==u)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return t},has(n,e){var s;if(e===x)return!0;var t=f.get(e),a=t!==void 0&&t.v!==u||Reflect.has(n,e);if(t!==void 0||j!==null&&(!a||(s=N(n,e))!=null&&s.writable)){t===void 0&&(t=y(a?g(n[e],l):u),f.set(e,t));var r=w(t);if(r===u)return!1}return a},set(n,e,t,a){var A;var r=f.get(e),s=e in n;if(d&&e==="length")for(var _=t;_<r.v;_+=1){var h=f.get(_+"");h!==void 0?c(h,u):_ in n&&(h=y(u),f.set(_+"",h))}r===void 0?(!s||(A=N(n,e))!=null&&A.writable)&&(r=y(void 0),c(r,g(t,l)),f.set(e,r)):(s=r.v!==u,c(r,g(t,l)));var m=Reflect.getOwnPropertyDescriptor(n,e);if(m!=null&&m.set&&m.set.call(a,t),!s){if(d&&typeof e=="string"){var P=f.get("length"),T=Number(e);Number.isInteger(T)&&T>=P.v&&c(P,T+1)}L(v)}return!0},ownKeys(n){w(v);var e=Reflect.ownKeys(n).filter(r=>{var s=f.get(r);return s===void 0||s.v!==u});for(var[t,a]of f)a.v!==u&&!(t in n)&&e.push(t);return e},setPrototypeOf(){k()}})}function L(i,b=1){c(i,i.v+b)}function Q(i,b,I,o=null,f=!1){R&&H();var d=i,v=null,l=null,n=null,e=f?z:0;Y(()=>{if(n===(n=!!b()))return;let t=!1;if(R){const a=d.data===C;n===a&&(d=G(),U(d),E(!1),t=!0)}n?(v?O(v):v=D(()=>I(d)),l&&S(l,()=>{l=null})):(l?O(l):o&&(l=D(()=>o(d))),v&&S(v,()=>{v=null})),t&&E(!0)},e),R&&(d=Z)}export{Q as i,g as p};
//# sourceMappingURL=if.BlKI8xZi.js.map
