import React from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';


export default () => 
<nav className="navbar navbar-inverse">
  <div className="container">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul className="nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
    </ul>
    <ul className="nav">
    	<LoginButtons />
    </ul>
  </div>
</nav>;