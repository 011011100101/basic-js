const isString = (str) => (typeof str === 'string');

export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members.filter(str => isString(str))
    .map(str => str.trimLeft()[0].toUpperCase())
    .sort().join('');
}
