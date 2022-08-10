import { Navigate } from "react-router-dom";

const Form = () => {
  const postStudent = async (e) => {
    e.preventDefault();

    // dire a fetch quelle methode j'utilise: POST
    // dire a fetch quel est le type des données que je lui passe: JSON
    // dire a fetch quelles données je lui passe

    const student = {
      name: e.target.firstChild.value,
    };

    const request = await fetch(`http://localhost:5000/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });

    const response = await request.json();
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={postStudent}>
        <input type="text" />
        <button type="submit">Create student</button>
      </form>
    </>
  );
};

export default Form;
