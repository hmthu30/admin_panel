import Table from "@/components/UI/table/Table";
import React from "react";

interface RowData {
  id: number;
  name: string;
  age: number;
  email: string;
}

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
  {
    key: "email",
    label: "Email",
    render: (value: string) => <a href={`mailto:${value}`}>{value}</a>,
  },
];

const data: RowData[] = [
  { id: 1, name: "John Doe", age: 28, email: "john@example.com" },
  { id: 2, name: "Jane Smith", age: 34, email: "jane@example.com" },
  // Add more rows as needed
];

const DashboardPage = () => {
  const handleAdvancedSearch = () => {
    console.log("Advanced Search Triggered");
  };
  return (
    <div>
      <h1>Advanced Reusable Table</h1>
      <Table
        columns={columns as never}
        data={data as never}
        onAdvancedSearch={handleAdvancedSearch}
      />
    </div>
  );
};

const DashboardTemplate = () => {
  return <DashboardPage />;
};

export default DashboardTemplate;
