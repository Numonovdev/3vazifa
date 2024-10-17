import { useContext } from "react";
import { useRef } from "react";
import { UserContext } from "../App";

function Login() {

     const{user, setUser}=useContext(UserContext)

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
     setUser(formData)
    console.log(formData); 
  };

  return (
    <div className="formdiv">
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input ref={firstNameRef} type="text" placeholder="FirstName" />
        <input ref={lastNameRef} type="text" placeholder="LastName" />
        <input ref={ageRef} type="number" placeholder="Age" />
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" className="btn">
          Join
        </button>
      </form>
    </div>
  );
}

export default Login;
