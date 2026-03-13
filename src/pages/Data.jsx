import { useState } from "react";

function Data() {

  const [data] = useState(
    Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: "User " + (i + 1),
      country: "India",
      revenue: Math.floor(Math.random() * 1000)
    }))
  );

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const start = (page - 1) * pageSize;
  const currentData = filteredData.slice(start, start + pageSize);

  return (
    <div style={{ padding: "20px" }}>

      <h2>Data Table</h2>

      {/* Search */}
      <input
        data-testid="search-input"
        placeholder="Search user..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {/* Table */}
      <table border="1" width="100%" data-testid="data-table">
        <thead>
          <tr>
            <th data-testid="table-header-id">ID</th>
            <th data-testid="table-header-name">Name</th>
            <th data-testid="table-header-country">Country</th>
            <th data-testid="table-header-revenue">Revenue</th>
          </tr>
        </thead>

        <tbody>
          {currentData.map((item, index) => (
            <tr key={item.id} data-testid={`table-row-${index}`}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.country}</td>
              <td>{item.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div data-testid="pagination-controls" style={{ marginTop: "20px" }}>

        <button
          data-testid="prev-page-button"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        <span data-testid="page-number" style={{ margin: "0 10px" }}>
          Page {page}
        </span>

        <button
          data-testid="next-page-button"
          onClick={() => setPage(page + 1)}
          disabled={start + pageSize >= filteredData.length}
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default Data;