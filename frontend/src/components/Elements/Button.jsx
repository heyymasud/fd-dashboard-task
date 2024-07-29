const Button = ({
  children,
  onClick,
  className = "bg-black",
  type = "button",
}) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${className} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
