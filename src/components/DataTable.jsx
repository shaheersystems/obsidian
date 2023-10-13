import React from "react";

function DataTable({ jobs, selectedHeadings }) {
  return (
    <div className="flow-root mt-8">
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
                      {heading.heading}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y h-[60vh] overflow-y-auto divide-gray-200">
              {jobs.map((job) => {
                return (
                  <tr key={job.jobId} className="hover:bg-gray-100">
                    {selectedHeadings.map((heading, idx) => {
                      return (
                        <td
                          key={idx}
                          className="py-4 text-sm text-left text-gray-500 truncate cursor-pointer hover:bg-gray-100 whitespace-nowrap"
                        >
                          {heading.key !== "canEvict" &&
                            heading.key !== "isActive" && (
                              <span className="truncate">
                                {
                                  job[heading.key].length > 20
                                    ? job[heading.key].substring(0, 11) + "..."
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
