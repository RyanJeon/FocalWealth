import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import '../Map.css';



var data = [ //temporary hard coded data.
  {
    position: {lat: -23.57, lng: -46.65},
    title: 'Test 1',
    contentString: '<div id = "profileContainer">'+
                      '<div id = "profileName">'+
                          '<h2> First User </h2>'+
                        '</div>'+
                      '<img  id = "profilepic" src = "http://www.magnideipccpa.com/wp-content/'+
                      'uploads/2016/10/Businessman-Images-HD-copy-1.png"/> ' +
                   '</div>'
  },
  {
    position: {lat: -23.659741479934045, lng: -46.66976573339457},
    title: 'Test 2',
    contentString: '<div id = "profileContainer">'+
                    '<div id = "profileName">'+
                        '<h2> Second User </h2>'+
                      '</div>'+
                    '<img  id = "profilepic" src = "http://www.magnideipccpa.com/wp-content/'+
                    'uploads/2016/10/Businessman-Images-HD-copy-1.png"/> ' +
                '</div>'
  },
  {
    position: {lat: -23.69068114130335,  lng: -46.508541418451614},
    title: 'Test 3',
    contentString: '<div id = "profileContainer">'+
    '<div id = "profileName">'+
        '<h2> ThirdUser </h2>'+
      '</div>'+
    '<img  id = "profilepic" src = "http://www.magnideipccpa.com/wp-content/'+
    'uploads/2016/10/Businessman-Images-HD-copy-1.png"/> ' +
'</div>'
    
   
  },

]

class Map extends Component{



  renderMarker(map, maps, position, title, contentString) { //Base function that generates one marker
    let marker = new maps.Marker({
        position: {lat: position.lat, lng: position.lng},
        map,
        title: title
      },
    );

    let infowindow = new maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
        console.log(title)
     
    });
   

  }
  
  //Render multiple markers
  renderMarkers(map, maps, data){
    data.map((inv) => this.renderMarker(map, maps, inv.position, inv.title, inv.contentString) );
  }


  render(){
    const panel = {
      margin: 1000,
      width: 100,
      height: 100,
    }
    return(
        <GoogleMapReact
            bootstrapURLKeys={{ key: ['AIzaSyBEUDdAhOTxSIlfOYen4VDo724RzA91L5Y'] }}
            //options={options}
            center={{lat: -23.57, lng: -46.65}}
            zoom={11}
            onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps, data)}
            heatmapLibrary={true}
            heatmap={{
                positions: [
                  {
                    lat: -23.57,
                    lng: -46.65,
                  },
                  {
                    lat: -23.659741479934045,
                    lng: -46.66976573339457,
                  },
                  {
                    lat: -23.69068114130335,
                    lng: -46.508541418451614,
                  },
                ],
                options: {
                  radius: 20,
                  opacity: 0.7,
                  gradient: [
                    'rgba(0, 255, 255, 0)',
                    'rgba(0, 255, 255, 1)',
                    'rgba(0, 191, 255, 1)',
                    'rgba(0, 127, 255, 1)',
                    'rgba(0, 63, 255, 1)',
                    'rgba(0, 0, 255, 1)',
                    'rgba(0, 0, 223, 1)',
                    'rgba(0, 0, 191, 1)',
                    'rgba(0, 0, 159, 1)',
                    'rgba(0, 0, 127, 1)',
                    'rgba(63, 0, 91, 1)',
                    'rgba(127, 0, 63, 1)',
                    'rgba(191, 0, 31, 1)',
                    'rgba(255, 0, 0, 1)'
                  ]
                },
            }}
          >
         

          </GoogleMapReact>

    )

  }
}

export default Map;
