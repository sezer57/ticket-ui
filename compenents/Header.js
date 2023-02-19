

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
    <div className="flex items-center justify-between px-4 py-2 md:px-8 md:py-4">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-medium"><a href="/">Ticket App</a></h1>
      </div>
      <div className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </header>
  )
}

export default Header
