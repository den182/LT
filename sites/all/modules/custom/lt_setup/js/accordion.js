(function($) {
  $(document).ready(function(){
    var allPanels = $('.views-field-title + .views-field-body').hide();
    $('.views-field-title').toggle(function() {
      $(this).next().slideDown();
      return false;
    },function(){
      $(this).next().slideUp();
      return false;  
    });  
  });  
})(jQuery);