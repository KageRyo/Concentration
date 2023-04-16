document.write('<script src="./assets/jquery-3.6.1.js"></script>');
$(document).ready(function () {
  $.fn.jqmultilang = function (l) {
    $(this).html($(this).data("lang-" + l));
  };
});