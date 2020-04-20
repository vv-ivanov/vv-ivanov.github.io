module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "plugin:vue/recommended", "@vue/prettier"],
  rules: {
    "vue/attribute-hyphenation": ["never", {
      "ignore": ["ID"]
    }],
    "vue/order-in-components": ["error", {
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "fetch",
        "asyncData",
        "data",
        "computed",
        "watch",
        "methods",
        "LIFECYCLE_HOOKS",
        "head",
        ["template", "render"],
        "renderError"
      ]
    }]
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        jest: true
      }
    }
  ]
};
