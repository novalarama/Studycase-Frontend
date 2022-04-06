import { Link } from "react-router-dom";
function Home() {
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
      <div className="container align-middle mt-5">
        <div className="row align-items-center">
          <div className="col-6">
            <h1 className="mb-5" style={{ fontWeight: "bolder" }}>
              ADIWIYATA
            </h1>
            <p>
              Kata ADIWIYATA berasal dari Bahasa Sansekerta yaitu dari kata
              <b> ADI</b> yang berarti{" "}
              <b>besar, agung, baik, ideal atau sempurna </b> dan kata{" "}
              <b>WIYATA</b> yang berarti{" "}
              <b>
                tempat dimana seseorang mendapatkan ilmu pengetahuan, norma dan
                etika
              </b>
              . Sedangkan ADIWIYATA artinya
              <b style={{ color: "green" }}>
                {" "}
                tempat yang besar, agung, baik dan indah yang dimana tempat itu
                digunakan oleh seseorang untuk mendapatkan ilmu pengetahuan,
                norma dan etika
              </b>
              .
            </p>
          </div>
          <div className="col-6 text-center">
            <img
              src="https://sman15plg.sch.id/wp-content/uploads/2021/03/adiwiyata-293x300.png"
              width="80%"
              alt=""
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
