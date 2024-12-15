import { mongooseConnect } from "@/lib/mongoose";
import { Movie } from "@/models/Movie";

// api for fetching data from mongodb database 
export default async function handle(req, res) {

    //if authenticated, connect to MongDb
    await mongooseConnect()

    const { method } = req;

    // When post req
    if (method === 'POST') {
        const { title, slug, bgposter, smposter, titlecategory, description, rating, duration, year, genre, subtitle, size, quaility, youtubelink, language, watchonline, watchonline2, category, status, watchep01, 
            watchEp02, watchEp03, watchEp04, watchEp05, watchEp06, watchEp07, watchEp08, watchEp09, watchEp10, watchEp11, watchEp12, watchEp13, watchEp14, watchEp15, watchEp16, watchEp17, watchEp18, 
            watchEp19, watchEp20, watchEp21, watchEp22, watchEp23, watchEp24, watchEp25, dlinkDropgalaxy480p, dlinkDropgalaxy720p, dlinkDropgalaxy1080p, dlinkDropgalaxy4k,
            dlinkUpload4ever480p, dlinkUpload4ever720p, dlinkUpload4ever1080p, dlinkUpload4ever4k, dlinkUploadrar480p, dlinkUploadrar720p, dlinkUploadrar1080p, dlinkUploadrar4k, dlinkMega4up480p, dlinkMega4up720p,
            dlinkMega4up1080p, dlinkMega4up4k, dlinkUploady480p, dlinkUploady720p, dlinkUploady1080p, dlinkUploady4k, dlinkGdrive480p, dlinkGdrive720p, dlinkGdrive1080p, dlinkGdrive4k, sshot1, sshot2, sshot3, sshot4, dlinkPhotojin480p, 
            dlinkPhotojin720p,  dlinkPhotojin1080p,  dlinkPhotojin4k, dlinkHdcloud480p, dlinkHdcloud720p, dlinkHdcloud1080p, dlinkHdcloud4k, size480p, size720p, size1080p, size4k } = req.body;

        const movieData = await Movie.create({
            title, slug, bgposter, smposter, titlecategory, description, rating, duration, year, genre, subtitle, size, quaility, youtubelink, language, watchonline, watchonline2, category, status, watchep01, 
            watchEp02, watchEp03, watchEp04, watchEp05, watchEp06, watchEp07, watchEp08, watchEp09, watchEp10, watchEp11, watchEp12, watchEp13, watchEp14, watchEp15, watchEp16, watchEp17, watchEp18, 
            watchEp19, watchEp20, watchEp21, watchEp22, watchEp23, watchEp24, watchEp25, dlinkDropgalaxy480p, dlinkDropgalaxy720p, dlinkDropgalaxy1080p, dlinkDropgalaxy4k,
            dlinkUpload4ever480p, dlinkUpload4ever720p, dlinkUpload4ever1080p, dlinkUpload4ever4k, dlinkUploadrar480p, dlinkUploadrar720p, dlinkUploadrar1080p, dlinkUploadrar4k, dlinkMega4up480p, dlinkMega4up720p,
            dlinkMega4up1080p, dlinkMega4up4k, dlinkUploady480p, dlinkUploady720p, dlinkUploady1080p, dlinkUploady4k, dlinkGdrive480p, dlinkGdrive720p, dlinkGdrive1080p, dlinkGdrive4k, sshot1, sshot2, sshot3, sshot4, dlinkPhotojin480p, 
            dlinkPhotojin720p,  dlinkPhotojin1080p,  dlinkPhotojin4k, dlinkHdcloud480p, dlinkHdcloud720p, dlinkHdcloud1080p, dlinkHdcloud4k, size480p, size720p, size1080p, size4k 

        })

        res.json(movieData)
    }

    // WHEN GET REQ
    if (method === 'GET') {
        if (req.query?.id) {
            res.json(await Movie.findById(req.query.id))
        } else {
            res.json((await Movie.find()).reverse())
        }

    }


    // WHEN UPDATE REQ
    if (method === 'PUT') {
        const { _id, title, slug, bgposter, smposter, titlecategory, description, rating, duration, year, genre, subtitle, size, quaility, youtubelink, language, watchonline, watchonline2, category, status, watchep01, 
            watchEp02, watchEp03, watchEp04, watchEp05, watchEp06, watchEp07, watchEp08, watchEp09, watchEp10, watchEp11, watchEp12, watchEp13, watchEp14, watchEp15, watchEp16, watchEp17, watchEp18, 
            watchEp19, watchEp20, watchEp21, watchEp22, watchEp23, watchEp24, watchEp25, dlinkDropgalaxy480p, dlinkDropgalaxy720p, dlinkDropgalaxy1080p, dlinkDropgalaxy4k,
            dlinkUpload4ever480p, dlinkUpload4ever720p, dlinkUpload4ever1080p, dlinkUpload4ever4k, dlinkUploadrar480p, dlinkUploadrar720p, dlinkUploadrar1080p, dlinkUploadrar4k, dlinkMega4up480p, dlinkMega4up720p,
            dlinkMega4up1080p, dlinkMega4up4k, dlinkUploady480p, dlinkUploady720p, dlinkUploady1080p, dlinkUploady4k, dlinkGdrive480p, dlinkGdrive720p, dlinkGdrive1080p, dlinkGdrive4k, sshot1, sshot2, sshot3, sshot4, dlinkPhotojin480p, 
            dlinkPhotojin720p,  dlinkPhotojin1080p,  dlinkPhotojin4k, dlinkHdcloud480p, dlinkHdcloud720p, dlinkHdcloud1080p, dlinkHdcloud4k, size480p, size720p, size1080p, size4k  } = req.body;

        await Movie.updateOne({ _id }, {
            title, slug, bgposter, smposter, titlecategory, description, rating, duration, year, genre, subtitle, size, quaility, youtubelink, language, watchonline, watchonline2, category, status, watchep01, 
            watchEp02, watchEp03, watchEp04, watchEp05, watchEp06, watchEp07, watchEp08, watchEp09, watchEp10, watchEp11, watchEp12, watchEp13, watchEp14, watchEp15, watchEp16, watchEp17, watchEp18, 
            watchEp19, watchEp20, watchEp21, watchEp22, watchEp23, watchEp24, watchEp25, dlinkDropgalaxy480p, dlinkDropgalaxy720p, dlinkDropgalaxy1080p, dlinkDropgalaxy4k,
            dlinkUpload4ever480p, dlinkUpload4ever720p, dlinkUpload4ever1080p, dlinkUpload4ever4k, dlinkUploadrar480p, dlinkUploadrar720p, dlinkUploadrar1080p, dlinkUploadrar4k, dlinkMega4up480p, dlinkMega4up720p,
            dlinkMega4up1080p, dlinkMega4up4k, dlinkUploady480p, dlinkUploady720p, dlinkUploady1080p, dlinkUploady4k, dlinkGdrive480p, dlinkGdrive720p, dlinkGdrive1080p, dlinkGdrive4k, sshot1, sshot2, sshot3, sshot4, dlinkPhotojin480p, 
            dlinkPhotojin720p,  dlinkPhotojin1080p,  dlinkPhotojin4k, dlinkHdcloud480p, dlinkHdcloud720p, dlinkHdcloud1080p, dlinkHdcloud4k, size480p, size720p, size1080p, size4k 
        });

        res.json(true);
    }

    // WHEN DELETE REQ

    if (method === 'DELETE') {
        if (req.query?.id) {
            await Movie.deleteOne({ _id: req.query?.id })
            res.json(true);
        }
    }
}

