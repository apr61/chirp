
function Button({children, onClick, rounded = 'rounded-full'}){
  return (
    <button className={`bg-teal-500 text-white text-xl ${rounded} px-4 py-2 focus:ring-2 ring-teal-300 outline-teal-300 hover:bg-teal-600`}
        onClick={onClick}>{children}</button>
  )
}

export default Button