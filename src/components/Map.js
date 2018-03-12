import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';


class Map extends Component{


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
