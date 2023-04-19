import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../Hooks/useAxiosFetch";
const DataContext = createContext({});



export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchresults, setSearchresults] = useState([]);

  const { data, isLoading, fetchErr } = useAxiosFetch(
    "http://localhost:5000/blogs"
  );

  useEffect(() => {
    const filteredPosts = posts.filter(
      (post) =>
       ((post.body).toLowerCase().includes(search.toLowerCase()))||
       ((post.title).toLowerCase().includes(search.toLowerCase()))
    );
    setSearchresults(filteredPosts.reverse());
  }, [posts, search]);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <DataContext.Provider
      value={{
        posts,
        setPosts,
        search,
        searchresults,
        setSearch,
        searchresults,
        isLoading,
        fetchErr,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
