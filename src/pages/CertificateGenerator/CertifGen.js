import "./CertifGen.css";
import Layout from "../../components/Layout";

import Login from "../admin/Login";
import Logout from '../admin/Logout';
import FileUpload from '../../components/CertificateGenerator/FileUpload';
import ControlledCarousel from "../../components/CertificateGenerator/ControlledCarousel";
import { useState, useEffect } from 'react';
const jwt = require('jsonwebtoken');
const CertifGen = () => {

  document.title = "Certificate Generator | TSG"
  const [id, setId] = useState(null);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (id !== null) {
      setStatus(true);
    }
  }, [id])
  const token = localStorage.getItem("authToken");
  const decodedToken = jwt.decode(token, { complete: true });
  const token_exp = decodedToken.payload.exp;
  if (token_exp * 1000 < Date.now()) {
    localStorage.clear();
    window.location.href = "/login"
  }
  return (

    localStorage.getItem("authToken") ?
      (
        <Layout>
          <div className='certif-container'>
            <div style={{width: '95%'}}>
              <div style={{float: 'left'}}>
              <a href="https://drive.google.com/file/d/1PljTpttt7XvHOBRdMH4cn07FBvwZggvz/view" target="_blank" rel="noreferrer" style={{fontSize: '1.2rem'}}>
                <button className="btn btn-primary">User Manual</button>
              </a>
              </div>
              <div style={{float:'right'}}>
              <Logout />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: "center" }}>
              <div className='admin-title'>CERTIFICATE GENERATOR</div>
            </div>
            <ControlledCarousel setId={setId} />
            <FileUpload id={id} status={status} />
          </div>
        </Layout>
      ) : (
        <Layout>
          <Login/>
        </Layout>
      )
  );
}

export default CertifGen; 