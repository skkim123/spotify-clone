import { Route, Routes } from "react-router";
import "./App.css";
import React, { Suspense } from "react";
import LoadingSpinner from "./common/components/LoadingSpinner";

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

function App() {
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
      </Routes>
    </Suspense>
  );
}

export default App;
