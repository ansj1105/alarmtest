"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useEffect, useState } from "react";

import { hasRichTextMarkup, plainTextToResourceHtml } from "@/lib/resource-rich-text";

function initialEditorHtml(value: string) {
  return hasRichTextMarkup(value) ? value : plainTextToResourceHtml(value);
}

export function AdminRichTextEditor({
  name,
  label,
  defaultValue,
}: {
  name: string;
  label: string;
  defaultValue?: string;
}) {
  const [initialHtml] = useState(initialEditorHtml(defaultValue ?? ""));
  const [html, setHtml] = useState(initialHtml);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          target: "_blank",
          rel: "noreferrer",
        },
      }),
      Image.configure({
        inline: false,
        allowBase64: false,
      }),
    ],
    content: initialHtml,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setHtml(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) {
      return;
    }

    setHtml(editor.getHTML());
  }, [editor]);

  function insertLink() {
    const href = window.prompt("링크 URL을 입력하세요.");

    if (!href) {
      return;
    }

    editor?.chain().focus().extendMarkRange("link").setLink({ href }).run();
  }

  function insertImage() {
    const src = window.prompt("이미지 또는 지도 이미지 URL을 입력하세요.");

    if (!src) {
      return;
    }

    const widthInput = window.prompt("이미지 너비(px)를 입력하세요.", "720");
    const width = Math.min(1400, Math.max(160, Number(widthInput) || 720));
    const alt = window.prompt("이미지 설명(alt)을 입력하세요.", "") ?? "";

    editor?.chain().focus().setImage({ src, alt, title: String(width) }).run();
  }

  return (
    <div className="field lumosAdminEditorField lumosAdminRichEditorField">
      <span>{label}</span>
      <input type="hidden" name={name} value={html} />
      <div className="lumosAdminRichToolbar" aria-label={`${label} toolbar`}>
        <button type="button" onClick={() => editor?.chain().focus().setParagraph().run()}>
          본문
        </button>
        <button type="button" onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}>
          소제목
        </button>
        <button type="button" onClick={() => editor?.chain().focus().toggleBold().run()}>
          굵게
        </button>
        <button type="button" onClick={() => editor?.chain().focus().toggleItalic().run()}>
          기울임
        </button>
        <button type="button" onClick={() => editor?.chain().focus().toggleBulletList().run()}>
          목록
        </button>
        <button type="button" onClick={insertLink}>
          링크
        </button>
        <button type="button" onClick={insertImage}>
          이미지/지도
        </button>
      </div>
      <EditorContent editor={editor} className="lumosAdminRichEditor" />
    </div>
  );
}
