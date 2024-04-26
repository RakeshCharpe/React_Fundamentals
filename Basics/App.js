//Creating the nested element
//const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "I'm h1 tag")));

// if we wanted to create siblings then we need to used array 
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);
// this create complex code for that we used JSX to make life easy but this is the core react code


const heading = React.createElement("h1", { id: "heading" }, "Hello World from React !!!");
//React element is nothing but the plain javascript object heading returns the object 
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// render function is responsible for the take the js object , create Tag and put it in DOM
root.render(parent);
