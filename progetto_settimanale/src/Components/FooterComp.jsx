import React from 'react';

export default function FooterComp() {
  return (
    <footer className="d-flex justify-content-center">
      <div className="d-flex flex-column">
        <div>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-youtube"></i>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-3">
              <p>Audio and subtitles</p>
            </div>
            <div className="col-3">
              <p>Audio Description</p>
            </div>
            <div className="col-3">
              <p>Help center</p>
            </div>
            <div className="col-3">
              <p>Gift cards</p>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <p>Media Center</p>
            </div>
            <div className="col-3">
              <p>Investor relations</p>
            </div>
            <div className="col-3">
              <p>Jobs</p>
            </div>
            <div className="col-3">
              <p>Terms of Use</p>
            </div>
            <div className="col-3">
              <p>Contact us</p>
            </div>
          </div>
        </div>
        <div className="my-4">
          <p className="d-inline p-2 border border-secondary">Service code</p>
        </div>
        <p className="mb-2">&#169 1997-2019 Netflix,Inc. </p>
      </div>
    </footer>
  )
}