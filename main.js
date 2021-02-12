const button = document.getElementById("button")
button.addEventListener('click', clickButton);
// console.log(button)

async function clickButton() {
    // console.log('hi')
    const country = "Belgie"
    // console.log(country)
    const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
    // console.log(url)
    const response = await axios.get(
        "https://restcountries.eu/rest/v2/name/${country}?fullText=true"
    );
    // console.log(response)
    const infoBelgium = response.data[0];
    const displayCountryInfo = `${infoBelgium.name} is situated in ${infoBelgium.subregion}. It has a population of ${infoBelgium.population} people.`
    console.log(displayCountryInfo)

    const capital = `The capital is ${infoBelgium.capital}`
    console.log(capital)

}
// clickButton();

function countryCurrencies(currencies) {
    // console.log('hi')
    let allCurrencies = ""
    for (let i = 0; i < currencies.length; i++) {
        const valuta  = currencies[i];
        console.log("??", valuta)

    }
}
countryCurrencies(clickButton);



