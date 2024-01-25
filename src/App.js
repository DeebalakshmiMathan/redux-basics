// import Counter from "./features/counter/Counter";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/postList";

function App() {
  return (
    <main className=" h-screen w-full flex items-center flex-col bg-slate-800 text-white py-10">
      {/* <Counter /> */}
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
