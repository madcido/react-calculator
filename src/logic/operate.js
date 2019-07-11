import Big from 'big.js';

export default function operate(str1, str2, operator) {
  const num1 = Big(parseFloat(str1));
  const num2 = Big(parseFloat(str2));

  switch (operator) {
    case '+':
      return (num1.plus(num2)).toString();
    case '-':
      return (num1.minus(num2)).toString();
    case 'x':
      return (num1.times(num2)).toString();
    case '÷':
      if (num2 == 0) {
        return '0';
      } else {
        return (num1.div(num2)).toString();
      }
    default:
    return undefined;
  }
}
