import React from "react";
import { TagContainer } from "./ProjectStyled";

const TagsInput = ({ projectId, columnID, tags, removeTags, addTags }) => {
  const addTagss = (event) => {
    if (event.target.value !== "" && !/\s/.test(event.target.value)) {
      addTags(event.target.value, columnID, projectId);
      event.target.value = "";
    }
  };

  return (
    <TagContainer>
      <ul>
        {
          tags.map((tag, index) => (
            <li key={index}>
              <span>{tag}</span>
              <span
                onClick={() => removeTags(columnID, projectId, index)}
              >
                x
              </span>
            </li>
          ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) => (event.key === "Enter" ? addTagss(event) : null)}
        placeholder="Press enter to add tags"
      />
    </TagContainer>
  );
};

export default TagsInput;
