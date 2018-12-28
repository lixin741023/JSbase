var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["greend"] = 1] = "greend";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var me = Color.blue;
console.log(me);

