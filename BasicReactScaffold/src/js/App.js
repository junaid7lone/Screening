import React from "react";

function App(){

  let build="production"
  if (process.env.NODE_ENV !== 'production') {
    build="development";
  }

  return <div className="container">
    <h1>This app is running in {build} mode.</h1>
  </div> 
}

export default App;