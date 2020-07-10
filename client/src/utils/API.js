import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the google book api for
export default {
  getBooks: function(query) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + query
    );
  }
};