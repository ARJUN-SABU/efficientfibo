(this["webpackJsonpmlpro-io"]=this["webpackJsonpmlpro-io"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(4),a=c.n(s),i=(c(18),c(19),c(20),c(1));var o=function(){return Object(i.jsxs)("div",{className:"wave_bg",children:[Object(i.jsx)("div",{className:"wave wave1"}),Object(i.jsx)("div",{className:"wave wave2"}),Object(i.jsx)("div",{className:"wave wave3"}),Object(i.jsx)("div",{className:"wave wave4"})]})},l=c(12),u=(c(22),c(9)),d=c.n(u),j=c(11),b=c.n(j);function v(e,t){for(var c=0;c<t;c++)void 0===e[c]&&(e[c]=0);return e}function h(e,t){e.length>t.length?t=v(t,e.length):e.length<t.length&&(e=v(e,t.length));for(var c=[],n=0,r=0;r<e.length;r++)e[r]+t[r]+n<10?(c[r]=e[r]+t[r]+n,n=0):(c[r]=(e[r]+t[r]+n)%10,n=1);return n&&c.push(n),c}var f=function(){var e,t,c=Object(n.useRef)(),r=Object(n.useState)("Please Wait..."),s=Object(l.a)(r,2),a=s[0],o=s[1];return Object(n.useEffect)((function(){document.querySelector(".fib").classList.remove("hide"),document.querySelector(".card_content").style.opacity="1",document.querySelector(".card_front").style.opacity="1",document.querySelector(".card_back").style.opacity="1"}),[]),Object(i.jsx)("div",{className:"fib hide",children:Object(i.jsxs)("div",{class:"card_content",children:[Object(i.jsxs)("div",{class:"card_front",children:[Object(i.jsx)("h1",{children:"Nth Fibonacci Term"}),Object(i.jsx)("h3",{children:"F(n) = F(n-1) + F(n-2)"}),Object(i.jsx)("input",{ref:c,type:"text",placeholder:"n"}),Object(i.jsxs)("button",{onClick:function(){document.querySelector(".card_content").style.transform="rotateY(180deg)";var e=function(e){var t=[[0],[1]];if(0==e||1==e)return t[e];for(var c=2;c<=e;c++){var n=h(t[0],t[1]);(t=t.slice(1)).push(n)}return t[1]}(Number(c.current.value));o(function(e){for(var t="",c=e.length-1;c>=0;c--)t+=e[c];return t}(e))},children:["Find ",Object(i.jsx)(d.a,{})]})]}),Object(i.jsxs)("div",{class:"card_back",children:[Object(i.jsxs)("h1",{children:[Object(i.jsxs)("span",{children:[(null===(e=c.current)||void 0===e?void 0:e.value)?null===(t=c.current)||void 0===t?void 0:t.value:0,"th"]})," ","Fibonacci Term is:"," "]}),Object(i.jsx)("p",{children:a}),Object(i.jsx)("button",{onClick:function(){document.querySelector(".card_content").style.transform="rotateY(0deg)"},children:Object(i.jsx)(b.a,{})})]})]})})};var O=function(){return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(f,{}),Object(i.jsx)(o,{})]})};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.43270472.chunk.js.map