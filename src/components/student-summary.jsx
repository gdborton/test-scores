var React = require('react');

var StudentSummary = React.createClass({
  render() {
    let min = 100;
    let max = 0;
    let average = 0;
    if (this.props.students.length) {
      this.props.students.forEach(student => {
        if (student.grade < min) {
          min = student.grade;
        } else if (student.grade > max) {
          max = student.grade;
        }
        average += student.grade;
      });
      average = (average / this.props.students.length).toFixed(2);
    } else {
      min = 0;
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Lowest Score</th>
            <th>Highest Score</th>
            <th>Average Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{min}</td>
            <td>{max}</td>
            <td>{average}</td>
          </tr>
        </tbody>
      </table>
    );
  }
});

module.exports = StudentSummary;
