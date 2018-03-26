import React, { Component } from 'react';
import './App.css';
import { slide as Menu } from 'react-burger-menu';
import Card from './components/Card';
import ReactDom from 'react-dom';
import Tran1 from './components/Tran1'
import Modal from 'react-modal';
import GoogleMapReact from 'google-map-react';
import Map from './components/Map';
import ReactBubbleChart from 'react-bubble-chart';
import ScrollArea from 'react-scrollbar';
import Bubble from './components/Bubble';
import customData from './Data/customData.json';
import windowSize from 'react-window-size';


var colorLegend = [
  //reds from dark to light
  {color: "#67000d", text: 'Negative', textColor: "#ffffff"}, "#a50f15", "#cb181d", "#ef3b2c", "#fb6a4a", "#fc9272", "#fcbba1", "#fee0d2",
  //neutral grey
  {color: "#f0f0f0", text: 'Neutral'},
  // blues from light to dark
  "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", {color: "#08306b", text: 'Positive', textColor: "#ffffff"}
];


class App extends Component {
  constructor(props){
    super(props);

    this.state = {

      modalOpen: false,

      filterTag: 'all', //DEfault filter tag

      filterValue: '',


      list3: [{'buyer': "Microsoft", 'seller': 'Amazon',
                  'amount': '$12,300,000', 'location': 'Seattle, WA', 'date': '2/26'},
              {'buyer': "Ebay", 'seller': 'Google',
                        'amount': '$6,120,000', 'location': 'San Francisco, CA', 'date': '2/25'},
              {'buyer': "Uber", 'seller': 'GrubHub',
                        'amount': '$1,300,000', 'location': 'New York, NY', 'date': '2/26'},
              {'index':'12', 'buyer': "Facebook", 'seller': 'Apple',
                    'amount': '$13,780,000', 'location': 'San Francisco, CA', 'date': '2/26'},
                ], //json

    }

  }

  filter(list, tag, value){
    if(this.state.filterTag === 'all'){ //filtering is not needed
      return list;
    }


    var i;
    var new_list = [];
    for(i = 0; i < list.length; i++){
      console.log(list[i]);


      if(list[i][tag] === this.state.filterValue){
        new_list.push(list[i]); //push filtered information to the array
      }

    }



    console.log(value); //get rid of it after
    return new_list;
  }

  changeFilterTag(tag, value = ''){
    this.setState({filterTag: tag});
    this.setState({filterValue: value});
  }


  closeModal(){
  this.setState({modalOpen: false});
  }

  openModal(){
    this.setState({modalOpen: true});
  }

  renderModalContent(tag){
    return(
      <div>
        <h3 onClick = {this.closeModal.bind(this)}>Close</h3>
        <h1>Region</h1>
      </div>
    )
  }


  render() {

    var data = {
      _id: 'd',        // unique id (required)
      value: 1,      // used to determine relative size of bubbles (required)
      displayText: 'd',// will use _id if undefined
      colorValue: 2, // used to determine color
      selected: true,  // if true will use selectedColor/selectedTextColor for circle/text
   }

    const panel = {
      margin: 10,
      width: 100,
      height: 100,

    };

    const SignInModal = {
      content : {
        top                   : '30%',
        left                  : '50%',
        right                 : '65%',
        bottom                : '30%',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    return (
      <div className = "container">


        <div className = "headbar">
          <h1>Focal Wealth</h1>
        </div>

        <Modal
          isOpen = {this.state.modalOpen}
          style = {SignInModal}
        >
          {this.renderModalContent('tag')}
        </Modal>


        <div className = "main-container">
          <div>
            <div className = "list1">
              <ScrollArea style = {{width: this.props.windowWidth, height: 380}} ref='scrollarea'>

              <Bubble />
              </ScrollArea>
             
            </div>

            <div className = "map">
              <Map></Map>

            </div>
          </div>

          <div className = "list2">
              <div>
                  <Tran1 show = {4} list = {customData}/>
              </div>
          </div>

        </div>

        <Menu width = "300px" >
          <h2 className = "menuhead">Catergories</h2>

          <div className = "choice">
            <img className = "icon" src = {require("./img/Region.png")}/>
            <h1 className = "choice-txt" onClick = {this.changeFilterTag.bind(this, 'location', 'Seattle, WA')}>Region</h1>
          </div>

          <div className = "choice">
            <img className = "icon" src = {require("./img/specific2.png")}/>
            <h1 className = "choice-txt">Specific</h1>
          </div>

          <div className = "choice">
            <img className = "icon" src = {require("./img/65999-200.png")}/>
            <h1 className = "choice-txt">Sector</h1>
          </div>

          <div className = "choice">
            <img className = "icon" src = {require("./img/specific.png")}/>
            <h1 className = "choice-txt" onClick = {this.changeFilterTag.bind(this, 'all')} >All</h1>
          </div>

        </Menu>


      </div>
    )
  }
}




export default App;
