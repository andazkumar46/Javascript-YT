// Immediate Invoked Function Experation (IIFE)
// method 1
(function chai() {

    // this is named IIFE
    console.log(`DB CONNECTED`);
    
})();

// method 2

( () => {    // this simple IIFE
    console.log(`DB CONNECTED TWO`);
    
})();

// mehod 3 with passing argument
( (name) => {    // this is also a simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})("andaz")