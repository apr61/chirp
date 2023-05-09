const CHIRP_ACTIONS = {
  reply: {
    "hover-text": "hover:text-teal-500",
    "hover-icon": "group-hover:bg-teal-200",
  },
  rechirp: {
    "hover-text": "hover:text-green-500",
    "hover-icon": "group-hover:bg-emerald-200",
    "action-done": "text-green-500",
  },
  like: {
    "hover-text": "hover:text-pink-500",
    "hover-icon": "group-hover:bg-pink-200",
    "action-done": "text-pink-500",
  },
  share: {
    "hover-text": "hover:text-teal-500",
    "hover-icon": "group-hover:bg-teal-200",
  },
  delete: {
    "hover-text": "hover:text-red-500",
    "hover-icon": "group-hover:bg-red-200",
  },
};

function IconBtn({
  text = "",
  action,
  onClick,
  title,
  icon,
  disabled = false,
  actionDone = false,
}) {
  return (
    <button
      title={title}
      className={`group flex items-center sm:gap-2 ${
        CHIRP_ACTIONS[action]["hover-text"]
      } ${
        actionDone ? CHIRP_ACTIONS[action]["action-done"] : "text-gray-700"
      } disabled:cursor-not-allowed disabled:text-gray-300`}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        className={`rounded-full p-2 ${CHIRP_ACTIONS[action]["hover-icon"]}`}
      >
        {icon}{" "}
      </span>
      {text}
    </button>
  );
}

export default IconBtn;
