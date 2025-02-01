/* eslint-disable react/prop-types */
const Child = (props) => {
  return (
    <div>
      <p>
        child&apos;s father details :
        {/* passing the props from parent compo to child compo */}
        {props.person.name} of age: {props.person.age}
      </p>
    </div>
  );
};

export default Child;
