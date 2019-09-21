export function isEmpty(obj) {
  return Object.getOwnPropertyNames(obj).length === 0;
}
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getFunName() {
  const adjectives = [
    "Batman",
    "Santa Claus",
    "Jon Snow",
    "Pee Wee Herman",
    "Homer Simpson",
    "Jo Jo Siwa",
    "Lil' Shorty",
    "Michael Jordan",
    "Abraham Lincoln",
    "Wonder Woman",
    "Barbara Streisand",
    "Bett Midler",
    "Albert Einstein",
    "Paul McCartney",
    "Milo Murphy",
    "Nemo",
    "Ellen",
    "Superman",
    "Wolverine",
    "Han Solo",
    "Princess Laya",
    "Nacho Libre",
    "Lightning McQueen",
    "Super Mario",
    "Bob the Builder",
    "Butts, Seymor",
    "Heisenberg",
    "Walter White",
    "Lebron James",
    "Carson Wentz",
    "Tom Brady",
    "Perilous Paul",
    "Wonderful Wanda",
    "Curious Carl",
    "Dashing Dave",
    "Luxury Larry",
    "Fantastic Phil",
    "Awesome Alice"
  ];

  const nouns = [
    "women",
    "men",
    "children",
    "teeth",
    "feet",
    "people",
    "leaves",
    "mice",
    "geese",
    "halves",
    "knives",
    "wives",
    "lives",
    "elves",
    "loaves",
    "potatoes",
    "tomatoes",
    "cacti",
    "foci",
    "fungi",
    "nuclei",
    "syllabuses",
    "analyses",
    "diagnoses",
    "oases",
    "theses",
    "crises",
    "phenomena",
    "criteria",
    "data"
  ];

  return `${rando(adjectives)}`;
}
