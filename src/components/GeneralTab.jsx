import React from "react";

function GeneralTab({ currentJob }) {
  return (
    <div>
      <table className="w-full">
        <tr className="flex items-center gap-8 py-4 border-b">
          <td className="font-semibold">Image</td>
          <td>{currentJob.jobSpec.image}</td>
        </tr>
        <tr className="flex items-center gap-8 py-4 border-b">
          <td className="font-semibold">Job ID</td>
          <td>{currentJob.jobId}</td>
        </tr>
        <tr className="flex items-center gap-8 py-4 border-b">
          <td className="font-semibold">User</td>
          <td>{currentJob.createdBy}</td>
        </tr>
        <tr className="flex items-center gap-8 py-4 border-b">
          <td className="font-semibold">Project</td>
          <a href="#" className="text-blue-700 hover:underline">
            {currentJob.project}
          </a>
        </tr>
        <tr className="flex items-center gap-8 py-4 border-b">
          <td className="font-semibold">Creation Time</td>
          <td>{currentJob.created}</td>
        </tr>{" "}
        <tr className="flex items-center gap-8 py-4 border-b">
          <td className="font-semibold">Type</td>
          <td>{currentJob.type}</td>
        </tr>{" "}
        <tr className="flex items-center gap-8 py-4 border-b">
          <td className="font-semibold">Replicas</td>
          <td>{currentJob.jobSpec.replicas}</td>
        </tr>{" "}
        <tr className="flex items-center gap-8 py-4 border-b">
          <td className="font-semibold">CPU</td>
          <td>{currentJob.jobSpec.computeSpecifications.cpu}</td>
        </tr>{" "}
        <tr className="flex items-center gap-8 py-4 border-b">
          <td className="font-semibold">Memory</td>
          <td className="text-right">
            {currentJob.jobSpec.computeSpecifications.memory}
          </td>
        </tr>{" "}
        <tr className="flex items-center gap-8 py-4 border-b">
          <td className="font-semibold ">GPU</td>
          <td className="text-right">
            {currentJob.jobSpec.computeSpecifications.gpu}
          </td>
        </tr>{" "}
        <tr className="flex items-center gap-8 py-4 border-b">
          <td className="font-semibold">Arch</td>
          <td>{currentJob.jobSpec.computeSpecifications.arch}</td>
        </tr>{" "}
        <tr className="flex items-center gap-8 py-4 border-b">
          <td className="font-semibold">Command</td>
          <td>{currentJob.jobSpec.command}</td>
        </tr>{" "}
        {currentJob.jobSpec.networkSpecifications.portMappingHttps.map(
          (port, index) => {
            return (
              <div key={index}>
                <tr className="flex items-center gap-8 py-4 border-b">
                  <td className="font-semibold">Port Name</td>
                  <td>{port.portName}</td>
                </tr>
                <tr className="flex items-center gap-8 py-4 border-b">
                  <td className="font-semibold">Port Number</td>
                  <td>{port.portNumber}</td>
                </tr>
              </div>
            );
          }
        )}
      </table>
    </div>
  );
}

export default GeneralTab;
