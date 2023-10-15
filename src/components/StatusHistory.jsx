import React, { useState } from "react";
import { Cog6ToothIcon, CheckIcon } from "@heroicons/react/24/outline";
function StatusHistory() {
  const historyData = [
    {
      timestamp: "2023-10-15T08:30:00",
      event: "Server Start",
      details: "Server started successfully",
      source: "Server",
      type: "Info",
    },
    {
      timestamp: "2023-10-15T09:15:00",
      event: "User Login",
      details: "User 'john_doe' logged in",
      source: "Authentication",
      type: "Info",
    },
    {
      timestamp: "2023-10-15T10:45:00",
      event: "File Upload",
      details: "Uploaded file 'document.pdf'",
      source: "File Management",
      type: "Info",
    },
    {
      timestamp: "2023-10-15T11:30:00",
      event: "Server Error",
      details: "Critical error occurred",
      source: "Server",
      type: "Error",
    },
    {
      timestamp: "2023-10-15T12:15:00",
      event: "User Logout",
      details: "User 'alice_smith' logged out",
      source: "Authentication",
      type: "Info",
    },
  ];
  const headings = [
    {
      heading: "Timestamp",
      key: "timestamp",
      type: "string",
    },
    {
      heading: "Event",
      key: "event",
      type: "string",
    },
    {
      heading: "Details",
      key: "details",
      type: "string",
    },
    {
      heading: "Source",
      key: "source",
      type: "string",
    },
    {
      heading: "Type",
      key: "type",
      type: "string",
    },
  ];
  const [showing, setShowing] = useState(false);
  const [selectedHeadings, setSelectedHeadings] = useState([
    {
      heading: "Timestamp",
      key: "timestamp",
      type: "string",
    },
    {
      heading: "Event",
      key: "event",
      type: "string",
    },
    {
      heading: "Details",
      key: "details",
      type: "string",
    },
  ]);
  const toggleHeading = (heading) => {
    // Check if the heading is already in the selectedHeadings array
    const headingIndex = selectedHeadings.findIndex(
      (selected) => selected.key === heading.key
    );

    if (headingIndex === -1) {
      // If not found, add the heading to selectedHeadings
      setSelectedHeadings([...selectedHeadings, heading]);
    } else {
      // If found, remove the heading from selectedHeadings
      const updatedSelectedHeadings = [...selectedHeadings];
      updatedSelectedHeadings.splice(headingIndex, 1);
      setSelectedHeadings(updatedSelectedHeadings);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-end py-4">
        <div className="relative">
          <button
            onClick={() => setShowing(!showing)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Cog6ToothIcon className="w-5 h-5 text-gray-600" />
          </button>
          {showing && (
            <div className="absolute right-0 z-10 w-48 overflow-y-scroll bg-white shadow-lg min-h-fit">
              {headings.map((heading, idx) => {
                return (
                  <button
                    onClick={() => toggleHeading(heading)}
                    key={idx}
                    className="flex items-center justify-between w-full px-3 py-2 text-sm text-left text-gray-500 truncate border-b word-break hover:bg-gray-100"
                  >
                    <span>{heading.heading}</span>
                    {selectedHeadings.some(
                      (selected) => selected.key === heading.key
                    ) && <CheckIcon className="w-5 h-5 text-gray-600" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
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
                      className="py-3.5  pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      <button className="flex items-center gap-2">
                        {heading.heading}
                      </button>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="overflow-y-auto divide-y divide-gray-200">
              {historyData.map((job, idx) => {
                return (
                  <tr key={idx} className="hover:bg-gray-100">
                    {selectedHeadings.map((heading, idx) => {
                      return (
                        <td
                          key={idx}
                          className="py-4 text-sm text-left text-gray-500 truncate cursor-pointer hover:bg-gray-100 whitespace-nowrap"
                        >
                          <span className="truncate">
                            {heading.key === "timestamp"
                              ? job[heading.key].slice(0, 10)
                              : job[heading.key]}
                          </span>
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

export default StatusHistory;
