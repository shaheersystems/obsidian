import React from "react";

function DataTable({ jobs, headings, selectedHeadings }) {
  return (
    <div className="flow-root mt-8">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
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
            <tbody className="divide-y divide-gray-200">
              {jobs.map((job) => {
                return (
                  <tr key={job.id}>
                    {selectedHeadings.map((heading, idx) => {
                      return (
                        <td
                          key={idx}
                          className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"
                        >
                          {job[heading.key].length > 11
                            ? job[heading.key].substring(0, 11) + "..."
                            : job[heading.key]}
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
