import { Route, Routes } from "react-router";
import "./App.css";
import React, { Suspense, useEffect } from "react";
import LoadingSpinner from "./common/components/LoadingSpinner";
import { useExchangeToken } from "./hooks/useExchangeToken";

const AppLayout = React.lazy(() => {
  return import("./layout/AppLayout");
});

const HomePage = React.lazy(() => {
  return import("./pages/HomePage/HomePage");
});

const SearchPage = React.lazy(() => {
  return import("./pages/SearchPage/SearchPage");
});

const SearchWithKeywordPage = React.lazy(() => {
  return import("./pages/SearchWithKeywordPage/SearchWithKeywordPage");
});

const PlaylistDetailPage = React.lazy(() => {
  return import("./pages/PlaylistDetailPage/PlaylistDetailPage");
});

const PlaylistPage = React.lazy(() => {
  return import("./pages/PlaylistPage/PlaylistPage");
});

const CallbackPage = React.lazy(() => {
  return import("./pages/CallbackPage/CallbackPage");
});

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  const codeVerifier = localStorage.getItem("code_verifier");
  const { mutate: exchangeToken } = useExchangeToken();

  useEffect(() => {
    if (code && codeVerifier) {
      exchangeToken({ code, codeVerifier });
    }
  }, [code, codeVerifier, exchangeToken]);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="search/:keyword" element={<SearchWithKeywordPage />} />
          <Route path="playlist/:id" element={<PlaylistDetailPage />} />
          <Route path="playlist" element={<PlaylistPage />} />
        </Route>
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
