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
    var mainSetting = data.settings;
    $.each (mainSetting, function (key, val) {
        console.log(val);
    });
}

function saveSettings() {

}