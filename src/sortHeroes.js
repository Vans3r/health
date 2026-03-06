export const sortHeroesByHealth = (heroes) => {
  return [...heroes].sort((a, b) => b.health - a.health);
};