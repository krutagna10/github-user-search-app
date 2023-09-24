import iconSearch from "../../assets/icon-search.svg";
import "./SearchBar.css";
import * as React from "react";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (username: string) => void;
  error: string | null;
}

function SearchBar({ onSearch, error }: SearchBarProps) {
  const [username, setUsername] = useState<string>("");

  function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(username);
    setUsername("");
  }

  return (
    <div className="form-wrapper">
      <form className="form flex items-center gap" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="form__input-search">
          <img src={iconSearch} alt="" />
        </label>
        <input
          className="form__input"
          onChange={handleUsernameChange}
          id="form__input-search"
          type="text"
          value={username}
          placeholder="Search Github username..."
        />
        {error && <span className="form__error-message">{error}</span>}
        <button className="form__btn">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
