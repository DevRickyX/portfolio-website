export const generateRandomParticles = (count: number) => {
  return [...Array(count)].map((_, i) => ({
    key: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${3 + Math.random() * 2}s`
  }));
};

export const generateRandomOrbs = (count: number) => {
  return [...Array(count)].map((_, i) => ({
    key: `orb-${i}`,
    left: `${20 + Math.random() * 60}%`,
    top: `${20 + Math.random() * 60}%`,
    width: `${40 + Math.random() * 80}px`,
    height: `${40 + Math.random() * 80}px`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${6 + Math.random() * 4}s`
  }));
};
