/* Create app */
var app = new Llama.Application({
    name: 'gueim',
    controllers: ['Game','Cookie'],

    ready: function() {
        /* Game attribs */
        app.Game = {
            pop: 5,
            gold: 1000,
            food: 50,
            terr: 10,

            build: {
                house: 0,
                farm: 0,
                barrack: 0,
                library: 0,
                mine: 0
            }
        };

        console.debug('gueim ready');
        app.controllers.Game.index();

        setInterval(function() {
            app.controllers.Game.update();
        }, 3000);
    }
});