import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/slices/postsList";
import { useEffect } from "react";

const PostsListManager = () => {
  const { postsList, loading, error } = useSelector((state) => state.postsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div>
      <h1>список постів</h1>
      {loading && <p>Завантаження</p>}
      {error && <p>{error}</p>}
      <ul>
        {postsList.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsListManager;
