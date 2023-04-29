
function TabBtn({text, handleActiveTab, activeTab}){
    return (
        <button className={`w-1/2 p-4 relative hover:bg-gray-100 ${activeTab === text && 'before:absolute before:bottom-0 before:w-16 before:rounded before:h-1 before:bg-teal-500 font-bold'}`} onClick={handleActiveTab}>{text}</button>
    )
}

export default TabBtn