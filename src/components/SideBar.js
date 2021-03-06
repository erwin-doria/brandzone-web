import { MDBIcon } from 'mdbreact';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ModalProfile from './ModalProfile';
const SideBar = ({
  account,
  show,
  OnHandleShowSideBar,
  onLogout,
  isShow,
  isEvent,
  OnHandleToggle,
  parent,
  OnHandleOpenProfile,
  OnHandleOpenPassword
}) => {
  const { firstName, lastName, profilePicture } = account;
  return (
    <div
      id='sideBar'
      className={show ? 'fade-effect' : 'fade-out-effect'}
      style={{
        display: show ? 'block' : 'none',
        opacity: show ? 1 : 0,
        position: 'fixed',
        height: '100vh',
        backgroundColor: '#283037',
        width: '27vw',
        top: 0,
        right: 0,
        padding: '3.3em 3.8em'
      }}
    >
      <div style={style.content}>
        <div style={style.sidebarProfile}>
          <div style={style.profileInfo}>
            <img src={profilePicture} style={style.avatar} alt='profile' />
            <div style={style.profileContent}>
              <p style={style.userName}>
                {firstName} {lastName}
              </p>
              <p style={style.userType}>{localStorage.getItem('userType')}</p>
            </div>
          </div>
          <span className='cursor-pointer' style={style.closeBtn}>
            <MDBIcon
              icon='times'
              style={style.close}
              onClick={() => OnHandleShowSideBar()}
            />
          </span>
        </div>
      </div>
      <div style={style.divider}></div>
      <div style={style.navLinks}>
        <NavLink
          to='#'
          style={style.links}
          className='sideBarLink'
          onClick={() => {
            // isShow(false);
            // OnHandleShowSideBar();
            window.location.href = '/events';
          }}
        >
          My Schedule
        </NavLink>

        <NavLink
          to='#'
          style={style.links}
          className='sideBarLink'
          onClick={() => {
            OnHandleToggle('updatesAndNotifs');
            OnHandleShowSideBar();
          }}
        >
          Updates and Notifications
        </NavLink>

        <NavLink
          to='#'
          style={style.links}
          className='sideBarLink'
          onClick={() => {
            isShow(true);
            OnHandleShowSideBar();
          }}
        >
          List of&nbsp;
          {localStorage.getItem('userType') == 'exhibitor'
            ? 'Participants'
            : 'Exhibitors'}
        </NavLink>

        {isEvent && (
          <NavLink
            to='#'
            onClick={e => {
              OnHandleToggle('profile');
              OnHandleShowSideBar();
            }}
            style={style.links}
            className='sideBarLink'
          >
            My Profile
          </NavLink>
        )}
        {isEvent && (
          <NavLink
            to='#'
            style={style.links}
            className='sideBarLink'
            onClick={() => {
              OnHandleOpenProfile();
              OnHandleShowSideBar();
            }}
          >
            Edit Profile
          </NavLink>
        )}
        {isEvent && (
          <NavLink
            to='#'
            onClick={e => {
              OnHandleOpenPassword();
              OnHandleShowSideBar();
            }}
            style={style.links}
            className='sideBarLink'
          >
            Change Password
          </NavLink>
        )}
        {isEvent && (
          <React.Fragment>
            <NavLink
              to='#'
              onClick={e => {
                OnHandleToggle('about');
                OnHandleShowSideBar();
              }}
              style={style.links}
              className='sideBarLink'
            >
              About us
            </NavLink>
            <NavLink
              to='#'
              onClick={e => {
                OnHandleToggle('contact');
                OnHandleShowSideBar();
              }}
              style={style.links}
              className='sideBarLink'
            >
              Contact us
            </NavLink>
            <NavLink
              to='#'
              onClick={e => {
                OnHandleToggle('privacy');
                OnHandleShowSideBar();
              }}
              style={style.links}
              className='sideBarLink'
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to='#'
              onClick={e => {
                OnHandleToggle('terms');
                OnHandleShowSideBar();
              }}
              style={style.links}
              className='sideBarLink'
            >
              Terms & Conditions
            </NavLink>
          </React.Fragment>
        )}
        <NavLink
          to='#'
          onClick={() => {
            OnHandleShowSideBar();
            sessionStorage.clear();
            onLogout();
            window.location.replace('/');
          }}
          style={style.links}
          className='sideBarLink'
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
};

const style = {
  closeBtn: {
    position: 'relative',
    bottom: 16,
    left: 5,
    fontSize: 14
  },
  close: {
    color: '#fff',
    fontSize: '21px'
  },
  sidebarProfile: {
    display: 'flex',
    width: '100%'
  },
  profileInfo: {
    width: '100%',
    display: 'flex'
  },
  profileContent: {
    paddingLeft: '1.5em',
    paddingRight: '1.5em',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 17
  },
  avatar: {
    height: 65,
    width: 65,
    borderRadius: 5,
    objectFit: 'contain',
    background: '#fff',
    padding: '.2em'
  },
  userName: {
    margin: 0,
    marginBottom: 3,
    letterSpacing: 1,
    fontSize: 15,
    fontFamily: 'Harabara',
    textTransform: 'capitalize'
  },
  userType: {
    margin: 0,
    fontSize: 12,
    letterSpacing: 1,
    fontfamily: 'Helvetica',
    textTransform: 'capitalize'
  },
  divider: {
    width: '100%',
    height: 1,
    border: '0.1px solid rgba(255, 255, 255, 0.3)',
    marginTop: '1.7em'
  },
  links: {
    display: 'block',
    marginTop: '1.5em',
    marginBottom: '1.5em',
    paddingTop: '.1em',
    paddingBottom: '.1em',
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: 'Helvetica',
    color: '#fff',
    opacity: 0.7
  },
  navLinks: {
    marginTop: '1.5em'
  }
};
export default SideBar;
