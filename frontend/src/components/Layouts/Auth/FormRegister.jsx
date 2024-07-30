import InputForm from "../../Fragments/InputForm";
import Button from "../../Elements/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerAuth } from "../../../services/auth.service";

const FormRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  //handle submit
  const onSubmit = async (data) => {
    try {
      const res = await registerAuth(data);
      alert(res.message);
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
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
