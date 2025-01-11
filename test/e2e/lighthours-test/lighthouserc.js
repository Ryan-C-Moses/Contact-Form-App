module.exports = {
  ci: {
    collect: {
      url: [""],
      startServerCommand: "npm start",
    },
    assert: {
      assertions: {
        "categories.accessibility": ["error", { minscore: 0.9 }],
      },
    },
  },
};
