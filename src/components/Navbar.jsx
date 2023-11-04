import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
  <Link className="navbar-brand text-white" to="/general">NEWS Corner</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
    <ul className="navbar-nav m5-auto mb-2 mb-lg-0">
      <li className="nav-item active text-white">
        <Link className="nav-link text-white" to="/general">General</Link>
      </li>
      <li className="nav-item active text-white">
        <Link className="nav-link text-white" to="/business">Business</Link>
      </li>
      <li className="nav-item active text-white">
        <Link className="nav-link text-white" to="/entertainment">Entertainment</Link>
      </li>
      <li className="nav-item active text-white">
        <Link className="nav-link text-white" to="/science">Science</Link>
      </li>
      <li className="nav-item active text-white">
        <Link className="nav-link text-white" to="/sports">Sports & Technology</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar