const userInfo = require('./information');
console.log(userInfo);
const cowsay = require("cowsay");
console.log(cowsay.say({
    text: (`Hello, I am ${userInfo.informations.firstName} from ${userInfo.informations.campus}`),
    e: "oO",
    T: "U ",
}));