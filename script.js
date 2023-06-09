//your code here
class OutOfRangeError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = "Expression should only consist of integers and +-/* characters";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = "Expression should not have an invalid combination of operators";
  }
}

function evalString(expression) {
  try {
    if (/[\+\-\*\/]{2,}/.test(expression)) {
      throw new InvalidExprError();
    }

    if (/^[\+\*\/].*/.test(expression)) {
      throw new SyntaxError("Expression should not start with an invalid operator");
    }

    if (/.*[\+\*\/\-]$/.test(expression)) {
      throw new SyntaxError("Expression should not end with an invalid operator");
    }

    // Perform evaluation logic here

    return "Evaluation result"; // Replace this with your actual evaluation code
  } catch (error) {
    if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
      throw error;
    } else {
      throw new Error("An unexpected error occurred during evaluation");
    }
  }
}