module.exports = {
  images: {
    domains: ["www.notion.so", "images.unsplash.com"],
  },
  async redirects() {
    return [
      // redirect the index page to our notion root page
      {
        source: "/",
        destination: "/7bb5735650a646bd91cd6d03b68a736c",
        // don't set permanent to true because it will get cached by the browser
        // while developing on localhost
        permanent: false,
      },
    ];
  },
};
