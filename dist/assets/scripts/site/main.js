!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=7)}([function(e,n){if(IntersectionObserver){const e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&!e.target.classList.contains("animated")?e.target.classList.add("animated"):e.isIntersecting||e.classList.remove("animated")})},{root:null,threshold:.2});document.querySelectorAll("img[data-ios]").forEach(n=>{n.classList.add("animation"),e.observe(n)})}},function(e,n){$(document).ready((function(){$(".main-carousel").flickity({cellAlign:"left",contain:!0,autoPlay:!0}),$(".highlights").flickity({cellAlign:"left",contain:!0}),$(".challenges").flickity({cellAlign:"left",contain:"true"}),$(".feature-container").flickity({cellAlign:"left",contain:"true"});const e=$(".carousel"),n=$(".button-group--cells"),t=$(".button--previous"),o=$(".button--next"),i=$(".button-group.button-group--cells");for(let n=1;n<=e.find(".carousel-cell").length;n++)i.append('<button class="button">'+n+"</button>");e.on("ready.flickity",(function(){t.attr("disabled","disabled"),i.children(":first-child").addClass("is-selected")})),e.flickity({prevNextButtons:!1,pageDots:!1});const l=e.data("flickity"),a=i.find("button");e.on("select.flickity",(function(){a.filter(".is-selected").removeClass("is-selected"),a.eq(l.selectedIndex).addClass("is-selected"),l.slides[l.selectedIndex-1]?l.slides[l.selectedIndex+1]?(t.removeAttr("disabled"),o.removeAttr("disabled")):(o.attr("disabled","disabled"),t.removeAttr("disabled")):(t.attr("disabled","disabled"),o.removeAttr("disabled"))})),n.on("click",".button",(function(){const n=$(this).index();e.flickity("select",n)})),t.on("click",(function(){e.flickity("previous")})),o.on("click",(function(){e.flickity("next")}))}))},function(e,n){$(document).ready((function(){let e=$("input.mktoField"),n=document.getElementsByTagName("select");e.on("focus blur",(function(e){"focus"==e.type?$(this).siblings(".mktoLabel").addClass("mktoFieldFocused"):$(this).siblings(".mktoLabel").removeClass("mktoFieldFocused")})),e.on("change keyup",(function(){e.val().length>0?$(this).siblings(".mktoLabel").addClass("mktoFieldContainsData"):$(this).siblings(".mktoLabel").removeClass("mktoFieldContainsData")})),n.length>0&&$("select").siblings(".mktoLabel").addClass("mktoFieldContainsData")}))},function(e,n){const t=function(e){const n={mpYouTubeOpts:{type:"iframe",iframe:{patterns:{youtube:{index:"youtube.com/",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1&autohide=1&modestbranding=1&rel=0&showinfo=0"},youtube_short:{index:"youtu.be/",id:"youtu.be/",src:"//www.youtube.com/embed/%id%?autoplay=1&autohide=1&modestbranding=1&rel=0&showinfo=0"}}},removalDelay:300,mainClass:"mfp-fade"},init:function(){this.videomodals(),this.inlinemodals()},videomodals:function(){e(".video-link").magnificPopup(n.mpYouTubeOpts)},inlinemodals:function(){e(".inline-mfp").magnificPopup({type:"inline",midClick:!0})}};return n}(jQuery);$(window).on("load",(function(){t.init()}))},function(e,n){$((function(){const e=$("#solution-picker");$("#solutions").show(),e.on("change",(function(){const e=$(this).val();$("div.solution-container").hide(),$("#"+e).show()}))}))},function(e,n){document.addEventListener("DOMContentLoaded",(function(){let e=document.getElementById("global-header");new Headroom(e,{offset:0,tolerance:10,classes:{initial:"headroom animated",pinned:"headroom--pinned",unpinned:"headroom--unpinned"}}).init()}))},function(e,n){$((function(){const e=[$("#resource-type"),$("#resource-industry"),$("#resource-solution-area")];let n=new URL(document.location),t=new URLSearchParams(n.search),o=t.getAll("tag");0!==o.length&&$("#clear-filters").append('<a href="/resources" class="chip">Clear Filters</a>'),o.map(e=>{$("#active-filters").append(`<span class="chip filter">${e}</span>`)}),e.forEach(e=>{e.on("change",(function(){if(t.set("tag",$(this).val()),"default"===$(this).val())return!1;window.location=`/resources-gallery?${t}`}))})}))},function(e,n,t){"use strict";t.r(n);t(0),t(1),t(2),t(3);!function(e){let n,t,o=".mobile-nav-arrow",i=".mobile-subnav-arrow";function l(t){0===e(t.target).closest(".mobile-nav").length&&(r(),n.removeClass("mobile-nav-open"))}function a(n){let t=e(n.target).closest(".mobile-nav-item"),o=t.find("> .mobile-dropdown");t.find("> .mobile-nav-arrow").toggleClass("active"),o.stop(!0,!1).slideToggle()}function s(n){let t=e(n.target).closest(".mobile-nav-subitem"),o=t.find("> .mobile-dropdown");t.find("> .mobile-subnav-arrow").toggleClass("active"),o.stop(!0,!1).slideToggle()}function c(t){n.hasClass("mobile-nav-open")?(n.removeClass("mobile-nav-open"),r()):(n.addClass("mobile-nav-open"),e(document).on("click",l),n.slideDown()),t.stopImmediatePropagation()}function r(){e(document).off("click",l),n.slideUp(),e(".sub-menu",n).slideUp(),e(".menu-item",n).removeClass("open")}document.addEventListener("DOMContentLoaded",(function(){n=e("#mobile-nav"),t=e("#mobile-nav-toggle"),o=e(o),i=e(i)})),e((function(){t.on("click",c),n.on("click",o,a),n.on("click",i,s)}))}(jQuery);!function(e){let n,t,o,i,l,a={duration:300,easing:"swing"};function s(){p(null)}function c(n){var t=e(n.currentTarget),o=t.find(".dropdown");if(o.length>0&&!o.is(":visible"))return p(t),n.preventDefault(),!1}function r(){t.fadeIn(null,(function(){e("#site-search-keyword").focus()}))}function u(){return t.fadeOut(),!1}function d(n){0===e(n.target).closest(".menu.nav-items, .menu.utility-nav-items").length&&(p(null),u())}function f(n){var t=e(n.currentTarget);clearTimeout(i),l=setTimeout((function(){p(t)}),150)}function m(e){clearTimeout(l),i=setTimeout((function(){p(null)}),300)}function p(e){clearTimeout(i),o!==e&&(o&&(o.find(".primary-link").removeClass("active"),o.find(".dropdown").stop(!0,!1).fadeOut(a)),e&&(e.find(".primary-link").addClass("active"),e.find(".dropdown").stop(!0,!1).fadeIn(a)),o=e)}e((function(){n=e(".menu.nav-items, .menu.utility-nav-items"),t=e(".global-site-search"),e(".menu-item.sub-item").hover((function(){e(this).addClass("active")}),(function(){e(this).removeClass("active")}))})),e((function(){var t;t=e(document),n.on("mouseenter","li.has-dropdown",f),n.on("mouseleave","li.has-dropdown",m),e(".open-global-search").on("click",r),t.on("click touchend",d),t.on("click",".close-global-search",u),n.on("touchend","li.has-dropdown",c),e(window).on("scroll",s)}))}(jQuery);(function(e){let n,t;function o(e){let n=e.currentTarget;return e.preventDefault(),window.open(n.href,"_blank","width=768, height=432"),!1}function i(){n.find(".share-popover").fadeToggle(100)}jQuery(document).mouseup((function(e){n.is(e.target)||0!==n.has(e.target).length||n.find(".share-popover").fadeOut(100)})),document.addEventListener("DOMContentLoaded",(function(){n=e(".share"),t=e(".social-share-link")})),e((function(){t.on("click",o),n.on("click",i)}))})(jQuery),t(4),t(5),t(6)}]);
//# sourceMappingURL=main.js.map