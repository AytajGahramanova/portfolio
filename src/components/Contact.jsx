import Particles from "@tsparticles/react";
import "../assets/css/common.scss";
import "../assets/css/style.scss";

const Contact = () => {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      <Particles
        options={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 6,
              random: true,
              animation: {
                speed: 4,
                minimumValue: 3,
              },
            },
            links: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              outModes: {
                default: "out",
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "bubble",
              },
              onClick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 15,
                opacity: 0.8,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
          background: {
            color: "#1E2F97", // Make sure the background color is set
          },
          fullScreen: {
            enable: true,
            zIndex: -1, // Ensure particles appear behind the content
          },
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Contact
      </div>
    </div>
  );
};

export default Contact;
