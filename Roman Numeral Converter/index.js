function convertToRoman(num) {
  const pairs = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let str = '';
	const keys = Object.keys(pairs);

  for(let el of keys) {
    let times = Math.floor(num / pairs[el])
    num -= times * pairs[el];
    str += el.repeat(times);
  }

  return str;
}

convertToRoman(10);
