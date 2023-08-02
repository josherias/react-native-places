import axios from "axios";

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
      {
        params: {
          bl_latitude: "11.847676",
          tr_latitude: "12.838442",
          bl_longitude: "109.095887",
          tr_longitude: "109.149359",
          limit: "30",
          currency: "USD",
          open_now: "false",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "437198176dmshed37f57ce83b264p1e8feejsned2f346d69de",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

// const options = {
//   method: "GET",
//   url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359",
//     restaurant_tagcategory_standalone: "10591",
//     restaurant_tagcategory: "10591",
//     limit: "30",
//     currency: "USD",
//     open_now: "false",
//     lunit: "km",
//     lang: "en_US",
//   },
//   headers: {
//     "X-RapidAPI-Key": "437198176dmshed37f57ce83b264p1e8feejsned2f346d69de",
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//   },
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
