(window["webpackJsonpbaseliner-extension"]=window["webpackJsonpbaseliner-extension"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(3),o=t.n(c),l=(t(9),t(1)),i=(t(10),function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,a,t,r){return a+a+t+t+r+r}));var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}),s=function(e,a,t){var r=Number(e).toString(16),n=Number(a).toString(16),c=Number(t).toString(16);return"#".concat(2!==r.length?"".concat(r).concat(r):r).concat(2!==n.length?"".concat(n).concat(n):n).concat(2!==c.length?"".concat(c).concat(c):c)};var u=function(){var e=chrome&&chrome.tabs,a=n.a.useState(!1),t=Object(l.a)(a,2),r=t[0],c=t[1],o=n.a.useState("loading..."),u=Object(l.a)(o,2),d=u[0],m=u[1],g=n.a.useState("#ff0000"),b=Object(l.a)(g,2),v=b[0],p=b[1],h=n.a.useState(100),f=Object(l.a)(h,2),E=f[0],y=f[1],w=n.a.useState(8),z=Object(l.a)(w,2),S=z[0],N=z[1],B=n.a.useState("#00ff00"),O=Object(l.a)(B,2),j=O[0],x=O[1],T=n.a.useState(100),C=Object(l.a)(T,2),k=C[0],H=C[1],V=n.a.useState(8),F=Object(l.a)(V,2),I=F[0],$=F[1];function G(e){"vertical"===e.currentTarget.dataset.grid?p(e.currentTarget.value):x(e.currentTarget.value)}function J(e){"vertical"===e.currentTarget.dataset.grid?N(e.currentTarget.value):$(e.currentTarget.value)}function R(e){"vertical"===e.currentTarget.dataset.grid?y(e.currentTarget.value):H(e.currentTarget.value)}return n.a.useEffect((function(){e&&(chrome.tabs.executeScript(null,{file:"/baseliner.js"}),chrome.runtime.onMessage.addListener((function(e){switch(null===e||void 0===e?void 0:e.status){case"ready":m("Baseliner extension ready"),c(!0);break;case"update":m("Baseliner styles updated");break;case"load":m("Baseliner loaded from storage"),c(!0),x(s(e.storage.horizontalRed,e.storage.horizontalGreen,e.storage.horizontalBlue)),H(e.storage.horizontalOpacity),$(e.storage.horizontalBaseline),x(s(e.storage.verticalRed,e.storage.verticalGreen,e.storage.verticalBlue)),H(e.storage.verticalOpacity),$(e.storage.verticalBaseline);break;default:console.error("No recognized status message",e)}})))}),[e]),n.a.useEffect((function(){if(e&&r){var a=i(v),t={red:a.r,green:a.g,blue:a.b,opacity:E,baseline:S},n=i(j),c={red:n.r,green:n.g,blue:n.b,opacity:k,baseline:I};chrome.tabs.executeScript({code:"Baseliner.generateStyles(".concat(t.red,", ").concat(t.blue,", ").concat(t.green,", ").concat(t.opacity," ,").concat(t.baseline,", ").concat(c.red,", ").concat(c.blue,", ").concat(c.green,", ").concat(c.opacity," ,").concat(c.baseline,")")})}}),[r,v,j,E,k,S,I]),n.a.createElement("div",{className:"Popup"},n.a.createElement("p",null,"Status: ",d),n.a.createElement("div",{className:"grid vertical"},n.a.createElement("h1",null,"Vertical"),n.a.createElement("div",{className:"row"},n.a.createElement("label",{htmlFor:"colourVertical"},"Colour"),n.a.createElement("input",{type:"color",id:"colourVertical",value:v,"data-grid":"vertical",onChange:G})),n.a.createElement("div",{className:"row"},n.a.createElement("label",{htmlFor:"opacityVertical"},"Opacity"),n.a.createElement("input",{type:"range",min:0,max:100,id:"opacityVertical",value:E,"data-grid":"vertical",onChange:R}),n.a.createElement("span",null,E,"%")),n.a.createElement("div",{className:"row"},n.a.createElement("label",{htmlFor:"baselineVertical"},"Baseline"),n.a.createElement("input",{type:"number",min:2,id:"baselineVertical",value:S,"data-grid":"vertical",onChange:J}))),n.a.createElement("div",{className:"grid horizontal"},n.a.createElement("h1",null,"Horizontal"),n.a.createElement("div",{className:"row"},n.a.createElement("label",{htmlFor:"colourHorizontal"},"Colour"),n.a.createElement("input",{type:"color",id:"colourHorizontal",value:j,"data-grid":"horizontal",onChange:G})),n.a.createElement("div",{className:"row"},n.a.createElement("label",{htmlFor:"opacityHorizontal"},"Opacity"),n.a.createElement("input",{type:"range",min:0,max:100,id:"opacityHorizontal",value:k,"data-grid":"horizontal",onChange:R}),n.a.createElement("span",null,k,"%")),n.a.createElement("div",{className:"row"},n.a.createElement("label",{htmlFor:"baselineHorizontal"},"Baseline"),n.a.createElement("input",{type:"number",min:2,id:"baselineHorizontal",value:I,"data-grid":"horizontal",onChange:J}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.7651c895.chunk.js.map