import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  CheckIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { useFilter } from "../hooks/useFilter";
function PodsTab() {
  const [query, setQuery] = useState("");
  const [showing, setShowing] = useState(false);

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

  const headings = [
    {
      heading: "Pod Id",
      key: "podId",
      type: "string",
    },
    {
      heading: "Pod Group Id",
      key: "podGroupId",
      type: "string",
    },
    {
      heading: "Cluster Id",
      key: "clusterId",
      type: "string",
    },
    {
      heading: "Image",
      key: "imageName",
      type: "string",
    },
    {
      heading: "Status",
      key: "status",
    },
    {
      heading: "Node Id",
      key: "nodeId",
      type: "string",
    },
    {
      heading: "Started",
      key: "started",
      type: "string",
    },
    {
      heading: "Pod Name",
      key: "name",
      type: "string",
    },
    {
      heading: "Creation time",
      key: "created",
      type: "string",
    },

    {
      heading: "Node Pool",
      key: "nodePool",
      type: "string",
    },
    {
      heading: "Namespace",
      key: "namespace",
      type: "string",
    },
  ];
  const [selectedHeadings, setSelectedHeadings] = useState([
    {
      heading: "Pod Name",
      key: "name",
      type: "string",
    },
    {
      heading: "Status",
      key: "status",
    },
    {
      heading: "Creation time",
      key: "created",
      type: "string",
    },
    {
      heading: "Started",
      key: "started",
      type: "string",
    },
  ]);
  const data = [
    {
      podId: "2ab359a3-89cd-4b8d-85ad-1d82b6163627",
      podGroupId: "3a84f8b9-a803-48eb-8d69-5d82131c0a04",
      clusterId: "1f9de632-18f8-4e3c-8af5-ed120f60a23f",
      imageName:
        "docker-matrix-experiments-snapshot.dr-uw2.adobeitc.com/runai/clio-base-beta:0.10",
      nodeId: "ip-10-51-171-169.us-west-2.compute.internal",
      started: new Date("2023-10-15T09:15:00").toLocaleString(),
      status: "Running",
      name: "ablation-data3-0-0",
      dynamicData: {},
      created: new Date("2023-10-01T09:15:00").toLocaleString(),
      resourceRequest: {
        "nvidia.com/gpu": 8,
      },
      resourceAllocation: {
        "nvidia.com/gpu": 8,
        "gpu-memory": "0",
      },
      nodePool: "a100-80gb-1",
      namespace: "runai-digpupoll",
    },
  ];
  const { filterate } = useFilter(
    data,
    {
      heading: "Pod Name",
      key: "name",
      type: "string",
    },
    query
  );
  return (
    <div>
      <div className="flex items-center">
        <div className="flex items-center w-full py-4">
          <label
            htmlFor="search"
            className="flex flex-1 items-center w-full gap-4 px-4 py-1.5 mt-1 border rounded focus:ring"
          >
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
            <input
              onChange={(e) => setQuery(e.target.value)}
              id="search"
              placeholder={`Search...`}
              className="w-full outline-none"
              type="text"
            />
          </label>
          <div className="flex-[0.5] flex justify-end">
            <div className="relative">
              <button
                onClick={() => setShowing(!showing)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <Cog6ToothIcon className="w-5 h-5 text-gray-600" />
              </button>
              {showing && (
                <div className="absolute right-0 z-10 w-48 overflow-y-scroll bg-white shadow-lg h-96">
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
                      className="py-3.5 truncate  pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
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
              {filterate.map((job, idx) => {
                return (
                  <tr key={idx} className="hover:bg-gray-100">
                    {selectedHeadings.map((heading, idx) => {
                      return (
                        <td
                          key={idx}
                          className="py-4 text-sm text-left text-gray-500 truncate cursor-pointer hover:bg-gray-100 whitespace-nowrap"
                        >
                          {heading.key !== "status" && (
                            <span className="truncate">
                              {
                                job[heading.key].length > 11
                                  ? job[heading.key].substring(0, 11) + "..."
                                  : job[heading.key] // if heading is longer than 20 characters, truncate it
                              }
                            </span>
                          )}
                          {heading.key === "status" && (
                            <span
                              className={`p-2 text-sm rounded-full ${
                                job[heading.key] === "Running"
                                  ? "text-green-500"
                                  : "text-red-500"
                              }`}
                            >
                              {job[heading.key]}
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

export default PodsTab;
