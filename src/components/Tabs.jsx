import { Tab } from "@headlessui/react";

export default function Tabs() {
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
                    "py-1.5 px-4 outline-none rounded  min-w-fit text-sm font-medium leading-5 text-gray-600",
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
          <Tab.Panel>1</Tab.Panel>
          <Tab.Panel>2</Tab.Panel>
          <Tab.Panel>3</Tab.Panel>
          <Tab.Panel>4</Tab.Panel>
          <Tab.Panel>5</Tab.Panel>
          <Tab.Panel>6</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
