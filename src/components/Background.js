import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export const Background = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fullScreen:{
                enable: false,
                zIndex: 0,
              },
              fpsLimit: 60,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  resize: true,
                  onHover: {
                    enable: true,
                    mode: "bubble"
                  }
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    size: 40
                  }
                }
              },
              particles: {
                color: {
                  value: [
                    "#3998D0",
                    "#2EB6AF",
                    "#A9BD33",
                    "#FEC73B",
                    "#F89930",
                    "#F45623",
                    "#D62E32",
                    "#EB586E",
                    "#9952CF"
                  ]
                },
                move: {
                  attract: {
                    enable: true,
                    rotate: {
                      x: 600,
                      y: 1200
                    },
                    distance: 250
                  },
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "out"
                  },
                  random: false,
                  speed: 15,
                  size: true,
                  straight: false,
                  trail: {
                    fillColor: "#000",
                    enable: true,
                    length: 3
                  }
                },
                number: {
                  density: {
                    enable: true,
                    area: 800
                  },
                  value: 30
                },
                opacity: {
                  value: 1
                },
                shape: {
                  type: ["circle", "square"]
                },
                rotate: {
                  value: 0,
                  direction: "random",
                  animation: {
                    enable: true,
                    speed: 10
                  }
                },
                size: {
                  random: {
                    enable: true,
                    minimumValue: 5
                  },
                  animation: {
                    enable: true,
                    speed: 6,
                    minimumValue: 5
                  },
                  value: 15
                }
              },
              detectRetina: true
            }}
                        


            //   fpsLimit: 60,
            //   interactivity: {
            //     events: {
            //       onClick: {
            //         enable: true,
            //         mode: 'push',
            //       },
            //       onHover: {
            //         enable: true,
            //         mode: 'repulse',
            //       },
            //       resize: true,
            //     },
            //     modes: {
            //       bubble: {
            //         distance: 400,
            //         duration: 2,
            //         opacity: 0.8,
            //         size: 40,
            //       },
            //       push: {
            //         quantity: 4,
            //       },
            //       repulse: {
            //         distance: 200,
            //         duration: 0.4,
            //       },
            //     },
            //   },
            //   particles: {
            //     color: {
            //       value: '#ffffff',
            //     },
            //     links: {
            //       color: '#ffffff',
            //       distance: 150,
            //       enable: true,
            //       opacity: 0.5,
            //       width: 1,
            //     },
            //     collisions: {
            //       enable: true,
            //     },
            //     move: {
            //       direction: 'none',
            //       enable: true,
            //       outMode: 'bounce',
            //       random: false,
            //       speed: 6,
            //       straight: false,
            //     },
            //     number: {
            //       density: {
            //         enable: true,
            //         value_area: 800,
            //       },
            //       value: 80,
            //     },
            //     opacity: {
            //       value: 0.5,
            //     },
            //     shape: {
            //       type: 'circle',
            //     },
            //     size: {
            //       random: true,
            //       value: 5,
            //     },
            //   },
            //   detectRetina: true,
            // }}
            style={{
              position: 'absolute',
              zIndex: 0,
              width:'100vw',
              marginLeft: 'calc(-50vw + 50%)'
            }}
          />
      );
    //return (
    //     <Particles
    //         id="tsparticles"
    //         init={particlesInit}
    //         loaded={particlesLoaded}
    //         options={{
    //             // background: {
    //             //     color: {
    //             //         value: "#0d47a1",
    //             //     },
    //             // },
    //             height: 300,
    //             fpsLimit: 120,
    //             interactivity: {
    //                 detectsOn: "canvas",
    //                 events: {
    //                     onClick: {
    //                         enable: true,
    //                         mode: "push",
    //                     },
    //                     onHover: {
    //                         enable: true,
    //                         mode: "repulse",
    //                     },
    //                     resize: true,
    //                 },
    //                 modes: {
    //                     push: {
    //                         quantity: 4,
    //                     },
    //                     repulse: {
    //                         distance: 200,
    //                         duration: 0.4,
    //                     },
    //                 },
    //             },
    //             particles: {
    //                 color: {
    //                     value: "#ffffff",
    //                 },
    //                 links: {
    //                     color: "#ffffff",
    //                     distance: 150,
    //                     enable: true,
    //                     opacity: 0.5,
    //                     width: 1,
    //                 },
    //                 collisions: {
    //                     enable: true,
    //                 },
    //                 move: {
    //                     direction: "none",
    //                     enable: true,
    //                     outModes: {
    //                         default: "bounce",
    //                     },
    //                     random: false,
    //                     speed: 6,
    //                     straight: false,
    //                 },
    //                 number: {
    //                     density: {
    //                         enable: true,
    //                         area: 800,
    //                     },
    //                     value: 80,
    //                 },
    //                 opacity: {
    //                     value: 0.5,
    //                 },
    //                 shape: {
    //                     type: "circle",
    //                 },
    //                 size: {
    //                     value: { min: 1, max: 5 },
    //                 },
    //             },
    //             detectRetina: true,
    //         }}
    //     />
    // );
};