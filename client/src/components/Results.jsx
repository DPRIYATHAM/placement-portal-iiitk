import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState, useRef } from "react";

// Constants for the grid configuration
const PAGINATION_PAGE_SIZE = 10;

const Results = () => {
  // State for row data with initial attribute for Selected
  const [rowData, setRowData] = useState([
    { name: "John Doe", rollNo: "1001", selected: false },
    { name: "Jane Doe", rollNo: "1002", selected: false },
    { name: "Mark Smith", rollNo: "1003", selected: false }
  ]);

  const [searchText, setSearchText] = useState("");
  const gridRef = useRef();

  // Column Definitions with Radio Button for Selected
  const [columnDefs] = useState([
    { headerName: "Name", field: "name" },
    { headerName: "Roll No.", field: "rollNo" },
    {
      headerName: "Selected",
      field: "selected",
      cellRenderer: (params) => (
        <input
          type="radio"
          checked={params.value}
          onChange={() => handleSelectionChange(params, "selected")}
          name={`select-${params.data.rollNo}`}
        />
      )
    }
  ]);

  // Handle changes to selected state
  const handleSelectionChange = (params) => {
    const updatedData = rowData.map((row) => {
      if (row.rollNo === params.data.rollNo) {
        // Toggle selected state
        return { ...row, selected: true };
      }
      return { ...row, selected: false }; // Deselect others
    });
    setRowData(updatedData);
  };

  // Handlers for row selection
  const handleSelectAllRows = () => {
    const updatedData = rowData.map((row) => ({
      ...row,
      selected: true
    }));
    setRowData(updatedData);
    gridRef.current.api.refreshCells({ force: true });
  };

  const handleDeselectAllRows = () => {
    const updatedData = rowData.map((row) => ({
      ...row,
      selected: false
    }));
    setRowData(updatedData);
    gridRef.current.api.refreshCells({ force: true });
  };

  // Render component
  return (
    <div className="font-ubuntu mt-18">
      <div className="sm:mx-12 right-0 sm:rounded-xl mt-8 mb-2">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="mb-2 p-2 w-48 border border-gray-300 rounded"
        />

        {/* Select All / Deselect All Controls */}
        <div className="flex gap-4 mb-4">
          <div>
            <input
              type="radio"
              onClick={handleSelectAllRows}
              id="selectAll"
              name="select"
              className="mr-2"
            />
            <label htmlFor="selectAll">Select All</label>
          </div>
          <div>
            <input
              type="radio"
              onClick={handleDeselectAllRows}
              id="deselectAll"
              name="select"
              className="mr-2"
            />
            <label htmlFor="deselectAll">Deselect All</label>
          </div>
        </div>

        {/* AG Grid */}
        <div className="flex justify-center">
          <div className="ag-theme-quartz h-[20rem] w-[30rem]">
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              pagination={true}
              paginationPageSize={PAGINATION_PAGE_SIZE}
              rowSelection="multiple"
              quickFilterText={searchText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
