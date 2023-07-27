import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">CarCar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="technicians" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Technician
              </Link>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/technicians">List of Technicians</Link></li>
                <li><Link class="dropdown-item" to="technicians/new">Add new Technician</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="technicians" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Manufacturer
              </Link>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/manufacturers">List of Manufacturers</Link></li>
                <li><Link class="dropdown-item" to="manufacturers/new">Add new Manufacturer</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="technicians" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Appointment
              </Link>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/appointments">List of Appointments</Link></li>
                <li><Link class="dropdown-item" to="appointments/new">Add new Appointment</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="technicians" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Service
              </Link>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/service">List of Services</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="technicians" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Salespeople
              </Link>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/salespeople">List of Salespeople</Link></li>
                <li><Link class="dropdown-item" to="salespeople/new">Add new salesperson</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="technicians" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Customers
              </Link>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/customers">List of Customers</Link></li>
                <li><Link class="dropdown-item" to="customers/new">Add new customer</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="technicians" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
              </Link>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/sales">List of Sales</Link></li>
                <li><Link class="dropdown-item" to="sales/new">Add new Sale</Link></li>
                <li><Link class="dropdown-item" to="sales/history">Sales History</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="technicians" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Models
              </Link>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/models">List of Models</Link></li>
                <li><Link class="dropdown-item" to="models/new">Add new Model</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="technicians" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Automobiles
              </Link>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/automobiles">List of Automobiles</Link></li>
                <li><Link class="dropdown-item" to="automobiles/new">Add new Automobile</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
