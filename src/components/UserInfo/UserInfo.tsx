import iconLocation from "../../assets/icon-location.svg";
import iconTwitter from "../../assets/icon-twitter.svg";
import iconWebsite from "../../assets/icon-website.svg";
import iconCompany from "../../assets/icon-company.svg";
import "./UserInfo.css";

interface UserInfoProps {
  company: string | null;
  location: string | null;
  twitter: string | null;
  website: string | null;
}

function UserInfo({ company, location, twitter, website }: UserInfoProps) {
  return (
    <div className="user__info grid gap">
      <div className="flex items-center gap">
        <img src={iconLocation} alt="" />
        <p>{location || "Not Available"}</p>
      </div>
      <div className="flex items-center gap">
        <img src={iconTwitter} alt="" />
        {twitter ? (
          <a
            className="user__stats-link"
            href={`https://twitter.com/${twitter}`}
          >
            @{twitter}
          </a>
        ) : (
          <p>Not Available</p>
        )}
      </div>
      <div className="flex items-center gap">
        <img src={iconWebsite} alt="" />
        {website ? (
          <a className="user__stats-link" href={website}>
            {website}
          </a>
        ) : (
          <p>Not Available</p>
        )}
      </div>
      <div className="flex items-center gap">
        <img src={iconCompany} alt="" />
        {company ? (
          <a
            className="user__stats-link"
            href={`https://github.com/${company}`}
          >
            {company}
          </a>
        ) : (
          <p>Not Available</p>
        )}
      </div>
    </div>
  );
}

export default UserInfo;
