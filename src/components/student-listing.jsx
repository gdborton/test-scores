var React = require('react');
var EditableDisplay = require('./editable-display');
var validators = require('../utils/validators');

var StudentListing = React.createClass({
  render() {
    var students = this.props.students.map((student, index) => {
      return (
        <tr key={index} className={student.grade < 65 ? 'danger' : ''}>
          <td><EditableDisplay value={student.name} validator={validators.name} onValueChange={this.handleNameChange.bind(this, student)}/></td>
          <td><EditableDisplay value={student.grade} validator={validators.grade} onValueChange={this.handleGradeChange.bind(this, student)}/></td>
          <td><button className="btn btn-danger" onClick={() => {this.props.onDeleteStudent(student)}}>Delete</button></td>
        </tr>
      );
    });

    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Student Grade</th>
              <th style={{width: "1%"}}></th>
            </tr>
          </thead>
          <tbody>
            {students}
          </tbody>
        </table>
        <button className="pull-right btn btn-primary" onClick={this.props.onClickNewStudent}>Add New Student</button>
      </div>
    );
  },

  handleNameChange(student, name) {
    var newStudent = {
      name: name,
      grade: student.grade
    }
    this.props.onStudentChange(student, newStudent);
  },

  handleGradeChange(student, grade) {
    var newStudent = {
      name: student.name,
      grade: grade
    }
    this.props.onStudentChange(student, newStudent);
  },

  handleDeleteStudent(student) {
    this.props.onDeleteStudent(student);
  }
});

module.exports = StudentListing;
