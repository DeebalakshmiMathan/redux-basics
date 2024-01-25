import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "./postsSlice";
import PostExcerpt from "./PostExcerpt";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle" && posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch, posts.length]);
  useEffect(() => {
    console.log("Posts in useEffect: ", posts);
  }, [posts]);

  let content;

  if (postsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPost = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    content = orderedPost.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{postError}</p>;
  }

  return (
    <div className="h-[70%] overflow-y-auto pr-5">
      <h2 className="text-3xl underline mb-5">Posts</h2>
      {content}
    </div>
  );
};

export default PostsList;
