import{x as d,as as c,ay as f,az as t}from"./template.-UsQU157.js";function p(s,r,i,o){var a=s.__attributes??(s.__attributes={});d&&(a[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||a[r]!==(a[r]=i)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[f]=i),i==null?s.removeAttribute(r):typeof i!="string"&&n(s).includes(r)?s[r]=i:s.setAttribute(r,i))}function h(s,r,i){n(s).includes(r)?s[r]=i:p(s,r,i)}var g=new Map;function n(s){var r=g.get(s.nodeName);if(r)return r;g.set(s.nodeName,r=[]);for(var i,o=c(s),a=Element.prototype;a!==o;){i=t(o);for(var _ in i)i[_].set&&r.push(_);o=c(o)}return r}function A(s){if(!d&&s.loading==="lazy"){var r=s.src;s[f]=null,s.loading="eager",s.removeAttribute("src"),requestAnimationFrame(()=>{s[f]!=="eager"&&(s.loading="lazy"),s.src=r})}}export{h as a,A as h,p as s};
//# sourceMappingURL=attributes.CvhXenyd.js.map