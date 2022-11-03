console.log("MyBind");
let empdetails = {
  fname: "John",
  lname: "Doe",
  getFullName: function () {
    return this.fname + " " + this.lname;
  },
};
let detailName = function () {
  console.log(this.getFullName() + " I choose you!");
};

let alldetails = detailName.bind(empdetails);
alldetails();
