"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Folder, FileText, ChevronRight, ChevronDown } from "lucide-react";

interface DocNode {
  name: string;
  path: string;
  isDir: boolean;
  children?: DocNode[];
}

const SidebarItem = ({ item, depth = 0 }: { item: DocNode; depth?: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDoc = !item.isDir && item.name.endsWith(".md");
  const cleanName = item.name.replace(".md", "");

  if (!item.isDir && !isDoc) return null;

  return (
    <div className="flex flex-col">
      <div
        className={`flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md cursor-pointer text-slate-700 transition-colors ${
          depth > 0 ? "ml-4" : ""
        }`}
        onClick={() => item.isDir && setIsOpen(!isOpen)}
      >
        {item.isDir ? (
          <>
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            <Folder size={18} className="text-blue-500" />
            <span className="font-medium text-sm">{item.name}</span>
          </>
        ) : (
          <Link href={`/docs/${item.path.replace(".md", "")}`} className="flex items-center gap-2 w-full">
            <FileText size={18} className="text-slate-400" />
            <span className="text-sm">{cleanName}</span>
          </Link>
        )}
      </div>
      {item.isDir && isOpen && item.children && (
        <div className="flex flex-col">
          {item.children.map((child, idx) => (
            <SidebarItem key={idx} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const Sidebar = () => {
  const [tree, setTree] = useState<DocNode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/docs")
      .then((res) => res.json())
      .then((data) => {
        setTree(data.tree || []);
        setLoading(false);
      });
  }, []);

  return (
    <aside className="w-72 bg-white border-r border-slate-200 h-screen overflow-y-auto p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-6 px-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
          PM
        </div>
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          PM Hub Wiki
        </h1>
      </div>
      
      <div className="flex-1">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">
          Documentação
        </h2>
        {loading ? (
          <div className="px-2 text-sm text-slate-400 animate-pulse">Carregando documentos...</div>
        ) : (
          tree.map((item, idx) => <SidebarItem key={idx} item={item} />)
        )}
      </div>
    </aside>
  );
};
