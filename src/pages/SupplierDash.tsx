import React from "react";

const SupplierDashboard: React.FC = () => {
  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.heading}>Supplier Dashboard</h1>
      
      {/* Receive Orders Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Receive Orders</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Institute</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Orphanage A</td>
              <td>Rice</td>
              <td>10 kg</td>
              <td>Pending</td>
              <td>
                <button style={styles.acceptBtn}>Accept</button>
                <button style={styles.rejectBtn}>Reject</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Elderly Home B</td>
              <td>Milk</td>
              <td>5 liters</td>
              <td>Pending</td>
              <td>
                <button style={styles.acceptBtn}>Accept</button>
                <button style={styles.rejectBtn}>Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      
      {/* Ship Items Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Ship Items</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Institute</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Orphanage A</td>
              <td>Rice</td>
              <td>10 kg</td>
              <td>Accepted</td>
              <td><button style={styles.shipBtn}>Mark as Shipped</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Elderly Home B</td>
              <td>Milk</td>
              <td>5 liters</td>
              <td>Accepted</td>
              <td><button style={styles.shipBtn}>Mark as Shipped</button></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    maxWidth: "1200px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  subHeading: {
    color: "#555",
    marginBottom: "10px",
  },
  section: {
    marginBottom: "30px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  acceptBtn: {
    backgroundColor: "#4ecdc4",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "2px",
  },
  rejectBtn: {
    backgroundColor: "#ff6b6b",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "2px",
  },
  shipBtn: {
    backgroundColor: "#6b5b95",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "2px",
  },
};

export default SupplierDashboard;
