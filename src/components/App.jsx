import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";
import About from "./About";

function App() {
  return (
    <div className="App">
      <header>
        <Header name={blogData.name} />
      </header>
      <aside>
        <About image={blogData.image} about={blogData.about}/>
      </aside>
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;