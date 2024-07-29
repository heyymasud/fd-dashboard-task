import AuthLayouts from "../components/Layouts/Auth"
import FormRegister from "../components/Layouts/Auth/FormRegister"

const Register = () => {
    return (
      <AuthLayouts title="Register" type="register">
        <FormRegister />
      </AuthLayouts>
    )
  }
  
  export default Register