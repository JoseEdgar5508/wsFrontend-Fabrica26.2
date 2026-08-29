function HeroCard({ hero }) {
  return (
    <li className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
      <img src={hero.portrait} alt={hero.name} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold">{hero.name}</h3>
        <p className="text-orange-400 uppercase text-sm tracking-wide">{hero.role}</p>
      </div>
    </li>
  )
}

export default HeroCard
