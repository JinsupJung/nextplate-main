(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[373,836,452],{1535:function(e,t,n){Promise.resolve().then(n.t.bind(n,6996,23)),Promise.resolve().then(n.t.bind(n,9297,23)),Promise.resolve().then(n.t.bind(n,190,23)),Promise.resolve().then(n.t.bind(n,2666,23)),Promise.resolve().then(n.t.bind(n,414,23)),Promise.resolve().then(n.bind(n,74)),Promise.resolve().then(n.bind(n,9160)),Promise.resolve().then(n.bind(n,2445))},2666:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return a},NoSSR:function(){return o}}),n(6927),n(6006);let r=n(8131);function a(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e}function o(e){let{children:t}=e;return t}},9160:function(e,t,n){"use strict";n.r(t);var r=n(9268),a=n(9754),o=n(5846),i=n.n(o),s=n(6008);let l=e=>{let{className:t}=e,n=(0,s.usePathname)(),o=n.split("/").filter(e=>e),l=[{label:"Home",href:"/","aria-label":"/"===n?"page":void 0}];return o.forEach((e,t)=>{let r="/".concat(o.slice(0,t+1).join("/"));"page"!==e&&l.push({label:(0,a.OI)(e.replace(/[-_]/g," "))||"",href:r,"aria-label":n===r?"page":void 0})}),(0,r.jsx)("nav",{"aria-label":"Breadcrumb",className:t,children:(0,r.jsx)("ol",{className:"inline-flex",role:"list",children:l.map((e,t)=>{let{label:n,...a}=e;return(0,r.jsxs)("li",{className:"mx-1 capitalize",role:"listitem",children:[t>0&&(0,r.jsx)("span",{className:"inlin-block mr-1",children:"/"}),t!==l.length-1?(0,r.jsx)(i(),{className:"text-primary dark:text-darkmode-primary",...a,children:n}):(0,r.jsx)("span",{className:"text-light dark:text-darkmode-light",children:n})]},t)})})})};t.default=l},74:function(e,t,n){"use strict";n.r(t);var r=n(9268),a=n(6394),o=n.n(a),i=n(6006);let s=e=>{let{src:t,fallback:n,...a}=e,[s,l]=(0,i.useState)(t);return(0,i.useEffect)(()=>{l(t)},[t]),(0,r.jsx)(o(),{...a,src:s,onError:()=>{l(n)}})};t.default=s},2445:function(e,t,n){"use strict";n.r(t);var r=n(9268),a=n(3853),o=n(9754),i=n(6008);let s=e=>{let{title:t,meta_title:n,image:s,description:l,canonical:c,noindex:m}=e,{meta_image:u,meta_author:p,meta_description:d}=a.metadata,{base_url:g}=a.site,h=(0,i.usePathname)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:(0,o.ab)(n||t||a.site.title)}),c&&(0,r.jsx)("link",{rel:"canonical",href:c,itemProp:"url"}),m&&(0,r.jsx)("meta",{name:"robots",content:"noindex,nofollow"}),(0,r.jsx)("meta",{name:"description",content:(0,o.ab)(l||d)}),(0,r.jsx)("meta",{name:"author",content:p}),(0,r.jsx)("meta",{property:"og:title",content:(0,o.ab)(n||t||a.site.title)}),(0,r.jsx)("meta",{property:"og:description",content:(0,o.ab)(l||d)}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(g,"/").concat(h.replace("/",""))}),(0,r.jsx)("meta",{name:"twitter:title",content:(0,o.ab)(n||t||a.site.title)}),(0,r.jsx)("meta",{name:"twitter:description",content:(0,o.ab)(l||d)}),(0,r.jsx)("meta",{property:"og:image",content:"".concat(g).concat(s||u)}),(0,r.jsx)("meta",{name:"twitter:image",content:"".concat(g).concat(s||u)}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})};t.default=s},9754:function(e,t,n){"use strict";n.d(t,{OI:function(){return s},ab:function(){return l},gI:function(){return i},lV:function(){return o}});var r=n(1446),a=n(8037);a.TU.use({mangle:!1,headerIds:!1});let o=e=>(0,r.o)(e),i=(e,t)=>({__html:t?a.TU.parse(e):a.TU.parseInline(e)}),s=e=>e.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/^[a-z]/,function(e){return e.toUpperCase()}),l=e=>{let t=e.replace(/<\/?[^>]+(>|$)/gm,""),n=t.replace(/[\r\n]\s*[\r\n]/gm,""),r=c(n);return r},c=e=>{let t={"&nbsp;":" ","&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};return e.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g,e=>t[e])}},5846:function(e,t,n){e.exports=n(414)},3853:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"Nextplate","base_url":"https://nextplate.netlify.app","base_path":"/","trailing_slash":false,"favicon":"/images/favicon.png","logo":"/images/logo.png","logo_darkmode":"/images/logo-darkmode.png","logo_width":"150","logo_height":"27","logo_text":"Nextplate"},"settings":{"search":true,"sticky_header":true,"theme_switcher":true,"default_theme":"system","pagination":2,"summary_length":200,"blog_folder":"blog"},"params":{"contact_form_action":"#","copyright":"Designed And Developed by [Zeon Studio](https://zeon.studio)"},"navigation_button":{"enable":true,"label":"Get Started","link":"https://github.com/zeon-studio/nextplate"},"disqus":{"enable":true,"shortname":"themefisher-template","settings":{}},"metadata":{"meta_author":"Themefisher","meta_image":"/images/og-image.png","meta_description":"Next Boilerplate"}}')}},function(e){e.O(0,[458,414,394,667,139,744],function(){return e(e.s=1535)}),_N_E=e.O()}]);