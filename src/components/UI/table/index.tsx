import {
  TableBodyRowColCheckType,
  TableBodyRowColType,
  TableBodyRowType,
  TableBodyType,
  TableHeaderRowColCheckType,
  TableHeaderRowColType,
  TableHeaderRowType,
  TableHeaderType,
  TableType,
} from "@/utils/const/tableConstant";
import React from "react";
import { twMerge } from "tailwind-merge";

export function Table({
  children,
  className,
  additionalStyle,
}: {
  children: React.ReactNode;
  className: (typeof TableType)[keyof typeof TableType];
  additionalStyle?: string;
}) {
  const classNameMap: Record<
    (typeof TableType)[keyof typeof TableType],
    string
  > = {
    [TableType.Default]: "min-w-fit bg-white text-sm border-0 px-3 m-5",
    [TableType.Modify]: "",
  };

  return (
    <table className={twMerge(additionalStyle, classNameMap[className])}>
      {children}
    </table>
  );
}

export function TableHeader({
  children,
  className,
  additionalStyle,
}: {
  children: React.ReactNode;
  className: (typeof TableHeaderType)[keyof typeof TableHeaderType];
  additionalStyle?: string;
}) {
  const classNameMap: Record<
    (typeof TableHeaderType)[keyof typeof TableHeaderType],
    string
  > = {
    [TableHeaderType.Default]: "",
    [TableHeaderType.Modify]: "",
  };

  return (
    <thead className={twMerge(additionalStyle, classNameMap[className])}>
      {children}
    </thead>
  );
}

export function TableHeaderRow({
  children,
  className,
  additionalStyle,
}: {
  children: React.ReactNode;
  className: (typeof TableHeaderRowType)[keyof typeof TableHeaderRowType];
  additionalStyle?: string;
}) {
  const classNameMap: Record<
    (typeof TableHeaderRowType)[keyof typeof TableHeaderRowType],
    string
  > = {
    [TableHeaderRowType.Default]:
      "bg-gray-100 text-left font-semibold text-primary text-lg",
    [TableHeaderRowType.Modify]: "",
  };
  return (
    <tr className={twMerge(additionalStyle, classNameMap[className])}>
      {children}
    </tr>
  );
}

export function TableHeaderRowColCheck({
  children,
  className,
  additionalStyle,
}: {
  children: React.ReactNode;
  className: (typeof TableHeaderRowColCheckType)[keyof typeof TableHeaderRowColCheckType];
  additionalStyle?: string;
}) {
  const classNameMap: Record<
    (typeof TableHeaderRowColCheckType)[keyof typeof TableHeaderRowColCheckType],
    string
  > = {
    [TableHeaderRowColCheckType.Default]: "",
    [TableHeaderRowColCheckType.Modify]: "",
  };
  return (
    <th
      scope="col"
      className={twMerge([additionalStyle, classNameMap[className]])}
    >
      {children}
    </th>
  );
}

export function TableHeaderRowCol({
  children,
  className,
  additionalStyle,
}: {
  children: React.ReactNode;
  className: (typeof TableHeaderRowColType)[keyof typeof TableHeaderRowColType];
  additionalStyle?: string;
}) {
  const classNameMap: Record<
    (typeof TableHeaderRowColType)[keyof typeof TableHeaderRowColType],
    string
  > = {
    [TableHeaderRowColType.Default]: "py-3 px-6",
    [TableHeaderRowColType.Modify]: "",
  };
  return (
    <th
      scope="col"
      className={twMerge([additionalStyle, classNameMap[className]])}
    >
      {children}
    </th>
  );
}

export function TableBody({
  children,
  className,
  additionalStyle,
}: {
  children: React.ReactNode;
  className: (typeof TableBodyType)[keyof typeof TableBodyType];
  additionalStyle?: string;
}) {
  const classNameMap: Record<
    (typeof TableBodyType)[keyof typeof TableBodyType],
    string
  > = {
    [TableBodyType.Default]: "",
    [TableBodyType.Modify]: "",
  };

  return (
    <tbody className={twMerge(additionalStyle, classNameMap[className])}>
      {children}
    </tbody>
  );
}

export function TableBodyRow({
  children,
  className,
  additionalStyle,
}: {
  children: React.ReactNode;
  className: (typeof TableBodyRowType)[keyof typeof TableBodyRowType];
  additionalStyle?: string;
}) {
  const classNameMap: Record<
    (typeof TableBodyRowType)[keyof typeof TableBodyRowType],
    string
  > = {
    [TableBodyRowType.Default]: "odd:bg-white even:bg-gray-100",
    [TableBodyRowType.Modify]: "",
  };

  return (
    <tr className={twMerge(additionalStyle, classNameMap[className])}>
      {children}
    </tr>
  );
}

export function TableBodyRowColCheck({
  children,
  className,
  additionalStyle,
}: {
  children: React.ReactNode;
  className: (typeof TableBodyRowColCheckType)[keyof typeof TableBodyRowColCheckType];
  additionalStyle?: string;
}) {
  const classNameMap: Record<
    (typeof TableBodyRowColCheckType)[keyof typeof TableBodyRowColCheckType],
    string
  > = {
    [TableBodyRowColCheckType.Default]: "",
    [TableBodyRowColCheckType.Modify]: "",
  };
  return (
    <td
      scope="col"
      className={twMerge([additionalStyle, classNameMap[className]])}
    >
      {children}
    </td>
  );
}

export function TableBodyRowCol({
  children,
  className,
  colSpan,
  additionalStyle,
}: {
  children: React.ReactNode;
  className: (typeof TableBodyRowColType)[keyof typeof TableBodyRowColType];
  colSpan?: number;
  additionalStyle?: string;
}) {
  const classNameMap: Record<
    (typeof TableBodyRowColType)[keyof typeof TableBodyRowColType],
    string
  > = {
    [TableBodyRowColType.Default]: "py-4 px-6",
    [TableBodyRowColType.Modify]: "",
  };
  return (
    <td
      scope="col"
      colSpan={colSpan}
      className={twMerge([additionalStyle, classNameMap[className]])}
    >
      {children}
    </td>
  );
}
