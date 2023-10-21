import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function HeadingMenu({
  heading = "",
  setGroupColumn = "",
  groupColumn = "",
  analyticFns = [],
  setAnalyticFn = () => {},
  type = "int",
}) {
  const handleGroupColumn = (key) => {
    if (groupColumn === key) {
      setGroupColumn("");
    } else {
      setGroupColumn(key);
    }
  };
  return (
    <Menu as="span" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 " aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-50 w-56 p-2 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item as="span">
            {type === "string" && (
              <span
                onClick={() => handleGroupColumn(heading.key)}
                className="block w-full px-6 py-2 bg-white rounded hover:bg-gray-900 hover:text-white"
              >
                {groupColumn === heading.key ? "Ungroup By " : "Group By "}
                {heading.heading}
              </span>
            )}

            {type === "int" &&
              analyticFns.map((fn) => (
                <span
                  key={fn}
                  onClick={() => setAnalyticFn(fn)}
                  className="block w-full px-6 py-2 bg-white rounded hover:bg-gray-900 hover:text-white"
                >
                  {fn.name}
                </span>
              ))}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
