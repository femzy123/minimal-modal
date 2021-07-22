# minimal-modal

> A very minimalistic modal

[![NPM](https://img.shields.io/npm/v/minimal-modal.svg)](https://www.npmjs.com/package/minimal-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save minimal-modal
```

## Usage

```jsx
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
```

## License

MIT © [femzy123](https://github.com/femzy123)
