$(function(){
  $('.ui.dropdown').dropdown();
  $('.example .menu .item').tab();

  $('.ui.left.sidebar').prepend('<a href="javascript:void(0)" class="item leftMenuClose"><i class="close icon"></i></a>');
  
  $('.leftMenuClose').click(function(){
    $('body').removeClass('leftMenu-visible');
  });
  
  $('.leftMenuTrigger').click(function(ev){
      ev.preventDefault();
      ev.stopPropagation();
    $('.ui.left.sidebar').toggleClass('visible');
     $('body').toggleClass('leftMenu-visible');
  });

});

window.onload = function() {
  var flask = new CodeFlask;
  flask.runAll('.exampleCode', {
    language: 'php',
    lineNumbers: true
  });
}

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}