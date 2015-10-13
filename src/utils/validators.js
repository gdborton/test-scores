module.exports = {
  name(name) {
    return name.trim().length > 0;
  },

  grade(grade) {
    var validNumber = /^[0-9]*.{0,1}[0-9]*$/.test(grade);
    var innerGrade = parseFloat(grade);

    return !!(validNumber && typeof innerGrade === 'number' && innerGrade <= 100 && innerGrade >= 0);
  }
}
