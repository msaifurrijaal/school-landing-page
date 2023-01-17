import React from "react";
import kepsek from "./../assets/kepsek.jpg";

const SectionKepsek = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-none d-md-block">
            <div className="mt-3 text-center">
              <img src={kepsek} height="200" className="rounded" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 mt-4">
            <h2 className="text-center">SAMBUTAN KEPALA SEKOLAH</h2>
            <p className="text-indent text-center mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionKepsek;
