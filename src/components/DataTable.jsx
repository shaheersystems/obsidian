import React from "react";

function DataTable({ jobs, headings }) {
  const people = [
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
    // More people...
  ];
  return (
    <div className="flow-root mt-8">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                {headings.map((heading, idx) => {
                  return (
                    <th
                      key={idx}
                      scope="col"
                      className="py-3.5 truncate  pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      {heading}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-0">
                    {job.id}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {job.job_name}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {job.status}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.user}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.project}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.runtime}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.creation_time}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.type}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.gpu_utilization}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.used_gpu}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.image}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.nodes}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.node_pool}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.waittime}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.completion_time}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.requested_gpus}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.allocated_gpus}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.used_gpu_memory}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.allocated_gpu_memory}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.service_url}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.used_swap_cpu_memory}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.parallelism}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.completions}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.pending_pods}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.running_pods}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.succeeded_pods}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.failed_pods}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
                    {job.distrubted ? "True" : "False"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
