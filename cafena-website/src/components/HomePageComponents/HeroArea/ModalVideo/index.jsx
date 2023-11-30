import React from 'react'

const ModalVideo = ({props}) => {
    const {isModalOpen,setIsModalOpen} = props
  return (
    <div
        className={isModalOpen ? "active video-modal" : "video-modal"}
        onClick={() => setIsModalOpen(false)}
      >
        <button className="close-button">x</button>
        {isModalOpen ? (
          <iframe
            id="cartoonVideo"
            name="iframe_a"
            width="800"
            height="450"
            allowfullscreen
            src="//www.youtube.com/embed/4xe72U7mXNg?rel=0&amp;controls=1&amp;showinfo=0"
          ></iframe>
        ) : (
          ""
        )}
      </div>
  )
}

export default ModalVideo