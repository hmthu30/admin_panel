import Auxiliary from "@/hoc/Auxilitary/Auxilitary";
import React, { useState, useMemo, ReactNode } from "react";
import InputBox from "../input/InputBox";
import AuxiliaryWithStyle from "@/hoc/Auxilitary/AuxilitaryWithStyle";
import { HasAdvancedSearch } from "../button/Button";

interface Column<T> {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onAdvancedSearch?: () => void;
  rowsPerPageOptions?: number[];
}

interface SortConfig<T> {
  key: keyof T;
  direction: "asc" | "desc";
}

const Table = <T extends Record<string, unknown>>({
  columns,
  data,
  onAdvancedSearch,
  rowsPerPageOptions = [5, 10, 20, 50],
}: TableProps<T>) => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(rowsPerPageOptions[0]);
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(null);

  const handleSort = (key: keyof T) => {
    setSortConfig((prev) =>
      prev && prev.key === key && prev.direction === "asc"
        ? { key, direction: "desc" }
        : { key, direction: "asc" }
    );
  };

  const sortedData = useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const filteredData = useMemo(() => {
    return sortedData.filter((row) =>
      Object.values(row).some((value) =>
        value?.toString().toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [sortedData, search]);

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, page, rowsPerPage]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <Auxiliary>
      <div className="flex">
        <InputBox
          label={"Search"}
          name={"search"}
          type={"text"}
          value={search}
          className="w-[300px] mx-4"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
        <HasAdvancedSearch advancedSearch={onAdvancedSearch}>
          Advanced Search
        </HasAdvancedSearch>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key.toString()}
                style={{
                  borderBottom: "2px solid #ccc",
                  cursor: "pointer",
                  textAlign: "left",
                  padding: "0.5rem",
                }}
                onClick={() => handleSort(col.key)}
              >
                {col.label}{" "}
                {sortConfig?.key === col.key &&
                  (sortConfig.direction === "asc" ? "↑" : "↓")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col) => (
                <td
                  key={col.key.toString()}
                  style={{
                    borderBottom: "1px solid #ccc",
                    padding: "0.5rem",
                  }}
                >
                  {col.render
                    ? col.render(row[col.key], row)
                    : (row[col.key] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        >
          Next
        </button>
        <div>
          <label>
            Rows per page:{" "}
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setPage(1);
              }}
            >
              {rowsPerPageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </Auxiliary>
  );
};

export default Table;
