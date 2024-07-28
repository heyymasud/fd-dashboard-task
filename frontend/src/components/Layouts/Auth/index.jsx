import { Link } from "react-router-dom"

const AuthLayouts = ({title, children, type}) => {
    return (
      <div
        className={`flex justify-center min-h-screen items-center`}
      >
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-indigo-600">{title}</h1>
          <p
            className={`font-medium  mb-8 `}
          >
            Welcome, please enter your details
          </p>
          {children}
          <p
            className={`mt-5 text-sm text-center `}
          >
            {type === "login"
              ? `Don't have an account? `
              : `Already have an account? `}
  
            {type === "login" && (
              <Link className="font-bold text-indigo-600" to={"/register"}>
                Register
              </Link>
            )}
            {type === "register" && (
              <Link className="font-bold text-indigo-600" to={"/login"}>
                Login
              </Link>
            )}
          </p>
        </div>
      </div>
    )
  }
  
  export default AuthLayouts