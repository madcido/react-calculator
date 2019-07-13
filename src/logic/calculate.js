import operate from './operate';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', 'x', '÷'];

export default function calnextlate({next, total, operation, err}, button) {
  if (err) {
    next = null;
    total = null;
    operation = null;
    err = false;
  }

  if (numbers.includes(button)) {
    if (next && next !== '0') {
      if (next.length < 10) {
        next += button;
      }
    } else {
      next = button;
    }
  } else if (operators.includes(button)) {
    if (total && next && operation) {
      total = operate(total, next, operation);
    } else {
      total = (next) ? next : (total || '0');
    }
    next = null;
    operation = button;
  } else {
    switch (button) {

      case '+/-':
      if (next) {
        next = operate(next, '-1', 'x');
      } else {
        total = operate(total, '-1', 'x');
      }
      break;

      case '%':
      if (next) {
        next = operate(next, '100', '÷');
      } else {
        total = operate(total, '100', '÷');
      }
      break;

      case '.':
      if (next) {
        if (!next.includes('.')) {
          next += '.';
        }
      } else {
        next = '0.';
      }
      break;

      case '=':
      if (total && next && operation) {
        total = operate(total, next, operation);
      } else {
        total = (next) ? next : total;
      }
      next = null;
      operation = null;
      break;

      default:
      next = null;
      total = null;
      operation = null;
    }
  }

  if (total && total.length > 10) {
    err = true;
  }

  return {next, total, operation, err};
}
