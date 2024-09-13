import { useState } from 'react'
import './App.css'

function App() {
  const [buttonPosition, setButtonPosition] = useState({ top: '15%', left: '50%' });
  const [showModal, setShowModal] = useState(false);

  const moveButton = () => {
    const newTop = `${Math.floor(Math.random() * 80) + 10}%`;
    const newLeft = `${Math.floor(Math.random() * 80) + 10}%`;
    setButtonPosition({ top: newTop, left: newLeft });
  };

  const handleYesClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1>¿Puedo faltar a Riobamba?</h1>
       <button className="yes-button" onClick={handleYesClick}>Sí</button>
      <button
        className="no-button"
        style={{ top: buttonPosition.top, left: buttonPosition.left }}
        onMouseEnter={moveButton}
      >
        No
      </button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>¡Sabia que elegirias el "Sí"! ❤️</h2>
            <img src='/love.jpg' />
            {/* <h2>¡Yo también te amo! ❤️</h2> */}
            <button onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
