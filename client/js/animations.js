const Animations = {

    shapes: () =>{
        var circulo = document.getElementById("circulo");
        setInterval(function () {

            circulo.setAttribute("r", getRandomInt(5, 30));
        }, 4000);

        var circle = document.getElementById("circle");
        setInterval(function () {
            circle.setAttribute("width", getRandomInt(15, 30));
            circle.setAttribute("height", getRandomInt(25, 30));
        }, 4000);

        var circle2 = document.getElementById("circle2");
        setInterval(function () {
            circle2.setAttribute("width", getRandomInt(5, 40));
            circle2.setAttribute("height", getRandomInt(5, 30));
        }, 4000);

        var circle3 = document.getElementById("circle3");
        setInterval(function () {
            circle3.setAttribute("width", getRandomInt(5, 40));
            circle3.setAttribute("height", getRandomInt(5, 30));
        }, 4000);

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        function requestInterval(fn, delay) {
            var requestAnimFrame = (function () {
                    return window.requestAnimationFrame || function (callback, element) {
                        window.setTimeout(callback, 1000 / 60);
                    };
                })(),
                start = new Date().getTime(),
                handle = {};

            function loop() {
                handle.value = requestAnimFrame(loop);
                var current = new Date().getTime(),
                    delta = current - start;
                if (delta >= delay) {
                    fn.call();
                    start = new Date().getTime();
                }
            }

            handle.value = requestAnimFrame(loop);
            return handle;
        };

    }

}

export default Animations;
