import UserType from "../../models/user.ts";
import UserStats from "../UserStats/UserStats.tsx";
import "./User.css";
import UserInfo from "../UserInfo/UserInfo.tsx";

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
    <div className="user flow">
      <div className="flex items-center gap">
        <img className="user__image" src={user.avatar} alt={user.name} />
        <div className="user__data">
          <div>
          <h2>{user.name}</h2>
            <a className="user__link" target="_blank" href={user.githubUrl}>
              @{user.username}
            </a>
          </div>
          <p className="fs-100">
            Joined {date} {getMonthName(month)} {year}
          </p>
        </div>
      </div>
      <UserStats
        followers={user.followers}
        following={user.following}
        repos={user.repos}
      />
      <UserInfo
        company={user.company}
        location={user.location}
        twitter={user.twitter}
        website={user.website}
      />
    </div>
  );
}

export default User;
