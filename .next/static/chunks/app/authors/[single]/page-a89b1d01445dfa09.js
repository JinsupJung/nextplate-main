(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{5929:function(e,t,n){Promise.resolve().then(n.t.bind(n,6996,23)),Promise.resolve().then(n.t.bind(n,9297,23)),Promise.resolve().then(n.t.bind(n,190,23)),Promise.resolve().then(n.t.bind(n,2666,23)),Promise.resolve().then(n.t.bind(n,414,23)),Promise.resolve().then(n.bind(n,74)),Promise.resolve().then(n.bind(n,6512)),Promise.resolve().then(n.bind(n,4998)),Promise.resolve().then(n.bind(n,6654)),Promise.resolve().then(n.bind(n,5496)),Promise.resolve().then(n.bind(n,2445))},2666:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return a},NoSSR:function(){return o}}),n(6927),n(6006);let r=n(8131);function a(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e}function o(e){let{children:t}=e;return t}},74:function(e,t,n){"use strict";n.r(t);var r=n(9268),a=n(6394),o=n.n(a),l=n(6006);let i=e=>{let{src:t,fallback:n,...a}=e,[i,s]=(0,l.useState)(t);return(0,l.useEffect)(()=>{s(t)},[t]),(0,r.jsx)(o(),{...a,src:i,onError:()=>{s(n)}})};t.default=i},2445:function(e,t,n){"use strict";n.r(t);var r=n(9268),a=n(3853),o=n(9754),l=n(6008);let i=e=>{let{title:t,meta_title:n,image:i,description:s,canonical:c,noindex:u}=e,{meta_image:m,meta_author:p,meta_description:d}=a.metadata,{base_url:h}=a.site,f=(0,l.usePathname)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:(0,o.ab)(n||t||a.site.title)}),c&&(0,r.jsx)("link",{rel:"canonical",href:c,itemProp:"url"}),u&&(0,r.jsx)("meta",{name:"robots",content:"noindex,nofollow"}),(0,r.jsx)("meta",{name:"description",content:(0,o.ab)(s||d)}),(0,r.jsx)("meta",{name:"author",content:p}),(0,r.jsx)("meta",{property:"og:title",content:(0,o.ab)(n||t||a.site.title)}),(0,r.jsx)("meta",{property:"og:description",content:(0,o.ab)(s||d)}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(h,"/").concat(f.replace("/",""))}),(0,r.jsx)("meta",{name:"twitter:title",content:(0,o.ab)(n||t||a.site.title)}),(0,r.jsx)("meta",{name:"twitter:description",content:(0,o.ab)(s||d)}),(0,r.jsx)("meta",{property:"og:image",content:"".concat(h).concat(i||m)}),(0,r.jsx)("meta",{name:"twitter:image",content:"".concat(h).concat(i||m)}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})};t.default=i},6512:function(e,t,n){"use strict";n.r(t);var r=n(9268),a=n(6006);let o=e=>{let{title:t,children:n,className:o}=e,[l,i]=(0,a.useState)(!1);return(0,r.jsxs)("div",{className:"accordion ".concat(l&&"active"," ").concat(o),children:[(0,r.jsxs)("button",{className:"accordion-header",onClick:()=>i(!l),children:[t,(0,r.jsx)("svg",{className:"accordion-icon",x:"0px",y:"0px",viewBox:"0 0 512 512",xmlSpace:"preserve",children:(0,r.jsx)("path",{fill:"currentColor",d:"M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"})})]}),(0,r.jsx)("div",{className:"accordion-content",children:n})]})};t.default=o},4998:function(e,t,n){"use strict";n.r(t);var r=n(9268);t.default=function(e){let{children:t}=e;return(0,r.jsx)("div",{className:"tab-content-panel",children:t})}},6654:function(e,t,n){"use strict";n.r(t);var r=n(9268),a=n(6006);t.default=function(e){let{children:t}=e,[n,o]=(0,a.useState)(0),l=(0,a.useRef)([]),[i,s]=(0,a.useState)(!1);(0,a.useEffect)(()=>{i?l.current[n].focus():s(!0)},[n]);let c=(e,r)=>{"Enter"===e.key||" "===e.key?o(r):"ArrowRight"===e.key?o((n+1)%t.length):"ArrowLeft"===e.key&&o((n-1+t.length)%t.length)};return(0,r.jsxs)("div",{className:"tab",children:[(0,r.jsx)("ul",{className:"tab-nav",role:"tablist",children:t.map((e,t)=>(0,r.jsx)("li",{className:"tab-nav-item ".concat(t===n&&"active"),role:"tab",tabIndex:t===n?0:-1,onClick:()=>o(t),onKeyDown:e=>c(e,t),ref:e=>l.current[t]=e,children:e.props.name},t))}),t.map((e,t)=>(0,r.jsx)("div",{className:"tab-content ".concat(t===n?"block":"hidden"),children:e.props.children},t))]})}},5496:function(e,t,n){"use strict";n.r(t);var r=n(9268),a=n(4695);n(217);let o=e=>{let{id:t,title:n,...o}=e;return(0,r.jsx)(a.Z,{wrapperClass:"yt-lite rounded-lg",id:t,title:n,...o})};t.default=o},9754:function(e,t,n){"use strict";n.d(t,{OI:function(){return i},ab:function(){return s},gI:function(){return l},lV:function(){return o}});var r=n(1446),a=n(8037);a.TU.use({mangle:!1,headerIds:!1});let o=e=>(0,r.o)(e),l=(e,t)=>({__html:t?a.TU.parse(e):a.TU.parseInline(e)}),i=e=>e.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/^[a-z]/,function(e){return e.toUpperCase()}),s=e=>{let t=e.replace(/<\/?[^>]+(>|$)/gm,""),n=t.replace(/[\r\n]\s*[\r\n]/gm,""),r=c(n);return r},c=e=>{let t={"&nbsp;":" ","&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};return e.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g,e=>t[e])}},217:function(){},4695:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(6006),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function o(e){var t=r.useState(!1),n=t[0],o=t[1],l=r.useState(!1),i=l[0],s=l[1],c=encodeURIComponent(e.id),u="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,m=e.title,p=e.poster||"hqdefault",d="&"+e.params,h=e.muted?"&mute=1":"",f=e.announce||"Watch",g=e.webp?"webp":"jpg",b=e.webp?"vi_webp":"vi",v=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+b+"/"+u+"/"+p+"."+g:"https://i.ytimg.com/"+b+"/"+c+"/"+p+"."+g),y=e.noCookie?"https://www.youtube-nocookie.com":"https://www.youtube.com";y=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var _=e.playlist?y+"/embed/videoseries?autoplay=1"+h+"&list="+c+d:y+"/embed/"+c+"?autoplay=1&state=1"+h+d,w=e.activatedClass||"lyt-activated",x=e.adNetwork||!1,j=e.aspectHeight||9,k=e.aspectWidth||16,N=e.iframeClass||"",E=e.playerClass||"lty-playbtn",C=e.wrapperClass||"yt-lite",P=e.onIframeAdded||function(){},S=e.rel?"prefetch":"preload";return r.useEffect(function(){i&&P()},[i]),r.createElement(r.Fragment,null,r.createElement("link",{rel:S,href:v,as:"image"}),r.createElement(r.Fragment,null,n&&r.createElement(r.Fragment,null,r.createElement("link",{rel:"preconnect",href:y}),r.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),x&&r.createElement(r.Fragment,null,r.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),r.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),r.createElement("article",{onPointerOver:function(){n||o(!0)},onClick:function(){i||s(!0)},className:C+" "+(i?w:""),"data-title":m,style:a({backgroundImage:"url("+v+")"},{"--aspect-ratio":j/k*100+"%"})},r.createElement("button",{type:"button",className:E,"aria-label":f+" "+m}),i&&r.createElement("iframe",{className:N,title:m,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:_})))}},3853:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"Nextplate","base_url":"https://nextplate.netlify.app","base_path":"/","trailing_slash":false,"favicon":"/images/favicon.png","logo":"/images/logo.png","logo_darkmode":"/images/logo-darkmode.png","logo_width":"150","logo_height":"27","logo_text":"Nextplate"},"settings":{"search":true,"sticky_header":true,"theme_switcher":true,"default_theme":"system","pagination":2,"summary_length":200,"blog_folder":"blog"},"params":{"contact_form_action":"#","copyright":"Designed And Developed by [Zeon Studio](https://zeon.studio)"},"navigation_button":{"enable":true,"label":"Get Started","link":"https://github.com/zeon-studio/nextplate"},"disqus":{"enable":true,"shortname":"themefisher-template","settings":{}},"metadata":{"meta_author":"Themefisher","meta_image":"/images/og-image.png","meta_description":"Next Boilerplate"}}')}},function(e){e.O(0,[458,414,394,667,139,744],function(){return e(e.s=5929)}),_N_E=e.O()}]);