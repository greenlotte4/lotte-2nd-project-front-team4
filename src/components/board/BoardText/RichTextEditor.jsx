import React, { useCallback, useMemo } from 'react';
import isHotkey from 'is-hotkey';
import { Editable, withReact, useSlate, Slate } from 'slate-react';
import {
  Editor,
  Transforms,
  createEditor,
  Element as SlateElement,
} from 'slate';
import { withHistory } from 'slate-history';

// 지원하는 핫키 정의
const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};

// 초기 값
const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [{ text: 'Try it out for yourself!' }],
  },
];

// 메인 컴포넌트
const RichTextExample = () => {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Toolbar>
        <MarkButton format="bold" icon="B" />
        <MarkButton format="italic" icon="I" />
        <MarkButton format="underline" icon="U" />
        <MarkButton format="code" icon="</>" />
        <BlockButton format="heading-one" icon="H1" />
        <BlockButton format="heading-two" icon="H2" />
        <BlockButton format="block-quote" icon="❝" />
      </Toolbar>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={(event) => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event)) {
              event.preventDefault();
              const mark = HOTKEYS[hotkey];
              toggleMark(editor, mark);
            }
          }
        }}
      />
    </Slate>
  );
};

// 마크 토글 함수 (Bold, Italic, Underline 등)
const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

// 마크 활성화 여부 확인
const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

// 블록 토글 함수 (Heading, Block Quote 등)
const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = ['numbered-list', 'bulleted-list'].includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      ['numbered-list', 'bulleted-list'].includes(n.type),
    split: true,
  });

  let newProperties;
  if (isList) {
    newProperties = { type: isActive ? 'paragraph' : format };
  } else {
    newProperties = { type: isActive ? 'paragraph' : format };
  }
  Transforms.setNodes(editor, newProperties);
};

// 블록 활성화 여부 확인
const isBlockActive = (editor, format) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n.type === format,
    })
  );

  return !!match;
};

// 요소 렌더링 정의
const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>;
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>;
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

// Leaf 렌더링 정의 (Bold, Italic 등)
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  if (leaf.code) {
    children = <code>{children}</code>;
  }
  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }
  return <span {...attributes}>{children}</span>;
};

// 버튼 컴포넌트 정의 (MarkButton, BlockButton)
const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <button
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {icon}
    </button>
  );
};

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <button
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {icon}
    </button>
  );
};

// 툴바 UI 정의
const Toolbar = ({ children }) => {
  return <div style={{ borderBottom: '1px solid #ddd', marginBottom: '20px' }}>{children}</div>;
};

export default RichTextExample;
