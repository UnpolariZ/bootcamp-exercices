const person = {
  firstname: "Abdel",
  lastname: "Sadki",
  age: 42,
  fullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
  // Complete here
  introduceMyself: function() {
    const presentation = "Hello! I'm " + this.firstname + " " + this.lastname + " and I'm " + this.age + "." ;
    return presentation;
  }
};
module.exports = person;
