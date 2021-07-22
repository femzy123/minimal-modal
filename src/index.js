import React, { useEffect, useRef, useCallback } from 'react'
import styles from './styles.module.css'

export const Modal = ({ showModal, setShowModal, children }) => {
  const modalRef = useRef()

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false)
        console.log('I pressed')
      }
    },
    [setShowModal, showModal]
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <div>
      {showModal ? (
        <div className={styles.background} ref={modalRef} onClick={closeModal}>
          <div className={styles.modalWrapper}>
            <div className={styles.modalContent}>{children}</div>
            <div
              className={styles.closeModalButton}
              aria-label='Close modal'
              onClick={() => setShowModal((prev) => !prev)}
            >
              <svg
                version='1.0'
                xmlns='http://www.w3.org/2000/svg'
                width='24px'
                height='24px'
                viewBox='0 0 128 128'
                preserveAspectRatio='xMidYMid meet'
              >
                <g
                  transform='translate(0.000000,128.000000) scale(0.100000,-0.100000)'
                  fill='#FF0000'
                  stroke='none'
                >
                  <path
                    d='M168 1096 c-43 -40 -78 -79 -78 -87 0 -8 79 -93 175 -189 l176 -176
-176 -163 c-188 -175 -212 -201 -198 -225 14 -25 137 -133 160 -140 24 -8 21
-10 251 197 84 76 157 137 162 135 4 -2 86 -72 181 -157 211 -187 210 -186
241 -171 34 18 117 100 135 134 l15 29 -119 111 c-65 61 -152 143 -193 183
l-75 72 173 174 c94 95 172 178 172 183 0 19 -157 166 -173 162 -9 -1 -95 -79
-192 -171 l-175 -169 -177 171 c-97 94 -184 171 -193 171 -8 0 -50 -33 -92
-74z'
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
