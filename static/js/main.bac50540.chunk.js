(this.webpackJsonpcart=this.webpackJsonpcart||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(6),i=a.n(r),s=(a(12),a(1)),o=a(2),l=a(4),m=a(3),u=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).increaseQuantity=function(){e.setState((function(e){return{qty:e.qty+1}}))},e.decreaseQuantity=function(){e.state.qty<=1||e.setState((function(e){return{qty:e.qty-1}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.product,t=e.price,a=e.qty,c=e.title;return n.a.createElement("div",{className:"cart-item"},n.a.createElement("div",{className:"left-block"},n.a.createElement("img",{style:p.image})),n.a.createElement("div",{className:"right-block"},n.a.createElement("div",{style:{fontSize:25}},c),n.a.createElement("div",{style:{fontSize:18,color:"#777",marginTop:5}},t),n.a.createElement("div",{style:{fontSize:18,color:"#777",marginTop:5}},"Qty : ",a),n.a.createElement("div",{className:"cart-item-actions"},n.a.createElement("img",{className:"action-icons",src:"https://image.flaticon.com/icons/svg/864/864378.svg",alt:"Increase",onClick:this.increaseQuantity}),n.a.createElement("img",{className:"action-icons",src:"https://image.flaticon.com/icons/svg/864/864373.svg",alt:"Decrease",onClick:this.decreaseQuantity}),n.a.createElement("img",{className:"action-icons",src:"https://image.flaticon.com/icons/svg/1214/1214428.svg",alt:"Delete"}))))}}]),a}(n.a.Component),p={image:{width:110,height:110,borderRadius:4,backgroundColor:"#ccc"}},d=u,v=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={products:[{price:999,title:"Phone",qty:1,img:"",id:1},{price:99,title:"Watch",qty:10,img:"",id:2},{price:99999,title:"Laptop",qty:1,img:"",id:3}]},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.products;return n.a.createElement("div",{className:"cart"},e.map((function(e){return n.a.createElement(d,{product:e})})))}}]),a}(n.a.Component);var g=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"CART"),n.a.createElement(v,null))};i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.bac50540.chunk.js.map