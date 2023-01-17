// import React, { useState } from "react";
// import axios from 'axios';

// export default function Register() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

// //   const [user, setUser] = ([]);

//   const obj = {
//     username: username,
//     email: email,
//     password: password,
//   };

//   const register =()=>{
//        axios.post('http://localhost:6060/users/register',obj)
//        localStorage.setItem("username", username);
//        localStorage.setItem("email", email);
//        localStorage.setItem("token", password);
//   }

//   return (
//     <div>
//       <h1>Register</h1>
//       <label htmlFor="username">username</label>
//       <input
//         type="text"
//         name="username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
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
//       <button onClick={register}>Register</button>
//     </div>
//   );
// }
