(function() {
  myHTMLInclude();

  function myHTMLInclude() {
    var z, i, a, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      if (z[i].getAttribute("w3-include-html")) {
        a = z[i].cloneNode(false);
        file = z[i].getAttribute("w3-include-html");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            a.removeAttribute("w3-include-html");
            a.innerHTML = xhttp.responseText;
            z[i].parentNode.replaceChild(a, z[i]);
            myHTMLInclude();
          }
        };
        xhttp.open("GET", file, true);
        return xhttp.send();
        return;
      }
    }
  }
})();
// 來不及解決
// https://www.w3schools.com/howto/howto_html_include.asp
// https://www.quanzhanketang.com/howto/howto_html_include.html

// has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
// https://blog.csdn.net/qq_26580757/article/details/78671716

// https://developer.chrome.com/extensions/xhr
