import { Link } from "react-router-dom";

const Success = (props) => {
  return (
    <>
      <h1>Success {props.student}</h1>
      <Link to={"/form"}>
        <button>Return Form</button>
      </Link>
    </>
  );
};

export default Success;
