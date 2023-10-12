import React from "react";
import * as Tabs from '@radix-ui/react-tabs';
import * as Label from '@radix-ui/react-label';
import * as Switch from '@radix-ui/react-switch';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';


function NewJob() {
  return (
    < >
      <div>
        <Tabs.Root>
          <Tabs.List>
            <div className="flex flex-row items-center justify-center w-1/6 h-6 m-auto">

              <Tabs.Trigger
                className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none cursor-default"
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
          <Tabs.Content value="tabInteractive" className="w-9/12 m-auto p-11">
            <fieldset className="mb-[15px] w-full flex flex-col justify-start">
              <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                Project
              </label>
              <input
                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="project"
                required
              />
            </fieldset>

            <div className="flex flex-row flex-wrap pt-3">
              <div className="flex-1 pr-7">

                <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                  <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                    id="name"
                    required
                  />
                </fieldset>
              </div>

              <div className="flex-1">

                <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                  <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                    GPUs
                  </label>
                  <input
                    className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                    id="gpus"
                    required
                  />
                </fieldset>
              </div>



            </div>

            <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3">
              <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                Image
              </label>
              <input
                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="image"
                required
              />
            </fieldset>

            <div className="flex flex-row justify-between w-6/12 pt-3">
              <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                Distributed Training (MPI)
              </label>
              <Switch.Root
                className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                id="distributed-training"
                style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
              >
                <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
              </Switch.Root>

            </div>
            <div className="flex flex-row justify-between w-6/12 pt-3">
              <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                Jupyter notebook
              </label>
              <Switch.Root
                className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                id="jupyter-notebook"
                style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
              >
                <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
              </Switch.Root>

            </div>

            <div className="flex flex-row justify-between w-6/12 pt-3">
              <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                TensorBoard
              </label>
              <Switch.Root
                className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                id="tensor-board"
                style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
              >
                <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
              </Switch.Root>

            </div>

            <div>
              <Accordion.Root
                className="bg-mauve6 w-full rounded-md shadow-[0_2px_10px] shadow-black/5"
                type="single"
                defaultValue="item-1"
                collapsible
              >
                <Accordion.Item value="item-1">
                  <Accordion.Trigger className="w-full ">
                    <div className="flex flex-row justify-start">
                      <div className="pr-2">
                        <ChevronDownIcon className="w-5 h-5" />
                      </div>
                      <div className="">

                        Resource Allocation
                      </div>

                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content>
                    <div className="p-4 border border-slate-400 ">
                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Node pools
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="noode-pools"

                        />
                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Requested CPU
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="requested-cpu"

                        />
                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          GPU Memory
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="gpu-memory"

                        />
                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          MIG Profile
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="mig-profile"

                        />
                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          CPU Limit
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="cpu-limit"

                        />
                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Requested Memory
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="requested-memory"
                          placeholder="e.g 1.5G"

                        />
                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Memory Limit
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="memory-limit"
                          placeholder="e.g 1.5G"

                        />
                      </fieldset>

                      <div className="flex flex-row justify-between w-5/12 pt-3">
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Large SHM
                        </label>
                        <Switch.Root
                          className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                          id="large-shm"
                          style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                        >
                          <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                        </Switch.Root>

                      </div>

                    </div>


                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-2">
                  <Accordion.Trigger className="w-full ">
                    <div className="flex flex-row justify-start">
                      <div className="pr-2">
                        <ChevronDownIcon className="w-5 h-5" />
                      </div>
                      <div className="">

                        Container Definition
                      </div>

                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content>
                    <div className="p-4 border border-slate-400 ">
                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Command Arguments
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="command-arguments"
                          

                        />
                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Arguments
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="arguments"
                          
                        />

                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Environmental Variables
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="enviormental-variables"
                          
                        />

                      </fieldset>
                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Annotations
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="annotations"
                          
                        />

                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Labels
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="labels"
                          
                        />

                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Image Pull Policy
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="image-pull-policy"
                          
                        />

                      </fieldset>

                      <div className="flex flex-row justify-between w-5/12 pt-3">
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Override UID & GID
                        </label>
                        <Switch.Root
                          className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                          id="override-uid-gid"
                          style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                        >
                          <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                        </Switch.Root>

                      </div>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Linux Capabilities
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="Linux-capabilities"
                          
                        />

                      </fieldset>

                      <div className="flex flex-row justify-between w-5/12 pt-3">
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Set Stdin
                        </label>
                        <Switch.Root
                          className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                          id="Set-stdin"
                          style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                        >
                          <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                        </Switch.Root>

                      </div>

                      <div className="flex flex-row justify-between w-5/12 pt-3">
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Allocate TTY
                        </label>
                        <Switch.Root
                          className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                          id="allocate-tty"
                          style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                        >
                          <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                        </Switch.Root>

                      </div>

                      <div className="flex flex-row justify-between w-5/12 pt-3">
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Working Directory Path
                        </label>
                        <Switch.Root
                          className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                          id="Workiing-directory-path"
                          style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                        >
                          <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                        </Switch.Root>

                      </div>

                      <div className="flex flex-row justify-between w-5/12 pt-3">
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Create Home Directory
                        </label>
                        <Switch.Root
                          className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                          id="create-home-directory"
                          style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                        >
                          <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                        </Switch.Root>

                      </div>
                      <div className="flex flex-row justify-between w-5/12 pt-3">
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Host IPC
                        </label>
                        <Switch.Root
                          className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                          id="host-ipc"
                          style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                        >
                          <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                        </Switch.Root>

                      </div>
                      <div className="flex flex-row justify-between w-5/12 pt-3">
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Host Network
                        </label>
                        <Switch.Root
                          className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                          id="host-network"
                          style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                        >
                          <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                        </Switch.Root>

                      </div>

                      

                      
                    </div>

                  </Accordion.Content>

                </Accordion.Item>


              </Accordion.Root>
            </div>

          </Tabs.Content>


          <Tabs.Content value="tabTraining">
            <Label.Root className="text-[15px] font-medium leading-[35px] text-white" htmlFor="firstName">
              First name
            </Label.Root>
            <input
              className="bg-blackA2 shadow-blackA6 inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              type="text"
              id="firstName"
              defaultValue="Pedro Duarte"
            />

          </Tabs.Content>
        </Tabs.Root>
      </div>
    </>
  );
}

export default NewJob;
