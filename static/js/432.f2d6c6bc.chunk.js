"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[432],{7978:function(n,e,t){t.d(e,{Z:function(){return p}});var r,i=t(7689),a=t(168),o=t(6444),u=t(1087),s=(0,o.ZP)(u.OL)(r||(r=(0,a.Z)(["\n  padding: 8px;\n  font-size: 20px;\n  text-transform: uppercase;\n  border-radius: 10px;\n  display: inline-block;\n  width: 100%;\n\n  :hover:not(.active) {\n    background-color: burlywood;\n    color: white;\n  }\n"]))),c=t(184);function p(n){var e=n.title,t=n.href,r=(0,i.TH)();return(0,c.jsx)("li",{children:(0,c.jsx)(s,{to:t,state:{from:r},children:e})})}},3432:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,i,a,o,u=t(9439),s=t(2791),c=t(1087),p=t(4195),l=t(5264),h=t(168),f=t(6444),d=f.ZP.form(r||(r=(0,h.Z)(["\n  display: inline-block;\n  margin: 0 auto;\n  margin-top: 40px;\n  text-align: center;\n  position: relative;\n"]))),v=f.ZP.input(i||(i=(0,h.Z)(["\n  height: 30px;\n  width: 300px;\n  border: 1px solid burlywood;\n  border-radius: 10px;\n  outline: none;\n  font-size: 20px;\n  padding: 5px;\n"]))),x=f.ZP.button(a||(a=(0,h.Z)(["\n  position: absolute;\n  right: 0;\n  background: transparent;\n  border: transparent;\n  outline: none;\n  padding: 10px;\n  cursor: pointer;\n  &:hover {\n    color: burlywood;\n  }\n"]))),Z=f.ZP.ul(o||(o=(0,h.Z)(["\n  columns: 2;\n  column-gap: 40px;\n  max-width: 700px;\n  display: block;\n  margin: 30px auto 0;\n"]))),y=t(458),g=t(7978),m=t(184);function b(){var n,e=(0,c.lr)(),t=(0,u.Z)(e,2),r=t[0],i=t[1],a=null!==(n=r.get("query"))&&void 0!==n?n:"",o=(0,s.useState)([]),h=(0,u.Z)(o,2),f=h[0],b=h[1];(0,s.useEffect)((function(){a&&p.b.getMoviesByQuery(a).then(b).catch(console.log)}),[]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(d,{onSubmit:function(n){n.preventDefault(),a?p.b.getMoviesByQuery(a).then(b).catch(console.log):l.Notify.info("Please, enter movie name")},children:[(0,m.jsx)(v,{type:"text",value:a,onChange:function(n){var e=n.target.value;i(e?{query:e}:{})}}),(0,m.jsx)(x,{type:"submit",children:(0,m.jsx)(y.w75,{size:30})})]}),f.length>0&&(0,m.jsx)(Z,{children:f.map((function(n){var e=n.id,t=n.original_title;return(0,m.jsx)(g.Z,{title:t,href:"".concat(e)},e)}))})]})}},4195:function(n,e,t){t.d(e,{b:function(){return l}});var r=t(4165),i=t(5861),a=t(3263).Z.create({headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjQ0ZjBlYTQyZDM1NTExNjA4MGQ4YzU2ZjJhMmU5NSIsInN1YiI6IjYzODQ5YThiYmYwOWQxMDA3YjA1ZGNhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Malh7hKQ8cPpJehS1trEierjSDz873qjS069_qwsppI")},baseURL:"https://api.themoviedb.org/3"});function o(){return(o=(0,i.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a("/trending/movie/week");case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(){return(u=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a("/search/movie",{params:{query:e}});case 2:return t=n.sent,i=t.data,n.abrupt("return",i.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(){return(s=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a("/movie/".concat(e));case 2:return t=n.sent,i=t.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function c(){return(c=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a("/movie/".concat(e,"/credits"));case 2:return t=n.sent,i=t.data,n.abrupt("return",i.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(){return(p=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,i=t.data,n.abrupt("return",i.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var l={getMoviesByQuery:function(n){return u.apply(this,arguments)},getTrendingMovies:function(){return o.apply(this,arguments)},getMovieDetails:function(n){return s.apply(this,arguments)},getMovieCast:function(n){return c.apply(this,arguments)},getMovieReviews:function(n){return p.apply(this,arguments)}}}}]);
//# sourceMappingURL=432.f2d6c6bc.chunk.js.map