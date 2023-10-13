import React, { useState, Fragment, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import data from "../data/mock_data.json";
import {
  MagnifyingGlassIcon,
  CheckIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import DataTable from "../components/DataTable";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

function Jobs() {
  const [jobData, setJobData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(100);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      // User has scrolled to the end, load more items
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const d = JSON.stringify(data);
    const parsedData = JSON.parse(d);
    setJobData(parsedData.slice(0, visibleItems));
  }, [visibleItems]);

  const jobs_timeframe = [
    { id: 1, name: "Current", current: true },
    { id: 2, name: "History" },
  ];
  const [selected, setSelected] = useState(jobs_timeframe[0]);

  const headings = [
    {
      heading: "Job ID",
      key: "jobId",
    },
    {
      heading: "Status",
      key: "isActive",
    },
    {
      heading: "Job Name",
      key: "name",
    },
    {
      heading: "User",
      key: "createdBy",
    },
    {
      heading: "Project",
      key: "project",
    },
    {
      heading: "Creation Time",
      key: "created",
    },
    {
      heading: "Type",
      key: "type",
    },

    {
      heading: "Last Modified",
      key: "lastModified",
    },
    {
      heading: "Last Modified By",
      key: "lastModifiedBy",
    },
    {
      heading: "Can Evict",
      key: "canEvict",
    },
  ];

  const [showing, setShowing] = useState(false);
  const [selectedHeadings, setSelectedHeadings] = useState([
    {
      heading: "Job ID",
      key: "jobId",
    },
    {
      heading: "Job Name",
      key: "name",
    },
    {
      heading: "Status",
      key: "isActive",
    },
    {
      heading: "User",
      key: "createdBy",
    },
    {
      heading: "Project",
      key: "project",
    },
    {
      heading: "Creation Time",
      key: "created",
    },
  ]);

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
              <Listbox.Button className="relative w-full px-6 py-2 pr-10 text-left text-white bg-gray-900 rounded cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
                  {jobs_timeframe.map((person, personIdx) => (
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
                      {heading.heading.length > 11 ? ( // if heading is longer than 20 characters, truncate it
                        <span className="truncate">{heading.heading}</span>
                      ) : (
                        <span>{heading.heading}</span>
                      )}
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
      <div>
        <DataTable
          selectedHeadings={selectedHeadings}
          jobs={jobData}
          headings={headings}
        />
      </div>
    </div>
  );
}

export default Jobs;
