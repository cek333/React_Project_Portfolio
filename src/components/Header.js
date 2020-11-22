function Header() {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-1 bg-primary">
        <h5 className="my-0 mr-md-auto font-weight-bold text-white">Cecil King</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2" href="./contact.html">Contact</a>
          <a className="p-2" href="./portfolio.html">Portfolio</a>
          <a className="p-2" href="./index.html">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;