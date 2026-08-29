import HeroCard from './HeroCard'

function HeroList({ herois }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {herois.map((hero) => (
        <HeroCard key={hero.key} hero={hero} />
      ))}
    </ul>
  )
}

export default HeroList