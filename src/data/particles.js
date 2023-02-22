export const hompageOptions = {
    fullScreen: {
        enable: false,
        zIndex: 1,
    },
    background: {
        color: {
            // value: "#141A31",
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

