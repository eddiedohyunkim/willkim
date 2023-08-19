window.addEventListener('load', () => {
  fetch(`https://api.are.na/v2/channels/fireworks-gmdy-yojuq?per=100`, {cache: 'no-store'})
  .then(response => response.json())
  .then(data => { viewJson(data.contents); });
});
  
function viewJson(blocks){
  console.log(blocks)
  blocks.forEach((block) => {
    if (block.image && block.image.original.url) {
      let imgTitle = block.title.split('.')[0];
      let img = document.getElementById(imgTitle);
      img.src = block.image.original.url;
    }
  });
}