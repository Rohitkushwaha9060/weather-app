const API_KEY = `19c4bad0b66bbbe54f57a7aa81dc28ba`;
const form = document.querySelector("#search_form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
    weather.innerHTML = `
                            <div class="col my-3">
                                <h1 class="text-center"><i class="fa fa-home"></i> Loading......</h1>
                            </div>
                        `;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data)
}

const showWeather = (data) => {
    console.log(data)

    if (data.code = "404") {
        weather.innerHTML = `
                            <div class="col my-3">
                                <h1 class="text-center"><i class="fa fa-home"></i> City Not Found</h1>
                            </div>
                        `;

    }
    weather.innerHTML = `
                         <div class="card shadow-lg bg-body p-3 mb-5 rounded">
                            <div class="card-body">
                            <div class="col my-3">
                                <h1 class="text-center">${data.name} , <span>${data.sys.country}</span></h1>
                            </div>
                            <div class="col my-3">
                                <h1 class="text-center"> ${data.main.temp}&deg C</h1>
                            </div>
                            <div class="col my-3">
                                <h1 class="text-center"> ${data.weather[0].main}</h1>
                            </div>
                    </div>
                </div>
                           
                        `;
}

form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
)
