var React = require('react');

var EditableDisplay = React.createClass({
  getInitialState() {
    return {
      value: this.props.value,
      editing: false,
      error: false
    };
  },

  willRecieveProps(nextProps) {
    this.setState({
      value: nextProps.value,
      error: false
    });
  },

  render() {
    if (!this.state.editing) {
      return (
        <div onClick={()=> {this.setState({editing: true});}}>{this.props.value}</div>
      );
    }
    setTimeout(()=>{this.refs.input.focus()}, 0);
    return (
      <div className={'form-group' + (this.state.error ? ' has-error' : '')}>
        <input ref="input" className="form-control" value={this.state.value} onKeyPress={this.handleKeyPress} onChange={this.handleChange} onBlur={this.handleBlur}/>
      </div>
    );
  },

  handleKeyPress(event) {
    if (event.which === 13 && this.isValid()) {
      this.handleSubmit();
    }
  },

  handleSubmit() {
    if (!this.state.error) {
      this.setState({ editing: false});
      this.props.onValueChange(this.state.value);
    }
  },

  handleChange() {
    this.setState({
      value: this.refs.input.value,
      error: !this.isValid()
    });
  },

  isValid() {
    return this.props.validator(this.refs.input.value);
  },

  handleBlur() {
    if (this.state.error) {
      this.refs.input.focus();
    } else {
      this.handleSubmit();
    }
  }
});

module.exports = EditableDisplay;
