import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Table } from "react-bootstrap";

export default function App() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // let obj = {
  //   username: "",
  //   email: "",
  //   password: "",
  // };

  useEffect(() => {
    const listUsers = async () => {
      await axios
        .get("http://localhost:6060/users")
        .then((res) => setUsers(res.data));
    };
    listUsers();
  }, []);

  const addUser = async () => {
     await axios
      .post("http://localhost:6060/users/register", {
        username: username,
        email: email,
        password: password,
      }).then((res) =>users.push(res.data))
      
    //   users.push(result)
    // setUsers([...users,  {...result }]);
    // // users.concat(obj)
  };

  const deleteUser = async (id) => {
    await axios
      .delete(`http://localhost:6060/users/${id}`)
      .then(()=>setUsers(users.filter(item=>{
          return(
             item._id!==id
          )
      })))
   
  }
  return (
    <div className="container">
      <h1 style={{color:"black"}}>Full Stack Application Demo</h1>
      <div>
        <table>
          <tbody>
            <tr>
              <td>Id</td>
              <td>username</td>
              <td>Email</td>
              <td>Password</td>
              <td>Action</td>
            </tr>
            {users.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item._id} </td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <button>Edit</button>
                  <button onClick={deleteUser}>Delete</button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="inp">
        <input
          type="text"
          name="username"
          value={username}
          placeholder="username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="button" onClick={addUser} value="add user" />
      </div>
      <div className="ftr">
        <footer>
          All rights reserved @2023<br></br>
          By:Daniel Hagos Tel:-240-918-8111
        </footer>
      </div>
    </div>
  );
}
