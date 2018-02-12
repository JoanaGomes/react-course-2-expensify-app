// higher order component (HOC) - a component that rendes another componentS
// reutse code
// render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: { props.info }</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin &&
        <p>This is private info, please don't share.</p>
      }
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? (
          <WrappedComponent {...props} />
        ) : (
          <p>Please log in to view the info</p>
        )
      }
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(AdminInfo);

ReactDOM.render(<AuthInfo isAdmin={ true } isAuthenticated={ true } info='these are the details' />, document.getElementById('app'));