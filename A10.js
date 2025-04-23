function setCookie() {
    var name = document.getElementById("name").value;
    document.cookie = "username=" + name;
    document.getElementById("showCookie").innerText = "Cookie set: " + name;
  }
  
  window.onload = function() {
    var cookies = document.cookie;
    document.getElementById("showCookie").innerText = "Saved cookie: " + cookies;
  }
  