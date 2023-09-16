import UserType from "../../models/user.ts";
import "./User.css";
import UserStats from "../UserStats/UserStats.tsx";

interface UserDataProps {
  user: UserType;
}

const getMonthName = (monthNumber: number): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthNumber];
};

function User({ user }: UserDataProps) {
  const date = user.joinedAt.getDate();
  const month = user.joinedAt.getMonth() + 1;
  const year = user.joinedAt.getFullYear();

  return (
    <div className="user flex gap">
      <div>
        <img className="user__image" src={user.avatar} alt={user.name} />
      </div>
      <div className="user__content flow">
        <div className="flex justify-between">
          <h2>{user.name}</h2>
          <p className="fs-100">
            Joined {date} {getMonthName(month)} {year}
          </p>
        </div>
        <a target="_blank" href={user.githubUrl}>
          @{user.username}
        </a>
        <p>{user.bio}</p>
        <UserStats
          followers={user.followers}
          following={user.following}
          repos={user.repos}
        />
      </div>
    </div>
  );
}

export default User;
