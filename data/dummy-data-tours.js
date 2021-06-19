import Tour from '../models/tour';


// id, title, description, time, distance, imageUrl, artPath, artworksIDList
export const TOUR_LIST = [
    new Tour(
        1,
        'Grafittis - Best of',
        'Entdecken Sie bei einer gemütlichen Rundtour die beliebtesten Graffitis in Freiburg',
        '2 h, 50 min',
        '8 km',
        'https://i.imgur.com/alsKGLp.jpg',
        [],
        []
    ),
    new Tour(
        2,
        'Herderns Schätze',
        'Bei diesem Spaziergang lernen Sie die schönsten Kunstwerke in Herdern kennen',
        '1 h, 10 min',
        '3 km',
        'https://i.imgur.com/alsKGLp.jpg',
        [],
        []
    ),
    new Tour(
        3,
        'Unbekannte Schätze',
        'Diese Route führt Sie an vielen eher unbekannten Kunstwerken vorbei',
        '2 h',
        '7,5 km',
        'https://i.imgur.com/alsKGLp.jpg',
        [],
        []
    ),
]