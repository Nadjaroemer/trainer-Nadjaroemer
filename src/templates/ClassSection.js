import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ClassDetailsHeader from "../components/ClassDetailsHeader";
import ClassDetailsInfo from "../components/ClassDetailsInfo";

const ClassSection = () => {
  const [classData, setClassData] = useState();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/classes/${id}`)
      .then((response) => setClassData(response.data));
  }, [id]);

  return (
    classData && (
      <section>
        <ClassDetailsHeader data={classData} />
        <ClassDetailsInfo data={classData} />
      </section>
    )
  );
};

export default ClassSection;
