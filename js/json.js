function fetchData() {
  fetch('https://palmerdoesart.github.io/gallery/json/gallery.json').then((res) => res.json()).then((data) => document.getElementById('whole_json_output').innerHTML = data);
}
fetchData()
