function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  const slogans = document.querySelector(".slogan");
  const firstSlogan = slogans.firstElementChild;
  const secondSlogan = slogans.querySelector(":nth-child(3)");
  const scrollDiv = document.querySelector(".scroll-container");
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
    firstSlogan.textContent = "Here are what we do best";
    secondSlogan.textContent = "To make money";
    scrollDiv.style.display = "none";
    secondSlogan.style.marginBottom = "250px";
  }
}
