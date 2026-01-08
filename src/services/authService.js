const authService = {
  login: async (username, password) => {
    // Mock authentication
    if (username === "admin" && password === "admin") {
      return "dummy-jwt-token";
    }
    throw new Error("Invalid credentials");
  },
};

export default authService;
