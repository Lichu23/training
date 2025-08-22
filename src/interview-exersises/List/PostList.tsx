//@ts-nocheck
// Crea un componente PostList.

import { useEffect, useState } from "react";
import PostItems from "./PostItems";

// Haz un fetch a https://jsonplaceholder.typicode.com/posts.

// Guarda los posts en un estado posts.

// Agrega un input para filtrar los posts por título (title) en tiempo real.

// Muestra los posts filtrados en una lista (PostItem) usando un componente hijo.

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchPosts, setSearchPosts] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    setLoading(true);
    async function getPosts() {
      try {
        const res = await fetch(url);

        const data = await res.json();

        if (!data) {
          console.log("Hubo un error al obtener la data");
        }
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    getPosts();
  }, []);

  useEffect(() => {
    function filterPosts() {
      const searchPostLowerCase = searchPosts.toLowerCase();
      const filterPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchPostLowerCase)
      );

      setFilteredPosts(filterPosts.length > 0 ? filterPosts : posts);
    }
    filterPosts();
  }, [searchPosts, posts]);

  if (loading) return <p>Cargando posts...</p>;

  return (
    <div>
      <label htmlFor="posts">Search Posts</label>
      <input
        className="border"
        value={searchPosts}
        onChange={(e) => setSearchPosts(e.target.value)}
        type="text"
        id="posts"
      />
      <ul>
        {filteredPosts.map((filteredPost) => (
          <PostItems postTitle={filteredPost.title} key={filteredPost.id} />
        ))}
      </ul>
    </div>
  );
}
