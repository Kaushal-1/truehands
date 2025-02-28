import React from "react";

const AdminDashboard: React.FC = () => {
  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.heading}>Admin Dashboard</h1>

      {/* Monitor Transactions Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Monitor Transactions</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Donor</th>
              <th>Amount</th>
              <th>Institute</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>$100</td>
              <td>Orphanage A</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>$50</td>
              <td>Elderly Home B</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Flag Anomalies Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Flag Anomalies</h2>
        <button style={styles.flagBtn}>Detect Anomalies</button>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Institute</th>
              <th>Issue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Orphanage A</td>
              <td>Unusual consumption of rice</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Elderly Home B</td>
              <td>Excessive milk orders</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Manage Suppliers Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Manage Suppliers</h2>
        <button style={styles.rotateBtn}>Rotate Suppliers</button>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Grocery Store X</td>
              <td>City A</td>
              <td>4.5</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Supermarket Y</td>
              <td>City B</td>
              <td>3.8</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Resolve Disputes Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Resolve Disputes</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Institute</th>
              <th>Issue</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Orphanage A</td>
              <td>Delayed delivery</td>
              <td>Open</td>
              <td><button style={styles.resolveBtn}>Resolve</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Elderly Home B</td>
              <td>Poor quality items</td>
              <td>Resolved</td>
              <td><button style={{ ...styles.resolveBtn, backgroundColor: "#ccc", cursor: "not-allowed" }} disabled>Resolved</button></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
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
  flagBtn: {
    backgroundColor: "#ff6b6b",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
  rotateBtn: {
    backgroundColor: "#4ecdc4",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
  resolveBtn: {
    backgroundColor: "#6b5b95",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default AdminDashboard;
