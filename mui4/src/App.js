import React, {Fragment, useState} from "react";
import List from './List';
import Button from "@material-ui/core/Button";
function App() {
  const [items, setItems] = useState(null)


  const init = () => {
    let items = []
    for( let i=0;i< 1000; i++){
      items.push({name:"Ali Connors" + i})
    }
    setItems(items)
  };


  return <Fragment>
    <Button onClick={init}>Generate List</Button>
    {items&&<List items={items} />}
  </Fragment>
}

export default App;
