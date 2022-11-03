function getUser(userId, callback) {
  console.log("get user name");
  setTimeout(() => {
    callback({
      userId: userId,
      userName: "Noman",
    });
  }, 2000);
}

function getServices(user, callback) {
  console.log(`User_Name_is ${user.userName}`);
  setTimeout(() => {
    callback(["a", "b", "c", "d"]);
  }, 3000);
}
function getServicesCOst(services, callback) {
  console.log(`get cost of services ${services}`);
  setTimeout(() => {
    callback(services.length * 500);
  }, 3000);
}
getUser(101, (user) => {
  getServices(user, (services) => {
    getServicesCOst(services, (cost) => {
      console.log(`the service cost ${cost}`);
    });
  });
});
