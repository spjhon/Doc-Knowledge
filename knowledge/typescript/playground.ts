let nameMaybe = Math.random() > 0.5
 ? "Tony Hoare"
 : undefined;
nameMaybe.toLowerCase();
// Potential runtime error: Cannot read property 'toLowerCase' of undefined.
