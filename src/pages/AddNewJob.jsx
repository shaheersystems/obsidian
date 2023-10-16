import React, { useState } from "react";
import { Tab, Switch, Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from '@radix-ui/react-icons';

function SettingSwitch({ label, checked, onChange }) {
  return (
    <div className="col-span-full mt-1">
      <div className="flex items-center justify-between sm:w-3/6 w-full">
        <span>{label}</span>
        <label className="cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={onChange}
          />
          <div className={`relative w-14 h-8`}>
            <div
              className={`${checked ? "bg-teal-900" : "bg-teal-700"
                } relative inline-flex  w-[35px] h-[19px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${checked ? "translate-x-4" : "translate-x-0"
                  } pointer-events-none inline-block w-[15px] h-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}




function AddNewJob() {
  const [enabled, setEnabled] = useState(false);
  const [enabledSHM, setEnabledSHM] = useState(false);
  const [overrideUIDGID, setOverrideUIDGID] = useState(false);
  const [setStdin, setSetStdin] = useState(false);
  const [allocateTTY, setAllocateTTY] = useState(false);
  const [workingDirectoryPath, setWorkingDirectoryPath] = useState(false);
  const [createHomeDirectory, setCreateHomeDirectory] = useState(false);
  const [hostIPC, setHostIPC] = useState(false);
  const [hostNetwork, setHostNetwork] = useState(false);
  const [topologyAwareScheduling, settopologyAwareScheduling] = useState(false);
  const [preemptible, setpreemptible] = useState(false);
  const [existingPvc, setexistingPvc] = useState(false);
  const [jupyterNotbook, setjupyterNotbook] = useState(false);
  const [tensorBoard, settensorBoard] = useState(false);
  //const [readOnly, setreadOnly] = useState(false);
  const [allowPrivilegeEscalation, setallowPrivilegeEscalation] = useState(false);

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
    resourceAloocation.nodepools = nodePools
  };


  const [envVariables, setEnvVariables] = useState([
    {
      key: "key",
      value: "value",
    },
  ]);

  const addEnvVariable = (e) => {
    e.preventDefault();
    setEnvVariables([...envVariables, { key: "", value: "" }]);
  };

  const removeEnvVariable = (e) => {
    e.preventDefault();
    setEnvVariables(envVariables.slice(0, -1));
  };

  const handleEnvVariableChange = (e, idx, key) => {
    const { value } = e.target;
    const list = [...envVariables];
    list[idx][key] = value;
    setEnvVariables(list);
    console.log(envVariables);
  };


  //Annotations

  const [annotations, setAnnotations] = useState([
    {
      key: "key",
      value: "value",
    },
  ]);

  const addAnnotation = (e) => {
    e.preventDefault();
    setAnnotations([...annotations, { key: "", value: "" }]);
  };

  const removeAnnotation = (e) => {
    e.preventDefault();
    setAnnotations(annotations.slice(0, -1));
  };

  const handleAnnotationChange = (e, idx, key) => {
    const { value } = e.target;
    const list = [...annotations];
    list[idx][key] = value;
    setAnnotations(list);
    console.log(annotations);
  };

  //Labels

  const [labels, setLabels] = useState([
    {
      key: "key",
      value: "value",
    },
  ]);

  const addLabel = (e) => {
    e.preventDefault();
    setLabels([...labels, { key: "", value: "" }]);
  };

  const removeLabel = (e) => {
    e.preventDefault();
    setLabels(labels.slice(0, -1));
  };

  const handleLabelChange = (e, idx, key) => {
    const { value } = e.target;
    const list = [...labels];
    list[idx][key] = value;
    setLabels(list);
  };

  //linux Capabilites
  const [capabilities, setCapabilities] = useState([
    {
      name: "",
    },
  ]);

  const addCapability = (e) => {
    e.preventDefault();
    setCapabilities([...capabilities, { name: "" }]);
  };

  const removeCapability = (e) => {
    e.preventDefault();
    setCapabilities(capabilities.slice(0, -1));
  };

  const handleCapabilityChange = (e, idx) => {

    const { value } = e.target;
    const list = [...capabilities];
    list[idx].name = value;
    setCapabilities(list);
    console.log(capabilities);
  };


  //Git repositor
  const [gitRepository, setGitRepository] = useState([
    {
      sourceRepository: "https://github.com/user/repo.git",
      branch: "main",
      revision: "HEAD",
      username: "your_username",
      password: "your_password",
      targetDirectory: "/path/to/target/directory",
    },
  ]);

  const addGitRepository = (e) => {
    e.preventDefault();
    setGitRepository([
      ...gitRepository,
      {
        sourceRepository: "",
        branch: "",
        revision: "",
        username: "your_username",
        password: "your_password",
        targetDirectory: "/path/to/target/directory",
      },
    ]);
  };

  const removeGitRepository = (e) => {
    e.preventDefault();
    setGitRepository(gitRepository.slice(0, -1));
  };

  const handleGitRepositoryChange = (e, idx, key) => {
    const { value } = e.target;
    const list = [...gitRepository];
    list[idx][key] = value;
    setGitRepository(list);
    console.log(gitRepository);
  };

  //Tolerations

  const [tolerations, setTolerations] = useState([
    {
      key: "",
      operator: "",
      effect: "",
      value: "",
      tolerationSeconds: "",
    },
  ]);

  const addToleration = (e) => {
    e.preventDefault();
    setTolerations([
      ...tolerations,
      {
        key: "",
        operator: "",
        effect: "",
        value: "",
        tolerationSeconds: "",
      },
    ]);
  };

  const removeToleration = (e) => {
    e.preventDefault();
    setTolerations(tolerations.slice(0, -1));
  };

  const handleTolerationChange = (e, idx, field) => {
    const { value } = e.target;
    const list = [...tolerations];
    list[idx][field] = value;
    setTolerations(list);
    console.log(tolerations);
  };

  //PVC

  const [pvcList, setPvcList] = useState([
    {
      name: "",
      containerTargetPath: "",
    },
  ]);

  const addPvc = (e) => {
    e.preventDefault()
    setPvcList([
      ...pvcList,
      {
        name: "",
        containerTargetPath: "",
      },
    ]);
  };

  const removePvc = (e) => {
    e.preventDefault();
    setPvcList(pvcList.slice(0, -1));
  };

  const handlePvcChange = (e, idx, field) => {
    const { value } = e.target;
    const list = [...pvcList];
    list[idx][field] = value;
    setPvcList(list);
    console.log(pvcList);
  };

  // const resourceAloocation={
  //   nodepools:nodePools,
  // }

  const [credentials, setCredentials] = useState({
    project: "",
    name: "",
    GPUS: "",
    image: "",
    distributedtraining: enabled,
    requestedCpu: "",
    gpuMemory: "",
    migProfile: "",
    requestedMemory: "",
    memoryLimit: "",
    commandArguments: "",
    arguments: "",
    imagePullPolicy: "",
    nodeTypeAffinity: "",
    jobUrl: ""



  });

  // S3 storage
  const [s3ConfigList, setS3ConfigList] = useState([
    {
      accessKey: "",
      secretKey: "",
      bucket: "",
      endpointURL: "",
      targetPath: "",
    },
  ]);

  const addS3Config = (e) => {
    e.preventDefault();
    setS3ConfigList([
      ...s3ConfigList,
      {
        accessKey: "",
        secretKey: "",
        bucket: "",
        endpointURL: "",
        targetPath: "",
      },
    ]);
  };

  const removeS3Config = (e) => {
    e.preventDefault();
    setS3ConfigList(s3ConfigList.slice(0, -1));
  };

  const handleS3ConfigChange = (e, idx, field) => {
    const { value } = e.target;
    const list = [...s3ConfigList];
    list[idx][field] = value;
    setS3ConfigList(list);
    console.log(s3ConfigList);
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    //console.log(credentials.password,"  ",credentials.cpassword);
  }
  const data = {
    project: credentials.project,
    name: credentials.name,
    GPUS: credentials.GPUS,
    image: credentials.image,
    distributedtraining: enabled,
    jupyterNotbook: jupyterNotbook,
    tensorBoard:tensorBoard,
    resourceAllocations: {
      nodepools: nodePools,
      requestedCpu: credentials.reqCpu,
      gpuMemory: credentials.gpuMemory,
      migProfile: credentials.migProfile,
      reqMemory: credentials.reqMemory,
      memoryLimit: credentials.memoryLimit,
      largeSHM: enabledSHM,
    },
    containerDefinition: {
      envVariables: envVariables,
      labels: labels,
      annotation: annotations,
      linuxCapabilites: capabilities,
      commandArguments: credentials.commandArguments,
      jobUrl: credentials.jobUrl,
      arguments: credentials.arguments,
      serviceType: credentials.serviceType,
      publicGitRepository: gitRepository,
      tolerations: tolerations,
      allowPrivilegeEscalation: allowPrivilegeEscalation,
      setStdin: setStdin,
      allocateTTY: allocateTTY,
      workingDirectoryPath: workingDirectoryPath,
      createHomeDirectory: createHomeDirectory,
      hostIPC: hostIPC,
      hostNetwork: hostNetwork,
      overrideUIDGID: overrideUIDGID,

    },

    schedulingAndLifecycle: {
      nodeTypeAffinity: credentials.nodeTypeAffinity,
      topologyAwareScheduling: topologyAwareScheduling,
      preemptible: preemptible
    },
    storage: {
      existingPvc: existingPvc,
      pvcList: pvcList,
      storageS3: s3ConfigList
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    localStorage.setItem('formData', JSON.stringify(data));
  }


  return (
    <div>
      <div className="flex flex-col justify-center max-w-5xl gap-4 mx-auto text-center">
        <Tab.Group>
          <Tab.List>
            <Tab className={"outline-none"}>
              {({ selected }) => (
                <span
                  className={`px-6 py-2 outline-none text-lg font-semibold uppercase ${selected ? "border-b-4 border-blue-500" : ""
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
                  className={`px-6 py-2 outline-none text-lg font-semibold uppercase ${selected ? "border-b-4 border-blue-500" : ""
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

          <Tab.Panels className={"py-6"}>
            <Tab.Panel>
              <div>
                <form>
                  <div className="grid w-full sm:w-5/6 grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 m-auto">
                    <div className="col-span-3">
                      <label
                        htmlFor="project"
                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                      >
                        Project 
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          required
                          name="project"
                          id="project"
                          onChange={onChange}
                          autoComplete="given-name"
                          className="block w-full px-4 py-2 text-gray-900 border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                          required
                          name="name"
                          onChange={onChange}
                          id="name"
                          autoComplete="given-name"
                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-3">
                      <label
                        htmlFor="gpus"
                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                      >
                        GPUs
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="GPUS"
                          onChange={onChange}
                          id="name"
                          autoComplete="given-name"
                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-3">
                      <label
                        htmlFor="image"
                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                      >
                        Image 
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="image"
                          onChange={onChange}
                          id="image"
                          autoComplete="given-name"
                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <div className="flex justify-between w-full sm:w-2/6 gap-4 mb-2">
                        <span>Distributed Training (MPI)</span>
                        <Switch
                          checked={enabled}
                          onChange={setEnabled}
                          className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex w-[35px] h-[19px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <span className="sr-only">Use setting</span>
                          <span
                            aria-hidden="true"
                            className={`${enabled ? "translate-x-4" : "translate-x-0"
                              }
            pointer-events-none inline-block w-[15px] h-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                          />
                        </Switch>
                      </div>
                      <div className="flex justify-between w-full sm:w-2/6 gap-4 mb-2">
                        <span>Jupyter Notebook</span>
                        <Switch
                          checked={jupyterNotbook}
                          onChange={setjupyterNotbook}
                          className={`${jupyterNotbook ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex w-[35px] h-[19px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <span className="sr-only">Use setting</span>
                          <span
                            aria-hidden="true"
                            className={`${jupyterNotbook ? "translate-x-4" : "translate-x-0"
                              }
            pointer-events-none inline-block w-[15px] h-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                          />
                        </Switch>
                      </div>

                      <div className="flex justify-between w-full sm:w-2/6 gap-4 mb-2">
                        <span>Tensor Board</span>
                        <Switch
                          checked={tensorBoard}
                          onChange={settensorBoard}
                          className={`${tensorBoard ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex w-[35px] h-[19px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <span className="sr-only">Use setting</span>
                          <span
                            aria-hidden="true"
                            className={`${tensorBoard ? "translate-x-4" : "translate-x-0"
                              }
            pointer-events-none inline-block w-[15px] h-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                          />
                        </Switch>
                      </div>
                    </div>
                    <div className="text-left col-span-full">
                      <Disclosure>
                        <Disclosure.Button className="">
                          <div className="flex flex-row items-center">
                            <div>
                            <div className="pr-2 ">
                                        <ChevronDownIcon className="w-5 h-5" />
                                    </div>
                            </div>
                            <div className="text-lg">
                              Resource Allocation
                            </div>
                            
                          </div>
                          
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 p-5 border">
                          <div>
                            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                              <div className="col-span-full">
                                <label
                                  htmlFor="first-name"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Node Pools{" "}
                                  
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
                                    onChange={onChange}
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
                                    onChange={onChange}
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
                                    onChange={onChange}
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
                                    onChange={onChange}
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
                                    placeholder="e.g 1.5GB"
                                    name="reqMemory"
                                    onChange={onChange}
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
                                    onChange={onChange}
                                    id="memoryLimit"
                                    autoComplete="given-name"
                                    placeholder="e.g. 16GB"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                              <div className="col-span-full">
                                <div className="flex justify-between w-full sm:w-2/6 items-center gap-4">
                                  <span>Large SHM</span>
                                  <Switch
                                    checked={enabledSHM}
                                    onChange={setEnabledSHM}
                                    className={`${enabledSHM ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[19px] w-[35px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                  >
                                    <span className="sr-only">Use setting</span>
                                    <span
                                      aria-hidden="true"
                                      className={`${enabledSHM ? "translate-x-4" : "translate-x-0"
                                        }
            pointer-events-none inline-block h-[15px] w-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                    />
                                  </Switch>
                                </div>
                              </div>

                            </div>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure>
                    </div>

                    <div className="text-left col-span-full">
                      <Disclosure>
                        <Disclosure.Button className="">
                        <div className="flex flex-row items-center">
                            <div>
                            <div className="pr-2 ">
                                        <ChevronDownIcon className="w-5 h-5" />
                                    </div>
                            </div>
                            <div className="text-lg">
                              Container Definition
                            </div>
                            
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 p-5 border ">
                          <div>
                            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                              <div className="col-span-full">
                                <label
                                  htmlFor="env-key"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Environment Variables{" "}
                                  
                                </label>
                                <div className="mt-2 space-y-4">
                                  {envVariables.map((envVariable, idx) => {
                                    return (
                                      <div key={idx} className="flex space-x-4">
                                        <input
                                          onChange={(e) => handleEnvVariableChange(e, idx, "key")}
                                          type="text"
                                          name="env-key"
                                          id={`env-key-${idx}`}
                                          value={envVariable.key}
                                          autoComplete="env-key"
                                          placeholder="Key"
                                          className="block w-1/2 px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <input
                                          onChange={(e) => handleEnvVariableChange(e, idx, "value")}
                                          type="text"
                                          name="env-value"
                                          id={`env-value-${idx}`}
                                          value={envVariable.value}
                                          autoComplete="env-value"
                                          placeholder="Value"
                                          className="block w-1/2 px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                      </div>
                                    );
                                  })}
                                </div>
                                <div className="py-4">
                                  <button
                                    onClick={(e) => addEnvVariable(e)}
                                    className="px-6 py-2 rounded hover:bg-gray-200"
                                  >
                                    Add
                                  </button>
                                  {envVariables.length > 1 && (
                                    <button
                                      onClick={(e) => removeEnvVariable(e)}
                                      className="px-6 py-2 rounded hover:bg-gray-200"
                                    >
                                      Remove
                                    </button>
                                  )}
                                </div>
                              </div>

                              <div className="col-span-full">
                                <label
                                  htmlFor="annotation-key"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Annotations{" "}
                                  
                                </label>
                                <div className="mt-2 space-y-4">
                                  {annotations.map((annotation, idx) => {
                                    return (
                                      <div key={idx} className="flex space-x-4">
                                        <input
                                          onChange={(e) => handleAnnotationChange(e, idx, "key")}
                                          type="text"
                                          name="annotation-key"
                                          id={`annotation-key-${idx}`}
                                          value={annotation.key}
                                          autoComplete="annotation-key"
                                          placeholder="Key"
                                          className="block w-1/2 px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <input
                                          onChange={(e) => handleAnnotationChange(e, idx, "value")}
                                          type="text"
                                          name="annotation-value"
                                          id={`annotation-value-${idx}`}
                                          value={annotation.value}
                                          autoComplete="annotation-value"
                                          placeholder="Value"
                                          className="block w-1/2 px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                      </div>
                                    );
                                  })}
                                </div>
                                <div className="py-4">
                                  <button
                                    onClick={(e) => addAnnotation(e)}
                                    className="px-6 py-2 rounded hover:bg-gray-200"
                                  >
                                    Add
                                  </button>
                                  {annotations.length > 1 && (
                                    <button
                                      onClick={(e) => removeAnnotation(e)}
                                      className="px-6 py-2 rounded hover:bg-gray-200"
                                    >
                                      Remove
                                    </button>
                                  )}
                                </div>
                              </div>

                              <div className="col-span-full">
                                <label
                                  htmlFor="label-key"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Labels{" "}
                                  
                                </label>
                                <div className="mt-2 space-y-4">
                                  {labels.map((label, idx) => {
                                    return (
                                      <div key={idx} className="flex space-x-4">
                                        <input
                                          onChange={(e) => handleLabelChange(e, idx, "key")}
                                          type="text"
                                          name="label-key"
                                          id={`label-key-${idx}`}
                                          value={label.key}
                                          autoComplete="label-key"
                                          placeholder="Key"
                                          className="block w-1/2 px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <input
                                          onChange={(e) => handleLabelChange(e, idx, "value")}
                                          type="text"
                                          name="label-value"
                                          id={`label-value-${idx}`}
                                          value={label.value}
                                          autoComplete="label-value"
                                          placeholder="Value"
                                          className="block w-1/2 px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                      </div>
                                    );
                                  })}
                                </div>
                                <div className="py-4">
                                  <button
                                    onClick={(e) => addLabel(e)}
                                    className="px-6 py-2 rounded hover:bg-gray-200"
                                  >
                                    Add
                                  </button>
                                  {labels.length > 1 && (
                                    <button
                                      onClick={(e) => removeLabel(e)}
                                      className="px-6 py-2 rounded hover:bg-gray-200"
                                    >
                                      Remove
                                    </button>
                                  )}
                                </div>
                              </div>

                              <div className="col-span-full">
                                <label
                                  htmlFor="comArg"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Command Arguments
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="commandArguments"
                                    onChange={onChange}
                                    id="comArg"
                                    autoComplete="given-name"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                              <div className="col-span-full">
                                <label
                                  htmlFor="arguments"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Arguments
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="arguments"
                                    onChange={onChange}
                                    id="arguments"
                                    placeholder="e.g. 16GB"
                                    autoComplete="given-name"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                              <div className="col-span-full">
                                <label
                                  htmlFor="imagePullPolicy"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Image Pull Policy
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="imagePullPolicy"
                                    onChange={onChange}
                                    id="imagePullPolicy"
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
                                  Service Type
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="serviceType"
                                    onChange={onChange}
                                    id="serviceType"
                                    autoComplete="given-name"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>


                              <SettingSwitch
                                label="Override UID & GID"
                                checked={overrideUIDGID}
                                onChange={() => setOverrideUIDGID(!overrideUIDGID)}
                              />
                              <div className="col-span-full">
                                <label
                                  htmlFor="capabilities"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Linux Capabilities 
                                </label>
                                <div className="mt-2 space-y-4">
                                  {capabilities.map((capability, idx) => (
                                    <input
                                      key={idx}
                                      onChange={(e) => handleCapabilityChange(e, idx)}
                                      type="text"
                                      name="capability"
                                      id="capability"
                                      value={capability.name}
                                      autoComplete="given-name"
                                      className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  ))}
                                </div>
                                <div className="py-4">
                                  <button
                                    onClick={addCapability}
                                    className="px-6 py-2 rounded hover:bg-gray-200"
                                  >
                                    Add
                                  </button>
                                  {capabilities.length > 1 && (
                                    <button
                                      onClick={removeCapability}
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
                                  Job Url Container Path
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="jobUrl"
                                    onChange={onChange}
                                    id="jobUrl"
                                    autoComplete="given-name"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                              <SettingSwitch
                                label="Set Stdin"
                                checked={setStdin}
                                onChange={() => setSetStdin(!setStdin)}
                              />
                              <SettingSwitch
                                label="Allocate TTY"
                                checked={allocateTTY}
                                onChange={() => setAllocateTTY(!allocateTTY)}
                              />
                              <SettingSwitch
                                label="Working Directory Path"
                                checked={workingDirectoryPath}
                                onChange={() => setWorkingDirectoryPath(!workingDirectoryPath)}
                              />
                              <SettingSwitch
                                label="Create Home Directory"
                                checked={createHomeDirectory}
                                onChange={() => setCreateHomeDirectory(!createHomeDirectory)}
                              />
                              <SettingSwitch
                                label="Host IPC"
                                checked={hostIPC}
                                onChange={() => setHostIPC(!hostIPC)}
                              />
                              <SettingSwitch
                                label="Host Network"
                                checked={hostNetwork}
                                onChange={() => setHostNetwork(!hostNetwork)}
                              />
                              <SettingSwitch
                                label="Allow Privilege Escalation"
                                checked={allowPrivilegeEscalation}
                                onChange={() => setallowPrivilegeEscalation(!allowPrivilegeEscalation)}
                              />


                              <div className="col-span-full">
                                <label
                                  htmlFor="source-repository"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Public Git Repository{" "}
                                  
                                </label>
                                <div className="mt-2 space-y-4 p-1">
                                  {gitRepository.map((repository, idx) => {
                                    return (
                                      <div key={idx} className="space-y-4 border border-gray-300 p-2 mt-3">
                                        <label
                                          htmlFor="Source Repository"
                                          className="mt-3 block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Source Repository
                                        </label>
                                        <input
                                          onChange={(e) => handleGitRepositoryChange(e, idx, "sourceRepository")}
                                          type="text"
                                          name="source-repository"
                                          id={`source-repository-${idx}`}
                                          value={repository.sourceRepository}
                                          autoComplete="source-repository"
                                          placeholder="Source Repository URL"
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <label
                                          htmlFor="Branch"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Branch
                                        </label>
                                        <input
                                          onChange={(e) => handleGitRepositoryChange(e, idx, "branch")}
                                          type="text"
                                          name="branch"
                                          id={`branch-${idx}`}
                                          value={repository.branch}
                                          autoComplete="branch"
                                          placeholder="Branch"
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <label
                                          htmlFor="Revision"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Revision
                                        </label>
                                        <input
                                          onChange={(e) => handleGitRepositoryChange(e, idx, "revision")}
                                          type="text"
                                          name="revision"
                                          id={`revision-${idx}`}
                                          value={repository.revision}
                                          autoComplete="revision"
                                          placeholder="Revision"
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <label
                                          htmlFor="Username"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Username
                                        </label>
                                        <input
                                          onChange={(e) => handleGitRepositoryChange(e, idx, "username")}
                                          type="text"
                                          name="username"
                                          id={`username-${idx}`}
                                          value={repository.username}
                                          autoComplete="username"
                                          placeholder="Username"
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <label
                                          htmlFor="password"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Password
                                        </label>
                                        <input
                                          onChange={(e) => handleGitRepositoryChange(e, idx, "password")}
                                          type="password"
                                          name="password"
                                          id={`password-${idx}`}
                                          value={repository.password}
                                          autoComplete="current-password"
                                          placeholder="Password"
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />

                                        <label
                                          htmlFor="targetDirectory"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Target Directory
                                        </label>
                                        <input
                                          onChange={(e) => handleGitRepositoryChange(e, idx, "targetDirectory")}
                                          type="text"
                                          name="target-directory"
                                          id={`target-directory-${idx}`}
                                          value={repository.targetDirectory}
                                          autoComplete="target-directory"
                                          placeholder="Target Directory"
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                      </div>
                                    );
                                  })}
                                </div>
                                <div className="py-4">
                                  <button
                                    onClick={(e) => addGitRepository(e)}
                                    className="px-6 py-2 rounded hover:bg-gray-200"
                                  >
                                    Add
                                  </button>
                                  {gitRepository.length > 1 && (
                                    <button
                                      onClick={(e) => removeGitRepository(e)}
                                      className="px-6 py-2 rounded hover:bg-gray-200"
                                    >
                                      Remove
                                    </button>
                                  )}
                                </div>
                              </div>

                              <div className="col-span-full">
                                <label
                                  htmlFor="tolerations"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Tolerations <span className="text-red-600">*</span>
                                </label>
                                <div className="mt-2 space-y-4 p-1">
                                  {tolerations.map((toleration, idx) => (
                                    <div key={idx} className="space-y-2 border border-gray-300 p-2">
                                      <label
                                        htmlFor="tolerationKey"
                                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                                      >
                                        Key
                                      </label>
                                      <input
                                        type="text"
                                        name="key"
                                        placeholder="Key"
                                        value={toleration.key}
                                        onChange={(e) => handleTolerationChange(e, idx, "key")}
                                        className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />

                                      <label
                                        htmlFor="operator"
                                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                                      >
                                        Operator
                                      </label>
                                      <input
                                        type="text"
                                        name="operator"
                                        placeholder="Operator"
                                        value={toleration.operator}
                                        onChange={(e) => handleTolerationChange(e, idx, "operator")}
                                        className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />

                                      <label
                                        htmlFor="tolerationEffect"
                                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                                      >
                                        Effect
                                      </label>
                                      <input
                                        type="text"
                                        name="effect"
                                        placeholder="Effect"
                                        value={toleration.effect}
                                        onChange={(e) => handleTolerationChange(e, idx, "effect")}
                                        className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                      <label
                                        htmlFor="tolerationValue"
                                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                                      >
                                        Value
                                      </label>
                                      <input
                                        type="text"
                                        name="value"
                                        placeholder="Value"
                                        value={toleration.value}
                                        onChange={(e) => handleTolerationChange(e, idx, "value")}
                                        className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                      <label
                                        htmlFor="tolerationSecond"
                                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                                      >
                                        Toleration Seconds
                                      </label>
                                      <input
                                        type="text"
                                        name="tolerationSeconds"
                                        placeholder="Toleration Seconds"
                                        value={toleration.tolerationSeconds}
                                        onChange={(e) => handleTolerationChange(e, idx, "tolerationSeconds")}
                                        className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  ))}
                                </div>
                                <div className="py-4">
                                  <button onClick={addToleration} className="px-6 py-2 rounded hover:bg-gray-200">
                                    Add
                                  </button>
                                  {tolerations.length > 1 && (
                                    <button onClick={removeToleration} className="px-6 py-2 rounded hover:bg-gray-200">
                                      Remove
                                    </button>
                                  )}
                                </div>
                              </div>

                            </div>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure>
                    </div>
                    <div className="text-left col-span-full">
                      <Disclosure>
                        <Disclosure.Button className="">
                        <div className="flex flex-row items-center">
                            <div>
                            <div className="pr-2 ">
                                        <ChevronDownIcon className="w-5 h-5" />
                                    </div>
                            </div>
                            <div className="text-lg">
                              Scheduling and Life Cycle
                            </div>
                            
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 p-1 border border-gray-300">
                          <div>
                            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 p-2">

                              <div className="col-span-full">
                                <label
                                  htmlFor="request-cpu"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Node Type Affinity
                                </label>
                                <div className="mt-2 mb-2">
                                  <input
                                    type="text"
                                    name="nodeTypeAffinity"
                                    onChange={onChange}
                                    id="nodeTypeAffinity"
                                    autoComplete="given-name"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                                <SettingSwitch
                                  label="Topology Aware Scheduling"
                                  checked={topologyAwareScheduling}
                                  onChange={() => settopologyAwareScheduling(!topologyAwareScheduling)}
                                  className="mt-2"
                                />
                                <SettingSwitch
                                  label="Preemptible"
                                  checked={preemptible}
                                  onChange={() => setpreemptible(!preemptible)}
                                  className="mt-2"
                                />

                              </div>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure>
                    </div>


                    <div className="text-left col-span-full">
                      <Disclosure>
                        <Disclosure.Button className="">
                        <div className="flex flex-row items-center">
                            <div>
                            <div className="pr-2 ">
                                        <ChevronDownIcon className="w-5 h-5" />
                                    </div>
                            </div>
                            <div className="text-lg">
                              Storage
                            </div>
                            
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 p-1 ">
                          <div>
                            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 p-2">

                              <div className="col-span-full">

                                <SettingSwitch
                                  label="Existing PVC"
                                  checked={existingPvc}
                                  onChange={() => setexistingPvc(!existingPvc)}
                                  className="mt-2"
                                />

                                <div className="col-span-full">
                                  <label
                                    htmlFor="pvc"
                                    className="block text-sm font-medium leading-6 text-left text-gray-900"
                                  >
                                    Persistent Volume Claims 
                                  </label>
                                  <div className="mt-2 space-y-4 p-1">
                                    {pvcList.map((pvc, idx) => (
                                      <div key={idx} className="space-y-2 p-4 pb-7 border border-gray-400 mb-4">
                                        <label
                                          htmlFor="pvcName"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Name
                                        </label>
                                        <input
                                          type="text"
                                          name="pvcName"
                                          placeholder="Name"
                                          value={pvc.name}
                                          onChange={(e) => handlePvcChange(e, idx, "name")}
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <label
                                          htmlFor="containerTargetPath"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Container Target Path
                                        </label>
                                        <input
                                          type="text"
                                          name="containerTargetPath"
                                          placeholder="Container Target Path"
                                          value={pvc.containerTargetPath}
                                          onChange={(e) => handlePvcChange(e, idx, "containerTargetPath")}
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                  <div className="py-4">
                                    <button onClick={addPvc} className="px-6 py-2 rounded hover:bg-gray-200">
                                      Add
                                    </button>
                                    {pvcList.length > 1 && (
                                      <button onClick={removePvc} className="px-6 py-2 rounded hover:bg-gray-200 ">
                                        Remove
                                      </button>
                                    )}
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="s3-config"
                                    className="block text-sm font-medium leading-6 text-left text-gray-900"
                                  >
                                    S3 Storage
                                  </label>
                                  <div className="mt-2 space-y-4">
                                    {s3ConfigList.map((s3Config, idx) => (
                                      <div key={idx} className="space-y-2 p-4 pb-7 border border-gray-400 mb-4">
                                        <label
                                          htmlFor="accessKey"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Access Key <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                          required
                                          type="text"
                                          name="accessKey"
                                          placeholder="Access Key"
                                          value={s3Config.accessKey}
                                          onChange={(e) => handleS3ConfigChange(e, idx, "accessKey")}
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />

                                        <label
                                          htmlFor="secretKey"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Secret Key <span className="text-red-600">*</span>
                                        </label>

                                        <input
                                          required
                                          type="text"
                                          name="secretKey"
                                          placeholder="Secret Key"
                                          value={s3Config.secretKey}
                                          onChange={(e) => handleS3ConfigChange(e, idx, "secretKey")}
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <label
                                          htmlFor="bucket"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Bucket
                                        </label>

                                        <input
                                          type="text"
                                          name="bucket"
                                          placeholder="Bucket"
                                          value={s3Config.bucket}
                                          onChange={(e) => handleS3ConfigChange(e, idx, "bucket")}
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />

                                        <label
                                          htmlFor="endpointURL"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          End Point URL <span className="text-red-600">*</span>
                                        </label>

                                        <input
                                          required
                                          type="text"
                                          name="endpointURL"
                                          placeholder="Endpoint URL"
                                          value={s3Config.endpointURL}
                                          onChange={(e) => handleS3ConfigChange(e, idx, "endpointURL")}
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />

                                        <label
                                          htmlFor="targetpath"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Target Path 
                                        </label>
                                        <input
                                        required
                                          type="text"
                                          name="targetPath"
                                          placeholder="Target Path"
                                          value={s3Config.targetPath}
                                          onChange={(e) => handleS3ConfigChange(e, idx, "targetPath")}
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                  <div className="py-4">
                                    <button onClick={addS3Config} className="px-6 py-2 rounded hover:bg-gray-200">
                                      Add
                                    </button>
                                    {s3ConfigList.length > 1 && (
                                      <button onClick={removeS3Config} className="px-6 py-2 rounded hover:bg-gray-200">
                                        Remove
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse fixed bottom-0 right-0 bg-white  border-t-2 border-slate-100 text-center">
                    <button onClick={handleSubmit} className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 my-2 mr-4">Submit</button>
                  </div>
                </form>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div>
                <form>
                  <div className="grid w-full sm:w-5/6 grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 m-auto">
                    <div className="col-span-3">
                      <label
                        htmlFor="project"
                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                      >
                        Project 
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          required
                          name="project"
                          id="project"
                          onChange={onChange}
                          autoComplete="given-name"
                          className="block w-full px-4 py-2 text-gray-900 border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                          required
                          name="name"
                          onChange={onChange}
                          id="name"
                          autoComplete="given-name"
                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-3">
                      <label
                        htmlFor="gpus"
                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                      >
                        GPUs
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="GPUS"
                          onChange={onChange}
                          id="name"
                          autoComplete="given-name"
                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-3">
                      <label
                        htmlFor="image"
                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                      >
                        Image 
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="image"
                          onChange={onChange}
                          id="image"
                          autoComplete="given-name"
                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <div className="flex justify-between w-full sm:w-2/6 gap-4 mb-2">
                        <span>Distributed Training (MPI)</span>
                        <Switch
                          checked={enabled}
                          onChange={setEnabled}
                          className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex w-[35px] h-[19px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <span className="sr-only">Use setting</span>
                          <span
                            aria-hidden="true"
                            className={`${enabled ? "translate-x-4" : "translate-x-0"
                              }
            pointer-events-none inline-block w-[15px] h-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                          />
                        </Switch>
                      </div>
                      <div className="flex justify-between w-full sm:w-2/6 gap-4 mb-2">
                        <span>Jupyter Notebook</span>
                        <Switch
                          checked={jupyterNotbook}
                          onChange={setjupyterNotbook}
                          className={`${jupyterNotbook ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex w-[35px] h-[19px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <span className="sr-only">Use setting</span>
                          <span
                            aria-hidden="true"
                            className={`${jupyterNotbook ? "translate-x-4" : "translate-x-0"
                              }
            pointer-events-none inline-block w-[15px] h-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                          />
                        </Switch>
                      </div>

                      <div className="flex justify-between w-full sm:w-2/6 gap-4 mb-2">
                        <span>Tensor Board</span>
                        <Switch
                          checked={tensorBoard}
                          onChange={settensorBoard}
                          className={`${tensorBoard ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex w-[35px] h-[19px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <span className="sr-only">Use setting</span>
                          <span
                            aria-hidden="true"
                            className={`${tensorBoard ? "translate-x-4" : "translate-x-0"
                              }
            pointer-events-none inline-block w-[15px] h-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                          />
                        </Switch>
                      </div>
                    </div>
                    <div className="text-left col-span-full">
                      <Disclosure>
                        <Disclosure.Button className="">
                          <div className="flex flex-row items-center">
                            <div>
                            <div className="pr-2 ">
                                        <ChevronDownIcon className="w-5 h-5" />
                                    </div>
                            </div>
                            <div className="text-lg">
                              Resource Allocation
                            </div>
                            
                          </div>
                          
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 p-5 border">
                          <div>
                            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                              <div className="col-span-full">
                                <label
                                  htmlFor="first-name"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Node Pools{" "}
                                  
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
                                    onChange={onChange}
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
                                    onChange={onChange}
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
                                    onChange={onChange}
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
                                    onChange={onChange}
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
                                    placeholder="e.g 1.5GB"
                                    name="reqMemory"
                                    onChange={onChange}
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
                                    onChange={onChange}
                                    id="memoryLimit"
                                    autoComplete="given-name"
                                    placeholder="e.g. 16GB"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                              <div className="col-span-full">
                                <div className="flex justify-between w-full sm:w-2/6 items-center gap-4">
                                  <span>Large SHM</span>
                                  <Switch
                                    checked={enabledSHM}
                                    onChange={setEnabledSHM}
                                    className={`${enabledSHM ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[19px] w-[35px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                  >
                                    <span className="sr-only">Use setting</span>
                                    <span
                                      aria-hidden="true"
                                      className={`${enabledSHM ? "translate-x-4" : "translate-x-0"
                                        }
            pointer-events-none inline-block h-[15px] w-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                    />
                                  </Switch>
                                </div>
                              </div>

                            </div>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure>
                    </div>

                    <div className="text-left col-span-full">
                      <Disclosure>
                        <Disclosure.Button className="">
                        <div className="flex flex-row items-center">
                            <div>
                            <div className="pr-2 ">
                                        <ChevronDownIcon className="w-5 h-5" />
                                    </div>
                            </div>
                            <div className="text-lg">
                              Container Definition
                            </div>
                            
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 p-5 border ">
                          <div>
                            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                              <div className="col-span-full">
                                <label
                                  htmlFor="env-key"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Environment Variables{" "}
                                  
                                </label>
                                <div className="mt-2 space-y-4">
                                  {envVariables.map((envVariable, idx) => {
                                    return (
                                      <div key={idx} className="flex space-x-4">
                                        <input
                                          onChange={(e) => handleEnvVariableChange(e, idx, "key")}
                                          type="text"
                                          name="env-key"
                                          id={`env-key-${idx}`}
                                          value={envVariable.key}
                                          autoComplete="env-key"
                                          placeholder="Key"
                                          className="block w-1/2 px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <input
                                          onChange={(e) => handleEnvVariableChange(e, idx, "value")}
                                          type="text"
                                          name="env-value"
                                          id={`env-value-${idx}`}
                                          value={envVariable.value}
                                          autoComplete="env-value"
                                          placeholder="Value"
                                          className="block w-1/2 px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                      </div>
                                    );
                                  })}
                                </div>
                                <div className="py-4">
                                  <button
                                    onClick={(e) => addEnvVariable(e)}
                                    className="px-6 py-2 rounded hover:bg-gray-200"
                                  >
                                    Add
                                  </button>
                                  {envVariables.length > 1 && (
                                    <button
                                      onClick={(e) => removeEnvVariable(e)}
                                      className="px-6 py-2 rounded hover:bg-gray-200"
                                    >
                                      Remove
                                    </button>
                                  )}
                                </div>
                              </div>

                              <div className="col-span-full">
                                <label
                                  htmlFor="annotation-key"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Annotations{" "}
                                  
                                </label>
                                <div className="mt-2 space-y-4">
                                  {annotations.map((annotation, idx) => {
                                    return (
                                      <div key={idx} className="flex space-x-4">
                                        <input
                                          onChange={(e) => handleAnnotationChange(e, idx, "key")}
                                          type="text"
                                          name="annotation-key"
                                          id={`annotation-key-${idx}`}
                                          value={annotation.key}
                                          autoComplete="annotation-key"
                                          placeholder="Key"
                                          className="block w-1/2 px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <input
                                          onChange={(e) => handleAnnotationChange(e, idx, "value")}
                                          type="text"
                                          name="annotation-value"
                                          id={`annotation-value-${idx}`}
                                          value={annotation.value}
                                          autoComplete="annotation-value"
                                          placeholder="Value"
                                          className="block w-1/2 px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                      </div>
                                    );
                                  })}
                                </div>
                                <div className="py-4">
                                  <button
                                    onClick={(e) => addAnnotation(e)}
                                    className="px-6 py-2 rounded hover:bg-gray-200"
                                  >
                                    Add
                                  </button>
                                  {annotations.length > 1 && (
                                    <button
                                      onClick={(e) => removeAnnotation(e)}
                                      className="px-6 py-2 rounded hover:bg-gray-200"
                                    >
                                      Remove
                                    </button>
                                  )}
                                </div>
                              </div>

                              <div className="col-span-full">
                                <label
                                  htmlFor="label-key"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Labels{" "}
                                  
                                </label>
                                <div className="mt-2 space-y-4">
                                  {labels.map((label, idx) => {
                                    return (
                                      <div key={idx} className="flex space-x-4">
                                        <input
                                          onChange={(e) => handleLabelChange(e, idx, "key")}
                                          type="text"
                                          name="label-key"
                                          id={`label-key-${idx}`}
                                          value={label.key}
                                          autoComplete="label-key"
                                          placeholder="Key"
                                          className="block w-1/2 px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <input
                                          onChange={(e) => handleLabelChange(e, idx, "value")}
                                          type="text"
                                          name="label-value"
                                          id={`label-value-${idx}`}
                                          value={label.value}
                                          autoComplete="label-value"
                                          placeholder="Value"
                                          className="block w-1/2 px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                      </div>
                                    );
                                  })}
                                </div>
                                <div className="py-4">
                                  <button
                                    onClick={(e) => addLabel(e)}
                                    className="px-6 py-2 rounded hover:bg-gray-200"
                                  >
                                    Add
                                  </button>
                                  {labels.length > 1 && (
                                    <button
                                      onClick={(e) => removeLabel(e)}
                                      className="px-6 py-2 rounded hover:bg-gray-200"
                                    >
                                      Remove
                                    </button>
                                  )}
                                </div>
                              </div>

                              <div className="col-span-full">
                                <label
                                  htmlFor="comArg"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Command Arguments
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="commandArguments"
                                    onChange={onChange}
                                    id="comArg"
                                    autoComplete="given-name"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                              <div className="col-span-full">
                                <label
                                  htmlFor="arguments"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Arguments
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="arguments"
                                    onChange={onChange}
                                    id="arguments"
                                    placeholder="e.g. 16GB"
                                    autoComplete="given-name"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                              <div className="col-span-full">
                                <label
                                  htmlFor="imagePullPolicy"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Image Pull Policy
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="imagePullPolicy"
                                    onChange={onChange}
                                    id="imagePullPolicy"
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
                                  Service Type
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="serviceType"
                                    onChange={onChange}
                                    id="serviceType"
                                    autoComplete="given-name"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>


                              <SettingSwitch
                                label="Override UID & GID"
                                checked={overrideUIDGID}
                                onChange={() => setOverrideUIDGID(!overrideUIDGID)}
                              />
                              <div className="col-span-full">
                                <label
                                  htmlFor="capabilities"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Linux Capabilities 
                                </label>
                                <div className="mt-2 space-y-4">
                                  {capabilities.map((capability, idx) => (
                                    <input
                                      key={idx}
                                      onChange={(e) => handleCapabilityChange(e, idx)}
                                      type="text"
                                      name="capability"
                                      id="capability"
                                      value={capability.name}
                                      autoComplete="given-name"
                                      className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  ))}
                                </div>
                                <div className="py-4">
                                  <button
                                    onClick={addCapability}
                                    className="px-6 py-2 rounded hover:bg-gray-200"
                                  >
                                    Add
                                  </button>
                                  {capabilities.length > 1 && (
                                    <button
                                      onClick={removeCapability}
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
                                  Job Url Container Path
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="jobUrl"
                                    onChange={onChange}
                                    id="jobUrl"
                                    autoComplete="given-name"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                              <SettingSwitch
                                label="Set Stdin"
                                checked={setStdin}
                                onChange={() => setSetStdin(!setStdin)}
                              />
                              <SettingSwitch
                                label="Allocate TTY"
                                checked={allocateTTY}
                                onChange={() => setAllocateTTY(!allocateTTY)}
                              />
                              <SettingSwitch
                                label="Working Directory Path"
                                checked={workingDirectoryPath}
                                onChange={() => setWorkingDirectoryPath(!workingDirectoryPath)}
                              />
                              <SettingSwitch
                                label="Create Home Directory"
                                checked={createHomeDirectory}
                                onChange={() => setCreateHomeDirectory(!createHomeDirectory)}
                              />
                              <SettingSwitch
                                label="Host IPC"
                                checked={hostIPC}
                                onChange={() => setHostIPC(!hostIPC)}
                              />
                              <SettingSwitch
                                label="Host Network"
                                checked={hostNetwork}
                                onChange={() => setHostNetwork(!hostNetwork)}
                              />
                              <SettingSwitch
                                label="Allow Privilege Escalation"
                                checked={allowPrivilegeEscalation}
                                onChange={() => setallowPrivilegeEscalation(!allowPrivilegeEscalation)}
                              />


                              <div className="col-span-full">
                                <label
                                  htmlFor="source-repository"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Public Git Repository{" "}
                                  
                                </label>
                                <div className="mt-2 space-y-4 p-1">
                                  {gitRepository.map((repository, idx) => {
                                    return (
                                      <div key={idx} className="space-y-4 border border-gray-300 p-2 mt-3">
                                        <label
                                          htmlFor="Source Repository"
                                          className="mt-3 block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Source Repository
                                        </label>
                                        <input
                                          onChange={(e) => handleGitRepositoryChange(e, idx, "sourceRepository")}
                                          type="text"
                                          name="source-repository"
                                          id={`source-repository-${idx}`}
                                          value={repository.sourceRepository}
                                          autoComplete="source-repository"
                                          placeholder="Source Repository URL"
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <label
                                          htmlFor="Branch"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Branch
                                        </label>
                                        <input
                                          onChange={(e) => handleGitRepositoryChange(e, idx, "branch")}
                                          type="text"
                                          name="branch"
                                          id={`branch-${idx}`}
                                          value={repository.branch}
                                          autoComplete="branch"
                                          placeholder="Branch"
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <label
                                          htmlFor="Revision"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Revision
                                        </label>
                                        <input
                                          onChange={(e) => handleGitRepositoryChange(e, idx, "revision")}
                                          type="text"
                                          name="revision"
                                          id={`revision-${idx}`}
                                          value={repository.revision}
                                          autoComplete="revision"
                                          placeholder="Revision"
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <label
                                          htmlFor="Username"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Username
                                        </label>
                                        <input
                                          onChange={(e) => handleGitRepositoryChange(e, idx, "username")}
                                          type="text"
                                          name="username"
                                          id={`username-${idx}`}
                                          value={repository.username}
                                          autoComplete="username"
                                          placeholder="Username"
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <label
                                          htmlFor="password"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Password
                                        </label>
                                        <input
                                          onChange={(e) => handleGitRepositoryChange(e, idx, "password")}
                                          type="password"
                                          name="password"
                                          id={`password-${idx}`}
                                          value={repository.password}
                                          autoComplete="current-password"
                                          placeholder="Password"
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />

                                        <label
                                          htmlFor="targetDirectory"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Target Directory
                                        </label>
                                        <input
                                          onChange={(e) => handleGitRepositoryChange(e, idx, "targetDirectory")}
                                          type="text"
                                          name="target-directory"
                                          id={`target-directory-${idx}`}
                                          value={repository.targetDirectory}
                                          autoComplete="target-directory"
                                          placeholder="Target Directory"
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                      </div>
                                    );
                                  })}
                                </div>
                                <div className="py-4">
                                  <button
                                    onClick={(e) => addGitRepository(e)}
                                    className="px-6 py-2 rounded hover:bg-gray-200"
                                  >
                                    Add
                                  </button>
                                  {gitRepository.length > 1 && (
                                    <button
                                      onClick={(e) => removeGitRepository(e)}
                                      className="px-6 py-2 rounded hover:bg-gray-200"
                                    >
                                      Remove
                                    </button>
                                  )}
                                </div>
                              </div>

                              <div className="col-span-full">
                                <label
                                  htmlFor="tolerations"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Tolerations <span className="text-red-600">*</span>
                                </label>
                                <div className="mt-2 space-y-4 p-1">
                                  {tolerations.map((toleration, idx) => (
                                    <div key={idx} className="space-y-2 border border-gray-300 p-2">
                                      <label
                                        htmlFor="tolerationKey"
                                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                                      >
                                        Key
                                      </label>
                                      <input
                                        type="text"
                                        name="key"
                                        placeholder="Key"
                                        value={toleration.key}
                                        onChange={(e) => handleTolerationChange(e, idx, "key")}
                                        className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />

                                      <label
                                        htmlFor="operator"
                                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                                      >
                                        Operator
                                      </label>
                                      <input
                                        type="text"
                                        name="operator"
                                        placeholder="Operator"
                                        value={toleration.operator}
                                        onChange={(e) => handleTolerationChange(e, idx, "operator")}
                                        className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />

                                      <label
                                        htmlFor="tolerationEffect"
                                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                                      >
                                        Effect
                                      </label>
                                      <input
                                        type="text"
                                        name="effect"
                                        placeholder="Effect"
                                        value={toleration.effect}
                                        onChange={(e) => handleTolerationChange(e, idx, "effect")}
                                        className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                      <label
                                        htmlFor="tolerationValue"
                                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                                      >
                                        Value
                                      </label>
                                      <input
                                        type="text"
                                        name="value"
                                        placeholder="Value"
                                        value={toleration.value}
                                        onChange={(e) => handleTolerationChange(e, idx, "value")}
                                        className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                      <label
                                        htmlFor="tolerationSecond"
                                        className="block text-sm font-medium leading-6 text-left text-gray-900"
                                      >
                                        Toleration Seconds
                                      </label>
                                      <input
                                        type="text"
                                        name="tolerationSeconds"
                                        placeholder="Toleration Seconds"
                                        value={toleration.tolerationSeconds}
                                        onChange={(e) => handleTolerationChange(e, idx, "tolerationSeconds")}
                                        className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  ))}
                                </div>
                                <div className="py-4">
                                  <button onClick={addToleration} className="px-6 py-2 rounded hover:bg-gray-200">
                                    Add
                                  </button>
                                  {tolerations.length > 1 && (
                                    <button onClick={removeToleration} className="px-6 py-2 rounded hover:bg-gray-200">
                                      Remove
                                    </button>
                                  )}
                                </div>
                              </div>

                            </div>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure>
                    </div>
                    <div className="text-left col-span-full">
                      <Disclosure>
                        <Disclosure.Button className="">
                        <div className="flex flex-row items-center">
                            <div>
                            <div className="pr-2 ">
                                        <ChevronDownIcon className="w-5 h-5" />
                                    </div>
                            </div>
                            <div className="text-lg">
                              Scheduling and Life Cycle
                            </div>
                            
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 p-1 border border-gray-300">
                          <div>
                            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 p-2">

                              <div className="col-span-full">
                                <label
                                  htmlFor="request-cpu"
                                  className="block text-sm font-medium leading-6 text-left text-gray-900"
                                >
                                  Node Type Affinity
                                </label>
                                <div className="mt-2 mb-2">
                                  <input
                                    type="text"
                                    name="nodeTypeAffinity"
                                    onChange={onChange}
                                    id="nodeTypeAffinity"
                                    autoComplete="given-name"
                                    className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                                <SettingSwitch
                                  label="Topology Aware Scheduling"
                                  checked={topologyAwareScheduling}
                                  onChange={() => settopologyAwareScheduling(!topologyAwareScheduling)}
                                  className="mt-2"
                                />
                                <SettingSwitch
                                  label="Preemptible"
                                  checked={preemptible}
                                  onChange={() => setpreemptible(!preemptible)}
                                  className="mt-2"
                                />

                              </div>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure>
                    </div>


                    <div className="text-left col-span-full">
                      <Disclosure>
                        <Disclosure.Button className="">
                        <div className="flex flex-row items-center">
                            <div>
                            <div className="pr-2 ">
                                        <ChevronDownIcon className="w-5 h-5" />
                                    </div>
                            </div>
                            <div className="text-lg">
                              Storage
                            </div>
                            
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 p-1 ">
                          <div>
                            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 p-2">

                              <div className="col-span-full">

                                <SettingSwitch
                                  label="Existing PVC"
                                  checked={existingPvc}
                                  onChange={() => setexistingPvc(!existingPvc)}
                                  className="mt-2"
                                />

                                <div className="col-span-full">
                                  <label
                                    htmlFor="pvc"
                                    className="block text-sm font-medium leading-6 text-left text-gray-900"
                                  >
                                    Persistent Volume Claims 
                                  </label>
                                  <div className="mt-2 space-y-4 p-1">
                                    {pvcList.map((pvc, idx) => (
                                      <div key={idx} className="space-y-2 p-4 pb-7 border border-gray-400 mb-4">
                                        <label
                                          htmlFor="pvcName"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Name
                                        </label>
                                        <input
                                          type="text"
                                          name="pvcName"
                                          placeholder="Name"
                                          value={pvc.name}
                                          onChange={(e) => handlePvcChange(e, idx, "name")}
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <label
                                          htmlFor="containerTargetPath"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Container Target Path
                                        </label>
                                        <input
                                          type="text"
                                          name="containerTargetPath"
                                          placeholder="Container Target Path"
                                          value={pvc.containerTargetPath}
                                          onChange={(e) => handlePvcChange(e, idx, "containerTargetPath")}
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                  <div className="py-4">
                                    <button onClick={addPvc} className="px-6 py-2 rounded hover:bg-gray-200">
                                      Add
                                    </button>
                                    {pvcList.length > 1 && (
                                      <button onClick={removePvc} className="px-6 py-2 rounded hover:bg-gray-200 ">
                                        Remove
                                      </button>
                                    )}
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="s3-config"
                                    className="block text-sm font-medium leading-6 text-left text-gray-900"
                                  >
                                    S3 Storage
                                  </label>
                                  <div className="mt-2 space-y-4">
                                    {s3ConfigList.map((s3Config, idx) => (
                                      <div key={idx} className="space-y-2 p-4 pb-7 border border-gray-400 mb-4">
                                        <label
                                          htmlFor="accessKey"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Access Key <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                          required
                                          type="text"
                                          name="accessKey"
                                          placeholder="Access Key"
                                          value={s3Config.accessKey}
                                          onChange={(e) => handleS3ConfigChange(e, idx, "accessKey")}
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />

                                        <label
                                          htmlFor="secretKey"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Secret Key <span className="text-red-600">*</span>
                                        </label>

                                        <input
                                          required
                                          type="text"
                                          name="secretKey"
                                          placeholder="Secret Key"
                                          value={s3Config.secretKey}
                                          onChange={(e) => handleS3ConfigChange(e, idx, "secretKey")}
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <label
                                          htmlFor="bucket"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Bucket
                                        </label>

                                        <input
                                          type="text"
                                          name="bucket"
                                          placeholder="Bucket"
                                          value={s3Config.bucket}
                                          onChange={(e) => handleS3ConfigChange(e, idx, "bucket")}
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />

                                        <label
                                          htmlFor="endpointURL"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          End Point URL <span className="text-red-600">*</span>
                                        </label>

                                        <input
                                          required
                                          type="text"
                                          name="endpointURL"
                                          placeholder="Endpoint URL"
                                          value={s3Config.endpointURL}
                                          onChange={(e) => handleS3ConfigChange(e, idx, "endpointURL")}
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />

                                        <label
                                          htmlFor="targetpath"
                                          className="block text-sm font-medium leading-6 text-left text-gray-900"
                                        >
                                          Target Path 
                                        </label>
                                        <input
                                        required
                                          type="text"
                                          name="targetPath"
                                          placeholder="Target Path"
                                          value={s3Config.targetPath}
                                          onChange={(e) => handleS3ConfigChange(e, idx, "targetPath")}
                                          className="block w-full px-4 py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                  <div className="py-4">
                                    <button onClick={addS3Config} className="px-6 py-2 rounded hover:bg-gray-200">
                                      Add
                                    </button>
                                    {s3ConfigList.length > 1 && (
                                      <button onClick={removeS3Config} className="px-6 py-2 rounded hover:bg-gray-200">
                                        Remove
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse fixed bottom-0 right-0 bg-white  border-t-2 border-slate-100 text-center">
                    <button onClick={handleSubmit} className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 my-2 mr-4">Submit</button>
                  </div>
                </form>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default AddNewJob;
