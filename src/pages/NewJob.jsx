import React from "react";
import * as Tabs from '@radix-ui/react-tabs';
import Training from "./Training";
import Interactive from "./Interactive";


function NewJob() {
  return (
    <>
      <div>
        <Tabs.Root defaultValue="tabInteractive" className="w-full">
          <Tabs.List>
            <div className="flex flex-row items-center justify-center w-full h-6 m-auto md:w-1/6">
              <Tabs.Trigger
                className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11  data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none cursor-default"
                value="tabInteractive"
              >
                Interactive
              </Tabs.Trigger>

              <Tabs.Trigger
                className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                value="tabTraining"
              >
                Training
              </Tabs.Trigger>
            </div>
          </Tabs.List>

          {/* Interactive Section */}

          <Tabs.Content value="tabInteractive" className="md:w-9/12 w-full m-auto p-6 pt-10 md:p-11 ">
            <Interactive/>
          </Tabs.Content>

          {/* Traing Section */}
          <Tabs.Content value="tabTraining" className="md:w-9/12 w-full m-auto p-6 pt-10 md:p-11">
            <Training/>
          </Tabs.Content>
        </Tabs.Root>
      </div>

    </>
  );
}

export default NewJob;
