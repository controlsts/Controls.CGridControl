/// <reference path="bower_components/controls.ts/controls.ts"/>
var gApp;
(function (gApp) {
    var data = [];
    for (var i = 0; i < 20; i++) {
        data.push({
            type: 'typeSamll',
            text: 'Loem ipsum ' + i,
            longText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie, quam eget consectetur aliquet, sem ex rhoncus mi, in consequat erat ligula fermentum lorem. Proin tristique quam nec urna ultricies, ac placerat ipsum rutrum. Nulla at lorem condimentum, pretium ligula et, molestie metus. Nulla placerat vestibulum magna ac ultrices. Fusce vitae tempor dui. Nam pulvinar commodo pellentesque. Mauris dignissim tempor pharetra. Praesent nec fermentum lacus. Phasellus vehicula velit sem, in malesuada mauris ornare non. Aenean lacinia dolor at ex molestie, quis mattis metus pulvinar. Praesent aliquet elit id condimentum fermentum. In elit turpis, aliquam non pharetra eu, sodales sed sem. Curabitur volutpat ac arcu quis venenatis. In vel gravida quam.'
        });
    }
    var el = document.createElement("div");
    document.body.appendChild(el);
    var grid = Controls.GridControl({
        el: el,
        id: 'idRoot',
        maxColCount: 6,
        itemWidth: 100,
        itemHeight: 100,
        animation: true,
        data: data,
        dataDrawer: function (aKey, aItem, aEl) {
            Controls.Item({
                el: aEl,
                children: [{
                    className: 'title',
                    innerText: aItem.text
                }, {
                    className: 'desc',
                    innerText: aItem.longText
                }]
            });
            return 2 /* KFocusAble */;
        },
        onFocusChanged: function (aOld, aNew) {
        },
        onItemSelected: function (aControl, aIndex, aEl) {
            alert('index : ' + aIndex);
        }
    });
    Controls.runRoot(grid);
})(gApp || (gApp = {}));
//# sourceMappingURL=app.js.map