import './About.css';

const About = () => {
  return (
    <div className='about-content'>
      <h1>About</h1>
      <h3>Sobre Nosotros</h3>
      <p className='txt'>En nuestra plataforma, nos dedicamos a proporcionar información detallada y actualizada sobre los medicamentos que necesitas tomar a diario. Nuestro objetivo es facilitarte el seguimiento de tus tratamientos, asegurando que siempre tengas acceso a la información más relevante y precisa. Ya sea que necesites recordar la dosis de tu medicamento o conocer los posibles efectos secundarios, estamos aquí para ayudarte a gestionar tu salud de manera eficiente y segura.</p>
      <h3>Nuestra Misión</h3>
      <p className='txt'>Creemos que la salud es un derecho fundamental y, por ello, trabajamos incansablemente para ofrecerte una herramienta intuitiva y fácil de usar. Nuestro listado de medicamentos diarios está diseñado para que puedas llevar un control riguroso de tus tratamientos, evitando olvidos y asegurando que sigas las indicaciones de tu médico al pie de la letra. Con nuestra plataforma, tendrás toda la información que necesitas al alcance de tu mano, contribuyendo a tu bienestar y calidad de vida.</p>
      <img src="../../src/assets/drugs.png" alt="icono medicamento" className='ico-about'/>
    </div>
  );
};

export default About;
