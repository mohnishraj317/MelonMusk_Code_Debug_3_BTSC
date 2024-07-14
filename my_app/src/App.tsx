import { useEffect, useState } from "react";
import "./App.css";
import useBlogs from "./hooks/useBlogs";

// get all of the user blogs :)

type BlogProps = {
  title: string,
  content: string,
}

function Blog({ title, content }: BlogProps) {
  return <div style={{
    border: "1px solid black",
    padding: "1rem",
  }}>
    <b style={{ display: "block" }}>{title}</b>
    {content}
  </div>
}

function App() {
  const { createUser } = useBlogs();

  const [data, setData] = useState([]);

  useEffect(() => {
    createUser("name", "job").then(data => setData(data.message));
  }, [createUser]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "minmax(100px, 1fr, 300px)",
      gap: "1rem"
    }}>
      {data.map(data => <Blog {...data} key={data.id} />)}
    </div>
  );
}

export default App;
