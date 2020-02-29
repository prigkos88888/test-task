"use strict";
$(document).ready(function () {
      // hexagrams
      $(".table_hexagrams_redact_butt").click(function () {
        $(".table_hexagrams").hide();

        $(".block_pop").show();
      });
      $(".table_hexagrams_close").click(function () {
        $(".table_hexagrams").show();
        $(".block_pop").hide();
      });

      // stratagema
      $(".table_stratagema_redact_butt").click(function () {
        $(".table_stratagema").hide();
        $(".block_pop").show();
      });
      $(".table_hexagrams_close").click(function () {
        $(".table_stratagema").show();
        $(".block_pop").hide();
      });

      // phenomenon
      $(".table_phenomenon_redact_butt").click(function () {
        $(".table_phenomenon, .phenomenon_under-title").hide();
        $(".right_block-phenomenon").show();
      });
     
      $(".sidebar_add_butt").click(function () {
        $(".table_phenomenon, .phenomenon_under-title").hide();
        $(".new_right_block-phenomenon").show();
      });

      $(".table_phenomenon_close").click(function () {
        $(".table_phenomenon, .phenomenon_under-title").show();
        $(".right_block-phenomenon").hide();
        $(".new_right_block-phenomenon").hide();
      });
      $(".popup_phenomenon_item_var").click(function () {
        $(this)
          .prev("input")
          .click();
      });

      $(".link_calendar").click(function () {
        $(".popup-qimen_container").removeClass("popup-qimen_container-hidden");
      });
      $(".popup-qimen_close").click(function () {
        $(".popup-qimen_container").addClass("popup-qimen_container-hidden");
      });

      //  PageScroll  start
      $("a.order").mPageScroll2id();
      //  PageScroll end

      // Header menu
      $(".nav_mob").on("click", function () {
        $(".icon_menu").toggleClass("icon_menu1");
        $(".mobile_side").toggleClass("mobile_side1");
      });

      // Footer special
      $(".footer_butt").click(function () {
        $(".footer-shablon-2_special").toggleClass("active");
      });

      // Slider pause
      $(".pause").on("click", function () {
        $(".pause").toggleClass("play");
        if ($(".pause").hasClass("play")) {
          console.log("pause");
          $.cookie("sliderSwitch", "0");
          $(".body_slides").addClass("pause_slide");
        } else {
          console.log("play");
          $.cookie("sliderSwitch", "1");
          $(".body_slides").removeClass("pause_slide");
        }
      });

      function sliderChekStatus() {
        var status = getCookie("sliderSwitch");
        console.log(status);
        if (status == "0") {
          $(".body_slides").addClass("pause_slide");
          $(".pause").addClass("play");
        }
      }
      sliderChekStatus();

      function getCookie(name) {
        var matches = document.cookie.match(
          new RegExp(
            "(?:^|; )" +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
          )
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }

      function setCookie(name, value, options) {
        options = options || {};

        var expires = options.expires;

        if (typeof expires == "number" && expires) {
          var d = new Date();
          d.setTime(d.getTime() + expires * 1000);
          expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
          options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);

        var updatedCookie = name + "=" + value;

        for (var propName in options) {
          updatedCookie += "; " + propName;
          var propValue = options[propName];
          if (propValue !== true) {
            updatedCookie += "=" + propValue;
          }
        }

        document.cookie = updatedCookie;
      }

      // align items to height (start)
      function heightEqualize(selector) {
        function func() {
          var arr = document.querySelectorAll(selector);
          if (!arr.length) return false;
          var minHeight = 0;
          arr.forEach(function (item, i, arr) {
            item.style.minHeight = "auto";
            var computedStyle = getComputedStyle(item);
            var currentHeight = parseFloat(computedStyle.height);
            minHeight = Math.max(minHeight, currentHeight);
          });
          arr.forEach(function (item, i, arr) {
            item.style.minHeight = minHeight + "px";
          });
        }
        setTimeout(func, 0, selector);
      }
      heightEqualize(".box_calendar");

      // align items to height (end)
      $(".spoiler-body").hide(300);
      $(document).on("click", ".spoiler-head", function (e) {
        e.preventDefault();
        $(this)
          .parents(".spoiler-wrap")
          .toggleClass("active")
          .toggleClass("closed")
          .find(".spoiler-body")
          .slideToggle();
      });

      function checkForThePlace() {

        /*
		if ($(window).width() > 1120) {
			if ($('.ss.hidden').length) {
				$('.bzi-table_box_3').css({
					"grid-column": "3/4",
					"grid-row": "3/5"
				});
				let t3Width = $(".bzi-table_box_3").width();
				$('.bzi-table_box_4').css({
					"grid-column": "1/3",
					"grid-row": "3/5",
          "
          ": t3Width + "px"
				});
			} else {
				$('.bzi-table_box_3').css({
					"grid-column": "3/4",
					"grid-row": "3/4"
				});
				$('.bzi-table_box_4').css({
					"grid-column": "3/4",
					"grid-row": "4/4",
					"max-width": "100%"
				});
			}
		} else {
			$('.bzi-table_box_3').css({
				"grid-column": "2/3",
				"grid-row": "3/4",
			});
			$('.bzi-table_box_4').css({
				"grid-column": "2/3",
				"grid-row": "4/5",
				"max-width": "100%"
			});
		}*/
      }

      function checkForThePlace_info() {
        $(".bzi-info_4").removeClass('main_table');
        $(".bzi-info_5").removeClass('main_table');
        $('.bzi-table_box_3').removeClass('hack--row-3-4');
        $('.bzi-table.bzi-table_info').removeClass('hack--row-1-7');

        var bzi_info_5 = $(".bzi-info_5").detach();
        var bzi_info_4 = $(".bzi-info_4").detach();
        var bzi_info_3 = $(".bzi-info_3").detach();
        var bzi_info_2 = $(".bzi-info_2").detach();
        var bzi_table_4 = $(".bzi-table_box_4").detach();

        $(".bzi-table_info").append(bzi_info_2);
        $(".bzi-table_info").append(bzi_info_3);
        $(".bzi-table_info").append(bzi_info_4);
        $(".bzi-table_info").append(bzi_info_5);
        $(".bzi-table_box_5").before(bzi_table_4);


        if ($(window).width() > 1120) {
          if (
            $(".bstars.hidden").length &&
            !$(".nayin.hidden").length &&
            !$(".hex.hidden").length &&
            !$(".stratagem.hidden").length
          ) {
            bzi_info_5 = $(".bzi-info_5").detach();
            $(".bzi-table_1").append(bzi_info_5);
          } else
          if (
            $(".bstars.hidden").length &&
            $(".nayin.hidden").length &&
            $(".hex.hidden").length &&
            $(".stratagem.hidden").length 
          ) {
            bzi_info_5 = $(".bzi-info_5").detach();
            bzi_info_4 = $(".bzi-info_4").detach();
            $(".bzi-table_1").append(bzi_info_4);
            $(".bzi-table_2").append(bzi_info_5);
           
              if ($(".bzi-table_box_3.hidden").length) {
                  bzi_table_4 = $(".bzi-table_box_4").detach();
                  $(".bzi-table_2").append(bzi_table_4);
                  bzi_info_5 = $(".bzi-info_5").detach();
                  $(".bzi-table_1").append(bzi_info_5);
                }

                if ($(".bzi-table_box_3.hidden").length) {
                  $('.bzi-table.bzi-table_info').addClass('hack--row-1-7');
                  if (
                    $(".bzi-table_box_3.hidden").length && 
                    $(".qimen_factor_year1.hidden").length && 
                    $(".qimen_factor_year2.hidden").length
                  ) {
                      bzi_info_5 = $(".bzi-info_5").detach();
                      bzi_info_4 = $(".bzi-info_4").detach();
                      $(".bzi-table_1").append(bzi_info_4);
                      $(".bzi-table_2").append(bzi_info_5);
                  }
            
                }
            }

            
           
          }

          if ($(window).width() <= 1120) {
            if (
              $(".bzi-table_box_3.hidden").length && (
                $(".qimen_factor_year1.hidden").length &&
                $(".qimen_factor_year2.hidden").length
              )
            ) {
              bzi_info_5 = $(".bzi-info_5").detach();
              bzi_info_4 = $(".bzi-info_4").detach();
              bzi_info_3 = $(".bzi-info_3").detach();
              $(".bzi-table_2").append(bzi_info_3);
              $(".bzi-table_2").append(bzi_info_4);
              $(".bzi-table_2").append(bzi_info_5);
            } else if (
              $(".bzi-table_box_3.hidden").length

            ) {
              bzi_info_5 = $(".bzi-info_5").detach();
              bzi_info_4 = $(".bzi-info_4").detach();
              $(".bzi-table_box_5").before(bzi_info_4);
              $(".bzi-table_box_5").before(bzi_info_5);
              $(".bzi-info_4").addClass('main_table');
              $(".bzi-info_5").addClass('main_table');
            } else if (
              $(".qimen_factor_year1.hidden").length &&
              $(".qimen_factor_year2.hidden").length &&
              $(".hex.hidden").length &&
              $(".nayin.hidden").length
            ) {
              bzi_info_5 = $(".bzi-info_5").detach();
              bzi_info_4 = $(".bzi-info_4").detach();
              $(".bzi-table_box_5").before(bzi_info_4);
              $(".bzi-table_box_5").before(bzi_info_5);
              $(".bzi-info_4").addClass('main_table');
              $(".bzi-info_5").addClass('main_table');
              $('.bzi-table_box_3').addClass('hack--row-3-4');
            }

          }
          /*
          if ($(window).width() < 1025) {
            if (
              $(".bzi-table_box_3.hidden").length &&
              $(".qimen_factor_year1.hidden").length
            ) {
              $(".bzi-info").addClass("info-hack-3");
              $(".bzi-table_box_4").css({ "max-width": "100%" });
            } else {
              $(".bzi-info").removeClass("info-hack-3");
              $(".bzi-table_box_4").css({ "max-width": "100%" });
            }
            if ($(window).width() < 456.5) {
              if (
                $(".bzi-table_box_3.hidden").length &&
                $(".qimen_factor_year1.hidden").length
              ) {
                $(".bzi-info").addClass("info-hack-4");
              } else {
                $(".bzi-info").removeClass("info-hack-4");
              }
              $(".bzi-table_box_4").css({ "max-width": "100%" });
            }
          }

          

          if (
            $(window).width() < 1120 &&
            $(".bstars.hidden").length &&
            //&&($('.nayin.hidden').length)
            $(".hex.hidden").length &&
            $(".stratagem.hidden").length &&
            $(".qimen_factor_month.hidden").length
          ) {
            $(".bzi-table_box_4").addClass("t4-hack2");
            $(".bzi-info").addClass("info-hack-2");
          } else {
            $(".bzi-table_box_4").removeClass("t4-hack2");
            $(".bzi-info").removeClass("info-hack-2");
          }
          */
        }

        checkForThePlace_info();
        window.addEventListener("resize", checkForThePlace_info);


        $(".sidebar-switcher-onOnload").each(function (i, elem) {
          if (!$(elem).prop("checked"))
            if ($(elem).attr("data-option")) {
              let need_class = "." + $(elem).attr("data-option");
              $(need_class).addClass("hidden");
            }
        });

        function reCheckTheSwichMode() {
          $(".sidebar-switcher").each(function (i, elem) {
            if (!$(elem).prop("checked"))
              if ($(elem).attr("data-option")) {
                let need_class = "." + $(elem).attr("data-option");
                $(need_class).addClass("hidden");
              }

            checkForThePlace();
          });
        }
        reCheckTheSwichMode();

        // Sidebar checkbox options
        var clickCounter = 0;
        $(".sidebar-switcher").click(function () {
          var input = this;

          if (this.type == "checkbox") {
            switchClass(this);

            if (this.classList.contains("radio-checkbox")) {
              var state = $(this).prop("checked");

              document
                .querySelectorAll("input[name=" + this.name + "]")
                .forEach(function (item) {
                  $(item).prop("checked", false);
                  switchClass(item);
                });

              $(this).prop("checked", state);
              switchClass(this);
            }
          } else if (this.type == "radio") {
            document
              .querySelectorAll("input[name=" + this.name + "]")
              .forEach(function (item) {
                if (item.dataset.option) {
                  switchClass(item);
                }
              });
          }

          reCheckTheSwichMode();

          checkForThePlace_info();

          function switchClass(item) {
            document
              .querySelectorAll("." + item.dataset.option)
              .forEach(function (elem) {
                var specialClass = elem.dataset.hide || "hidden";
                $(item).prop("checked") ?
                  elem.classList.remove(specialClass) :
                  elem.classList.add(specialClass);
              });
          }

          if (this.dataset.label) {
            if (clickCounter) {
              clickCounter = 0;
            } else {
              clickCounter++;
              $(this.dataset.label).click();
            }
          }

          if ($(".box_calendar").length) {
            heightEqualize(".box_calendar");
          }
        });

        //Phone input mask
        document.querySelectorAll('input[type="tel"').forEach(function (item, i, arr) {
          item.onkeydown = function checkKeycode(event) {
            var keycode;
            if (!event) var event = window.event;
            if (event.keyCode) keycode = event.keyCode;
            // IE
            else if (event.which) keycode = event.which; // all browsers
            if (
              (44 < keycode && keycode < 58) ||
              keycode == 187 ||
              keycode == 8 ||
              keycode == 37 ||
              keycode == 39
            ) {} else {
              return false;
            }
          };
        });

        // Timer button
        function timerMake() {
          document.querySelectorAll(".timerok").forEach(function (item) {
            function func() {
              var t = new Date();

              function timeFormatter(i) {
                return (i = i >= 10 ? i : `0${i}`);
              }
              if (document.body.offsetWidth > 480) {
                item.innerHTML = `${timeFormatter(t.getHours())}:${timeFormatter(
            t.getMinutes()
          )}:${timeFormatter(t.getSeconds())}`;
              } else {
                item.innerHTML = `${timeFormatter(t.getHours())}:${timeFormatter(
            t.getMinutes()
          )}`;
              }
            }
            func();
            setInterval(func, 1000);
          });
        }

        timerMake();
        window.addEventListener("resize", timerMake);

        //Form validation
        //formValidator.prepare();
        formValidator.prepareDT();
        formValidator.changeDatepickerPlaceholder();
        window.addEventListener("resize", formValidator.changeDatepickerPlaceholder);

        // bazi table breaking
        breakBaziTable();
        window.addEventListener("resize", breakBaziTable);
      });

    //Form validation start
    function formValidator() {
      var self = this;

      this.formFlag = 1;

      this.prepare = function () {
        document.querySelectorAll(".input-box_required").forEach(function (box) {
          box.querySelectorAll("input").forEach(function (item) {
            if (item.type == "radio" || item.type == "checkbox") {
              item.addEventListener("click", checkInput);
            } else {
              item.addEventListener("focusout", checkInput);
              //item.addEventListener('keydown',checkInput);
            }
          });
        });

        document.querySelectorAll(".datepicker").forEach(function (item) {
          item.onkeydown = function (event) {
            if (event.key >= 0 && event.key <= 9) {
              if (formatDatepickerValidation(item.value, event.key))
                item.value = formatDatepickerValidation(item.value, event.key);
            } else if (event.key == "Backspace") {
              var date = item.value.split("");
              date.pop();
              item.value = date.join("");
            }
            return false;
          };

          item.onchange = function () {
            checkInput.apply(item);
          };
        });
      };

      this.prepareDT = function () {
        document.querySelectorAll(".datepicker").forEach(function (item) {
          item.onkeydown = function (event) {
            if (event.key >= 0 && event.key <= 9) {
              if (formatDatepickerValidation(item.value, event.key))
                item.value = formatDatepickerValidation(item.value, event.key);
            } else if (event.key == "Backspace") {
              var date = item.value.split("");
              date.pop();
              item.value = date.join("");
            }
            return false;
          };

          item.onchange = function () {
            checkInput.apply(item);
          };
        });
      };

      function checkInput() {
        var item = this;

        switch (item.type) {
          case "text":
          case "password":
            if (item.classList.contains("datepicker")) {
              failValidation(item, item.value.length < 10);
              break;
            }

            failValidation(item, item.value.length < 1);
            break;
          case "tel":
            failValidation(item, item.value.length < 6);
            break;
          case "email":
            failValidation(item, !checkEmailValidation(item.value));
            break;
          case "radio":
          case "checkbox":
            var nCounter = 0;
            item
              .closest(".input-box_required")
              .querySelectorAll('input[name="' + item.name + '"]')
              .forEach(function (i) {
                if (i.checked) nCounter++;
              });
            failValidation(item, !nCounter);
            break;
        }
      }

      function failValidation(item, condition) {
        item.closest(".input-box_required").classList.remove("invalid");

        if (condition) {
          item.closest(".input-box_required").classList.add("invalid");
          self.formFlag = 0;
        }
      }

      function checkEmailValidation(email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email) == false) {
          return false;
        }
        return true;
      }

      function formatDatepickerValidation(date, key) {
        date = date.split("");
        date.push(key);

        if (date.length >= 1 && date[0] > 3) return false;
        if (date.length >= 2) {
          if (+(date[0] + date[1]) > 31) return false;
          addSlash(2);
        }
        if (date.length >= 4 && date[3] > 1) return false;
        if (date.length >= 5) {
          if (+(date[3] + date[4]) > 12) return false;
          addSlash(5);
        }
        if (date.length >= 7 && date[6] != 1 && date[6] != 2) return false;
        if (date.length >= 8 && date[7] != 0 && date[7] != 9) return false;
        if (date.length == 11) return false;

        return date.join("");

        function addSlash(n) {
          if (date[n] != "/") date[n] = "/";
        }
      }

      this.changeDatepickerPlaceholder = function () {
        if (document.documentElement.clientWidth < 600) {
          document.querySelectorAll("#tp-ios-cal").forEach(function (item) {
            item.placeholder = "дд/мм/гггг";
          });
        } else {
          document.querySelectorAll("#tp-ios-cal").forEach(function (item) {
            item.placeholder = "ДЕНЬ / МЕСЯЦ / ГОД";
          });
        }
      };

      this.validateForm = function (e, selector = ".input-box_required") {
        self.formFlag = 1;
        var butt = e.target;
        var parentForm = butt.closest("form");
        parentForm.classList.remove("invalid");

        parentForm.querySelectorAll(selector).forEach(function (box) {
          box.querySelectorAll("input").forEach(function (item) {
            checkInput.call(item);
          });

          box.querySelectorAll("select").forEach(function (item) {
            failValidation(item, !item.options[item.selectedIndex].value);
          });
        });

        if (self.formFlag) {
          formAlert(butt.dataset.show, "active", false);
          formAlert(butt.dataset.hide, "hidden", false);
          //console.log('da');
          parentForm.submit();
        } else {
          parentForm.classList.add("invalid");
          formAlert(butt.dataset.show, "active", true);
          formAlert(butt.dataset.hide, "hidden", true);
          //console.log('net');
        }

        function formAlert(s, c, b) {
          if (s)
            document.querySelectorAll(s).forEach(function (item) {
              b ? item.classList.add(c) : item.classList.remove(c);
            });
        }
      };
    }
    var formValidator = new formValidator();
    // Form valiadtion end

    // bazi table breaking
    function breakBaziTable() {
      document.querySelectorAll(".bzi-table.bzi-table_5").forEach(function (item) {

        var bz_scrollWidth = window.innerWidth - $(document).width();
        var bz_docwidth = $(document).innerWidth();
        var bz_w = bz_scrollWidth + bz_docwidth;

        if (bz_w <= 900 || $(".nesk_raschet .bzi-table_5").length) {
          if (!$(".new-el-cell").length) {
            var last_cell = [];
            document
              .querySelectorAll(".bzi-table_5 .bzi-cell:nth-child(11n)")
              .forEach(function (item) {
                var tmp = item;
                $(tmp).addClass("new-el-cell");
                last_cell.push(tmp.outerHTML);
              });

            var tmp = 0;
            document
              .querySelectorAll(".bzi-table_5 .bzi-cell:nth-child(11n-6)")
              .forEach(function (item) {
                $(item).after(last_cell[tmp]);
                tmp++;
              });
          }
          //var columnsOrigin = item.dataset.columns;
          var columnsOrigin = 12;

          if (!columnsOrigin) return;

          item.querySelectorAll(".bzi-cell").forEach(function (cell, i) {
            cell.style.gridColumn = cell.style.gridRow = "1/2";
          });

          var columns = getComputedStyle(item).gridTemplateColumns.split(" ")
            .length;
          var columnsCounter = 1;
          var rowsCounter = 1;
          var rowsDM = Math.ceil(
            item.querySelectorAll(".bzi-cell").length / columnsOrigin
          );

          item.querySelectorAll(".bzi-cell").forEach(function (cell, i) {
            if (columnsCounter > columnsOrigin) {
              columnsCounter = 1;
              rowsCounter++;
            }

            var rowsD = Math.ceil(columnsCounter / columns);

            var x = columnsCounter;
            if (x > columns) x -= columns;

            cell.style.gridColumn = `${x}/${x + 1}`;

            if (!$(".nesk_raschet .bzi-table_5").length) {
              if (rowsDM * rowsD + rowsCounter >= 35) {
                cell.style.gridRow = `${rowsDM * rowsD + rowsCounter}/${rowsDM *
              rowsD +
              rowsCounter +
              1}`;
              } else {
                cell.style.gridRow = `${rowsDM * rowsD +
              rowsCounter +
              40}/${rowsDM * rowsD + rowsCounter + 1 + 40}`;
              }
            } else {
              if (rowsDM * rowsD + rowsCounter >= 15) {
                cell.style.gridRow = `${rowsDM * rowsD + rowsCounter}/${rowsDM *
              rowsD +
              rowsCounter +
              1}`;
              } else {
                cell.style.gridRow = `${rowsDM * rowsD +
              rowsCounter +
              40}/${rowsDM * rowsD + rowsCounter + 1 + 40}`;
              }
            }

            columnsCounter++;

            cell.classList.remove("bzi-cell_first");
            if (rowsCounter == 1) cell.classList.add("bzi-cell_first");
          });
          //
        } else {


          if ($(".new-el-cell").length) {
            document
              .querySelectorAll(".bzi-table_5 .bzi-cell:nth-child(12n-6)")
              .forEach(function (item) {
                item.remove();
                $(".new-el-cell").removeClass("new-el-cell");
              });
          }


          var columnsOrigin = 11;

          if (!columnsOrigin) return;

          item.querySelectorAll(".bzi-cell").forEach(function (cell, i) {
            cell.style.gridColumn = cell.style.gridRow = "1/2";
          });

          var columns = getComputedStyle(item).gridTemplateColumns.split(" ")
            .length;
          var columnsCounter = 1;
          var rowsCounter = 1;
          var rowsDM = Math.ceil(
            item.querySelectorAll(".bzi-cell").length / columnsOrigin
          );

          item.querySelectorAll(".bzi-cell").forEach(function (cell, i) {
            if (columnsCounter > columnsOrigin) {
              columnsCounter = 1;
              rowsCounter++;
            }

            var rowsD = Math.ceil(columnsCounter / columns);

            var x = columnsCounter;
            if (x > columns) x -= columns;

            cell.style.gridColumn = `${x}/${x + 1}`;

            if (rowsDM * rowsD + rowsCounter >= 35) {
              cell.style.gridRow = `${rowsDM * rowsD + rowsCounter}/${rowsDM *
            rowsD +
            rowsCounter +
            1}`;
            } else {
              cell.style.gridRow = `${rowsDM * rowsD + rowsCounter + 40}/${rowsDM *
            rowsD +
            rowsCounter +
            1 +
            40}`;
            }

            columnsCounter++;

            cell.classList.remove("bzi-cell_first");
            if (rowsCounter == 1) cell.classList.add("bzi-cell_first");
          });
          //
        }
      });

      document.querySelectorAll(".bzi-table.bzi-table_6").forEach(function (item) {
        var columnsOrigin = item.dataset.columns;

        if (!columnsOrigin) return;

        item.querySelectorAll(".bzi-cell").forEach(function (cell, i) {
          cell.style.gridColumn = cell.style.gridRow = "1/2";
        });

        var columns = getComputedStyle(item).gridTemplateColumns.split(" ").length;
        var columnsCounter = 1;
        var rowsCounter = 1;
        var rowsDM = Math.ceil(
          item.querySelectorAll(".bzi-cell").length / columnsOrigin
        );

        item.querySelectorAll(".bzi-cell").forEach(function (cell, i) {
          if (columnsCounter > columnsOrigin) {
            columnsCounter = 1;
            rowsCounter++;
          }

          var rowsD = Math.ceil(columnsCounter / columns);

          var x = columnsCounter;
          if (x > columns) x -= columns;

          cell.style.gridColumn = `${x}/${x + 1}`;

          if (rowsDM * rowsD + rowsCounter >= 13) {
            cell.style.gridRow = `${rowsDM * rowsD + rowsCounter}/${rowsDM * rowsD +
          rowsCounter +
          1}`;
          } else {
            cell.style.gridRow = `${rowsDM * rowsD + rowsCounter + 40}/${rowsDM *
          rowsD +
          rowsCounter +
          1 +
          40}`;
          }

          columnsCounter++;

          cell.classList.remove("bzi-cell_first");
          if (rowsCounter == 1) cell.classList.add("bzi-cell_first");
        });
      });

      document.querySelectorAll(".bzi-table.bzi-table_7").forEach(function (item) {
        var columnsOrigin = item.dataset.columns;

        if (!columnsOrigin) return;

        item.querySelectorAll(".bzi-cell").forEach(function (cell, i) {
          cell.style.gridColumn = cell.style.gridRow = "1/2";
        });

        var columns = getComputedStyle(item).gridTemplateColumns.split(" ").length;
        var columnsCounter = 1;
        var rowsCounter = 1;
        var rowsDM = Math.ceil(
          item.querySelectorAll(".bzi-cell").length / columnsOrigin
        );

        item.querySelectorAll(".bzi-cell").forEach(function (cell, i) {
          if (columnsCounter > columnsOrigin) {
            columnsCounter = 1;
            rowsCounter++;
          }

          var rowsD = Math.ceil(columnsCounter / columns);

          var x = columnsCounter;
          if (x > columns) x -= columns;

          cell.style.gridColumn = `${x}/${x + 1}`;

          if (rowsDM * rowsD + rowsCounter >= 5) {
            cell.style.gridRow = `${rowsDM * rowsD + rowsCounter}/${rowsDM * rowsD +
          rowsCounter +
          1}`;
          } else {
            cell.style.gridRow = `${rowsDM * rowsD + rowsCounter + 40}/${rowsDM *
          rowsD +
          rowsCounter +
          1 +
          40}`;
          }
          columnsCounter++;
          cell.classList.remove("bzi-cell_first");
          if (rowsCounter == 1) cell.classList.add("bzi-cell_first");
        });
      });

      /*
if ($('.bzi-table.bzi-info .bzi-info_5').length && $(window).width() >1120){
  var bzi_info_5 =  $('.bzi-table.bzi-info .bzi-info_5').detach();
  $('.bzi-table_1').append(bzi_info_5);
} else if ($(window).width() <=1120){
  var bzi_info_5 =  $('.bzi-table_1 .bzi-info_5').detach();
  $('.bzi-table.bzi-info').append(bzi_info_5);
}
*/
    }