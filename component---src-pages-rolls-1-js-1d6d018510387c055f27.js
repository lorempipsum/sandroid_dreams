(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"520z":function(e,t,a){e.exports=a.p+"static/logo-2293f84d7d34fa41565b00b5a711f481.jpg"},"5Epl":function(e,t){},"7oih":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),l=(a("520z"),a("Cj5n")),s=a.n(l),d=function(e){var t=e.title;return r.createElement("div",null,r.createElement("title",null,t),r.createElement(n.a,{className:s.a.headingStyles,to:"/"},r.createElement("div",null,r.createElement("div",{className:s.a.logoWithCss},r.createElement("div",{className:s.a.squareW}),r.createElement("div",{className:s.a.squareB}),r.createElement("div",{className:s.a.squareW}),r.createElement("div",{className:s.a.squareW}),r.createElement("div",{className:s.a.squareW}),r.createElement("div",{className:s.a.squareW}),r.createElement("div",{className:s.a.squareB}),r.createElement("div",{className:s.a.squareB}),r.createElement("div",{className:s.a.squareW}),r.createElement("div",{className:s.a.squareB}),r.createElement("div",{className:s.a.squareB}),r.createElement("div",{className:s.a.squareW}),r.createElement("div",{className:s.a.squareB}),r.createElement("div",{className:s.a.squareB}),r.createElement("div",{className:s.a.squareB}),r.createElement("div",{className:s.a.squareW}))),t),r.createElement(n.a,{className:s.a.subtitleParent,to:"/"},r.createElement("p",{className:s.a.subtitleText},"Do sandroids dream of electric sleep?")))},o={fontFamily:'consolas, monaco, courier, "courier new", fixed-width',display:"grid",margin:"auto",marginTop:"3vh",gridTemplateColumns:"minmax(0, auto) min(600px, 95vw) minmax(0, auto)",paddingLeft:"calc(100vw - 100%)"},u={gridColumn:"2",gridRow:"1",marginTop:0,textAlign:"center",justifySelf:"center"},c={gridColumn:"2",gridRow:"2",justifyContent:"center",minWidth:"min(95vw, 600px)"},f={fontFamily:'consolas, monaco, courier, "courier new", fixed-width',fontSize:"1.5em",textAlign:"center"};t.a=function(e){var t=e.children,a=e.title;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:o},i.a.createElement("div",{style:u},i.a.createElement(d,{title:"sandroid.dev"})),i.a.createElement("div",{style:c},a&&i.a.createElement("p",{style:f},a),t)))}},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),d=r(a("pVnL")),o=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=c(e),a=m(t);return p[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+o+l+s+a+r+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},T=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=o.default.createElement(q,(0,d.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?o.default.createElement("picture",null,i(r),s):s})),q=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},g,{onLoad:l,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));q.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=m(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,p=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,S=e.loading,I=e.draggable,R=p||h;if(!R)return null;var N=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,d.default)({opacity:N?1:0,transition:C?"opacity "+b+"ms":"none"},s),W="boolean"==typeof v?"lightgray":v,V={transitionDelay:b+"ms"},k=(0,d.default)({opacity:this.state.imgLoaded?0:1},C&&V,s,f),j={title:t,alt:this.state.isVisible?"":a,style:k,className:m,itemProp:E},H=this.state.isHydrated?g(R):R[0];if(p)return o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},o.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),W&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:W,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&V)}),H.base64&&o.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:j,imageVariants:R,generateSources:L}),H.tracedSVG&&o.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:j,imageVariants:R,generateSources:x}),this.state.isVisible&&o.default.createElement("picture",null,w(R),o.default.createElement(q,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:I})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:S},H,{imageVariants:R}))}}));if(h){var P=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},n);return"inherit"===n.display&&delete P.display,o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},W&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:W,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},C&&V)}),H.base64&&o.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:j,imageVariants:R,generateSources:L}),H.tracedSVG&&o.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:j,imageVariants:R,generateSources:x}),this.state.isVisible&&o.default.createElement("picture",null,w(R),o.default.createElement(q,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:I})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:S},H,{imageVariants:R}))}}))}return null},t}(o.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),O=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function W(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}N.propTypes={resolutions:C,sizes:O,fixed:W(u.default.oneOfType([C,u.default.arrayOf(C)])),fluid:W(u.default.oneOfType([O,u.default.arrayOf(O)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var V=N;t.default=V},Cj5n:function(e,t,a){e.exports={subtitleText:"Title-module--subtitleText--3jFUU",subtitleParent:"Title-module--subtitleParent--1B9e6",logoWithCss:"Title-module--logoWithCss--3wEIC",squareB:"Title-module--squareB--1Ox5x",squareW:"Title-module--squareW--3laYP",headingStyles:"Title-module--headingStyles--1RN0_"}},g9MH:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("7oih"),l=a("9eSz"),s=a.n(l),d=(a("5Epl"),{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",gridTemplateRows:"auto"}),o={background:"rgba(0, 0, 0, 0.5)",left:0,top:0,width:"100%",height:"100%",position:"fixed",zIndex:500},u={left:0,top:0,marginLeft:"2vw",position:"fixed",zIndex:6e3,height:"100vh",border:"none",background:"none",outline:"none",cursor:"pointer"},c={left:0,top:0,marginLeft:"94vw",position:"fixed",zIndex:6e3,height:"100vh",border:"none",background:"none",outline:"none",cursor:"pointer"},f={position:"fixed",top:"0",left:"0",height:"90vh",width:"90vw",zIndex:"1000",marginLeft:"5vw",marginTop:"5vh",objectFit:"contain"},m=function(e){var t=e.images,a=Object(r.useState)(!1),n=a[0],l=a[1],m=Object(r.useState)(0),g=m[0],p=m[1],h=t.filter((function(e){return void 0!==e})).map((function(e){return e.thumb}));console.log(h);var v=t.filter((function(e){return void 0!==e})).map((function(e){return e.full}));console.log(v);return i.a.createElement(i.a.Fragment,null,n&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{style:c,onClick:function(){return p(g+1)}},i.a.createElement("div",null," ",i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 25 25"},i.a.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))),i.a.createElement("button",{style:u,onClick:function(){return p(g-1)}},i.a.createElement("div",null,i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 25 25"},i.a.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})))),i.a.createElement("div",{onClick:function(){return l(!1),void p(0)},style:o},i.a.createElement(s.a,{fluid:v[g],imgStyle:f}))),i.a.createElement("div",{style:d},h.map((function(e,t){return i.a.createElement("div",{onClick:function(){return function(e){l(!0),p(e)}(t)},style:{cursor:"pointer"}},i.a.createElement(s.a,{fluid:e}))}))))};t.default=function(e){var t=e.data;return r.createElement(n.a,{title:"The Infinite Photo Roll"},r.createElement("p",null,r.createElement("span",null,"This page will automatically be updated with all the images uploaded to this site.")),r.createElement(m,{images:t.allFile.edges.map((function(e){return e.node.childImageSharp}))}))}}}]);
//# sourceMappingURL=component---src-pages-rolls-1-js-1d6d018510387c055f27.js.map