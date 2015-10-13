var React = require('react');
var validators = require('../utils/validators');

var NewStudentForm = React.createClass({
  getInitialState() {
    return {
      nameError: false,
      gradeError: false
    };
  },

  render() {
    return (
      <div>
        <div className="modal-backdrop fade in"></div>
        <div className="modal" style={{display: "block"}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleModalCancel}><span aria-hidden="true">×</span></button>
                <h4>New Student Form</h4>
              </div>
              <div className="modal-body">
                <div className={'form-group' + (this.state.nameError ? ' has-error' : '')}>
                  <label>Student Name</label>
                  <input ref="studentName" className="form-control" placeholder="Student Name" onKeyPress={this.handleKeyPress} onChange={this.handleChange}/>
                </div>
                <div className={'form-group' + (this.state.gradeError ? ' has-error' : '')}>
                  <label>Student Grade</label>
                  <input ref="studentGrade" className="form-control" placeholder="0-100" onKeyPress={this.handleKeyPress} onChange={this.handleChange}/>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-cancel" onClick={this.handleModalCancel}>Cancel</button>
                <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  handleKeyPress(event) {
    if (event.which === 13) {
      this.handleSubmit();
    }
  },

  handleChange(event) {
    if (event.target === this.refs.studentName) {
      this.setState({
        nameError: !validators.name(event.target.value)
      });
    } else if (event.target === this.refs.studentGrade) {
      this.setState({
        gradeError: !validators.grade(event.target.value)
      });
    }
  },

  handleSubmit() {
    if (!this.state.nameError && !this.state.gradeError) {
      const studentName = this.refs.studentName.value;
      const studentGrade= parseInt(this.refs.studentGrade.value);
      this.props.onSubmit(studentName, studentGrade);
      this.props.onModalCancel();
    }
  },

  handleModalCancel() {
    this.props.onModalCancel();
  }
});

module.exports = NewStudentForm;
