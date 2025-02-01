/* eslint-disable react/prop-types */

// Passing the String-value from parent compo to child compo
export const PropsStr = (props) => {
  return <h1>Hello my name is {props.name} </h1>;
};

// Passing the Int value from parent compo to child compo
export const PropsInt = (props) => {
  return <h2>Age of character is: {props.age}</h2>;
};

// Passing An Object from parent compo to child compo
export const PropsObj = (props) => {
  return (
    <div>
      <h3>Here Is the Car Details That he owns:</h3>
      <p>
        car name: {props.car.name} of Model: {props.car.model}
        </p>
    </div>
  );
};

// Destructuring Props.... with var name
export const DestructureProps = ({ actorName, movieName }) => {
  return (
    <div>
      <h2>
        The {actorName} is Played Heroic role in {movieName} film.
      </h2>
    </div>
  );
};
