export const getRandomNumber = (value: number) => {
  const random = Math.floor(Math.random() * value);
  return { random };
}