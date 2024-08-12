// App.js

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ArtGallery from './components/ArtGallery';
import ArtWorks from './components/ArtWorks';
import ArtworkDetails from './components/ArtworkDetails';
import Contacts from './components/Contacts';
import About from './components/About';
import Artist from './components/Artist';
import Checkout from './components/Checkout';
import Reviews from './components/Reviews';
import Notification from './components/Notification';
import { NotificationProvider } from './context/NotificationContext';

function App() {
  return (
    <NotificationProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/art-gallery" element={<ArtGallery />} />
            <Route path="/art-works" element={<ArtWorks />} />
            <Route path="/art-gallery/:id" element={<ArtworkDetails />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/about"  element={<About />} />
            <Route path="/artist/:artistId" element={<Artist />} /> 
            <Route path="/reviews" element={<Reviews />} />
            <Route path='/notification' element={<Notification />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
      
      
    </NotificationProvider>
  );
}

// const App = () => {
//   const [showNotification, setShowNotification] = useState(false);

//   const handleNewArtworkUpload = () => {
//     setShowNotification(true);
//     // Simulate new artwork upload and hide notification after 3 seconds
//     setTimeout(() => setShowNotification(false), 3000);
//   };

//   return (
//     <div>
//       <button onClick={handleNewArtworkUpload}>Simulate Artwork Upload</button>
//       {showNotification && (
//         <Notification
//           message="New artwork has been uploaded!"
//           duration={3000}
//           onClose={() => setShowNotification(false)}
//         />
//       )}
//     </div>
//   );
// };



export default App;
