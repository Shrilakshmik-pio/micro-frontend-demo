import React from "react";
import CachedIcon from "@mui/icons-material/Cached";
import LaunchIcon from "@mui/icons-material/Launch";
import { STORAGE_KEY } from "../../context/remotes";

export default function RemoteControls() {
  function handleChange(e: any) {
    localStorage.setItem(STORAGE_KEY, e.target.value);
  }

  function handleReload() {
    window.location.reload();
  }

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <input placeholder="Remote URL" onChange={handleChange} />
      <button onClick={handleReload}>
        <LaunchIcon />
      </button>
      <button>
        <CachedIcon />
      </button>
    </div>
  );
}

