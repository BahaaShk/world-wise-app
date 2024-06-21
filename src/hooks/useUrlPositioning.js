import { useSearchParams } from "react-router-dom";

export function useUrlPositioning() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  // this should match the same words written in the url (lat) in the url or (lng)
  return [lat, lng]
}
