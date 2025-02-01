const Variables = () => {
  return (
    <>
      <h1>Variables</h1>
      <p>
        Variables are used to store data values in a program. In JavaScript, we
        use the var keyword to declare variables. The value of a variable can be
        changed during the execution of a program. In JavaScript, we can declare
        variables using the <span>
           var, let, or const </span> keyword.
      </p>
      <h4>Declaring Variables:</h4>
      <pre>
        <code>
          {
  `// using the var keyword
  var x = 10; 
  // using the let keyword
  let y = 20; 
  // Using the const keyword
  const z = 30;`
          }
        </code>
      </pre>
      <h2>var</h2>
      <p>
        The var keyword is used to declare variables in JavaScript. The value of
        a variable declared using the var keyword can be changed during the
        execution of a program. The scope of a variable declared using the var
        keyword is the function in which it is declared.
      </p>
      <h2>let</h2>
      <p>
        The let keyword is used to declare variables in JavaScript. The value of
        a variable declared using the let keyword can be changed during the
        execution of a program. The scope of a variable declared using the let
        keyword is the block in which it is declared.
      </p>
      <h2>const</h2>
      <p>
        The const keyword is used to declare variables in JavaScript. The value
        of a variable declared using the const keyword cannot be changed during
        the execution of a program. The scope of a variable declared using the
        const keyword is the block in which it is declared.
      </p>
    </>
  );
};
export default Variables;
