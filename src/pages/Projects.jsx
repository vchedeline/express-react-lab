import { useEffect, useState } from "react";

export default function Projects({ URL }) {
  const [projects, setProjects] = useState();

  useEffect(() => {
    const getProjects = async () => {
      console.log("Fetching Data");
      const response = await fetch(URL + "projects").then((res) => res.json());
      setProjects(response);
    };
    getProjects();
  }, []);

  const loaded = () =>
    projects.map((ele) => (
      <div>
        <h1>{ele.name}</h1>
        <img src={ele.image} alt="..." />
        <a href={ele.git}>
          <button>Github</button>
        </a>
        <a href={ele.live}>
          <button>Live Site</button>
        </a>
      </div>
    ));

  return projects ? loaded() : <h1>Fetching Data...</h1>;
}
