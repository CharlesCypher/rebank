const menu = document.querySelector(".rebank-menu");
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  const questions = faq.querySelectorAll(".question");
  faq.addEventListener("click", () => {
    questions.forEach((question) => {
      if (question !== question) faq.classList.remove("active");
      faq.classList.toggle("active");
    });
  });
});
const thisYear = new Date().getFullYear();
const year = (document.getElementById("year").innerText = thisYear);
