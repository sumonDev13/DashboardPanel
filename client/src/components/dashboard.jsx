import Chart from "./chart";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import Piechart from "./pi-chart";
import Linechart from "./line-chart";
import InputForm from "./input-form";

const Dashboard = () => {
  const location = useLocation();
  const username = new URLSearchParams(location.search).get("username");

  const [isModalOpen, setModalOpen] = useState(false);
  const [showInputFormInModal, setShowInputFormInModal] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    setShowInputFormInModal(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setShowInputFormInModal(false);
    window.location.reload();
  };

  return (
    <div>
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1>Dashboard</h1>
        <h2>Welcome to your Dashboard, {username}!</h2>
        <div>
          <div style={{alignItems:'center'}}>
          <button style={{width:'auto'}} onClick={openModal}>Add Product Details</button>
          </div>
          
          {isModalOpen && (
            <div style={{ padding: "20px" }} className="modal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      style={{ width: "40px" }}
                      type="button"
                      className="close"
                      onClick={closeModal}
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  {showInputFormInModal && (
                    <InputForm closeModal={closeModal} />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="dash-container">
        <div className="chart">
          <Chart />
        </div>
        <div className="chart">
          <Linechart />
        </div>
        <div className="table">
          <Piechart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
