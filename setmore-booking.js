(function () {
  if (document.getElementById("setmore-booking-card")) return;

  var bookingUrl = "https://bookvalentinphotoshoot.setmore.com";
  var styles = document.createElement("style");
  styles.textContent = [
    ".setmore-booking-card{position:fixed;inset:0 auto 0 0;z-index:9998;width:25vw;min-width:300px;max-width:420px;height:100vh;height:100dvh;overflow-y:auto;padding:clamp(32px,5vw,64px) 34px;border:1px solid rgba(255,255,255,.14);border-left:0;border-radius:0 22px 22px 0;background:rgba(19,18,17,.68);box-shadow:18px 0 56px rgba(0,0,0,.3);backdrop-filter:blur(28px) saturate(140%);-webkit-backdrop-filter:blur(28px) saturate(140%);color:#fafafa;display:flex;flex-direction:column;justify-content:center;opacity:1;transform:translateX(0);transition:opacity .28s ease,transform .28s ease}",
    ".setmore-booking-card[hidden]{display:flex;pointer-events:none;opacity:0;transform:translateX(-100%);visibility:hidden}",
    ".setmore-booking-card__close{position:absolute;top:12px;right:12px;width:32px;height:32px;border:1px solid rgba(255,255,255,.14);border-radius:50%;background:rgba(255,255,255,.06);color:rgba(255,255,255,.8);font:20px/1 sans-serif;cursor:pointer;transition:background .2s ease,color .2s ease}",
    ".setmore-booking-card__close:hover,.setmore-booking-card__close:focus-visible{background:rgba(255,255,255,.16);color:#fff}",
    ".setmore-booking-card__eyebrow{margin:0 36px 10px 0;color:rgba(255,255,255,.62);font:500 10px/1.4 Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;letter-spacing:.2em;text-transform:uppercase}",
    ".setmore-booking-card__title{margin:0 24px 8px 0;color:#fff;font:400 29px/1.08 'Cormorant Garamond',Georgia,serif;letter-spacing:.01em}",
    ".setmore-booking-card__copy{margin:0 0 20px;color:rgba(255,255,255,.72);font:300 13px/1.65 Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}",
    ".setmore-booking-card__link{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;min-height:48px;padding:0 17px;border:1px solid rgba(255,255,255,.8);border-radius:999px;background:rgba(255,255,255,.94);color:#111;text-decoration:none;font:500 12px/1 Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;letter-spacing:.08em;transition:background .2s ease,color .2s ease,transform .2s ease}",
    ".setmore-booking-card__link:hover,.setmore-booking-card__link:focus-visible{transform:translateY(-1px);background:#fff;color:#000}",
    ".setmore-booking-card__arrow{font-size:18px;line-height:1}",
    ".setmore-booking-toggle{position:fixed;left:clamp(16px,3vw,40px);bottom:clamp(16px,3vw,32px);z-index:9998;padding:14px 19px;border:1px solid rgba(255,255,255,.24);border-radius:999px;background:rgba(18,17,16,.78);box-shadow:0 10px 32px rgba(0,0,0,.24);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);color:#fff;font:500 11px/1 Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;transition:background .2s ease,transform .2s ease}",
    ".setmore-booking-toggle:hover,.setmore-booking-toggle:focus-visible{transform:translateY(-2px);background:rgba(35,33,31,.9)}",
    "@media(max-width:600px){.setmore-booking-card{inset:auto auto calc(16px + env(safe-area-inset-bottom)) 12px;width:min(68vw,300px);min-width:0;max-width:none;height:auto;max-height:55dvh;overflow-y:auto;padding:24px 20px;border:1px solid rgba(255,255,255,.14);border-radius:18px;background:rgba(16,15,14,.58);box-shadow:0 16px 42px rgba(0,0,0,.24);backdrop-filter:blur(18px) saturate(125%);-webkit-backdrop-filter:blur(18px) saturate(125%);display:flex;flex-direction:column;justify-content:center}.setmore-booking-card__title{font-size:25px}.setmore-booking-card__copy{margin-bottom:16px}.setmore-booking-card__link{min-height:44px}.setmore-booking-toggle{left:16px;bottom:calc(16px + env(safe-area-inset-bottom))}}",
    "@media(prefers-reduced-motion:reduce){.setmore-booking-card,.setmore-booking-card__close,.setmore-booking-card__link,.setmore-booking-toggle{transition:none}}"
  ].join("");
  document.head.appendChild(styles);

  var card = document.createElement("aside");
  card.id = "setmore-booking-card";
  card.className = "setmore-booking-card";
  card.setAttribute("aria-label", "Book a photography session");
  card.innerHTML = '<button class="setmore-booking-card__close" type="button" aria-label="Close booking panel">&times;</button>' +
    '<p class="setmore-booking-card__eyebrow">Ready when you are</p>' +
    '<h2 class="setmore-booking-card__title">Let’s plan your shoot.</h2>' +
    '<p class="setmore-booking-card__copy">Choose a time that works for you and book your session online.</p>' +
    '<a id="Anywhere_button_iframe" class="anywhere-book-now-button setmore-booking-card__link" href="' + bookingUrl + '" target="_blank" rel="noopener noreferrer" data-booking-url="' + bookingUrl + '" data-new-tab="true">Book now <span class="setmore-booking-card__arrow" aria-hidden="true">&rarr;</span></a>';

  var toggle = document.createElement("button");
  toggle.className = "setmore-booking-toggle";
  toggle.type = "button";
  toggle.textContent = "Book a session";
  toggle.setAttribute("aria-controls", "setmore-booking-card");
  toggle.setAttribute("aria-expanded", "true");
  toggle.hidden = true;

  var close = card.querySelector(".setmore-booking-card__close");
  close.addEventListener("click", function () {
    card.hidden = true;
    toggle.hidden = false;
    toggle.setAttribute("aria-expanded", "false");
  });
  toggle.addEventListener("click", function () {
    card.hidden = false;
    toggle.hidden = true;
    toggle.setAttribute("aria-expanded", "true");
  });

  document.body.appendChild(card);
  document.body.appendChild(toggle);
})();
