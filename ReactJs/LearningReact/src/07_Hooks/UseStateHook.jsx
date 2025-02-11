import { useState } from "react";
const UseStateHook = () => {
  const [likeCount, setlikeCount] = useState(0);
  const [dislikeCount, setdislikeCount] = useState(0);
  return (
    <div>
      {/* UseState Hook
            A state is a piece of data that changes over time. To add a state variable to a component, you use the useState()hook
            Here is an example of how to use the useState() hook */}
      {/* const [state, setState] = useState(initialState); */}

      <h1>Use State Hooks:</h1>
      <h3>Like and Dislike Button</h3>
      <h4>&bull;Click on Like button to increase Like Count</h4>
      <h4>&bull;Click on Dislike button to increase Dislike Count</h4>

      <h1>Like Count: {likeCount}</h1>
      <h1>Dislike Count: {dislikeCount}</h1>
      <button
        onClick={() => {
          setlikeCount(likeCount + 1);
          console.log("Element Rendered");
        }}
      >
        Like
      </button>
      <button onClick={() => setdislikeCount(dislikeCount + 1)}>Dislike</button>

      {/* The useState() function returns an array with exactly two elements:
         //  *  A variable (state) that holds the current state value. In the first render, the state variable has a value of initialSate.
         //*   A function (setState) that allows you to change the current value of the state variable to a new one and trigger a re-render. */}
    </div>
  );
};
export default UseStateHook;
