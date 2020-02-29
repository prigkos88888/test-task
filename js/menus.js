"use strict";

jQuery("document").ready(function ($) {
  
  // Top menu
  function topMenuPunktsDecor() {
    document.querySelectorAll(".menu_box_2 .menu").forEach(function (item) {
      var parentWidth = item.offsetWidth;
      var previousValue = 0;
      item.querySelectorAll("li").forEach(function (item, i, arr) {
        item.style.borderLeft = "1px solid #fff";
        previousValue = previousValue + item.offsetWidth;
        if (previousValue > parentWidth) {
          previousValue = item.offsetWidth;
          item.style.borderLeft = "none";
        }
      });
    });
  }
  topMenuPunktsDecor();
  window.addEventListener("resize", topMenuPunktsDecor);

  // left sidebar menu
  $(".sidebar_nav_button").click(function () {
    $(".sidebar").addClass("sidebar_2");
    if ($(window).scrollTop() > 300) $("body").css("overflow", "hidden");
  });
  $(".sidebar_nav_close").click(function () {
    $(".sidebar").removeClass("sidebar_2");
    $("body").css("overflow", "auto");
  });

  //right calendar popup-menu
  $(".but_right").click(function () {
    $(".block_pop").show("slow");
    $(this).hide("slow");
    if ((document.body.offsetWidth <= 768) & ($(window).scrollTop() > 300))
      $("body").css("overflow", "hidden");
  });
  $(".closeB").click(function () {
    $(".but_right").show("slow");
    $(".block_pop").hide("slow");
    $("body").css("overflow", "auto");
  });

  //Fixed sidebar by scrolling for > 768
  function fixed_sidebar_pc() {

    $(".footer-shablon-2").removeClass('footer-hack-fix-menu');
    var all_pc_menu = $("#all_pc_menu-marker").detach();

    var side_bar_1 = $(".sidebar_box_2").detach();
    var side_bar_2 = $(".sidebar_btn-form-1").detach();
    var side_bar_3 = $(".sidebar_box_3").detach();
    var side_bar_4 = $(".sidebar_box_4").detach();
    var side_bar_5 = $(".sidebar_btn-form-2").detach();


    $(".sidebar_grid_box").append(side_bar_1);
    $(".sidebar_grid_box").append(side_bar_2);
    $(".sidebar_grid_box").append(side_bar_3);
    $(".sidebar_grid_box").append(side_bar_4);
    $(".sidebar_grid_box").append(side_bar_5);

    if ((document.body.offsetWidth > 768) && (!$('#all_pc_menu-marker').length)) {

      if (($(".sidebar_box_2").height() > 250) && (!$('#all_pc_menu').length)) {
        $(".sidebar_box_2").before('<div id = "all_pc_menu"></div>');
      }

      $("#all_pc_menu").before('<div id = "all_pc_menu-marker">');
      $(".sidebar_box_2").appendTo("#all_pc_menu");
      $(".sidebar_btn-form-1").appendTo("#all_pc_menu");
      $(".sidebar_box_3").appendTo("#all_pc_menu");
      $(".sidebar_box_4").appendTo("#all_pc_menu");
      $(".sidebar_btn-form-2").appendTo("#all_pc_menu");

      if ($("#all_pc_menu").length) {
        $(".footer-shablon-2").addClass('footer-hack-fix-menu');
      }
    } else {
      $(".footer-shablon-2").removeClass('footer-hack-fix-menu');
    }


  }

  fixed_sidebar_pc();
  window.addEventListener("resize", fixed_sidebar_pc);

  function isInView(elem) {
    return $(elem).offset().top - $(window).scrollTop() < $(elem).height();
  }

  function pc_fixed_menu() {
    $(".fixed-right-cal").css(
      "left", "auto"
    );

    if (document.body.offsetWidth > 768 && $("#all_pc_menu").length) {
      if (isInView($("#all_pc_menu-marker"))) {
        $("#all_pc_menu").addClass("fixed-left-pc-menu");
      } else {
        $("#all_pc_menu").removeClass("fixed-left-pc-menu");
      }

      if ($(window).scrollTop() > 300) {
        $(".but_right.calendar").addClass("fixed-right-cal");
        $(".calendar_block .block_pop").addClass("fixed-right-cal");
        var left_size = $(".fixed-right-cal").css("left");
        var new_left_size = parseInt($(".content_block").css("width")) / 2;
        new_left_size = new_left_size + "px";
        $(".fixed-right-cal").css(
          "left", "calc(20px + 50% + " + new_left_size + ")"
        );
        $(".calendar_block .block_pop.fixed-right-cal").css(
          "left", "calc(-370px + 50% + " + new_left_size + ")"
        );
      } else {
        $(".but_right.calendar").removeClass("fixed-right-cal");
        $(".calendar_block .block_pop").removeClass("fixed-right-cal");
        $(".but_right.calendar").css("left", "auto");

        $(".calendar_block .block_pop").css("left", "auto");
      }
    }
  }
  window.addEventListener("resize", pc_fixed_menu);
  $(window).scroll(function () {
    pc_fixed_menu();
  });

  //Fixed sidebar by scrolling for mobile
  var nav = $(".sidebar");
  var nav2 = $(".but_right.calendar");
  var nav3 = $(".calendar_block .block_pop");

  $(window).scroll(function () {
    if (document.body.offsetWidth <= 768) {
      if ($(this).scrollTop() > 300) {
        nav.addClass("fixed_sidebar");
        nav2.addClass("fixed_side_calendar");
        nav3.addClass("fixed_side_calendar");
      } else {
        nav.removeClass("fixed_sidebar");
        nav2.removeClass("fixed_side_calendar");
        nav3.removeClass("fixed_side_calendar");
      }
    }
  });

  $(".cal_item_grad").click(function () {
    if ($(".cal_item_grad").val() == "000") {
      $(".cal_item_grad").val("");
    }
  });
  $(".cal_item_grad").focusout(function () {
    if ($(".cal_item_grad").val() == "") {
      $(".cal_item_grad").val("000");
    }
  });
  $(".ci-men-form_grad").click(function () {
    if ($(".ci-men-form_grad").val() == "000") {
      $(".ci-men-form_grad").val("");
    }
  });
  $(".ci-men-form_grad").focusout(function () {
    if ($(".ci-men-form_grad").val() == "") {
      $(".ci-men-form_grad").val("000");
    }
  });

  var bziInfoName = "";
  $(".bzi-info_name").click(function () {
    bziInfoName = $(this).val();
    $(this).val("");
  });
  $(".bzi-info_name").focusout(function () {
    if ($(this).val() == "") {
      $(this).val(bziInfoName);
    }
  });
  var bziInfoPrim = "";
  $(".bzi-info_prim").click(function () {
    bziInfoPrim = $(this).val();
    $(this).val("");
  });
  $(".bzi-info_prim").focusout(function () {
    if ($(this).val() == "") {
      $(this).val(bziInfoPrim);
    }
  });

  

  $(".profile_close").click(function () {
    if (document.referrer === "") {
      window.location = "Ba-czi.html";
    } else {
      window.history.back();
    }
  });


  var url_params = window.location.search.replace('?', '').split('&').reduce(function (p, e) {
    var a = e.split('=');
    p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
    return p;
  }, {});

  // decode URI for qi-men.html
  if (url_params['date']) $('#tp-ios-cal').val(url_params['date']);
  if (url_params['map_choose']) {
    $('#map_choose').prop("checked", true);
  } else {
    $('#map_choose').prop("checked", false);
  }
  
  if (url_params['map_time'] == 2) {
    $('#map_day').prop("checked", true);
    $('#map_choose').prop("checked", false);
  } 

  

  if (url_params['stars_ym']){
    $('#stars_ym').prop("checked", true);
    $('#ts').prop("checked", true);
  }
  else
  {
    $('#stars_ym').prop("checked", false);
    $('#ts').prop("checked", false);
}

//Sun time switch
if ($("#ts").prop("checked")) 
{$(".sun-time").removeClass("hidden");
$("#ts").closest(".stars-pop_block").addClass('input-box_required');
}
else 
{$(".sun-time").addClass("hidden");
$("#ts").closest(".stars-pop_block").removeClass('input-box_required');
}

if ($("#ts-2").prop("checked")) $(".sun-time-2").removeClass("hidden");
else $(".sun-time-2").addClass("hidden");
if ($("#ts-3").prop("checked")) $(".sun-time-3").removeClass("hidden");
else $(".sun-time-3").addClass("hidden");
if ($("#ts-4").prop("checked")) $(".sun-time-4").removeClass("hidden");
else $(".sun-time-4").addClass("hidden");

$("#st-block").click(function () {
  if ($("#ts").prop("checked")) 
  {$("#ts").prop("checked", false);
  
}
  else {$("#ts").prop("checked", true);

}
  if ($("#ts").prop("checked")) {
    $(".sun-time").removeClass("hidden");
    $("#ts").closest(".stars-pop_block").addClass('input-box_required');
  }
  else {$(".sun-time").addClass("hidden");
  $("#ts").closest(".stars-pop_block").removeClass('input-box_required');
};
});

$("#dtp-switch").click(function () {
  if ($("#dtp").prop("checked")) 
  {
    $("#dtp").prop("checked", false);
    $(".dtp-on").addClass("hidden");
    if ($("#ts").prop("checked")) {
      $("#ts").prop("checked", false);
      $(".sun-time").addClass("hidden");
      $("#ts").closest(".stars-pop_block").removeClass('input-box_required');
    }
  }
  else {$("#dtp").prop("checked", true);
  $(".dtp-on").removeClass("hidden");
}


});

$("#st-block-2").click(function () {
  if ($("#ts-2").prop("checked")) $("#ts-2").prop("checked", false);
  else $("#ts-2").prop("checked", true);
  if ($("#ts-2").prop("checked")) $(".sun-time-2").removeClass("hidden");
  else $(".sun-time-2").addClass("hidden");
});
$("#st-block-3").click(function () {
  if ($("#ts-3").prop("checked")) $("#ts-3").prop("checked", false);
  else $("#ts-3").prop("checked", true);
  if ($("#ts-3").prop("checked")) $(".sun-time-3").removeClass("hidden");
  else $(".sun-time-3").addClass("hidden");
});
$("#st-block-4").click(function () {
  if ($("#ts-4").prop("checked")) $("#ts-4").prop("checked", false);
  else $("#ts-4").prop("checked", true);
  if ($("#ts-4").prop("checked")) $(".sun-time-4").removeClass("hidden");
  else $(".sun-time-4").addClass("hidden");
});

  // decode URI for qi-men.html
  if (url_params['year']) {
    $('#stars_year option[value=' + url_params['year'] + ']').attr('selected', 'selected');
    $('#stars_year_text').text($("#stars_year option:selected").text());
  }

  if (url_params['degree']) {
    $('#stars_degree option[value=' + url_params['degree'] + ']').attr('selected', 'selected');
    $('#stars_degree_text').text($("#stars_degree option:selected").text());
    var face_name = $("#stars_degree option:selected").text().substring(0, 2);

    switch (face_name) {
      case 'С1':
      case 'С2':
      case 'С3':
        $('td.content-td[rel=1]').addClass('face_degree');
        break;

      case 'СВ':
        $('td.content-td[rel=2]').addClass('face_degree');
        break;

      case 'В1':
      case 'В2':
      case 'В3':
        $('td.content-td[rel=3]').addClass('face_degree');
        break;

      case 'ЮВ':
        $('td.content-td[rel=4]').addClass('face_degree');
        break;

      case 'Ю1':
      case 'Ю2':
      case 'Ю3':
        $('td.content-td[rel=5]').addClass('face_degree');
        break;

      case 'Ю3':
        $('td.content-td[rel=6]').addClass('face_degree');
        break;

      case 'З1':
      case 'З2':
      case 'З3':
        $('td.content-td[rel=7').addClass('face_degree');
        break;

      case 'СЗ':
        $('td.content-td[rel=8]').addClass('face_degree');
        break;
      default:
        
    }


  }
  if (url_params['8degree']) {
    $('#8degree option[value=' + url_params['8degree'] + ']').attr('selected', 'selected');
    
    $('.square8_wrap > div').removeClass();
    
    switch (url_params['8degree']) {
      case '1':
        $('.square8_wrap > div').addClass('top_wind');
        break;
      case '2':
        $('.square8_wrap > div').addClass('right_top_wind');
        break;
      case '3':
        $('.square8_wrap > div').addClass('right_wind');
        break;
      case '4':
        $('.square8_wrap > div').addClass('right_bot_wind');
        break;
      case '5':
        $('.square8_wrap > div').addClass('bot_wind');
        break;
      case '6':
        $('.square8_wrap > div').addClass('left_bot_wind');
        break;
      case '7':
        $('.square8_wrap > div').addClass('left_wind');
        break;
      case '8':
        $('.square8_wrap > div').addClass('left_top_wind');
        break;
    

     
      default:
        
    }


  }

  if (url_params['stars_ym']) {
    $('.dsquare .star-month').removeClass('hidden');
    $('.dsquare .star-year').removeClass('hidden');
  } else {
    $('.dsquare .star-month').addClass('hidden');
    $('.dsquare .star-year').addClass('hidden');
  }

}); /* END doc ready*/