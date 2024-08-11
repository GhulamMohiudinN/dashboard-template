import React, { useState, useEffect } from "react";
import arrowdown from "../../assets/Images/Icons/arrowdown.svg";
import userimg from "../../assets/Images/Icons/user.svg";
import dots from "../../assets/Images/Icons/dots.svg";
import prevarrow from "../../assets/Images/Icons/prevarrow.svg";
import nextarrow from "../../assets/Images/Icons/nextarrow.svg";
import { getUsersFromLocalStorage, saveUsersToLocalStorage } from "./Usersdata";
import Deletemodal from "./Deletemodal";

const Documents = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState(getUsersFromLocalStorage());
  const usersPerPage = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const filteredUsers = users.filter(
    (user) =>
      (user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.title && user.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleClick = (page) => {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    setCurrentPage(page);
  };

  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleDelete = () => {
    const updatedUsers = users.filter(user => user.id !== selectedUser.id);
    setUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);
    setShowModal(false);
  };

  return (
    <>
      <div className="documentpage">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th> <input type="checkbox" /> </th>
                <th> Author <img src={arrowdown} alt="Sort" /> </th>
                <th>Title</th>
                <th>Title</th>
                <th>Title</th>
                <th>Title</th>
                <th>Title</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td className="checkbox-column">
                    <input type="checkbox" />
                  </td>
                  <td className="author-cell">
                    <div className="imagebox">
                      <img src={userimg} alt="Avatar" />
                    </div>
                    <div>
                      <div className="name">{user.name || "No Name"}</div>
                      <div className="title">{user.title || "No Title"}</div>
                    </div>
                  </td>
                  <td>{user.title1 || "N/A"}</td>
                  <td>{user.title2 || "N/A"}</td>
                  <td>{user.title3 || "N/A"}</td>
                  <td>{user.title4 || "N/A"}</td>
                  <td>
                    <span className="badge">{user.badgeText || "N/A"}</span>
                  </td>
                  <td className="ellipsis" onClick={() => handleOpenModal(user)}>
                    <img
                      src={dots}
                      alt="More"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button
            className={`prev ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => handleClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <img src={prevarrow} alt="Previous" /> &nbsp; Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={`next ${currentPage === totalPages ? "disabled" : ""}`}
            onClick={() => handleClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next &nbsp; <img src={nextarrow} alt="Next" />
          </button>
        </div>
      </div>

      {showModal && (
        <Deletemodal onClose={handleCloseModal} onDelete={handleDelete} />
      )}
    </>
  );
};

export default Documents;
