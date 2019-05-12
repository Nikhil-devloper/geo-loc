import React from 'react';
import DisplayShow from './DisplayShow';

const SeasonDisplay = (props) => {

  function getSeason(month,lat) {
      if(month > 2 && month < 9) {
          return lat>0 ? "summer":"winter";
        }
        else {
          return lat > 0 ? "winter" : "summer";
        }
    }

    function getText(season) {
      if(season=="summer") return "Let's Heat the Beach !";
      if(season=="winter") return "Burr It's Cold";
    }

    let lat= props.lat;
    let month = new Date().getMonth();
    let season = getSeason(month,lat);
    let text = getText(season)

    return <DisplayShow Season= {season} Text= {text} lat={props.lat} long={props.long} />;
  }

export default SeasonDisplay;
