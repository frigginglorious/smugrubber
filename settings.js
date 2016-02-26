var settings = {
    PTM: 16, /* pixels to meters */
    controls: {
        key_up:    87,
        key_left:  65,
        key_down:  83,
        key_right: 68
    },
    colors: {
        background: 'rgb(20, 20, 20)',
        asteroid: 'rgb(220, 60, 191)'
    },
    ninja: {
        move: {
            strength: 28,
            max_speed: 15
        },
        jetpack: {
            strength: 1,
            max_speed: 15
        },
        body: {
            radius: 0.75,
            density: 1.0,
            friction: 0.1,
            restitution: 0.2
        }
    },
    collide: {
        ninja_to_ninja_base: 20
    },
};
