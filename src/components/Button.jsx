function Button({ children, onClick, rounded = "rounded-full", classes='', loading }) {
  return (
    <button
      className={`bg-teal-500 text-white text-xl ${rounded} ${classes} px-4 py-2 focus:ring-2 ring-teal-300 outline-teal-300 hover:bg-teal-600 disabled:bg-teal-200`}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;
