(this.webpackJsonpclass11=this.webpackJsonpclass11||[]).push([[0],{70:function(e,t,a){e.exports=a(95)},75:function(e,t,a){},76:function(e,t,a){},81:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),o=a.n(r),i=(a(75),a(32)),s=a(10),c=a(12),u=a(13),m=a(15),p=a(14),d=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null," NotFound "))}}]),a}(l.a.Component),h=(a(76),a(131)),f=a(134),E=a(136),v=a(137),b=a(142),g=a(143),O=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function y(e){var t=O();return l.a.createElement("div",{className:t.root},l.a.createElement(f.a,{position:"static",style:{boxShadow:"none"}},l.a.createElement(E.a,null,l.a.createElement(v.a,{variant:"h5",className:t.title},"Voting Poll"),l.a.createElement(b.a,{color:"inherit",onClick:e.signOut},"Logout ",l.a.createElement(g.a,null)))))}var w=a(139),C=a(19),j=a.n(C),S=a(63),x=a(25),N=a(58),A=a(97),k=(a(81),a(59)),W=a.n(k),q=(a(82),a(84),a(96),W.a.initializeApp({apiKey:"AIzaSyDxZtgcOIr7H-ZOmuHUja1nemcJkaSjpSc",authDomain:"react-live-poll-4d98f.firebaseapp.com",databaseURL:"https://react-live-poll-4d98f.firebaseio.com",projectId:"react-live-poll-4d98f",storageBucket:"react-live-poll-4d98f.appspot.com",messagingSenderId:"299010166362",appId:"1:299010166362:web:ac7e326b71b9fd91009263"})),I={questionSeparator:!0,questionSeparatorWidth:"poll",questionBold:!0,questionColor:"#3F51B5",align:"left",theme:"blue"},D=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleVote=function(t,a,n){console.log(t,a,n);var l=e.state.pollAnswers,r=l.map((function(e){if(e.option===t)return e.votes++,q.database().ref("poll/".concat(n)).update({pollAnswers:l}).then((function(){})),e}));e.setState({pollAnswers:r})},e.state={pollAnswers:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(x.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.data.pollAnswers,this.setState({pollAnswers:Object(S.a)(t)});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(A.a,{className:"poll-card"},l.a.createElement(N.a,{customStyles:I,question:this.props.data.pollQuestion,answers:this.props.data.pollAnswers,onVote:function(t){return e.handleVote(t,e.props.data,e.props.index)}})))}}]),a}(l.a.Component),L=a(60),H=a(51),Q=a(62),P=a.n(Q);function B(){var e=Object(L.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]);return B=function(){return e},e}var M=Object(H.css)(B()),U=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"sweet-loading"},l.a.createElement(P.a,{css:M,size:100,color:"#123abc",loading:!0}))}}]),a}(l.a.Component),F=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).signOutHandler=function(){q.auth().signOut().then((function(){})).catch((function(e){}))},e.state={polls:[],loader:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;q.auth().onAuthStateChanged((function(t){t?e.props.history.push("/home"):e.props.history.push("/")}));var t=this.state,a=t.polls;t.loader;this.setState({loader:!0}),q.database().ref("poll").on("child_added",(function(t){var n=t.val();n.uid=t.key,a.push(n),e.setState({polls:a,loader:!1})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"home"},l.a.createElement(y,{signOut:this.signOutHandler}),l.a.createElement("div",{className:"poll_container"},this.state.loader?l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(U,null)):l.a.createElement(w.a,{maxWidth:"sm"},l.a.createElement("br",null),l.a.createElement("br",null),this.state.polls&&this.state.polls.map((function(e,t){return l.a.createElement(D,{key:t,index:e.uid,data:e})})))))}}]),a}(l.a.Component),G=a(26),J=(a(91),a(141)),z=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handelChange=function(t){e.setState(Object(G.a)({},t.target.name,t.target.value))},e.handelSubmit=Object(x.a)(j.a.mark((function t(){var a,n,l,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.fullName,l=a.email,r=a.password,t.next=3,q.auth().createUserWithEmailAndPassword(l,r).then((function(){q.database().ref("users").push({fullName:n,email:l,password:r}).then((function(){e.props.history.push("/home")}))})).catch((function(e){var t=e.message;console.log(t)}));case 3:case"end":return t.stop()}}),t)}))),e.state={fullName:"",email:"",password:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;q.auth().onAuthStateChanged((function(t){t?e.props.history.push("/home"):e.props.history.push("/register")}))}},{key:"render",value:function(){return console.log(this.state),l.a.createElement("div",{className:"signup"},l.a.createElement("div",{className:"spacer"}),l.a.createElement(w.a,{maxWidth:"sm"},l.a.createElement(A.a,{elevation:3,className:"paper"},l.a.createElement("div",{className:"form-title"},l.a.createElement("span",null,"SIGN UP")),l.a.createElement("br",null),l.a.createElement(J.a,{autoComplete:"fname",name:"fullName",variant:"outlined",required:!0,fullWidth:!0,id:"fullName",label:"Full Name",autoFocus:!0,onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(J.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(J.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{style:{textAlign:"right"}},l.a.createElement("span",null,"Already have Account? ",l.a.createElement(i.b,{to:"/"},"Login"))),l.a.createElement("br",null),l.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary",style:{width:"40%",height:"40px"},onClick:this.handelSubmit},"Sign Up"))))}}]),a}(l.a.Component),V=(a(93),a(29)),_=a.n(V),R=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handelChange=function(t){e.setState(Object(G.a)({},t.target.name,t.target.value))},e.submitHandle=Object(x.a)(j.a.mark((function t(){var a,n,l;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.email,l=a.password,t.next=3,q.auth().signInWithEmailAndPassword(n,l).then((function(t){_.a.fire("Login Successful!","success"),e.props.history.push("/home")})).catch((function(e){var t=e.message;_.a.fire({icon:"error",text:e.message}),console.log(t)}));case 3:case"end":return t.stop()}}),t)}))),e.state={email:"",password:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;q.auth().onAuthStateChanged((function(t){t?e.props.history.push("/home"):e.props.history.push("/")}))}},{key:"render",value:function(){return console.log(this.state),l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"spacer"}),l.a.createElement(w.a,{maxWidth:"sm"},l.a.createElement(A.a,{elevation:3,className:"paper"},l.a.createElement("div",{className:"form-title"},l.a.createElement("span",null,"LOG IN")),l.a.createElement("br",null),l.a.createElement(J.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(J.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{style:{textAlign:"right"}},l.a.createElement("span",null,"Don't have Account? ",l.a.createElement(i.b,{to:"/register"},"Signup"))),l.a.createElement("br",null),l.a.createElement(b.a,{type:"button",variant:"contained",color:"primary",style:{width:"40%",height:"40px"},onClick:this.submitHandle},"Log In"))))}}]),a}(l.a.Component),Z=(a(94),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handelChange=function(t){e.setState(Object(G.a)({},t.target.name,t.target.value))},e.submitHandle=Object(x.a)(j.a.mark((function t(){var a,n,l;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.state,n=a.email,l=a.password,q.database().ref("admin").once("value",(function(t){var a=t.val();a&&a.email===n&&a.password===l?(_.a.fire("Login Successful!","success"),localStorage.setItem("admin",JSON.stringify(a)),e.props.history.push("/dashboard")):_.a.fire({icon:"error",text:"Opps.. Login Unsuccessful!"})}));case 2:case"end":return t.stop()}}),t)}))),e.state={email:"",password:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;q.auth().onAuthStateChanged((function(t){t?e.props.history.push("/dashboard"):e.props.history.push("/admin")}))}},{key:"render",value:function(){return console.log(this.state),l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"spacer"}),l.a.createElement(w.a,{maxWidth:"sm"},l.a.createElement(A.a,{elevation:3,className:"paper"},l.a.createElement("div",{className:"form-title"},l.a.createElement("span",null,"Welcome Admin"),l.a.createElement("br",null),l.a.createElement("span",null,"LOG IN")),l.a.createElement("br",null),l.a.createElement(J.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(J.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"button",variant:"contained",color:"primary",style:{width:"40%",height:"40px"},onClick:this.submitHandle},"Log In"))))}}]),a}(l.a.Component)),K=a(140),T=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handelChange=function(t){e.setState(Object(G.a)({},t.target.name,{votes:0,option:t.target.value}))},e.handelAdd=function(){var t=e.state,a=t.pollQuestion,n=t.pollAnswers,l=t.Option1,r=t.Option2,o=t.Option3,i=t.Option4;n.push(l,r,o,i),q.database().ref("poll").push({pollQuestion:a,pollAnswers:n}).then((function(){_.a.fire("Data Added Successfuly!","success"),e.setState({pollAnswers:[],pollQuestion:"",Option1:"",Option2:"",Option3:"",Option4:""})}))},e.signOutHandler=function(){localStorage.removeItem("admin"),e.props.history.push("/admin")},e.delete=function(t,a){var n=e.state.polls;n.splice(a,1),q.database().ref("poll/".concat(a)).remove().then((function(){e.setState({polls:n})}))},e.state={pollQuestion:"",pollAnswers:[],polls:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("admin");t=JSON.parse(t),console.log(t),t||this.props.history.push("/admin");var a=this.state.polls;q.database().ref("poll").on("child_added",(function(t){var n=t.val();n.uid=t.key,a.push(n),e.setState({polls:a})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.pollQuestion,n=(t.pollAnswers,t.Option1),r=t.Option2,o=t.Option3,i=t.Option4;return l.a.createElement("div",{className:"dashboard"},l.a.createElement(y,{signOut:this.signOutHandler}),l.a.createElement("div",{className:"spacer",style:{height:"40px"}}),l.a.createElement(w.a,null,l.a.createElement(K.a,{container:!0},l.a.createElement(K.a,{item:!0,xs:12,lg:5},l.a.createElement(A.a,{className:"paper"},l.a.createElement("div",{className:"form-title"},l.a.createElement("span",null,"Create New Poll")),l.a.createElement("br",null),l.a.createElement(J.a,{variant:"outlined",required:!0,fullWidth:!0,value:a,id:"question",label:"Enter Question",name:"pollQuestion",autoComplete:"question",onChange:function(t){return e.setState({pollQuestion:t.target.value})}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(J.a,{variant:"outlined",required:!0,fullWidth:!0,name:"Option1",value:n&&n.option,label:"Option 1",onChange:this.handelChange,type:"text",id:"Option-1",autoComplete:"current-password"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(J.a,{variant:"outlined",required:!0,value:r&&r.option,fullWidth:!0,name:"Option2",label:"Option 2",type:"text",id:"Option-2",onChange:this.handelChange,autoComplete:"current-password"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(J.a,{variant:"outlined",required:!0,fullWidth:!0,name:"Option3",value:o&&o.option,label:"Option 3",type:"text",id:"Option-3",onChange:this.handelChange,autoComplete:"current-password"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(J.a,{variant:"outlined",required:!0,fullWidth:!0,name:"Option4",label:"Option 4",value:i&&i.option,type:"text",id:"Option-4",onChange:this.handelChange,autoComplete:"current-password"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary",style:{width:"40%",height:"40px"},onClick:this.handelAdd},"Add"))),l.a.createElement(K.a,{item:!0,xs:12,lg:7,style:{padding:"0 2%"}},this.state.polls&&this.state.polls.map((function(t,a){return l.a.createElement(A.a,{elevation:1,style:{padding:"10px",margin:"5px 0"}},l.a.createElement("span",{style:{fontSize:"22px",fontWeight:"bold",color:"#3F51B5"}},t.pollQuestion),l.a.createElement(b.a,{onClick:function(){return e.delete(a,t.uid)},variant:"contained",color:"secondary",style:{float:"right"}},"DELETE"),l.a.createElement("ul",null,t.pollAnswers.map((function(e,t){return l.a.createElement("li",null,e.option)}))))}))))))}}]),a}(l.a.Component),$=function(){return l.a.createElement("section",{className:"App"},l.a.createElement(i.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:R}),l.a.createElement(s.a,{path:"/register",component:z}),l.a.createElement(s.a,{path:"/admin",component:Z}),l.a.createElement(s.a,{path:"/dashboard",component:T}),l.a.createElement(s.a,{path:"/home",component:F}),l.a.createElement(s.a,{path:"*",component:d}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[70,1,2]]]);
//# sourceMappingURL=main.f1368121.chunk.js.map