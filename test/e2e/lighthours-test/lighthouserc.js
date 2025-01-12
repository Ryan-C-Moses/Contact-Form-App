module.exports = {
  ci: {
    collect: {
      url: ["https://ryan-c-moses.github.io/Contact-Form-App/"],
      startServerCommand: "npm start",
    },
    assert: {
      assertions: {
        "categories.accessibility": ["error", { minscore: 0.9 }],
      },
    },
  },
};
