import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

export default {
  searchTerms: function(query) {
    return axios.get(
      "https://www.google.com/search?tbm=bks&hl=en&q=" +
        query
    );
  }
};
