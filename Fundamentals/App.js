import React from "react";
import ReactDOM from "react-dom/client";


//React.createElement => object => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "From tag");
console.log(heading);

//JSX React is convention where we merge html with js , it is HTML like syntax
//html is not written in js , this is jsx

//babel helps in , JSX is converted to react element and then it converted into the html element
//JSX => React.createElement => object => HTMLElement(render)


//React Element
const Jsxheading = (
  <div id="container">
    <h1 className="head">This is from JSX</h1>
  </div>
);
console.log(Jsxheading);

const fn = () => true;
const fn2 = () => { return true; };
const number = 1000;

// React functional Component => A javascript function which return the react element
const HeadingComponent = () => {
    return (
        <div className="container">
            { Jsxheading } 
            <h2 className="heading">Functional Component { number }</h2>
      </div>
    );
}

//same syntax without return 
// const HeadingComponent2 = () => (
//    <h2 className="heading">Functional Component</h2>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

 