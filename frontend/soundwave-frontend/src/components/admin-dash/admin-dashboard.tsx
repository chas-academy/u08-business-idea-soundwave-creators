// import React from 'react';
// import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChartLine,faUserPlus, faUsers, faThumbsUp,faDoorOpen,faTrash,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// import subscribes from '../src/img/subscribes.png';
// import likes from '../src/img/likes.png';
// import users from '../src/img/users.png';
// const App = () => {
//   return (
//     <div>
//       <nav>
//         <div className="menu-items">
//           <ul className="nav-links">
//             <li>
//                 <a href="#">
//                   <FontAwesomeIcon icon={faUserPlus} style={{ color: '#CCCCCC' }}/>
//                   <span className="link-name">Subscriptions</span>
//                   </a>
//             </li>
//             <li>
//             <a href="#">
//               <FontAwesomeIcon icon={faUsers} style={{ color: '#CCCCCC' }}/>
//               <span className="link-name">Likes</span>
//               </a>
//             </li>
//             <li>
//             <a href="#">
//               <FontAwesomeIcon icon={faChartLine} style={{ color: '#CCCCCC' }}/>
//               <span className="link-name">Analytics</span>
//               </a>
//             </li>
//             <li>
//               <a href="#">
//               <FontAwesomeIcon icon={faThumbsUp} style={{ color: '#CCCCCC' }}/>
//                 <span className="link-name">Admin Profile</span>
//               </a>
//             </li>
//             {/* More list items here */}
//           </ul>
//           <ul className="logout-mode">
//             <li>
//               <a href="#">
//               <FontAwesomeIcon icon={faDoorOpen} style={{ color: '#CCCCCC' }}/>
//                 <span className="link-name">Logout</span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <section className="dashboard">
//         <div className="dash-content">
//           <div className="overview">
//             <div className="title">
//                <span className="text">Dashboard</span>
//             </div>
//             <div className="boxes">
//               {/* Box components */}
//               <div className="data data2"> <img className="icon" src={subscribes} alt="subscribes Icon" />
//       <span>Subscribes</span>
//       <h1>167</h1>
//       </div>

// <div className="data data2">
// <img className="icon" src={likes} alt="likes Icon" />
//       <span>Total Likes</span>
//       <h1>667</h1>
// </div>

// <div className="data data3">
// <img className="icon" src={users} alt="users Icon" />
//       <span>Total Users</span>
//       <h1>324</h1>
// </div>
//             </div>
//           </div>
//           <div className="activity">
//             <div className="title">
             
//               <span className="text">Users Lists</span>
//             </div>
//             <div className="activity-data">
              
//               <table className="user-table">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Created At</th>
//                     <th>Delete</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                     <td>Danial</td>
//                       <td>danial@danial.com</td>
//                       <td>2024-06-02</td>
//                       <td >    <button className='btn' style={{ backgroundColor: 'transparent', border: 'none' }}>
//       <FontAwesomeIcon icon={faTrash} style={{ color:  '#333333' }} />
//     </button></td>
//                       </tr>  
//                       <tr>
//                     <td>Danial</td>
//                       <td>danial@danial.com</td>
//                       <td>2024-06-02</td>
//                       <td >    <button className='btn' style={{ backgroundColor: 'transparent', border: 'none' }}>
//       <FontAwesomeIcon icon={faTrash} style={{ color:  '#333333' }} />
//     </button></td>
//                       </tr>
//                       <tr>
//                     <td>Danial</td>
//                       <td>danial@danial.com</td>
//                       <td>2024-06-02</td>
//                       <td >    <button className='btn' style={{ backgroundColor: 'transparent', border: 'none' }}>
//       <FontAwesomeIcon icon={faTrash} style={{ color:  '#333333' }} />
//     </button></td>
//                       </tr>
//                       <tr>
//                     <td>Danial</td>
//                       <td>danial@danial.com</td>
//                       <td>2024-06-02</td>
//                       <td >    <button className='btn' style={{ backgroundColor: 'transparent', border: 'none' }}>
//       <FontAwesomeIcon icon={faTrash} style={{ color:  '#333333' }} />
//     </button></td>
//                       </tr> 
//                       <tr>
//                     <td>Danial</td>
//                       <td>danial@danial.com</td>
//                       <td>2024-06-02</td>
//                       <td >    <button className='btn' style={{ backgroundColor: 'transparent', border: 'none' }}>
//       <FontAwesomeIcon icon={faTrash} style={{ color:  '#333333' }} />
//     </button></td> </tr> 
//     <tr>
//                     <td>Danial</td>
//                       <td>danial@danial.com</td>
//                       <td>2024-06-02</td>
//                       <td >    <button className='btn' style={{ backgroundColor: 'transparent', border: 'none' }}>
//       <FontAwesomeIcon icon={faTrash} style={{ color:  '#333333' }} />
//     </button></td>
//                       </tr>
                    
//                     </tbody>
//               </table>
//             </div>
//             </div>
//           </div>
        
//       </section>
//     </div>
//   );
// }

// export default App;
