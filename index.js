
function Spy() {
    console.log("This is a spy.");
}

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction () {
    return function named() {
        console.log("My name is Harriette.");
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I have no name.");
    }
}