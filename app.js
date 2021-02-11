mapboxgl.accessToken = "pk.eyJ1IjoibWluYWhqdWwiLCJhIjoiY2trdjNtazBqMXNuNDJwcGFseTBhbXFqMCJ9.R9csh4NyjHBl4FZKOjAn9g";
 
    navigator.geolocation.getCurrentPosition(sussese1,
        erorlo1,{enableHighAccuracy : true})


    function sussese1(position){
         console.log(position);
         mapset([position.coords.longitude, position.coords.latitude])
    }

    function erorlo1(){

    }

    function mapset(center){
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center : center,
            zoom : 15
         });
         map.addControl(new mapboxgl.NavigationControl());

         var directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
          });
          
          map.addControl(directions, 'top-left');
        }