"use client";
import React, { useState } from "react";
import { useTable, usePagination } from "react-table";
import { useRouter } from "next/navigation";

import axios from "axios";

const DataTable = ({ data }) => {
  const router = useRouter();

  // let maham="maham"

  // let ayesha="ayesha"

  // maham=ayesha

  console.log("this is data from table", data);

  const [dataAfterDeleted, setDataAfterDeleted] = useState(data);

// dataAfterDeleted = data [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]


  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "_id", // accessor is the "key" in the data
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone Number",
        accessor: "phone",
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: (row) => (
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignContent: "center",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div className="m-1">
              <button
                className="bg-teal-400 rounded p-4 text-white"
                onClick={() => handleDetailView(row.row.original)}
              >
                View
              </button>
            </div>

            <div className="m-1">
              {" "}
              <button
                className="bg-teal-400 rounded p-4 text-white"
                onClick={() => handleEdit(row.row.original)}
              >
                Edit
              </button>
            </div>
            <div className="m-1">
              <button
                className="bg-teal-400 rounded p-4 text-white"
                onClick={(e) => handleDelete(row.row.original)}
              >
                Delete
              </button>
            </div>
          </div>
        ), // Custom cell components! --> React Table --> Button
      },
    ],
    []
  );

  const tableInstance = useTable(
    {
      columns,
      data: dataAfterDeleted ? dataAfterDeleted : data,
      initialState: { pageIndex: 1 },
    },
    usePagination
  );

  console.log(tableInstance, "tableInstance");

// obj ={name:"sdf", age: 23}  --> obj.name --> sdf --> || const {name} = obj --> name = sdf

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      // data: dataAfterDeleted ? dataAfterDeleted : data,
      initialState: { pageIndex: 1 },
    },
    usePagination
  );

  const handleEdit = (row) => {
    console.log(row.row);
    // const { _id } = row;
    // console.log(_id);
  };
  const handleDetailView = (row) => {
    console.log(row);
    const { _id: id } = row;
    router.push(`/students-record/${id}`);
  };
  const handleDelete = async (row) => {
    const { _id: id } = row;
    const confirmation = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (confirmation) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/api/students/${id}`
        );
        alert(response.data.message);
      } catch (err) {
        console.log(err);
      }
    }

    // suppose id = 64281de0fa6b685200f15dee --> clicked on delete button --> id = 64281de0fa6b685200f15dee
    // array method --> filter --> return new array --> filter out the item which is not equal to the id

    // [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] --> data
    // id = 64281de0fa6b685200f15dee	

    // [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] --> newData

    const newData = data.filter((item) => item._id !== id);
    // dataAfterDeleted = newData
    setDataAfterDeleted(newData);
  };

  return (
    <div className="container mt-15">
      <table
        className="w-full  sm:bg-white rounded-lg  sm:shadow-lg my-5"
        {...getTableProps()}
      >
        <thead className="text-white" {...getTableBodyProps()}>
          {headerGroups.map((headerGroup, index) => (
            <tr
              key={index}
              className="bg-teal-400 rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column, index) => (
                <th
                  key={index}
                  className="p-3 text-left"
                  width="110px"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell, index) => {
                  return (
                    <td
                      key={index}
                      className="border-grey-light border hover:bg-gray-100 p-3"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />

      <div>
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
