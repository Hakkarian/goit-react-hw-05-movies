"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[522],{4141:function(e,n,t){t.d(n,{C:function(){return l},l:function(){return a}});var i,r,s=t(168),o=t(3081),l=o.Z.ul(i||(i=(0,s.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: ","px;\n"])),(function(e){return e.theme.spacing(8)})),a=o.Z.li(r||(r=(0,s.Z)(["\n    width: calc((100% - ","px * 2) / ",");\n"])),(function(e){return e.theme.spacing(4)}),(function(e){return e.theme.spacing(2)}))},522:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var i,r,s=t(4165),o=t(5861),l=t(9439),a=t(421),c=t(2791),d=t(7689),u=t(1087),h=t(4290),v=t(4141),p=t(168),f=t(3081),x=f.Z.main(i||(i=(0,p.Z)(["\n    margin-bottom: 20px;\n    display: flex;\n    gap: 50px;\n"]))),m=(0,f.Z)(u.rU)(r||(r=(0,p.Z)(["\n    min-width: 60px;\n"]))),j=t(184),g=function(e){e.movies;var n,t,i,r=(0,d.TH)(),p=(0,c.useState)(),f=(0,l.Z)(p,2),g=f[0],w=f[1],Z=(0,d.UO)().movieId;Z||(Z=0);(0,d.s0)(),null===(n=r.state)||void 0===n||n.from.pathname;return console.log(r.state),"/"!==(null===(t=r.state)||void 0===t?void 0:t.from.pathname)&&(r.state.from.pathname="/"),(0,c.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{(0,a.getMoviesById)(Z).then(w)}catch(t){n=t.response,console.log(n.data.message)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[Z]),console.log(Z),console.log(g),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(x,{children:[(0,j.jsx)(m,{to:null===(i=r.state)||void 0===i?void 0:i.from.pathname,children:"Go Back"}),(0,j.jsx)("img",{src:(0,a.getPosterPath)(null===g||void 0===g?void 0:g.poster_path),alt:null===g||void 0===g?void 0:g.title}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("h1",{children:[null===g||void 0===g?void 0:g.title," (",(null===g||void 0===g?void 0:g.release_date).slice(0,4),")"]}),(0,j.jsxs)("p",{children:[(10*(null===g||void 0===g?void 0:g.vote_average)).toFixed(0),"%"]}),(0,j.jsx)("h2",{children:"Overview"}),(0,j.jsx)("p",{children:null===g||void 0===g?void 0:g.overview}),(0,j.jsx)("h2",{children:"Genres"}),(0,j.jsx)(v.C,{children:null===g||void 0===g?void 0:g.genres.map((function(e){return(0,j.jsx)("li",{children:(0,j.jsx)("p",{children:null===e||void 0===e?void 0:e.name})})}))}),(0,j.jsx)("p",{children:"Additional information"}),(0,j.jsxs)(v.C,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(u.rU,{to:"cast",state:{from:r},children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(u.rU,{to:"reviews",state:{from:r},children:"Reviews"})})]})]})]}),(0,j.jsx)(c.Suspense,{fallback:(0,j.jsx)(h.Z,{}),children:(0,j.jsx)(d.j3,{})})]})};g.defaultProps={poster_path:a.PLSHOLDER};var w=g}}]);
//# sourceMappingURL=522.dd540b56.chunk.js.map