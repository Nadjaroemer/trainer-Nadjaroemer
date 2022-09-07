import { useContext } from "react";
import { StateContext } from "../context/Context";
import { useState, useEffect } from "react";
import axios from "axios";
import HeadlineH3 from "./HeadlineH3";
import TrainerCard from "./TrainerCard";

const ClassDetailsInfo = ({ data }) => {
  const [trainerData, setTrainerData] = useState();
  const [isSignedUp, setIsSignedUp] = useState(false);
  const { userToken, userData, setUserData } = useContext(StateContext);

  const config = {
    headers: { Authorization: `Bearer ${userToken.token}` },
  };

  const refetchAndSetUserData = () => {
    if (userData) {
      axios
        .get(`http://localhost:4000/api/v1/users/${userData.id}`, config)
        .then((response) => setUserData(response.data));
    }
  };

  const signUp = () => {
    axios
      .post(
        `http://localhost:4000/api/v1/users/${userData.id}/classes/${data.id}`,
        {},
        config
      )
      .then(() => {
        setIsSignedUp(true);
        refetchAndSetUserData();
      });
  };

  const signOut = () => {
    axios
      .delete(
        `http://localhost:4000/api/v1/users/${userData.id}/classes/${data.id}`,
        config
      )
      .then(() => {
        setIsSignedUp(false);
        refetchAndSetUserData();
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/trainers/${data.trainerId}`)
      .then((response) => setTrainerData(response.data));
  }, [data.trainerId]);

  useEffect(() => {
    if (userData) {
      userData.classes.forEach((item) => {
        if (item.id === data.id) {
          setIsSignedUp(true);
        }
      });
    }
  }, [data.id, userData]);

  return (
    <div className="p-6 flex flex-col gap-6">
      <p>
        {data.classDay} - {data.classTime}
      </p>
      <p>{data.classDescription}</p>
      <HeadlineH3 text="Trainer" />
      {trainerData && <TrainerCard data={trainerData} />}
      {userData && (
        <>
          {!isSignedUp && (
            <button
              className="bg-secondary py-5 px-10 rounded-full text-center uppercase font-bold"
              onClick={() => signUp()}
            >
              Sign Up
            </button>
          )}
          {isSignedUp && (
            <button
              className="bg-secondary py-5 px-10 rounded-full text-center uppercase font-bold"
              onClick={() => signOut()}
            >
              Leave class
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ClassDetailsInfo;
