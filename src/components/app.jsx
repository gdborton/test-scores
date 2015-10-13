var React = require('react');
var ReactDOM = require('react-dom');
var NewStudentForm = require('./new-student-form');
var StudentSummary = require('./student-summary');
var StudentListing = require('./student-listing');

var Header = require('./header');

var App = React.createClass({
  getInitialState() {
    return {
      students: [],
      modalShowing: true
    }
  },
  render() {
    return (
      <div>
        <Header/>
        {this.state.modalShowing ? <NewStudentForm onSubmit={this.handleNewStudent} onModalCancel={() => this.setState({modalShowing: false})} /> : null }
        <div className="container">
          <StudentListing students={this.state.students} onClickNewStudent={this.handleClickNewStudent} onDeleteStudent={this.handleDeleteStudent} onStudentChange={this.handleStudentChange}/>
          <StudentSummary students={this.state.students} />
        </div>
      </div>
    );
  },

  handleDeleteStudent(student) {
    var index = this.state.students.indexOf(student);
    var students = this.state.students;
    students.splice(index, 1)
    this.setState({
      students: students
    })
  },

  handleClickNewStudent() {
    this.setState({
      modalShowing: true
    });
  },

  handleNewStudent(name, grade) {
    this.setState({
      students: this.state.students.concat({name, grade})
    });
  },

  handleStudentChange(oldStudent, newStudent) {
    var students = this.state.students;
    var index = students.indexOf(oldStudent);
    students[index] = newStudent;
    this.setState({ students });
  }
});

ReactDOM.render(<App/>, document.querySelector('div')); // React discourages, document.body, so use the only div instead.
