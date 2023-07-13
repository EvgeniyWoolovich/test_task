const burgerButton = document.querySelector(".header__burger-button");
const navigation = document.querySelector(".navigation");
const catalogButtonLink = document.querySelector(".catalog-link");

const email = document.getElementById("email-feld");
const emailError = document.getElementById("email-error");
const emailErrorText = "Enter the correct company email";
const emailREg = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$");

const phone = document.getElementById("phone");
const phoneError = document.getElementById("phone-error");
const phoneErrorText = `
Enter the format number:
+79999999999`;
const phoneREg = new RegExp(
  "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
);

const company = document.getElementById("company");
const companyError = document.getElementById("company-error");
const companyErrorText = "Enter the correct company name";

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

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

company.addEventListener("change", (e) =>
  updateValue(e, undefined, companyError, companyErrorText)
);
email.addEventListener("change", (e) =>
  updateValue(e, emailREg, emailError, emailErrorText)
);
phone.addEventListener("change", (e) =>
  updateValue(e, phoneREg, phoneError, phoneErrorText)
);

function updateValue(e, regExp, error, errorText) {
  if (regExp) {
    if (!regExp.test(e.target.value)) {
      error.textContent = errorText;
    } else {
      error.textContent = "";
    }
  } else {
    if (e.target.value.trim()) {
      error.textContent = "";
    } else {
      error.textContent = errorText;
    }
  }
}

async function feedback() {
  let user = {
    name: "test_name",
    email: "mailTest@mail.com",
    description: "test_description",
    phone: "79877081161",
  };

  var url = "/ajax/feedback.php";
  var formData = new FormData();
  formData.append("name", "test_name");
  formData.append("email", "mailTest@mail.com");
  formData.append("description", "test_description");
  formData.append("phone", "79877081161");

  fetch(url, { method: "POST", body: formData })
    .then(function (response) {
      return response.text();
    })
    .then(function (body) {
      console.log(body);
    });

  let result = await response.json();
  alert(result.message);
}

feedback();
