export type AgentSaleStatus = "For Sale" | "Pending" | "Sold";

export type AgentSale = {
  address: string;
  city: string;
  zip: string;
  price: number;
  status: AgentSaleStatus;
  statusDate?: string;
  type: "Single-Family" | "Land";
  propertyPath: string;
};

export const agentSales: AgentSale[] = [
  { address: "5273 E Geary St", city: "Fresno", zip: "93727", price: 420000, status: "Sold", statusDate: "Oct 2, 2026", type: "Single-Family", propertyPath: "iron-key-real-estate/property-listings/5273-e-geary-st-93727-by9l0m" },
  { address: "2426 S Larkin Ave", city: "Fresno", zip: "93727", price: 429900, status: "For Sale", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/2426-s-larkin-ave-93727-byk7ty" },
  { address: "2105 Charlie Chambers Drive", city: "Hanford", zip: "93230", price: 404900, status: "Sold", statusDate: "Sep 21, 2026", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/2105-charlie-chambers-drive-93230-bxs5nn" },
  { address: "2630 N Del Rey Avenue", city: "Sanger", zip: "93657", price: 1660500, status: "Sold", statusDate: "Sep 8, 2026", type: "Land", propertyPath: "homesmart-pv-and-associates/property-listings/2630-north-del-rey-avenue-93657-bnrfne" },
  { address: "472 W Spruce Avenue", city: "Fresno", zip: "93650", price: 360999, status: "Sold", statusDate: "Sep 4, 2026", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/472-west-spruce-avenue-93650-bx1yei" },
  { address: "4423 E Floradora Avenue", city: "Fresno", zip: "93703", price: 242000, status: "Sold", statusDate: "Sep 4, 2026", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/4423-east-floradora-avenue-93703-bwn7nf" },
  { address: "4107 W Amherst Avenue", city: "Fresno", zip: "93722", price: 360000, status: "Sold", statusDate: "Aug 14, 2026", type: "Single-Family", propertyPath: "real-broker/property-listings/4107-west-amherst-avenue-93722-bx31i3" },
  { address: "5064 E Hammond Ave", city: "Fresno", zip: "93727", price: 345000, status: "For Sale", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/5064-e-hammond-ave-93727-bxjr1h" },
  { address: "4466 W Celeste Avenue", city: "Fresno", zip: "93722", price: 435000, status: "Sold", statusDate: "Jul 13, 2026", type: "Single-Family", propertyPath: "real-broker/property-listings/4466-west-celeste-avenue-93722-buy2ku" },
  { address: "4728 E Harvey Avenue", city: "Fresno", zip: "93702", price: 210000, status: "Sold", statusDate: "Jul 13, 2026", type: "Single-Family", propertyPath: "remax-gold-clovis/property-listings/4728-east-harvey-avenue-93702-bua7q6" },
  { address: "5798 W Acacia Avenue", city: "Fresno", zip: "93722", price: 379900, status: "Pending", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/5798-west-acacia-avenue-93722-bwm36w" },
  { address: "2344 S Backer Ave", city: "Fresno", zip: "93725", price: 360000, status: "Sold", statusDate: "Jun 12, 2026", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/2344-s-backer-ave-93725-bvbkvb" },
  { address: "1809 E Serena Avenue", city: "Fresno", zip: "93720", price: 485000, status: "Sold", statusDate: "Jun 12, 2026", type: "Single-Family", propertyPath: "capitol-real-estate-group-inc/property-listings/1809-east-serena-avenue-93720-bv40y9" },
  { address: "34358 Auberry Road", city: "Auberry", zip: "93602", price: 375000, status: "Sold", statusDate: "May 6, 2026", type: "Single-Family", propertyPath: "remax-gold-fresno/property-listings/34358-auberry-road-93602-brqy1l" },
  { address: "1692 S Bush Avenue", city: "Fresno", zip: "93727", price: 430000, status: "Sold", statusDate: "Apr 21, 2026", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/1692-south-bush-avenue-93727-bhgegx" },
  { address: "882 W National Avenue", city: "Clovis", zip: "93612", price: 355000, status: "Sold", statusDate: "Mar 30, 2026", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/882-west-national-avenue-93612-btln6y" },
  { address: "Totem Lane", city: "Squaw Valley", zip: "93675", price: 48000, status: "Sold", statusDate: "Mar 26, 2026", type: "Land", propertyPath: "exp-realty-of-california-inc/property-listings/totem-lane-93675-bq6lvq" },
  { address: "2194 S Sylmar Avenue", city: "Fresno", zip: "93725", price: 527815, status: "Sold", statusDate: "Mar 23, 2026", type: "Single-Family", propertyPath: "kb-home-northern-california-in/property-listings/2194-south-sylmar-avenue-93725-brzapq" },
  { address: "63 AR/348 Sable Street", city: "Merced", zip: "95341", price: 398990, status: "Sold", statusDate: "Feb 24, 2026", type: "Single-Family", propertyPath: "dr-horton-central-valley/property-listings/63-ar-348-sable-street-95341-brrcz5" },
  { address: "5273 W Norwich Avenue", city: "Fresno", zip: "93722", price: 385000, status: "Sold", statusDate: "Feb 5, 2026", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/5273-west-norwich-avenue-93722-bsll32" },
  { address: "4054 Arden Dr S", city: "Mayfair", zip: "93703", price: 300000, status: "Sold", statusDate: "Dec 26, 2025", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/4054-arden-dr-s-93703-bqxu8d" },
  { address: "2061 S 7th Street", city: "Fresno", zip: "93702", price: 360000, status: "Sold", statusDate: "Dec 22, 2025", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/2061-south-7th-street-93702-brpvog" },
  { address: "4837 N Ila Avenue", city: "Fresno", zip: "93705", price: 350000, status: "Sold", statusDate: "Dec 16, 2025", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/4837-north-ila-avenue-93705-br5irv" },
  { address: "2989 N Maple Avenue", city: "Franklin", zip: "95348", price: 350000, status: "Sold", statusDate: "Nov 26, 2025", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/2989-north-maple-avenue-95348-bqaetn" },
  { address: "4641 E Weldon Avenue", city: "Fresno", zip: "93703", price: 375000, status: "Sold", statusDate: "Oct 24, 2025", type: "Single-Family", propertyPath: "realty-concepts-ltd/property-listings/4641-east-weldon-avenue-93703-bpajym" },
  { address: "554 N Burgan Avenue", city: "Fresno", zip: "93727", price: 415000, status: "Sold", statusDate: "Oct 16, 2025", type: "Single-Family", propertyPath: "century-21-dan-cheney/property-listings/554-north-burgan-avenue-93727-bp4wbs" },
  { address: "2130 N Garden Avenue", city: "Fresno", zip: "93703", price: 409900, status: "Pending", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/2130-north-garden-avenue-93703-br6o07" },
  { address: "1640 4th Street", city: "Clovis", zip: "93611", price: 400000, status: "Sold", statusDate: "Oct 10, 2025", type: "Single-Family", propertyPath: "london-properties-kingsburg/property-listings/1640-4th-street-93611-bqqqjn" },
  { address: "6171 N Calaveras Street", city: "Fresno", zip: "93704", price: 430000, status: "For Sale", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/6171-north-calaveras-street-93704-bqd049" },
  { address: "1 Greenhill Road", city: "Squaw Valley", zip: "93675", price: 155000, status: "For Sale", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/1-greenhill-road-93675-bk61cu" },
  { address: "2131 E Olive Avenue", city: "Fresno", zip: "93701", price: 105000, status: "Pending", type: "Single-Family", propertyPath: "homesmart-pv-and-associates/property-listings/2131-east-olive-avenue-93701-bftr87" },
  { address: "11190 E Kings Canyon Road", city: "Sanger", zip: "93657", price: 1300000, status: "For Sale", type: "Land", propertyPath: "homesmart-pv-and-associates/property-listings/11190-east-kings-canyon-road-93657-bek5ac" },
];

export const activeAgentSales = agentSales.filter((sale) => sale.status !== "Sold");

export function getRateMyAgentUrl(sale: AgentSale) {
  return `https://www.ratemyagent.com/real-estate-agency/${sale.propertyPath}`;
}

export function getZillowSearchUrl(sale: AgentSale) {
  const query = encodeURIComponent(`${sale.address}, ${sale.city}, CA ${sale.zip}`)
    .replaceAll("%20", "-")
    .replaceAll("%2C", ",");
  return `https://www.zillow.com/homes/${query}_rb/`;
}