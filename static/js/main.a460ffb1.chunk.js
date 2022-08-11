(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(8),a=n.n(i),s=n(2),r=n(3),o=n(5),c=n(4),l=n(1),p=n.n(l),m=(n(13),n(6)),u=(n(14),n(0)),h=[],d=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={leftSide:0,stopPrevButton:!0,stopNextButton:!1},t.handleNextButton=function(){var e=t.props,n=e.step,i=e.itemWidth,a=e.infinite,s=e.frameSize,r=t.state.leftSide,o=i*n,c=i*h.length;t.setState((function(t){return{leftSide:t.leftSide-o}})),r-o<0&&t.setState({stopPrevButton:!1}),a&&(t.setState({stopNextButton:!1}),h=[].concat(Object(m.a)(h),Object(m.a)(t.props.images))),!a&&r-o-s*i<=-c&&(t.setState({stopNextButton:!0}),t.setState({leftSide:s*i-c}))},t.handlePrevButton=function(){var e=t.props,n=e.step,i=e.itemWidth,a=t.state.leftSide,s=i*n,r=i*h.length;a+2*s>-r&&t.setState({stopNextButton:!1}),a+s>=0&&(t.setState({stopPrevButton:!0}),t.setState({leftSide:0})),a+s<0&&t.setState((function(t){return{leftSide:t.leftSide+s}}))},t.checkPosition=function(){t.state.leftSide<-t.props.itemWidth*h.length&&(t.setState({leftSide:0}),t.setState({stopPrevButton:!0}),t.setState({stopNextButton:!1}))},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.frameSize,n=t.itemWidth,i=t.animationDuration,a=t.infinite,s=t.error,r=this.state,o=r.leftSide,c=r.stopPrevButton,l=r.stopNextButton;return a||(h=Object(m.a)(this.props.images),this.checkPosition()),Object(u.jsxs)("div",{className:"Carousel",children:[Object(u.jsx)("div",{className:"Carousel__wrapper",style:{width:n*e},children:Object(u.jsx)("ul",{className:"Carousel__list",style:{left:o,transition:"left ".concat(i,"ms")},children:h.map((function(t,e){return Object(u.jsx)("li",{children:Object(u.jsx)("img",{src:"./img/".concat(e%10+1,".png"),alt:"".concat(e+1),style:{width:n}},+new Date)},t)}))})}),Object(u.jsxs)("div",{className:"Carousel__button-group",children:[Object(u.jsx)("button",{type:"button",className:"Carousel__button",disabled:s||c,onClick:this.handlePrevButton,children:"\u25c0\u25c0"}),Object(u.jsx)("button",{type:"button","data-cy":"next",className:"Carousel__button",disabled:a?s:s||l,onClick:this.handleNextButton,children:"\u25b6\u25b6"})]})]})}}]),n}(p.a.Component),b=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1,error:!1},t.handleChange=function(e){var n=e.target,i=n.name,a=n.value,s=n.min,r=n.max,o=n.checked;if(+a>=+s&&+a<=+r||"infinite"===i)switch(t.setState({error:!1}),i){case"itemWidth":t.setState({itemWidth:+a});break;case"frameSize":t.setState({frameSize:+a});break;case"step":t.setState({step:+a});break;case"animationDuration":t.setState({animationDuration:+a});break;case"infinite":t.setState({infinite:o});break;default:return 0}else t.setState({error:!0});return t.state},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.step,i=t.frameSize,a=t.itemWidth,s=t.animationDuration,r=t.infinite,o=t.error;return Object(u.jsxs)("div",{className:"App page__App",children:[Object(u.jsxs)("h1",{className:"App__title","data-cy":"title",children:["Carousel with"," ",e.length," ","images"]}),Object(u.jsx)(d,{images:e,step:n,frameSize:i,itemWidth:a,animationDuration:s,infinite:r,error:o}),Object(u.jsxs)("form",{action:"#",method:"GET",className:"Option App__Option",children:[o?Object(u.jsx)("h2",{className:"Option__error",children:"Enter correct values"}):Object(u.jsx)("h2",{children:"Select options"}),Object(u.jsxs)("label",{className:"Option__title",children:["Picture size (50 - 500)px",Object(u.jsx)("input",{name:"itemWidth",className:"Option__input",type:"number",placeholder:String(a),min:"50",max:"500",onChange:this.handleChange})]}),Object(u.jsxs)("label",{className:"Option__title",children:["Amount pictures to show (1 - 10)",Object(u.jsx)("input",{name:"frameSize",className:"Option__input",type:"number",placeholder:String(i),min:"1",max:"10",onChange:this.handleChange})]}),Object(u.jsxs)("label",{className:"Option__title",children:["Amount pictures to scroll (1 - 10)",Object(u.jsx)("input",{name:"step",className:"Option__input",type:"number",placeholder:String(n),min:"1",max:"10",onChange:this.handleChange})]}),Object(u.jsxs)("label",{className:"Option__title",children:["Time to scroll (0 - 5000)ms",Object(u.jsx)("input",{name:"animationDuration",className:"Option__input",type:"number",placeholder:String(s),min:"0",max:"5000",onChange:this.handleChange})]}),Object(u.jsxs)("label",{className:"Option__title",children:["Infinite scroll",Object(u.jsx)("input",{name:"infinite",className:"Option__input",type:"checkbox",checked:r,onChange:this.handleChange})]})]})]})}}]),n}(p.a.Component),j=b;a.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a460ffb1.chunk.js.map