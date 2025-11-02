
type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[] ? RecursivePartial<U>[] : T[P] extends object ? RecursivePartial<T[P]> : T[P];
};


const validateEmail = (email: string): boolean => {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
};

