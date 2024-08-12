
// import React from 'react';
// import './Notification.css';

// const Notification = ({ message, onClose }) => {
//   return (
//     <div className="notification">
//       <p>{message}</p>
//       <button onClick={onClose}>Close</button>
//     </div>
//   );
// };

// export default Notification;

import React, { useEffect } from 'react';
import './Notification.css';

const Notification = ({ message, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, duration);

    
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="notification">
      <p>{message}</p>
    </div>
  );
};

export default Notification;
