import React, { useState } from 'react';


const Table = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (item) => {
    setSelectedRow(item);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Groups</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} onClick={() => handleRowClick(item)}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                {item.groups.map((group) => (
                  <span key={group} className="group">
                    {group}
                  </span>
                ))}
              </td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Dialog */}
      {selectedRow && (
        <div className="dialog">
          <h2>{selectedRow.name}</h2>
          <p>{selectedRow.email}</p>
          <p>{selectedRow.groups.join(', ')}</p>
          <p>{selectedRow.status}</p>
          <button type="button" onClick={() => setSelectedRow(null)}>
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Table;
