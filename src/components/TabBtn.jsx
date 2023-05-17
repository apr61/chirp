function TabBtn({ text, handleActiveTab, activeTab }) {
  return (
    <button
      className={`w-1/2 p-4 p-2 relative hover:bg-[--hover-bg] whitespace-nowrap ${
        activeTab === text
          ? "before:absolute before:bottom-0 before:left-0 before:right-0 before:rounded before:h-[.25rem] before:bg-teal-500 font-bold transition duration-200 ease-in"
          : "text-gray-500 font-medium"
      }`}
      onClick={handleActiveTab}
    >
      {text}
    </button>
  );
}

export default TabBtn;
