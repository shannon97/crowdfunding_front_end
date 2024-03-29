import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUsernameById } from "../api/get-user";
import useProject from "../hooks/use-project";
import NewPledgeForm from "../components/NewPledgeForm";
import PageLayout from "../components/PageLayout";
import '../index.css';

function ProjectPage () {
    const { id } = useParams();
    const { project, isLoading, error } = useProject(id);
    const [projectUsername, setProjectUsername] = useState('');
    const [pledgesWithSupporterNames, setPledgesWithSupporterNames] = useState([]);
    const [totalRaised, setTotalRaised] = useState(0);

    useEffect(() => {
        if (!isLoading && !error && project) {

            const fetchProjectUsername = async () => {
                if (project.owner) {
                    try {
                        const username = await getUsernameById(project.owner);
                        setProjectUsername(username);
                    } catch (error) {
                        console.error("Error fetching 'Posted By:' details..", error);
                        setProjectUsername("Unknown");
                    }
                }
            };

            const fetchPledgeData = async () => {
                const pledges = await Promise.all(project.pledges.map(async (pledgeData) => {
                    let supporterName = await getUsernameById(pledgeData.supporter);

                    if (pledgeData.anonymous) {
                        supporterName = "Anonymous";
                    }

                    return { ...pledgeData, supporterName };
                }));
                setPledgesWithSupporterNames(pledges);

                const total = pledges.reduce((sum, pledge) => sum + pledge.amount, 0);
                setTotalRaised(total);
            };

            fetchProjectUsername();
            fetchPledgeData();
        }
    }, [isLoading, error, project]);

    if (isLoading) {
        return (<p>Loading... Please Wait...</p>)
    }

    if (error) {
        return (<p>{error.message}</p>)
    }


    return (
        <PageLayout>
            <div className="px-10 flex flex-col items-center">
                <div className="w-full bg-white border-t border-b p-4 shadow-sm" style={{ borderColor: '#00bcd4' }}>
                    <h1 className="text-4xl font-bold text-slate-800 underline text-center mb-5">{project.title} | Goal: ${project.goal}</h1>
                </div>

                <div className="px-5 lg:px-10 flex flex-col lg:flex-row items-center w-full justify-center gap-4 lg:gap-10 mt-5 lg:mt-8">
                    <div className="w-full lg:w-1/2 xl:w-1/3">
                        <div className="relative" style={{ width: '100%', paddingBottom: '100%', borderRadius: '50%', overflow: 'hidden', border: '2px solid #00bcd4', boxShadow: '0 4px 6px -1px rgba(0, 188, 212, 0.5), 0 2px 4px -2px rgba(0, 188, 212, 0.5)' }}>
                            <img src={project.image} alt="Project" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                        </div>
                    </div>

                    <div className="flex-grow space-y-4 w-full lg:w-1/2 xl:w-2/3">
                        <div className="bg-white border rounded-md p-4 shadow-sm" style={{ borderColor: '#00bcd4' }}>
                            <h3 className="text-lg"><span className="font-bold">Posted By: </span> {projectUsername}</h3>
                        </div>
                        <div className="bg-white border rounded-md p-4 shadow-sm" style={{ borderColor: '#00bcd4' }}>
                            <h3 className="text-lg"><span className="font-bold">Pet Name: </span> {project.pet_name}</h3>
                        </div>
                        <div className="bg-white border rounded-md p-4 shadow-sm" style={{ borderColor: '#00bcd4' }}>
                            <h3 className="text-lg"><span className="font-bold">Description: </span> {project.description}</h3>
                        </div>
                        <div className="bg-white border rounded-md p-4 shadow-sm" style={{ borderColor: '#00bcd4' }}>
                            <h3 className="text-lg"><span className="font-bold">Created On: </span> {new Date(project.date_created).toLocaleDateString('en-GB')}</h3>
                        </div>
                        <div className="bg-white border rounded-md p-4 shadow-sm" style={{ borderColor: '#00bcd4' }}>
                            <h3 className="text-xl"><span className="font-bold">Total Raised: </span> ${totalRaised}</h3>
                        </div>
                        <div className="bg-white border rounded-md p-4 shadow-sm" style={{ borderColor: '#00bcd4' }}>
                        <h3 className="text-lg"><span className="font-bold">Project Status:</span> {project.is_open ? 'Open for donations' : 'Fully funded'}</h3>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center w-full justify-center mt-7 bg-white border-t border-b p-4 shadow-sm" style={{ borderColor: '#00bcd4' }}>
                    <NewPledgeForm projectId={id} />
                </div>

                <div className="mt-7 w-full bg-white border-t border-b p-4 shadow-sm" style={{ borderColor: '#00bcd4' }}>
                    <div className="flex flex-row items-start w-full">
                        <h3 className="text-xl font-bold mt-5">Pledges:</h3>
                    </div>
                    <div className="flex flex-row items-start w-full mt-2.5 gap-10">
                        <ul className="list-disc pl-5">
                            {pledgesWithSupporterNames.map((pledgeData, key) => (
                                <li key={key} className="text-lg">
                                    {`$${pledgeData.amount} donated by ${pledgeData.supporterName} ${pledgeData.comment ? `| ${pledgeData.comment}` : ''}`}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default ProjectPage;