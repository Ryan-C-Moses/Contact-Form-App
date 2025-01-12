module.exports = {
  ci: {
    collect: {
      url: ["../../../index.html"],
      startServerCommand: "npm start",
    },
    assert: {
      assertions: {
        "categories.accessibility": ["error", { minscore: 0.9 }],
      },
    },
  },
};
