const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  console.log(countries);
  const CountriesHTML = countries.map((country) => getCountryHTML(country));
  //   console.log(CountriesHTML);

  const container = document.getElementById("countries");
  container.innerHTML = CountriesHTML.join(" ");
};

const getCountryHTML = ({ name, flags, area }) => {
  // Step 1
  //   const { name, flags } = country;
  return `
    <div class="country">
    <h2>${name.common}</h2>
    <p>Area: ${area}</p>
    <img src="${flags.png}">
    </div>
    `;
};

loadCountries();
