function Button({
  children,
  onClick,
  classes = "",
  loading,
  small = false,
  black = false,
  outline = false,
}) {
  const smallClasses = small
    ? "px-4 py-1 font-bold"
    : "px-4 py-2 text-xl font-medium";
  const primaryClasses = black
    ? "border border-black bg-black text-white hover:bg-white hover:text-black focus:outline-teal-300"
    : outline
    ? "border border-black hover:bg-gray-200 focus:outline-slate-500"
    : "bg-teal-500 text-white hover:bg-teal-600 focus:outline-teal-300";
  return (
    <button
      className={`${classes} ${smallClasses} ${primaryClasses} rounded-full transition duration-200 ease-in-out disabled:opacity-20`}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;
