function resizeIframe(e){e.style.height=e.contentWindow.document.body.scrollHeight+"px"}$(function(){$(".ui.dropdown").dropdown(),$(".example .menu .item").tab(),$(".ui.left.sidebar").prepend('<a href="javascript:void(0)" class="item leftMenuClose"><i class="close icon"></i></a>'),$(".leftMenuClose").click(function(){$("body").removeClass("leftMenu-visible")}),$(".leftMenuTrigger").click(function(e){e.preventDefault(),e.stopPropagation(),$(".ui.left.sidebar").toggleClass("visible"),$("body").toggleClass("leftMenu-visible")})}),window.onload=function(){(new CodeFlask).runAll(".exampleCode",{language:"php",lineNumbers:!0})};