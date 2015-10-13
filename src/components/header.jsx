var React = require('react');

var Header = React.createClass({
  render() {
    return (
      <header className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand">Student Grade Analysis</a>
          </div>
        </div>
      </header>
    );
  }
});

module.exports = Header;
