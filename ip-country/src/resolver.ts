import maxmind, { CityResponse, Reader } from "maxmind";

interface ResolveIpResponse {
  error?: string;
  data?: {
    ip: string;
    continent: string;
    country: string;
  };
}

export function resolveIp(
  lookup: Reader<CityResponse>,
  clientIp: string
): ResolveIpResponse {
  if (!maxmind.validate(clientIp)) {
    return {
      error: "Invalid IP",
    };
  }

  const location = lookup.get(clientIp);
  if (!location) {
    return {
      error: "Unknown location",
    };
  }

  if (!location.continent || !location.country) {
    return {
      error: "Unknown location",
    };
  }

  return {
    data: {
      ip: clientIp,
      continent: location.continent.names.en,
      country: location.country.names.en,
    },
  };
}