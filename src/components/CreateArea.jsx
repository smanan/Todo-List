// import { SendTwoTone } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const CreateArea = (props) => {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  const expand = () =>{
    setExpanded(true)
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
          />
        )}
        <textarea
          name="content"
          rows={isExpanded ? 3 : 1}
          placeholder="Take a note..."
          onClick={expand}
          onChange={handleChange}
          value={note.content}
        />
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
};

export default CreateArea;
