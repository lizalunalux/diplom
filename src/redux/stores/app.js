import iro from "@jaames/iro";

const app = {
    colorMethod: "triad",
    picker: new iro.ColorPicker("#picker", {
        width: 400,
        colors: ["#f00", "#0f0", "#00f"]
    }),
    svgPaths: [],
    colorsToSet: ["#f00", "#0f0", "#00f"]
};

export default app;
