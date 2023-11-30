const comments = `
// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
`;
const template = (variables, { tpl }) => {
  return tpl`
    ${comments}
    ${variables.imports};
    
    ${variables.interfaces};
    const ${variables.componentName} = (${variables.props}) => {
      const {
        fill,
        height = 20,
        viewBox = '0 0 32 32',
        width = 20,
      } = props;
      return (
        ${variables.jsx}
      )
    };
    ${variables.exports};
  `;
};

module.exports = template;
