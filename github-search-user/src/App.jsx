/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import ErrorMessage from "./components/errorMessage";
import Loader from "./components/Loader";

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
      setLoading(false);
    }
  };

  return (
    <div className="font-[Inter] grid place-items-center mx-3">
      <form onSubmit={handleSearch}>
        <div className="flex gap-5 mt-20">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 "
          />
          <button
            type="submit"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5"
          >
            Search
          </button>
        </div>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {loading && <Loader />}

        <ul>
          {results.map((user) => (
            <li key={user.id}>
              <div className="flex items-center gap-5 bg-gray-50 border border-gray-300 px-5 py-3 mt-5 rounded-md">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="rounded-full h-14 w-14"
                />
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold"
                >
                  {user.login}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default App;
