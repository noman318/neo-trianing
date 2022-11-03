function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("get user name");
    setTimeout(() => {
      resolve({
        userId: userId,
        userName: "Noman",
      });
    }, 2000);
  });
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`User_Name_is ${user.userName}`);
    setTimeout(() => {
      resolve(["a", "b", "c", "d"]);
    }, 3000);
  });
}
function getServicesCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`get cost of services ${services}`);
    setTimeout(() => {
      resolve(services.length * 500);
    }, 3000);
  });
}
getUser(101)
  .then(getServices)
  .then(getServicesCost)
  .then((cost) => {
    console.log(cost);
  });
