const { Schema, models, model } = require("mongoose");

const MovieSchema = new Schema({
    title: { type: String },
    slug: { type: String, required: true },
    bgposter: { type: String },
    smposter: { type: String },
    titlecategory: { type: String },
    description: { type: String },
    rating: { type: String },
    duration: { type: String },
    year: { type: String },
    genre: [{ type: String }],
    language: { type: String },
    subtitle: { type: String },
    category: { type: String },
    size: { type: String },
    quaility: { type: String },
    youtubelink: { type: String },


    // If streaming For Movie 
    watchonline: { type: String },
    watchonline2: { type: String },
    watchonline1: { type: String },

    // If streaming For Series - S01
    watchep01: { type: String },
    watchEp02: { type: String },
    watchEp03: { type: String },
    watchEp04: { type: String },
    watchEp05: { type: String },
    watchEp06: { type: String },
    watchEp07: { type: String },
    watchEp08: { type: String },
    watchEp09: { type: String },
    watchEp10: { type: String },
    watchEp11: { type: String },
    watchEp12: { type: String },
    watchEp13: { type: String },
    watchEp14: { type: String },
    watchEp15: { type: String },
    watchEp16: { type: String },
    watchEp17: { type: String },
    watchEp18: { type: String },
    watchEp19: { type: String },
    watchEp20: { type: String },
    watchEp21: { type: String },
    watchEp22: { type: String },
    watchEp23: { type: String },
    watchEp24: { type: String },
    watchEp25: { type: String },

    // If streaming For Series - S02
    watchep01s2: { type: String },
    watchEp02s2: { type: String },
    watchEp03s2: { type: String },
    watchEp04s2: { type: String },
    watchEp05s2: { type: String },
    watchEp06s2: { type: String },
    watchEp07s2: { type: String },
    watchEp08s2: { type: String },
    watchEp09s2: { type: String },
    watchEp10s2: { type: String },
    watchEp11s2: { type: String },
    watchEp12s2: { type: String },
    watchEp13s2: { type: String },
    watchEp14s2: { type: String },
    watchEp15s2: { type: String },
    watchEp16s2: { type: String },
    watchEp17s2: { type: String },
    watchEp18s2: { type: String },
    watchEp19s2: { type: String },
    watchEp20s2: { type: String },
    watchEp21s2: { type: String },
    watchEp22s2: { type: String },
    watchEp23s2: { type: String },
    watchEp24s2: { type: String },
    watchEp25s2: { type: String },

    // If streaming For Series - S03
    watchep01s3: { type: String },
    watchEp02s3: { type: String },
    watchEp03s3: { type: String },
    watchEp04s3: { type: String },
    watchEp05s3: { type: String },
    watchEp06s3: { type: String },
    watchEp07s3: { type: String },
    watchEp08s3: { type: String },
    watchEp09s3: { type: String },
    watchEp10s3: { type: String },
    watchEp11s3: { type: String },
    watchEp12s3: { type: String },
    watchEp13s3: { type: String },
    watchEp14s3: { type: String },
    watchEp15s3: { type: String },
    watchEp16s3: { type: String },
    watchEp17s3: { type: String },
    watchEp18s3: { type: String },
    watchEp19s3: { type: String },
    watchEp20s3: { type: String },
    watchEp21s3: { type: String },
    watchEp22s3: { type: String },
    watchEp23s3: { type: String },
    watchEp24s3: { type: String },
    watchEp25s3: { type: String },


    // Download Link 480p
    dlinkDropgalaxy480p: { type: String },
    dlinkUpload4ever480p: { type: String },
    dlinkUploadrar480p: { type: String },
    dlinkMega4up480p: { type: String },
    dlinkUploady480p: { type: String },
    dlinkGdrive480p: { type: String },
    dlinkPhotojin480p: { type: String },
    dlinkHdcloud480p: { type: String },


    // Download Link 720p
    dlinkDropgalaxy720p: { type: String },
    dlinkUpload4ever720p: { type: String },
    dlinkUploadrar720p: { type: String },
    dlinkMega4up720p: { type: String },
    dlinkUploady720p: { type: String },
    dlinkGdrive720p: { type: String },
    dlinkPhotojin720p: { type: String },
    dlinkHdcloud720p: { type: String },

    // Download Link 1080p
    dlinkDropgalaxy1080p: { type: String },
    dlinkUpload4ever1080p: { type: String },
    dlinkUploadrar1080p: { type: String },
    dlinkMega4up1080p: { type: String },
    dlinkUploady1080p: { type: String },
    dlinkGdrive1080p: { type: String },
    dlinkPhotojin1080p: { type: String },
    dlinkHdcloud1080p: { type: String },

    // Download Link 4k
    dlinkDropgalaxy4k: { type: String },
    dlinkUpload4ever4k: { type: String },
    dlinkUploadrar4k: { type: String },
    dlinkMega4up4k: { type: String },
    dlinkUploady4k: { type: String },
    dlinkGdrive4k: { type: String },
    dlinkPhotojin4k: { type: String },
    dlinkHdcloud4k: { type: String },

    //Screen Shots
    sshot1: { type: String },
    sshot2: { type: String },
    sshot3: { type: String },
    sshot4: { type: String },

    //Per Unit Download Size
    size480p: { type: String },
    size720p: { type: String },
    size1080p: { type: String },
    size4k: { type: String },

    //Photo Button For Streaming
    pmovie: { type: String },
    smovie: { type: String },

    status: { type: String },

}, {
    timestamps: true



})

export const Movie = models.Movie || model('Movie', MovieSchema, 'movies');