import React from "react";

function NoteActionButton({ variant, onClick, children }) {
  // variant: "delete" | "archive"

  return (
    <button
      type="button"
      onClick={onClick}
      className={`note-item__${variant}-button`}
      data-testid={`note-item-${variant}-button`}
    >
      {children}
    </button>
  );
}

export default NoteActionButton;