"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var n=r(439),a=r(195),i=r(791),s=r(689),u=r(184);function c(){var e=(0,i.useState)([]),t=(0,n.Z)(e,2),r=t[0],c=t[1],o=(0,s.UO)().movieId;return(0,i.useEffect)((function(){a.b.getMovieReviews(o).then(c).catch(console.log)}),[]),(0,u.jsx)(u.Fragment,{children:r.length>0?(0,u.jsx)("ul",{children:r.map((function(e){var t=e.author,r=e.content;return(0,u.jsxs)("li",{children:[(0,u.jsxs)("p",{children:["Author name: ",t]}),(0,u.jsxs)("p",{children:["Review: ",r]})]})}))}):(0,u.jsx)("p",{children:"No reviews for this movie"})})}},195:function(e,t,r){r.d(t,{b:function(){return f}});var n=r(165),a=r(861),i=r(263).Z.create({headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjQ0ZjBlYTQyZDM1NTExNjA4MGQ4YzU2ZjJhMmU5NSIsInN1YiI6IjYzODQ5YThiYmYwOWQxMDA3YjA1ZGNhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Malh7hKQ8cPpJehS1trEierjSDz873qjS069_qwsppI")},baseURL:"https://api.themoviedb.org/3"});function s(){return(s=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/trending/movie/week");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/search/movie",{params:{query:t}});case 2:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/movie/".concat(t));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/movie/".concat(t,"/credits"));case 2:return r=e.sent,a=r.data,e.abrupt("return",a.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/genre/movie/list");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={getMoviesByQuery:function(e){return u.apply(this,arguments)},getTrendingMovies:function(){return s.apply(this,arguments)},getMovieDetails:function(e){return c.apply(this,arguments)},getMovieCast:function(e){return o.apply(this,arguments)},getMovieReviews:function(e){return p.apply(this,arguments)},getMovieGenres:function(){return h.apply(this,arguments)}}}}]);
//# sourceMappingURL=186.e11c1c9e.chunk.js.map