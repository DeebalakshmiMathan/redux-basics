import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButton";

const PostExcerpt = ({ post }) => {
  return (
    <article className=" h-fit w-[25rem] border-[1px] px-5 py-2 rounded-[0.5rem] mb-4 ">
      <h3 className="text-2xl font-bold">{post.title}</h3>
      <p className="text-lg">{post.body.substring(0, 100)}</p>
      <p className="text-lg">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </p>
    </article>
  );
};

export default PostExcerpt;
