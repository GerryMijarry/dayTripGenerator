"use strict"
// Learning objective: Use and practice JavaScript fundamentals, with an emphasis on Single Responsibility.
// Technologies: JavaScript, HTML, CSS

// Project points (unweighted):  /65
// Project points (weighted): /10

// Features: 
// (5 points): As a developer, I want to make at least three commits.

// (5 points): As a user, I want a destination to be randomly selected for my day trip.

let destinations = ["El Paso", "Albuqurque", "White Sands", "Ruidoso"]

function randomlySelectDestination (array) {
    return array[Math.floor(Math.random() * array.length)];
}

let selectedDestination = randomlySelectDestination(destinations);

// (5 points): As a user, I want a restaurant to be randomly selected for my day trip.

let restaraunts = ["Mexican", "Burgers", "Vietnamese", "Italian"]

function randomlySelectRestaraunt (array) {
    return array[Math.floor(Math.random() * array.length)];
}

let selectedRestaraunt = randomlySelectRestaraunt(restaraunts);

// (5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.

let transportation = ["car", "bus", "train", "plane"]

function randomlySelectTransportation (array) {
    return array[Math.floor(Math.random() * array.length)];
}

let selectedTransportation = randomlySelectTransportation(transportation);

// (5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.

let entertainment = ["movie", "museums", "bar hopping", "tour guide"]

function randomlySelectEntertainment (array) {
    return array[Math.floor(Math.random() * array.length)];
}

let selectedEntertainment = randomlySelectEntertainment(entertainment);

// (15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.

let dayTrip = prompt("Your random day trip is going to " + selectedDestination + " and eating " + selectedRestaraunt + " food, getting there by " + selectedTransportation + " to do " + selectedEntertainment + ". Type accept to accept the trip or press ok to re-generate a day trip." ); 

while (dayTrip != "accept") {
    
    selectedDestination = randomlySelectDestination(destinations);
    selectedRestaraunt = randomlySelectRestaraunt(restaraunts);
    selectedTransportation = randomlySelectTransportation(transportation);
    selectedEntertainment = randomlySelectEntertainment(entertainment);

    dayTrip = prompt("Your random day trip is going to " + selectedDestination + " and eating " + selectedRestaraunt + " food, getting there by " + selectedTransportation + " to do " + selectedEntertainment + ". Type accept to accept the trip or press ok to re-generate a day trip." ); 
}

// (10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.

let complete = prompt("Is your trip complete? If so type complete or hit refresh to start over.");

while (complete != "complete") {
    complete = prompt("Is your trip complete? If so type complete or hit refresh to start over.");
}


// (10 points): As a user, I want to display my completed trip in the console.

console.log("Your random day trip is going to " + selectedDestination + " and eating " + selectedRestaraunt + " and getting there by " + selectedTransportation + " to do " + randomlySelectEntertainment + " Type ok to accept the trip or press ok to re-generate a day trip." ); 


// (5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!

// All functions are single responsibility

