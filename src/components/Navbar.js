import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import AuthContext from '../../context/auth/authContext';
// import ContactContext from '../../context/profile/profileContext';
import './Navbar.css';
import Logo from './logo.PNG';

// const Navbar = ({ title, icon }) => {
//   const authContext = useContext(AuthContext);
//   const contactContext = useContext(ContactContext);

//   const { isAuthenticated, logout, user, loadUser } = authContext;
//   const { clearContacts } = contactContext;

//   useEffect(() => {
//     loadUser();
//     // eslint-disable-next-line
//   }, []);

//   const onLogout = () => {  
//     logout();
//   };

//   const authLinks = (
//     <Fragment>
//       <li className="mr-3">
//         <Link to="/profile" className="btn btn-success">
//           <i class="fas fa-user-edit"></i> Business Profile
//         </Link>
//       </li>

//       <li>| Hello {user && user.name} |</li>
//       <li>
//         <Link to="/about">| About |</Link>
//       </li>
//       <li>
//         <a onClick={onLogout} href="#!">
//           <i className="fas fa-sign-out-alt" />{' '}
//           <span className="hide-sm">Logout</span>
//         </a>
//       </li>
//     </Fragment>
//   );

//   const guestLinks = (
//     <Fragment>
//       <li>
//         <Link to="/login">| Login |</Link>
//       </li>
//       <li>
//         <Link to="/register">| Register |</Link>
//       </li>
//       <li>
//         <Link to="/about">| About |</Link>
//       </li>
//     </Fragment>
//   );


 function Navbar() {
  return (
    <div>
      <divs className="navbar">
        <h1>
          {/* <Link to="/home"> */}
            <img className="main-logo" src={Logo} alt="logo" />
          {/* </Link> */}
        </h1>
      </divs>
    </div>
  );
};

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   icon: PropTypes.string
// };

// Navbar.defaultProps = {
//   title: 'ConvenienC',
//   icon: 'fab fa-viadeo'
// };

export default Navbar;
