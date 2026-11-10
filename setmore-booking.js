(function () {
  if (document.getElementById("Anywhere_button_iframe")) return;

  var button = document.createElement("button");
  button.type = "button";
  button.id = "Anywhere_button_iframe";
  button.className = "anywhere-book-now-button";
  button.setAttribute("data-booking-url", "https://bookvalentinphotoshoot.setmore.com");
  button.setAttribute("data-new-tab", "true");
  button.textContent = "Book now";
  button.style.cssText = "background-color: #000; color: #fff; border: none; padding: 12px 18px; font-size: 14px; font-weight: 600; border-radius: 6px; cursor: pointer; position: fixed; right: 0px; top: 25%; display: block; z-index: 9999; transform: translate(30%, 0) rotate(-90deg);";
  document.body.appendChild(button);

  if (!document.getElementById("anywhere_book_now_script")) {
    var script = document.createElement("script");
    script.id = "anywhere_book_now_script";
    script.type = "text/javascript";
    script.src = "https://assets.setmore.com/integration/book-now/live/v1/anywhere-book-now.js";
    document.head.appendChild(script);
  }
})();
