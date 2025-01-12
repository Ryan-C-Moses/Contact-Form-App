module.exports = {
  ci: {
    collect: {
      staticDistDir: ["../../../index.html"],
      startServerCommand: "npm start",
    },
    assert: {
      assertions: {
        "categories.accessibility": ["error", { minscore: 0.9 }],
      },
    },
  },
};
