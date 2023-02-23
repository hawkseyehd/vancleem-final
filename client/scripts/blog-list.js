// let xeniaBotBtn = document.querySelector(".chatbot");
// let chatBotChat = document.querySelector("section-4_chatbot");
// let chatBotClose = document.querySelector(".chatbot-cut_icon");
// let chatTextArea = document.querySelector(".chat-textarea");
// let chatPara = document.querySelector(".chat-paragraphes");
// let chatBoxHtml = "";
// let xeniaBotHidden = false;
// let xeniaBotStrictClose = false;

// chatBotClose.addEventListener("click", () => {
//   xeniaBotHidden = true;
//   xeniaBotStrictClose = true;
//   xeniaBotBtn.classList.add("chatbot_js");
//   console.log("clicked");
// });

// xeniaBotBtn.addEventListener("click", () => {
//   if (!xeniaBotHidden) {
//     window.scrollTo({
//       left: 0,
//       top: document.body.scrollHeight,
//       behavior: "smooth",
//     });
//     xeniaBotBtn.classList.add("chatbot_js");
//     xeniaBotHidden = true;
//   }
// });

// $.fn.isInViewport = function () {
//   var elementTop = $(this).offset().top;
//   var elementBottom = elementTop + $(this).outerHeight();

//   var viewportTop = $(window).scrollTop();
//   var viewportBottom = viewportTop + $(window).height();

//   return elementBottom > viewportTop && elementTop < viewportBottom;
// };

// $(window).on("resize scroll", function () {
//   if (!xeniaBotStrictClose) {
//     if ($("#chat-bot-chat").isInViewport()) {
//       $(".chatbot").addClass("chatbot_js2");
//     } else {
//       $(".chatbot").removeClass("chatbot_js2 chatbot_js");
//       xeniaBotHidden = false;
//     }
//   }
// });

// $(window).on("load", function () {
//   if ($("#chat-bot-chat").isInViewport()) {
//     $(".chatbot").addClass("chatbot_js");
//     xeniaBotHidden = true;
//   }
// });

// $(".chat-submit").on("click", function () {
//   if (chatTextArea.value !== "" && chatTextArea.value !== null) {
//     console.log(chatTextArea.value);

//     chatBoxHtml +=
//       `<div class="chat-paragraph">
//       <p>` +
//       chatTextArea.value +
//       `</p>
//     </div>`;
//     $(".chat-paragraphes").html(chatBoxHtml);
//   }
// });

$(".tool-name").on("click", function () {
  var toolId = $(this).attr("id");
  console.log(toolId);
  $(".tool-name").removeClass("active-tool");
  $(this).addClass("active-tool");

  $("#allBlogs").removeClass("blogSpace");
  $("#allBlogs").addClass("filterBlogs");

  $(".bloglink").each(function () {
    if ($(this).hasClass(toolId)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});

$(".pagination li a").on("click", function (event) {
  event.preventDefault();
  $(".pagination li a").removeClass("active");
  $(this).addClass("active");
});
