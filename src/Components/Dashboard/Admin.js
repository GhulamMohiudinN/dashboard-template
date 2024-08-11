import React, { useState } from "react";
import modalpicture from "../../assets/Images/modelpicture.svg";
import prev from "../../assets/Images/Icons/previmg.svg";
import next from "../../assets/Images/Icons/nextimg.svg";

const ModalWithPagination = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  const goToPage = (page) => setCurrentPage(page);

  const renderPageContent = () => {
    const pageContent = [
      "Lectus iaculis odio 1",
      "Lectus iaculis odio 2",
      "Lectus iaculis odio 3",
      "Lectus iaculis odio 4"
    ];

    return (
      <div className="modalbody">
        <div className="img">
          <img src={modalpicture} alt="Modal" />
        </div>
        <div className="content">
          <h2>{pageContent[currentPage]}</h2>
          <p>
            Vestibulum augue proin enim cursus montes, ante. Ultrices posuere
            mattis elit egestas aliquam pellentesque nisl id quis. Turpis volutpat
            tincidunt volutpat lectus quam facilisi nibh augue egestas.
          </p>
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body">
          {renderPageContent()}
        </div>
        <div className="modal-footer">
          <button
            className="pagination-button temp"
            onClick={prevPage}
            disabled={currentPage === 0}
          >
            <img src={prev} alt="Previous" /> &nbsp;&nbsp; <span className="temp">Back</span>
          </button>
          <div className="pagination-dots">
            {Array.from({ length: totalPages }).map((_, index) => (
              <span
                key={index}
                className={index === currentPage ? "dot active" : "dot"}
                onClick={() => goToPage(index)}
              ></span>
            ))}
          </div>
          <button
            className="pagination-button"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
          >
            <span className="temp">Next</span>&nbsp;&nbsp;&nbsp; <img src={next} alt="Next" />
          </button>
        </div>

        <button className="modal-close" onClick={onClose}>
          x
        </button>
      </div>
    </div>
  );
};

const Admin = ({ showModal, setShowModal }) => {
  return (
    <div>
      <ModalWithPagination
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Admin;
