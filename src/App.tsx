import { useEffect, useState } from "react";
import Container from "./components/UI/Container/Container.tsx";
import Header from "./components/Header/Header.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import User from "./components/User/User.tsx";
import UserType from "./models/user.ts";
import "./App.css";

const url = `https://api.github.com/users`;

function App() {
  const [user, setUser] = useState<UserType>({} as UserType);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchData(username: string) {
    try {
      setIsLoading(true);
      const response = await fetch(`${url}/${username}`);
      if (!response.ok) {
        throw new Error("No results");
      }
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
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData("octocat");
  }, []);

  function handleSearch(username: string) {
    fetchData(username);
  }

  function handleRemoveError() {
    setError(null);
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <main>
      <section className="github-search-app-section">
        <Container className="flow">
          <Header />
          <SearchBar
            onSearch={handleSearch}
            error={error}
            onRemoveError={handleRemoveError}
          />
          <User user={user} />
        </Container>
      </section>
    </main>
  );
}

export default App;
