import React, {Component} from 'react';



export default class RandomClock extends Component {


  state = {
    beerTime: "?",
  }



randomTime(){
  let hour = ('0000'+parseInt(Math.random() * 24)).slice(-2);
  let minutes = ('00000'+parseInt(Math.random() * 60)).slice(-2);
  this.setState({
    beerTime: `${hour} : ${minutes}`,
  })
  var button1 = document.getElementById("beerButton");
  button1.classList.add("hidden");
  var button2 = document.getElementById("thirstyButton");
  button2.classList.remove("hidden");
  var label = document.getElementById("clockLabel");
  label.classList.add("hidden");
}

beermeNow(){
  var d = new Date();
  var hour = ('0000'+d.getHours()).slice(-2);
  var minutes = ('0000'+(d.getMinutes()+1)).slice(-2) ;
  this.setState({
    beerTime: `${hour} : ${minutes}`
  })
  var oldTime = document.getElementById("originalBeerTime");
  oldTime.classList.add("hidden");
  var newTime = document.getElementById("thirstyTime");
  newTime.classList.remove("hidden");
  var partyTime = document.getElementById("partyTime");
  partyTime.classList.remove("hidden");
}



  render(){
    return (
      <>
        <h2 id="clockLabel" className="clockSection">Click here to determine a reasonable time for a beer</h2>
        <button id="beerButton" onClick={() => this.randomTime()}>Go</button>
        <br/>
        <section id="originalBeerTime">{this.state.beerTime === "?" ? <h2></h2> : <h2 className="clockSection">You can have your next beer at: <br/> <div className="clock"><p className="clockFace">{this.state.beerTime}</p></div></h2>}</section>
        <br/>
        <button id="thirstyButton" className="hidden" onClick={() => this.beermeNow()}>But.... I'm thirsty!</button><br/>
        <h1 id="thirstyTime" className="hidden clockSection">Understandable. In that case: <br/>
            <div id="partyTime" className="hidden clock"><p className="clockFace">{this.state.beerTime}</p></div>
        </h1>
      </>
    )
  }
}
