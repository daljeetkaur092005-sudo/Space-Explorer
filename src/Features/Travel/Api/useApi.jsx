import axios from "axios";

export const getfeatured = async () => {
  const response = await axios.get(
    "https://science.nasa.gov/wp-json/wp/v2/apod-basic/",
  );

  return response.data;
};

export const eventData = async (search) => {
  const response = await axios.get(
    `https://images-api.nasa.gov/search?q=${search}&media_type=image`,
  );
  
  return response.data.collection.items.slice(0, 10);
};
