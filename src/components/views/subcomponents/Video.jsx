import React from "react";

const Video = () => {
  return (
    <div className="mainSection" id="section1">
      <h1 className="ps-3 letraPersonalizada2 text-danger pt-2 mt-3 overlay">
        ANIMALANDIA AL SERVICIO DE SUS PATITAS
      </h1>
      <div className="col-4 fs-2 ps-3 pt-5 mt-5 overlay">
        <p>
          Contamos con un equipo de profesionales altamente capacitados para
          brindar una excelente atención. Accede a uno de nuestros planes y
          lleva la mejor cobertura acorde a las necesidades de tu mascota.
        </p>
      </div>
      <video loop autoPlay muted className="fondoVideo">
        <source src="../src/assets/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
