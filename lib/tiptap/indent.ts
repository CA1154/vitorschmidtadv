import { Extension } from "@tiptap/core";

export interface IndentOptions {
  types: string[];
  minIndent: number;
  maxIndent: number;
  indentSize: number;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    indent: {
      indent: () => ReturnType;
      outdent: () => ReturnType;
    };
  }
}

const Indent = Extension.create<IndentOptions>({
  name: "indent",

  addOptions() {
    return {
      types: ["paragraph", "heading"],
      minIndent: 0,
      maxIndent: 8,
      indentSize: 24,
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            default: 0,
            renderHTML: (attributes) => {
              if (!attributes.indent) return {};
              return {
                style: `margin-left: ${attributes.indent * this.options.indentSize}px`,
              };
            },
            parseHTML: (element) => {
              const margin = parseInt(element.style.marginLeft || "0", 10);
              return margin ? Math.round(margin / this.options.indentSize) : 0;
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      indent:
        () =>
        ({ tr, state, dispatch }) => {
          const { from, to } = state.selection;
          let changed = false;
          state.doc.nodesBetween(from, to, (node, pos) => {
            if (this.options.types.includes(node.type.name)) {
              const current = node.attrs.indent || 0;
              if (current < this.options.maxIndent) {
                tr.setNodeAttribute(pos, "indent", current + 1);
                changed = true;
              }
            }
          });
          if (changed && dispatch) dispatch(tr);
          return changed;
        },
      outdent:
        () =>
        ({ tr, state, dispatch }) => {
          const { from, to } = state.selection;
          let changed = false;
          state.doc.nodesBetween(from, to, (node, pos) => {
            if (this.options.types.includes(node.type.name)) {
              const current = node.attrs.indent || 0;
              if (current > this.options.minIndent) {
                tr.setNodeAttribute(pos, "indent", current - 1);
                changed = true;
              }
            }
          });
          if (changed && dispatch) dispatch(tr);
          return changed;
        },
    };
  },
});

export default Indent;
