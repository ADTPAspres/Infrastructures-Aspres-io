var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Decheterie_1 = new ol.format.GeoJSON();
var features_Decheterie_1 = format_Decheterie_1.readFeatures(json_Decheterie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Decheterie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Decheterie_1.addFeatures(features_Decheterie_1);
var lyr_Decheterie_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Decheterie_1, 
                style: style_Decheterie_1,
                interactive: true,
                title: '<img src="styles/legend/Decheterie_1.png" /> Decheterie'
            });
var format_Colonneaverre_2 = new ol.format.GeoJSON();
var features_Colonneaverre_2 = format_Colonneaverre_2.readFeatures(json_Colonneaverre_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colonneaverre_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colonneaverre_2.addFeatures(features_Colonneaverre_2);
var lyr_Colonneaverre_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colonneaverre_2, 
                style: style_Colonneaverre_2,
                interactive: true,
                title: '<img src="styles/legend/Colonneaverre_2.png" /> Colonne a verre'
            });
var format_Colonnetextile_3 = new ol.format.GeoJSON();
var features_Colonnetextile_3 = format_Colonnetextile_3.readFeatures(json_Colonnetextile_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colonnetextile_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colonnetextile_3.addFeatures(features_Colonnetextile_3);
var lyr_Colonnetextile_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colonnetextile_3, 
                style: style_Colonnetextile_3,
                interactive: true,
                title: '<img src="styles/legend/Colonnetextile_3.png" /> Colonne textile'
            });
var format_Dechetsdesoins_4 = new ol.format.GeoJSON();
var features_Dechetsdesoins_4 = format_Dechetsdesoins_4.readFeatures(json_Dechetsdesoins_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dechetsdesoins_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dechetsdesoins_4.addFeatures(features_Dechetsdesoins_4);
var lyr_Dechetsdesoins_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dechetsdesoins_4, 
                style: style_Dechetsdesoins_4,
                interactive: true,
                title: '<img src="styles/legend/Dechetsdesoins_4.png" /> Dechets de soins'
            });
var format_Composteurs_5 = new ol.format.GeoJSON();
var features_Composteurs_5 = format_Composteurs_5.readFeatures(json_Composteurs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Composteurs_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Composteurs_5.addFeatures(features_Composteurs_5);
var lyr_Composteurs_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Composteurs_5, 
                style: style_Composteurs_5,
                interactive: true,
                title: '<img src="styles/legend/Composteurs_5.png" /> Composteurs'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Decheterie_1.setVisible(true);lyr_Colonneaverre_2.setVisible(true);lyr_Colonnetextile_3.setVisible(true);lyr_Dechetsdesoins_4.setVisible(true);lyr_Composteurs_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Decheterie_1,lyr_Colonneaverre_2,lyr_Colonnetextile_3,lyr_Dechetsdesoins_4,lyr_Composteurs_5];
lyr_Decheterie_1.set('fieldAliases', {'Nom': 'Nom', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Colonneaverre_2.set('fieldAliases', {'Nom du rep': 'Nom du rep', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Etat': 'Etat', 'Affichage': 'Affichage', 'Litrage': 'Litrage', 'Nombre': 'Nombre', });
lyr_Colonnetextile_3.set('fieldAliases', {'Nom': 'Nom', 'Type': 'Type', 'Longitude': 'Longitude', 'Latitudes': 'Latitudes', });
lyr_Dechetsdesoins_4.set('fieldAliases', {'Nom': 'Nom', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Composteurs_5.set('fieldAliases', {'Nom': 'Nom', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Decheterie_1.set('fieldImages', {'Nom': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Colonneaverre_2.set('fieldImages', {'Nom du rep': '', 'Latitude': '', 'Longitude': '', 'Etat': '', 'Affichage': '', 'Litrage': '', 'Nombre': '', });
lyr_Colonnetextile_3.set('fieldImages', {'Nom': '', 'Type': '', 'Longitude': '', 'Latitudes': '', });
lyr_Dechetsdesoins_4.set('fieldImages', {'Nom': '', 'Longitude': '', 'Latitude': '', });
lyr_Composteurs_5.set('fieldImages', {'Nom': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Decheterie_1.set('fieldLabels', {'Nom': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Colonneaverre_2.set('fieldLabels', {'Nom du rep': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Etat': 'no label', 'Affichage': 'no label', 'Litrage': 'no label', 'Nombre': 'no label', });
lyr_Colonnetextile_3.set('fieldLabels', {'Nom': 'no label', 'Type': 'no label', 'Longitude': 'no label', 'Latitudes': 'no label', });
lyr_Dechetsdesoins_4.set('fieldLabels', {'Nom': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Composteurs_5.set('fieldLabels', {'Nom': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Composteurs_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});