function Pagination({ paginaAtual, totalPaginas, setPaginaAtual }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={() => setPaginaAtual(paginaAtual - 1)}
        disabled={paginaAtual === 1}
        className="px-4 py-2 rounded-lg bg-orange-500 disabled:bg-slate-700 disabled:text-slate-500 hover:bg-orange-600 transition-colors"
      >
        Anterior
      </button>

      <span className="text-slate-300">Página {paginaAtual} de {totalPaginas}</span>

      <button
        onClick={() => setPaginaAtual(paginaAtual + 1)}
        disabled={paginaAtual === totalPaginas}
        className="px-4 py-2 rounded-lg bg-orange-500 disabled:bg-slate-700 disabled:text-slate-500 hover:bg-orange-600 transition-colors"
      >
        Próxima
      </button>
    </div>
  )
}

export default Pagination