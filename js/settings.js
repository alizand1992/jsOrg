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
    var ids = [];
    var bgColors = [];
    var colors = [];
    var widths = [];
    $.each (mainSetting, function (key, val) {
        $.each (val.element, function (subKey, subVal) {
            $.each(subVal, function (key1, val) {
                if (key1 != "id") {
                    $("#" + subVal.id).css(key1, val);
                    console.log(subVal.id);
                    console.log(key1);
                    console.log(val);
                }
            });
        })
    });

    for (var i = 0; i < ids.length; i++) {
        $('#' + ids[i]).css({
            "background": bgColors[i],
            "color": colors[i],
            "width": widths[i]
        });
    }
}

function saveSettings() {

}