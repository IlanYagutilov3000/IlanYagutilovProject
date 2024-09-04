/* axios.get("https://restcountries.com/") */

async function send() {
    let capital = document.getElementById("capital").value;


    try {
        let response = await axios.get(`https://restcountries.com/v3.1/capital/${capital}`)
        let countryData = response.data[0]

        let flag = countryData.flags.svg
        let name = countryData.name.common
        let population = countryData.population
        let region = countryData.region
        let languages = Object.values(countryData.languages).join(`, `)

        document.getElementById("result").innerHTML = `<div class="card d-flex justify-content-center w-50">
                <img src="${flag}" class="card-img-top" alt="Country Flag">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">Population: ${population.toLocaleString()}</p>
                    <p class="card-text">Region: ${region}</p>
                    <p class="card-text">Languages: ${languages}</p>
                </div>
            </div>`

    } catch (error) {
        console.log('Error fetching data:', error);

        document.getElementById("result").innerHTML = `<p class="text-danger"> No country found with the capital city ${capital} </p>`
    }
}