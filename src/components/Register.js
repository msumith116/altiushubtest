import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "./Firebase";
// import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailsent,setemailsent]=useState(false);
  const signup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await sendEmailVerification(user);
      setemailsent(true);
      console.log(user.email);
    } catch (error) {
      console.log(error);
    }
  };

  const handleemail = (event) => {
    setEmail(event.target.value);
  };

  const handlepass = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="form-container sup">
      <form className="auth-form" onSubmit={signup}>
        <h1>{emailsent ? "Successful" : "Create Account"}</h1>
        {!emailsent && (
          <div>
            <label htmlFor="UserEmail">Email</label>
            <div className="inputs">
              <input
                id="UserEmail"
                className='email'
                type="email"
                value={email}
                onChange={handleemail}
              />
            </div>
            <label htmlFor="UserPassword">Password</label>
            <div className="inputs">
              <input
                className="password"
                id="UserPassword"
                type="password"
                value={password}
                onChange={handlepass}
              />
            </div>
            <button className="btn1" type="submit">
              Register
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;






































// const verifyOtp = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const user = auth.currentUser;
    //       await user.reload();
    
    //       if (user.emailVerified) {
    //         await setDoc(doc(db1, "users", user.uid), {
    //           email: user.email,
    //           password:user.password
    //         });
    //         setOtpVerified(true);
    //         console.log("User verified and stored in Firestore:", user);
    //       } else {
    //         console.log("Email not verified yet.");
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };