import axios, { AxiosResponse } from "axios";
import { IWork } from "./types";

/**
 * An un-authorized endpoint for retrieving random works
 */
const REQUEST_URL = `https://art.askarthur.co/v1/random_works`;

/**
 * Returns Random Artworks from the database
 * @param quantity - the amount of works to return
 * @returns {Promise} - The network response data wrapped in a promise
 */
export default function getRandomWorks(quantity = 10): Promise<IWork[]> {
  // Return a new promise
  return new Promise((resolve, reject) => {
    axios
      .get(`${REQUEST_URL}?qty=${quantity}`)
      .then((axiosResponse: AxiosResponse<any>) => {
        if (axiosResponse.status === 200) {
          resolve(axiosResponse.data); // Resolve the promise and send the data directly
        } else {
          reject(axiosResponse);
        }
      })
      .catch((error) => {
        reject(error); // Error pass through
      });
  });
}
