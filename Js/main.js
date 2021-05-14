

$(window).on("load",function(){
    /*--------------------------- Preloader ----------------------------------*/
    $(".preloader").fadeOut("slow");
});

$(document).ready(function(){
  /*------------------ Navbar Shrink ----------------------*/
  $(window).on("scroll",function(){
if($(this).scrollTop() > 90){
    $(".navbar").addClass("navbar-shrink");
}
else{
    $(".navbar").removeClass("navbar-shrink");
}
  });

  /*------------------ Video Popup ------------------------*/
  const videoSrc = $("#player-1").attr("src");
  $(".video-play-btn, .video-popup").on("click", function(){
      if($(".video-popup").hasClass("open")){
          $(".video-popup").removeClass("open");
          $("#player-1").attr("src","");
      }
      else{
          $(".video-popup").addClass("open");
          if($("#player-1").attr("src")==''){
              $("#player-1").attr("src",videosrc);
          }
      }
  });

  /*------------------- Page Scrolling - ScrollIt ----------------------------*/
  $.scrollTop({
      topOffset:-50
  });

  /*------------------- Navbar Collapse ------------------------*/
  $(".nav-link").on("click",function(){
      $(".navbar-collapse").Collapse("hid");
  });

  /*------------------- Toggle Them - Light & Dark Mode ----------------------*/
  function toggleThem(){
      if(localStorage.getItem("shala-theme") !== null){
          if(localStorage.getItem("shala-theme") === "dark"){
              $("body").addClass("dark");
          }
          else{
              $("body").removeClass("dark");
          }
      }
      updateIcon();
  }
  toggleTheme();

  $(".toggle-theme").on("click",function(){
      $("body").toggleCLass("dark");
      if($("body").hasClass("dark")){
          localStorage.setItem("shala-theme","dark");
      }
      else{
          localStorage.setItem.apply("shala-theme","light");
      }
      updateIcon();
  });
  function updateIcon(){
      if($("body").hasClass("dark")){
          $(".toggle-theme i").removeClass("fa-moon");
          $(".toggle-them ei").addClass("fa-sun");
      }
      else{
          $(".toggle-theme i").removeClass("fa-sun");
          $(".toggle-theme i").addClass("fa-moon");
      }
  }
});