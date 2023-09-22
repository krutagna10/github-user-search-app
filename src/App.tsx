import { useEffect, useState } from "react";
import Container from "./components/UI/Container/Container.tsx";
import Header from "./components/Header/Header.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import User from "./components/User/User.tsx";
import UserType from "./models/user.ts";

const url = `https://api.github.com/users`;

function App() {
  const [user, setUser] = useState<UserType>({} as UserType);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchData(username: string) {
    setIsLoading(true);
    const response = await fetch(`${url}/${username}`);
    const data = await response.json();
    setUser({
      avatar: data.avatar_url,
      company: data.company,
      followers: data.followers,
      following: data.following,
      githubUrl: data.html_url,
      joinedAt: new Date(data.created_at),
      location: data.location,
      name: data.name,
      repos: data.public_repos,
      twitter: data.twitter_username,
      username: data.login,
      website: data.blog,
    });
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData("octocat");
  }, []);

  function handleSearch(username: string) {
    fetchData(username);
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <main>
      <section className="github-search-app-section">
        <Container className="flow">
          <Header />
          <SearchBar onSearch={handleSearch} />
          <User user={user} />
        </Container>
      </section>
    </main>
  );
}

export default App;
