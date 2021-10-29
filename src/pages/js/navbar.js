import $ from 'jquery';


$(document).ready(function() {
     
    $(".fa-search").click(function() {
       $(".togglesearch").toggle();
       $("input[type='text']").focus();
     });

     $(".fa-search").on("click", function (event) {
        event.stopPropagation();
    });

    $(document).on("click", function () {
        $(".togglesearch").hide();
    });
 
});