import React from "react";

import { useState } from "react";

var playlist = {
  Rock: [
    { name: "Born to be wild", album: "Steppenwolf" },
    { name: "Smells like a teen spirit", album: "Nirvana" },
    { name: "Bhula Dena", album: "Ashiqui 2" }
  ],

  Romantic: [
    {
      name: "Agar tum satn ho",
      album: "Tamasha"
    },
    {
      name: "Teri meri",
      album: "Bodyguard"
    },
    {
      name: "Mai rang sharbaton ka",
      album: "Phata poster nikala hero"
    },
    {
      name: "Falak Tak",
      album: "Tashan"
    }
  ],
  EDM: [
    {
      name: "clarity",
      album: "zedd"
    },
    {
      name: "Lean On",
      album: "Dj Snake"
    },
    {
      name: "Wake Me Up",
      album: "Avicii"
    },
    {
      name: "Mungda",
      album: "Total Dhamal"
    }
  ],
  Metal: [
    {
      name: "Crazy train",
      album: "Ozzy"
    },
    {
      name: "Enter Sandman",
      album: "Metallica"
    },
    {
      name: "Fade to black",
      album: "Metallica"
    },
    {
      name: "Walk",
      album: "Pantera"
    }
  ]
};

export default function App() {
  const [selectedType, setType] = useState("Rock");
  function ClickHandler(type) {
    setType(type);
  }
  return (
    <div className="App">
      <h1> Music Playlist 🎶🎧🎸 </h1>
      <h3 style={{ fontSize: "smaller", textAlign: "centre" }}>
        Checkout My favourite Songs{" "}
      </h3>

      <div>
        {Object.keys(playlist).map((type) => (
          <button
            onClick={() => ClickHandler(type)}
            style={{
              cursor: "pointer",
              background: "Black",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              borderRadius: "10px",
              margin: "1rem 0.3rem",
              color: "white",
              width: "6rem"
            }}
          >
            {type}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {playlist[selectedType].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                color: "green",
                width: "70%",
                margin: "1rem 0rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}> {song.album} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
