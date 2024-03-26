import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN, // Authentification avec le token d'accès personnel
});

const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await octokit.repos.listForAuthenticatedUser(); // Récupération des projets de l'utilisateur authentifié
        setProjects(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des projets GitHub :', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Mes projets GitHub</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Langage principal : {project.language}</p>
            {/* Ajoutez d'autres informations pertinentes ici */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProjects;