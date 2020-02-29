"use strict";

jQuery("document").ready(function($) {
  //Windows
if (navigator.appVersion.indexOf("Win") != -1){
  document.getElementsByTagName("body")[0].classList.add("os-win");  
}
//Mac
else if (navigator.appVersion.indexOf("Mac") != -1){
  document.getElementsByTagName("body")[0].classList.add("os-mac");
}

  $(".bzi-table_box_6 .bzi-ie_sub-noto")
    .parent()
    .addClass("margnin-bot-8");

  $(".bzi-ie_minimum")
    .parent()
    .addClass("d-fl-onerow");

  /*$('.ui-datepicker-trigger').click(function () {
    $('.datepicker.hasDatepicker').focusout();
  })*/

  //DATE TIME pickers
  if ($("#tp-ios-time").length)
    $("#tp-ios-time").AnyPicker({
      mode: "datetime",
      dateTimeFormat: "HH:mm",
      lang: "ru",
      theme: "iOS"
      //showComponentLabel: true,
    });

  if ($("#tp-1").length)
    $("#tp-1").AnyPicker({
      mode: "datetime",
      dateTimeFormat: "HH:mm",
      lang: "ru",
      theme: "iOS"
    });

  if ($("#tp-2").length)
    $("#tp-2").AnyPicker({
      mode: "datetime",
      dateTimeFormat: "HH:mm",
      lang: "ru",
      theme: "iOS"
    });

  if ($("#tp-3").length)
    $("#tp-3").AnyPicker({
      mode: "datetime",
      dateTimeFormat: "HH:mm",
      lang: "ru",
      theme: "iOS"
    });

  if ($("#tp-4").length)
    $("#tp-4").AnyPicker({
      mode: "datetime",
      dateTimeFormat: "HH:mm",
      lang: "ru",
      theme: "iOS"
    });

  if ($("#tp-ios-cal").length) {
    var apo1 = this,
      sOut;
    $("#tp-ios-cal").AnyPicker({
      onInit: function() {
        apo1 = this;
        $("#tp-ios-cal").removeAttr("readonly");
        //$('#tp-ios-cal').attr('readonly', 'readonly');
      },
      animationDuration: 0,
      mode: "datetime",
      dateTimeFormat: "dd/MM/yyyy",
      lang: "ru",
      theme: "iOS",
      minValue: "01 01 1899",

      onSetOutput: function(sOutput, oArrSelectedValues) {
        sOut = sOutput;
      },
      onBeforeHidePicker: function() {
        apo1 = this;
        $("#tp-ios-cal").removeAttr("readonly");
      }
    });

    $(".ip-datepicker-trigger").click(function() {
      $("#tp-ios-cal").attr("readonly", "readonly");
      apo1.showOrHidePicker(sOut);
    });

    $("#tp-ios-cal").focus(function() {
      $("#tp-ios-cal").removeAttr("readonly");
      apo1.showOrHidePicker(sOut);
      apo1.showOrHidePicker(sOut);
    });
  }

  if ($("#dp-1").length) {
    var apo2 = this,
      sOut;
    $("#dp-1").AnyPicker({
      onInit: function() {
        apo2 = this;
        $("#dp-1").attr("readonly", "readonly");
      },
      animationDuration: 0,
      mode: "datetime",
      dateTimeFormat: "dd/MM/yyyy",
      lang: "ru",
      theme: "iOS",
      minValue: "01 01 1899",

      onSetOutput: function(sOutput, oArrSelectedValues) {
        sOut = sOutput;
      }
    });

    $(".ip-datepicker-trigger1").click(function() {
      $("#dp-1").attr("readonly", "readonly");
      apo2.showOrHidePicker(sOut);
    });

    $("#dp-1").focus(function() {
      $("#dp-1").removeAttr("readonly");
      apo2.showOrHidePicker(sOut);
      apo2.showOrHidePicker(sOut);
    });
  }

  if ($("#dp-2").length) {
    var apo3 = this,
      sOut;
    $("#dp-2").AnyPicker({
      onInit: function() {
        apo3 = this;
        $("#dp-2").attr("readonly", "readonly");
      },
      animationDuration: 0,
      mode: "datetime",
      dateTimeFormat: "dd/MM/yyyy",
      lang: "ru",
      theme: "iOS",
      minValue: "01 01 1899",

      onSetOutput: function(sOutput, oArrSelectedValues) {
        sOut = sOutput;
      }
    });

    $(".ip-datepicker-trigger2").click(function() {
      $("#dp-2").attr("readonly", "readonly");
      apo3.showOrHidePicker(sOut);
    });

    $("#dp-2").focus(function() {
      $("#dp-2").removeAttr("readonly");
      apo3.showOrHidePicker(sOut);
      apo3.showOrHidePicker(sOut);
    });
  }

  if ($("#dp-3").length) {
    var apo4 = this,
      sOut;
    $("#dp-3").AnyPicker({
      onInit: function() {
        apo4 = this;
        $("#dp-3").attr("readonly", "readonly");
      },
      animationDuration: 0,
      mode: "datetime",
      dateTimeFormat: "dd/MM/yyyy",
      lang: "ru",
      theme: "iOS",
      minValue: "01 01 1899",

      onSetOutput: function(sOutput, oArrSelectedValues) {
        sOut = sOutput;
      }
    });

    $(".ip-datepicker-trigger3").click(function() {
      $("#dp-3").attr("readonly", "readonly");
      apo4.showOrHidePicker(sOut);
    });

    $("#dp-3").focus(function() {
      $("#dp-3").removeAttr("readonly");
      apo4.showOrHidePicker(sOut);
      apo4.showOrHidePicker(sOut);
    });
  }

  if ($("#dp-4").length) {
    var apo5 = this,
      sOut;
    $("#dp-4").AnyPicker({
      onInit: function() {
        apo5 = this;
        $("#dp-4").attr("readonly", "readonly");
      },
      animationDuration: 0,
      mode: "datetime",
      dateTimeFormat: "dd/MM/yyyy",
      lang: "ru",
      theme: "iOS",
      minValue: "01 01 1899",

      onSetOutput: function(sOutput, oArrSelectedValues) {
        sOut = sOutput;
      }
    });

    $(".ip-datepicker-trigger4").click(function() {
      $("#dp-4").attr("readonly", "readonly");
      apo5.showOrHidePicker(sOut);
    });

    $("#dp-4").focus(function() {
      $("#dp-4").removeAttr("readonly");
      apo5.showOrHidePicker(sOut);
      apo5.showOrHidePicker(sOut);
    });
  }

  function checkForWidth_t3() {
    let t3Width = $(".bzi-table_box_3").width();
    $(".bzi-table_box_4").css({
      // "max-width": t3Width + "px"
    });
  }
  checkForWidth_t3();
  window.addEventListener("resize", checkForWidth_t3);

  // popovers
  //$('[data-toggle="tooltip"]').tooltip

  /*if ($(".content-td.dsquare").length) {
    stars_do_tooltips();
    window.addEventListener("resize", stars_do_tooltips);
  }

  function stars_do_tooltips() {
								if ($(document).width() > 1120) {
									$("[rel='5'] .d-note").tooltip({
										container: ".content_block",
										html: "true",
										trigger: "hover",
										placement: "top"
									});
									$("[rel='1'] .d-note").tooltip({

										container: ".direct-notes",
										html: "true",
										trigger: "hover",
										placement: "bottom"
									});
									$("[rel='5'] .d-note, [rel='2'] .d-note,[rel='4'] .d-note,[rel='3'] .d-note, [rel='0'] .d-note, [rel='1'] .d-note").tooltip({
										container: ".content_block",
										html: "true",
										trigger: "hover",
										placement: "left"
									});
									$("[rel='7'] .d-note,[rel='6'] .d-note,[rel='8'] .d-note").tooltip({
										container: ".content_block",
										html: "true",
										trigger: "hover",
										placement: "right"
									});
								} else if ($(document).width() > 768)
								{
									$(".d-note").tooltip({
										container: ".content_block",
										html: "true",
										trigger: "hover",
										placement: "left"
									});
								}
								else {
									
                }*/

  if ($(".d-note").length) {
    $(".d-note").tooltip({
      container: ".direct-notes",
      html: "true",
      trigger: "hover",
      placement: "bottom"
    });
  }

  /*
  if ($(".bz-popover-bot-sc-top").length) {
    $(".bz-popover-bot-sc-top").popover({
      container: ".ieghp-table",
      html: "true",
      trigger: "click",
      placement: "bottom-sc-top",
    });
  }
    if ($(".bz-popover-bot-sc").length) {
    $(".bz-popover-bot-sc").popover({
      container: ".ieghp-table",
      html: "true",
      trigger: "hover",
      placement: "bottom-sc"
    });
  }

   if ($(".bz-popover").length) {
    $(".bz-popover").popover({
      container: ".ieghp-table",
      html: "true",
      trigger: "hover",
      placement: "bottom"
    });
  }

   if ($(".bazi-popover").length) {
    $(".bazi-popover").popover({
      container: ".bzi-table_2",
      html: "true",
      trigger: "hover",
      placement: "bottom"
    });
  }
  */
  function remove_all_popovers() {
    if ($(".popover").length) {
      $(".bz-popover-bot-sc-top").popover("hide");
      $(".bz-popover-bot-sc").popover("hide");
      $(".bz-popover").popover("hide");
      $(".bazi-popover").popover("hide");
      $(".active-popover").removeClass("active-popover");
    }
  }
  $("body").click(function() {
    remove_all_popovers();
  });

  $(".bz-popover-bot-sc-top, .bz-popover-bot-sc, .bz-popover, .bazi-popover").click(
    function() {
      //console.log(this);
      $(this).addClass("active-popover");
    }
  );

  function pop_light(pop_name) {
    if ($(".popover").length) {
      remove_all_popovers();
    } else $(pop_name).popover("show");
  }

  if ($(".bazi-popover").length) {
    $(".bazi-popover")
      .popover({
        container: ".bzi-table_2",
        html: "true",
        trigger: "manual",
        placement: "bottom"
      })
      .on("click", function(evt) {
        evt.stopPropagation();
        pop_light(this);
      });
  }

  if ($(".bz-popover").length) {
    $(".bz-popover")
      .popover({
        container: ".ieghp-table",
        html: "true",
        trigger: "manual",
        placement: "bottom"
      })
      .on("click", function(evt) {
        evt.stopPropagation();
        pop_light(this);
      });
  }

  if ($(".bz-popover-bot-sc").length) {
    $(".bz-popover-bot-sc")
      .popover({
        trigger: "manual",
        container: ".ieghp-table",
        html: "true",
        placement: "bottom-sc"
      })
      .on("click", function(evt) {
        evt.stopPropagation();
        pop_light(this);
      });
  }

  if ($(".bz-popover-bot-sc-top").length) {
    $(".bz-popover-bot-sc-top")
      .popover({
        trigger: "manual",
        container: ".ieghp-table",
        html: "true",
        placement: "bottom-sc-top"
      })
      .on("click", function(evt) {
        evt.stopPropagation();
        pop_light(this);
      });
  }

  // popovers
});
