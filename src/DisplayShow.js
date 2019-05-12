import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import beach from './beach.jpg';
import './Jumbo.css';

class DisplayShow extends React.Component {

state = {
  season: this.props.Season
}

  render() {

    const myfun=(sson) => {
        this.setState({season: sson})
    }

    console.log(this.props);
    if(this.state.season=="summer")
      return (
        <div>
          <Jumbotron className="summer">
            <h1 className="display-1" className="head">Let's Heat the Beach! bcoz It's Summer here..</h1>
              <p className="lead"> Based on Geographic location contents of web page genrated </p>
              <p className="lead"> latitude: {this.props.lat} <br/> longitude: {this.props.long} </p>
              <p className="lead">
              <Button color="primary" onClick={() => myfun("winter")}>See Other One</Button>
                </p>
          </Jumbotron>
        </div>
    )
    else {
      return (
        <div>
          <Jumbotron className="winter">
            <h1 className="display-1" className="head">Burr...! It's Cold Here! bcoz It's Winter here..</h1>
              <p className="le"> Based on Geographic location contents of web page genrated </p>
              <p className="le"> latitude: {this.props.lat} <br/> longitude: {this.props.long} </p>
              <p className="lead">
              <Button color="primary" onClick={() => myfun("summer")}>See Other One</Button>
          </p>
        </Jumbotron>
      </div>
      )
    }
  }
}

export default DisplayShow;
