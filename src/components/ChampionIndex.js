import { useContext, useEffect } from "react";
import { VersionContext } from "../context/VersionContext";

function ChampionIndex() {
    const version = useContext(VersionContext)

    useEffect(() => {
        
    })

    return (
        <div>
            {version}
        </div>
    )
}

export default ChampionIndex;