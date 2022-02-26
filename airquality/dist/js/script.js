const articleTitle = document.querySelector(".article-title");
const languageCheckbox = document.querySelector(".language-checkbox");
const articleAuthor = document.querySelector(".article-author");
const articleImage = document.querySelector(".article-img");
const grayText = document.querySelector(".gray-text");
const firstText = document.querySelector(".first-text");
const secondText = document.querySelector(".second-text");
const thirdText = document.querySelector(".third-text");
const dataHeader = document.querySelector(".data-header");
const dataText = document.querySelector(".data-text");
const cityTitle = document.querySelector(".city-title");
const cityOptions = document.querySelector(".city-options");
const cityName = document.querySelector(".city-name");
const cityAqi = document.querySelector(".aqi");
const cityCigg = document.querySelector(".cigg");
const methodologyTitle = document.querySelector(".methodology-title");
const methodologyText1 = document.querySelector(".methodology-text-1");
const methodologyText2 = document.querySelector(".methodology-text-2");
const methodologyText3 = document.querySelector(".methodology-text-3");
const methodologyText4 = document.querySelector(".methodology-text-4");

// fetch data and toggle languages
languageCheckbox.addEventListener("change", toggleLanguages);
function toggleLanguages() {
  if (!languageCheckbox.checked) {
    fetch("/src/data/english.json")
      .then((response) => response.json())
      .then((data) => {
        articleTitle.innerHTML = data["hero_1_title"];
        grayText.innerHTML = data["p_1_value"];
        firstText.innerHTML = data["p_2_value"];
        secondText.innerHTML = data["p_3_value"];
        thirdText.innerHTML = data["p_4_value"];
        dataHeader.innerHTML = data["p_5_value"];
        dataText.innerHTML = data["compare-tabs_1_method"];
        cityTitle.innerHTML = data["compare-tabs_1_title"];
        methodologyTitle.innerHTML = data["p_6_value"];
        methodologyText1.innerHTML = data["p_7_value"];
        methodologyText2.innerHTML = data["p_8_value"];
        methodologyText3.innerHTML = data["p_9_value"];
        methodologyText4.innerHTML = data["p_10_value"];
      })
      .catch((err) => err);
  } else {
    fetch("../src/data/hindi.json")
      .then((response) => response.json())
      .then((data) => {
        articleTitle.innerHTML = data["hero_1_title"];
        grayText.innerHTML = data["p_1_value"];
        firstText.innerHTML = data["p_2_value"];
        secondText.innerHTML = data["p_3_value"];
        thirdText.innerHTML = data["p_4_value"];
        dataHeader.innerHTML = data["p_5_value"];
        dataText.innerHTML = data["compare-tabs_1_method"];
        cityTitle.innerHTML = data["compare-tabs_1_title"];
        methodologyTitle.innerHTML = data["p_6_value"];
        methodologyText1.innerHTML = data["p_7_value"];
        methodologyText2.innerHTML = data["p_8_value"];
        methodologyText3.innerHTML = data["p_9_value"];
        methodologyText4.innerHTML = data["p_10_value"];
      })
      .catch((err) => err);
  }
}

// set hero image
function fetchImage() {
  fetch("../src/data/english.json")
    .then((response) => response.json())
    .then((data) => {
      let img = document.createElement("img");
      img.src = data["hero_1_image"];
      articleImage.appendChild(img);
    })
    .catch((err) => err);
}

// fetch city values
function fetchCityValues() {
  fetch("../src/data/english.json")
    .then((response) => response.json())
    .then((data) => {
      // city selection and show all cities on dropdown
      for (let index = 1; index <= data["total_cities_1_value"]; index++) {
        const option = document.createElement("option");
        option.value = data[`compare-tabs_1_city_${index}_name`];
        option.innerHTML = data[`compare-tabs_1_city_${index}_name`];
        cityOptions.appendChild(option);

        // set data attributes
        option.setAttribute(
          "data-aqi",
          data[`compare-tabs_1_city_${index}_aqi`]
        );
        option.setAttribute(
          "data-cigg",
          data[`compare-tabs_1_city_${index}_cigg`]
        );
      }

      // show name of city
      function addValue() {
        if (
          cityOptions.value ==
          cityOptions.options[cityOptions.selectedIndex].text
        ) {
          const pText = document.createElement("p");
          pText.innerHTML = cityOptions.value;
          cityName.appendChild(pText);

          while (cityName.children.length > 1) {
            cityName.removeChild(cityName.firstChild);
          }
        }

        cityAqi.innerHTML =
          cityOptions.options[cityOptions.selectedIndex].getAttribute(
            "data-aqi"
          );
        cityCigg.innerHTML =
          cityOptions.options[cityOptions.selectedIndex].getAttribute(
            "data-cigg"
          );
      }
      cityOptions.addEventListener("change", addValue);
    })
    .catch((err) => err);
}

fetchImage();
fetchCityValues();
