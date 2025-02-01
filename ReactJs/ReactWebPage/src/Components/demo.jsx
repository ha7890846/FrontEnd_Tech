
const CodeSnippetPage = () => {
  const codeSnippet = `
import React from 'react';

const HelloWorld = () => {
  return <h1>Hello, World!</h1>;
};
export default HelloWorld;
  `;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Code Snippet Example in React</h2>
      <pre
        style={{
          backgroundColor: "#f4f4f4",
          padding: "15px",
          borderRadius: "5px",
          overflowX: "auto",
          fontSize: "16px",
        }}
      >
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

export default CodeSnippetPage;