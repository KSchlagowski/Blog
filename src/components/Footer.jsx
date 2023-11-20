import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div>
          <a href='https://www.linkedin.com/in/kamil-schlagowski-5372b41b2/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/KSchlagowski' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-4'>
          <MDBRow className='mt-3'>
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-3'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Trójmiasto
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                kamilschlagowski@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 48 514 059 768
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: <Link className='fw-bold text-decoration-underline' to="/AboutMe"> Kamil Schlagowski</Link> 
      </div>
    </MDBFooter>
  );
};

export default Footer;