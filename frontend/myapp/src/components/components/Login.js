// import React, { useState } from "react";

// export default function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   //   const [user, setUser] = ([]);
//   const addToLocalStorage = () => {
//     localStorage.setItem("email", JSON.stringfy(email));
//     localStorage.setItem("password", JSON.stringify(password));
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <label htmlFor="email">email</label>
//       <input
//         type="text"
//         name="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <label htmlFor="password">password</label>
//       <input
//         type="password"
//         name="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={addToLocalStorage}>Login</button>
//     </div>
  
//   );
// }
