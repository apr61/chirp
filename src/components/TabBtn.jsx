function TabBtn({ text, handleActiveTab, activeTab }) {
  return (
    <button
      className={`w-1/2 p-4 p-2 relative hover:bg-[--hover-bg] whitespace-nowrap ${
        activeTab === text
          ? "before:absolute before:bottom-0 before:w-16 before:rounded before:h-1 before:bg-teal-500 font-bold transition duration-200 ease-in"
          : "text-gray-500 font-medium"
      }`}
      onClick={handleActiveTab}
    >
      {text}
    </button>
  );
}

export default TabBtn;
