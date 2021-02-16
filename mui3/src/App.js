import React, {Component, Fragment} from 'react';
import Button from "@material-ui/core/Button";
import List from "./List";

class App extends Component {

    state = {items:null}

    init = () => {
        let items = []
        for( let i=0;i< 1000; i++){
            items.push({name:"Ali Connors" + i})
        }
        this.setState( { items } )
    };

    render(){
        return <Fragment>
            <Button onClick={this.init}>Generate List</Button>
            {this.state.items&&<List items={this.state.items} />}
        </Fragment>

    }


}


export default App;
