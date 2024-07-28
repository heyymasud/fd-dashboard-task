import InputForm from "../../Fragments/InputForm";
import Button from "../../Elements/Button";

const FormRegister = () => {
    return (
      <form>
        <InputForm
          label="Fullname"
          placeholder="Insert your fullname..."
          type="text"
          name="fullname"
        />
        <InputForm
          label="Email"
          placeholder="example@email.com"
          name="email"
          type="email"
        />
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password..."
        />
        <InputForm
          label="Confirm Password"
          name="confirmpassword"
          type="password"
          placeholder="Confirm your password..."
        />
        <Button className="bg-indigo-600 w-full">Register</Button>
      </form>
    );
  };
  
  export default FormRegister;
  