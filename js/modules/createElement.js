const createElement = (tag, obj) => {
  const element = document.createElement(tag);
  Object.assign(element, obj);
  return element;
};
export default createElement;
