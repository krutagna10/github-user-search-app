interface UserType {
  avatar: string;
  company: string | null;
  followers: number;
  following: number;
  githubUrl: string;
  joinedAt: Date;
  location: string | null;
  name: string;
  repos: number;
  twitter: string | null;
  username: string;
  website: string | null;
}

export default UserType;