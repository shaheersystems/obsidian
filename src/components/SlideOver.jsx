import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  DocumentIcon,
  TrashIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { PlayIcon } from "@radix-ui/react-icons";
import Tabs from "./Tabs";

export default function SlideOver({ openDrawer, setOpenDrawer, job }) {
  console.log("This", job);
  return (
    <Transition.Root show={openDrawer} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpenDrawer}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-2xl pointer-events-auto">
                  <div className="flex flex-col h-full py-2 overflow-y-scroll bg-white shadow-xl">
                    <div className="relative flex-1 px-4 mt-6 sm:px-2">
                      <div className="flex items-center justify-between py-2">
                        <a
                          href="/"
                          className="flex items-center gap-2 px-6 py-2 text-sm font-semibold uppercase rounded hover:bg-gray-100"
                        >
                          <DocumentIcon className="w-4 h-4 text-gray-600" />
                          Logs
                        </a>
                        <a
                          href="/"
                          className="flex items-center gap-2 px-6 py-2 text-sm font-semibold uppercase rounded hover:bg-gray-100"
                        >
                          <TrashIcon className="w-4 h-4 text-gray-600" />
                          Delete Job
                        </a>
                        <a
                          href="/"
                          className="flex items-center gap-2 px-6 py-2 text-sm font-semibold uppercase rounded hover:bg-gray-100"
                        >
                          <PlayIcon className="w-4 h-4 text-gray-600" />
                          Connect
                        </a>
                        <a
                          href="/"
                          className="flex items-center gap-2 px-6 py-2 text-sm font-semibold uppercase rounded hover:bg-gray-100"
                        >
                          <DocumentDuplicateIcon className="w-4 h-4 text-gray-600" />
                          Clone Job
                        </a>
                      </div>
                      <div className="flex items-center gap-4 px-6 py-4">
                        <span className="text-lg font-semibold">
                          {job?.jobId}
                        </span>
                        <span
                          className={`px-5 py-2 text-xs  text-white rounded-full ${
                            job.isActive ? "bg-green-400" : "bg-red-400"
                          }`}
                        >
                          {job.isActive ? "Running" : "Pending"}
                        </span>
                      </div>
                      <Tabs currentJob={job} />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
