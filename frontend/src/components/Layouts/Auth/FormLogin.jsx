import Button from "../../Elements/Button";
import InputForm from "../../Fragments/InputForm";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
const FormLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/api/v1/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        alert(res.data.message);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });

    // navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        label="Email"
        placeholder="Enter your email..."
        name="email"
        type="email"
        error={errors}
        validation={{
          ...register("email", { required: "Email is required" }),
        }}
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password..."
        error={errors}
        validation={{...register("password", { required: 'Password is required' })}}
      />
      <Button type="submit" className="bg-indigo-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
