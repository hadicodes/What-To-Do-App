"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This"
    )
);

var user = {
    name: "Andrew",
    age: 26,
    location: "Chicago"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    } else {
        return "Unknown";
    }
}

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h2",
        null,
        user.name,
        " "
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
