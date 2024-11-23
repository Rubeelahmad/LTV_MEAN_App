const axios = require('axios');

const PHONE_LIST_URL = 'https://mocki.io/v1/635ce436-44ea-4137-b1dc-188e782cce2a';

class ExternalApiService {
  static async getPhoneList(retries = 3) {
    const axiosInstance = axios.create({
      timeout: 5000,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await axiosInstance.get(PHONE_LIST_URL);
        return response.data;
      } catch (error) {
        if (attempt === retries) {
          throw new Error(`Failed to fetch phone list after ${retries} attempts: ${error.message}`);
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Retrying request (attempt ${attempt + 1}/${retries})...`);
      }
    }
  }
}

module.exports = ExternalApiService;