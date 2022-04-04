import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-gradient " style={{fontFamily:"Quicksand"}}>
      <div className="container">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-1" >
            <a>
              <img src="https://1.bp.blogspot.com/-0kOTNZET8F8/XmCW5SErz9I/AAAAAAAABqs/dV6OYtVmy7UjqQvFZ9a3mLyJYE-4G56jgCLcBGAsYHQ/s1600/Logo%2BAdiwiyata.png" width="5%" alt="" />
            </a>
            <li className="nav-item">
              <Link className="nav-link active" to="/beranda">
                <h6>Beranda</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/galeri">
              <h6>Galeri</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kegiatan">
              <h6>Kegiatan</h6>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  );
}
