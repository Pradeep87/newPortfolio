import { polygonPathName } from "tsparticles-path-polygon";


export const hompageOptions = {
    fullScreen: {
        enable: false,
        zIndex: 1,
    },
    background: {
        color: {
            value: "#141A31",
        },
        // position: "50% 50%",
        // repeat: "no-repeat",
        // size: "cover",
    },
    fpsLimit: 180,
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "grab",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 80,
            },
            grab: {
                distance: 300,
                duration: 1,
            },
        },
    },
    particles: {
        color: {
            // value: "#ffffff",
           
                value: ["#09e6ff"]
        },
        links: {
            color: "#ffffff",
            distance: 200,
            enable: true,
            opacity: 0.3,
            width: 1,
            triangles: {
                enable: true,
                color: "#09e6ff70",
                opacity: 0.02
              }
        },
        collisions: {
            enable: true,
        },
        move: {
            directions: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: true,
            speed: 2,
            straight: true,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 50,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}

export const portfolioOptions ={
  fullScreen: {
    enable: false,
    zIndex: 1,
},
background: {
    color: {
        value: "#141A31",
    },
},
    fpsLimit: 60,
    particles: {
      color: {
        value: "#fbdb04",
        animation: {
          enable: true,
          speed: 10
        }
      },
      move: {
        attract: {
          enable: true,
          rotate: {
            distance: 100,
            x: 2000,
            y: 2000
          }
        },
        direction: "none",
        enable: true,
        outModes: {
          default: "destroy"
        },
        path: {
          clamp: false,
          enable: true,
          delay: {
            value: 0
          },
          generator: polygonPathName,
          options: {
            sides: 6,
            turnSteps: 30,
            angle: 30
          }
        },
        random: false,
        speed: 3,
        straight: true,
        trail: {
          fillColor: "#000",
          length: 20,
          enable: true
        }
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 0
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 2
      }
    },
    
    detectRetina: true,
    emitters: {
      direction: "none",
      rate: {
        quantity: 1,
        delay: 0.25
      },
      size: {
        width: 0,
        height: 0
      },
      position: {
        x: 50,
        y: 50
      }
    }
  }