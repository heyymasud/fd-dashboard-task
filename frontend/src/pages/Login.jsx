import AuthLayouts from "../components/Layouts/Auth";
import FormLogin from "../components/Layouts/Auth/FormLogin";

const Login = () => {
    return (
      <AuthLayouts title="Login" type="login">
        <FormLogin />
      </AuthLayouts>
    );
  };
  
  export default Login;
  