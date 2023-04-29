
function Header({children}){
  return(
    <header className="sticky top-0 z-40 bg-white bg-opacity-95 border-b border-slate-300">
      {children}
    </header>
  )
}

export default Header