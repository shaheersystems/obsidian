import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

import {
  MagnifyingGlassIcon,
  CheckIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import DataTable from "../components/DataTable";

function Jobs() {
  const people = [
    { id: 1, name: "Current", current: true },
    { id: 2, name: "History" },
  ];
  const [selected, setSelected] = useState(people[0]);
  const jobs = [
    {
      id: "399499d4fg",
      job_name: "adg-sm20",
      status: "Running",
      user: "example@gmail.com",
      project: "ilo-ilm",
      runtime: "37:43:31",
      creation_time: "6/10/2023, 11:26",
      type: "Interactive",
      gpu_utilization: "100.0%",
      used_gpu: 0.15,
      image: "550505-docker-dmdmd.omg",
      nodes: 5,
      node_pool: 53,
      waittime: "37:43:31",
      completion_time: "6/11/2023, 01:15",
      requested_gpus: 5,
      allocated_gpus: 3,
      used_gpu_memory: 512,
      allocated_gpu_memory: 1024,
      service_url: "https://example.com",
      used_swap_cpu_memory: 2048,
      parallelism: 4,
      completions: 5,
      pending_pods: 4,
      running_pods: 2,
      succeeded_pods: 4,
      failed_pods: 1,
      distributed: true,
    },
    {
      id: "39949944fg",
      job_name: "xyz-abc123",
      status: "Pending",
      user: "another@example.com",
      project: "xyz-project",
      runtime: "N/A",
      creation_time: "6/10/2023, 14:45",
      type: "Batch",
      gpu_utilization: "N/A",
      used_gpu: 0.0,
      image: "123456-docker-image.omg",
      nodes: 0,
      node_pool: 0,
      waittime: "N/A",
      completion_time: "N/A",
      requested_gpus: 0,
      allocated_gpus: 0,
      used_gpu_memory: 0,
      allocated_gpu_memory: 0,
      service_url: "https://example2.com",
      used_swap_cpu_memory: 0,
      parallelism: 1,
      completions: 0,
      pending_pods: 1,
      running_pods: 0,
      succeeded_pods: 0,
      failed_pods: 0,
      distributed: false,
    },
    // Add more objects with different data as needed
  ];

  const headings = [
    "Job ID",
    "Job Name",
    "Status",
    "User",
    "Project",
    "Total Runtime",
    "Creation Time",
    "Type",
    "GPU Utilization",
    "Used GPU",
    "Image",
    "Node(s)",
    "Node Pool",
    "Total Wait Time",
    "Completion Time",
    "Requested GPUs",
    "Allocated GPUs",
    "Used GPU Memory",
    "Allocated GPU memory",
    "Service URL",
    "Used Swap CPU Memory",
    "Parallelism",
    "Completion",
    "Pending Pods",
    "Running Pods",
    "Succeeded Pods",
    "Failed Pods",
    "Distributed",
  ];

  return (
    <div>
      <div className="flex items-center">
        <div className="flex-1">
          <label
            htmlFor="search"
            className="flex items-center w-full gap-4 px-4 py-2 border rounded focus:ring"
          >
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
            <input
              id="search"
              placeholder="search..."
              className="w-full outline-none "
              type="text"
            />
          </label>
        </div>
        <div className="flex justify-end flex-1 gap-4 item-center">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full px-6 py-2 pr-10 text-left text-white bg-blue-900 rounded-lg cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDownIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 px-6 pr-4 ${
                          active ? "bg-gray-100 text-blue-900" : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          <button className="flex items-center gap-2 px-6 py-2 rounded hover:bg-gray-100">
            <PlusIcon className="w-5 h-5 text-gray-600" />
            <span className="font-semibold uppercase">New Job</span>
          </button>
        </div>
      </div>
      <div>
        <DataTable jobs={jobs} headings={headings} />
      </div>
    </div>
  );
}

export default Jobs;
