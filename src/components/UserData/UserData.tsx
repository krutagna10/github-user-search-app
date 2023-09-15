import User from "../user.ts";
import "./UserData.css";

interface UserDataProps {
  user: User | null;
}

function UserData({ user }: UserDataProps) {
  return (
    <div className="user-data">
      <h2 className="text-center">User Data</h2>
      <table>
        <thead>
        <tr>
          <th>Username</th>
          <th>Name</th>
          <th>Followers</th>
          <th>Following</th>
          <th>Repos</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{user?.username}</td>
          <td>{user?.name}</td>
          <td>{user?.followers}</td>
          <td>{user?.following}</td>
          <td>{user?.repos}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserData;