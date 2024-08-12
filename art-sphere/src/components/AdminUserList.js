
// import React from 'react';
// import './UserList.css';

// const usersData = [
//   { id: 1, username: 'user1', isActive: true },
//   { id: 2, username: 'user2', isActive: true },
  
// ];

// const UserList = () => {
//   const handleDeactivate = (userId) => {
    
//     console.log(`Deactivating user with ID: ${userId}`);
//   };

//   return (
//     <div className="user-list">
//       <h1>User List</h1>
//       <ul>
//         {usersData.map(user => (
//           <li key={user.id} className={user.isActive ? 'active' : 'inactive'}>
//             {user.username}
//             <button onClick={() => handleDeactivate(user.id)}>
//               Deactivate
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;
// src/components/AdminUserList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminUserList.css';

const AdminUserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    axios.get('/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDeactivate = (userId) => {
    axios.post(`/api/deactivate-user/${userId}`)
      .then(() => {
        setUsers(users.map(user =>
          user.id === userId ? { ...user, isActive: false } : user
        ));
      })
      .catch(error => console.error(error));
  };

  const handleActivate = (userId) => {
    axios.post(`/api/activate-user/${userId}`)
      .then(() => {
        setUsers(users.map(user =>
          user.id === userId ? { ...user, isActive: true } : user
        ));
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} - {user.isActive ? 'Active' : 'Inactive'}
            <button onClick={() => user.isActive ? handleDeactivate(user.id) : handleActivate(user.id)}>
              {user.isActive ? 'Deactivate' : 'Activate'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminUserList;
