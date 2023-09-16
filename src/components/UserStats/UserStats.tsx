import "./UserStats.css";

interface UserStats {
  followers: number;
  following: number;
  repos: number;
}

function UserStats({ followers, following, repos  }: UserStats) {
  const stats = [
    {
      title: "Repos",
      value: repos,
    },
    {
      title: "Followers",
      value: followers,
    },
    {
      title: "Following",
      value: following,
    }
  ]

  return (
    <div className="user__stats grid bg-very-dark-blue">
      {stats.map((stat, index) => (
        <div key={index + 1}>
          <h3 className="fs-100">{stat.title}</h3>
          <p className="fs-300 font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}

export default UserStats;