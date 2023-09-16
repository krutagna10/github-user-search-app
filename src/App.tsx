import { useEffect, useState } from "react";
import Container from "./components/UI/Container/Container.tsx";
import Header from "./components/Header/Header.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import User from "./components/User/User.tsx";
import UserType from "./models/user.ts";

const url = `https://api.github.com/users`;

function App() {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchData(username: string) {
    setIsLoading(true);
    const response = await fetch(`${url}/${username}`);
    const data = await response.json();
    setUser({
      avatar: data.avatar_url,
      bio: data.bio,
      followers: data.followers,
      following: data.following,
      githubUrl: data.html_url,
      joinedAt: new Date(data.created_at),
      name: data.name,
      repos: data.public_repos,
      username: data.login,
    });
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData("krutagna10");
  }, []);

  function handleSearch(username: string) {
    fetchData(username)
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
