(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),a=n(3),o=n.n(a),i=(n(13),n(4)),h=n(5),l=n(7),b=n(6),d=function(e){var t=e.name,n=e.email;e.id;return Object(r.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(t,"?150x150"),alt:"robot"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{className:"f4",children:n})]})]})},j=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].name)}))})},u=function(e){e.searchfield;var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=(n(14),function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"1px solid gray",height:"700px"},children:e.children})}),g=(n(15),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"Robofriends"}),Object(r.jsx)(u,{searchChange:this.onSearchChange}),Object(r.jsx)(f,{children:Object(r.jsx)(j,{robots:c})})]}):Object(r.jsx)("h1",{children:"Loading..."})}}]),n}(c.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.4b3c7926.chunk.js.map