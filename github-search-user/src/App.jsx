/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import ErrorMessage from "./components/errorMessage";
import Loader from "./components/Loader";
import CardList from "./components/CardList";
import Button from "./components/Button";
import InputForm from "./components/InputForm";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    setError(null);
    setLoading(true);

    const response = await fetch(
      `https://api.github.com/search/users?q=${query}`
    );
    const data = await response.json();

    // validate user notfound
    if (data.items.length === 0) {
      setError("user notfound");
      setLoading(false);
    } else {
      setResults(data.items);
      console.log(data.items);
      setLoading(false);
    }
  };

  return (
    <div className="font-[Inter] grid place-items-center mx-3">
      <form onSubmit={handleSearch}>
        <div className="flex gap-5 mt-20 maxw">
          <InputForm value={query} onChange={(e) => setQuery(e.target.value)} />
          <Button type="submit">Search</Button>
        </div>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {loading && <Loader />}

        <ul>
          {results.map((user) => (
            <CardList key={user.id} user={user} />
          ))}
        </ul>
      </form>
    </div>
  );
};

export default App;
