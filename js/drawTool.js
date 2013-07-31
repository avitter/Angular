
var drawEnabled = false;
function initToolbar() {
    tb = new esri.toolbars.Draw(map);
    dojo.connect(tb, "onDrawEnd", addGraphic);

    //hook up the button click events
    dojo.connect(dojo.byId("toggleDraw"),"click", function(){
        drawEnabled = !drawEnabled;
    });

    dojo.connect(dojo.byId("drawPoint"),"click", function(){
        if(drawEnabled)
        {
            tb.activate(esri.toolbars.Draw.POINT);
        }
    });

    dojo.connect(dojo.byId("drawMultipoint"),"click", function(){
        if(drawEnabled)
        {
            tb.activate(esri.toolbars.Draw.MULTI_POINT);
        }
    });

    dojo.connect(dojo.byId("drawExtent"),"click", function(){
        if(drawEnabled)
        {
            tb.activate(esri.toolbars.Draw.EXTENT);
        }
    });

    dojo.connect(dojo.byId("drawPolyline"),"click", function(){
        if(drawEnabled)
        {
            tb.activate(esri.toolbars.Draw.POLYLINE);
        }
    });
    dojo.connect(dojo.byId("drawFreehandPolyline"),"click", function(){
        if(drawEnabled)
        {
            tb.activate(esri.toolbars.Draw.FREEHAND_POLYLINE);
        }
    });
    dojo.connect(dojo.byId("drawPolygon"),"click", function(){
        if(drawEnabled)
        {
            tb.activate(esri.toolbars.Draw.POLYGON);
        }
    });
    dojo.connect(dojo.byId("drawFreehandPolygon"),"click", function(){
        if(drawEnabled)
        {
            tb.activate(esri.toolbars.Draw.FREEHAND_POLYGON);
        }
    });
    dojo.connect(dojo.byId("drawLine"),"click", function(){
        if(drawEnabled)
        {
            tb.activate(esri.toolbars.Draw.LINE);
        }
    });
}

function addGraphic(geometry) {
    //deactivate the toolbar and clear existing graphics
    tb.deactivate();
    map.graphics.clear();

    var markerSymbol = new esri.symbol.SimpleMarkerSymbol();
    markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z");
    markerSymbol.setColor(new dojo.Color("#00FFFF"));

    var lineSymbol = new esri.symbol.CartographicLineSymbol(
        esri.symbol.CartographicLineSymbol.STYLE_SOLID,
        new dojo.Color([255,0,0]), 10,
        esri.symbol.CartographicLineSymbol.CAP_ROUND,
        esri.symbol.CartographicLineSymbol.JOIN_MITER, 5
    );

    var fillSymbol = new esri.symbol.PictureFillSymbol("images/mangrove.png",
        new esri.symbol.SimpleLineSymbol(
            esri.symbol.SimpleLineSymbol.STYLE_SOLID,
            new dojo.Color('#000'), 1
        ), 42, 42
    );


    var type = geometry.type, symbol;
    if (type === "point" || type === "multipoint") {
        symbol = markerSymbol;
    }
    else if (type === "line" || type === "polyline") {
        symbol = lineSymbol;
    }
    else {
        symbol = fillSymbol;
    }

    //Add the graphic to the map
    map.graphics.add(new esri.Graphic(geometry, symbol));
}