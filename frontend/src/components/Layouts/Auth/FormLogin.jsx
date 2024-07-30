import Button from "../../Elements/Button";
import InputForm from "../../Fragments/InputForm";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { loginAuth } from "../../../services/auth.service";
const FormLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    try {
      const res = await loginAuth(data);
      alert(res.message);
      localStorage.setItem("token", res.token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${res.token}`;
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
      // .then((res) => {
      //   alert(res.message);
      //   localStorage.setItem("token", res.token);
      //   // Mengatur default header Authorization untuk semua permintaan axios
      //   axios.defaults.headers.common["Authorization"] = `Bearer ${res.token}`;
      //   navigate("/");
      // })
      // .catch((err) => {
      //   alert(err.response.data.message);
      // });
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
