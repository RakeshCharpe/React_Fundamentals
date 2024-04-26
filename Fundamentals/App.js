const heading = React.createElement("h1", { id: "heading" }, "Hello World from React !!!");
//React element is nothing but the plain javascript object heading returns the object 
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// render function is responsible for the take the js object , create Tag and put it in DOM
root.render(heading);
