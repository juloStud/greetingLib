import React,{Component} from "react";
import Greeting from "./Greeting";

class App extends Component{
    render(){
        return (
            <React.Fragment>
              <Greeting name="Jules" />
            </React.Fragment>
          );
    }
}

export default App;