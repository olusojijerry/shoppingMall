import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import BodyBuilder from './containers/BodyBuilder/BodyBuilder';
import About from './containers/About/About';
import Account from './containers/Account/AccountInfo';
import Cart from './containers/Cart/MyCart';
import Shop from './containers/Shop/Shop';

class App extends Component {
  render(){
    return (
      <div>
        <Layout>
          {/* the switch statement is for all pages available for the website */}
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/account" component={Account} />
            <Route path="/cart" component={Cart} />
            <Route path="/shop" component={Shop} />
            <Route path="/" component={BodyBuilder} />
          </Switch>
          {/* <BodyBuilder></BodyBuilder> */}
        </Layout>
      </div>
    );
  }
}

export default App;
