(()=>{"use strict";var e,t={860:(e,t,r)=>{r(767);var n=r(540),o=r(338),i=r(293),a=r(191),c=r(163);function u(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=(0,n.createContext)(),d=function(e){var t,r,o=e.children,i=(t=(0,n.useState)((function(){var e=localStorage.getItem("wishlistItems");return e?JSON.parse(e):[]})),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,r)||u(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],c=i[1];return(0,n.useEffect)((function(){var e=function(e){"wishlistItems"===e.key&&c(JSON.parse(e.newValue))};return window.addEventListener("storage",e),function(){window.removeEventListener("storage",e)}}),[]),n.createElement(s.Provider,{value:{wishlistItems:a,addToWishlist:function(e){c((function(t){if(t.some((function(t){return t.id===e.id})))return t;var r=[].concat(function(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t),[e]);return localStorage.setItem("wishlistItems",JSON.stringify(r)),r}))},removeFromWishlist:function(e){c((function(t){var r=t.filter((function(t){return t.id!==e.id}));return localStorage.setItem("wishlistItems",JSON.stringify(r)),r}))}}},o)};function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const f=function(e){var t=e.product,r=(0,n.useContext)(c.M),o=r.cartItems,i=r.addToCart,a=r.removeFromCart,u=(0,n.useContext)(s),l=u.wishlistItems,d=u.addToWishlist,p=u.removeFromWishlist,f=m((0,n.useState)(!1),2),h=f[0],g=f[1],v=m((0,n.useState)(!1),2),y=v[0],b=v[1],S=m((0,n.useState)(!1),2),_=S[0],w=S[1];return(0,n.useEffect)((function(){g(o.some((function(e){return e.id===t.id}))),b(l.some((function(e){return e.id===t.id})))}),[o,l,t.id]),n.createElement("div",{className:"product_card",onClick:function(){localStorage.setItem("selectedProduct",JSON.stringify(t)),window.location.href="/html/ItemPage.html"}},n.createElement("div",{className:"product_card_content"},n.createElement("div",{className:"product_card_favourite ".concat(y?"favourite_added":""),onClick:function(e){e.stopPropagation(),y?p(t):d(t),b(!y)}},n.createElement("img",{src:"/icons/heart.svg",alt:"heart"})),n.createElement("img",{src:t.imgSrc,alt:t.name,className:"product_card_img"}),n.createElement("button",{className:"button_bg ".concat(h?"button_added":"button_bg"),onClick:function(e){e.stopPropagation(),h?a(t):i(t),g(!h)},onMouseEnter:function(){return w(!0)},onMouseLeave:function(){return w(!1)}},h?_?"Remove from Cart":"Added to Cart":"Add to Cart")),n.createElement("div",{className:"product_card_footer"},n.createElement("div",{className:"product_card_name"},t.name),n.createElement("div",{className:"product_card_price"},t.price)))},h=[{id:1,imgSrc:"/img/Iphone_14_pro.png",name:"Skullcandy - Crusher anc 2 wireless headphones",price:"$299.99",brand:"Apple",itemImg:"/img/Iphone_14_pro_item.png",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dicta impedit accusamus cum officiis saepe dolor molestias autem adipisci? Nobis ea quas quis omnis molestias optio tenetur suscipit natus excepturi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus alias asperiores totam dolorum, corporis blanditiis placeat. Eligendi delectus nemo, voluptate quasi at odit, enim, temporibus exercitationem inventore provident natus omnis?"},{id:2,imgSrc:"/img/Iphone_14_pro.png",name:"Bestseller Product 1",itemImg:"/img/Iphone_14_pro_item.png",price:"$199.99",brand:"Apple"},{id:3,imgSrc:"/img/ipad.png",name:"Skullcandy - Crusher anc 2 wireless headphones",price:"$299.99",brand:"Apple"},{id:4,imgSrc:"/img/ipad.png",name:"Skullcandy - Crusher anc 2 wireless headphones",price:"$229.99",brand:"Apple"},{id:5,imgSrc:"/img/ipad.png",name:"Skullcandy - Crusher anc 2 wireless headphones",price:"$245.99",brand:"Apple"},{id:6,imgSrc:"/img/photo.png",name:"Skullcandy - Crusher anc 2 wireless headphones",price:"$299.99",brand:"Samsung"},{id:7,imgSrc:"/img/Iphone_14_pro.png",name:"Bestseller Product 1",price:"$199.99",brand:"Apple"},{id:8,imgSrc:"/img/Iphone_14_pro.png",name:"Bestseller Product 1",price:"$199.99",brand:"Apple"}];var g=[1,2,3,4,5,6,7,8],v={},y=function(e,t){var r=document.querySelector(e);r&&(v[e]||(v[e]=(0,o.H)(r)),v[e].render(n.createElement(c.e,null,n.createElement(d,null,n.createElement(n.Fragment,null,t.map((function(e){var t=function(e){return h.find((function(t){return t.id===e}))}(e);return t?n.createElement(f,{key:e,product:t}):null})))))))};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".header"),t=document.querySelector(".footer"),r=document.querySelector(".products__product"),c=document.querySelector(".products__filters");e&&t&&((0,o.H)(e).render(n.createElement(i.A,{sectionClass:"path"})),(0,o.H)(t).render(n.createElement(a.A,null))),r&&c&&(y(".products__product",g),c.querySelectorAll('input[type="checkbox"]').forEach((function(e){e.addEventListener("change",b)})))}));var b=function(){var e,t=Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map((function(e){return e.labels[0].textContent}));e=0===t.length?g:g.filter((function(e){var r=h.find((function(t){return t.id===e}));return t.includes(r.brand)})),y(".products__product",e)}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(s=0;s<e.length;s++){for(var[r,o,i]=e[s],c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={213:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,c,u]=r,l=0;if(a.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var s=u(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self.webpackChunkyour_project_name=self.webpackChunkyour_project_name||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[39,839],(()=>n(860)));o=n.O(o)})();