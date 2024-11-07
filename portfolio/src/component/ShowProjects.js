// src/fetchProjects.js
import React from 'react';

export async function handleProjectsCommand() {
    async function fetchGitHubProjects() {
        const response = await fetch("https://api.github.com/users/cyrilepi/repos");
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des projets GitHub");
        }
        const repos = await response.json();
        return repos.map((repo) => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
        }));
    }
    try {
        const projects = await fetchGitHubProjects();
        const newTextContent = `tapez "commandes" pour afficher la liste des commandes.
        <br><br>Mes projets :<br><br>`;

        const newContent = projects.length
            ? projects.map((project, index) => (
                <div key={index}>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {project.name}
                    </a>
                    <p>{project.description || "Aucune description disponible"}</p>
                </div>
            ))
            : "Aucun projet disponible.";

        return { newTextContent, newContent };
    } catch (error) {
        return { newTextContent: "Erreur lors de la récupération des projets.", newContent: "" };
    }
}
