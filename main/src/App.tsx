import React from "react";
import { RemotesProvider } from "./context/remotes";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <RemotesProvider>
      <ErrorBoundary>
        <div>
          <h2>Main Host Application</h2>
        </div>
      </ErrorBoundary>
    </RemotesProvider>
  );
}

