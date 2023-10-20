import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import GroupBySelect from "./GroupBySelect";
import Dropdown from "./Dropdown";
function DataTable({ jobs, selectedHeadings, setCurrentJob, setOpenDrawer }) {
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [analytics, setAnalytics] = useState({});
  const [currFnCPU, setCurrFnCPU] = useState({ name: "Average" });
  const [currFnMemory, setCurrFnMemory] = useState({ name: "Average" });
  const [currFnGPU, setCurrFnGPU] = useState({ name: "Average" });
  const anaylticFunctions = [
    {
      name: "Average",
    },
    {
      name: "Sum",
    },
    {
      name: "Min",
    },
    {
      name: "Max",
    },
    {
      name: "Count",
    },
    {
      name: "Variance",
    },
  ];

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
  const [searchJobId, setSearchJobId] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchCreatedBy, setSearchCreatedBy] = useState("");
  const [searchProject, setSearchProject] = useState("");
  const [searchCreated, setSearchCreated] = useState("");
  const [searchLastModified, setSearchLastModified] = useState("");
  const [searchLastModifiedBy, setSearchLastModifiedBy] = useState("");
  const [searchType, setSearchType] = useState("");

  const filterate = sortedData.filter((job) => {
    return (
      job.jobId.toLowerCase().includes(searchJobId.toLowerCase()) &&
      job.name.toLowerCase().includes(searchName.toLowerCase()) &&
      job.createdBy.toLowerCase().includes(searchCreatedBy.toLowerCase()) &&
      job.project.toLowerCase().includes(searchProject.toLowerCase()) &&
      job.created.toLowerCase().includes(searchCreated.toLowerCase()) &&
      job.lastModified
        .toLowerCase()
        .includes(searchLastModified.toLowerCase()) &&
      job.lastModifiedBy
        .toLowerCase()
        .includes(searchLastModifiedBy.toLowerCase()) &&
      job.type.toLowerCase().includes(searchType.toLowerCase())
    );
  });

  useEffect(() => {
    const avgCpu = filterate.reduce((acc, curr) => {
      return acc + curr.jobSpec.computeSpecifications.cpu;
    }, 0);
    const avgMemory = filterate.reduce((acc, curr) => {
      return acc + curr.jobSpec.computeSpecifications.memory;
    }, 0);
    const avgGpu = filterate.reduce((acc, curr) => {
      return acc + curr.jobSpec.computeSpecifications.gpu;
    }, 0);
    const sumCpu = filterate.reduce((acc, curr) => {
      return acc + curr.jobSpec.computeSpecifications.cpu;
    }, 0);
    const sumMemory = filterate.reduce((acc, curr) => {
      return acc + curr.jobSpec.computeSpecifications.memory;
    }, 0);
    const sumGpu = filterate.reduce((acc, curr) => {
      return acc + curr.jobSpec.computeSpecifications.gpu;
    }, 0);
    const minCpu = filterate.reduce((acc, curr) => {
      return Math.min(acc, curr.jobSpec.computeSpecifications.cpu);
    }, Infinity);
    const minMemory = filterate.reduce((acc, curr) => {
      return Math.min(acc, curr.jobSpec.computeSpecifications.memory);
    }, Infinity);
    const minGpu = filterate.reduce((acc, curr) => {
      return Math.min(acc, curr.jobSpec.computeSpecifications.gpu);
    }, Infinity);
    const maxCpu = filterate.reduce((acc, curr) => {
      return Math.max(acc, curr.jobSpec.computeSpecifications.cpu);
    }, 0);
    const maxMemory = filterate.reduce((acc, curr) => {
      return Math.max(acc, curr.jobSpec.computeSpecifications.memory);
    }, 0);
    const maxGpu = filterate.reduce((acc, curr) => {
      return Math.max(acc, curr.jobSpec.computeSpecifications.gpu);
    }, 0);
    const countCpu = filterate.reduce((acc, curr) => {
      return acc + 1;
    }, 0);
    const countMemory = filterate.reduce((acc, curr) => {
      return acc + 1;
    }, 0);
    const countGpu = filterate.reduce((acc, curr) => {
      return acc + 1;
    }, 0);
    const varianceCpu = filterate.reduce((acc, curr) => {
      return acc + Math.pow(curr.jobSpec.computeSpecifications.cpu - avgCpu, 2);
    }, 0);
    const varianceMemory = filterate.reduce((acc, curr) => {
      return (
        acc + Math.pow(curr.jobSpec.computeSpecifications.memory - avgMemory, 2)
      );
    }, 0);
    const varianceGpu = filterate.reduce((acc, curr) => {
      return acc + Math.pow(curr.jobSpec.computeSpecifications.gpu - avgGpu, 2);
    }, 0);

    setAnalytics({
      avgCpu: avgCpu / filterate.length,
      avgMemory: avgMemory / filterate.length,
      avgGpu: avgGpu / filterate.length,
      sumCpu,
      sumMemory,
      sumGpu,
      minCpu,
      minMemory,
      minGpu,
      maxCpu,
      maxMemory,
      maxGpu,
      countCpu,
      countMemory,
      countGpu,
      varianceCpu: varianceCpu / filterate.length,
      varianceMemory: varianceMemory / filterate.length,
      varianceGpu: varianceGpu / filterate.length,
    });
  }, [filterate]);

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
                <th
                  scope="col"
                  className="py-3.5 truncate  pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  <span className="flex items-center gap-2">CPU</span>
                </th>
                <th
                  scope="col"
                  className="py-3.5 truncate  pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  <span className="flex items-center gap-2">Memory</span>
                </th>
                <th
                  scope="col"
                  className="py-3.5 truncate  pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  <span className="flex items-center gap-2">GPU</span>
                </th>
              </tr>
            </thead>
            <tbody className="overflow-y-auto divide-y divide-gray-200">
              <tr className="">
                {selectedHeadings.map((heading, idx) => {
                  return (
                    <td key={idx} className="">
                      {heading.key !== "canEvict" &&
                        heading.key !== "isActive" && (
                          <input
                            onChange={(e) => {
                              if (heading.key === "jobId") {
                                setSearchJobId(e.target.value);
                              } else if (heading.key === "name") {
                                setSearchName(e.target.value);
                              } else if (heading.key === "createdBy") {
                                setSearchCreatedBy(e.target.value);
                              } else if (heading.key === "project") {
                                setSearchProject(e.target.value);
                              } else if (heading.key === "created") {
                                setSearchCreated(e.target.value);
                              } else if (heading.key === "lastModified") {
                                setSearchLastModified(e.target.value);
                              } else if (heading.key === "lastModifiedBy") {
                                setSearchLastModifiedBy(e.target.value);
                              } else if (heading.key === "type") {
                                setSearchType(e.target.value);
                              }
                            }}
                            type="text"
                            className="py-1.5 rounded border my-2 px-4"
                          />
                        )}
                    </td>
                  );
                })}
                <td>
                  <Dropdown
                    data={anaylticFunctions}
                    selected={currFnCPU}
                    setSelected={setCurrFnCPU}
                  />
                </td>
                <td>
                  <Dropdown
                    data={anaylticFunctions}
                    selected={currFnMemory}
                    setSelected={setCurrFnMemory}
                  />
                </td>
                <td>
                  <Dropdown
                    data={anaylticFunctions}
                    selected={currFnGPU}
                    setSelected={setCurrFnGPU}
                  />
                </td>
              </tr>
              <tr>
                {selectedHeadings.map((idx) => {
                  return <td key={idx}></td>;
                })}
                <td className="min-w-max py-1.5 rounded my-2 px-4">
                  {currFnCPU.name === "Average" && (
                    <span className="font-semibold">
                      {"Avg: " + analytics.avgCpu}
                    </span>
                  )}
                  {currFnCPU.name === "Sum" && (
                    <span className="font-semibold">
                      {"Sum: " + analytics.sumCpu}
                    </span>
                  )}
                  {currFnCPU.name === "Min" && (
                    <span className="font-semibold">
                      {"Min: " + analytics.minCpu}
                    </span>
                  )}
                  {currFnCPU.name === "Max" && (
                    <span className="font-semibold">
                      {"Max: " + analytics.maxCpu}
                    </span>
                  )}
                  {currFnCPU.name === "Count" && (
                    <span className="font-semibold">
                      {"Count: " + analytics.countCpu}
                    </span>
                  )}
                  {currFnCPU.name === "Variance" && (
                    <span className="font-semibold">
                      {"Var: " + analytics.varianceCpu}
                    </span>
                  )}
                </td>
                <td className="min-w-max py-1.5 rounded my-2 px-4">
                  {currFnMemory.name === "Average" && (
                    <span className="font-semibold">
                      {"Avg: " + analytics.avgMemory}
                    </span>
                  )}
                  {currFnMemory.name === "Sum" && (
                    <span className="font-semibold">
                      {"Sum: " + analytics.sumMemory}
                    </span>
                  )}
                  {currFnMemory.name === "Min" && (
                    <span className="font-semibold">
                      {"Min: " + analytics.minMemory}
                    </span>
                  )}
                  {currFnMemory.name === "Max" && (
                    <span className="font-semibold">
                      {"Max: " + analytics.maxMemory}
                    </span>
                  )}
                  {currFnMemory.name === "Count" && (
                    <span className="font-semibold">
                      {"Count: " + analytics.countMemory}
                    </span>
                  )}
                  {currFnMemory.name === "Variance" && (
                    <span className="font-semibold">
                      {"Var: " + analytics.varianceMemory}
                    </span>
                  )}
                </td>
                <td className="min-w-max py-1.5 rounded my-2 px-4">
                  {currFnGPU.name === "Average" && (
                    <span className="font-semibold">
                      {"Avg: " + analytics.avgGpu}
                    </span>
                  )}
                  {currFnGPU.name === "Sum" && (
                    <span className="font-semibold">
                      {"Sum: " + analytics.sumGpu}
                    </span>
                  )}
                  {currFnGPU.name === "Min" && (
                    <span className="font-semibold">
                      {"Min: " + analytics.minGpu}
                    </span>
                  )}
                  {currFnGPU.name === "Max" && (
                    <span className="font-semibold">
                      {"Max: " + analytics.maxGpu}
                    </span>
                  )}
                  {currFnGPU.name === "Count" && (
                    <span className="font-semibold">
                      {"Count: " + analytics.countGpu}
                    </span>
                  )}
                  {currFnGPU.name === "Variance" && (
                    <span className="font-semibold">
                      {"Var: " + analytics.varianceGpu}
                    </span>
                  )}
                </td>
              </tr>
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
                                        ? row[heading.key].substring(0, 30) +
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
                        <td className="py-4 text-sm text-left text-gray-500 truncate cursor-pointer hover:bg-gray-100 whitespace-nowrap">
                          {row.jobSpec.computeSpecifications.cpu}
                        </td>
                        <td className="py-4 text-sm text-left text-gray-500 truncate cursor-pointer hover:bg-gray-100 whitespace-nowrap">
                          {row.jobSpec.computeSpecifications.memory}
                        </td>
                        <td className="py-4 text-sm text-left text-gray-500 truncate cursor-pointer hover:bg-gray-100 whitespace-nowrap">
                          {row.jobSpec.computeSpecifications.gpu}
                        </td>
                      </Disclosure.Panel>
                    ))}
                  </Disclosure>
                ))}
              {!groupColumn &&
                filterate.map((job, idx) => {
                  return (
                    <tr key={idx} className="hover:bg-gray-100">
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
                      <td className="py-4 text-sm text-left text-gray-500 truncate cursor-pointer hover:bg-gray-100 whitespace-nowrap">
                        {job.jobSpec.computeSpecifications.cpu}
                      </td>
                      <td className="py-4 text-sm text-left text-gray-500 truncate cursor-pointer hover:bg-gray-100 whitespace-nowrap">
                        {job.jobSpec.computeSpecifications.memory}
                      </td>
                      <td className="py-4 text-sm text-left text-gray-500 truncate cursor-pointer hover:bg-gray-100 whitespace-nowrap">
                        {job.jobSpec.computeSpecifications.gpu}
                      </td>
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
