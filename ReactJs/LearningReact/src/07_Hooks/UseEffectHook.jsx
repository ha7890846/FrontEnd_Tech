import { useState, useEffect } from "react";
const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("rendered while count changes");
  }, [count]);
  useEffect(() => {
    console.log("rendered every time while change in content.");
  });
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Define the handler function that updates the state with the window's width
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Add the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ! Render only Once -
  //! for checking this comment out the above useEffect(without dependencies) and uncomment the below useEffect
  //   useEffect(() => {
  //     console.log("rendered only once");
  //   }, []);

  return (
    <>
      <h1>UseEffect Hook</h1>
      <p>
        UseEffect Hook is used to perform side effects include data fetching,
        manual DOM manipulation, or any other operations that impact outside of
        the component.
        <br />
        It is a function that takes two arguments,
        <b>a function and an array of dependencies.</b>{" "}
      </p>
      <pre>
        <label htmlFor="syntax">Syntax: </label>
        <code>
          {`import React, { useEffect } from 'react';
useEffect(()=>{
    // side effect code
},[dependencies])`}
        </code>
      </pre>
      <p>
        <b>&bull;Setup: </b>
        setup is the main function containing side effects, which you want to
        execute.
        <br />
        <b>&bull;Dependencies: </b>
        dependencies is an optional array of dependent values that determine
        when the setup function should run. The useEffect hook will run the
        setup function based on the items specified in the dependencies array.
        <br />
        <b>case 1:</b> If the dependencies array is empty, the setup function
        will run only once after the initial render.
        <br />
        <b>case 2:</b> If the dependencies array contains a value, the setup
        function will run whenever that value changes.
        <br />
        <b>case 3:</b> If the dependencies array contains multiple values, the
        setup function will run whenever any of those values change.
        <br />
        <b>case 4:</b> Run an effect after every rerender To run a function
        during the initial render and after every rerender, you pass only the
        setup function to the useEffect() function and skip the dependencies
        array.
        <br />
        <b>&bull;Cleanup: </b>
        cleanup is the function that is called when the component unmounts.
        <br />
        <b>&bull;Return: </b>
        useEffect can also return a function, which will be called when the
        component unmounts.
        <br />
        <b>&bull;Syntax : </b>
        <br />
      </p>
      <pre>
        <code>
          {`import React, { useEffect } from 'react';
function UseEffectHook() {
    useEffect(() => {
        console.log("useEffect Hook");
        }, []);`}
        </code>
      </pre>

      <div>
        <h1>UseEffect Hook Example:</h1>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <h2>count : {count}</h2>
        <p>Check the console after clicking.</p>
      </div>
      <div>
        <h1>Current Window Dimension</h1>
        <p>Window : {width}x{height}px</p>
        <p>It affects only when window is resized.</p>
      </div>
    </>
  );
};
export default UseEffectHook;
