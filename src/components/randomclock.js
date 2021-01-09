import React, {Component} from 'react';



export default class RandomClock extends Component {


  state = {
    beerTime: "?? : ??",
    thirstyTime: false,
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
  var oldTime = document.getElementById("originalBeerTime");
  oldTime.classList.remove("hidden");
}

// updateHidden(){
//   var oldTime = document.getElementById("originalBeerTime");
//   oldTime.classList.add("hidden");
//   var partyTime = document.getElementById("partyTime");
//   partyTime.classList.remove("hidden");
// }

beermeNow(){
  var d = new Date();
  var hour = ('0000'+d.getHours()).slice(-2);
  var minutes = ('0000'+(d.getMinutes()+1)).slice(-2) ;
  this.setState({
    beerTime: `${hour} : ${minutes}`,
    thirstyTime: true,
  })
}


  render(){
    return (
      <>
        <h2 id="clockLabel" className="clockSection">Click here to determine a reasonable time for a beer</h2>
        <button id="beerButton" onClick={() => this.randomTime()}>Go</button><br/>
        <button id="thirstyButton" className="hidden" onClick={() => this.beermeNow()}>But.... I'm thirsty!</button><br/>
        <br/>

        <section id="originalBeerTime" className="">
          {this.state.thirstyTime ?
          <h1 id="thirstyTimebox" className="clockSection">Understandable. In that case: <br/>
              <div id="partyTime" className="clock"><p className="clockFace">{this.state.beerTime}</p></div>
          </h1>
          :
          <h2 className="clockSection">You can have your next beer at: <br/>
          <div className="clock"><p className="clockFace">{this.state.beerTime}</p></div></h2>
           }
        </section>
        <br/>

      </>
    )
  }
}
