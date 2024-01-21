import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        autoPlay: true,
        background: {
          color: {
            value: "#080c2c",
          },
          position: "50% 50%",
          repeat: "no-repeat",
          size: "20%",
          opacity: 1,
        },
        backgroundMask: {
          composite: "destination-out",
          cover: {
            color: {
              value: "#fff",
            },
            opacity: 1,
          },
          enable: false,
        },
        defaultThemes: {},
        delay: 0,
        // fullScreen: {
        //   enable: true,
        //   zIndex: 1
        // },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onDiv: {
              selectors: [],
              enable: false,
              mode: [],
              type: "circle",
            },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: false,
                force: 2,
                smooth: 10,
              },
            },
            resize: {
              delay: 0.5,
              enable: true,
            },
          },
          modes: {
            attract: {
              distance: 200,
              duration: 0.4,
              easing: "ease-out-quad",
              factor: 1,
              maxSpeed: 50,
              speed: 1,
            },
            bounce: {
              distance: 200,
            },
            bubble: {
              distance: 250,
              duration: 2,
              mix: false,
              opacity: 0,
              size: 0,
              divs: {
                distance: 200,
                duration: 0.4,
                mix: false,
                selectors: [],
              },
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 400,
              links: {
                blink: false,
                consent: false,
                opacity: 1,
              },
            },
            push: {
              default: true,
              groups: [],
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                selectors: [],
              },
            },
            slow: {
              factor: 3,
              radius: 200,
            },
            trail: {
              delay: 1,
              pauseOnStop: false,
              quantity: 1,
            },
            light: {
              area: {
                gradient: {
                  start: {
                    value: "#ffffff",
                  },
                  stop: {
                    value: "#000000",
                  },
                },
                radius: 1000,
              },
              shadow: {
                color: {
                  value: "#000000",
                },
                length: 2000,
              },
            },
          },
        },
        manualParticles: [],
        particles: {
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },
          collisions: {
            absorb: {
              speed: 2,
            },
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            enable: false,
            mode: "bounce",
            overlap: {
              enable: true,
              retries: 0,
            },
          },
          color: {
            value: "#ffffff",
            animation: {
              h: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                decay: 0,
                sync: true,
              },
              s: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                decay: 0,
                sync: true,
              },
              l: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                decay: 0,
                sync: true,
              },
            },
          },
          groups: {},
          move: {
            angle: {
              offset: 0,
              value: 90,
            },
            attract: {
              distance: 200,
              enable: false,
              rotate: {
                x: 600,
                y: 600,
              },
            },
            center: {
              x: 50,
              y: 50,
              mode: "percent",
              radius: 0,
            },
            decay: 0,
            distance: {},
            direction: "none",
            drift: 0,
            enable: true,
            gravity: {
              acceleration: 9.81,
              enable: false,
              inverse: false,
              maxSpeed: 50,
            },
            path: {
              clamp: true,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
              },
              enable: false,
              options: {},
            },
            outModes: {
              default: "out",
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            random: true,
            size: false,
            speed: 1,
            spin: {
              acceleration: 0,
              enable: false,
            },
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fill: {},
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
            limit: 0,
            value: 160,
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            random: {
              enable: true,
              random: false,
              minimumValue: 0.1,
            },
            value: {
              min: 0,
              max: 1,
            },
            animation: {
              count: 0,
              enable: true,
              speed: 1,
              decay: 0,
              sync: false,
              destroy: "none",
              startValue: "random",
              minimumValue: 0,
            },
          },
          reduceDuplicates: false,
          shadow: {
            blur: 0,
            color: {
              value: "#000",
            },
            enable: false,
            offset: {
              x: 0,
              y: 0,
            },
          },
          shape: {
            options: {},
            type: "star",
          },
          size: {
            random: {
              enable: true,
              minimumValue: 1,
            },
            value: {
              min: 1,
              max: 3,
            },
            animation: {
              count: 0,
              enable: false,
              speed: 4,
              decay: 0,
              sync: false,
              destroy: "none",
              startValue: "random",
              minimumValue: 0.3,
            },
          },
          stroke: {
            width: 0,
          },
          life: {
            count: 0,
            delay: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              sync: false,
            },
            duration: {
              random: {
                enable: false,
                minimumValue: 0.0001,
              },
              value: 0,
              sync: false,
            },
          },
          rotate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              decay: 0,
              sync: false,
            },
            direction: "clockwise",
            path: false,
          },
          destroy: {
            bounds: {},
            mode: "none",
            split: {
              count: 1,
              factor: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 3,
              },
              rate: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: {
                  min: 4,
                  max: 9,
                },
              },
              sizeOffset: true,
              particles: {},
            },
          },
          roll: {
            darken: {
              enable: false,
              value: 0,
            },
            enable: false,
            enlighten: {
              enable: false,
              value: 0,
            },
            mode: "vertical",
            speed: 25,
          },
          tilt: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              decay: 0,
              sync: false,
            },
            direction: "clockwise",
            enable: false,
          },
          twinkle: {
            lines: {
              enable: false,
              frequency: 0.05,
              opacity: 0.5,
            },
            particles: {
              enable: false,
              frequency: 0.05,
              opacity: 0.5,
            },
          },
          wobble: {
            distance: 5,
            enable: false,
            speed: {
              angle: 50,
              move: 10,
            },
          },
          orbit: {
            animation: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              sync: false,
            },
            enable: false,
            opacity: 0.5,
            rotation: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 45,
            },
            width: 3,
          },
          links: {
            blink: false,
            color: {
              value: "#ffffff",
            },
            consent: false,
            distance: 150,
            enable: false,
            frequency: 1,
            opacity: 0.4,
            shadow: {
              blur: 5,
              color: {
                value: "#000",
              },
              enable: false,
            },
            triangles: {
              enable: false,
              frequency: 1,
            },
            width: 2,
            warp: false,
          },
          repulse: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            enabled: false,
            distance: 1,
            duration: 1,
            factor: 1,
            speed: 1,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#fff",
          opacity: 0.9,
          width: 1,
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        responsive: [],
        smooth: false,
        style: {},
        themes: [],
        zLayers: 100,
        retina_detect: true,
        config_demo: {
          hide_card: false,
          background_color: "#b61924",
          background_image: "",
          background_repeat: "no-repeat",
          background_size: "cover",
        },
      }}
    />
  );
}

