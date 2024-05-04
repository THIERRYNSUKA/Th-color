import { listpeinture } from "../data/listpeinture"

function Catalogue () {
    return(
        <div>

<section className="bg-cover bg-center py-20" style={{ backgroundImage: "url('src/assets/images/zzz.png')" }}>
      <div className="container mx-auto text-center text-3xl font-bold mb-8  text-neutral-950">
        <h2>Nos collectios</h2>
        <p>
        </p>
        <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300">En savoir plus</a>
      </div>
    </section>


 <div className="plant-gallery mt-12 mx-8">
    <h2 className="text-xl font-semibold mb-4 text-center "></h2>
    <div className="grid grid-cols-4 gap-3 mb-8">
      {listpeinture.map((peint) => (
        <div key={peint.id} className="plant-card">
          <img src={peint.cover} alt={peint.name} className="lmj-plant-item-cover cover mb-2 " />
          <div className="flex items-center space-x-4">
          <p className="font-semibold">{peint.name}</p>
          <p className="text-xl text-gray-700">{peint.category}</p>
          <p className="text-sm text-gray-700">${peint.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
        
    )
}

export default Catalogue