"use client";

import { CopilotSidebar } from "@copilotkit/react-ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">PM Hub Copilot</h1>
        <p className="text-lg text-slate-600">
          Bem-vindo ao PM Hub. Use o chat ao lado para interagir com o seu copiloto.
        </p>
      </div>

      <CopilotSidebar
        instructions={"Você é um assistente especializado em Product Management para o PM Hub."}
        labels={{
          title: "PM Hub Sidebar",
          initial: "Como posso ajudar você hoje com seus documentos e skills?",
        }}
        defaultOpen={true}
        clickOutsideToClose={false}
      >
        <div className="flex flex-col gap-4 p-4">
            <div className="p-4 bg-white rounded-lg shadow">
                <h2 className="text-xl font-semibold">Dashboard</h2>
                <p>Aqui você verá o status dos seus documentos.</p>
            </div>
        </div>
      </CopilotSidebar>
    </main>
  );
}
