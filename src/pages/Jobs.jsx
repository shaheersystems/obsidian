import React, { useState, useEffect } from "react";
import data from "../data/mock_data.json";
import {
  MagnifyingGlassIcon,
  CheckIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import DataTable from "../components/DataTable";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import FilterSelect from "../components/FilterSelect";
import SlideOver from "../components/SlideOver";
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
  const [openDrawer, setOpenDrawer] = useState(false);

  const headings = [
    {
      heading: "Job ID",
      key: "jobId",
      type: "string",
    },
    {
      heading: "Status",
      key: "isActive",
      type: "boolean",
    },
    {
      heading: "Job Name",
      key: "name",
      type: "string",
    },
    {
      heading: "User",
      key: "createdBy",
      type: "string",
    },
    {
      heading: "Project",
      key: "project",
      type: "string",
    },
    {
      heading: "Creation Time",
      key: "created",
      type: "time",
    },
    {
      heading: "Type",
      key: "type",
      type: "string",
    },

    {
      heading: "Last Modified",
      key: "lastModified",
      type: "time",
    },
    {
      heading: "Last Modified By",
      key: "lastModifiedBy",
      type: "string",
    },
    {
      heading: "Can Evict",
      key: "canEvict",
      type: "boolean",
    },
  ];

  const [showing, setShowing] = useState(false);
  const [selectedHeadings, setSelectedHeadings] = useState([
    {
      heading: "Job ID",
      key: "jobId",
      type: "string",
    },
    {
      heading: "Status",
      key: "isActive",
      type: "boolean",
    },
    {
      heading: "Job Name",
      key: "name",
      type: "string",
    },
    {
      heading: "User",
      key: "createdBy",
      type: "string",
    },
    {
      heading: "Project",
      key: "project",
      type: "string",
    },
    {
      heading: "Creation Time",
      key: "created",
      type: "time",
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
  const filters = selectedHeadings.filter(
    (heading) => heading.type === "string"
  );
  console.log(filters);
  const [filter, setFilter] = useState(filters[0]);
  const [query, setQuery] = useState("");

  const [currentJob, setCurrentJob] = useState({});
  console.log("current job", currentJob);
  return (
    <div>
      <SlideOver
        job={currentJob}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
      <div className="flex items-center">
        <div className="flex items-center flex-1 gap-2">
          <label
            htmlFor="search"
            className="flex items-center w-full gap-4 px-4 py-1.5 mt-1 border rounded focus:ring"
          >
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
            <input
              onChange={(e) => setQuery(e.target.value)}
              id="search"
              placeholder={`Search by ${filter.heading}`}
              className="w-full outline-none"
              type="text"
            />
          </label>
          <FilterSelect
            selected={filter}
            setSelected={setFilter}
            data={filters}
          />
        </div>
        <div className="flex justify-end flex-1 gap-4 item-center">
          <Dropdown
            data={jobs_timeframe}
            selected={selected}
            setSelected={setSelected}
          />
          <Link
            to="/jobs/new-job"
            className="flex items-center gap-2 px-6 py-2 rounded hover:bg-gray-100"
          >
            <PlusIcon className="w-5 h-5 text-gray-600" />
            <span className="font-semibold uppercase">New Job</span>
          </Link>
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
          query={query}
          filter={filter}
          selectedHeadings={selectedHeadings}
          jobs={jobData}
          headings={headings}
          setCurrentJob={setCurrentJob}
          setOpenDrawer={setOpenDrawer}
          currentJob={currentJob}
        />
      </div>
    </div>
  );
}

export default Jobs;
