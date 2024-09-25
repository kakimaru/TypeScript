import axios from "axios";

declare const L: any;
const ZOOM = 13;

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;
const map = L.map("map");

type NominatimGeocodingResponse = {
  features: {
    geometry: { coordinates: { lat: number; lng: number }[] };
    properties: {
      geocoding: { city: string; country: string; postcode: string };
    };
  }[];
  status: 200;
};

function searchAddressHandler(e: Event) {
  e.preventDefault();
  const enteredAddress = addressInput.value;

  // senf this to Google's API!
  axios
    .get<NominatimGeocodingResponse>(
      `https://nominatim.openstreetmap.org/?addressdetails=1&q=${encodeURI(
        enteredAddress
      )}&format=geocodejson&limit=1`
    )
    .then((res) => {
      if (!res.data.features.length) {
        throw new Error(`Could not fetch data!`);
      }

      const coordinates = [
        res.data.features[0].geometry.coordinates[1],
        res.data.features[0].geometry.coordinates[0],
      ];

      const location = {
        city: res.data.features[0].properties.geocoding.city,
        country: res.data.features[0].properties.geocoding.country,
        postcode: res.data.features[0].properties.geocoding.postcode,
      };

      map.setView(coordinates, ZOOM);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      
      L.marker(coordinates).addTo(map)
      .bindPopup(`${location.city}<br>${location.country}<br>${location.postcode}`)
      .openPopup();

    })
    .catch((err) => {
      console.error(err.message);
    });
}

form.addEventListener("submit", searchAddressHandler);
