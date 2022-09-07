import welcomebackground1 from "../assets/welcomebackground.jpg";
import welcomebackground2 from "../assets/welcomecenter.jpg";
import Header from "../components/Headline";
import Button from "../components/Button";

const WelcomeSection = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <div
        className="flex-1 flex object-cover"
        style={{
          backgroundImage: `url(${welcomebackground1})`,
          backgroundSize: "cover",
        }}
      >
        <Header
          className="self-end mb-10"
          header1="Believe Yourself"
          header2="Train like a pro"
          color="#3F1C40E"
        />
      </div>
      <div
        className="flex-1 flex align-end pb-12 justify-center object-cover"
        style={{
          backgroundImage: `url(${welcomebackground2})`,
          backgroundSize: "cover",
        }}
      >
        <Button
          type="link"
          destination="/home"
          text="Start training"
          className="self-end"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
