
/// <reference path="bower_components/controls.ts/controls.ts"/>

module gApp{

    var data = [];
    for (var i=0; i<20; i++) {
        data.push({
            type: 'typeSamll',
            text: 'Loem ipsum ' + i,
            longText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie, quam eget consectetur aliquet, sem ex rhoncus mi, in consequat erat ligula fermentum lorem. Proin tristique quam nec urna ultricies, ac placerat ipsum rutrum. Nulla at lorem condimentum, pretium ligula et, molestie metus. Nulla placerat vestibulum magna ac ultrices. Fusce vitae tempor dui. Nam pulvinar commodo pellentesque. Mauris dignissim tempor pharetra. Praesent nec fermentum lacus. Phasellus vehicula velit sem, in malesuada mauris ornare non. Aenean lacinia dolor at ex molestie, quis mattis metus pulvinar. Praesent aliquet elit id condimentum fermentum. In elit turpis, aliquam non pharetra eu, sodales sed sem. Curabitur volutpat ac arcu quis venenatis. In vel gravida quam.'
        });
    }

    var root = Controls.LayoutGroupControl({
        el: document.body,
        controls: [
            Controls.LayoutControl( {
                id: 'idStatus',
                itemDrawers: [
                    function(aElement: HTMLElement, aIndex: number): Controls.TFocusInfo {
                        aElement.innerText = 'Please use navigation key (up, down, left, right)';
                        return Controls.TFocusInfo.KFocusNone
                    }
                ]
            }),
            Controls.GridControl({
                id: 'idRoot',
                maxColCount: 6,
                itemWidth: 100,
                itemHeight: 100,
                animation: true,

                data: data,
                dataDrawer: function(aKey: any, aItem: any, aEl: HTMLElement): Controls.TFocusInfo {
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
                    return Controls.TFocusInfo.KFocusAble;
                },

                onFocusChanged: function (aOld: HTMLElement, aNew: HTMLElement) {
                },
                onItemSelected: function (aControl: Controls.CControl, aIndex: number, aEl: HTMLElement) {
                    alert('index : ' + aIndex);
                }
            })
        ]
    });

    Controls.runRoot(root);
}
