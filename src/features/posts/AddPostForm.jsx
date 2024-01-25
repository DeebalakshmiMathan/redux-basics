import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllUser } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUSerId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const users = useSelector(selectAllUser);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUSerId(e.target.value);

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const onsavePost = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({ title, body: content, userId })).unwrap();
        setTitle("");
        setContent("");
        setUSerId("");
      } catch (err) {
        console.error("Failed to save the post: ", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
    // if (title && content) {
    //   dispatch(addNewPost(title, content, userId));
    //   setTitle("");
    //   setContent("");
    //   setUSerId("");
    // }
  };

  const usersOption = users.map((user) => (
    <option key={user.id} value={user.id} className="px-4 py-1 bg-black">
      {user.name}
    </option>
  ));
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-3">Add New Post</h2>
      <form className="flex flex-col">
        <div className=" grid grid-cols-2 m-2">
          <label htmlFor="postTitle">Post Title : </label>
          <input
            className=" bg-transparent border rounded px-2 py-1"
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={(e) => onTitleChange(e)}
          />
        </div>
        <div className=" grid grid-cols-2 m-2">
          <label htmlFor="postAuthor">Author : </label>
          <select
            className="bg-transparent border rounded px-4 py-1"
            name=""
            id="postAuthor"
            value={userId}
            onChange={onAuthorChanged}
          >
            <option value="" className="px-4 py-1 bg-black"></option>
            {usersOption}
          </select>
        </div>
        <div className=" grid grid-cols-2 m-2">
          <label htmlFor="postContent">Content : </label>
          <textarea
            className=" bg-transparent border rounded px-2 py-1"
            id="postContent"
            name="postContent"
            value={content}
            onChange={(e) => onContentChange(e)}
          />
        </div>
        <button
          type="button"
          onClick={onsavePost}
          disabled={!canSave}
          className={`w-full mx-auto px-4 py-2 rounded-2xl text-slate-800 my-4 cursor-pointer ${
            !canSave ? "bg-slate-800" : "bg-white"
          }`}
        >
          {" "}
          Send Post
        </button>
      </form>
    </section>
  );
};
export default AddPostForm;
