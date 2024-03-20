"use client";

import React from "react";
import styles from "./riven.module.scss";

export default function Riven() {
  const [query, setQuery] = React.useState("");
  const [riven, setRiven] = React.useState<Riven | false>(false);

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch(
      `https://api.warframestat.us/pc/rivens/search/${query.toLowerCase()}`
    );

    if (!response.ok) return;

    const data = (await response.json()) as Riven;

    setQuery("");
    setRiven(data);
    console.log(
      data[query.charAt(0).toUpperCase() + query.slice(1)].rerolled.max
    );
  }

  return (
    <div>
      {riven ? (
        <ul>
          <li></li>
        </ul>
      ) : (
        <form className={styles.searchForm} action="/" onSubmit={handleSearch}>
          <input
            className={styles.searchInput}
            placeholder="Riven's name"
            onChange={({ target }) => setQuery(target.value)}
            value={query}
            id="riven"
            name="riven"
          />
          <button className={styles.searchButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#fff"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>
        </form>
      )}
    </div>
  );
}
