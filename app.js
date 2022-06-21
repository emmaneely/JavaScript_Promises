console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let watching = new Promise((resolve, reject) => {
    let userWatchingLiveStream = Boolean(Math.round(Math.random()));
    
    if (userWatchingLiveStream) {
        resolve("Thumbs up and Subscribe!");
    } else {
        reject({
            name: "User Left",
            message: ":(",
        })
    }
});

watching
.then(message => console.log(message))
.catch(error => console.error(error.name + " " + error.message));