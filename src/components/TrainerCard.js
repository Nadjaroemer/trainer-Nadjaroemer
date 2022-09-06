const TrainerCard = ({ data }) => {
  return (
    <div className="flex">
      <div className="overflow-hidden object-cover rounded-2xl w-28 h-28 ">
        <img src={data.asset.url} alt="" />
      </div>
      <p className="mt-6 ml-4 font-bold text-md">{data.trainerName}</p>
    </div>
  );
};

export default TrainerCard;
