const os = require('os')


// info about current user
const user = os.userInfo();
console.log(user);

// method returns system uptime in seconds
const user1 =os.uptime();
console.log(`The system is up for ${user1} seconds`);

// method to see the current os

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemu: os.totalmem(),
    freememoey: os.freemem()
}
console.log(currentOS);