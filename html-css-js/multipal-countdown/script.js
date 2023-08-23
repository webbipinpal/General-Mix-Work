$(function(){
    $('[data-countdown]').each(function() {
   var $this = $(this), finalDate = $(this).data('countdown');
   $this.countdown(finalDate, function(event) {
     $this.html(event.strftime('<span class="mt-day">%D </span> <span class="mt-day--text">Days </span> <span class="mt-day">%H </span>  <span class="tm-hour--text">Hr </span> <span class="mt-day">%M </span>  <span class="tm-min--text">Min </span> <span class="mt-day">%S </span>  <span class="tm-sec--text">Sec </span>'));
   });
 });
});