import "../css/ImageModal.css";

function ImageModal({ image, title, onClose }) {
  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={onClose}
        >
          ×
        </button>

        <h3>{title}</h3>

        <img
          src={image}
          alt={title}
        />
      </div>

    </div>
  );
}

export default ImageModal;