// {
//     particles: {
//         number: {
//           value: 50,
//           density: { enable: true, value_area: 1200 },
//         },
//         color: { value: "#fff" },
//         shape: {
//           type: "circle",
//           stroke: { width: 0, color: "#dc9999" },
//           polygon: { nb_sides: 1 },
//         },
//         opacity: {
//           value: 0.5,
//           random: false,
//           anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
//         },
//         size: {
//           value: 5,
//           random: true,
//           anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
//         },
//         line_linked: {
//           enable: true,
//           distance: 150,
//           color: "#fff",
//           opacity: 0.9,
//           width: 1,
//         },
//         move: {
//           enable: true,
//           speed: 4.5,
//           direction: "none",
//           random: false,
//           straight: false,
//           out_mode: "out",
//           bounce: false,
//           attract: { enable: false, rotateX: 600, rotateY: 1200 },
//         },
//       },
//       interactivity: {
//         detect_on: "canvas",
//         events: {
//           onhover: { enable: true, mode: "grab" },
//           onclick: { enable: true, mode: "push" },
//           resize: true,
//         },
//         modes: {
//           grab: { distance: 150, line_linked: { opacity: 1 } },
//           bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
//           repulse: { distance: 200, duration: 0.4 },
//           push: { particles_nb: 4 },
//           remove: { particles_nb: 2 },
//         },
//       },
//       retina_detect: true,
//       config_demo: {
//         hide_card: false,
//         background_color: "#b61924",
//         background_image: "",
//         // background_position: "50% 50%",
//         background_repeat: "no-repeat",
//         background_size: "cover",
//       },
//  }
