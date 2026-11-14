function calculate(expr) {
    let tokens = expr.match(/\d+(\.\d+)?|\+|\-|\*|\//g);
    if (!tokens) return 0;

    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (token === "*" || token === "/") {
            let prev = Number(stack.pop());
            let next = Number(tokens[++i]);
            let res = (token === "*") ? prev * next : prev / next;
            stack.push(res);
        } else {
            stack.push(token);
        }
    }

    let result = Number(stack[0]);
    for (let i = 1; i < stack.length; i += 2) {
        let op = stack[i];
        let next = Number(stack[i + 1]);
        if (op === "+") result += next;
        else if (op === "-") result -= next;
    }

    return result;
}

let expression = "10 + 20 * 3 - 4";
console.log(calculate(expression));