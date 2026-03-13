function Dashboard() {
  return (
    <div data-testid="dashboard-container" style={{ padding: "20px" }}>
      
      <h2>Dashboard Overview</h2>

      <div style={{ marginTop: "20px" }}>
        <label>Select Date Range: </label>
        <select data-testid="date-range-filter">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
        </select>
      </div>

      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        
        <div data-testid="metric-card-users" style={{ border: "1px solid white", padding: "15px" }}>
          <h3>Users</h3>
          <p>1200</p>
        </div>

        <div data-testid="metric-card-revenue" style={{ border: "1px solid white", padding: "15px" }}>
          <h3>Revenue</h3>
          <p>$34,000</p>
        </div>

        <div data-testid="metric-card-conversion" style={{ border: "1px solid white", padding: "15px" }}>
          <h3>Conversion</h3>
          <p>4.5%</p>
        </div>

      </div>


      <div style={{ marginTop: "40px" }}>
        
        <div
          data-testid="chart-revenue"
          style={{ height: "150px", border: "1px solid black", marginBottom: "20px", padding: "10px" }}
        >
          Revenue Chart
        </div>

        <div
          data-testid="chart-users"
          style={{ height: "150px", border: "1px solid black", padding: "10px" }}
        >
          Users Chart
        </div>

      </div>

      <div style={{ marginTop: "30px" }}>
        <button data-testid="refresh-button">Refresh Data</button>
        <button data-testid="export-button" style={{ marginLeft: "10px" }}>
          Export Data
        </button>
      </div>

    </div>
  )
}

export default Dashboard