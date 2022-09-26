var weathercontainer =document.getElementById("weathercontainer")


//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=a2f3c37678244f4475dd420987c6244d

async function getdata(){
    var cityName=document.getElementById('cityName').value
    console.log(cityName)
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a2f3c37678244f4475dd420987c6244d`)
    let res = await data.json()
    console.log(res)

    weathercontainer.innerHTML=`
    
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="https://www.skymetweather.com/content/wp-content/uploads/2013/09/Satellite-Image-India-10-September-2013-13-00.jpg"
          class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Weather Update ${cityName}</h5>
          <p class="card-text m-1"><small class="text-muted">Humidity:   ${res.main.humidity}</small></p>
          <p class="card-text m-1"><small class="text-muted">Temperature:   ${res.main.temp}</small></p>
          <p class="card-text m-1"><small class="text-muted">Description:   ${res.weather[0].description}</small></p>
        </div>
      </div>
    </div>
    
    `
}