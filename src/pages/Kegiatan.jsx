import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Kegiatan() {
  let [hari, setHari] = useState([]);

  useEffect(() => {
    let arrHari = [
      {
        nama: `Hari Lahan Basah Sedunia`,
        tgl: `02 Februari`,
      },
      {
        nama: `Hari Peduli Sampah Nasional`,
        tgl: `21 Februari`,
      },
      {
        nama: `Hari Hutan Sedunia`,
        tgl: `21 Maret`,
      },
      {
        nama: `Hari Bumi`,
        tgl: `22 April`,
      },
      {
        nama: `Hari Penanaman Pohon`,
        tgl: `28 Februari`,
      },
      {
        nama: `Hari Perlindungan Lapizan Ozon`,
        tgl: `16 September`,
      },
      {
        nama: `Hari Pohon`,
        tgl: `21 November`,
      },
      {
        nama: `Hari Gunung Sedunia`,
        tgl: `11 Desember`,
      },
    ];
    setHari(arrHari);
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
              <ul className="navbar-nav me-auto mt-2 mb-lg-0 my-1">
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
                  <Link className="nav-link" to="/galeri">
                    <h6>Galeri</h6>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/kegiatan">
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
            <h2>Peringatan Besar</h2>
          </div>
          {hari.map((item) => (
            <div className="col-6">
              <div className="form-control mb-2 mt-2 bg-success">
                <div className="card-body bg-success">
                  <h4 className="text-white">{item.tgl}</h4>
                  <ul className="list-group list-group-flush rounded">
                    <li className="list-group-item mt-1">
                      <h5 className="mt-1">{item.nama}</h5>
                    </li>
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
export default Kegiatan;
