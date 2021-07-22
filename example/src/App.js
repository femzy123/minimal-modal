import React, { useState } from 'react'

import { Modal } from 'minimal-modal'
import 'minimal-modal/dist/index.css'

const App = () => {
  const [showModal, setShowModal] = useState(false);

  
  return (
    <>
      <button onClick={() => setShowModal(true)}>Open</button>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        Hello, I'm a modal!
      </Modal>
    </>
  )
}

export default App