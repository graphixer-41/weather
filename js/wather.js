// Do note show your API Key on your JS File //
const API_KEY = `639e95c5556d1c2feced859cc7bea13c`;
// --------------------------------------------//
const loadTempareture = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparature(data));

}
const displayTemparature = data =>{
    const temparature = document.getElementById('temp');
    temparature.innerText = data.main.temp;
}
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;


    loadTempareture(city);
})

loadTempareture('dhaka');