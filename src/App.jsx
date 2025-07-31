import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Posts from "./pages/Posts";
import SinglePost from "./pages/Singlepost";
import Comments from "./pages/Comments";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<SinglePost />} />
        <Route path="comments" element={<Comments />} />
        <Route path="albums" element={<Albums />} />
        <Route path="photos" element={<Photos />} />
        <Route path="todos" element={<Todos />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
