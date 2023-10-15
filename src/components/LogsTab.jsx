import { DownloadIcon } from "@radix-ui/react-icons";
import React from "react";
import { CSVLink } from "react-csv";

function LogsTab() {
  const logs = [
    {
      timestamp: new Date("2023-10-15T08:30:00").toISOString(),
      message: "Job 123 started",
      jobId: 123,
      status: "Running",
    },
    {
      timestamp: new Date("2023-10-15T09:15:00").toISOString(),
      message: "Job 456 started",
      jobId: 456,
      status: "Running",
    },
    {
      timestamp: new Date("2023-10-15T10:45:00").toISOString(),
      message: "Job 123 completed successfully",
      jobId: 123,
      status: "Success",
    },
    {
      timestamp: new Date("2023-10-15T11:30:00").toISOString(),
      message: "Job 789 started",
      jobId: 789,
      status: "Running",
    },
    {
      timestamp: new Date("2023-10-15T12:15:00").toISOString(),
      message: "Job 456 failed: Connection timeout",
      jobId: 456,
      status: "Failed",
    },
  ];

  return (
    <div className="">
      <div className="flex items-center justify-end py-4">
        <CSVLink filename="logs.csv" data={logs}>
          <button>
            <DownloadIcon className="w-5 h-5 text-gray-600" />
          </button>
        </CSVLink>
      </div>
      <div className="">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0"
                  >
                    Timestamp
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold "
                  >
                    Message
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold "
                  >
                    Job ID
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold "
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {logs.map((log) => (
                  <tr key={log.timestamp}>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-0">
                      {log.timestamp.slice(0, 10)}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {log.message}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {log.jobId}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {log.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogsTab;
