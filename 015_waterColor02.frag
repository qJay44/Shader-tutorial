#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

const int AMOUNT = 12;

void main(){
    vec2 coord = 20.0 * (gl_FragCoord.xy - u_resolution / 2.0) / min(u_resolution.y, u_resolution.x);

    float len;

    for(int i = 0; i < AMOUNT; i++){
        len = length(vec2(coord.x, coord.y));

        coord.x = coord.x - cos(coord.y + sin(len) + cos(u_time / 9.0));
        coord.y = coord.y + sin(coord.x + cos(len) + sin(u_time / 12.0));
    }

    gl_FragColor = vec4(cos(len * 2.0), cos(len), cos(len), 1.0);
}