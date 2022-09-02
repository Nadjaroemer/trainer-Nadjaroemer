const Headline = (props) => {
  return (
    <div className={props.className}>
      <h1 className="text-[#F1C40E] font-bold text-6xl ml-10 mb-6">
        {props.header1}
      </h1>
      <h2
        className={`relative header-h2-white text-white ml-10 inline-block text-2xl font-bold`}
      >
        {props.header2}
      </h2>
    </div>
  );
};

export default Headline;
