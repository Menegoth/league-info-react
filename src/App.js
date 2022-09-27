import { useEffect, useState } from "react";

import ChampionIndex from "./components/ChampionIndex";

import { VersionContext } from "./context/VersionContext";

function App() {
  //version state to check most recent version
  const [version, setVersion] = useState("");

  useEffect(() => {
    //runs once on page load to fetch most recent data
    async function fetchData() {
      const result = await (await fetch("https://ddragon.leagueoflegends.com/api/versions.json")).json();
      setVersion(result[0]);
    }
    fetchData();

  }, []);

  return (
    <div>
      <VersionContext.Provider value={version}>
        <ChampionIndex />
      </VersionContext.Provider>
    </div>
  );
}

export default App;
