import { useEffect, useState } from "react";
import Container from "./components/UI/Container/Container.tsx";
import Header from "./components/Header/Header.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import UserData from "./components/UserData/UserData.tsx";
import User from "./components/user.ts";

const url = `https://api.github.com/users`;

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchData(username: string) {
    setIsLoading(true);
    const response = await fetch(`${url}/${username}`);
    const data = await response.json();
    console.log(data);
    setUser({
      username: data.login,
      name: data.name,
      followers: data.followers,
      following: data.following,
      repos: data.public_repos,
    });
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData("krutagna10");
  }, []);

  console.log(user);

  function handleSearch(username: string) {
    fetchData(username)
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <main>
      <section className="github-search-app-section">
        <Container className="github-search-app">
          <Header />
          <SearchBar onSearch={handleSearch} />
          <UserData user={user} />
        </Container>
      </section>
    </main>
  );
}

export default App;
