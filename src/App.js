import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Editpage from "./Editpage";
import Creator from "./Creator";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { DataProvider } from "./Context/DataContext";
function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post">
            <Route index element={<NewPost />} />
            <Route path=":bid" element={<PostPage />} />
          </Route>
          <Route path="Edit">
            <Route path=":bid" element={<Editpage />} />
          </Route>
          <Route path="About" element={<About />} />
          <Route path="Creator" element={<Creator />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
