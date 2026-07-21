"use client";

import { useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";

async function uploadToStorage(file: File) {
  const supabase = createClient();
  const path = `${Date.now()}-${file.name}`;
  const { error } = await supabase.storage
    .from("article-covers")
    .upload(path, file, { upsert: false });
  if (error) throw error;
  const { data } = supabase.storage.from("article-covers").getPublicUrl(path);
  return data.publicUrl;
}

export default function ImageUploadField({
  value,
  onChange,
}: {
  value: string;
  onChange: (url: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    setUploading(true);
    setErrorMsg("");
    try {
      const url = await uploadToStorage(file);
      onChange(url);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Erro ao enviar imagem");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="cover-upload">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="cover-upload-input"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = "";
        }}
      />

      {value ? (
        <div className="cover-upload-preview">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="Capa" />
          <div className="cover-upload-preview-actions">
            <button type="button" onClick={() => inputRef.current?.click()} disabled={uploading}>
              Trocar imagem
            </button>
            <button type="button" className="danger" onClick={() => onChange("")} disabled={uploading}>
              Remover
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="cover-upload-empty"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
        >
          {uploading ? "Enviando imagem..." : "Clique para enviar uma imagem"}
        </button>
      )}

      {errorMsg && <p className="admin-form-hint cover-upload-error">{errorMsg}</p>}
    </div>
  );
}
