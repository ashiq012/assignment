import React, { useState } from "react";

const DataTable = ({ data = [], loading = false }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [selectedRows, setSelectedRows] = useState([]);

  if (loading) return <p className="text-blue-500">Loading data...</p>;
  if (!data.length) return <p className="text-gray-500">No data available</p>;

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const toggleRowSelection = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
    );
  };

  return (
    <table className="border-collapse border border-gray-400 w-full">
      <thead>
        <tr>
          <th className="border p-2">Select</th>
          {Object.keys(data[0]).map((key) => (
            <th
              key={key}
              className="border p-2 cursor-pointer"
              onClick={() => handleSort(key)}
            >
              {key.toUpperCase()}{" "}
              {sortConfig.key === key
                ? sortConfig.direction === "asc"
                  ? "▲"
                  : "▼"
                : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.id} className="hover:bg-gray-100">
            <td className="border p-2 text-center">
              <input
                type="checkbox"
                checked={selectedRows.includes(row.id)}
                onChange={() => toggleRowSelection(row.id)}
              />
            </td>
            {Object.values(row).map((value, idx) => (
              <td key={idx} className="border p-2">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
