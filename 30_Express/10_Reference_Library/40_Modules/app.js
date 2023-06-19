// Import function method 1
//  ./ says to look in current directory
const { greet, add } = require("./my_module");
greet();
add(5, 7);


// Import function method 2
const myCustomModule = require("./my_module");
myCustomModule.greet();
myCustomModule.add(5, 7);