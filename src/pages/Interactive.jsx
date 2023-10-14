import React from 'react';
import { useState } from "react";
import * as Switch from '@radix-ui/react-switch';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

function Interactive() {
    const [nodedivs, setnodeDivs] = useState([]);
    const [envVariabledivs, setenvVariabledivs] = useState([]);
    const [annotationsdivs, setannotationsdivs] = useState([]);
    const [labelsdivs, setlabelsdivs] = useState([]);
    const [linuxCapabiltiesdivs, setlinuxCapabilitiesdivs] = useState([]);
    const [gitubreposivtdivs, setgitubreposivtdivs] = useState([]);
    const [tolerationsdivs, settolerationsdivs] = useState([]);
    const [persistentVolumeClaimdivs, setpersistentVolumeClaimdivs] = useState([]);
    const [S3storagedivs, setS3storagedivs] = useState([]);


    // onlcik Add S3 storage divs
    const addS3storagedivs = () => {
        setS3storagedivs((prevDivs) => [
            ...prevDivs,
            <div className="flex flex-row flex-wrap pt-3 border border-gray-200 mb-2 md:p-4 p-2">
                <div className="flex-1">

                    <fieldset className="mb-[15px] flex flex-col justify-start pr-2">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="accessKey">
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

                    <fieldset className="md:mb-[10px] w-full flex flex-col justify-start pr-2">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="secretkey">
                            Secret Key <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                            id="S3storage-secret-key"
                            required

                        />
                    </fieldset>
                </div>
                <div className='flex-1'>
                    <fieldset className="mb-[15px] w-full flex flex-col justify-start pr-2">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="bucketname">
                            Bucket Name
                        </label>
                        <input
                            className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                            id="S3storage-bucket-name"
                            required

                        />
                    </fieldset>
                </div>
                <div className='flex-1'>

                    <fieldset className="mb-[15px] w-full flex flex-col justify-start pr-2">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="endpoint-url">
                            Endpoint URL <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                            id="Endpoint-URL"
                            required

                        />
                    </fieldset>

                </div>
                <div className="flex-1">

                    <fieldset className="mb-[15px] w-full flex flex-col justify-start pr-2">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="targetpath">
                            Target Path <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                            id="S3stroage-target-path"
                            required
                        />
                    </fieldset>

                </div>


            </div>,
        ]);
    };

    //onClick Remove S3 storage divs
    const removeS3storagedivs = () => {
        setS3storagedivs((prevDivs) => {
            // Create a copy of the previous divs array and remove the element at indexToRemove 
            const updatedDivs = [...prevDivs];
            updatedDivs.splice(updatedDivs.length - 1, 1);
            return updatedDivs;
        });
    };

    //onClick add persistent volume claim divs	
    const addpersistentVolumeClaimdivs = () => {
        setpersistentVolumeClaimdivs((prevDivs) => [
            ...prevDivs,
            <div className="flex flex-row flex-wrap pt-3 border border-gray-200 mb-2 p-4">

                <fieldset className="flex-1 mb-[15px] w-full  justify-start pt-3  p-15">
                    <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                        id="Persistent-volume-claim-name"
                        placeholder="like sensie/fs"

                    />

                </fieldset>

                <fieldset className="flex-1 mb-[15px] w-full justify-start pt-3  p-15">
                    <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="ContainerTargetPath">
                        Container Target Path
                    </label>
                    <input
                        className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                        id="container-target-path"
                        placeholder="like sensie/fs"

                    />

                </fieldset>

                <div className="flex justify-between  md:w-5/12 w-full pt-3">
                    <label className="pr-2 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Read Only">
                        Read Only
                    </label>
                    <Switch.Root
                        className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                        id="storage-read-only"
                        style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
                    >
                        <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                    </Switch.Root>

                </div>
            </div>,
        ]);
    };

    //onClick remove persistent volume claim divs
    const removepersistentVolumeClaimdivs = () => {
        setpersistentVolumeClaimdivs((prevDivs) => {
            // Create a copy of the previous divs array and remove the element at indexToRemove
            const updatedDivs = [...prevDivs];
            updatedDivs.splice(updatedDivs.length - 1, 1);
            return updatedDivs;
        });
    };

    //onClick add tolerations divs
    const addtolerationsdivs = () => {
        settolerationsdivs((prevDivs) => [
            ...prevDivs,
            <div className="flex flex-col flex-wrap border border-gray-200 p-3 mb-2">

                <div className="flex flex-row flex-wrap pt-3">
                    <div className="flex-1 pr-7">

                        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Key">
                                Key <span className="text-[12px] leading-none text-red-700">*</span>
                            </label>
                            <input
                                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                                id="toleratinKey"
                                placeholder=""

                            />
                        </fieldset>
                    </div>

                    <div className="flex-1 pr-7">

                        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Operator">
                                Operator <span className="text-[12px] leading-none text-red-700">*</span>
                            </label>
                            <input
                                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                                id="tolerationOperator"
                                placeholder="e.g master"

                            />
                        </fieldset>

                    </div>

                    <div className="flex-1 pr-7">

                        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Effect">
                                Effect <span className="text-[12px] leading-none text-red-700">*</span>
                            </label>
                            <input
                                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                                id="tolerationEffect"
                                placeholder="e.g master"

                            />
                        </fieldset>

                    </div>

                    <div className="flex-1 pr-7">

                        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Value">
                                Value
                            </label>
                            <input
                                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                                id="tolerationValue"
                                placeholder=""

                            />
                        </fieldset>

                    </div>
                    <div className="flex-1 pr-7">

                        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="TolerationsSeconds">
                                Tolerations Seconds <span className="text-[12px] leading-none text-red-700">*</span>
                            </label>
                            <input
                                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                                id="tolerationSeconds"
                                placeholder=""

                            />
                        </fieldset>

                    </div>


                </div>

            </div>,
        ]);
    };

    //onClick remove tolerations divs
    const removetolerationsdivs = () => {
        settolerationsdivs((prevDivs) => {

            const updatedDivs = [...prevDivs];
            updatedDivs.splice(updatedDivs.length - 1, 1);
            return updatedDivs;
        });
    };



    const addgithubreposdivs = () => {
        setgitubreposivtdivs((prevDivs) => [
            ...prevDivs,
            <div className="flex flex-col flex-wrap border border-gray-200 p-3 mb-2">

                <div className="flex flex-row flex-wrap pt-3">
                    <div className="flex-1 pr-7">

                        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="SourceRepository">
                                Source Repository <span className="text-[12px] leading-none text-red-700">*</span>
                            </label>
                            <input
                                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                                id="Sourcereposiory"
                                placeholder="https//github.com/username/repo"
                                required
                            />
                        </fieldset>
                    </div>

                    <div className="flex-1">

                        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Branch">
                                Branch
                            </label>
                            <input
                                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                                id="branch"
                                placeholder="e.g master"

                            />
                        </fieldset>
                    </div>


                    <div className="flex-1">

                        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Revision">
                                Revision
                            </label>
                            <input
                                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                                id="revision"
                                placeholder=""

                            />
                        </fieldset>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap pt-3">
                    <div className="flex-1 pr-7">

                        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Username">
                                Username
                            </label>
                            <input
                                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                                id="username"
                            />
                        </fieldset>
                    </div>

                    <div className="flex-1">

                        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Password">
                                Password
                            </label>
                            <input
                                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                                id="passsword"
                                placeholder="e.g master"

                            />
                        </fieldset>
                    </div>


                    <div className="flex-1">

                        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="TargetDirectory ">
                                Target Directory <span className="text-[12px] leading-none text-red-700">*</span>
                            </label>
                            <input
                                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                                id="targetDirectory"
                                placeholder="e.g /home/dir"
                                required
                            />
                        </fieldset>
                    </div>
                </div>
            </div>,
        ]);
    };

    const removegithubreposdivs = () => {
        setgitubreposivtdivs((prevDivs) => {
            // Create a copy of the previous divs array and remove the element at indexToRemove
            const updatedDivs = [...prevDivs];
            updatedDivs.splice(updatedDivs.length - 1, 1);
            return updatedDivs;
        });
    };


    const addlinuxCapabilitiesdivs = () => {
        setlinuxCapabilitiesdivs((prevDivs) => [
            ...prevDivs,
            <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3 p-15">

                <input
                    className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                    id="linux-capabilities"

                />

            </fieldset>,
        ]);
    };

    const removelinuxCapabilitiesdivs = () => {
        setlinuxCapabilitiesdivs((prevDivs) => {
            const updatedDivs = [...prevDivs];
            updatedDivs.splice(updatedDivs.length - 1, 1);
            return updatedDivs;
        });
    };

    const addNodePool = () => {
        setnodeDivs((prevDivs) => [
            ...prevDivs,
            <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">

                <input
                    className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                    id="node-pools"
                    placeholder="Add Node Pools"
                    name="nodepools"
                    onChange={onChange}

                />

            </fieldset>,
        ]);
    };

    const removeNodePool = () => {
        setnodeDivs((prevDivs) => {
            const updatedDivs = [...prevDivs];
            updatedDivs.splice(updatedDivs.length - 1, 1);
            return updatedDivs;
        });
    };


    const addEnvVariabledivs = () => {
        setenvVariabledivs((prevDivs) => [
            ...prevDivs,
            <div className="flex flex-row flex-wrap pt-3">
                <div className="flex-1 pr-7">

                    <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Key">
                            Key
                        </label>
                        <input
                            className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                            id="EnvVariableKey"

                        />
                    </fieldset>
                </div>

                <div className="flex-1">

                    <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Value">
                            Value
                        </label>
                        <input
                            className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                            id="EnvVariableValue"

                        />
                    </fieldset>
                </div>
            </div>,
        ]);
    };

    const removeEnvVariabledivs = () => {
        setenvVariabledivs((prevDivs) => {
            // Create a copy of the previous divs array and remove the element at indexToRemove
            const updatedDivs = [...prevDivs];
            updatedDivs.splice(updatedDivs.length - 1, 1);
            return updatedDivs;
        });
    };

    const addAnnotationsdivs = () => {
        setannotationsdivs((prevDivs) => [
            ...prevDivs,
            <div className="flex flex-row flex-wrap pt-3">
                <div className="flex-1 pr-7">

                    <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Key">
                            Key
                        </label>
                        <input
                            className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                            id="annotationKey"
                            placeholder="Key"

                        />
                    </fieldset>
                </div>

                <div className="flex-1">

                    <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Value">
                            Value
                        </label>
                        <input
                            className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                            id="annotationValue"
                            placeholder="Value"

                        />
                    </fieldset>
                </div>
            </div>,
        ]);
    };

    const removeAnnotationdivs = () => {
        setannotationsdivs((prevDivs) => {
            // Create a copy of the previous divs array and remove the element at indexToRemove
            const updatedDivs = [...prevDivs];
            updatedDivs.splice(updatedDivs.length - 1, 1);
            return updatedDivs;
        });
    };


    const addlabelsdivs = () => {
        setlabelsdivs((prevDivs) => [
            ...prevDivs,
            <div className="flex flex-row flex-wrap pt-3">
                <div className="flex-1 pr-7">

                    <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Key">
                            Key
                        </label>
                        <input
                            className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                            id="labelKey"
                            placeholder="Key"

                        />
                    </fieldset>
                </div>

                <div className="flex-1">

                    <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Value">
                            Value
                        </label>
                        <input
                            className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                            id="labelValue"
                            placeholder="Value"

                        />
                    </fieldset>
                </div>
            </div>,
        ]);
    };

    const removelabeldivs = () => {
        setlabelsdivs((prevDivs) => {

            const updatedDivs = [...prevDivs];
            updatedDivs.splice(updatedDivs.length - 1, 1);
            return updatedDivs;
        });
    };


    //const [credentials, setcredentials] = useState({ project: "", name: "", gpus: "", image: "", distributedtraining: false },);
    const [credentials, setCredentials] = useState({
        project: "",
        name: "",
        gpus: "",
        image: "",
        distributedtraining: false,
        nodepools: [],
        envvariables: [],
        annotations: [],
        labels: [],
        linuxcapabilities: [],
        gitubrepos: [],
        tolerations: [],
        persistentvolumeclaim: [],
        s3storage: [],
    });
    
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        //console.log(credentials.password,"  ",credentials.cpassword);
    }
    
    const handleSubmit = () => {
        console.log("button clicked")
        console.log(credentials);
    }

        return (
            <>
                <div className="text-center font-bold pb-3">
                    <p>Interactive</p>
                </div>
                <div className="flex flex-row flex-wrap pt-3">
                <fieldset className="flex-1 mb-[15px] w-full flex flex-col justify-start mr-2">
                    <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="project">
                        Project
                    </label>
                    <input
                        className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                        id="project"
                        name="project"
                        onChange={onChange}
                        required
                    />
                </fieldset>

                    <div className="flex-1 mr-2">

                        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                                id="name"
                                name="name"
                                onChange={onChange}
                                required
                            />
                        </fieldset>
                    </div>

                    <div className="flex-1 mr-2">

                        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="gpus">
                                GPUs
                            </label>
                            <input
                                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                                id="gpus"
                                name="gpus"
                                onChange={onChange}
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
                        name="image"
                        onChange={onChange}
                        required
                    />
                </fieldset>

                <div className="flex flex-row justify-between pt-3 md:w-5/12 w-full">
                    <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="distributed mpi">
                        Distributed Training (MPI)
                    </label>
                    <Switch.Root
                        className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                        id="distributedtraining"
                        style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
                        onChange={onChange}
                    >
                        <Switch.Thumb className={`block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]`} />
                    </Switch.Root>

                </div>
                <div className="flex flex-row justify-between md:w-5/12 w-full pt-3">
                    <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="jupyter notebook">
                        Jupyter notebook
                    </label>
                    <Switch.Root
                        className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                        id="jupyter-notebook"
                        style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
                    >
                        <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                    </Switch.Root>

                </div>

                <div className="flex flex-row justify-between md:w-5/12 w-full pt-3">
                    <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="tensor board">
                        TensorBoard
                    </label>
                    <Switch.Root
                        className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                        id="tensor-board"
                        style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
                    >
                        <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                    </Switch.Root>

                </div>

                <div>
                    <Accordion.Root
                        className="mt-3 w-full rounded-md"
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
                                <div className="p-4 border border-slate-300 ">
                                    {/* Add */}
                                    <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3 p-15">
                                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Node pools">
                                            Node pools
                                        </label>

                                        <div className="flex flex-col">
                                            {nodedivs.map((div, index) => (
                                                <div id={`nodepool${index}`} key={index}>{div}</div>
                                            ))}
                                        </div>
                                        <div className="flex flex-row justify-start items-start">

                                            <button onClick={addNodePool} className="text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200 w-11 p-2">ADD</button>
                                            <button onClick={removeNodePool} className={`${nodedivs.length == 0 ? "hidden" : ""} text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200 w-11 p-2`}>REMOVE</button>
                                        </div>
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

                                    <div className="flex flex-row justify-between md:w-5/12 w-full pt-3">
                                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Large SHM">
                                            Large SHM
                                        </label>
                                        <Switch.Root
                                            className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                                            id="large-shm"
                                            style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
                                        >
                                            <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                                        </Switch.Root>

                                    </div>

                                </div>


                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item className="mb-2" value="item-2">
                            <Accordion.Trigger className="w-full">
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
                                <div className="p-4 border border-slate-300 ">
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
                                    <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                                        <label className="text-[13px] leading-none text-violet12 block" htmlFor="Environmental Variables">
                                            Environmental Variables
                                        </label>

                                        <div className="flex flex-col pl-4 pr-4 pb-2">
                                            {envVariabledivs.map((div, index) => (
                                                <div id={`ennVariabledivs${index}`} key={index}>{div}</div>
                                            ))}
                                        </div>
                                        <div className="flex flex-row justify-start items-start mt-2">

                                            <button onClick={addEnvVariabledivs} className="text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200 p-2">ADD</button>
                                            <button onClick={removeEnvVariabledivs} className={`${envVariabledivs.length == 0 ? "hidden" : ""} text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200 p-2`}>REMOVE</button>
                                        </div>

                                    </fieldset>

                                    <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                                        <label className="text-[13px] leading-none text-violet12 block" htmlFor="Environmental Variables">
                                            Annotations
                                        </label>

                                        <div className="flex flex-col pl-4 pr-4 pb-2">
                                            {annotationsdivs.map((div, index) => (
                                                <div id={`annotationsdivs${index}`} key={index}>{div}</div>
                                            ))}
                                        </div>
                                        <div className="flex flex-row justify-start items-start mt-2">

                                            <button onClick={addAnnotationsdivs} className="text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200 p-2">ADD</button>
                                            <button onClick={removeAnnotationdivs} className={`${annotationsdivs.length == 0 ? "hidden" : ""} text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200  p-2`}>REMOVE</button>
                                        </div>

                                    </fieldset>

                                    <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Labels">
                                            Labels
                                        </label>
                                        <div className="flex flex-col pl-4 pr-4 pb-2">
                                            {labelsdivs.map((div, index) => (
                                                <div id={`labelsdivs${index}`} key={index}>{div}</div>
                                            ))}
                                        </div>
                                        <div className="flex flex-row justify-start items-start mt-2">

                                            <button onClick={addlabelsdivs} className="text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200 p-2">ADD</button>
                                            <button onClick={removelabeldivs} className={`${labelsdivs.length == 0 ? "hidden" : ""} text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200  p-2`}>REMOVE</button>
                                        </div>

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

                                    <div className="flex flex-row justify-between md:w-5/12 w-full pt-3">
                                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Override Uid and gid">
                                            Override UID & GID
                                        </label>
                                        <Switch.Root
                                            className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                                            id="override-uid-gid"
                                            style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
                                        >
                                            <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                                        </Switch.Root>

                                    </div>
                                    <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                                            Linux Capabilities
                                        </label>
                                        <div className="flex flex-col pl-4 pr-4 pb-2">
                                            {linuxCapabiltiesdivs.map((div, index) => (
                                                <div id={`linuxCapabilitiesdivs${index}`} key={index}>{div}</div>
                                            ))}
                                        </div>
                                        <div className="flex flex-row justify-start items-start mt-2">

                                            <button onClick={addlinuxCapabilitiesdivs} className="text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200 p-2">ADD</button>
                                            <button onClick={removelinuxCapabilitiesdivs} className={`${linuxCapabiltiesdivs.length == 0 ? "hidden" : ""} text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200  p-2`}>REMOVE</button>
                                        </div>

                                    </fieldset>

                                    <div className="flex flex-row justify-between md:w-5/12 w-full pt-3">
                                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Set stdin">
                                            Set Stdin
                                        </label>
                                        <Switch.Root
                                            className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                                            id="Set-stdin"
                                            style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
                                        >
                                            <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                                        </Switch.Root>

                                    </div>

                                    <div className="flex flex-row justify-between md:w-5/12 w-full pt-3">
                                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Allocate tty">
                                            Allocate TTY
                                        </label>
                                        <Switch.Root
                                            className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                                            id="allocate-tty"
                                            style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
                                        >
                                            <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                                        </Switch.Root>

                                    </div>

                                    <div className="flex flex-row justify-between md:w-5/12 w-full pt-3">
                                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Working directory path">
                                            Working Directory Path
                                        </label>
                                        <Switch.Root
                                            className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                                            id="Workiing-directory-path"
                                            style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
                                        >
                                            <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                                        </Switch.Root>

                                    </div>

                                    <div className="flex flex-row justify-between md:w-5/12 w-full pt-3">
                                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Create Home directory">
                                            Create Home Directory
                                        </label>
                                        <Switch.Root
                                            className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                                            id="create-home-directory"
                                            style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
                                        >
                                            <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                                        </Switch.Root>

                                    </div>
                                    <div className="flex flex-row justify-between md:w-5/12 w-full pt-3">
                                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Host Ipc">
                                            Host IPC
                                        </label>
                                        <Switch.Root
                                            className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                                            id="host-ipc"
                                            style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
                                        >
                                            <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                                        </Switch.Root>

                                    </div>
                                    <div className="flex flex-row justify-between md:w-5/12 w-full pt-3">
                                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Host Network">
                                            Host Network
                                        </label>
                                        <Switch.Root
                                            className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                                            id="host-network"
                                            style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
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
                                    <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Job url">
                                            Job Url
                                        </label>
                                        <fieldset className="pl-4 pr-4 pb-2 mb-[15px] w-full flex flex-col justify-start pt-3 ">
                                            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Container Port">
                                                Container Port
                                            </label>
                                            <input type="number"
                                                className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                                                id="container-port"

                                            />
                                            <div className="flex flex-row justify-between md:w-5/12 w-full pt-3">
                                                <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="custom url">
                                                    Custom URL
                                                </label>
                                                <Switch.Root
                                                    className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                                                    id="custom-url"
                                                    style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
                                                >
                                                    <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                                                </Switch.Root>

                                            </div>

                                        </fieldset>

                                    </fieldset>

                                    <div className="flex flex-row justify-between md:w-5/12 w-full pt-3">
                                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="allow privilege">
                                            Allow Privilege Escalation
                                        </label>
                                        <Switch.Root
                                            className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                                            id="allow-privilege-escalation"
                                            style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
                                        >
                                            <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                                        </Switch.Root>

                                    </div>


                                    <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Public Git Repository">
                                            Public Git Repository
                                        </label>
                                        <div className="flex flex-col pl-4 pr-4">
                                            {gitubreposivtdivs.map((div, index) => (
                                                <div id={`github${index}`} key={index}>{div}</div>
                                            ))}
                                        </div>
                                        <div className="flex flex-row justify-start items-start">

                                            <button onClick={addgithubreposdivs} className="text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200 p-2">ADD</button>
                                            <button onClick={removegithubreposdivs} className={`${gitubreposivtdivs.length == 0 ? "hidden" : ""} text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200  p-2`}>REMOVE</button>
                                        </div>

                                    </fieldset>


                                    <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                                            Tolerations
                                        </label>
                                        <div className="flex flex-col pl-4 pr-4">
                                            {tolerationsdivs.map((div, index) => (
                                                <div id={`tolerations${index}`} key={index}>{div}</div>
                                            ))}
                                        </div>
                                        <div className="flex flex-row justify-start items-start">

                                            <button onClick={addtolerationsdivs} className="text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200 p-2">ADD</button>
                                            <button onClick={removetolerationsdivs} className={`${tolerationsdivs.length == 0 ? "hidden" : ""} text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200  p-2`}>REMOVE</button>
                                        </div>

                                    </fieldset>

                                </div>

                            </Accordion.Content>

                        </Accordion.Item>

                        <Accordion.Item className="mb-2" value="Scheduling">
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
                                <div className="p-4 border border-slate-300 ">
                                    <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3  p-15">
                                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="node type affinity">
                                            Node Type Affinity
                                        </label>
                                        <input
                                            className="grow shrink-0 rounded px-2.5 text-[12px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[24px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                                            id="node-type-affinity"

                                        />

                                    </fieldset>
                                    <div className="flex flex-row justify-between md:w-5/12 w-full pt-3">
                                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="Topology Aware Scheduling">
                                            Topology Aware Scheduling
                                        </label>
                                        <Switch.Root
                                            className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                                            id="topology-aware-scheduling"
                                            style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
                                        >
                                            <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                                        </Switch.Root>

                                    </div>
                                    <div className="flex flex-row justify-between md:w-5/12 w-full pt-3">
                                        <label className="pr-6 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                                            Preemptible
                                        </label>
                                        <Switch.Root
                                            className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                                            id="preemtible"
                                            style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
                                        >
                                            <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                                        </Switch.Root>

                                    </div>

                                </div>

                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item className="mb-2 w-full" value="item-4">
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
                                <div className="p-4 border border-slate-300 ">
                                    <div className="flex flex-row justify-between md:w-5/12 w-full pt-3">
                                        <label className="pr-2 pt-1 text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                                            Existing PVC
                                        </label>
                                        <Switch.Root
                                            className="w-[35px] h-[19px] rounded-full relative bg-slate-600 data-[state=checked]:bg-slate-400 outline-none cursor-default"
                                            id="existing-pvc"
                                            style={{ 'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)' }}
                                        >
                                            <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                                        </Switch.Root>

                                    </div>

                                    <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3">
                                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                                            Persistent Volume Claims
                                        </label>
                                        <div className="flex flex-col">
                                            {persistentVolumeClaimdivs.map((div, index) => (
                                                <div id={`persistentVolumeClaim${index}`} key={index}>{div}</div>
                                            ))}
                                        </div>
                                        <div className="flex flex-row justify-start items-start">

                                            <button onClick={addpersistentVolumeClaimdivs} className="text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200 p-2">ADD</button>
                                            <button onClick={removepersistentVolumeClaimdivs} className={`${persistentVolumeClaimdivs.length == 0 ? "hidden" : ""} text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200  p-2`}>REMOVE</button>
                                        </div>

                                    </fieldset>
                                    <fieldset className="mb-[15px] w-full flex flex-col justify-start pt-3 ">
                                        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="S3Storage">
                                            S3 Storage
                                        </label>

                                        <div className="">
                                            {S3storagedivs.map((div, index) => (
                                                <div id={`S3storagedivs${index}`} key={index}>{div}</div>
                                            ))}
                                        </div>
                                        <div className="flex flex-row justify-start items-start">

                                            <button onClick={addS3storagedivs} className="text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200 p-2">ADD</button>
                                            <button onClick={removeS3storagedivs} className={`${S3storagedivs.length == 0 ? "hidden" : ""} text-blue-600 text-start font-bold text-[12px] hover:bg-slate-200  p-2`}>REMOVE</button>
                                        </div>

                                    </fieldset>

                                </div>

                            </Accordion.Content>
                        </Accordion.Item>

                    </Accordion.Root>
                    <div className="flex flex-row-reverse fixed bottom-0 right-0 bg-white  border-t-2 border-slate-100 w-full text-center">
                        <button onClick={handleSubmit} className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 my-2 mr-4">Submit</button>
                    </div>

                </div>

            </>
        );
    }

    export default Interactive;
