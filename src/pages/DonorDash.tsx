import { useState } from "react";

const DonorDashboard: React.FC = () => {
  const [donationType, setDonationType] = useState("fixed-amount");

  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.heading}>Donor Dashboard</h1>

      {/* Browse Requests Section */}
      <section style={styles.section}>
        <h2>Browse Requests</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
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
              <td><button style={styles.donateBtn}>Donate</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Elderly Home B</td>
              <td>Milk</td>
              <td>5 liters</td>
              <td>Pending</td>
              <td><button style={styles.donateBtn}>Donate</button></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Donate Section */}
      <section style={styles.section}>
        <h2>Donate</h2>
        <form style={styles.form}>
          <label>Donation Type:</label>
          <select value={donationType} onChange={(e) => setDonationType(e.target.value)}>
            <option value="fixed-amount">Fixed Amount</option>
            <option value="specific-item">Specific Item</option>
          </select>

          {donationType === "fixed-amount" ? (
            <>
              <label>Amount (USD):</label>
              <input type="number" placeholder="Enter amount" required />
            </>
          ) : (
            <>
              <label>Item:</label>
              <input type="text" placeholder="e.g., Rice" />
              <label>Quantity:</label>
              <input type="number" placeholder="e.g., 10" />
              <label>Unit:</label>
              <input type="text" placeholder="e.g., kg" />
            </>
          )}

          <button type="submit" style={styles.submitBtn}>Submit Donation</button>
        </form>
      </section>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  dashboardContainer: {
    maxWidth: "800px",
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
  section: {
    marginBottom: "30px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  donateBtn: {
    backgroundColor: "#4ecdc4",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  submitBtn: {
    backgroundColor: "#6b5b95",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};

export default DonorDashboard;
