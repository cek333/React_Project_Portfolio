import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-1 bg-primary">
        <h5 className="my-0 mr-md-auto font-weight-bold text-white">Cecil King</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <NavLink to="/index" className="p-2" activeClassName="active">About</NavLink>
          <NavLink to="/contact" className="p-2" activeClassName="active">Contact</NavLink>
          <NavLink to="/portfolio" className="p-2" activeClassName="active">Portfolio</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;