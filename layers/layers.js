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
var format_Communes_Aspres_1 = new ol.format.GeoJSON();
var features_Communes_Aspres_1 = format_Communes_Aspres_1.readFeatures(json_Communes_Aspres_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_Aspres_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_Aspres_1.addFeatures(features_Communes_Aspres_1);
var lyr_Communes_Aspres_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Communes_Aspres_1, 
                style: style_Communes_Aspres_1,
                interactive: true,
                title: '<img src="styles/legend/Communes_Aspres_1.png" /> Communes_Aspres'
            });
var format_Decheterie_2 = new ol.format.GeoJSON();
var features_Decheterie_2 = format_Decheterie_2.readFeatures(json_Decheterie_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Decheterie_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Decheterie_2.addFeatures(features_Decheterie_2);
var lyr_Decheterie_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Decheterie_2, 
                style: style_Decheterie_2,
                interactive: true,
                title: '<img src="styles/legend/Decheterie_2.png" /> Decheterie'
            });
var format_Colonneaverre_3 = new ol.format.GeoJSON();
var features_Colonneaverre_3 = format_Colonneaverre_3.readFeatures(json_Colonneaverre_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colonneaverre_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colonneaverre_3.addFeatures(features_Colonneaverre_3);
var lyr_Colonneaverre_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colonneaverre_3, 
                style: style_Colonneaverre_3,
                interactive: true,
                title: '<img src="styles/legend/Colonneaverre_3.png" /> Colonne a verre'
            });
var format_Colonnetextile_4 = new ol.format.GeoJSON();
var features_Colonnetextile_4 = format_Colonnetextile_4.readFeatures(json_Colonnetextile_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colonnetextile_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colonnetextile_4.addFeatures(features_Colonnetextile_4);
var lyr_Colonnetextile_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colonnetextile_4, 
                style: style_Colonnetextile_4,
                interactive: true,
                title: '<img src="styles/legend/Colonnetextile_4.png" /> Colonne textile'
            });
var format_Dechetsdesoins_5 = new ol.format.GeoJSON();
var features_Dechetsdesoins_5 = format_Dechetsdesoins_5.readFeatures(json_Dechetsdesoins_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dechetsdesoins_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dechetsdesoins_5.addFeatures(features_Dechetsdesoins_5);
var lyr_Dechetsdesoins_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dechetsdesoins_5, 
                style: style_Dechetsdesoins_5,
                interactive: true,
                title: '<img src="styles/legend/Dechetsdesoins_5.png" /> Dechets de soins'
            });
var format_Composteurs_6 = new ol.format.GeoJSON();
var features_Composteurs_6 = format_Composteurs_6.readFeatures(json_Composteurs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Composteurs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Composteurs_6.addFeatures(features_Composteurs_6);
var lyr_Composteurs_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Composteurs_6, 
                style: style_Composteurs_6,
                interactive: true,
                title: '<img src="styles/legend/Composteurs_6.png" /> Composteurs'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Communes_Aspres_1.setVisible(true);lyr_Decheterie_2.setVisible(true);lyr_Colonneaverre_3.setVisible(true);lyr_Colonnetextile_4.setVisible(true);lyr_Dechetsdesoins_5.setVisible(true);lyr_Composteurs_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Communes_Aspres_1,lyr_Decheterie_2,lyr_Colonneaverre_3,lyr_Colonnetextile_4,lyr_Dechetsdesoins_5,lyr_Composteurs_6];
lyr_Communes_Aspres_1.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COMM': 'CODE_COMM', 'INSEE_COM': 'INSEE_COM', 'NOM_COMM': 'NOM_COMM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_CANT': 'CODE_CANT', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REGION': 'NOM_REGION', });
lyr_Decheterie_2.set('fieldAliases', {'Nom': 'Nom', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Colonneaverre_3.set('fieldAliases', {'Nom du rep': 'Nom du rep', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Etat': 'Etat', 'Affichage': 'Affichage', 'Litrage': 'Litrage', 'Nombre': 'Nombre', });
lyr_Colonnetextile_4.set('fieldAliases', {'Nom': 'Nom', 'Type': 'Type', 'Longitude': 'Longitude', 'Latitudes': 'Latitudes', });
lyr_Dechetsdesoins_5.set('fieldAliases', {'Nom': 'Nom', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Composteurs_6.set('fieldAliases', {'Nom': 'Nom', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Communes_Aspres_1.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'CODE_COMM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COMM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_CANT': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REGION': 'TextEdit', });
lyr_Decheterie_2.set('fieldImages', {'Nom': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Colonneaverre_3.set('fieldImages', {'Nom du rep': '', 'Latitude': '', 'Longitude': '', 'Etat': '', 'Affichage': '', 'Litrage': '', 'Nombre': '', });
lyr_Colonnetextile_4.set('fieldImages', {'Nom': '', 'Type': '', 'Longitude': '', 'Latitudes': '', });
lyr_Dechetsdesoins_5.set('fieldImages', {'Nom': '', 'Longitude': '', 'Latitude': '', });
lyr_Composteurs_6.set('fieldImages', {'Nom': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Communes_Aspres_1.set('fieldLabels', {'ID_GEOFLA': 'no label', 'CODE_COMM': 'no label', 'INSEE_COM': 'no label', 'NOM_COMM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_CANT': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REGION': 'no label', });
lyr_Decheterie_2.set('fieldLabels', {'Nom': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Colonneaverre_3.set('fieldLabels', {'Nom du rep': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Etat': 'no label', 'Affichage': 'no label', 'Litrage': 'no label', 'Nombre': 'no label', });
lyr_Colonnetextile_4.set('fieldLabels', {'Nom': 'no label', 'Type': 'no label', 'Longitude': 'no label', 'Latitudes': 'no label', });
lyr_Dechetsdesoins_5.set('fieldLabels', {'Nom': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Composteurs_6.set('fieldLabels', {'Nom': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Composteurs_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});