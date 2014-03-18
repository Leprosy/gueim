/* Create app */
var app = new Llama.Application({
    name: 'gueim',
    controllers: ['Game','Cookie'],

    ready: function() {
        /* Game attribs */
        app.Game = {};

        app.Game.data = {
            pop: 5,
            gold: 1000,
            food: 50,

            build: {
                house: 0,
                farm: 0,
                barrack: 0,
                library: 0,
                mine: 0
            }
        };

        app.Game.param = {
            costs: {
                house: 250,
                farm: 200,
                barrack: 2000,
                library: 2000,
                mine: 500
            }
        };

        console.debug('gueim ready');
        app.controllers.Game.index();

        app.job = setInterval(function() {
            app.controllers.Game.update();
        }, 2000);
    }
});