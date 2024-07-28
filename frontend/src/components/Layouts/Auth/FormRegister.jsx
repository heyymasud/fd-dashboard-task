import InputForm from "../../Fragments/InputForm";
import Button from "../../Elements/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const FormRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  //handle submit
  const onSubmit = (data) => {
    axios.post("http://localhost:3000/api/v1/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      alert(res.data.message);
    }).catch((err) => {
      alert(err.response.data.message);
    });

    navigate("/login");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}> 
      <InputForm
        label="Fullname"
        placeholder="Insert your fullname..."
        type="text"
        name="fullname"
        error={errors}
        validation={{...register("fullname", { required: 'Fullname is required' })}}
      />
      <InputForm
        label="Email"
        placeholder="example@email.com"
        name="email"
        type="email"
        error={errors}
        validation={{...register("email", { required: 'Email is required' })}}
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password..."
        error={errors}
        validation={{...register("password", { required: 'Password is required' })}}
      />
      <InputForm
        label="Confirm Password"
        name="confirm-password"
        type="password"
        placeholder="Confirm your password..."
        error={errors}
        validation={{
          ...register("confirm-password", {
            required: "Confirm password is required",
            validate: (value) =>
              value === watch("password") || "The passwords not match",
          }),
        }}
      />
      <Button type="submit" className="bg-indigo-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
