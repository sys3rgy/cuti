module.exports = {
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "http://localhost:8000/login", // This needs to be changed
      },
    ];
  },
};
