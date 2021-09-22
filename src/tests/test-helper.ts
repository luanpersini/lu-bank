//throw new Error can replace async () => {return Promise.reject(new Error()) }
//For instance, never is the return type for a function that always throws an exception or one that never returns
export const throwError = (): never => {
  throw new Error();
};
