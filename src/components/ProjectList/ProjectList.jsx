import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Project from "./Project";

import {
  Wrapper,
  SubWrapper,
  DropapbleContainer,
  ColumnTitle,
} from "./ProjectStyled";

const onDragEnd = (result, columns, changeColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    const data = {
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    }
    changeColumns(data)
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);

    const data = {
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    }
    changeColumns(data)
  }
};


function ProjectList({ Columns, addTags, removeTags, changeColumns, filterWord }) {
  const checkTag = (item) => {
    // console.log('checkTag', item)
    if (!filterWord) return true;
    return item.tags.indexOf(filterWord) !== -1;
  }
  return (
    <Wrapper>
      <SubWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            flexWrap: "wrap",
          }}
        >
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, Columns, changeColumns)}
          >
            {Object.entries(Columns).map(([columnId, column], index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: 10,
                  }}
                  key={columnId}
                >
          
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <DropapbleContainer
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                                ? "gray"
                                : "#393E46",
                              padding: 8,
                              boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.75)",
                              borderRadius: 5,
                              minHeight: 200,
                            }}
                          >
                            <div>
                            <ColumnTitle>{column.name}</ColumnTitle>
                              {
                                column.items.map((item, index) => {
                                  if (checkTag(item)) {
                                    return(
                                      <Project
                                        key={index}
                                        columnID={columnId}
                                        project={item}
                                        index={index}
                                        addTags={addTags}
                                        removeTags={removeTags}
                                      />
                                    );
                                  }
                                })
                            }
                              {provided.placeholder}
                            </div>
                          </DropapbleContainer>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
        </div>
      </SubWrapper>
    </Wrapper>
  );
}

export default ProjectList;
