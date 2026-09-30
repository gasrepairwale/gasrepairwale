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
    <section className="py-14 bg-slate-50/60 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Genuine Spare Parts
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-3">
            Gas Stove &amp; Hob Brands We Service
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto mt-1">
            Our technicians carry certified replacement burners, knobs, spark plugs, and copper tubes for all major brands.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {brands.map((b, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-500 text-center flex flex-col justify-center items-center h-24 transition-colors shadow-none"
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
