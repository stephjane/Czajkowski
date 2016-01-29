// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require_tree .

//NAVBAR
$(document).ready(function(){
  $(".navbutton").mouseenter(function() {
    $(this).css("background-color", "#025920");
    $(this).css("color", "white");
    // $(this).css("border", "2px solid #E82C0C");
  });
  $(".navbutton").mouseout(function() {
    $(this).css("background-color", "rgba(211, 248, 255, .8)");
    $(this).css("color", "#00417B");
    $(this).css("border", "none");
  });
});


//PROJECTS
$(document).ready(function() {
  var uxTwo = $('#uxtwo');
  var webdevTwo = $('#webdevtwo');
  var all = $('#all');

  function deactive() {
    all.removeClass("textdecoration");
    $('#webdev').removeClass("textdecoration");
    $('#ux').removeClass("textdecoration");
    uxTwo.addClass("hide");
    webdevTwo.addClass("hide");
  }

  function flow(that) {
    deactive()
    $(that).addClass("textdecoration");
    $('#' + $(that).attr("id") + 'two').removeClass("hide");
  }

  $('#ux, #webdev').click(function() {
    flow(this);
  });

  all.click(function() {
    deactive()
    $(this).addClass("textdecoration");
    uxTwo.removeClass("hide");
    webdevTwo.removeClass("hide");
  });
});


