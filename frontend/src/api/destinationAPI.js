const API_URL = "/api";

export const getDestinations = async () => {
  const response = await fetch(`${API_URL}/destinations`);

  if (!response.ok) {
    throw new Error("Failed to fetch destinations");
  }

  return response.json();
};