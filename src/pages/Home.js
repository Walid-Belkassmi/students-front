import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const request = await fetch("http://localhost:5000/students");
    const response = await request.json();

    setStudents(response);
  };
 
  return (
    <>
      <h1>Home</h1>
      <ul>
        {students.map((student) => (
          <li>
            <Link to={`/success/${student.name}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/Form">Add a student</Link>
    </>
  );
};

export default Home;
