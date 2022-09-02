import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import HeadlineH3 from "../components/HeadlineH3";
import ClassCard from "../components/ClassCard";

const PopularClasses = () => {
  const [classes, setClasses] = useState();
  const getRandomClass = () => Math.floor(Math.random() * classes.length);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/classes")
      .then((response) => setClasses(response.data));
  }, []);

  return (
    <section className="">
      {classes && <ClassCard data={classes[getRandomClass()]} />}
      <HeadlineH3 text="Classes for you" />
    </section>
  );
};

export default PopularClasses;
