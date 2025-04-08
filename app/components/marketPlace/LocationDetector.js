import { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function LocationDetector() {
  const [location, setLocation] = useState(null); // Store location name
  const [eta, setEta] = useState(null); // Store ETA in mins
  const [loading, setLoading] = useState(true);

  // Auto-detect location
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Location not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        // Simulate API to get city/locality name
        const locationName = await mockReverseGeocode(latitude, longitude);
        setLocation(locationName);

        // Simulate API to get ETA based on location
        const estimatedTime = await mockFetchETA(locationName);
        setEta(estimatedTime);
        setLoading(false);
      },
      () => {
        setLocation("Permission denied");
        setLoading(false);
      }
    );
  }, []);

  // Mock reverse geocoding
  const mockReverseGeocode = async (lat, lng) => {
    // Replace with real API later (e.g., Google Maps, OpenCage, etc.)
    return "Sector 21, Gurugram";
  };

  // Mock ETA fetch
  const mockFetchETA = async (loc) => {
    // Replace with backend integration
    return 15; // in minutes
  };

  return (
    <div className="bg-background-section flex items-center gap-2 border border-border bg-muted px-3 py-2 rounded-full cursor-pointer hover:bg-accent/10 transition">
      <HiOutlineLocationMarker className="w-5 h-5 text-accent" />
      <div className="text-sm text-primary-text font-medium">
        {loading ? (
          "Detecting location..."
        ) : location === "Permission denied" ? (
          "Enable location access"
        ) : (
          <>
            <span>Delivering to <strong>{location}</strong></span>
            {eta && <span className="ml-2 text-xs text-green-600">({eta} mins delivery)</span>}
          </>
        )}
      </div>
    </div>
  );
}
