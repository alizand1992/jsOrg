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
            ids.push(subVal.id);
            bgColors.push(subVal.background);
            colors.push(subVal.color);
            var widthStr = "";
            $.each(subVal.width, function (widthKey, widthVal) {
                widthStr = widthVal.value + widthVal.unit;
            });
            widths.push(widthStr);
        })
    });

    for (var i = 0; i < ids.length; i++) {
        console.log(widths[i]);
        $('#' + ids[i]).css({
            "background": bgColors[i],
            "color": colors[i],
            "width": widths[i]
        });
    }
}

function saveSettings() {

}