import React, {Component} from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';


class Bubble extends Component{


  render(){
    const panel = {
      margin: 1000,
      width: 100,
      height: 100,
    }
    return(

      <div>
      <BubbleChart
            graph =  {{
            zoom: .7,
            offsetX: -0.00,
            offsetY: -0.00,
            }}
            width={1000}
            height={700}
            showLegend={true} // optional value, pass false to disable the legend.
            legendPercentage={5} // number that represent the % of with that legend going to use.
            legendFont={{
                family: 'Arial',
                size: 12,
                color: '#000',
                weight: 'bold',
              }}
            valueFont={{
                family: 'Arial',
                size: 12,
                color: '#fff',
                weight: 'bold',
              }}
            labelFont={{
                family: 'Arial',
                size: 16,
                color: '#fff',
                weight: 'bold',
              }}
            data={[
            { label: 'Energy', value: 1 },
            { label: 'Materials', value: 2 },
            { label: 'Industrials', value: 3 },
            { label: 'Consumer Discretionary', value: 4},
            { label: 'Consumer Staples', value: 4},
            { label: 'Healthcare', value: 1},
            { label: 'Financials', value: 2},
            { label: "Information Technology", value: 2},
            { label: "Telecomunication Technology", value: 2},
            { label: "Utilities", value: 2},
            { label: "Real Estate", value: 3},

            ]}
        />

      </div>
    )

  }
}

export default Bubble
