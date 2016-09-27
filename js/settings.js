/**
 * Created by ali on 9/25/16.
 */

function readSettings() {
    $.getJSON("json/settings.json")
        .done(function (data) {
            loadSettings(data);
        });
}

function loadSettings(data) {
    var items = [];
    $.each (data.settings, function (key, val) {
        console.log(this.banner);
    });
}

function saveSettings() {

}