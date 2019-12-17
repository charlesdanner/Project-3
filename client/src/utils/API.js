import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  authTest: (token,) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }

    return axios.post('/api/users/auth-test',{hello: 'hello'}, config)
  },

  saveUser: userData => axios.post('/api/users/create-new-user', userData),

  userLogIn: userData => axios.post('/api/users/login', userData),

  getUserProfile: profile => axios.get(`/api/users/get-profile/${profile}`),

  getProfile: userData => axios.post('api/users/profile', userData),

  updateProfile: userData => axios.put('/api/users/profile', userData)

};
