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
              <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="project">
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
                  <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="gpus">
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
              <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="image">
                Image
              </label>
              <input
                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="image"
                required
              />
            </fieldset>

            <div className="flex flex-row justify-between w-6/12 pt-3">
              <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="distributed mpi">
                Distributed Training (MPI)
              </label>
              <Switch.Root
                className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                id="distributed-training"
                style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
              >
                <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
              </Switch.Root>

            </div>
            <div className="flex flex-row justify-between w-6/12 pt-3">
              <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="jupyter notebook">
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
              <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="tensor board">
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
                className="mt-3 bg-mauve6 w-full rounded-md shadow-[0_2px_10px] shadow-black/5"
                type="single"
                defaultValue="item-1"
                collapsible
              >
                <Accordion.Item className="mb-2" value="Resource Alllocation">
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
                      {/* Add */}
                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Node pools">
                          Node pools
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="noode-pools"

                        />
                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Requested Cpu">
                          Requested CPU
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="requested-cpu"

                        />
                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="GPU memory">
                          GPU Memory
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="gpu-memory"

                        />
                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="MIG profile">
                          MIG Profile
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="mig-profile"

                        />
                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="CPU limit">
                          CPU Limit
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="cpu-limit"

                        />
                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Requested Memory">
                          Requested Memory
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="requested-memory"
                          placeholder="e.g 1.5G"

                        />
                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Memory Limit">
                          Memory Limit
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="memory-limit"
                          placeholder="e.g 1.5G"

                        />
                      </fieldset>

                      <div className="flex flex-row justify-between w-5/12 pt-3">
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Large SHM">
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

                <Accordion.Item value=" mb-2 item-2">
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
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Commad Arguments">
                          Command Arguments
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="command-arguments"


                        />
                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Arguments">
                          Arguments
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="arguments"

                        />

                      </fieldset>

                      {/* Add */}
                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Environmental Variables">
                          Environmental Variables
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="enviormental-variables"

                        />

                      </fieldset>

                      {/* Add */}
                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Annotations">
                          Annotations
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="annotations"

                        />

                      </fieldset>

                      {/* Add */}
                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Labels">
                          Labels
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="labels"

                        />

                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Image pull policy">
                          Image Pull Policy
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="image-pull-policy"

                        />

                      </fieldset>

                      <div className="flex flex-row justify-between w-5/12 pt-3">
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Override Uid and gid">
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

                      
                      {/* Add */}
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
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Set stdin">
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
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Allocate tty">
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
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Working directory path">
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
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Create Home directory">
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
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Host Ipc">
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
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Host Network">
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

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Service Type">
                          Service Type
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="service-type"

                        />

                      </fieldset>

                      {/* Add */}
                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Job url">
                          Job Url
                        </label>
                        <fieldset className="p-10  mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                          <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Container Port">
                            Container Port
                          </label>
                          <input type="number"
                            className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                            id="container-port"

                          />
                          <div className="flex flex-row justify-between w-5/12 pt-3">
                            <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="custom url">
                              Custom URL
                            </label>
                            <Switch.Root
                              className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                              id="custom-url"
                              style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                            >
                              <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                            </Switch.Root>

                          </div>

                        </fieldset>

                      </fieldset>

                      <div className="flex flex-row justify-between w-5/12 pt-3">
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="allow privilege">
                          Allow Privilege Escalation
                        </label>
                        <Switch.Root
                          className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                          id="allow-privilege-escalation"
                          style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                        >
                          <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                        </Switch.Root>

                      </div>

                      {/* Add */}
                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Public Git Repository">
                          Public Git Repository
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="public-git-repository"

                        />

                      </fieldset>

                      {/* Add */}
                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Tolerations
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="tolerations"

                        />

                      </fieldset>


                    </div>

                  </Accordion.Content>

                </Accordion.Item>

                <Accordion.Item value="mb-2 item-3">
                  <Accordion.Trigger className="w-full ">
                    <div className="flex flex-row justify-start">
                      <div className="pr-2">
                        <ChevronDownIcon className="w-5 h-5" />
                      </div>
                      <div className="">

                        Scheduling & Lifecycle
                      </div>

                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content>
                    <div className="p-4 border border-slate-400 ">
                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="node type affinity">
                          Node Type Affinity
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="node-type-affinity"

                        />

                      </fieldset>
                      <div className="flex flex-row justify-between w-5/12 pt-3">
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Topology Aware Scheduling">
                          Topology Aware Scheduling
                        </label>
                        <Switch.Root
                          className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                          id="topology-aware-scheduling"
                          style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                        >
                          <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                        </Switch.Root>

                      </div>
                      <div className="flex flex-row justify-between w-5/12 pt-3">
                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Preemptible
                        </label>
                        <Switch.Root
                          className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                          id="preemtible"
                          style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                        >
                          <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                        </Switch.Root>

                      </div>

                    </div>


                  </Accordion.Content>
                </Accordion.Item>


                <Accordion.Item value="mb-2item-4">
                  <Accordion.Trigger className="w-full ">
                    <div className="flex flex-row justify-start">
                      <div className="pr-2">
                        <ChevronDownIcon className="w-5 h-5" />
                      </div>
                      <div className="">

                        Storage
                      </div>

                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content>
                    <div className="p-4 border border-slate-400 ">
                      <div className="flex flex-row justify-between w-5/12 pt-3">
                        <label className="pr-2 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Existing PVC
                        </label>
                        <Switch.Root
                          className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                          id="existing-pvc"
                          style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                        >
                          <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                        </Switch.Root>



                      </div>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Name
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="storage-name"
                          placeholder="like sensei-fsx-pvc"

                        />

                      </fieldset>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Container Target Path
                        </label>
                        <input
                          className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                          id="container-target-path"
                          placeholder="like sensie/fs"

                        />

                      </fieldset>

                      <div className="flex flex-row justify-between w-5/12 pt-3">
                        <label className="pr-2 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          Read Only
                        </label>
                        <Switch.Root
                          className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                          id="storage-read-only"
                          style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                        >
                          <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                        </Switch.Root>

                      </div>

                      <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3 ">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                          S3 Storage
                        </label>

                        <div className="flex flex-row flex-wrap p-3">
                          <div className="flex-1 pr-7">

                            <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                              <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                                Access Key <span className="text-red-500">*</span>
                              </label>
                              <input
                                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                                id="S3storage-access-key"
                                required
                                
                              />
                            </fieldset>
                          </div>

                          <div className="flex-1">

                            <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                              <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                                Secret Key* <span className="text-red-500">*</span>
                              </label>
                              <input
                                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                                id="S3storage-secret-key"
                                required
                                
                              />
                            </fieldset>
                          </div>



                        </div>

                        <fieldset className="p-3 mb-[15px] w-full flex flex-col justify-start">
                          <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                            Bucket Name
                          </label>
                          <input
                            className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                            id="S3storage-bucket-name"
                            

                          />

                        </fieldset>

                      
                        <fieldset className="p-3 mb-[15px] w-full flex flex-col justify-start ">
                          <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                            Enpoint URL
                          </label>
                          <input
                            className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                            id="S3storage-enpoint-url"
                            

                          />

                        </fieldset>

                        <fieldset className="p-3 mb-[15px] w-full flex flex-col justify-start">
                          <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                            Target Path
                          </label>
                          <input
                            className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                            id="S3stroage-target-path"
                            

                          />

                        </fieldset>


                      </fieldset>

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

        <div className="flex flex-row-reverse fixed bottom-0 right-0 bg-white  border-t-2 border-slate-100 w-full text-center">
          <button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 my-2 mr-4">Submit</button>
        </div>
      </div>
      
    </>
  );
}

export default NewJob;
