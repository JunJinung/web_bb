import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
const history = [];

function evaluateMath(expr) {
  const sanitized = expr.replace(/[^0-9+\-*/().%\s]/g, '');
  return Function('return (' + sanitized + ')')();
}

console.log('=== Node.js 평범한 계산기 (종료: exit / 기록: history) ===');

while (true) {
  const query = (await rl.question('\n계산 입력 > ')).trim();

  if (!query) continue;
  if (query.toLowerCase() === 'exit') break;

  if (query.toLowerCase() === 'history') {
    console.table(history);
    continue;
  }

  try {
    const result = evaluateMath(query);
    console.log(`= ${result}`);
    history.push({ input: query, result });
  } catch (err) {
    console.log('올바른 수식을 입력해주세요.');
  }
}

rl.close();