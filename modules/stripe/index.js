!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){document.addEventListener("DOMContentLoaded",e=>{if(void 0===window.wpcf7_stripe)return void console.error("window.wpcf7_stripe is not defined.");if("function"!=typeof window.Stripe)return void console.error("window.Stripe is not defined.");const t=Stripe(wpcf7_stripe.publishable_key),n=t.elements();document.addEventListener("wpcf7submit",e=>{const r=e.detail.unitTag,o=document.querySelector(`#${r} form`),i=document.querySelector(`#${r} .wpcf7-stripe input[name="_wpcf7_stripe_payment_intent"]`);if(i&&(i.setAttribute("value",""),"payment_required"===e.detail.status)){const c=e.detail.apiResponse.stripe.payment_intent;c.id&&i.setAttribute("value",c.id);const d=n.getElement("card")||n.create("card");d.mount(`#${r} .wpcf7-stripe .card-element`),d.clear();const u=document.querySelector(`#${r} .wpcf7-stripe .card-errors`);d.addEventListener("change",e=>{e.error?u.textContent=e.error.message:u.textContent=""});const s=document.querySelector(`#${r} .wpcf7-stripe button`);s.disabled=!1,s.addEventListener("click",e=>{s.disabled=!0,t.confirmCardPayment(c.client_secret,{payment_method:{card:d}}).then(e=>{e.error?u.textContent=e.error.message:"succeeded"===e.paymentIntent.status&&wpcf7.submit(o),s.disabled=!1})})}})})}]);