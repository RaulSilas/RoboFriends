(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(13),n(1)),s=n(2),i=n(4),h=n(3),u=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(u,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},d=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"900px"}},e.children)},b=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooooops. That's not good"):this.props.children}}]),n}(a.Component),p=(n(14),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).componentDidMount=function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))},e.onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(m,{robots:a})))):r.a.createElement("h1",{className:"tc f1"},"Loading...")}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,n){e.exports=n(16)}},[[7,1,2]]]);
//# sourceMappingURL=main.40febe69.chunk.js.map