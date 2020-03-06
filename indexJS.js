var url="https://fcc-weather-api.glitch.me//api/current?";
var xhr=new XMLHttpRequest();
/* function addURLParam(url,name,value){
    url+=(url.indexOf("?")==-1? "?": "&");
    url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
    return url;
} */
(function (){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(pos){
                var lat=pos.coords.latitude;
                var lon=pos.coords.longitude;
                function addURLParam(url,name,value){
                    url+=(url.indexOf("?")==-1? "?": "&");
                    url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
                    return url;
                }
                url=addURLParam(url,"lat",lat);
                console.log(url);
                url=addURLParam(url,"lon",lon);
                console.log(url);
                xhr.onreadystatechange=function(){
                    
                    if(xhr.readyState==4){
                        console.log(xhr.status);
                        if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
                            console.log(xhr.responseText);
                        }
                    };
                }
                xhr.open("get",url,false);
                /* xhr.onreadystatechange=function(){
                    if(xhr.readyState==4){
                        if((xhr.status>200&&xhr.status<300)||xhr.status==304){
                            console.log(xhr.responseText);
                        }
                    }else{

                    };
                } */
                xhr.send(null);


        })
    }
  })();