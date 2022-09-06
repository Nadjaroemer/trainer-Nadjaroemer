import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import HeadlineH3 from "../components/HeadlineH3";
import { useContext } from "react";
import { StateContext } from "../context/Context";
import { useState } from "react";

const LoginForm = () => {
  const { setUserToken } = useContext(StateContext);
  const schema = yup
    .object({
      username: yup.string().required("Please enter email"),
      password: yup.string().required("Please enter password"),
    })
    .required();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loginError, setLoginError] = useState(false);

  const onSubmit = () => {
    let myForm = document.getElementById("loginForm");
    let formData = new FormData(myForm);
    fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setUserToken(data);
          navigate("/home");
        } else {
          setLoginError("Invalid email or password");
        }
      });
  };

  return (
    <div className="mt-16">
      <HeadlineH3 text="Log in with your credentials" />
      <form
        action="POST"
        onSubmit={handleSubmit(onSubmit)}
        className="flex p-6 flex-col"
        id="loginForm"
      >
        {errors.username && <p>{errors.username.message}</p>}
        <input
          {...register("username")}
          type="text"
          className="border-tertiary border py-5 px-10 rounded-full mb-4"
          placeholder="Enter your email..."
          autoComplete="username"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          {...register("password")}
          type="password"
          className="border-tertiary border py-5 px-10 rounded-full mb-4"
          placeholder="Enter your password..."
          autoComplete="current-password"
        />
        <Button type="button" text="Sign in" />
        {loginError && <p className="text-center pt-4">{loginError}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
