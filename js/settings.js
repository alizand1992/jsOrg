/**
 * Created by ali on 9/25/16.
 */

function readSettings() {
    console.log("read");
    $.getJSON("json/settings.json", loadSettings(settings));
}

function loadSettings(data) {
    var items = [];
    console.log("load");
    $.each (data.settings, function (key, val) {
        console.log(this.name);
    });
}

function saveSettings() {

}