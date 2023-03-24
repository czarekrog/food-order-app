const calculateAverage = (ratings: number[]) => {
  return (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);
};

export default calculateAverage;
