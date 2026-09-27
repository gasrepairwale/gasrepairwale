/**
 * City-wise Contact Configuration
 * Pune & Mumbai: +91 83027 13127
 * Hyderabad: +91 99508 09283 (Managed by Vikash Ji)
 */

export function getCityContact(city?: string) {
  const isHyd = city?.toLowerCase().includes("hyderabad");
  if (isHyd) {
    return {
      phoneDisplay: "+91 99508 09283",
      phoneRaw: "+919950809283",
      phoneTel: "tel:+919950809283",
      whatsappRaw: "919950809283",
      city: "Hyderabad",
    };
  }

  return {
    phoneDisplay: "+91 83027 13127",
    phoneRaw: "+918302713127",
    phoneTel: "tel:+918302713127",
    whatsappRaw: "918302713127",
    city: city || "General",
  };
}
