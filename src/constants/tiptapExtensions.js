import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight } from 'lowlight';
import Dropcursor from '@tiptap/extension-dropcursor';
import Image from '@tiptap/extension-image';

const lowlight = createLowlight();

lowlight.registerAlias('html', 'xml');
lowlight.registerAlias('css', 'css');
lowlight.registerAlias('js', 'javascript');
lowlight.registerAlias('ts', 'typescript');

export { lowlight };

export const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  CodeBlockLowlight.configure({
    lowlight,
  }),
  Dropcursor,
  Image
];
