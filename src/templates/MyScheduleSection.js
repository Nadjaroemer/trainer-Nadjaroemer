import { useContext } from "react";
import MyScheduleCard from "../components/MyScheduleCard";
import { StateContext } from "../context/Context";

const MyScheduleSection = () => {
  const { userData } = useContext(StateContext);

  console.log("userdata classes: ", userData);

  if (!userData) {
    return <div>Please login to see your schedule</div>;
  }

  return (
    <section className="p-6 flex flex-col gap-4">
      {userData.classes.map((item, index) => (
        <MyScheduleCard data={item} key={index} />
      ))}
    </section>
  );
};

export default MyScheduleSection;
