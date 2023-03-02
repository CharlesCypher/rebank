const menu = document.querySelector(".rebank-menu");

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const btns = faq.querySelectorAll("svg");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      faqs.forEach((question) => {
        if (question !== faq) {
          question.classList.remove("active");
        }
      });
      faq.classList.toggle("active");
    });
  });
});

// faqs.forEach((faq) => {
//   const questions = faq.querySelectorAll(".question");
//   faq.addEventListener("click", () => {
//     questions.forEach((question) => {
//       if (question !== question) {
//         faq.classList.remove("active");
//       }
//       faq.classList.toggle("active");
//     });
//   });
// });

const year = document.getElementById("year");
const d = new Date();
const thisYear = d.getFullYear();
year.innerText = thisYear + " ";
