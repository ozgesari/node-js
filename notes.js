// The power of Node
// -Most powerfull tech in web development to emerge in 10 years
// -Enables applications that can handle millions of users without blocking
// - From simple webpages to largest scaled applications, to Windows/Mac desktop apps (with Electron),
// and hardware(embedded systems)
// - Allows us to build entire applications end to end in one language - Javascript
// - We can write Javascript to control C++ built features. These two together are knowns as Node.js
// C++ has many features that directly interact with the operating system portion.
// Http, fs etc. that will give us access to C++ features that give us access to the computer internals
// They are going to handle a vast amount of the interaction with this underlying os system 
// features like file system
// we understand the mental models of how it's working

// ------------------

// 1- Saves data and functionality(code)
// 2- Uses that data by running functionality(code)
// 3- Has a ton of built-in labels that trigger Node features that are built in C++ to use our 
// computer's internal 

// Let's see the 2 things that JS does by itself saving and using data

// let  num = 3;
// 1. Save a function (code to run, parameters awaiting inputs)
 function multipyBy2(inputNumber) {
     const result = inputNumber * 2;
     return result;
 }

 // 2a Call /run/invoke/execute a function (with parens)
 // and 2b. insert an input (an argument)
 const output = multipyBy2(num);
 const newOutput = multipyBy2(10);

 //Thread execution . run line by line (execute the code as it goes)
 