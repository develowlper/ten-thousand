const getPointsForOne = (arg) => {
  switch (arg) {
    case 1:
      return 100;
    case 5:
      return 50;
    default:
      return 0;
  }
};

export default function countPoints(...args) {
  if (args.length === 1) {
    return getPointsForOne(args[0]);
  }

  if (args.length === 2) {
    return getPointsForOne(args[0]) + getPointsForOne(args[1]);
  }

  if (args.length >= 3 && args.every((x) => x === args[0])) {
    const base = args[0] === 1 ? 1000 : 100;
    return base * args[0] * (args.length - 2);
  }

  args.sort();
  const splits = args.reduce((acc, current) => {
    const res = [...acc];
    if (res.some((x) => x[0] === current)) {
      const index = res.findIndex((x) => x[0] === current);
      res[index].push(current);
    } else {
      res.push([current]);
    }
    return res;
  }, []);
  return splits.reduce((acc, current) => {
    return acc + countPoints(...current);
  }, 0);
}
