const api='https://fcc-weather-api.glitch.me//api/current';
var def;
let code=String.fromCharCode(176);
let codeunit='C';
(
    function(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(pos){
                $.ajax({
                  
                    url: api,
                    data: {lon: pos.coords.longitude,
                        lat:pos.coords.latitude

                    },
                    
                    success: function (response) {
                        //def=response;
                        //console.log(def);
                        console.log(response);
                       // console.log(typeof(response));
                        //document.getElementById("container").innerHTML=response;
                        $('.city').text(response.name);
                        $('.country').text(', '+response.sys.country);
                        $('.temp').text(response.main.temp);
                        $('.btn').text(code+' '+codeunit);
                        $('#status').text(response.weather[0].main);
                        $('#WeatherImg').attr({src:response.weather[0].ic,alt:response.weather[0].description});




                    }
                   
                });
            })
        }
    }
)();