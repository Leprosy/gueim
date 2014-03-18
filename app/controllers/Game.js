app.createController('Game', {
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

        /*
         * Population & food rules
         * 
         * House = 6 people
         * Farm = 4 food per cycle
         * Population increases 1 per cycle until they have no more room
         * Each people eat one food per cycle
         */
        var delta = 6 * app.Game.data.build.farm - app.Game.data.pop;

        /* Enough food to support pop */
        if (app.Game.data.food + delta >= 0) {
            app.Game.data.food += delta;

            if (app.Game.data.pop < (app.Game.data.build.house * 6)) {
                app.Game.data.pop++;
            }
        } else { /* Starvation...bad */
            app.Game.data.pop--;
            app.Game.data.food = 0;
        }

        if (app.Game.data.pop == 0) {
            clearInterval(app.job);
            alert('game over');
        }

        /*
         * Gold
         * 
         * Mine = 10 gold per cycle
         */
        app.Game.data.gold += 10 * app.Game.data.build.mine;

        /* Update view */
        this.index();
    },

    build: function(key) {
        if (app.Game.data.gold < app.Game.param.costs[key]) {
            alert('not enough gold');
            return;
        }

        app.Game.data.gold -= app.Game.param.costs[key];
        app.Game.data.build[key]++;

        /* Update */
        app.controllers.Game.index();
    },

    load: function() {
        app.Game.data = JSON.parse(app.controllers.Cookie.readCookie('data'));
        this.index();
        alert('game loaded');
    },

    save: function() {
        app.controllers.Cookie.createCookie('data', JSON.stringify(app.Game.data));
        alert('game saved');
    }

});
