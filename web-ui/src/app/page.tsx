export default function Home() {
  return (
    <div className="flex-1 overflow-y-auto p-8 lg:p-12 flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl">
        <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2a2.5 2.5 0 0 1 2.5 2.5M4 19.5A2.5 2.5 0 0 1 6.5 22c.6 0 1.3-.1 2-.2m-4.5.2c.6 0 1.3-.1 2-.2m0 0V5.5A2.5 2.5 0 0 1 11 3a2.5 2.5 0 0 1 2.5 2.5V21a2 2 0 0 0 2 2 2 2 0 0 0 2-2V8M13.5 13.5h5"/></svg>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Bem-vindo ao <span className="text-indigo-600">PM Hub</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          Sua central inteligente de Product Management. Navegue pelos documentos na barra lateral ou use o Copilot para agilizar suas tarefas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-indigo-200 transition-colors">
            <h3 className="font-bold text-slate-800 mb-1">📖 Wiki de Docs</h3>
            <p className="text-sm text-slate-500 line-clamp-2">Acesse frameworks, PRDs e estratégias direto do seu repositório local.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-indigo-200 transition-colors">
            <h3 className="font-bold text-slate-800 mb-1">🤖 Copilot Inteligente</h3>
            <p className="text-sm text-slate-500 line-clamp-2">Ative o chat na direita para ajuda em tempo real com seus documentos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
