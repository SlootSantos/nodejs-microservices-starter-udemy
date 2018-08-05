let t;

try {
  t = JSON.parse('this is not an object');
} catch (e) {
  t = 'NO OBJECT';
}

console.log(t);
