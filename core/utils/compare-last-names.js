// @flow
export default (a: Object, b: Object) => {
  const lastNameA = a.name.last.replace(/[^\w]/g, '');
  const lastNameB = b.name.last.replace(/[^\w]/g, '');

  let comp = 0;
  if (lastNameA > lastNameB) {
    comp = 1;
  }

  if (lastNameA < lastNameB) {
    comp = -1;
  }

  return comp;
};
