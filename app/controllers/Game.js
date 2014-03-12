app.createController('Game', {
    costs: {
        house: 250,
        farm: 200,
        barrack: 2000,
        library: 2000,
        mine: 500
    },

    views: ['gameindex'],

    ready: function() {
        console.log('Game controller is ready');
    },

    index: function(data) {
        this.render('gameindex', {
            title: 'gueim'
        });
    },

    update: function() {
        console.log('gueim update...');

        /* Population & food */
        var delta = 2 * app.Game.build.farm - Math.floor(app.Game.pop / 2);

        if (delta > 0) {
            app.Game.food += delta;
            app.Game.pop += app.Game.build.house;
        }

        if (app.Game.pop == 0) {
            alert('game over');
        }

        /* Gold */
        app.Game.gold += 10 * app.Game.build.mine;

        /* Update view */
        this.index();
    },

    build: function(key) {
        if (app.Game.gold < this.costs[key]) {
            alert('not enough gold');
            return;
        }

        app.Game.gold -= this.costs[key];
        app.Game.build[key]++;

        /* Update */
        app.controllers.Game.index();
    },

    load: function() {
        app.Game = JSON.parse(app.controllers.Cookie.readCookie('data'));
        this.index();
        alert('game loaded');
    },

    save: function() {
        app.controllers.Cookie.createCookie('data', JSON.stringify(app.Game));
        alert('game saved');
    }

});
