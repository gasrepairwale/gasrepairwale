/**
 * City-wise Contact Configuration
 * Pune & Mumbai: +91 83027 13127
 * Hyderabad: +91 63047 39440 (Hyderabad Hub)
 */

export function getCityContact(city?: string) {
  const isHyd = city?.toLowerCase().includes("hyderabad");
  if (isHyd) {
    return {
      phoneDisplay: "+91 63047 39440",
      phoneRaw: "+916304739440",
      phoneTel: "tel:+916304739440",
      whatsappRaw: "916304739440",
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
