import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';

const batmanLogoUrl = require('./batman.png');
//require('style!css!./styles.css');

declare var global : any;

class App extends React.Component<any, any>{
  constructor() {
    super();
    this.state = {
      cmpt: 0
    };
  }

  onClick = () => {
    this.setState({
      cmpt: this.state.cmpt + 1,
    })
  }

  render(){
    return (
      <div>
        <h1>Hello!</h1>
        <button onClick={this.onClick}>Clicked {this.state.cmpt} times</button>
        <img src={batmanLogoUrl} />
      </div>
    )
  }
}

const app = <App />;

if (typeof window !== 'undefined'){
    ReactDOM.render(app, document.getElementById('root')!);
} else {
    global.getContentHtml = () => {
      return ReactDOMServer.renderToString(app);
    };
}