import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading.js';
import './Jumbo.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                    lat: null,
                    errorMsg: '',
                    long:null
                 };
 }


  render() {

      if( this.state.errorMsg && !this.state.lat) {
          return <div class="center-block"> {this.state.errorMsg} </div>
      }

      if(!this.state.errorMsg && this.state.lat ) {
         //return <div> Lattitude:  {this.state.lat} </div>
         return(
           <SeasonDisplay lat={this.state.lat} long ={this.state.long}/>
         )
       }

       if(!this.state.errorMsg && !this.state.lat ) {
          return (
            <div class="center-block">
            <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem"}}>
        <span className="sr-only"></span>
      </div>
      <br />
      Loading...
      </div>
          )
      }
    }

    componentDidMount() {

      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position)
          this.setState({ lat: position.coords.latitude, long: position.coords.longitude });
        },
        (err) => this.setState({ errorMsg: "Error"+err.message })
      )

    }

    componentDidUpdate() {
      console.log("componentDidUpdate");
    }

}

export default App;
