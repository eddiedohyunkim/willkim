window.addEventListener('load', () => {
  fetch(`https://api.are.na/v2/channels/sasu-editorial?per=100`, {cache: 'no-store'})
  .then(response => response.json())
  .then(data => { viewJson(data.contents); });
});
  
function viewJson(blocks){
  console.log(blocks)
  blocks.forEach((block) => {
    if (block.image && block.image.original.url) {
      let imgTitle = block.title.split('.')[0];
      console.log(imgTitle)
      let img = document.getElementById(imgTitle);
      if(img !== null){
        img.src = block.image.original.url;  
      }
      
    }
  });
}