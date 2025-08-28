import { Link } from "react-router";

const Unauthorized = () => {
  return (
    <div>
      <div>Unauthorized</div>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Unauthorized;
