let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

interface x {
  a: string;
  b: number;
  c: boolean;
}

class y implements x {
  a: string;
  b: number;
  c: boolean;

  constructor(a: string, b: number, c: boolean) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}
