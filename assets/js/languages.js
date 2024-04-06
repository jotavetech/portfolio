const heroText = document.querySelector("#hero-text");
const heroDescription = document.querySelector("#hero-description");
const aboutText = document.querySelector("#about-text");
const aboutDescription = document.querySelector("#about-description");
const firstProjectText = document.querySelector("#first-project-text");
const secondProjectText = document.querySelector("#second-project-text");
const thirdProjectText = document.querySelector("#third-project-text");
const seeProjectBtn = document.querySelectorAll(".see-project-btn");

const changeLanguageBtn = document.querySelector("#change-language");

const getStoredLanguageOnLoad = () => {
  const storedLanguage = localStorage.getItem("language");

  if (storedLanguage) setContent(storedLanguage);
  else {
    localStorage.setItem("language", "english");
    setContent("english");
  }
};

const changeLanguage = () => {
  const storedLanguage = localStorage.getItem("language");

  if (storedLanguage === "english") {
    setContent("portuguese");
    localStorage.setItem("language", "portuguese");
  } else {
    setContent("english");
    localStorage.setItem("language", "english");
  }
};

const getLanguageData = async () => {
  const response = await fetch("/assets/language-data.json");
  const data = await response.json();

  return data;
};

const setContent = async (language) => {
  const content = await getLanguageData();

  const data = content[language];

  heroText.innerHTML = data.hero.text;
  heroDescription.innerHTML = data.hero.description;

  aboutText.innerHTML = data.about.text;
  aboutDescription.innerHTML = data.about.description;

  firstProjectText.innerHTML = data.projects.firstText;
  secondProjectText.innerHTML = data.projects.secondText;
  thirdProjectText.innerHTML = data.projects.thirdText;

  seeProjectBtn.forEach((btn) => (btn.innerHTML = data.projects.seeProject));

  changeLanguageBtn.innerHTML = data.utils.changeLanguage;
};

getStoredLanguageOnLoad();

changeLanguageBtn.addEventListener("click", (e) => changeLanguage());
