(this["webpackJsonpshop-clothing"]=this["webpackJsonpshop-clothing"]||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(2),r=n.n(a),i=n(31),s=n.n(i),l=n(7),o=n(16),u=n(40),d=n(18),b=n.n(d),p=n(4),m=n(24),h=n(25),j=n(26),g=n(28),O=n(27),f=n(8),v=(n(55),n(19)),x=(n(56),Object(f.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,r=e.linkUrl,i=e.history,s=e.match;return Object(c.jsxs)("div",{className:"".concat(a," menu-item"),onClick:function(){return i.push("".concat(s.url).concat(r))},children:[Object(c.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(c.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),y=(n(58),n(9)),N=Object(y.a)([function(e){return e.directory}],(function(e){return e.sections})),k=Object(y.b)({sections:N}),w=Object(l.b)(k)((function(e){var t=e.sections;return Object(c.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(v.a)(e,["id"]);return Object(c.jsx)(x,Object(p.a)({},n),t)}))})})),C=(n(59),function(){return Object(c.jsx)("div",{className:"hompage",children:Object(c.jsx)(w,{})})}),U=(n(60),Object(y.a)([function(e){return e.shop}],(function(e){return e.collections}))),E=Object(y.a)([U],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),I=(n(61),function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,r=Object(v.a)(e,["children","isGoogleSignIn","inverted"]);return Object(c.jsx)("button",Object(p.a)(Object(p.a)({className:"".concat(a?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},r),{},{children:t}))}),T=(n(62),{TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM"}),S=function(){return{type:T.TOGGLE_CART_HIDDEN}},M=function(e){return{type:T.ADD_ITEM,payload:e}},A=Object(l.b)(null,(function(e){return{addItem:function(t){return e(M(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,r=t.price,i=t.imageUrl;return Object(c.jsxs)("div",{className:"collection-item",children:[Object(c.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),Object(c.jsxs)("div",{className:"collection-footer",children:[Object(c.jsx)("span",{className:"name",children:a}),Object(c.jsx)("span",{className:"price",children:r})]}),Object(c.jsx)(I,{onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})})),R=(n(63),function(e){var t=e.title,n=e.items;return Object(c.jsxs)("div",{className:"collection-preview",children:[Object(c.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(c.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(c.jsx)(A,{item:e},e.id)}))})]})}),_=Object(y.b)({collections:E}),B=Object(l.b)(_)((function(e){var t=e.collections;return Object(c.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(v.a)(e,["id"]);return Object(c.jsx)(R,Object(p.a)({},n),t)}))})})),P=(n(64),Object(l.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(y.a)([U],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=e.match;console.log(n.params.collectionId);var a=t.title,r=t.items;return Object(c.jsxs)("div",{className:"collection-page",children:[Object(c.jsx)("h2",{className:"title",children:a}),Object(c.jsx)("div",{className:"items",children:r.map((function(e){return Object(c.jsx)(A,{item:e},e.id)}))})]})}))),D=function(e){var t=e.match;return Object(c.jsxs)("div",{className:"shop-page",children:[Object(c.jsx)(f.b,{exact:!0,path:"".concat(t.path),component:B}),Object(c.jsx)(f.b,{path:"".concat(t.path,"/:collectionId"),component:P})]})};n.p,n(65);var G=n(29),H=(n(66),n(69),function(){var e=Object(m.a)(b.a.mark((function e(t,n){var c,a,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=V.doc("users/".concat(t.uid)),e.next=5,c.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,r=t.email,i=new Date,e.prev=9,e.next=12,c.set(Object(p.a)({displayName:a,email:r,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());G.a.initializeApp({apiKey:"AIzaSyAEcwmrFqH-maY0A8Ht3CVK3_z4WWVXvMo",authDomain:"shop-clothing-db-4cfe0.firebaseapp.com",databaseURL:"https://shop-clothing-db-4cfe0.firebaseio.com",projectId:"shop-clothing-db-4cfe0",storageBucket:"shop-clothing-db-4cfe0.appspot.com",messagingSenderId:"326180388095",appId:"1:326180388095:web:9da7482249534ef974a0ca",measurementId:"G-81LPM224RM"});var L=G.a.auth(),V=G.a.firestore(),W=new G.a.auth.GoogleAuthProvider;W.setCustomParameters({prompt:"select_account"});var q=function(){return L.signInWithPopup(W)};G.a;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var J=a.createElement("g",null),K=a.createElement("g",null),X=a.createElement("g",null),Q=a.createElement("g",null),Y=a.createElement("g",null),Z=a.createElement("g",null),$=a.createElement("g",null),ee=a.createElement("g",null),te=a.createElement("g",null),ne=a.createElement("g",null),ce=a.createElement("g",null),ae=a.createElement("g",null),re=a.createElement("g",null),ie=a.createElement("g",null),se=a.createElement("g",null);function le(e,t){var n=e.title,c=e.titleId,r=F(e,["title","titleId"]);return a.createElement("svg",z({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},r),n?a.createElement("title",{id:c},n):null,a.createElement("g",null,a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),J,K,X,Q,Y,Z,$,ee,te,ne,ce,ae,re,ie,se)}var oe=a.forwardRef(le),ue=(n.p,n(71),function(e){return e.cart}),de=Object(y.a)([ue],(function(e){return e.cartItems})),be=Object(y.a)([ue],(function(e){return e.hidden})),pe=Object(y.a)([de],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),me=Object(y.a)([de],(function(e){return e.reduce((function(e,t){return e+t.price*t.quantity}),0)})),he=Object(l.b)((function(e){return console.log("cart is called"),{itemCount:pe(e)}}),(function(e){return{toggleCartHidden:function(){return e(S())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(c.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(c.jsx)(oe,{className:"shopping-icon"}),Object(c.jsx)("span",{className:"item-count",children:n})]})})),je=(n(72),n(73),function(e){var t=e.item,n=t.imageUrl,a=t.price,r=t.name,i=t.quantity;return Object(c.jsxs)("div",{className:"cart-item",children:[Object(c.jsx)("img",{src:n,alt:"item"}),Object(c.jsxs)("div",{className:"item-details",children:[Object(c.jsx)("span",{className:"name",children:r}),Object(c.jsxs)("span",{className:"price",children:[i," x $",a]})]})]})}),ge=Object(f.g)(Object(l.b)((function(e){return{cartItems:de(e)}}))((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return Object(c.jsxs)("div",{className:"cart-dropdown",children:[Object(c.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(c.jsx)(je,{item:e},e.id)})):Object(c.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(c.jsx)(I,{onClick:function(){n.push("/checkout"),a(S())},children:"GO TO CHECKOUT"})]})}))),Oe=Object(y.a)([function(e){return e.user}],(function(e){return e.currentUser})),fe=Object(y.b)({currentUser:Oe,hidden:be}),ve=Object(l.b)(fe)((function(e){var t=e.currentUser,n=e.hidden;return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)(o.b,{to:"/",className:"logo-container",children:Object(c.jsx)("h1",{style:{fontSize:25,fontWeight:700},children:"PVS"})}),Object(c.jsxs)("div",{className:"options",children:[Object(c.jsx)(o.b,{className:"option",to:"/shop",children:"SHOP"}),Object(c.jsx)(o.b,{className:"option",to:"/shop",children:"ABOUT"}),t?Object(c.jsx)("div",{className:"option",onClick:function(){return L.signOut()},children:"SIGN OUT"}):Object(c.jsx)(o.b,{className:"option",to:"/sign-in",children:"SIGN IN"}),Object(c.jsx)(he,{})]}),n?null:Object(c.jsx)(ge,{})]})})),xe=n(23),ye=(n(74),function(e){var t=e.handleChange,n=e.label,a=Object(v.a)(e,["handleChange","label"]);return Object(c.jsxs)("div",{className:"group",children:[Object(c.jsx)("input",Object(p.a)({className:"form-input",onChange:t},a)),n?Object(c.jsx)("label",{className:"".concat(a.value.length?"shrink":""," form-input-label"),children:n}):null]})}),Ne=(n(75),function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(e){var c;return Object(h.a)(this,n),(c=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),c.setState({email:"",password:""})},c.handleChange=function(e){var t=e.target,n=t.value,a=t.name;console.log(e),c.setState(Object(xe.a)({},a,n))},c.state={email:"",password:""},c}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"sign-in",children:[Object(c.jsx)("h2",{children:"I already have an account"}),Object(c.jsx)("span",{children:"Sign in with your email and password"}),Object(c.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(c.jsx)(ye,{name:"email",type:"email",value:this.state.email,required:!0,handleChange:this.handleChange,label:"email"}),Object(c.jsx)(ye,{name:"password",type:"password",value:this.state.password,required:!0,handleChange:this.handleChange,label:"password"}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)(I,{type:"submit",children:"SIGN IN"}),Object(c.jsx)(I,{isGoogleSignIn:!0,onClick:q,children:"SIGN IN WITH GOOGLE"})]})]})]})}}]),n}(a.Component)),ke=(n(76),function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(e){var c;return Object(h.a)(this,n),(c=t.call(this,e)).handleSubmit=function(){var e=Object(m.a)(b.a.mark((function e(t){var n,a,r,i,s,l,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=c.state,a=n.displayName,r=n.email,i=n.password,s=n.confirmPassword,i===s){e.next=5;break}return alert("passwords dont's match"),e.abrupt("return");case 5:return e.prev=5,e.next=8,L.createUserWithEmailAndPassword(r,i);case 8:return l=e.sent,o=l.user,e.next=12,H(o,{displayName:a});case 12:c.setState({displayName:"",email:"",password:"",confirmPassword:""}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}(),c.handleChange=function(e){var t=e.target,n=t.name,a=t.value;c.setState(Object(xe.a)({},n,a))},c.state={displayName:"",email:"",password:"",confirmPassword:""},c}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,r=e.confirmPassword;return Object(c.jsxs)("div",{className:"sign-up",children:[Object(c.jsx)("h2",{children:"I do not have a acount"}),Object(c.jsx)("span",{children:"Sign up with yout email and password"}),Object(c.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(c.jsx)(ye,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(c.jsx)(ye,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(c.jsx)(ye,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),Object(c.jsx)(ye,{type:"password",name:"confirmPassword",value:r,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(c.jsx)(I,{type:"submit",children:"Submit"})]})]})}}]),n}(a.Component)),we=(n(77),function(){return Object(c.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(c.jsx)(Ne,{}),Object(c.jsx)(ke,{})]})}),Ce="SET_CURRENT_USER",Ue=(n(78),n(79),Object(l.b)(null,(function(e){return{clearItem:function(t){return e({type:T.CLEAR_ITEM_FROM_CART,payload:t})},addItem:function(t){return e(M(t))},removeItem:function(t){return e({type:T.REMOVE_ITEM,payload:t})}}}))((function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,r=e.removeItem,i=t.name,s=t.imageUrl,l=t.price,o=t.quantity;return Object(c.jsxs)("div",{className:"checkout-item",children:[Object(c.jsx)("div",{className:"image-container",children:Object(c.jsx)("img",{src:s,alt:"item"})}),Object(c.jsx)("span",{className:"name",children:i}),Object(c.jsxs)("span",{className:"quantity",children:[Object(c.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276e"}),Object(c.jsx)("span",{className:"value",children:o}),Object(c.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276f"})]}),Object(c.jsx)("span",{className:"price",children:l}),Object(c.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),Ee=n(41),Ie=n.n(Ee),Te=function(e){alert("Payment Successfull")},Se=function(e){var t=e.price,n=100*t;return Object(c.jsx)("div",{children:Object(c.jsx)(Ie.a,{label:"Pay Now",name:"PVS Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:Te,stripeKey:"pk_test_51HrQEkHKFlyXr0PJs3ptZOl52KGkMv1xZd0wFnarDhOeDbgwTRuXQtbXACLaIrpHjQ9FvSLvaCfawNp1NOlMzXCa00bOZWrfcw"})})},Me=Object(y.b)({cartItems:de,total:me}),Ae=Object(l.b)(Me)((function(e){var t=e.cartItems,n=e.total;return Object(c.jsxs)("div",{className:"checkout-page",children:[Object(c.jsxs)("div",{className:"checkout-header",children:[Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Product"})}),Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Description"})}),Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Quantity"})}),Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Price"})}),Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(c.jsx)(Ue,{cartItem:e},e.id)})),Object(c.jsx)("div",{className:"total",children:Object(c.jsxs)("span",{children:["TOTAL: $",n]})}),Object(c.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments*",Object(c.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"]}),Object(c.jsx)(Se,{price:n})]})})),Re=function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).unsubscripeFromAuth=null,e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscripeFromAuth=L.onAuthStateChanged(function(){var t=Object(m.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,H(n);case 3:t.sent.onSnapshot((function(t){e({currentUser:Object(p.a)({id:t.id},t.data())})})),t.next=8;break;case 7:e({userAuth:n});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscripeFromAuth()}},{key:"render",value:function(){var e=this;return console.log(this.props.currentUser),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(ve,{}),Object(c.jsxs)(f.d,{children:[Object(c.jsx)(f.b,{exact:!0,path:"/",component:C}),Object(c.jsx)(f.b,{path:"/shop",component:D}),Object(c.jsx)(f.b,{exact:!0,path:"/sign-in",render:function(){return e.props.currentUser?Object(c.jsx)(f.a,{to:"/"}):Object(c.jsx)(we,{})}}),Object(c.jsx)(f.b,{exact:!0,path:"/checkout",component:Ae})]})]})}}]),n}(r.a.Component),_e=Object(l.b)((function(e){return{currentUser:Oe(e)}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:Ce,payload:e}}(t))}}}))(Re),Be=n(17),Pe=n(42),De=n.n(Pe),Ge=n(33),He={currentUser:null},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ce:return Object(p.a)(Object(p.a)({},e),{},{currentUser:t.payload.currentUser});default:return e}},Ve=n(44),We=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Ve.a)(e),[Object(p.a)(Object(p.a)({},t),{},{quantity:1})])},qe=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e===t?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity-1}):e}))},ze={hidden:!0,cartItems:[]},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.TOGGLE_CART_HIDDEN:return Object(p.a)(Object(p.a)({},e),{},{hidden:!e.hidden});case T.ADD_ITEM:return Object(p.a)(Object(p.a)({},e),{},{cartItems:We(e.cartItems,t.payload)});case T.REMOVE_ITEM:return Object(p.a)(Object(p.a)({},e),{},{cartItems:qe(e.cartItems,t.payload)});case T.CLEAR_ITEM_FROM_CART:return Object(p.a)(Object(p.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},Je=n(43),Ke={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Qe={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ze={key:"root",storage:n.n(Je).a,whilelist:["cart"]},$e=Object(Be.c)({user:Le,cart:Fe,directory:Xe,shop:Ye}),et=Object(Ge.a)(Ze,$e),tt=[De.a],nt=Object(Be.d)(et,Be.a.apply(void 0,tt)),ct=Object(Ge.b)(nt);s.a.render(Object(c.jsx)(l.a,{store:nt,children:Object(c.jsx)(o.a,{children:Object(c.jsx)(u.a,{persistor:ct,children:Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(_e,{})})})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.60025b81.chunk.js.map