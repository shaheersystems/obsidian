import React from "react";
import { Link } from "react-router-dom";
import { LightningBoltIcon, FileTextIcon } from "@radix-ui/react-icons";
function AppLayout({ children }) {
  const links = [
    {
      id: 1,
      name: "Overview",
      path: "/",
      icon: <LightningBoltIcon className="w-5 h-5" />,
    },
    {
      id: 2,
      name: "Jobs",
      path: "/jobs",
      icon: <FileTextIcon className="w-5 h-5" />,
    },
  ];
  return (
    <div className="App">
      <div>
        <header className="flex items-center justify-between px-6 py-3 text-white bg-gray-900 shadow-lg">
          <div>
            <h2 className="text-3xl font-semibold">Obsidian</h2>
          </div>
          <div>
            <span className="text-sm text-center">
              Cluster: sensei-eks01-prod-cluster
            </span>
          </div>
          <div>
            <div className="flex items-center justify-center h-4 p-4 bg-gray-600 rounded-full">
              S
            </div>
          </div>
        </header>
      </div>
      <div className="flex">
        <aside className="h-[92vh] bg-gray-900 w-72">
          <div className="pt-4">
            {links.map((link) => {
              return (
                <Link
                  key={link.id}
                  to={link.path}
                  className="flex items-center gap-4 px-6 py-3 text-white hover:bg-gray-800"
                >
                  {link.icon}
                  <span className="">{link.name}</span>
                </Link>
              );
            })}
          </div>
        </aside>
        <main className="w-full p-4">{children}</main>
      </div>
    </div>
  );
}

export default AppLayout;
