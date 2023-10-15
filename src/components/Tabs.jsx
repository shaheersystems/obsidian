import { Tab } from "@headlessui/react";
import GeneralTab from "./GeneralTab";
import PodsTab from "./PodsTab";
import StatusHistory from "./StatusHistory";
import GraphsTab from "./GraphsTab";
import LogsTab from "./LogsTab";
import GPUTab from "./GPUTab";

export default function Tabs({ currentJob }) {
  const tabs = ["General", "Pods", "Status History", "Gpus", "Graphs", "Logs"];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="w-full px-2 py-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex gap-4 p-1 px-6 space-x-1 rounded-xl">
          {tabs.map((tab, idx) => {
            return (
              <Tab
                key={idx}
                className={({ selected }) =>
                  classNames(
                    "py-1.5 px-3 uppercase font-semibold outline-none rounded  min-w-fit text-sm leading-5 text-gray-600",
                    selected ? "bg-blue-500/10" : ""
                  )
                }
              >
                {tab}
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels className="px-6 mt-2">
          <Tab.Panel>
            <GeneralTab currentJob={currentJob} />
          </Tab.Panel>
          <Tab.Panel>
            <PodsTab />
          </Tab.Panel>
          <Tab.Panel>
            <StatusHistory />
          </Tab.Panel>
          <Tab.Panel>
            <GPUTab />
          </Tab.Panel>
          <Tab.Panel>
            <GraphsTab />
          </Tab.Panel>
          <Tab.Panel>
            <LogsTab />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
