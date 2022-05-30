module.exports = {
  extends: [
    "stylelint-config-recess-order", // use the recess order for properties
    "stylelint-config-css-modules", // configure for CSS Modules methodology
    "stylelint-config-prettier", // turn off any rules that conflict with Prettier
    "stylelint-config-recommended-scss", // configure for SCSS
    "stylelint-config-recommended-vue/scss", // add overrides for .Vue files
  ],
};
