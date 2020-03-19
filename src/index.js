module.exports = function toReadable(number) {
  const dictionary = [
    [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine'
    ],
    [
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen'
    ],
    [
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety'
    ]
  ];

  let arr = number
    .toString(10)
    .split("")
    .map(function (n) { return parseInt(n) });

  switch (arr.length) {
    case 1:
      return dictionary[0][arr[0]];

    case 2:
      if (arr[0] === 1) {
        return dictionary[1][arr[1]];
      } else if (arr[1] === 0) {
        return dictionary[2][arr[0] - 2];
      } else {
        return dictionary[2][arr[0] - 2] + ' ' + dictionary[0][arr[1]];
      }

    case 3:
      let str = `${dictionary[0][arr[0]]} hundred`;
      if (arr[1] === 0) {
        if (arr[2] === 0) {
          return str;
        }
        return str + ' ' + dictionary[0][arr[2]];
      } else if (arr[1] === 1) {
        return str + ' ' + dictionary[1][arr[2]];
      } else if (arr[2] === 0) {
        return str + ' ' + dictionary[2][arr[1] - 2];
      } else {
        return str + ' ' + dictionary[2][arr[1] - 2] + ' ' + dictionary[0][arr[2]];
      }
  }
}
