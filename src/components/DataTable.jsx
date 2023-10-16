import React, { useState, Fragment } from "react";
import { useFilter } from "../hooks/useFilter";
import { Disclosure } from "@headlessui/react";
import { CheckIcon } from "@radix-ui/react-icons";
import GroupBySelect from "./GroupBySelect";
function DataTable({
  jobs,
  selectedHeadings,
  query,
  filter,
  setCurrentJob,
  currentJob,
  setOpenDrawer,
}) {
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const cloumns = [
    "",
    "jobId",
    "name",
    "createdBy",
    "project",
    "created",
    "lastModified",
    "lastModifiedBy",
    "type",
  ];
  const handleSort = (key) => {
    setGroupColumn("");
    if (key === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(key);
      setSortDirection("asc");
    }
  };
  const handleOpenDrawer = (job) => {
    setCurrentJob(job);
    setOpenDrawer(true);
  };
  const sortedData = [...jobs].sort((a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (sortDirection === "asc") {
      if (typeof aValue === "number" && typeof bValue === "number") {
        return aValue - bValue;
      } else {
        // Handle non-numeric values (e.g., strings) by comparing them as strings
        return String(aValue).localeCompare(String(bValue));
      }
    } else {
      if (typeof aValue === "number" && typeof bValue === "number") {
        return bValue - aValue;
      } else {
        // Handle non-numeric values (e.g., strings) by comparing them as strings
        return String(bValue).localeCompare(String(aValue));
      }
    }
  });
  const { filterate } = useFilter(sortedData, filter, query);

  const [groupColumn, setGroupColumn] = useState(""); // Column to group by

  const groupedData = filterate.reduce((result, row) => {
    const key = row[groupColumn];
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(row);
    return result;
  }, {});
  return (
    <div className="flow-root mt-8">
      <div className="flex items-center gap-4 py-4">
        <span className="font-semibold">Group by: </span>
        <GroupBySelect
          setGroupColumn={setGroupColumn}
          groupColumn={groupColumn}
          columns={cloumns}
        />
      </div>
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="relative min-w-full divide-y divide-gray-300">
            <thead className="">
              <tr>
                <th className={`${groupColumn ? "hidden" : "block"}`}>
                  <span className="sr-only">Selected</span>
                </th>
                {selectedHeadings.map((heading, idx) => {
                  return (
                    <th
                      key={idx}
                      scope="col"
                      className="py-3.5 truncate  pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      <button
                        className="flex items-center gap-2"
                        onClick={() => handleSort(heading.key)}
                      >
                        {heading.heading}
                        {sortColumn === heading.key && (
                          <span>
                            {sortDirection === "asc" ? (
                              <span className="ml-1">▼</span>
                            ) : (
                              <span className="ml-1">▲</span>
                            )}
                          </span>
                        )}
                      </button>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="overflow-y-auto divide-y divide-gray-200">
              {groupColumn &&
                // Render grouped data
                Object.keys(groupedData).map((key, index) => (
                  <Disclosure key={index}>
                    <tr>
                      <Disclosure.Button
                        colSpan="2"
                        className="py-4 text-left cursor-pointer"
                        as="th"
                      >
                        {key}
                      </Disclosure.Button>
                    </tr>
                    {groupedData[key].map((row, rowIndex) => (
                      // Render rows within the group

                      <Disclosure.Panel
                        className="hover:bg-gray-100"
                        key={rowIndex}
                        as="tr"
                      >
                        {selectedHeadings.map((heading, idx) => {
                          return (
                            <td
                              onClick={() => handleOpenDrawer(row)}
                              key={idx}
                              className="py-4 text-sm text-left text-gray-500 truncate cursor-pointer hover:bg-gray-100 whitespace-nowrap"
                            >
                              {heading.key !== "canEvict" &&
                                heading.key !== "isActive" && (
                                  <span className="truncate">
                                    {
                                      row[heading.key].length > 20
                                        ? row[heading.key].substring(0, 11) +
                                          "..."
                                        : row[heading.key] // if heading is longer than 20 characters, truncate it
                                    }
                                  </span>
                                )}
                              {heading.key === "canEvict" && (
                                <span>{row[heading.key] ? "Yes" : "No"}</span>
                              )}
                              {heading.key === "isActive" && (
                                <span
                                  className={`p-2 text-sm rounded-full ${
                                    row[heading.key]
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >
                                  {row[heading.key] ? "Running" : "Pending"}
                                </span>
                              )}
                            </td>
                          );
                        })}
                      </Disclosure.Panel>
                    ))}
                  </Disclosure>
                ))}
              {!groupColumn &&
                filterate.map((job) => {
                  return (
                    <tr key={job.jobId} className="hover:bg-gray-100">
                      <td>
                        {job.jobId === currentJob.jobId && (
                          <span className="">
                            <CheckIcon className="w-5 h-5 text-gray-600" />
                          </span>
                        )}
                      </td>
                      {selectedHeadings.map((heading, idx) => {
                        return (
                          <td
                            onClick={() => handleOpenDrawer(job)}
                            key={idx}
                            className="py-4 text-sm text-left text-gray-500 truncate cursor-pointer hover:bg-gray-100 whitespace-nowrap"
                          >
                            {heading.key !== "canEvict" &&
                              heading.key !== "isActive" && (
                                <span className="truncate">
                                  {
                                    job[heading.key].length > 20
                                      ? job[heading.key].substring(0, 11) +
                                        "..."
                                      : job[heading.key] // if heading is longer than 20 characters, truncate it
                                  }
                                </span>
                              )}
                            {heading.key === "canEvict" && (
                              <span>{job[heading.key] ? "Yes" : "No"}</span>
                            )}
                            {heading.key === "isActive" && (
                              <span
                                className={`p-2 text-sm rounded-full ${
                                  job[heading.key]
                                    ? "text-green-500"
                                    : "text-red-500"
                                }`}
                              >
                                {job[heading.key] ? "Running" : "Pending"}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
