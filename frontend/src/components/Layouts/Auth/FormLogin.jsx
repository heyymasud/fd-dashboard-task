import Button from "../../Elements/Button";
import InputForm from "../../Fragments/InputForm";
const FormLogin = () => {
    
    return (
      <form >
        <InputForm
          label="Username"
          placeholder="Enter your username..."
          name="username"
          type="text"
        />
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password..."
        />
        <Button className="bg-indigo-600 w-full">
          Login
        </Button>
      </form>
    );
}

export default FormLogin