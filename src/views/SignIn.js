import Headline from "../components/Headline";
import LoginForm from "../templates/LoginForm";

const SignIn = () => {
  return (
    <section className="mt-12">
      <Headline
        header1="Believe Yourself"
        header2="Train like a pro"
        secondaryColor="black"
      />
      <LoginForm />
    </section>
  );
};

export default SignIn;
