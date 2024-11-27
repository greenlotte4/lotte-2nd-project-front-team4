import { useSlate } from 'slate-react';
import { Editor, Transforms } from 'slate';
import "../BoardText/TollbarButtons.css"

// MarkButton: 텍스트 스타일 (bold, italic 등)
const MarkButton = ({ format, icon }) => {
  const editor = useSlate();

  const toggleMark = (editor, format) => {
    const isActive = Editor.marks(editor)?.[format];
    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  };

  return (
    <button
      className={`toolbar-button ${isMarkActive(editor, format) ? 'active' : ''}`}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {icon}
    </button>
  );
};

// BlockButton: 블록 스타일 (heading, list 등)
const BlockButton = ({ format, icon }) => {
  const editor = useSlate();

  const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(editor, format);
    Transforms.setNodes(
      editor,
      { type: isActive ? 'paragraph' : format },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  };

  const isBlockActive = (editor, format) => {
    const { selection } = editor;
    if (!selection) return false;

    const [match] = Array.from(
      Editor.nodes(editor, {
        at: selection,
        match: (n) => n.type === format,
      })
    );
    return !!match;
  };

  return (
    <button
      className={`toolbar-button ${isBlockActive(editor, format) ? 'active' : ''}`}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {icon}
    </button>
  );
};

export { MarkButton, BlockButton };
