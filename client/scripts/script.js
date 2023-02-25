let currentYear = new Date().getFullYear();
const copyRightSpan = document.querySelector(".copy-right-year");
const menuBtn = document.querySelector(".mobile-nav-btn");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavBtnBurger = document.querySelector(".mobile-nav-btn__burger");
const contactForm = document.querySelector(".contact-form");
const contactFormSubmitText = document.querySelector(
  ".contact-form__submit-text"
);
// Terms and confidentiality selectors
const termsLink = document.querySelector('.terms-link');
const termsModal = document.querySelector('.terms-modal');
const termsModalClose = document.querySelector('.terms-modal_close');
// Chatbot Selectors
const modalClose = document.querySelector(".modal-close");
const chatBotModal = document.querySelector(".chatbot-modal");
const modalBackdrop = document.querySelector(".modal-backdrop");
let xeniaBotBtn = document.querySelector(".chatbot");
let chatBotChat = document.querySelector("section-4_chatbot");
let chatBotClose = document.querySelector(".chatbot-cut_icon");
let chatTextArea = document.querySelector(".chat-textarea");
let chatPara = document.querySelector(".chat-paragraphes");
let chatBoxHtml = "";
let xeniaBotHidden = false;
let xeniaBotStrictClose = false;

copyRightSpan.textContent = currentYear;
let showMenu = false;
let chatModalVisible = false;
let termsModalVisible = false;

function showChatModal() {
  chatBotModal.classList.remove("d-none");
  xeniaBotBtn.classList.add("d-none");
  xeniaBotHidden = true;
  chatModalVisible = true;
}
function hideChatModal() {
  chatBotModal.classList.add("d-none");
  xeniaBotBtn.classList.remove("d-none");
  xeniaBotHidden = false;
  chatModalVisible = false;
}

function showTermsModal() {
  termsModal.classList.remove('d-none');
  modalBackdrop.classList.remove("d-none");
  termsModalVisible = true;
}

function hideTermsModal(){
  termsModal.classList.add('d-none');
  modalBackdrop.classList.add("d-none");
  termsModalVisible = false;
}

modalClose.addEventListener('click', ()=> {
  hideChatModal();
})

modalBackdrop.addEventListener('click', ()=>{
  hideTermsModal();
  console.log('clicked')
})

// Function to open Mobile Nav menu

function mobileNavOpen() {
  mobileNavBtnBurger.classList.add("open");
  mobileNav.style.transform = "translateY(5%)";
  showMenu = true;
}

// Function to close Mobile Nav menu

function mobileNavCLose() {
  mobileNavBtnBurger.classList.remove("open");
  mobileNav.style.transform = "translateY(-110%)";

  showMenu = false;
}

menuBtn.addEventListener("click", () => {
  if (!showMenu) {
    // If menu is Closed
    mobileNavOpen();
  } else {
    // If menu is already open
    mobileNavCLose();
  }
});

// Show Success text when message submitted (contact-form)

let successMessageVisible = false;

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  successMessageVisible = true;
  if (successMessageVisible) {
    contactFormSubmitText.classList.remove("d-none");
  }

  setTimeout(() => {
    successMessageVisible = false;
    contactFormSubmitText.classList.add("d-none");
  }, 1000);
});

// Chat bot Functionality

chatBotClose.addEventListener("click", () => {
  xeniaBotHidden = true;
  xeniaBotStrictClose = true;
  xeniaBotBtn.classList.add("d-none");
  console.log("clicked");
});

xeniaBotBtn.addEventListener("click", () => {
  if (!xeniaBotHidden) {
    showChatModal();
  }
});

termsLink.addEventListener('click', (e)=>{
  e.preventDefault();
  showTermsModal();
})

termsModalClose.addEventListener('click' , ()=>{
  hideTermsModal();
})

