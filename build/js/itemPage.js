(()=>{"use strict";var e,t={619:(e,t,n)=>{n(767);var a=n(540),i=n(338),r=n(293),c=n(191);const o=function(){var e=document.querySelectorAll(".sections__tab"),t=document.querySelector(".sections__tabs"),n=document.querySelectorAll(".sections__content");function a(e){var n=e.getBoundingClientRect().width,a=e.getBoundingClientRect().left-t.getBoundingClientRect().left;t.style.setProperty("--after-width","".concat(n,"px")),t.style.setProperty("--indicator-left","".concat(a,"px"))}var i=document.querySelector(".sections__tab_active");i&&a(i),e.forEach((function(t,i){t.addEventListener("click",(function(){e.forEach((function(e){e.classList.remove("sections__tab_active")})),this.classList.add("sections__tab_active"),a(this),n.forEach((function(e){e.classList.remove("sections__content_active"),e.querySelectorAll(".product_card").forEach((function(e){e.classList.remove("animate__animated","animate__fadeInUp","animate__fadeInLeft")}))}));var t=n[i];t.classList.add("sections__content_active"),t.querySelectorAll(".product_card").forEach((function(e){e.classList.add("animate__animated","animate__fadeInLeft")}))}))}))};var s=n(163);function l(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var u=(0,a.createContext)(),_=function(e){var t,n,i=e.children,r=(t=(0,a.useState)((function(){var e=localStorage.getItem("wishlistItems");return e?JSON.parse(e):[]})),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,r,c,o=[],s=!0,l=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(a=r.call(n)).done)&&(o.push(a.value),o.length!==t);s=!0);}catch(e){l=!0,i=e}finally{try{if(!s&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw i}}return o}}(t,n)||l(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=r[0],o=r[1];return(0,a.useEffect)((function(){var e=function(e){"wishlistItems"===e.key&&o(JSON.parse(e.newValue))};return window.addEventListener("storage",e),function(){window.removeEventListener("storage",e)}}),[]),a.createElement(u.Provider,{value:{wishlistItems:c,addToWishlist:function(e){o((function(t){if(t.some((function(t){return t.id===e.id})))return t;var n=[].concat(function(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t),[e]);return localStorage.setItem("wishlistItems",JSON.stringify(n)),n}))},removeFromWishlist:function(e){o((function(t){var n=t.filter((function(t){return t.id!==e.id}));return localStorage.setItem("wishlistItems",JSON.stringify(n)),n}))}}},i)};function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,r,c,o=[],s=!0,l=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(a=r.call(n)).done)&&(o.push(a.value),o.length!==t);s=!0);}catch(e){l=!0,i=e}finally{try{if(!s&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}const v=function(){var e=d((0,a.useState)(null),2),t=e[0],n=e[1],i=d((0,a.useState)(!1),2),r=i[0],c=i[1],o=d((0,a.useState)(!1),2),l=o[0],m=o[1],_=d((0,a.useState)(!1),2),f=_[0],v=_[1],p=(0,a.useContext)(s.M),E=p.cartItems,y=p.addToCart,g=p.removeFromCart,N=(0,a.useContext)(u),b=N.wishlistItems,h=N.addToWishlist,S=N.removeFromWishlist;return(0,a.useEffect)((function(){var e=localStorage.getItem("selectedProduct");if(e){var t=JSON.parse(e);n(t),c(E.some((function(e){return e.id===t.id}))),m(b.some((function(e){return e.id===t.id})))}}),[E,b]),t?a.createElement("div",{className:"container"},a.createElement("div",{className:"item__img"},a.createElement("img",{src:t.itemImg,alt:t.name})),a.createElement("div",{className:"item__main_info"},a.createElement("div",{className:"item__name"},t.name),a.createElement("div",{className:"item__price"},t.price),a.createElement("div",{className:"item__specifications"},a.createElement("div",{className:"item__specification"},a.createElement("div",{className:"item__specification_icon"},a.createElement("img",{src:"/icons/Screensize.svg",alt:"screen"})),a.createElement("div",{className:"item__specification_info"},a.createElement("div",{className:"item__specification_info_title"},"Screen size"),a.createElement("div",{className:"item__specifications_info_descr"},'6.7"'))),a.createElement("div",{className:"item__specification"},a.createElement("div",{className:"item__specification_icon"},a.createElement("img",{src:"/icons/cpu.svg",alt:"cpu"})),a.createElement("div",{className:"item__specification_info"},a.createElement("div",{className:"item__specification_info_title"},"CPU"),a.createElement("div",{className:"item__specification_info_descr"},"Apple A16 Bionic"))),a.createElement("div",{className:"item__specification"},a.createElement("div",{className:"item__specification_icon"},a.createElement("img",{src:"/icons/cores.svg",alt:"cores"})),a.createElement("div",{className:"item__specification_info"},a.createElement("div",{className:"item__specification_info_title"},"Number of Cores"),a.createElement("div",{className:"item__specification_info_descr"},"6"))),a.createElement("div",{className:"item__specification"},a.createElement("div",{className:"item__specification_icon"},a.createElement("img",{src:"/icons/camera_item.svg",alt:"camera"})),a.createElement("div",{className:"item__specification_info"},a.createElement("div",{className:"item__specification_info_title"},"Main camera"),a.createElement("div",{className:"item__specification_info_descr"},"48-12 -12 MP"))),a.createElement("div",{className:"item__specification"},a.createElement("div",{className:"item__specification_icon"},a.createElement("img",{src:"/icons/front-camera_item.svg",alt:"front-camera"})),a.createElement("div",{className:"item__specification_info"},a.createElement("div",{className:"item__specification_info_title"},"Front-camera"),a.createElement("div",{className:"item__specification_info_descr"},"12 MP"))),a.createElement("div",{className:"item__specification"},a.createElement("div",{className:"item__specification_icon"},a.createElement("img",{src:"/icons/battery.svg",alt:"battery"})),a.createElement("div",{className:"item__specification_info"},a.createElement("div",{className:"item__specification_info_title"},"Battery capacity"),a.createElement("div",{className:"item__specification_info_descr"},"4323 mAh")))),a.createElement("div",{className:"item__buttons"},a.createElement("button",{className:"button button_black button_item ".concat(l?"wishlist_added":""),onClick:function(e){e.stopPropagation(),t&&(l?S(t):h(t),m(!l))}},l?"Remove from Wishlist":"Add to Wishlist"),a.createElement("button",{className:"button button_item ".concat(r?"button_added":"button_bg"),onClick:function(e){e.stopPropagation(),t&&(r?g(t):y(t),c(!r))},onMouseEnter:function(){return v(!0)},onMouseLeave:function(){return v(!1)}},r?f?"Remove from Cart":"Added to Cart":"Add to Cart")),a.createElement("div",{className:"item__advantages"},a.createElement("div",{className:"item_advantage"},a.createElement("div",{className:"item_advantage_icon"},a.createElement("img",{src:"/icons/delivery.svg",alt:"delivery"})),a.createElement("div",{className:"item_advantage_text"},a.createElement("div",{className:"item_advantage_title"},"Free Delivery"),a.createElement("div",{className:"item_advantage_descr"},"1-2 day"))),a.createElement("div",{className:"item_advantage"},a.createElement("div",{className:"item_advantage_icon"},a.createElement("img",{src:"/icons/stock.svg",alt:"stock"})),a.createElement("div",{className:"item_advantage_text"},a.createElement("div",{className:"item_advantage_title"},"In Stock"),a.createElement("div",{className:"item_advantage_descr"},"Today"))),a.createElement("div",{className:"item_advantage"},a.createElement("div",{className:"item_advantage_icon"},a.createElement("img",{src:"/icons/guarantee.svg",alt:"guarantee"})),a.createElement("div",{className:"item_advantage_text"},a.createElement("div",{className:"item_advantage_title"},"Guaranteed"),a.createElement("div",{className:"item_advantage_descr"},"1 year")))))):a.createElement("div",null,"Loading...")};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}const E=function(){var e,t,n=(e=(0,a.useState)(null),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,r,c,o=[],s=!0,l=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(a=r.call(n)).done)&&(o.push(a.value),o.length!==t);s=!0);}catch(e){l=!0,i=e}finally{try{if(!s&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=n[0],r=n[1];return(0,a.useEffect)((function(){var e=localStorage.getItem("selectedProduct");e&&r(JSON.parse(e))}),[]),(0,a.useEffect)((function(){i&&o()}),[i]),i?a.createElement("div",{className:"container"},a.createElement("ul",{className:"sections__tabs"},a.createElement("li",{className:"sections__tab sections__tab_active"},"Description"),a.createElement("li",{className:"sections__ta"},"Reviews(Soon)")),a.createElement("div",{className:"sections__content sections__content_active sections__content_text"},a.createElement("div",{className:"sections__content_title"},"Description"),a.createElement("div",{className:"sections__content_descr"},i.description)),a.createElement("div",{className:"sections__content sections__content_text"},a.createElement("div",{className:"sections__content_title"},"Reviews"),a.createElement("div",{className:"sections__content_descr"},"No reviews yet."))):a.createElement("div",null,"Loading...")};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".header"),t=document.querySelector(".footer"),n=document.querySelector(".item"),l=document.querySelector(".sections");e&&t&&((0,i.H)(e).render(a.createElement(r.A,{sectionClass:"path"})),(0,i.H)(t).render(a.createElement(c.A,null))),n&&(0,i.H)(n).render(a.createElement(s.e,null,a.createElement(_,null,a.createElement(v,null)))),l&&(0,i.H)(l).render(a.createElement(E,null)),o()}))}},n={};function a(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,n,i,r)=>{if(!n){var c=1/0;for(m=0;m<e.length;m++){for(var[n,i,r]=e[m],o=!0,s=0;s<n.length;s++)(!1&r||c>=r)&&Object.keys(a.O).every((e=>a.O[e](n[s])))?n.splice(s--,1):(o=!1,r<c&&(c=r));if(o){e.splice(m--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[n,i,r]},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={215:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var i,r,[c,o,s]=n,l=0;if(c.some((t=>0!==e[t]))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(s)var m=s(a)}for(t&&t(n);l<c.length;l++)r=c[l],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(m)},n=self.webpackChunkyour_project_name=self.webpackChunkyour_project_name||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=a.O(void 0,[39,839],(()=>a(619)));i=a.O(i)})();