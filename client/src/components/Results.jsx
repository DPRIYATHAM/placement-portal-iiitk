import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState, useRef } from "react";

const Results = () => {
  const [rowData, setRowData] = useState([
    { name: "Toyota", model: "Celica", price: 35000, electric: true },
    { name: "Ford", model: "Mondeo", price: 32000, electric: true },
    { name: "Porsche", model: "Boxster", price: 72000, electric: false }
  ]);

  const [searchText, setSearchText] = useState("");
  const gridRef = useRef();

  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [5, 10, 15];

  const [columnDefs] = useState([
    { headerName: "Name", field: "name", checkboxSelection: true },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
    { headerName: "Electric", field: "electric", editable: true }
  ]);

  const selectAllRows = () => {
    gridRef.current.api.selectAll(); // Select all rows
  };

  const deselectAllRows = () => {
    gridRef.current.api.deselectAll(); // Deselect all rows
  };

  return (
    <div className="sm:w-full font-ubuntu mt-18">
      <div className="sm:mx-12 right-0  sm:rounded-xl mt-8 mb-2">
        <div>
          <h1>Coordinator Drive</h1>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              marginBottom: "10px",
              padding: "5px",
              width: "200px"
            }}
          />

          {/* Select All / Deselect All Buttons */}

          <div className="flex gap-4">
            <div>
              <input
                type="radio"
                onClick={selectAllRows}
                style={{ marginRight: "10px" }}
                name="select"
              />

              <label>Select All</label>
            </div>
            <div>
              <input
                type="radio"
                name="select"
                onClick={deselectAllRows}
                style={{ marginRight: "10px" }}
              />
              <label>Deselect All</label>
            </div>
          </div>

          <div className="ag-theme-quartz h-[20rem] w-[50rem] mt-4">
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              pagination={pagination}
              paginationPageSize={paginationPageSize}
              paginationPageSizeSelector={paginationPageSizeSelector}
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
