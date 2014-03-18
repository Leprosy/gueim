<strong>{{title}}</strong>
<a href="javascript:app.controllers.Game.save()"><button>SAVE GAME</button></a>
<a href="javascript:app.controllers.Game.load()"><button>LOAD GAME</button></a>
<hr />

<script>
var keys = Object.keys(app.Game.data);

for (i in keys) {
    if (typeof app.Game.data[keys[i]] !== 'object') {
        $('#app').append(keys[i] + '<input type="text" disabled="true" id="" value="' + app.Game.data[keys[i]] + '" /><br />')
    }
}

$('#app').append('<hr />Buildings<br />');

keys = Object.keys(app.Game.data.build);
for (i in keys) {
    $('#app').append(keys[i] + '<input type="text" disabled="true" id="" value="' + app.Game.data.build[keys[i]] + '" />');
    $('#app').append('<a href="javascript:app.controllers.Game.build(\'' + keys[i] + '\')"><button>build ' + keys[i] + ' - $' + app.Game.param.costs[keys[i]] + '</button></a><br />');
}
</script>
