import users from "../data/Users.js";

const Users = () => (
  <div>
    <h2>Users</h2>
    {users.map((user) => (
      <div key={user.id} className="item-box">
        <p><strong>{user.name}</strong> ({user.username})</p>
        <p>Email: {user.email}</p>
      </div>
    ))}
  </div>
);


export default Users;

