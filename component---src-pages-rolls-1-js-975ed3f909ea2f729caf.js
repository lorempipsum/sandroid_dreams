(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"520z":function(e,t,a){e.exports=a.p+"static/logo-2293f84d7d34fa41565b00b5a711f481.jpg"},"5Epl":function(e,t){},"7oih":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),l=(a("520z"),a("Cj5n")),s=a.n(l),o=(a("wqAQ"),function(e){var t=e.title;return r.createElement("div",null,r.createElement("title",null,t),r.createElement(n.a,{className:s.a.headingStyles,to:"/"},r.createElement("div",null,r.createElement("div",{className:s.a.logoWithCss},r.createElement("div",{className:s.a.squareB}),r.createElement("div",{className:s.a.squareW}),r.createElement("div",{className:s.a.squareW}),r.createElement("div",{className:s.a.squareB}),r.createElement("div",{className:s.a.squareB}),r.createElement("div",{className:s.a.squareW}),r.createElement("div",{className:s.a.squareW}),r.createElement("div",{className:s.a.squareW}),r.createElement("div",{className:s.a.squareW}),r.createElement("div",{className:s.a.squareB}),r.createElement("div",{className:s.a.squareB}),r.createElement("div",{className:s.a.squareW}),r.createElement("div",{className:s.a.squareB}),r.createElement("div",{className:s.a.squareW}),r.createElement("div",{className:s.a.squareB}),r.createElement("div",{className:s.a.squareB}))),t),r.createElement("p",null,r.createElement(n.a,{to:"/about",className:s.a.subtitleText},"About"),r.createElement(n.a,{to:"/friends",className:s.a.subtitleText},"Friends"),r.createElement(n.a,{to:"/instagram",className:s.a.subtitleText},"Instagram")))}),d=a("G86H"),u=a.n(d);t.a=function(e){var t=e.children,a=e.title;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:u.a.main},i.a.createElement("div",{className:u.a.header},i.a.createElement(o,{title:"sandroid.dev"})),i.a.createElement("div",{className:u.a.content},a&&i.a.createElement("h1",null,a),t)))}},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=c(e),a=m(t);return p[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,E=v&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},q=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+d+l+s+a+r+t+n+i+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=d.default.createElement(T,(0,o.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?d.default.createElement("picture",null,i(r),s):s})),T=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},g,{onLoad:l,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));T.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=m(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,y=e.itemProp,w=e.loading,N=e.draggable,L=p||h;if(!L)return null;var z=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,o.default)({opacity:z?1:0,transition:k?"opacity "+v+"ms":"none"},s),W="boolean"==typeof b?"lightgray":b,C={transitionDelay:v+"ms"},V=(0,o.default)({opacity:this.state.imgLoaded?0:1},k&&C,s,f),B={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:y},H=this.state.isHydrated?g(L):L[0];if(p)return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},d.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),W&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:W,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&C)}),H.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:B,imageVariants:L,generateSources:I}),H.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:B,imageVariants:L,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,S(L),d.default.createElement(T,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:q((0,o.default)({alt:a,title:t,loading:w},H,{imageVariants:L}))}}));if(h){var j=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},n);return"inherit"===n.display&&delete j.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},W&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:W,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},k&&C)}),H.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:B,imageVariants:L,generateSources:I}),H.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:B,imageVariants:L,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,S(L),d.default.createElement(T,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:q((0,o.default)({alt:a,title:t,loading:w},H,{imageVariants:L}))}}))}return null},t}(d.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),O=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function W(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}z.propTypes={resolutions:k,sizes:O,fixed:W(u.default.oneOfType([k,u.default.arrayOf(k)])),fluid:W(u.default.oneOfType([O,u.default.arrayOf(O)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var C=z;t.default=C},Cj5n:function(e,t,a){e.exports={subtitleText:"Title-module--subtitleText--3jFUU",logoWithCss:"Title-module--logoWithCss--3wEIC",squareB:"Title-module--squareB--1Ox5x",squareW:"Title-module--squareW--3laYP",headingStyles:"Title-module--headingStyles--1RN0_"}},G86H:function(e,t,a){e.exports={main:"Layout-module--main--3NgEk",header:"Layout-module--header--3zaAq",content:"Layout-module--content--nwbxQ"}},R3wZ:function(e,t,a){e.exports={link:"ArticleLink-module--link--Q2esx",linkTextStyle:"ArticleLink-module--linkTextStyle--2kQAU"}},g9MH:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("7oih"),l=a("9eSz"),s=a.n(l),o=(a("5Epl"),a("o4TS")),d=a.n(o),u=function(e){var t=e.images,a=Object(r.useState)(!1),n=a[0],l=a[1],o=Object(r.useState)(0),u=o[0],c=o[1],f=t.filter((function(e){return void 0!==e})).map((function(e){return e.thumb}));console.log(f);var m=t.filter((function(e){return void 0!==e})).map((function(e){return e.full}));console.log(m);return i.a.createElement(i.a.Fragment,null,n&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{className:d.a.nextButton,onClick:function(){return c(u+1)}}," ",i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 25 25"},i.a.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}))),i.a.createElement("button",{className:d.a.previousButton,onClick:function(){return c(u-1)}},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 25 25"},i.a.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}))),i.a.createElement("div",{onClick:function(){return l(!1),void c(0)},className:d.a.lightbox},i.a.createElement(s.a,{fluid:m[u],className:d.a.lightboxImage,imgStyle:{objectFit:"contain"},fadeIn:!0,placeholderStyle:{opacity:0,border:"none",display:"none"}}))),i.a.createElement("div",{className:d.a.imageGrid},f.map((function(e,t){return i.a.createElement("div",{onClick:function(){return function(e){l(!0),c(e)}(t)},style:{cursor:"pointer"}},i.a.createElement(s.a,{fluid:e}))}))))};t.default=function(e){var t=e.data;return r.createElement(n.a,{title:"The Infinite Photo Roll"},r.createElement("p",null,r.createElement("span",null,"This page will automatically be updated with all the images uploaded to this site.")),r.createElement(u,{images:t.allFile.edges.map((function(e){return e.node.childImageSharp}))}))}},o4TS:function(e,t,a){e.exports={imageGrid:"ImageGrid-module--imageGrid--1nXoK",lightbox:"ImageGrid-module--lightbox--mXXyd",previousButton:"ImageGrid-module--previousButton--39FJ0",nextButton:"ImageGrid-module--nextButton--2ftlX",lightboxImage:"ImageGrid-module--lightboxImage--290Va"}},wqAQ:function(e,t,a){"use strict";var r=a("q1tI"),i=a("Wbzz"),n=(a("7oih"),a("R3wZ")),l=a.n(n);t.a=function(e){var t=e.to,a=e.text;return r.createElement("div",{className:l.a.link},r.createElement(i.a,{className:l.a.linkTextStyle,to:t},a))}}}]);
//# sourceMappingURL=component---src-pages-rolls-1-js-975ed3f909ea2f729caf.js.map