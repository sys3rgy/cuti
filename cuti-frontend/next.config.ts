module.exports = {
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "http://localhost:3000/login", // Adjust to your backend URL
      },
    ];
  },
};
