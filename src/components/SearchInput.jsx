function SearchInput({ busca, setBusca }) {
  return (
    <input
      type="text"
      placeholder="Buscar herói..."
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
      className="block mx-auto mb-8 w-full max-w-md px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  )
}

export default SearchInput