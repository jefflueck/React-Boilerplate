  const React = require('react');
  const ReactDOM = require('react-dom');
  const {Route, Router, IndexRoute, hashHistory} = require('react-router');


  // Load foundation
  require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css');
  $(document).foundation();

  // App css
  require('style-loader!css-loader!sass-loader!applicationStyles')

  ReactDOM.render(
    <p>Boilerplate 3 Project</p>,
    document.getElementById('app')
  );
