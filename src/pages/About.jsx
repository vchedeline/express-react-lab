import { useEffect, useState } from "react";

export default function About({ URL }) {
  const [about, setAbout] = useState();

  useEffect(() => {
    const getAbout = async () => {
      console.log("Fetching Data");
      const response = await fetch(URL + "about").then((res) => res.json());
      setAbout(response);
    };
    getAbout();
  }, []);

  const loaded = () => (
    <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
    </div>
  );

  return about ? loaded() : <h1>Fetching Data...</h1>;
}
