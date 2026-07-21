"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ImageExtension from "@tiptap/extension-image";
import { useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Indent from "@/lib/tiptap/indent";

export default function ArticleEditor({
  initialContent,
  onChange,
}: {
  initialContent: string;
  onChange: (html: string) => void;
}) {
  const [uploadingImage, setUploadingImage] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        link: { openOnClick: false },
      }),
      ImageExtension,
      Indent,
    ],
    content: initialContent,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  useEffect(() => {
    return () => editor?.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!editor) return null;

  const addLink = () => {
    const url = window.prompt("URL do link:");
    if (url) editor.chain().focus().setLink({ href: url }).run();
  };

  async function handleImageFile(file: File) {
    if (!editor) return;
    setUploadingImage(true);
    try {
      const supabase = createClient();
      const path = `${Date.now()}-${file.name}`;
      const { error } = await supabase.storage
        .from("article-covers")
        .upload(path, file, { upsert: false });
      if (error) throw error;
      const { data } = supabase.storage.from("article-covers").getPublicUrl(path);
      editor.chain().focus().setImage({ src: data.publicUrl }).run();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Erro ao enviar imagem");
    } finally {
      setUploadingImage(false);
    }
  }

  return (
    <div>
      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleImageFile(file);
          e.target.value = "";
        }}
      />
      <div className="editor-toolbar">
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive("bold") ? "is-active" : ""}>
          Negrito
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive("italic") ? "is-active" : ""}>
          Itálico
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}>
          Título
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}>
          Subtítulo
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive("bulletList") ? "is-active" : ""}>
          Lista
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive("orderedList") ? "is-active" : ""}>
          Lista numerada
        </button>
        <button type="button" onClick={addLink}>
          Link
        </button>
        <button type="button" onClick={() => editor.chain().focus().outdent().run()}>
          Diminuir recuo
        </button>
        <button type="button" onClick={() => editor.chain().focus().indent().run()}>
          Aumentar recuo
        </button>
        <button type="button" onClick={() => imageInputRef.current?.click()} disabled={uploadingImage}>
          {uploadingImage ? "Enviando..." : "Imagem"}
        </button>
      </div>
      <div className="editor-content">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
