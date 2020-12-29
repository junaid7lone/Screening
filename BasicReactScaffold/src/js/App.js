import React from "react";

function App(){

    let build="development"

    // if(process?.env?.NODE_ENV){
    //     build = process.env.NODE_ENV
    // }

    return <h1>This app is running in {build} mode.</h1>;
}

export default App;