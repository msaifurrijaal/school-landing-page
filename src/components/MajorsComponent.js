import React from "react";
import CardsMajor from "./CardsMajor";
import ipa from "./../assets/jurusan/ipa.jpg";
import ips from "./../assets/jurusan/ips.jpg";
import bahasa from "./../assets/jurusan/bahasa.jpg";

const MajorsComponent = () => {
  return (
    <div className="custom-main-color">
      <div className="container pt-5 pb-5">
        <h2 className="text-center text-light mb-5">Program Penjurusan</h2>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
            <CardsMajor image={ipa} jurusan="Ilmu Pengetahuan Alam" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
          <CardsMajor image={ips} jurusan="Ilmu Pengetahuan Sosial" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
          <CardsMajor image={bahasa} jurusan="Bahasa dan Sastra" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorsComponent;
