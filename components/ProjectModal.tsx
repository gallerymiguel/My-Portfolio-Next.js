// src/components/ProjectModal.tsx
import React from "react";
import { Modal } from "react-bootstrap";
import { Project } from "../types/project";

interface ProjectModalProps {
  show: boolean;
  handleClose: () => void;
  project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ show, handleClose, project }) => {
  if (!project) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{project.description}</p>
        <h6>Technologies Used:</h6>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
