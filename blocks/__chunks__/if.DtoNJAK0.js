import{aq as P,ar as M,as as j,U as y,at as k,g as c,au as u,a2 as R,h as w,P as q,av as B,ai as C,E as F,y as T,B as H,C as K,H as U,G as Y,z,I as A,L as O,M as D,N as S,J as G,ap as J}from"./html.DOjNKMTv.js";function o(i,b=null,x){if(typeof i!="object"||i===null||P in i)return i;const g=C(i);if(g!==M&&g!==j)return i;var f=new Map,d=F(i),v=y(0);d&&f.set("length",y(i.length));var l;return new Proxy(i,{defineProperty(n,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&k();var a=f.get(e);return a===void 0?(a=y(t.value),f.set(e,a)):c(a,o(t.value,l)),!0},deleteProperty(n,e){var t=f.get(e);if(t===void 0)e in n&&f.set(e,y(u));else{if(d&&typeof e=="string"){var a=f.get("length"),r=Number(e);Number.isInteger(r)&&r<a.v&&c(a,r)}c(t,u),L(v)}return!0},get(n,e,t){var _;if(e===P)return i;var a=f.get(e),r=e in n;if(a===void 0&&(!r||(_=R(n,e))!=null&&_.writable)&&(a=y(o(r?n[e]:u,l)),f.set(e,a)),a!==void 0){var s=w(a);return s===u?void 0:s}return Reflect.get(n,e,t)},getOwnPropertyDescriptor(n,e){var t=Reflect.getOwnPropertyDescriptor(n,e);if(t&&"value"in t){var a=f.get(e);a&&(t.value=w(a))}else if(t===void 0){var r=f.get(e),s=r==null?void 0:r.v;if(r!==void 0&&s!==u)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return t},has(n,e){var s;if(e===P)return!0;var t=f.get(e),a=t!==void 0&&t.v!==u||Reflect.has(n,e);if(t!==void 0||q!==null&&(!a||(s=R(n,e))!=null&&s.writable)){t===void 0&&(t=y(a?o(n[e],l):u),f.set(e,t));var r=w(t);if(r===u)return!1}return a},set(n,e,t,a){var I;var r=f.get(e),s=e in n;if(d&&e==="length")for(var _=t;_<r.v;_+=1){var h=f.get(_+"");h!==void 0?c(h,u):_ in n&&(h=y(u),f.set(_+"",h))}r===void 0?(!s||(I=R(n,e))!=null&&I.writable)&&(r=y(void 0),c(r,o(t,l)),f.set(e,r)):(s=r.v!==u,c(r,o(t,l)));var m=Reflect.getOwnPropertyDescriptor(n,e);if(m!=null&&m.set&&m.set.call(a,t),!s){if(d&&typeof e=="string"){var E=f.get("length"),N=Number(e);Number.isInteger(N)&&N>=E.v&&c(E,N+1)}L(v)}return!0},ownKeys(n){w(v);var e=Reflect.ownKeys(n).filter(r=>{var s=f.get(r);return s===void 0||s.v!==u});for(var[t,a]of f)a.v!==u&&!(t in n)&&e.push(t);return e},setPrototypeOf(){B()}})}function L(i,b=1){c(i,i.v+b)}function Q(i,b,x,g=null,f=!1){T&&H();var d=i,v=null,l=null,n=null,e=f?J:0;K(()=>{if(n===(n=!!b()))return;let t=!1;if(T){const a=d.data===U;n===a&&(d=Y(),z(d),A(!1),t=!0)}n?(v?O(v):v=D(()=>x(d)),l&&S(l,()=>{l=null})):(l?O(l):g&&(l=D(()=>g(d))),v&&S(v,()=>{v=null})),t&&A(!0)},e),T&&(d=G)}export{Q as i,o as p};
//# sourceMappingURL=if.DtoNJAK0.js.map
