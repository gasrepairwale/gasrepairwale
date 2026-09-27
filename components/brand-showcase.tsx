export function BrandShowcase() {
  const brands = [
    { name: "Prestige", desc: "All 2, 3 & 4 Burner Models" },
    { name: "Butterfly", desc: "Glass-Top & Stainless Steel" },
    { name: "Glen", desc: "Cooktops, Hobs & Hoods" },
    { name: "Sunflame", desc: "Classic & Designer Ranges" },
    { name: "Elica", desc: "Built-In Hobs & Glass Stoves" },
    { name: "Faber", desc: "Premium Italian Kitchen Hobs" },
    { name: "Pigeon", desc: "Popular Home Gas Stoves" },
    { name: "Kaff", desc: "Built-in Hobs & Gas Appliances" },
    { name: "Bosch", desc: "European Engineered Cooktops" },
    { name: "Hindware", desc: "Smart Gas Stoves & Hobs" },
  ]

  return (
    <section className="py-14 bg-gradient-to-br from-gray-50 to-orange-50/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
            Genuine Spare Parts
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">
            Gas Stove & Hob Brands We Service
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto mt-1">
            Our technicians carry certified replacement burners, knobs, spark plugs, and copper tubes for all major brands.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {brands.map((b, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl border border-gray-200/80 hover:border-orange-500 hover:shadow-md transition-all text-center flex flex-col justify-center items-center h-24"
            >
              <span className="font-extrabold text-gray-900 text-lg tracking-tight">{b.name}</span>
              <span className="text-[11px] text-gray-500 mt-0.5 leading-tight">{b.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
