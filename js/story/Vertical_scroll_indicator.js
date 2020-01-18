// https://codepen.io/paulobrien/pen/JWdoXm
// 放棄 2 bug不知道哪來的????
(function() {
  var indicator = $("#indicator");
  var counter = indicator.find("span");

  var win = jQuery(window);
  if (indicator.length) {
    var moveIndicator = debounce(function() {
      // 這裡要應該改成 第一章id???
      var viewportHeight = $(window).height();

      //
      var documentHeight = $(document).height();
      var hasScrolled = $(window).scrollTop();

      var percent = (hasScrolled / (documentHeight - viewportHeight)) * 100;
      // 移動高度
      indicator.css("padding-top", 1.9 * percent + "px");

      // % 顯示 無法往左邊顯示 應該是空背佔到 def
      counter.css("padding-left", 25 + "px");
      counter.html(Math.floor(percent) + "%");
    }, 10);
  }

  win.on("resize scroll", moveIndicator);

  function debounce(func, wait, immediate) {
    var timeout;

    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
})();
