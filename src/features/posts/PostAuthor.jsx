import { useSelector } from "react-redux";
import { selectAllUser } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUser);
  const author = users.filter((user) => user.id === userId)[0];
  return <span> by {author ? author.name : "unknown"}</span>;
};

export default PostAuthor;
