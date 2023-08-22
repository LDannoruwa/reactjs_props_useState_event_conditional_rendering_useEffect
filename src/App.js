import logo from './logo.svg';
import './App.scss'; //Import sass file
import { useEffect, useState } from 'react'; //Import useState Hook
import WelcomeDemo from './ExportLargeDemo'; //Import Larger component
import { HelloWorld } from './ExportSmallDemo'; //Import small component

//functional component always starts with a capital letter (naming convention)
function App() { //functional component that returns a React element (JSX)
  return (
    <>
      <HelloWorld/>
      <WelcomeDemo/>

      <DemoUseStateHook/>
      <DemoPropsComponentMethod1 city = "Kurunegala"/> {/* Pass data to props */}
      <DemoPropsComponentMethod2 city = "Kurunegala"/>
      <DemoEventHandeling/>
      <DemoList/>
      <FormDemo/>
      <ConditionalRenderingDemo />
      <UseEffectDemo/>
    </>
  );
}

const DemoUseStateHook = ()=>{ //functional component that returns a React element (JSX) |arrow function
  const [name, setName] = useState("") //Initialize useState | const [currentState, updatedSate] =  useState("setInitialState")

  return(
    <>
    {/* A JSX comment */}

    <h1>My name is : {name}</h1> {/* {read_state} */}
    <button type='button' onClick={()=> setName("Lakshitha")}>Change Name</button> {/* Update State |Event handeling*/}
    </>
  );
}

const DemoPropsComponentMethod1 = (props) =>{ //the function receives 'props' as a parameter function
  return(
      <h1>I am from {props.city}</h1> //Use props variable(s) in JSX template
  );
}

const DemoPropsComponentMethod2 = ({city}) =>{ //the function receives 'propsVariable' as a parameter function
  return(
      <h1>{city} is a nice place.</h1>
  );
}

const DemoEventHandeling = () =>{
  const shoot = () => {
    alert("Button is clicked");
  }

  return (
    <button onClick={shoot}>Click</button>
  );
}

//------------------------------------List in reat---------------------------------------------
//Note: javascript .map array method
//The .map() method allows you to run a function on each item in the array, returning a new array as the result.
//In React, map() can be used to generate lists.

//React List
//The key attribute is very important in uniquely identifying each particular item in the array.
const DemoList = () =>{
  //2D Array = [{key, value}]
  const cars =[
                {
                  id:1,
                  model: "Ford",
                },

                {
                  id:2,
                  model: "BMW",
                },

                {
                  id:3,
                  model: "Audi",
                }
              ];
  return(
    <ul>
      {cars.map((car) => <Car key = {car.id} model={car.model}/>)}
    </ul>
  );
}

const Car = ({model}) =>{
  return(
    <li>car model : {model} </li>
  );
} 
//------------------------------------List in reat---------------------------------------------


const FormDemo = () =>{
  const [firstName, setfirstName] = useState("");

  const handleInput = (event) => {
    setfirstName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //To prevent reloarding when submitting
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}> 
      <label>Enter your first name:
        <input type="text" onChange={handleInput}></input>
        <button type="submit">Submit</button>
      </label>
    </form>

    <h1>Hello {firstName}, welcome to React JS!</h1>
    </>
  )
}

const ConditionalRenderingDemo = () =>{
  const [showLastName, setShowLastName] = useState(false);

  const [lastName, setlastName] = useState("");

  const handleInputLastName = (event) => {
    setlastName(event.target.value);
  }

  const handleSubmitLastName = (event) => {
    event.preventDefault(); //To prevent reloarding when submitting
    setShowLastName(true);
  }
  
  return (
    <>
    <form onSubmit={handleSubmitLastName}> 
      <label>Enter your last name:
        <input type="text" onChange={handleInputLastName}></input>
        <button type="submit">Submit</button>
      </label>
    </form>

    {showLastName && //conditional rendering in react js | if(showLastName == true) then show
       <h1>Your last name : {lastName}</h1>
    }
    </>
  )
}

//-----------------------------------------------------------------------------------------------
/*
The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)

useEffect(() => {
  //Runs on every render
});

useEffect(() => {
  //Runs only on the first render
}, []);

*/
const UseEffectDemo = () =>{
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here
  
  return <h1>I've rendered {count} times!</h1>;
}

export default App;
