import React from 'react';

import './App.css';
import { render } from '@testing-library/react';

function App() {
  var i=1 

  return (
   
    <div className="App">
      <h1>Header</h1>
            <h2>Content</h2>
            <p>This is the new app content!!!</p>
            <p data-myattribute = "somevalue">This is the bewcontent!!!</p>
            <h1>{1+1}</h1>
            <h1>{ i===2 ? 'True':'False'}</h1>
            <Header/>
            <Content/>
            
    </div>
  );

}
export class Header extends React.Component {
  render() {
     return (
        <div>
           <h1>Inner Component Header</h1>
        </div>
     );
  }
}
export class Content extends React.Component {
  render() {
     return (
        <div>
           <h2>Inner Component Content</h2>
           <p>The content text!!!</p>
        </div>
     );
  }
}
//export {App,Header,Content};
//export default App;
//export {Header,Content};
export default App;