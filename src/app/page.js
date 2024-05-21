"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [character, setCharacter] = useState({});
  const [sortedCharacter, setSortedCharacter] = useState([]);

  const source =
    "AASDFGRTYHHGFDKAVKTREQJSDNJNJFNUIWQOINEWKLNNSADJKNFIUEQRBJBKBSAKJBFIUHROWQIJKENJKFNEKJDFNEWORIJIOERKNDFJBIJERKBADQLMKMAD";

  const sum = () => {
    const count = {};
    for (let item of source) {
      if (item >= "A" && item <= "Z") {
        count[item] = (count[item] || 0) + 1;
      }
    }
    setCharacter(count);

    const sorted = Object.entries(count).sort((a, b) =>
      a[0].localeCompare(b[0])
    );
    setSortedCharacter(sorted);
  };

  useEffect(() => {
    sum();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="text-center">Random Character</div>
      <div className="">{source}</div>
      <div className="mt-4">
        <table>
          <thead>
            <tr>
              <th>Character</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {sortedCharacter.map(([char, count]) => (
              <tr key={char}>
                <td>{char}</td>
                <td>{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
