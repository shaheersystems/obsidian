import React from "react";
import { CSVLink } from "react-csv";
import { DownloadIcon } from "@radix-ui/react-icons";
function GPUTab() {
  const gpuData = [
    {
      gpu: 0,
      node: "Server-01",
      utilization: "75%",
      gpuMemory: "8 GB",
      usedGpuMemory: "6 GB",
    },
    {
      gpu: 1,
      node: "Server-01",
      utilization: "90%",
      gpuMemory: "8 GB",
      usedGpuMemory: "7.2 GB",
    },
    {
      gpu: 0,
      node: "Server-02",
      utilization: "60%",
      gpuMemory: "12 GB",
      usedGpuMemory: "7.2 GB",
    },
    {
      gpu: 1,
      node: "Server-02",
      utilization: "85%",
      gpuMemory: "12 GB",
      usedGpuMemory: "10.2 GB",
    },
    {
      gpu: 2,
      node: "Server-02",
      utilization: "70%",
      gpuMemory: "12 GB",
      usedGpuMemory: "8.4 GB",
    },
  ];

  return (
    <div className="">
      <div className="flex items-center justify-end py-4">
        <CSVLink filename="gpuData.csv" data={gpuData}>
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
                    GPU
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold "
                  >
                    Node
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold "
                  >
                    Utilization
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold "
                  >
                    GPU Memory
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold "
                  >
                    Used GPU Memory
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {gpuData.map((gpu) => (
                  <tr key={gpu.timestamp}>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-0">
                      {gpu.gpu}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {gpu.node}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-600 whitespace-nowrap">
                      <div className="relative w-20 h-6 bg-gray-300">
                        <div
                          className="flex h-full text-black bg-green-400"
                          style={{
                            width: gpu.utilization,
                          }}
                        >
                          <span className="absolute left-[40%] text-xs font-semibold top-1">
                            {gpu.utilization}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {gpu.gpuMemory}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {gpu.usedGpuMemory}
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

export default GPUTab;
