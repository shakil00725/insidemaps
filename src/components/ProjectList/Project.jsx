import React from "react";
import { Draggable } from "react-beautiful-dnd";
import TagsInput from "./Taginput";
import { Container, Title } from "./ProjectStyled";

const Project = ({ columnID, project, index, addTags, removeTags }) => {
  return (
    <Draggable key={project.id} draggableId={project.id} index={index}>
      {(provided, snapshot) => {
        return (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...provided.draggableProps.style,
            }}
          >
            <img
              src={project.image ? project.image : "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}
              alt=""
            />
            <Title>{project.name}</Title>
            <TagsInput
              columnID={columnID}
              projectId={project.id}
              tags={project.tags}
              addTags={addTags}
              removeTags={removeTags}
            />
    
          </Container>
        );
      }}
    </Draggable>
  );
};

export default Project;
