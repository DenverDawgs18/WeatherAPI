async function getCity(city){
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=196f36e678374d1daea110706242901&q=${city}`, {mode: 'cors'})
    const data = await response.json();
    let tempC = data.current.temp_c;
    let tempF = data.current.temp_f;
    return[tempC, tempF];
    }
    catch{
        alert("An error has occured. Please try again and if it keeps repeating try again later.")
    }
    
}

let form = document.querySelector("form");
let temp = "f";
let tempes;
form.addEventListener("submit", (e) => {
    getCity(document.getElementById("city").value).then(x => {
        document.getElementById("city").value = ""
        tempes = x;
        resultsFunction(tempes);
        updateBackground(tempes[1])

    })
    e.preventDefault();
    
})
function resultsFunction(temps){
    let results = document.querySelector("p");
    if(temp === "f"){

        results.textContent = `Temperature in Fahrenheit = ${temps[1]}`
    }
    else{
        results.textContent = `Temperature in Celsius = ${temps[0]}`
    }
}
document.querySelector("#switch").addEventListener("click", () => {
    if (temp === "f"){
        temp = "c";
        resultsFunction(tempes)
    }
    else{
        temp = "f";
        resultsFunction(tempes)
    }
})
function updateBackground(temperature){
    if(temperature <= 32){
        document.body.style.backgroundColor = "cyan";
    }
    else if (temperature <= 70){
        document.body.style.backgroundColor = "gray";
    }
    else{
        document.body.style.backgroundColor = "red";
    }
}