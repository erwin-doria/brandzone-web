import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import Text from './Text';

const Footer = () => {
  return (
    <React.Fragment>
      <MDBContainer style={style.main} className='w-100 footer p-5'>
        <MDBRow>
          <MDBCol lg='6' xl='6' sm='12' className='col-footer'>
            <Text className='m-0'>
              <span style={style.brand}>Brandzone Inc.</span>
            </Text>
            <Text className='m-0 mt-2' style={style.address}>
              5388 Madame Curie St., Brgy. Palanan, Makati City, Philippines
            </Text>
            <Text className='m-0 mt-2' style={style.address}>
              Tel. +632 8296 9044
            </Text>
          </MDBCol>
          <MDBCol lg='6' xl='6' sm='12' className='justify-content-center col-footer'>
            <MDBRow>
              <MDBCol lg='12' xl='12' sm='12'>
                <ul className='d-inline-block footer-link mb-0'>
                  <li className='d-inline-block'>
                    <NavLink to='#'>
                      <Text style={style.footerLink}>Edit Profile</Text>
                    </NavLink>
                  </li>
                  <li className='d-inline-block' style={style.myschedLink}>
                    <NavLink to='#'>
                      <Text style={style.footerLink}>My Schedule</Text>
                    </NavLink>
                  </li>
                  <li className='d-inline-block'>
                    <NavLink to='#'>
                      <Text style={style.footerLink}>List of Participants</Text>
                    </NavLink>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol lg='12' xl='12' sm='12' className='footer-last-link'>
                <ul className='d-inline-block footer-link mb-0 mt-2'>
                  <li className='d-inline-block'>
                    <NavLink to='#'>
                      <Text style={style.footerLink}>Privacy Policy</Text>
                    </NavLink>
                  </li>
                  <li className='d-inline-block'>
                    <NavLink to='#'>
                      <Text style={style.footerLink}>Terms & Schedule</Text>
                    </NavLink>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className='w-100 footer text-center p-3' style={style.mainBottom}>
        <Text style={style.bottomText}>
          <strong style={style.brandzone}>BrandZone Inc.</strong> &copy; Copyright{' '}
          {new Date().getFullYear()} - all rights reserved
        </Text>
      </MDBContainer>
    </React.Fragment>
  );
};

const style = {
  brandzone: {
    fontWeight: 'bold'
  },
  bottomText: {
    color: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 11,
    position: 'relative',
    margin: 0
  },
  main: {
    background: '#8EC63F'
  },
  mainBottom: {
    background: '#37424B'
  },
  brand: {
    color: '#37424B',
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  address: {
    fontFamily: 'Helvetica',
    fontSize: 12
  },
  footerLink: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: '#37424B',
    margin: 0
  },
  myschedLink: {
    marginLeft: '1.3em'
  }
};
export default Footer;
