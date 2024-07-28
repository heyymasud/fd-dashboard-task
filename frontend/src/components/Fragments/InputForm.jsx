const InputForm = ({ name, placeholder, type, label, validation, error }) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block text-slate-700 text-sm font-bold mb-2"
      >
        {label}
      </label>

      <input
        type={type}
        className={`text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50 ${error?.[name] && "border-red-500 focus:outline-red-500"}`}
        placeholder={placeholder}
        name={name}
        id={name}
        {...validation}
      />
      {error?.[name] && (
          <span className="text-red-500 text-xs mt-1">{error?.[name]?.message}</span>
        )}
    </div>
  );
};

export default InputForm;
