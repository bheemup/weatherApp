const submitBtn=document.getElementById("submitBtn");
const APIKEY="77f7e20d1b59d1b9a0dbbd0d978eb087";
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name");
const tempreture=document.getElementById("tempreture");
const temp_status=document.getElementById("temp_status");
const middle_layer =document.querySelector(".middle_layer");

const getInfo=async(event)=>{
    event.preventDefault();
    const cityVal =cityName.value;
    if(cityVal==""){
         city_name.innerText="Please Write city name first"
         city_name.style="color:yellow";
         middle_layer.style="visibility: hidden"
    }else{
       try{
         const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${APIKEY}`)
         let data = await res.json();
          let arrData =[data];
          tempreture.innerText=arrData[0].main.temp
          city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`
          middle_layer.style=" visibility: visible";
        //   condition to check sunny or cloudy
          const tempMood =arrData[0].weather[0].main;

          if(tempMood=='Clear'){
             temp_status.innerHTML= "<i class='fas fa-sun' style='color:#eccc68'></i>"
          }else if(tempMood=="Clouds"){
            temp_status.innerHTML= "<i class='fas fa-cloud' style='color:#f1f2f6'></i>"

          }else if(tempMood=="Rain"){
            temp_status.innerHTML= "<i class='fas fa-rain' style='color:#a4b0be'></i>"

          }else{
            temp_status.innerHTML= "<i class='fas fa-sun' style='color:#eccc68'></i>"

          }
       

       }catch(err){
        city_name.innerText="Please Write city name Correctly"
        city_name.style="color:blue"
        middle_layer.style="visibility: hidden"
       }
    }
   
}

submitBtn.addEventListener("click",getInfo)