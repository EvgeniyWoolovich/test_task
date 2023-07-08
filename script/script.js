
const burgerButton = document.querySelector(".header__burger-button");
const navigation = document.querySelector(".navigation");
const catalogButtonLink = document.querySelector('.catalog-link')
const secondColumn = document

if (burgerButton) {
  burgerButton.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    burgerButton.classList.toggle("_active");
    navigation.classList.toggle("_active");
  });
}

function onNavigationClick(e) {
    document.body.classList.remove("_lock");
    burgerButton.classList.remove("_active");
    navigation.classList.remove("_active");
}

navigation.addEventListener("click", onNavigationClick);