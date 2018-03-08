console.log("App.js is running!");

// JSX - JavaScript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This</p>
  </div>
);

let user = {
    name: "Andrew",
    age: 26,
    location: "Chicago"
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        return "Unknown"
    }
}

const template2 = (
    <div>
        <h2>{user.name} </h2>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
