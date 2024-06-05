// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// type WithAuthProps = {
//   // Define the props type for the HOC
//   [key: string]: unknown;
// };

// const withAuth = (WrappedComponent: React.ComponentType<unknown>) => {
//   const AuthenticatedComponent: React.FC<WithAuthProps> = (props) => {
//     const navigate = useNavigate();

//     useEffect(() => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         navigate('/login');
//       }
//     }, [navigate]);

//     return <WrappedComponent {...props} />;
//   };

//   return AuthenticatedComponent;
// };

// export default withAuth;
