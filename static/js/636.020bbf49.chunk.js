"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[636],{1636:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var r,i,a,s,c,o,u,p=t(9439),l=t(4195),d=t(2791),h=t(7689),x=t(3551),f=t(2693),v=t(168),m=t(6444),Z=t(1087),g=(0,m.ZP)(Z.OL)(r||(r=(0,v.Z)(["\n  padding: 8px;\n  font-size: 20px;\n  text-transform: uppercase;\n  border-radius: 10px;\n  display: inline-flex;\n  align-items: center;\n  border: 1px dashed burlywood;\n\n  :hover {\n    background-color: blanchedalmond;\n  }\n"]))),j=m.ZP.div(i||(i=(0,v.Z)(["\n  margin: 20px auto 0;\n  max-width: 700px;\n"]))),w=m.ZP.div(a||(a=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  margin-top: 20px;\n"]))),y=m.ZP.div(s||(s=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),b=m.ZP.div(c||(c=(0,v.Z)(["\n  margin-top: 20px;\n  text-align: center;\n"]))),k=m.ZP.p(o||(o=(0,v.Z)(["\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: 600;\n"]))),I=m.ZP.div(u||(u=(0,v.Z)(["\n  display: flex;\n  gap: 30px;\n  justify-content: center;\n  margin-bottom: 30px;\n"]))),M=t(7692),_=t(184);function J(){var e,n,t=(0,d.useState)(null),r=(0,p.Z)(t,2),i=r[0],a=r[1],s=(0,h.UO)().movieId,c=(0,h.TH)();if((0,d.useEffect)((function(){l.b.getMovieDetails(s).then(a).catch(console.log)}),[]),i){var o=i.title,u=i.overview,v=i.genres,m=i.vote_average,Z=i.poster_path,J=i.id,N=v.map((function(e){return e.name})).join(", "),P=null!==(e=null===(n=c.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return console.log(c),(0,_.jsxs)(j,{children:[(0,_.jsxs)(g,{to:P,children:[(0,_.jsx)(M.YiX,{style:{marginRight:10}}),"Go Back"]}),(0,_.jsxs)(w,{children:[(0,_.jsx)("img",{src:Z?"".concat("https://image.tmdb.org/t/p/w300").concat(Z):x.Z,alt:"".concat(o," poster")}),(0,_.jsxs)(y,{children:[(0,_.jsx)("h2",{children:o}),(0,_.jsxs)("p",{children:[(0,_.jsx)("b",{children:"User Score:"})," ",m.toFixed(1)]}),(0,_.jsxs)("p",{children:[(0,_.jsx)("b",{children:"Overview:"})," ",u]}),(0,_.jsxs)("p",{children:[(0,_.jsx)("b",{children:"Genres:"})," ",N]})]})]}),(0,_.jsxs)(b,{children:[(0,_.jsx)(k,{children:"Additional information"}),(0,_.jsxs)(I,{children:[(0,_.jsx)(f.F,{"data-id":J,to:"cast",children:"cast"}),(0,_.jsx)(f.F,{"data-id":J,to:"reviews",children:"reviews"})]})]}),(0,_.jsx)(d.Suspense,{fallback:null,children:(0,_.jsx)(h.j3,{})})]})}}},4195:function(e,n,t){t.d(n,{b:function(){return l}});var r=t(4165),i=t(5861),a=t(3263).Z.create({headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjQ0ZjBlYTQyZDM1NTExNjA4MGQ4YzU2ZjJhMmU5NSIsInN1YiI6IjYzODQ5YThiYmYwOWQxMDA3YjA1ZGNhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Malh7hKQ8cPpJehS1trEierjSDz873qjS069_qwsppI")},baseURL:"https://api.themoviedb.org/3"});function s(){return(s=(0,i.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("/trending/movie/week");case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("/search/movie",{params:{query:n}});case 2:return t=e.sent,i=t.data,e.abrupt("return",i.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("/movie/".concat(n));case 2:return t=e.sent,i=t.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("/movie/".concat(n,"/credits"));case 2:return t=e.sent,i=t.data,e.abrupt("return",i.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("/movie/".concat(n,"/reviews"));case 2:return t=e.sent,i=t.data,e.abrupt("return",i.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l={getMoviesByQuery:function(e){return c.apply(this,arguments)},getTrendingMovies:function(){return s.apply(this,arguments)},getMovieDetails:function(e){return o.apply(this,arguments)},getMovieCast:function(e){return u.apply(this,arguments)},getMovieReviews:function(e){return p.apply(this,arguments)}}},3551:function(e,n){n.Z="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}}]);
//# sourceMappingURL=636.020bbf49.chunk.js.map