import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className='box-layout'>
    <div className='box-layout__box'>
      <h1 className='box-layout__title'>Expensify</h1>
      <p>It's time to get your expenses under control</p>
      <button className='button button--with-icon' onClick={ () => startLogin('google') }><i className="icon-prepend fa fa-google"/>Login with Google</button>
      <button className='button button--with-icon' style={{"background":"#4267b2"}} onClick={ () => startLogin('facebook') }><i className="icon-prepend fa fa-facebook-f"/>Login with Facebook</button>
      <button className='button button--with-icon' style={{"background":"#24292e"}} onClick={ () => startLogin('github') }><i className="icon-prepend fa fa-github"/>Login with Github</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: (provider) => dispatch(startLogin(provider))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);