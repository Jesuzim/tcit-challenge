import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../store/postsSlice";

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const filterText = useSelector((state) => state.posts.filterText);

  const filteredPosts = posts.filter((post) =>
    post.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {filteredPosts.map((post) => (
          <tr key={post.id}>
            <td>{post.name}</td>
            <td>{post.description}</td>
            <td>
              <button onClick={() => handleDelete(post.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PostList;

