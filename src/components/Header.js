import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
  <header className='header'>
  <div className='content-container'>
    <div className='header__content'>
        <Link className='header__title' to='/dashboard'>
          <h1>Expensify</h1>
        </Link>
        <div className='header__user'>
          <span className='header__user-name'>{ props.userName }</span>
          <img className='header__user-avatar' src={ props.photoURL } />
          <button className='button button--link' onClick={ props.startLogout }>Logout</button>
        </div>
      </div>
    </div>
  </header>
);

const mapStateToProps = (state) => ({
  userName: state.auth.displayName,
  photoURL: state.auth.photoURL
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);