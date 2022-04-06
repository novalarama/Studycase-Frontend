import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Galeri() {
  let [gambar, setGambar] = useState([]);

  useEffect(() => {
    let arrGambar = [
      "https://sdnglagahsari1.sch.id/media_library/posts/large/311633ccb2db0085aae813274890ee86.jpeg",
      "https://smkn1nglegok.sch.id/wp-content/uploads/2020/01/DSC_7509-574x385.jpg",
      "https://sdnglagahsari1.sch.id/media_library/posts/large/311633ccb2db0085aae813274890ee86.jpeg",
      "https://smkn1nglegok.sch.id/wp-content/uploads/2020/01/DSC_7509-574x385.jpg",
      "https://sdnglagahsari1.sch.id/media_library/posts/large/311633ccb2db0085aae813274890ee86.jpeg",
      "https://smkn1nglegok.sch.id/wp-content/uploads/2020/01/DSC_7509-574x385.jpg",
    ];
    setGambar(arrGambar);
  }, []);
  return (
    <div style={{ fontFamily: "poppins" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-gradient ">
        <div className="container">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-1">
                <a href="#">
                  <img
                    src="https://1.bp.blogspot.com/-0kOTNZET8F8/XmCW5SErz9I/AAAAAAAABqs/dV6OYtVmy7UjqQvFZ9a3mLyJYE-4G56jgCLcBGAsYHQ/s1600/Logo%2BAdiwiyata.png"
                    width="5%"
                    alt=""
                  />
                </a>
                <li className="nav-item">
                  <Link className="nav-link" to="/beranda">
                    <h6>Beranda</h6>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/galeri">
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
      <div className="container">
        <div className="row">
          <div className="card-header bg-light mt-2">
            <h2>Liputan Adiwiyata</h2>
          </div>
          {gambar.map((item) => (
            <div className="col-4">
              <div className="form-control">
                <div className="card-body bg-light">
                  <ul className="list-group list-group-flush">
                    {/* <li className="list-group-item">
                      <img />
                    </li> */}
                    {/* {gambar.map(item => ( */}
                    <li className="list-group-item">
                      <img src={item} alt="" />
                    </li>
                    {/* ))} */}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Galeri;
