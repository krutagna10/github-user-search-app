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
      <div className="flex gap">
        <img src={iconLocation} alt="" />
        <p>{location || "Not Available"}</p>
      </div>
      <div className="flex gap">
        <img src={iconTwitter} alt="" />
        {twitter ? (
          <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
        ) : (
          <p>Not Available</p>
        )}
      </div>
      <div className="flex gap">
        <img src={iconWebsite} alt="" />
        {website ? <a href={website}>Website</a> : <p>Not Available</p>}
      </div>
      <div className="flex gap">
        <img src={iconCompany} alt="" />
        {company ? (
          <a href={`https://github.com/${company}`}>@{company}</a>
        ) : (
          <p>Not Available</p>
        )}
      </div>
    </div>
  );
}

export default UserInfo;