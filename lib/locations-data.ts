import { areaData } from "@/data/area-data"

export interface CityOption {
  value: string
  label: string
  state: string
}

export interface AreaOption {
  value: string
  label: string
  responseTime?: string
}

export const CITIES: CityOption[] = [
  { value: "pune", label: "Pune", state: "Maharashtra" },
  { value: "mumbai", label: "Mumbai", state: "Maharashtra" },
  { value: "hyderabad", label: "Hyderabad", state: "Telangana" },
]

/**
 * Dynamically extract and sort all registered areas for any city from areaData
 */
export function getAreasForCity(cityKey: string): AreaOption[] {
  const normalizedKey = (cityKey || "").toLowerCase().trim()
  const cityData = areaData[normalizedKey as keyof typeof areaData]
  
  if (!cityData) {
    return []
  }

  return Object.entries(cityData)
    .filter(([slug]) => slug !== "services")
    .map(([slug, area]: [string, any]) => ({
      value: slug,
      label: area?.name || slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      responseTime: area?.responseTime || "15-25 minutes",
    }))
    .sort((a, b) => a.label.localeCompare(b.label))
}

/**
 * Total count of registered localities across all serviced cities
 */
export function getTotalAreasCount(): number {
  let count = 0
  for (const city of CITIES) {
    count += getAreasForCity(city.value).length
  }
  return count
}
