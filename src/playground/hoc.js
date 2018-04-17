import React from 'react';
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>info</h1>
    <p>the info: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>this is private info. please dont't share</p>}
      <WrappedComponent {...props}/>
    </div>
  );
}

const requireAutentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props}/>
      ) : (
        <p>please login</p>
      )}
      
    </div>
  );
}



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAutentication(Info)

// ReactDOM.render(<AdminInfo idAdmin={false} info="ther are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="ther are the details" />, document.getElementById('app'));