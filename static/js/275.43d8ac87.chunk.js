(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[275],{4141:function(e,n,t){"use strict";t.d(n,{C:function(){return c},l:function(){return s}});var r,o,i=t(168),a=t(3081),c=a.Z.ul(r||(r=(0,i.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: ","px;\n"])),(function(e){return e.theme.spacing(8)})),s=a.Z.li(o||(o=(0,i.Z)(["\n    width: calc((100% - ","px * 2) / ",");\n"])),(function(e){return e.theme.spacing(4)}),(function(e){return e.theme.spacing(2)}))},275:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(4165),o=t(5861),i=t(9439),a=t(2007),c=t.n(a),s=t(421),u=t(2791),p=t(7689),f=t(4141),l=t(184),h=function(){var e=(0,u.useState)([]),n=(0,i.Z)(e,2),t=n[0],a=n[1],c=(0,p.UO)().movieId;return(0,u.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{(0,s.getMovieReview)(c).then(a)}catch(t){n=t.response,console.log(n.data.message)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[c]),console.log(t.length),(0,l.jsx)(f.C,{children:0===t.length?(0,l.jsx)("h2",{children:"There aren't any reviews yet"}):t.map((function(e){return(0,l.jsxs)("li",{children:[(0,l.jsx)("h3",{children:null===e||void 0===e?void 0:e.author}),(0,l.jsx)("p",{children:null===e||void 0===e?void 0:e.content})]},null===e||void 0===e?void 0:e.id)}))})};h.defaultProps={author:"Stranger",content:"Some text"},h.defaultProps={reviews:c().arrayOf(c().shape({author:c().string,content:c().string}))};var d=h},888:function(e,n,t){"use strict";var r=t(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=275.43d8ac87.chunk.js.map