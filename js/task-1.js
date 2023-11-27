function slugify(title) {
  const words = title.toLowerCase().split(" ");
  return words.join("-");
}
