import React from 'react';

class Loading extends React.Component {

  render() {
    return (
      <div style={{ display: "flex",justifyContent: "center",alignItems: "center" }}>
      <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem"}}>
  <span className="sr-only"></span>
</div>
</div>
    )

  }

}

export default Loading;
