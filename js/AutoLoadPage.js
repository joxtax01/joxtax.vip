/* ************************************************************************************************** */

// traigo la el contenido principal
let mainSection = document.getElementById("content");

// Esta funcion super perrona que acabo de hacer remplaca a react. en tu cara mark zuckerberg

// Creo un arreglo de secciones tantos planes haya
const sections = Planes.map((plan) => {
  // Creo el elemento que va a contener la section
  const element = document.createElement("div");
  element.id = plan.id; //El Id de la seccion de manera dinamica
  const title = document.createElement("h2"); //El encabezado de toda la seccion
  element.className = "py-3";
  title.textContent = plan.name; //El contenido del titulo
  element.appendChild(title);
  // Recorro los videos de esta seccion para crear un arreglo de videos
  const videos = plan.videos.map((video) => {
    const VideoContainer = document.createElement("div"); //creo un contenedor para cada video
    VideoContainer.className = "video-container"; //Le deoy una clase para stilizar por CSS
    const VideoTitle = document.createElement("h3"); //El titulo de cada video
    VideoTitle.textContent = video.name; //El contenido del titulo
    VideoContainer.appendChild(VideoTitle);
    // Creo el div de video responsive
    const videoDiv = document.createElement("div");
    videoDiv.className = "embed-responsive embed-responsive-16by9 mt-5";
    // Y creo el iframe del video con el url
    const iframeVideo = document.createElement("iframe");
    iframeVideo.className = "embed-responsive-item";
    iframeVideo.src = video.url;
    videoDiv.appendChild(iframeVideo);
    VideoContainer.appendChild(videoDiv);
    const videoDesc = document.createElement("p"); //Creo la descripcion del video
    videoDesc.textContent = video.description;
    VideoContainer.appendChild(videoDesc);
    return VideoContainer; //Y retorno todo el contenedor ya creado
  });
  videos.map((video) => element.appendChild(video)); //Ahora por cada video que se haya creado lo inserto en el elemento proncipal de la seccion
  return element;
});
// Fin de mi funcion perrona

function changeSection(e) {
  let oldElement = mainSection.firstElementChild;
  const sectionNumber = e.dataset.section;
  mainSection.replaceChild(sections[sectionNumber], oldElement);
}
