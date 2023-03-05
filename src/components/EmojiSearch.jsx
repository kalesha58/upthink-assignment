import React, { useState } from "react";
import emojis from "./emojis.json";
import "./EmojisSearch.css"
function EmojiSearch() {
  const [searchText, setSearchText] = useState("");
  const [filteredEmojis, setFilteredEmojis] = useState(emojis);

  const handleSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredEmojis = emojis.filter((emoji) =>
      emoji.name.toLowerCase().includes(searchText)
    );
    setSearchText(searchText);
    setFilteredEmojis(filteredEmojis);
  };

  return (
    <div>
      <h1>Emoji Search</h1>
      <input
        type="text"
        placeholder="Search for an emoji by name"
        value={searchText}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredEmojis.map((emoji) => (
          <li key={emoji.symbol}>
            {emoji.symbol} - {emoji.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmojiSearch;
