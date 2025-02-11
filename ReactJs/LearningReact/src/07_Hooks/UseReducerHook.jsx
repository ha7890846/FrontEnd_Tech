import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + state.step,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - state.step,
      };
    case "CHANGE_STEP":
      return {
        ...state,
        step: action.payload,
      };
    default:
      throw new Error(`action type ${action.type} is unexpected.`);
  }
};

const UseReducerHook = () => {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });

  // const increment = () => setState(count + step);
  // const decrement = () => setCount(count - step);
  // const handleChange = (e) => setStep(parseInt(e.target.value));

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  const handleChange = (e) =>
    dispatch({
      type: "CHANGE_STEP",
      payload: parseInt(e.target.value),
    });

  return (
    <div>
      <header>
        <h1>Counter using UseReducer</h1>
      </header>
      <main>
        <section>
          <p className="output">{state.count}</p>
          <div>
            <button type="button" onClick={decrement} >
              -
            </button>
            <button type="button" onClick={increment}>
              +
            </button>
          </div>
        </section>

        <section>
          <label htmlFor="step">Step : </label>
          <input
            id="step"
            type="range"
            min="1"
            max="10"
            value={state.step}
            onChange={handleChange}
          />
          <label>{state.step}</label>
        </section>
      </main>
    </div>
  );
};

export default UseReducerHook;
