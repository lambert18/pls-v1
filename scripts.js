$(document).ready(function ($) {
  
  // NAV SCROLL
  const navBar = document.querySelector("nav");

  window.addEventListener("scroll", e => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
      navBar.classList.add("nav_scroll");
      navBar.style.transition = "all .5s";
    } else {
      navBar.classList.remove("nav_scroll");
    }
  });


  // FILTER PROJECT
  $("#btnFilter button").click(function() {
    $("#btnFilter button").removeClass('btn_filter_selected');
    $(this).addClass('btn_filter_selected');

    var itemSelected = $(this).data('target');
    if(itemSelected === 'all') {
      $(".filterProject").show();
    } else {
      $(".filterProject").hide();
      $("."+itemSelected).show();
    }
  });

});
