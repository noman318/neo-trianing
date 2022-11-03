let empDetails = {
  fname: "shaikh",
  lname: "Noman",
  getFullName: function () {
    return this.fname + " " + this.lname;
  },
};
let details = function (a, b) {
  console.log(this.getFullName() + " loves" + a + " " + b);
};
details.call(empDetails, " only", "food");
details.apply(empDetails, [" only", "Tasty_Food"]);
