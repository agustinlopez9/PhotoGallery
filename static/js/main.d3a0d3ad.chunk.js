(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[0],{21:function(e,t,s){},22:function(e,t,s){},23:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),l=s(15),a=s.n(l),i=(s(21),s(5)),r=(s(22),s(23),s(0));function o(e){var t=document.getElementById("title"),s=document.getElementById("form-search"),c=document.getElementsByClassName("img-block"),l=document.getElementsByClassName("info-text")[0];return Object(r.jsx)(n.a.Fragment,{children:Object(r.jsx)("div",{className:"img-container",id:e.reference,children:Object(r.jsxs)("div",{className:"img-block",id:e.id,children:[Object(r.jsx)("div",{className:"closeMenu",onClick:function(){return function(e,n){for(var a=document.getElementById(e),i=document.getElementById(n),r=0;r<c.length;r++)c[r].classList.remove("block-blur");i.getElementsByClassName("closeMenu")[0].style.display="none",t.style.filter="blur(0px)",s.style.filter="blur(0px)",l.style.filter="blur(0px)",a.classList.replace("block-active","block-hide"),i.classList.replace("active-container","hide-container")}(e.id,e.reference)},children:Object(r.jsx)("i",{className:"fas fa-times-circle"})}),Object(r.jsx)("img",{src:e.img,alt:e.id,onClick:function(){return function(e,n){for(var a=document.getElementById(e),i=document.getElementById(n),r=0;r<c.length;r++)c[r]!==a&&c[r].classList.add("block-blur");i.getElementsByClassName("closeMenu")[0].style.display="block",t.style.filter="blur(7.5px)",s.style.filter="blur(7.5px)",l.style.filter="blur(7.5px)",a.classList.remove("block-hide"),a.classList.add("block-active"),i.classList.remove("hide-container"),i.classList.add("active-container")}(e.id,e.reference)}}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{className:"fas fa-heart"}),e.likes]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{className:"far fa-eye"}),e.views]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{className:"fas fa-download"}),e.downloads]})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("b",{children:"Photo by: "}),e.user]}),Object(r.jsx)("ul",{children:e.tags.split(",").map((function(e,t){return Object(r.jsxs)("li",{className:"tag",children:["#",e.trim()]},t)}))})]})})})}var d=s(16),u=s.n(d).a.create({baseURL:"https://pixabay.com/api/"});function m(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),s=t[0],l=t[1],a=Object(c.useState)([]),d=Object(i.a)(a,2),m=d[0],b=d[1],j=Object(c.useState)(!0),f=Object(i.a)(j,2),h=f[0],x=f[1],g=function(){document.getElementsByClassName("info-text")[0].style.display="none",u.get("?key=24176762-411fd9d7d2ee8080115abeeea&q="+s+"&image_type=photo").then((function(e){b(e.data.hits),x(!0),document.getElementsByClassName("info-text")[0].style.display="block"})).catch((function(e){return console.log(e)}))};return Object(r.jsxs)(n.a.Fragment,{children:[Object(r.jsx)("h1",{id:"title",children:"Photo gallery"}),Object(r.jsxs)("form",{id:"form-search",onSubmit:function(e){e.preventDefault(),x(!1),g()},children:[Object(r.jsx)("input",{placeholder:"Search a term",id:"searchText",type:"text",onChange:function(e){l(e.target.value)}}),Object(r.jsx)("button",{type:"button",className:"btn-style",onClick:g,children:"Search"})]}),0===m.length?Object(r.jsx)("p",{className:"info-text",children:"No results found"}):Object(r.jsx)("p",{className:"info-text",children:"Results:"}),Object(r.jsx)("div",{id:"container-imgs",children:h?m.map((function(e,t){return Object(r.jsx)(o,{reference:t,id:e.id,img:e.largeImageURL,likes:e.likes,views:e.views,downloads:e.downloads,tags:e.tags,user:e.user},t)})):"Loading..."})]})}var b=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(m,{})})};a.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d3a0d3ad.chunk.js.map