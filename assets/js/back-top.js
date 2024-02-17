const backButton = document.querySelector("#back-top");

backButton.addEventListener("click", () => backToTop());

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.onscroll = () => showButton();

const showButton = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 0) {
    backButton.style.opacity = "100%";
    return;
  }

  backButton.style.opacity = "0%";
};

const dynamicYear = () => {
  const dateElement = document.querySelector("#year");

  const atualYear = new Date().getFullYear();

  dateElement.innerText = atualYear;
};

dynamicYear();
