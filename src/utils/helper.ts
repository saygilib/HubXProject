
// Function to get error message from error object
export const getErrorMessage = (error: unknown): string => {
  // if error is an instance of Error, return the error message
    if (error instanceof Error) {
      return error.message;
    }
  // else return a generic error message
    return "An unknown error occurred";
  };
  