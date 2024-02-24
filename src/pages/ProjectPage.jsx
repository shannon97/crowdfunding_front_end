import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUsernameById } from "../api/get-user";
import useProject from "../hooks/use-project";
import postPledge from "../api/post-pledge";
import NewPledgeForm from "../components/NewPledgeForm";

function ProjectPage () {
    const { id } = useParams();
    const { project, isLoading, error } = useProject(id);
    const [pledgesWithSupporterNames, setPledgesWithSupporterNames] = useState([]);

    useEffect(() => {
        if (!isLoading && !error) {
            const fetchPledgeData = async () => {
                const pledges = await Promise.all(project.pledges.map(async (pledgeData) => {
                    const supporterName = await getUsernameById(pledgeData.supporter);
                    return { ...pledgeData, supporterName };
                }));
                setPledgesWithSupporterNames(pledges);
            };

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
        <div>
            <img src={project.image}/>
            <h2>{project.title}</h2>
            <h3>Pet Name: {project.pet_name}</h3>
            <h3>Description: {project.description}</h3>
            <h3>Created on: {new Date(project.date_created).toLocaleDateString('en-GB')}</h3>
            <h3>{`Project Status: ${project.is_open ? 'Open for donations' : 'Fully funded'}`}</h3>
            <br/>
            <NewPledgeForm projectId={id} />
            <h3>Pledges:</h3>
            <ul>
                {pledgesWithSupporterNames.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                            {`$${pledgeData.amount} donated by ${pledgeData.supporterName} ${pledgeData.comment ? `| ${pledgeData.comment}` : ''}`}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProjectPage;