import React, { useState } from "react";
import { Tab, Switch, Disclosure } from "@headlessui/react";

function AddNewJob() {
  const [enabled, setEnabled] = useState(false);
  const [nodePools, setNodePools] = useState([
    {
      name: "node-pool-1",
    },
  ]);
  const addNodePools = (e) => {
    e.preventDefault();
    setNodePools([...nodePools, { name: "" }]);
  };
  const removeNodePool = (e) => {
    e.preventDefault();
    setNodePools(nodePools.slice(0, -1));
  };
  const handleNodePoolChange = (e, idx) => {
    const { value } = e.target;
    const list = [...nodePools];
    list[idx].name = value;
    setNodePools(list);
    console.log(nodePools);
  };
  return (
    <div>
      <div className="flex flex-col justify-center max-w-5xl gap-4 m-auto mx-auto text-center">
        <Tab.Group>
          <Tab.List>
            <Tab className={"outline-none"}>
              {({ selected }) => (
                <span
                  className={`px-6 py-2 outline-none text-lg font-semibold uppercase ${
                    selected ? "border-b-4 border-blue-500" : ""
                  }`}
                >
                  {" "}
                  Interactive
                </span>
              )}
            </Tab>
            <Tab className={"outline-none"}>
              {({ selected }) => (
                <span
                  className={`px-6 py-2 outline-none text-lg font-semibold uppercase ${
                    selected ? "border-b-4 border-blue-500" : ""
                  }`}
                >
                  {" "}
                  Training
                </span>
              )}
            </Tab>
          </Tab.List>
          <br />
          <hr />

          <Tab.Panels className={"py-10"}>
            <Tab.Panel>
              <div>
                <form>
                  <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                      >
                        Project <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="project"
                          id="project"
                          autoComplete="given-name"
                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="project"
                          id="project"
                          autoComplete="given-name"
                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                      >
                        GPUs <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="project"
                          id="project"
                          autoComplete="given-name"
                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                      >
                        Image <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="project"
                          id="project"
                          autoComplete="given-name"
                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <div className="flex items-center gap-4">
                        <span>Distributed Training (MPI)</span>
                        <Switch
                          checked={enabled}
                          onChange={setEnabled}
                          className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[29px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <span className="sr-only">Use setting</span>
                          <span
                            aria-hidden="true"
                            className={`${
                              enabled ? "translate-x-8" : "translate-x-0"
                            }
            pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                          />
                        </Switch>
                      </div>
                    </div>
                    <div className="text-left col-span-full">
                      <Disclosure>
                        <Disclosure.Button className="py-4">
                          <span className="text-2xl font-semibold">
                            Resource Allocation
                          </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                          <div>
                            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                              <div className="col-span-full">
                                <label
                                  htmlFor="first-name"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Node Pools{" "}
                                  <span className="text-red-600">*</span>
                                </label>
                                <div className="mt-2 space-y-4">
                                  {nodePools.map((nodePool, idx) => {
                                    return (
                                      <input
                                        key={idx}
                                        onChange={(e) =>
                                          handleNodePoolChange(e, idx)
                                        }
                                        type="text"
                                        name="node-pool"
                                        id="node-pool"
                                        value={nodePool.name}
                                        autoComplete="given-name"
                                        className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    );
                                  })}
                                </div>
                                <div className="py-4">
                                  <button
                                    onClick={(e) => addNodePools(e)}
                                    className="px-6 py-2 rounded hover:bg-gray-200"
                                  >
                                    Add
                                  </button>
                                  {nodePools.length > 1 && (
                                    <button
                                      onClick={(e) => removeNodePool(e)}
                                      className="px-6 py-2 rounded hover:bg-gray-200"
                                    >
                                      Remove
                                    </button>
                                  )}
                                </div>
                              </div>
                              <div className="col-span-full">
                                <label
                                  htmlFor="request-cpu"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Requested CPU
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="reqCpu"
                                    id="reqCpu"
                                    autoComplete="given-name"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                              <div className="col-span-full">
                                <label
                                  htmlFor="request-cpu"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  GPU Memory
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="gpuMemory"
                                    id="gpuMemory"
                                    placeholder="e.g. 16GB"
                                    autoComplete="given-name"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                              <div className="col-span-full">
                                <label
                                  htmlFor="request-cpu"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  MIG Profile
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="migProfile"
                                    id="migProfile"
                                    autoComplete="given-name"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                              <div className="col-span-full">
                                <label
                                  htmlFor="request-cpu"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  CPU Limit
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="cpuLimit"
                                    id="cpuLimit"
                                    autoComplete="given-name"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                              <div className="col-span-full">
                                <label
                                  htmlFor="request-cpu"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Requested Memory
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="reqMomory"
                                    id="reqMomory"
                                    autoComplete="given-name"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                              <div className="col-span-full">
                                <label
                                  htmlFor="request-cpu"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Memory Limit
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="memoryLimit"
                                    id="memoryLimit"
                                    autoComplete="given-name"
                                    placeholder="e.g. 16GB"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure>
                    </div>
                  </div>
                </form>
              </div>
            </Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default AddNewJob;
