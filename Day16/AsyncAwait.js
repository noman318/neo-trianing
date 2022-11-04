console.log("MyAsyncAwait");

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
async function showServiceCost() {
  let user = await getUser(101);
  let services = await getServices(user);
  let showCost = await getServicesCOst(services);
  console.log(`Service cost ${showCost}`);
}
showServiceCost();
