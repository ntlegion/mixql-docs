!function(){"use strict";var n,e,t,a=/^sect[0-5](?=$| )/,i=document.querySelector(".nav-container"),o=document.querySelector(".toolbar .nav-toggle"),r=(o.addEventListener("click",function(e){if(o.classList.contains("is-active"))return u(e);v(e);e=document.documentElement;/mobi/i.test(window.navigator.userAgent)&&(Math.round(parseFloat(window.getComputedStyle(e).minHeight))!==window.innerHeight?e.style.setProperty("--vh",window.innerHeight/100+"px"):e.style.removeProperty("--vh"));e.classList.add("is-clipped--nav"),o.classList.add("is-active"),i.classList.add("is-active"),e.addEventListener("click",u)}),i.addEventListener("click",v),i.querySelector(".nav")),s=r.querySelector("[data-panel=menu]"),c={encroachingElement:document.querySelector("footer.footer")};if(window.addEventListener("load",m),window.addEventListener("resize",m),!s)return m({});function l(e,t){t&&p(s,".nav-item.is-active").forEach(function(e){e.classList.remove("is-current-path","is-current-page","is-active")});for(var n=e;(n=n.parentNode)&&n!==s;)n.classList.contains("nav-item")&&n.classList.add("is-current-path","is-active");e.classList.add("is-current-page","is-active")}function d(){var e,t,n,i;this.classList.toggle("is-active")&&(e=parseFloat(window.getComputedStyle(this).marginTop),t=this.getBoundingClientRect(),n=s.getBoundingClientRect(),0<(i=Math.round(t.bottom-n.top-n.height+e))&&(s.scrollTop+=Math.min(Math.round(t.top-n.top-e),i)))}function u(e){v(e);e=document.documentElement;e.classList.remove("is-clipped--nav"),o.classList.remove("is-active"),i.classList.remove("is-active"),e.removeEventListener("click",u)}function v(e){e.stopPropagation()}function g(e){var t=window.location.hash;if(t){(t=t.indexOf("%")?decodeURIComponent(t):t).indexOf('"')&&(t=t.replace(/(?=")/g,"\\"));var n=!e&&s.querySelector('.nav-link[href="'+t+'"]');if(n)return n.parentNode;e=document.getElementById(t.slice(1));if(e)for(var i=document.querySelector("article.doc"),o=e;(o=o.parentNode)&&o!==i;){var r=o.id;if((r=r||a.test(o.className)&&(o.firstElementChild||{}).id)&&(n=s.querySelector('.nav-link[href="#'+r+'"]')))return n.parentNode}}}function h(e,t){var n=e.getBoundingClientRect();e.scrollHeight!==Math.round(n.height)&&(t=t.querySelector(".nav-link").getBoundingClientRect(),e.scrollTop+=Math.round(t.top-n.top-.5*(n.height-t.height)))}function p(e,t){return[].slice.call(e.querySelectorAll(t))}function m(e){window.removeEventListener("scroll",f),"fixed"!==window.getComputedStyle(i).position&&(c.availableHeight=window.innerHeight,c.preferredHeight=i.getBoundingClientRect().height,f()&&"resize"!==e.type&&n&&h(s,n),window.addEventListener("scroll",f))}function f(){var e=s&&s.scrollTop+s.offsetHeight,t=c.availableHeight-c.encroachingElement.getBoundingClientRect().top,t=0<t?r.style.height!==(r.style.height=Math.max(Math.round(c.preferredHeight-t),0)+"px"):!!r.style.removeProperty("height");return s&&(s.scrollTop=e-s.offsetHeight),t}s.classList.contains("is-loading")?((n=g()||s.querySelector(".is-current-url"))?(l(n),h(s,n)):s.scrollTop=0,s.classList.remove("is-loading")):(e=n=s.querySelector(".is-current-page"))&&!e.classList.contains("is-provisional")||!(e=g(!0))||(t=!!n,l(n=e,t),h(s,n)),m({}),s.querySelector(".nav-menu-toggle").addEventListener("click",function(){var t=!this.classList.toggle("is-active");p(s,".nav-item > .nav-item-toggle").forEach(function(e){t?e.parentElement.classList.remove("is-active"):e.parentElement.classList.add("is-active")}),n?(t&&l(n),h(s,n)):s.scrollTop=0}),p(s,".nav-item-toggle").forEach(function(e){e.addEventListener("click",d.bind(e.parentElement));var t=e.nextElementSibling;t&&t.classList.contains("nav-text")&&(t.style.cursor="pointer",t.addEventListener("click",d.bind(e.parentElement)))}),r.querySelector("[data-panel=explore] .context").addEventListener("click",function(){p(r,"[data-panel]").forEach(function(e){e.classList.toggle("is-active")})}),s.addEventListener("mousedown",function(e){1<e.detail&&e.preventDefault()}),s.querySelector('.nav-link[href^="#"]')&&window.addEventListener("hashchange",function(){var e=g()||s.querySelector(".is-current-url");e&&e!==n&&(l(n=e,!0),h(s,n))})}();
!function(){"use strict";var e=document.querySelector("aside.toc.sidebar");if(e){if(document.querySelector("body.-toc"))return e.parentNode.removeChild(e);var t=parseInt(e.dataset.levels||2,10);if(!(t<0)){for(var o="article.doc",d=document.querySelector(o),n=[],i=0;i<=t;i++){var r=[o];if(i){for(var c=1;c<=i;c++)r.push((2===c?".sectionbody>":"")+".sect"+c);r.push("h"+(i+1)+"[id]")}else r.push("h1[id].sect0");n.push(r.join(">"))}m=n.join(","),f=d.parentNode;var a,s=[].slice.call((f||document).querySelectorAll(m));if(!s.length)return e.parentNode.removeChild(e);var l={},u=s.reduce(function(e,t){var o=document.createElement("a"),n=(o.textContent=t.textContent,l[o.href="#"+t.id]=o,document.createElement("li"));return n.dataset.level=parseInt(t.nodeName.slice(1),10)-1,n.appendChild(o),e.appendChild(n),e},document.createElement("ul")),f=e.querySelector(".toc-menu"),m=(f||((f=document.createElement("div")).className="toc-menu"),document.createElement("h3")),e=(m.textContent=e.dataset.title||"Contents",f.appendChild(m),f.appendChild(u),!document.getElementById("toc")&&d.querySelector("h1.page ~ :not(.is-before-toc)"));e&&((m=document.createElement("aside")).className="toc embedded",m.appendChild(f.cloneNode(!0)),e.parentNode.insertBefore(m,e)),window.addEventListener("load",function(){p(),window.addEventListener("scroll",p)})}}function p(){var n,i,t,e=window.pageYOffset,o=1.15*h(document.documentElement,"fontSize"),r=d.offsetTop;e&&window.innerHeight+e+2>=document.documentElement.scrollHeight?(a=Array.isArray(a)?a:Array(a||0),n=[],i=s.length-1,s.forEach(function(e,t){var o="#"+e.id;t===i||e.getBoundingClientRect().top+h(e,"paddingTop")>r?(n.push(o),a.indexOf(o)<0&&l[o].classList.add("is-active")):~a.indexOf(o)&&l[a.shift()].classList.remove("is-active")}),u.scrollTop=u.scrollHeight-u.offsetHeight,a=1<n.length?n:n[0]):(Array.isArray(a)&&(a.forEach(function(e){l[e].classList.remove("is-active")}),a=void 0),s.some(function(e){if(e.getBoundingClientRect().top+h(e,"paddingTop")-o>r)return!0;t="#"+e.id}),t?t!==a&&(a&&l[a].classList.remove("is-active"),(e=l[t]).classList.add("is-active"),u.scrollHeight>u.offsetHeight&&(u.scrollTop=Math.max(0,e.offsetTop+e.offsetHeight-u.offsetHeight)),a=t):a&&(l[a].classList.remove("is-active"),a=void 0))}function h(e,t){return parseFloat(window.getComputedStyle(e)[t])}}();
!function(){"use strict";var o=document.querySelector("article.doc"),t=document.querySelector(".toolbar");function i(e){return e&&(~e.indexOf("%")?decodeURIComponent(e):e).slice(1)}function c(e){if(e){if(e.altKey||e.ctrlKey)return;window.location.hash="#"+this.id,e.preventDefault()}window.scrollTo(0,function e(t,n){return o.contains(t)?e(t.offsetParent,t.offsetTop+n):n}(this,0)-t.getBoundingClientRect().bottom)}window.addEventListener("load",function e(t){var n;(n=i(window.location.hash))&&(n=document.getElementById(n))&&(document.documentElement.style.scrollBehavior="auto",c.bind(n)(),setTimeout(c.bind(n),0),setTimeout(function(){document.documentElement.style.scrollBehavior=""})),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var t;(t=i(e.hash))&&(t=document.getElementById(t))&&e.addEventListener("click",c.bind(t))})}();
!function(){"use strict";var t,e=document.querySelector(".page-versions .version-menu-toggle");e&&(t=document.querySelector(".page-versions"),e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),document.documentElement.addEventListener("click",function(){t.classList.remove("is-active")}))}();
!function(){"use strict";var t=document.querySelector(".navbar-burger");t&&t.addEventListener("click",function(t){t.stopPropagation();var t=document.documentElement,e=document.getElementById(this.dataset.target);!e.classList.contains("is-active")&&/mobi/i.test(window.navigator.userAgent)&&(Math.round(parseFloat(window.getComputedStyle(t).minHeight))!==window.innerHeight?t.style.setProperty("--vh",window.innerHeight/100+"px"):t.style.removeProperty("--vh"));t.classList.toggle("is-clipped--navbar"),this.classList.toggle("is-active"),e.classList.toggle("is-active")}.bind(t))}();
!function(){"use strict";var o=/^\$ (\S[^\\\n]*(\\\n(?!\$ )[^\\\n]*)*)(?=\n|$)/gm,s=/( ) *\\\n *|\\\n( ?) */g,l=/ +$/gm,e=(document.getElementById("site-script")||{dataset:{}}).dataset,d=null==e.uiRootPath?".":e.uiRootPath,r=e.svgAs,p=window.navigator.clipboard;[].slice.call(document.querySelectorAll(".doc pre.highlight, .doc .literalblock pre")).forEach(function(e){var t,n,a,c;if(e.classList.contains("highlight"))(i=(t=e.querySelector("code")).dataset.lang)&&"console"!==i&&((a=document.createElement("span")).className="source-lang",a.appendChild(document.createTextNode(i)));else{if(!e.innerText.startsWith("$ "))return;var i=e.parentNode.parentNode;i.classList.remove("literalblock"),i.classList.add("listingblock"),e.classList.add("highlightjs","highlight"),(t=document.createElement("code")).className="language-console hljs",t.dataset.lang="console",t.appendChild(e.firstChild),e.appendChild(t)}(i=document.createElement("div")).className="source-toolbox",a&&i.appendChild(a),p&&((n=document.createElement("button")).className="copy-button",n.setAttribute("title","Copy to clipboard"),"svg"===r?((a=document.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("class","copy-icon"),(c=document.createElementNS("http://www.w3.org/2000/svg","use")).setAttribute("href",d+"/img/octicons-16.svg#icon-clippy"),a.appendChild(c),n.appendChild(a)):((c=document.createElement("img")).src=d+"/img/octicons-16.svg#view-clippy",c.alt="copy icon",c.className="copy-icon",n.appendChild(c)),(a=document.createElement("span")).className="copy-toast",a.appendChild(document.createTextNode("Copied!")),n.appendChild(a),i.appendChild(n)),e.parentNode.appendChild(i),n&&n.addEventListener("click",function(e){var t=e.innerText.replace(l,"");"console"===e.dataset.lang&&t.startsWith("$ ")&&(t=function(e){var t,n=[];for(;t=o.exec(e);)n.push(t[1].replace(s,"$1$2"));return n.join(" && ")}(t));window.navigator.clipboard.writeText(t).then(function(){this.classList.add("clicked"),this.offsetHeight,this.classList.remove("clicked")}.bind(this),function(){})}.bind(n,t))})}();
!function(){"use strict";var t,n,e;function o(e){window.navigator.clipboard.writeText(e).then(function(){},function(){})}window.navigator.clipboard&&(t=/H[2-6]/,n=(document.querySelector("head meta[name=page-spec]")||{}).content,e=document.querySelector(".toolbar .edit-this-page a"),n&&e&&(e&&e.addEventListener("click",function(e){e.altKey&&o(n)}),[].slice.call(document.querySelectorAll(".doc a.anchor")).forEach(function(e){t.test(e.parentNode.tagName)&&e.addEventListener("click",function(e){e.altKey&&(e.preventDefault(),o(n+function(e){return~e.indexOf("%")?decodeURIComponent(e):e}(this.hash)))}.bind(e))})))}();