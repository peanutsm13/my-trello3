module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/essential",
        // "plugin:prettier/recommended", // 追加
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: [
        "vue",
        // "prettier", // 追加
    ],
    rules: {
        // "prettier/prettier": "error", // 追加
        "vue/multi-word-component-names": "off",
    },
};
