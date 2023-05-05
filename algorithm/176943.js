function solution(name, yearning, photo) {
  let result = {};
  for (let i = 0; i < name.length; i++) {
    result[name[i]] = yearning[i];
  }

  return photo.map((el) =>
    el.reduce((ac, cu, idx) => {
      result[cu] ? (ac += result[cu]) : ac;
      return ac;
    }, 0)
  );
}
