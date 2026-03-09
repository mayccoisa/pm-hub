"use client";

import React, { useEffect, useState } from "react";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export const AIWrapper = ({ children }: { children: React.ReactNode }) => {
  const [hasAI, setHasAI] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/docs")
      .then(res => res.json())
      .then(data => setHasAI(data.hasAI))
      .catch(() => setHasAI(false));
  }, []);

  if (hasAI === null) {
    return <div className="flex h-screen w-full items-center justify-center bg-slate-50 text-slate-400">Iniciando PM Hub...</div>;
  }

  if (!hasAI) {
    return (
      <div className="flex h-screen w-full overflow-hidden">
        {children}
        <div className="w-80 bg-slate-50 border-l border-slate-200 p-6 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-4">🤖</div>
          <h3 className="font-bold text-slate-700 mb-2">Modo IA Desativado</h3>
          <p className="text-sm text-slate-500">
            Configure a <code className="bg-slate-100 px-1 rounded">OPENAI_API_KEY</code> para ativar o Copilot.
          </p>
        </div>
      </div>
    );
  }

  return (
    <CopilotKit runtimeUrl="/api/copilotkit">
      <div className="flex h-screen w-full overflow-hidden">
        {children}
        <CopilotSidebar
          instructions={"Você é um assistente especializado em Product Management para o PM Hub."}
          labels={{
            title: "PM Hub Copilot",
            initial: "Como posso ajudar você hoje com seus documentos e skills?",
          }}
          defaultOpen={false}
          clickOutsideToClose={false}
        />
      </div>
    </CopilotKit>
  );
};
