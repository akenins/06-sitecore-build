!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){let n=$("#alert-bar"),o=$("#alert-bar .alert-close"),i=Cookies.get("hitachi-alert"),l=document.getElementById("global-header"),s=$(".hero .container .heading-container"),a=$(".blog-post");l.offsetHeight;function c(){n.slideUp(),$(l).removeClass("alert"),s.removeClass("alert"),a.removeClass("alert")}o.on("click",(function(e){return"a"===e.currentTarget.tagName&&e.preventDefault(),c(),void 0===i&&(Cookies.set("hitachi-alert","1"),setTimeout((function(){n.addClass("disabled")}),500)),!1})),$((function(){Cookies.set("hitachi-alert")?n.hide():(n.show(),$(l).addClass("alert"),s.addClass("alert"),a.addClass("alert")),resetHeaderHeight(),console.log(s)}))},function(e,t){if(IntersectionObserver){const e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&!e.target.classList.contains("animated")?e.target.classList.add("animated"):e.isIntersecting||e.classList.remove("animated")})},{root:null,threshold:.2});document.querySelectorAll("img[data-ios]").forEach(t=>{t.classList.add("animation"),e.observe(t)})}},function(e,t){$(document).ready((function(){$(".main-carousel").flickity({cellAlign:"left",contain:!0,autoPlay:!0}),$(".highlights").flickity({cellAlign:"left",contain:!0}),$(".challenges").flickity({cellAlign:"left",contain:!0}),$(".feature-container").flickity({cellAlign:"left",contain:!0}),$(".timeline-container").flickity({pageDots:!1,prevNextButtons:!0}),$(".timeline-nav").flickity({asNavFor:".timeline-container",prevNextButtons:!1,pageDots:!1,draggable:!1});const e=$(".carousel"),t=$(".button-group--cells"),n=$(".button--previous"),o=$(".button--next"),i=$(".button-group.button-group--cells");for(let t=1;t<=e.find(".carousel-cell").length;t++)i.append('<button class="button">'+t+"</button>");e.on("ready.flickity",(function(){n.attr("disabled","disabled"),i.children(":first-child").addClass("is-selected")})),e.flickity({prevNextButtons:!1,pageDots:!1});const l=e.data("flickity"),s=i.find("button");e.on("select.flickity",(function(){s.filter(".is-selected").removeClass("is-selected"),s.eq(l.selectedIndex).addClass("is-selected"),l.slides[l.selectedIndex-1]?l.slides[l.selectedIndex+1]?(n.removeAttr("disabled"),o.removeAttr("disabled")):(o.attr("disabled","disabled"),n.removeAttr("disabled")):(n.attr("disabled","disabled"),o.removeAttr("disabled"))})),t.on("click",".button",(function(){const t=$(this).index();e.flickity("select",t)})),n.on("click",(function(){e.flickity("previous")})),o.on("click",(function(){e.flickity("next")}))}))},function(e,t){$(document).ready((function(){let e=$("input.mktoField"),t=document.getElementsByTagName("select");e.on("focus blur",(function(e){"focus"==e.type?$(this).siblings(".mktoLabel").addClass("mktoFieldFocused"):$(this).siblings(".mktoLabel").removeClass("mktoFieldFocused")})),e.on("change keyup",(function(){e.val().length>0?$(this).siblings(".mktoLabel").addClass("mktoFieldContainsData"):$(this).siblings(".mktoLabel").removeClass("mktoFieldContainsData")})),t.length>0&&$("select").siblings(".mktoLabel").addClass("mktoFieldContainsData")}))},function(e,t){const n=function(e){const t={mpYouTubeOpts:{type:"iframe",iframe:{patterns:{youtube:{index:"youtube.com/",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1&autohide=1&modestbranding=1&rel=0&showinfo=0"},youtube_short:{index:"youtu.be/",id:"youtu.be/",src:"//www.youtube.com/embed/%id%?autoplay=1&autohide=1&modestbranding=1&rel=0&showinfo=0"}}},removalDelay:300,mainClass:"mfp-fade"},init:function(){this.videomodals(),this.inlinemodals()},videomodals:function(){e(".video-link").magnificPopup(t.mpYouTubeOpts)},inlinemodals:function(){e(".inline-mfp").magnificPopup({type:"inline",midClick:!0})}};return t}(jQuery);$(window).on("load",(function(){n.init()}))},function(e,t){$(document).ready((function(){let e=$(".gsearch"),t=$("#site-search-keyword");function n(e){window.location.href=window.location.origin+"/search?word="+e}e.on("click",(function(){n(t.val())})),t.keypress((function(e){13==e.which&&n(t.val())}))}))},function(e,t){},function(e,t){$((function(){$("select").each((function(){let e=$(this),t=e.children("option").length;e.addClass("select-hidden"),e.wrap('<div class="select"></div>'),e.after('<div class="select-styled"></div>');let n=e.next("div.select-styled");n.text(e.children("option").eq(0).text());let o=$("<ul />",{class:"select-options"}).insertAfter(n);for(let n=1;n<t;n++)$("<li />",{text:e.children("option").eq(n).text(),rel:e.children("option").eq(n).val(),class:"select-option"}).appendTo(o);let i=o.children("li");n.on("click",(function(e){e.stopPropagation(),$("div.styled-select.active").not(this).each((function(){$(this).removeClass("active").next("ul.select-options").hide()})),$(this).toggleClass("active").next("ul.select-options").toggle()})),i.click((function(t){t.stopPropagation(),n.text($(this).text()).removeClass("active"),e.val($(this).attr("rel")),o.hide()})),$(document).click((function(){n.removeClass("active"),o.hide()}))}))}))},function(e,t){$((function(){$(".solution-picker").find(".select-options").children("li").on("click",(function(e){let t=$(this).attr("rel");$("div.solution-container").hide(),$(`#${t}`).show()}))}))},function(e,t){document.addEventListener("DOMContentLoaded",(function(){let e=document.getElementById("global-header");e.offsetHeight,new Headroom(e,{offset:0,tolerance:10,classes:{initial:"headroom animated",pinned:"headroom--pinned",unpinned:"headroom--unpinned"}}).init()}))},function(e,t){$((function(){let e=new URL(document.location),t=new URLSearchParams(e.search),n=t.getAll("tag");0!==n.length&&$("#clear-filters").append('<a href="/resources" class="chip">Clear Filters</a>'),n.map(e=>{$("#active-filters").append(`<span class="chip filter">${e}</span>`)}),$(".resource-filter-bar").find(".select").each((function(){$(this).find(".select-options").children("li").on("click",(function(e){let n=$(this).attr("rel");if(console.log(n),t.set("tag",n),"default"===n)return!1;window.location=`/resources?${t}`}))}))}))},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2),n(3),n(4),n(5),n(6);!function(e){let t,n,o=".mobile-nav-arrow",i=".mobile-subnav-arrow";function l(o){0===e(o.target).closest(".mobile-nav").length&&(r(),t.removeClass("mobile-nav-open"),n.removeClass("toggled"))}function s(t){let n=e(t.target).closest(".mobile-nav-item"),o=n.find("> .mobile-dropdown");n.find("> .mobile-nav-arrow").toggleClass("active"),o.stop(!0,!1).slideToggle()}function a(t){let n=e(t.target).closest(".mobile-nav-subitem"),o=n.find("> .mobile-dropdown");n.find("> .mobile-subnav-arrow").toggleClass("active"),o.stop(!0,!1).slideToggle()}function c(o){t.hasClass("mobile-nav-open")?(t.removeClass("mobile-nav-open"),n.removeClass("toggled"),r()):(t.addClass("mobile-nav-open"),n.addClass("toggled"),e(document).on("click",l),t.slideDown()),o.stopImmediatePropagation()}function r(){e(document).off("click",l),t.slideUp(),e(".sub-menu",t).slideUp(),e(".menu-item",t).removeClass("open")}document.addEventListener("DOMContentLoaded",(function(){t=e("#mobile-nav"),n=e("#mobile-nav-toggle"),o=e(o),i=e(i)})),e((function(){n.on("click",c),t.on("click",o,s),t.on("click",i,a)}))}(jQuery);!function(e){let t,n,o="mobile-search-open";function i(n){0===e(n.target).closest(".mobile-search").length&&(s(),t.removeClass(o))}function l(n){t.hasClass(o)?(t.removeClass(o),s()):(t.addClass(o),e(document).on("click",i),t.slideDown()),n.stopImmediatePropagation()}function s(){e(document).off("click",i),t.slideUp()}document.addEventListener("DOMContentLoaded",(function(){t=e("#mobile-search"),n=e("#mobile-search-toggle")})),e((function(){n.on("click",l)}))}(jQuery);(function(e){let t,n,o,i,l,s={duration:300,easing:"swing"};function a(){p(null)}function c(t){var n=e(t.currentTarget),o=n.find(".dropdown");if(o.length>0&&!o.is(":visible"))return p(n),t.preventDefault(),!1}function r(){n.fadeIn(null,(function(){e("#site-search-keyword").focus()}))}function d(){return n.fadeOut(),!1}function u(t){0===e(t.target).closest(".menu.nav-items, .utility-nav").length&&(p(null),d())}function f(t){var n=e(t.currentTarget);clearTimeout(i),l=setTimeout((function(){p(n)}),150)}function m(e){clearTimeout(l),i=setTimeout((function(){p(null)}),300)}function p(e){clearTimeout(i),o!==e&&(o&&(o.find(".primary-link").removeClass("active"),o.find(".dropdown").stop(!0,!1).fadeOut(s)),e&&(e.find(".primary-link").addClass("active"),e.find(".dropdown").stop(!0,!1).fadeIn(s)),o=e)}e((function(){t=e(".menu.nav-items, .utility-nav"),n=e(".global-site-search"),e(".menu-item.sub-item").hover((function(){e(this).addClass("active")}),(function(){e(this).removeClass("active")}))})),e((function(){var n;n=e(document),t.on("mouseenter","li.has-dropdown",f),t.on("mouseleave","li.has-dropdown",m),e(".open-global-search").on("click",r),n.on("click touchend",u),n.on("click",".close-global-search",d),t.on("touchend","li.has-dropdown",c),e(window).on("scroll",a)}))})(jQuery),n(7);(function(e){let t,n,o;function i(e){let t=e.currentTarget;return e.preventDefault(),window.open(t.href,"_blank","width=768, height=432"),!1}function l(){e(this).find(o).fadeToggle(100)}jQuery(document).mouseup((function(e){t.is(e.target)||0!==t.has(e.target).length||t.find(o).fadeOut(100)})),document.addEventListener("DOMContentLoaded",(function(){t=e(".share"),n=e(".social-share-link"),o=e(".share-popover")})),e((function(){n.on("click",i),t.on("click",l)}))})(jQuery),n(8),n(9),n(10)}]);
//# sourceMappingURL=main.js.map