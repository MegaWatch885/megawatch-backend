import axios, { all } from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";


export default function Movie(

    {
        _id,
        title: existingTitle,
        slug: existingSlug,
        bgposter: existingBgposter,
        smposter: existingSmposter,
        titlecategory: existingTitlecategory,
        description: existingDescription,
        rating: existingRating,
        duration: existingDuration,
        year: existingYear,
        genre: existingGenre,
        language: existingLanguage,
        subtitle: existingSubtitle,
        size: existingSize,
        quaility: existingQuaility,
        youtubelink: existingYoutubelink,
        category: existingCategory,

        // If streaming For Movie 
        watchonline: existingWatchonline,
        watchonline1: existingWatchonline1,
        watchonline2: existingWatchonline2,

        // If streaming For Series Server - 01
        watchep01: existingWatchep01,
        watchEp02: existingWatchEp02,
        watchEp03: existingWatchEp03,
        watchEp04: existingWatchEp04,
        watchEp05: existingWatchEp05,
        watchEp06: existingWatchEp06,
        watchEp07: existingWatchEp07,
        watchEp08: existingWatchEp08,
        watchEp09: existingWatchEp09,
        watchEp10: existingWatchEp10,
        watchEp11: existingWatchEp11,
        watchEp12: existingWatchEp12,
        watchEp13: existingWatchEp13,
        watchEp14: existingWatchEp14,
        watchEp15: existingWatchEp15,
        watchEp16: existingWatchEp16,
        watchEp17: existingWatchEp17,
        watchEp18: existingWatchEp18,
        watchEp19: existingWatchEp19,
        watchEp20: existingWatchEp20,
        watchEp21: existingWatchEp21,
        watchEp22: existingWatchEp22,
        watchEp23: existingWatchEp23,
        watchEp24: existingWatchEp24,
        watchEp25: existingWatchEp25,

        // If streaming For Series Server - 02
        watchep01s2: existingWatchep01S2,
        watchEp02s2: existingWatchEp02S2,
        watchEp03s2: existingWatchEp03S2,
        watchEp04s2: existingWatchEp04S2,
        watchEp05s2: existingWatchEp05S2,
        watchEp06s2: existingWatchEp06S2,
        watchEp07s2: existingWatchEp07S2,
        watchEp08s2: existingWatchEp08S2,
        watchEp09s2: existingWatchEp09S2,
        watchEp10s2: existingWatchEp10S2,
        watchEp11s2: existingWatchEp11S2,
        watchEp12s2: existingWatchEp12S2,
        watchEp13s2: existingWatchEp13S2,
        watchEp14s2: existingWatchEp14S2,
        watchEp15s2: existingWatchEp15S2,
        watchEp16s2: existingWatchEp16S2,
        watchEp17s2: existingWatchEp17S2,
        watchEp18s2: existingWatchEp18S2,
        watchEp19s2: existingWatchEp19S2,
        watchEp20s2: existingWatchEp20S2,
        watchEp21s2: existingWatchEp21S2,
        watchEp22s2: existingWatchEp22S2,
        watchEp23s2: existingWatchEp23S2,
        watchEp24s2: existingWatchEp24S2,
        watchEp25s2: existingWatchEp25S2,

        // If streaming For Series Server - 03
        watchep01s3: existingWatchep01S3,
        watchEp02s3: existingWatchEp02S3,
        watchEp03s3: existingWatchEp03S3,
        watchEp04s3: existingWatchEp04S3,
        watchEp05s3: existingWatchEp05S3,
        watchEp06s3: existingWatchEp06S3,
        watchEp07s3: existingWatchEp07S3,
        watchEp08s3: existingWatchEp08S3,
        watchEp09s3: existingWatchEp09S3,
        watchEp10s3: existingWatchEp10S3,
        watchEp11s3: existingWatchEp11S3,
        watchEp12s3: existingWatchEp12S3,
        watchEp13s3: existingWatchEp13S3,
        watchEp14s3: existingWatchEp14S3,
        watchEp15s3: existingWatchEp15S3,
        watchEp16s3: existingWatchEp16S3,
        watchEp17s3: existingWatchEp17S3,
        watchEp18s3: existingWatchEp18S3,
        watchEp19s3: existingWatchEp19S3,
        watchEp20s3: existingWatchEp20S3,
        watchEp21s3: existingWatchEp21S3,
        watchEp22s3: existingWatchEp22S3,
        watchEp23s3: existingWatchEp23S3,
        watchEp24s3: existingWatchEp24S3,
        watchEp25s3: existingWatchEp25S3,



        // Download Link 480p
        dlinkDropgalaxy480p: existingDlinkDropgalaxy480p,
        dlinkUpload4ever480p: existingDlinkUpload4ever480p,
        dlinkUploadrar480p: existingDlinkUploadrar480p,
        dlinkMega4up480p: existingDlinkMega4up480p,
        dlinkUploady480p: existingDlinkUploady480p,
        dlinkGdrive480p: existingDlinkGdrive480p,
        dlinkPhotojin480p: existingDlinkPhotojin480p,
        dlinkHdcloud480p: existingDlinkHdcloud480p,

        // Download Link 720p
        dlinkDropgalaxy720p: existingDlinkDropgalaxy720p,
        dlinkUpload4ever720p: existingDlinkUpload4ever720p,
        dlinkUploadrar720p: existingDlinkUploadrar720p,
        dlinkMega4up720p: existingDlinkMega4up720p,
        dlinkUploady720p: existingDlinkUploady720p,
        dlinkGdrive720p: existingDlinkGdrive720p,
        dlinkPhotojin720p: existingDlinkPhotojin720p,
        dlinkHdcloud720p: existingDlinkHdcloud720p,

        // Download Link 1080p
        dlinkDropgalaxy1080p: existingDlinkDropgalaxy1080p,
        dlinkUpload4ever1080p: existingDlinkUpload4ever1080p,
        dlinkUploadrar1080p: existingDlinkUploadrar1080p,
        dlinkMega4up1080p: existingDlinkMega4up1080p,
        dlinkUploady1080p: existingDlinkUploady1080p,
        dlinkGdrive1080p: existingDlinkGdrive1080p,
        dlinkPhotojin1080p: existingDlinkPhotojin1080p,
        dlinkHdcloud1080p: existingDlinkHdcloud1080p,

        // Download Link 4k
        dlinkDropgalaxy4k: existingDlinkDropgalaxy4k,
        dlinkUpload4ever4k: existingDlinkUpload4ever4k,
        dlinkUploadrar4k: existingDlinkUploadrar4k,
        dlinkMega4up4k: existingDlinkMega4up4k,
        dlinkUploady4k: existingDlinkUploady4k,
        dlinkGdrive4k: existingDlinkGdrive4k,
        dlinkPhotojin4k: existingDlinkPhotojin4k,
        dlinkHdcloud4k: existingDlinkHdcloud4k,

        // Screen Shots
        sshot1: existingSshot1,
        sshot2: existingSshot2,
        sshot3: existingSshot3,
        sshot4: existingSshot4,

        //Per Unit Download Size
        size480p: existingSize480p,
        size720p: existingSize720p,
        size1080p: existingSize1080p,
        size4k: existingSize4k,


        status: existingStatus,

    }

) {

    const [redirect, setRedirect] = useState(false);
    const router = useRouter();

    const [title, setTitle] = useState(existingTitle || '');
    const [slug, setSlug] = useState(existingSlug || '');
    const [bgposter, setBgposter] = useState(existingBgposter || '');
    const [smposter, setSmposter] = useState(existingSmposter || '');
    const [titlecategory, setTitlecategory] = useState(existingTitlecategory || ''); //
    const [description, setDescription] = useState(existingDescription || '');
    const [rating, setRating] = useState(existingRating || '');
    const [duration, setDuration] = useState(existingDuration || '');
    const [year, setYear] = useState(existingYear || '');
    const [genre, setGenre] = useState(existingGenre || []);
    const [language, setLanguage] = useState(existingLanguage || ''); //
    const [subtitle, setSubtitle] = useState(existingSubtitle || ''); //
    const [size, setSize] = useState(existingSize || ''); //
    const [quaility, setQuaility] = useState(existingQuaility || ''); //
    const [youtubelink, setYoutubelink] = useState(existingYoutubelink || ''); //

    // If Streaming For Movie
    const [watchonline, setWatchonline] = useState(existingWatchonline || ''); //
    const [watchonline1, setWatchonline1] = useState(existingWatchonline1 || ''); //
    const [watchonline2, setWatchonline2] = useState(existingWatchonline2 || ''); //


    // If Streaming For Series
    const [watchep01, setWatchep01] = useState(existingWatchep01 || ''); //
    const [watchEp02, setWatchEp02] = useState(existingWatchEp02 || ''); //
    const [watchEp03, setWatchEp03] = useState(existingWatchEp03 || ''); //
    const [watchEp04, setWatchEp04] = useState(existingWatchEp04 || ''); //
    const [watchEp05, setWatchEp05] = useState(existingWatchEp05 || ''); //
    const [watchEp06, setWatchEp06] = useState(existingWatchEp06 || ''); //
    const [watchEp07, setWatchEp07] = useState(existingWatchEp07 || ''); //
    const [watchEp08, setWatchEp08] = useState(existingWatchEp08 || ''); //
    const [watchEp09, setWatchEp09] = useState(existingWatchEp09 || ''); //
    const [watchEp10, setWatchEp10] = useState(existingWatchEp10 || ''); //
    const [watchEp11, setWatchEp11] = useState(existingWatchEp11 || ''); //
    const [watchEp12, setWatchEp12] = useState(existingWatchEp12 || ''); //
    const [watchEp13, setWatchEp13] = useState(existingWatchEp13 || ''); //
    const [watchEp14, setWatchEp14] = useState(existingWatchEp14 || ''); //
    const [watchEp15, setWatchEp15] = useState(existingWatchEp15 || ''); //
    const [watchEp16, setWatchEp16] = useState(existingWatchEp16 || ''); //
    const [watchEp17, setWatchEp17] = useState(existingWatchEp17 || ''); //
    const [watchEp18, setWatchEp18] = useState(existingWatchEp18 || ''); //
    const [watchEp19, setWatchEp19] = useState(existingWatchEp19 || ''); //
    const [watchEp20, setWatchEp20] = useState(existingWatchEp20 || ''); //
    const [watchEp21, setWatchEp21] = useState(existingWatchEp21 || ''); //
    const [watchEp22, setWatchEp22] = useState(existingWatchEp22 || ''); //
    const [watchEp23, setWatchEp23] = useState(existingWatchEp23 || ''); //
    const [watchEp24, setWatchEp24] = useState(existingWatchEp24 || ''); //
    const [watchEp25, setWatchEp25] = useState(existingWatchEp25 || ''); //

    // If Streaming For Series Server - 2
    const [watchep01s2, setWatchep01S2] = useState(existingWatchep01S2 || ''); //
    const [watchEp02s2, setWatchEp02S2] = useState(existingWatchEp02S2 || ''); //
    const [watchEp03s2, setWatchEp03S2] = useState(existingWatchEp03S2 || ''); //
    const [watchEp04s2, setWatchEp04S2] = useState(existingWatchEp04S2 || ''); //
    const [watchEp05s2, setWatchEp05S2] = useState(existingWatchEp05S2 || ''); //
    const [watchEp06s2, setWatchEp06S2] = useState(existingWatchEp06S2 || ''); //
    const [watchEp07s2, setWatchEp07S2] = useState(existingWatchEp07S2 || ''); //
    const [watchEp08s2, setWatchEp08S2] = useState(existingWatchEp08S2 || ''); //
    const [watchEp09s2, setWatchEp09S2] = useState(existingWatchEp09S2 || ''); //
    const [watchEp10s2, setWatchEp10S2] = useState(existingWatchEp10S2 || ''); //
    const [watchEp11s2, setWatchEp11S2] = useState(existingWatchEp11S2 || ''); //
    const [watchEp12s2, setWatchEp12S2] = useState(existingWatchEp12S2 || ''); //
    const [watchEp13s2, setWatchEp13S2] = useState(existingWatchEp13S2 || ''); //
    const [watchEp14s2, setWatchEp14S2] = useState(existingWatchEp14S2 || ''); //
    const [watchEp15s2, setWatchEp15S2] = useState(existingWatchEp15S2 || ''); //
    const [watchEp16s2, setWatchEp16S2] = useState(existingWatchEp16S2 || ''); //
    const [watchEp17s2, setWatchEp17S2] = useState(existingWatchEp17S2 || ''); //
    const [watchEp18s2, setWatchEp18S2] = useState(existingWatchEp18S2 || ''); //
    const [watchEp19s2, setWatchEp19S2] = useState(existingWatchEp19S2 || ''); //
    const [watchEp20s2, setWatchEp20S2] = useState(existingWatchEp20S2 || ''); //
    const [watchEp21s2, setWatchEp21S2] = useState(existingWatchEp21S2 || ''); //
    const [watchEp22s2, setWatchEp22S2] = useState(existingWatchEp22S2 || ''); //
    const [watchEp23s2, setWatchEp23S2] = useState(existingWatchEp23S2 || ''); //
    const [watchEp24s2, setWatchEp24S2] = useState(existingWatchEp24S2 || ''); //
    const [watchEp25s2, setWatchEp25S2] = useState(existingWatchEp25S2 || ''); //

    // If Streaming For Series Server - 2
    const [watchep01s3, setWatchep01S3] = useState(existingWatchep01S3 || ''); //
    const [watchEp02s3, setWatchEp02S3] = useState(existingWatchEp02S3 || ''); //
    const [watchEp03s3, setWatchEp03S3] = useState(existingWatchEp03S3 || ''); //
    const [watchEp04s3, setWatchEp04S3] = useState(existingWatchEp04S3 || ''); //
    const [watchEp05s3, setWatchEp05S3] = useState(existingWatchEp05S3 || ''); //
    const [watchEp06s3, setWatchEp06S3] = useState(existingWatchEp06S3 || ''); //
    const [watchEp07s3, setWatchEp07S3] = useState(existingWatchEp07S3 || ''); //
    const [watchEp08s3, setWatchEp08S3] = useState(existingWatchEp08S3 || ''); //
    const [watchEp09s3, setWatchEp09S3] = useState(existingWatchEp09S3 || ''); //
    const [watchEp10s3, setWatchEp10S3] = useState(existingWatchEp10S3 || ''); //
    const [watchEp11s3, setWatchEp11S3] = useState(existingWatchEp11S3 || ''); //
    const [watchEp12s3, setWatchEp12S3] = useState(existingWatchEp12S3 || ''); //
    const [watchEp13s3, setWatchEp13S3] = useState(existingWatchEp13S3 || ''); //
    const [watchEp14s3, setWatchEp14S3] = useState(existingWatchEp14S3 || ''); //
    const [watchEp15s3, setWatchEp15S3] = useState(existingWatchEp15S3 || ''); //
    const [watchEp16s3, setWatchEp16S3] = useState(existingWatchEp16S3 || ''); //
    const [watchEp17s3, setWatchEp17S3] = useState(existingWatchEp17S3 || ''); //
    const [watchEp18s3, setWatchEp18S3] = useState(existingWatchEp18S3 || ''); //
    const [watchEp19s3, setWatchEp19S3] = useState(existingWatchEp19S3 || ''); //
    const [watchEp20s3, setWatchEp20S3] = useState(existingWatchEp20S3 || ''); //
    const [watchEp21s3, setWatchEp21S3] = useState(existingWatchEp21S3 || ''); //
    const [watchEp22s3, setWatchEp22S3] = useState(existingWatchEp22S3 || ''); //
    const [watchEp23s3, setWatchEp23S3] = useState(existingWatchEp23S3 || ''); //
    const [watchEp24s3, setWatchEp24S3] = useState(existingWatchEp24S3 || ''); //
    const [watchEp25s3, setWatchEp25S3] = useState(existingWatchEp25S3 || ''); //


    // Download For 480p
    const [dlinkDropgalaxy480p, setDlinkDropgalaxy480p] = useState(existingDlinkDropgalaxy480p || ''); //
    const [dlinkUpload4ever480p, setDlinkUpload4ever480p] = useState(existingDlinkUpload4ever480p || ''); //
    const [dlinkUploadrar480p, setDlinkUploadrar480p] = useState(existingDlinkUploadrar480p || ''); //
    const [dlinkMega4up480p, setDlinkMega4up480p] = useState(existingDlinkMega4up480p || ''); //
    const [dlinkUploady480p, setDlinkUploady480p] = useState(existingDlinkUploady480p || ''); //
    const [dlinkGdrive480p, setDlinkGdrive480p] = useState(existingDlinkGdrive480p || ''); //
    const [dlinkPhotojin480p, setDlinkPhotojin480p] = useState(existingDlinkPhotojin480p || ''); //
    const [dlinkHdcloud480p, setDlinkHdcloud480p] = useState(existingDlinkHdcloud480p || ''); //

    // Download For 720p
    const [dlinkDropgalaxy720p, setDlinkDropgalaxy720p] = useState(existingDlinkDropgalaxy720p || ''); //
    const [dlinkUpload4ever720p, setDlinkUpload4ever720p] = useState(existingDlinkUpload4ever720p || ''); //
    const [dlinkUploadrar720p, setDlinkUploadrar720p] = useState(existingDlinkUploadrar720p || ''); //
    const [dlinkMega4up720p, setDlinkMega4up720p] = useState(existingDlinkMega4up720p || ''); //
    const [dlinkUploady720p, setDlinkUploady720p] = useState(existingDlinkUploady720p || ''); //
    const [dlinkGdrive720p, setDlinkGdrive720p] = useState(existingDlinkGdrive720p || ''); //
    const [dlinkPhotojin720p, setDlinkPhotojin720p] = useState(existingDlinkPhotojin720p || ''); //
    const [dlinkHdcloud720p, setDlinkHdcloud720p] = useState(existingDlinkHdcloud720p || ''); //

    // Download For 1080p
    const [dlinkDropgalaxy1080p, setDlinkDropgalaxy1080p] = useState(existingDlinkDropgalaxy1080p || ''); //
    const [dlinkUpload4ever1080p, setDlinkUpload4ever1080p] = useState(existingDlinkUpload4ever1080p || ''); //
    const [dlinkUploadrar1080p, setDlinkUploadrar1080p] = useState(existingDlinkUploadrar1080p || ''); //
    const [dlinkMega4up1080p, setDlinkMega4up1080p] = useState(existingDlinkMega4up1080p || ''); //
    const [dlinkUploady1080p, setDlinkUploady1080p] = useState(existingDlinkUploady1080p || ''); //
    const [dlinkGdrive1080p, setDlinkGdrive1080p] = useState(existingDlinkGdrive1080p || ''); //
    const [dlinkPhotojin1080p, setDlinkPhotojin1080p] = useState(existingDlinkPhotojin1080p || ''); //
    const [dlinkHdcloud1080p, setDlinkHdcloud1080p] = useState(existingDlinkHdcloud1080p || ''); //

    // Download For 4k
    const [dlinkDropgalaxy4k, setDlinkDropgalaxy4k] = useState(existingDlinkDropgalaxy4k || ''); //
    const [dlinkUpload4ever4k, setDlinkUpload4ever4k] = useState(existingDlinkUpload4ever4k || ''); //
    const [dlinkUploadrar4k, setDlinkUploadrar4k] = useState(existingDlinkUploadrar4k || ''); //
    const [dlinkMega4up4k, setDlinkMega4up4k] = useState(existingDlinkMega4up4k || ''); //
    const [dlinkUploady4k, setDlinkUploady4k] = useState(existingDlinkUploady4k || ''); //
    const [dlinkGdrive4k, setDlinkGdrive4k] = useState(existingDlinkGdrive4k || ''); //
    const [dlinkPhotojin4k, setDlinkPhotojin4k] = useState(existingDlinkPhotojin4k || ''); //
    const [dlinkHdcloud4k, setDlinkHdcloud4k] = useState(existingDlinkHdcloud4k || ''); //

    // Screen Shots
    const [sshot1, setSshot1] = useState(existingSshot1 || ''); //
    const [sshot2, setSshot2] = useState(existingSshot2 || ''); //
    const [sshot3, setSshot3] = useState(existingSshot3 || ''); //
    const [sshot4, setSshot4] = useState(existingSshot4 || ''); //

    //Per Unit Download Size
    const [size480p, setSize480p] = useState(existingSize480p || ''); //
    const [size720p, setSize720p] = useState(existingSize720p || ''); //
    const [size1080p, setSize1080p] = useState(existingSize1080p || ''); //
    const [size4k, setSize4k] = useState(existingSize4k || ''); //



    const [category, setCategory] = useState(existingCategory || '');
    const [status, setStatus] = useState(existingStatus || '');

    const [shows1, setShowS1] = useState(false)
    const [shows2, setShowS2] = useState(false)
    const [shows3, setShowS3] = useState(false)



    async function createMovie(ev) {
        ev.preventDefault();

        const data = {
            title, slug, bgposter, smposter, titlecategory, description, rating, duration, year, genre, subtitle, size, quaility, youtubelink, language, watchonline, watchonline1, watchonline2, category, status, watchep01,
            watchEp02, watchEp03, watchEp04, watchEp05, watchEp06, watchEp07, watchEp08, watchEp09, watchEp10, watchEp11, watchEp12, watchEp13, watchEp14, watchEp15, watchEp16, watchEp17, watchEp18,
            watchEp19, watchEp20, watchEp21, watchEp22, watchEp23, watchEp24, watchEp25,
            watchep01s2, watchEp02s2, watchEp03s2, watchEp04s2, watchEp05s2, watchEp06s2, watchEp07s2, watchEp08s2, watchEp09s2, watchEp10s2, watchEp11s2, watchEp12s2, watchEp13s2, watchEp14s2, watchEp15s2, watchEp16s2, watchEp17s2, watchEp18s2,
            watchEp19s2, watchEp20s2, watchEp21s2, watchEp22s2, watchEp23s2, watchEp24s2, watchEp25s2,
            watchep01s3, watchEp02s3, watchEp03s3, watchEp04s3, watchEp05s3, watchEp06s3, watchEp07s3, watchEp08s3, watchEp09s3, watchEp10s3, watchEp11s3, watchEp12s3, watchEp13s3, watchEp14s3, watchEp15s3, watchEp16s3, watchEp17s3, watchEp18s3,
            watchEp19s3, watchEp20s3, watchEp21s3, watchEp22s3, watchEp23s3, watchEp24s3, watchEp25s3,
            dlinkDropgalaxy480p, dlinkDropgalaxy720p, dlinkDropgalaxy1080p, dlinkDropgalaxy4k,
            dlinkUpload4ever480p, dlinkUpload4ever720p, dlinkUpload4ever1080p, dlinkUpload4ever4k, dlinkUploadrar480p, dlinkUploadrar720p, dlinkUploadrar1080p, dlinkUploadrar4k, dlinkMega4up480p, dlinkMega4up720p,
            dlinkMega4up1080p, dlinkMega4up4k, dlinkUploady480p, dlinkUploady720p, dlinkUploady1080p, dlinkUploady4k, dlinkGdrive480p, dlinkGdrive720p, dlinkGdrive1080p, dlinkGdrive4k, sshot1, sshot2, sshot3, sshot4, dlinkPhotojin480p, dlinkPhotojin720p, dlinkPhotojin1080p, dlinkPhotojin4k,
            dlinkHdcloud480p, dlinkHdcloud720p, dlinkHdcloud1080p, dlinkHdcloud4k, size480p, size720p, size1080p, size4k
        };


        if (_id) {
            await axios.put('/api/getmovies', { ...data, _id })
        } else {
            await axios.post('/api/getmovies', data);
        }

        setRedirect(true);
    };


    if (redirect) {
        router.push('/')
        return null;
    };

    // url for every space will be generate - for every time press space
    const handleSlugChange = (ev) => {
        const inputValue = ev.target.value;
        // console.log("Input Value:", inputValue);

        const newSlug = inputValue
            // Replace spaces with hyphens
            .replace(/\s+/g, '-');

        console.log("New Slug:", newSlug);
        setSlug(newSlug);
    };

    // movie category
    const categories = ["Bollywood", "Hollywood", "South", "Gujarati", "Marvel_Studio", "Tv_Shows", "Web_Series",];



    return <>
        <Head>
            <title>Add Movie page</title>
        </Head>


        <form onSubmit={createMovie} className='addmovieform'>

            <div className="w-100 flex gap-3 mt-1">
                {bgposter ? <div className="bgposter flex flex-col w-70 flex-left">
                    <img src={bgposter} id="prv" alt="image" />
                    <label htmlFor="prv" className="w-100">Background Image Preview</label>
                </div> : null}
                {smposter ? <div className="smposter flex flex-col w-33 flex-left">
                    <img src={smposter} id="sprv" alt="image" />
                    <label htmlFor="sprv">Smposter Preview</label>
                </div> : null}
            </div>

            <div className="formdata w-100 flex flex-sb mt-3 flex-left">

                {/* Left Side Data */}
                <div className="w-50 flex flex-col flex-left">

                    {/* Movie Background Image */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="bgposter">Background Poster</label>
                        <input type="text" id='bgposter' placeholder='Bgposter image link'
                            value={bgposter}
                            onChange={ev => setBgposter(ev.target.value)}
                        />
                    </div>


                    {/* Movie title */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="title">Title</label>
                        <input type="text" id='title' required placeholder='Enter small title'
                            value={title}
                            onChange={ev => setTitle(ev.target.value)}
                        />
                    </div>

                    {/* description movie */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="description">Storyline</label>
                        <textarea type="text" id='description' placeholder='Enter Small Storyline'
                            value={description}
                            onChange={ev => setDescription(ev.target.value)}
                        />
                    </div>

                    {/* rating movie */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="rating">Rating</label>
                        <input type="number" id='rating' placeholder='rating'
                            value={rating}
                            onChange={ev => {
                                // Ensure the input does not exceed 10.0
                                let newValue = ev.target.value <= 10.0 ? ev.target.value : 10.0;
                                // Ensure the input is not less than 0
                                newValue = newValue >= 0 ? newValue : 0;
                                setRating(newValue);
                            }}
                            step="0.1" // Define the step increment as 0.1
                            max="10.0" // Set the maximum value to 10.0
                            min="0"    // Set the minimum value to 0
                        />
                    </div>

                    {/* duration movie */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="duration">Duration</label>
                        <input type="text" id='duration' placeholder='Duration of the movie'
                            value={duration}
                            onChange={ev => setDuration(ev.target.value)}
                        />
                    </div>


                    {/* Downloadlinks:- */}

                    {/* Downloadlinks (480p) */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label >Download 480p Links :</label>

                        {/* Dropgalaxy 480p */}
                        <input className="downloadsec" htmlFor="dlinkDropgalaxy480p" type="text" id='dlinkDropgalaxy480p' placeholder='Dropgalaxy 480p Download Link'
                            value={dlinkDropgalaxy480p}
                            onChange={ev => setDlinkDropgalaxy480p(ev.target.value)}
                        />

                        {/* Upload4ever 480p */}
                        <input className="downloadsec" htmlFor="dlinkUpload4ever480p" type="text" id='dlinkUpload4ever480p' placeholder='Upload4ever 480p Download Link'
                            value={dlinkUpload4ever480p}
                            onChange={ev => setDlinkUpload4ever480p(ev.target.value)}
                        />

                        {/* Uploadrar 480p */}
                        <input className="downloadsec" htmlFor="dlinkUploadrar480p" type="text" id='dlinkUploadrar480p' placeholder='Uploadrar 480p Download Link'
                            value={dlinkUploadrar480p}
                            onChange={ev => setDlinkUploadrar480p(ev.target.value)}
                        />

                        {/* Mega4up 480p */}
                        <input className="downloadsec" htmlFor="dlinkMega4up480p" type="text" id='dlinkMega4up480p' placeholder='Mega4up 480p Download Link'
                            value={dlinkMega4up480p}
                            onChange={ev => setDlinkMega4up480p(ev.target.value)}
                        />


                        {/* Uploady 480p */}
                        <input className="downloadsec" htmlFor="dlinkUploady480p" type="text" id='dlinkUploady480p' placeholder='Uploady 480p Download Link'
                            value={dlinkUploady480p}
                            onChange={ev => setDlinkUploady480p(ev.target.value)}
                        />

                        {/* Gdrive 480p */}
                        <input className="downloadsec" htmlFor="dlinkGdrive480p" type="text" id='dlinkGdrive480p' placeholder='GDrive 480p Download Link'
                            value={dlinkGdrive480p}
                            onChange={ev => setDlinkGdrive480p(ev.target.value)}
                        />

                        {/* Photojin 480p */}
                        <input className="downloadsec" htmlFor="dlinkPhotojin480p" type="text" id='dlinkPhotojin480p' placeholder='Photojin 480p Download Link'
                            value={dlinkPhotojin480p}
                            onChange={ev => setDlinkPhotojin480p(ev.target.value)}
                        />

                        {/* HD Cloud 480p */}
                        <input className="downloadsec" htmlFor="dlinkHdcloud480p" type="text" id='dlinkHdcloud480p' placeholder='HD Cloud 480p Download Link'
                            value={dlinkHdcloud480p}
                            onChange={ev => setDlinkHdcloud480p(ev.target.value)}
                        />


                    </div>

                    {/* Downloadlinks (720p) */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="downloadlink720p">Download 720 Links :</label>

                        {/* Dropgalaxy 720p */}
                        <input className="downloadsec" htmlFor="dlinkDropgalaxy720p" type="text" id='dlinkDropgalaxy720p' placeholder='Dropgalaxy 720p Download Link'
                            value={dlinkDropgalaxy720p}
                            onChange={ev => setDlinkDropgalaxy720p(ev.target.value)}
                        />

                        {/* Upload4ever 720p */}
                        <input className="downloadsec" htmlFor="dlinkUpload4ever720p" type="text" id='dlinkUpload4ever720p' placeholder='Upload4ever 720p Download Link'
                            value={dlinkUpload4ever720p}
                            onChange={ev => setDlinkUpload4ever720p(ev.target.value)}
                        />

                        {/* Uploadrar 720p*/}
                        <input className="downloadsec" htmlFor="dlinkUploadrar720p" type="text" id='dlinkUploadrar720p' placeholder='Uploadrar 720p Download Link'
                            value={dlinkUploadrar720p}
                            onChange={ev => setDlinkUploadrar720p(ev.target.value)}
                        />

                        {/* Mega4up 720p */}
                        <input className="downloadsec" htmlFor="dlinkMega4up720p" type="text" id='dlinkMega4up720p' placeholder='Mega4up 720p Download Link'
                            value={dlinkMega4up720p}
                            onChange={ev => setDlinkMega4up720p(ev.target.value)}
                        />


                        {/* Uploady 720p */}
                        <input className="downloadsec" htmlFor="dlinkUploady720p" type="text" id='dlinkUploady720p' placeholder='Uploady 720p Download Link'
                            value={dlinkUploady720p}
                            onChange={ev => setDlinkUploady720p(ev.target.value)}
                        />

                        {/* Gdrive 720 */}
                        <input className="downloadsec" htmlFor="dlinkGdrive720p" type="text" id='dlinkGdrive720p' placeholder='GDrive 720p Download Link'
                            value={dlinkGdrive720p}
                            onChange={ev => setDlinkGdrive720p(ev.target.value)}
                        />

                        {/* Photojin 720p */}
                        <input className="downloadsec" htmlFor="dlinkPhotojin720p" type="text" id='dlinkPhotojin720p' placeholder='Photojin 720p Download Link'
                            value={dlinkPhotojin720p}
                            onChange={ev => setDlinkPhotojin720p(ev.target.value)}
                        />

                        {/* HD Cloud 720p */}
                        <input className="downloadsec" htmlFor="dlinkHdcloud720p" type="text" id='dlinkHdcloud720p' placeholder='HD Cloud 720p Download Link'
                            value={dlinkHdcloud720p}
                            onChange={ev => setDlinkHdcloud720p(ev.target.value)}
                        />

                    </div>

                    {/* Downloadlinks (1080p) */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="downloadlink1080p">Download 1080p Links :</label>

                        {/* Dropgalaxy 1080p */}
                        <input className="downloadsec" htmlFor="dlinkDropgalaxy1080p" type="text" id='dlinkDropgalaxy1080p' placeholder='Dropgalaxy 1080p Download Link'
                            value={dlinkDropgalaxy1080p}
                            onChange={ev => setDlinkDropgalaxy1080p(ev.target.value)}
                        />

                        {/* Upload4ever 1080p */}
                        <input className="downloadsec" htmlFor="dlinkUpload4ever1080p" type="text" id='dlinkUpload4ever1080p' placeholder='Upload4ever 1080p Download Link'
                            value={dlinkUpload4ever1080p}
                            onChange={ev => setDlinkUpload4ever1080p(ev.target.value)}
                        />

                        {/* Uploadrar 1080p*/}
                        <input className="downloadsec" htmlFor="dlinkUploadrar1080p" type="text" id='dlinkUploadrar1080p' placeholder='Uploadrar 1080p Download Link'
                            value={dlinkUploadrar1080p}
                            onChange={ev => setDlinkUploadrar1080p(ev.target.value)}
                        />

                        {/* Mega4up 1080p */}
                        <input className="downloadsec" htmlFor="dlinkMega4up1080p" type="text" id='dlinkMega4up1080p' placeholder='Mega4up 1080p Download Link'
                            value={dlinkMega4up1080p}
                            onChange={ev => setDlinkMega4up1080p(ev.target.value)}
                        />


                        {/* Uploady 1080p */}
                        <input className="downloadsec" htmlFor="dlinkUploady1080p" type="text" id='dlinkUploady1080p' placeholder='Uploady 1080p Download Link'
                            value={dlinkUploady1080p}
                            onChange={ev => setDlinkUploady1080p(ev.target.value)}
                        />

                        {/* Gdrive 1080p */}
                        <input className="downloadsec" htmlFor="dlinkGdrive1080p" type="text" id='dlinkGdrive1080p' placeholder='GDrive 1080p Download Link'
                            value={dlinkGdrive1080p}
                            onChange={ev => setDlinkGdrive1080p(ev.target.value)}
                        />

                        {/* Photojin 1080p */}
                        <input className="downloadsec" htmlFor="dlinkPhotojin1080p" type="text" id='dlinkPhotojin1080p' placeholder='Photojin 1080p Download Link'
                            value={dlinkPhotojin1080p}
                            onChange={ev => setDlinkPhotojin1080p(ev.target.value)}
                        />

                        {/* HD Cloud 720p */}
                        <input className="downloadsec" htmlFor="dlinkHdcloud1080p" type="text" id='dlinkHdcloud1080p' placeholder='HD Cloud 1080p Download Link'
                            value={dlinkHdcloud1080p}
                            onChange={ev => setDlinkHdcloud1080p(ev.target.value)}
                        />



                    </div>

                    {/* Downloadlinks (4k) */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="downloadlink4k">Download 4k Links :</label>

                        {/* Dropgalaxy 4k */}
                        <input className="downloadsec" htmlFor="dlinkDropgalaxy4k" type="text" id='dlinkDropgalaxy4k' placeholder='Dropgalaxy 4k Download Link'
                            value={dlinkDropgalaxy4k}
                            onChange={ev => setDlinkDropgalaxy4k(ev.target.value)}
                        />

                        {/* Upload4ever 4k */}
                        <input className="downloadsec" htmlFor="dlinkUpload4ever4k" type="text" id='dlinkUpload4ever4k' placeholder='Upload4ever 4k Download Link'
                            value={dlinkUpload4ever4k}
                            onChange={ev => setDlinkUpload4ever4k(ev.target.value)}
                        />

                        {/* Uploadrar 4k */}
                        <input className="downloadsec" htmlFor="dlinkUploadrar4k" type="text" id='dlinkUploadrar4k' placeholder='Uploadrar 4k Download Link'
                            value={dlinkUploadrar4k}
                            onChange={ev => setDlinkUploadrar4k(ev.target.value)}
                        />

                        {/* Mega4up 4k */}
                        <input className="downloadsec" htmlFor="dlinkMega4up4k" type="text" id='dlinkMega4up4k' placeholder='Mega4up 4k Download Link'
                            value={dlinkMega4up4k}
                            onChange={ev => setDlinkMega4up4k(ev.target.value)}
                        />


                        {/* Uploady 4k */}
                        <input className="downloadsec" htmlFor="dlinkUploady4k" type="text" id='dlinkUploady4k' placeholder='Uploady 4k Download Link'
                            value={dlinkUploady4k}
                            onChange={ev => setDlinkUploady4k(ev.target.value)}
                        />

                        {/* Gdrive 4k */}
                        <input className="downloadsec" htmlFor="dlinkGdrive4k" type="text" id='dlinkGdrive4k' placeholder='GDrive 4k Download Link'
                            value={dlinkGdrive4k}
                            onChange={ev => setDlinkGdrive4k(ev.target.value)}
                        />

                        {/* Photojin 4k */}
                        <input className="downloadsec" htmlFor="dlinkPhotojin4k" type="text" id='dlinkPhotojin4k' placeholder='Photojin 4k Download Link'
                            value={dlinkPhotojin4k}
                            onChange={ev => setDlinkPhotojin4k(ev.target.value)}
                        />

                        {/* HD Cloud 720p */}
                        <input className="downloadsec" htmlFor="dlinkHdcloud4k" type="text" id='dlinkHdcloud4k' placeholder='HD Cloud 4k Download Link'
                            value={dlinkHdcloud4k}
                            onChange={ev => setDlinkHdcloud4k(ev.target.value)}
                        />

                    </div>


                    {/* Movie status (Draft or Publish) */}
                    <div className='w-100 flex flex-col flex-left mb-2'>
                        <label>Status</label>
                        <div className="flex gap-05">
                            <input
                                type="radio"
                                id="draft"
                                name="status"
                                value="draft"
                                checked={status === 'draft'}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <label htmlFor="draft" >Draft</label>
                        </div>
                        <div className="flex gap-05">
                            <input
                                type="radio"
                                id="publish"
                                name="status"
                                value="publish"
                                checked={status === 'publish'}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <label htmlFor="publish">Publish</label>
                        </div>
                    </div>


                </div>

                {/* Right Side Data */}
                <div className="w-50 flex flex-col flex-left">
                    {/* Movie Small Poster */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="smposter">Main Poster</label>
                        <input type="text" id='smposter' placeholder='smposter image link'
                            value={smposter}
                            onChange={ev => setSmposter(ev.target.value)}
                        />
                    </div>

                    {/* Movie slug url */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="slug">Slug (URL)</label>
                        <input type="text" id='slug' required placeholder='Enter slug title'
                            value={slug}
                            onChange={handleSlugChange}
                        />
                    </div>

                    {/* Release Year of the movie */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="year">Year</label>
                        <input type="text" id='year' placeholder='Release Year'
                            value={year}
                            onChange={ev => setYear(ev.target.value)}
                        />
                    </div>
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="youtubelink">Youtube Link</label>
                        <input type="text" id='youtubelink' placeholder='Youtube embed link'
                            value={youtubelink}
                            onChange={ev => setYoutubelink(ev.target.value)}
                        />
                    </div>

                    {/* language of the movie */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="language">Languages</label>
                        <input type="text" id='language' placeholder='Language'
                            value={language}
                            onChange={ev => setLanguage(ev.target.value)}
                        />

                    </div>

                    {/* Quality of the movie */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="quaility">Select Quaility</label>
                        <select onChange={(e) => setQuaility(e.target.value)} name="quaility" id="quaility" value={quaility}>
                            <option value="">Select Quaility</option>
                            <option value="480p || 720p || 1080p - WEB-DL">480p || 720p || 1080p - WEB-DL</option>
                            <option value="480p || 720p || 1080p || 2160p 4K - WEB-DL">480p || 720p || 1080p || 2160p 4K - WEB-DL</option>
                            <option value="480p || 720p || 1080p - HDTS">480p || 720p || 1080p - HDTS</option>
                        </select>
                    </div>

                    {/* subtitle of the movie */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="subtitle">Select subtitle</label>
                        <select onChange={(e) => setSubtitle(e.target.value)} name="subtitle" id="subtitle" value={subtitle}>
                            <option value="">Select subtitle</option>
                            <option value="Hindi">Hindi</option>
                            <option value="English">English</option>
                        </select>
                    </div>


                    {/* size of the movie */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="size">Select size</label>
                        <input type="text" id='size' placeholder='350MB || 1GB || 2GB || 4GB -- Each Quality'
                            value={size}
                            onChange={ev => setSize(ev.target.value)}
                        />
                    </div>

                    {/* per quality download size */}

                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="size480p">Select Size 480p :</label>
                        <input type="text" id='size480p' placeholder='480p Size Quality'
                            value={size480p}
                            onChange={ev => setSize480p(ev.target.value)}
                        />
                    </div>

                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="size720p">Select Size 720p :</label>
                        <input type="text" id='size720p' placeholder='720p Size Quality'
                            value={size720p}
                            onChange={ev => setSize720p(ev.target.value)}
                        />
                    </div>

                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="size1080p">Select Size 1080p :</label>
                        <input type="text" id='size1080p' placeholder='1080p Size Quality'
                            value={size1080p}
                            onChange={ev => setSize1080p(ev.target.value)}
                        />
                    </div>

                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="size4k">Select Size 4k:</label>
                        <input type="text" id='size4k' placeholder='4k Size Quality'
                            value={size4k}
                            onChange={ev => setSize4k(ev.target.value)}
                        />
                    </div>

                    {/* If Streaming For Movies (watchonline) */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="watchonline">Watch Online Link Server -1</label>
                        <input type="text" id='watchonline' placeholder='Movie watch online link server - 1'
                            value={watchonline}
                            onChange={ev => setWatchonline(ev.target.value)}
                        />
                    </div>

                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="watchonline1">Watch Online Link Server -2</label>
                        <input type="text" id='watchonline1' placeholder='Movie watch online link server - 2'
                            value={watchonline1}
                            onChange={ev => setWatchonline1(ev.target.value)}
                        />
                    </div>

                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="watchonline2">Watch Online Link Server -3</label>
                        <input type="text" id='watchonline2' placeholder='Movie watch online link server - 3'
                            value={watchonline2}
                            onChange={ev => setWatchonline2(ev.target.value)}
                        />
                    </div>

                    {/* If Streaming For Series (watchonline) Server - 1 */}
                    <div className='dresolbtn' onClick={() => setShowS1(!shows1)}>Streaming Links For Series - S1</div>

                    {shows1 ? <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">

                        <label >Streaming Links For Series - S1:-</label>


                        {/*Watch Online Ep01 Link*/}
                        <input className="downloadsec" htmlFor="watchep01" type="text" id='watchep01' placeholder='Ep-01 Embed Link'
                            value={watchep01}
                            onChange={ev => setWatchep01(ev.target.value)}
                        />

                        {/*Watch Online Ep02 Link*/}
                        <input className="downloadsec" htmlFor="watchEp02" type="text" id='watchEp02' placeholder='Ep-02 Embed Link'
                            value={watchEp02}
                            onChange={ev => setWatchEp02(ev.target.value)}
                        />

                        {/*Watch Online Ep03 Link*/}
                        <input className="downloadsec" htmlFor="watchep03" type="text" id='watchEp03' placeholder='Ep-03 Embed Link'
                            value={watchEp03}
                            onChange={ev => setWatchEp03(ev.target.value)}
                        />

                        {/*Watch Online Ep04 Link*/}
                        <input className="downloadsec" htmlFor="watchep04" type="text" id='watchEp04' placeholder='Ep-04 Embed Link'
                            value={watchEp04}
                            onChange={ev => setWatchEp04(ev.target.value)}
                        />

                        {/*Watch Online Ep05 Link*/}
                        <input className="downloadsec" htmlFor="watchep05" type="text" id='watchEp05' placeholder='Ep-05 Embed Link'
                            value={watchEp05}
                            onChange={ev => setWatchEp05(ev.target.value)}
                        />

                        {/*Watch Online Ep06 Link*/}
                        <input className="downloadsec" htmlFor="watchep06" type="text" id='watchEp06' placeholder='Ep-06 Embed Link'
                            value={watchEp06}
                            onChange={ev => setWatchEp06(ev.target.value)}
                        />

                        {/*Watch Online Ep07 Link*/}
                        <input className="downloadsec" htmlFor="watchep07" type="text" id='watchEp07' placeholder='Ep-07 Embed Link'
                            value={watchEp07}
                            onChange={ev => setWatchEp07(ev.target.value)}
                        />

                        {/*Watch Online Ep08 Link*/}
                        <input className="downloadsec" htmlFor="watchep08" type="text" id='watchEp08' placeholder='Ep-08 Embed Link'
                            value={watchEp08}
                            onChange={ev => setWatchEp08(ev.target.value)}
                        />

                        {/*Watch Online Ep09 Link*/}
                        <input className="downloadsec" htmlFor="watchep09" type="text" id='watchEp09' placeholder='Ep-09 Embed Link'
                            value={watchEp09}
                            onChange={ev => setWatchEp09(ev.target.value)}
                        />

                        {/*Watch Online Ep10 Link*/}
                        <input className="downloadsec" htmlFor="watchep10" type="text" id='watchEp10' placeholder='Ep-10 Embed Link'
                            value={watchEp10}
                            onChange={ev => setWatchEp10(ev.target.value)}
                        />

                        {/*Watch Online Ep11 Link*/}
                        <input className="downloadsec" htmlFor="watchep11" type="text" id='watchEp11' placeholder='Ep-11 Embed Link'
                            value={watchEp11}
                            onChange={ev => setWatchEp11(ev.target.value)}
                        />

                        {/*Watch Online Ep12 Link*/}
                        <input className="downloadsec" htmlFor="watchep12" type="text" id='watchEp12' placeholder='Ep-12 Embed Link'
                            value={watchEp12}
                            onChange={ev => setWatchEp12(ev.target.value)}
                        />

                        {/*Watch Online Ep13 Link*/}
                        <input className="downloadsec" htmlFor="watchEp13" type="text" id='watchEp13' placeholder='Ep-13 Embed Link'
                            value={watchEp13}
                            onChange={ev => setWatchEp13(ev.target.value)}
                        />

                        {/*Watch Online Ep14 Link*/}
                        <input className="downloadsec" htmlFor="watchep14" type="text" id='watchep14' placeholder='Ep-14 Embed Link'
                            value={watchEp14}
                            onChange={ev => setWatchEp14(ev.target.value)}
                        />

                        {/*Watch Online Ep15 Link*/}
                        <input className="downloadsec" htmlFor="watchep15" type="text" id='watchep15' placeholder='Ep-15 Embed Link'
                            value={watchEp15}
                            onChange={ev => setWatchEp15(ev.target.value)}
                        />

                        {/*Watch Online Ep16 Link*/}
                        <input className="downloadsec" htmlFor="watchep16" type="text" id='watchep16' placeholder='Ep-16 Embed Link'
                            value={watchEp16}
                            onChange={ev => setWatchEp16(ev.target.value)}
                        />

                        {/*Watch Online Ep17 Link*/}
                        <input className="downloadsec" htmlFor="watchep17" type="text" id='watchep17' placeholder='Ep-17 Embed Link'
                            value={watchEp17}
                            onChange={ev => setWatchEp17(ev.target.value)}
                        />

                        {/*Watch Online Ep18 Link*/}
                        <input className="downloadsec" htmlFor="watchep18" type="text" id='watchep18' placeholder='Ep-18 Embed Link'
                            value={watchEp18}
                            onChange={ev => setWatchEp18(ev.target.value)}
                        />

                        {/*Watch Online Ep19 Link*/}
                        <input className="downloadsec" htmlFor="watchep19" type="text" id='watchep19' placeholder='Ep-19 Embed Link'
                            value={watchEp19}
                            onChange={ev => setWatchEp19(ev.target.value)}
                        />

                        {/*Watch Online Ep20 Link*/}
                        <input className="downloadsec" htmlFor="watchep20" type="text" id='watchep20' placeholder='Ep-20 Embed Link'
                            value={watchEp20}
                            onChange={ev => setWatchEp20(ev.target.value)}
                        />

                        {/*Watch Online Ep21 Link*/}
                        <input className="downloadsec" htmlFor="watchep21" type="text" id='watchep21' placeholder='Ep-21 Embed Link'
                            value={watchEp21}
                            onChange={ev => setWatchEp21(ev.target.value)}
                        />

                        {/*Watch Online Ep22 Link*/}
                        <input className="downloadsec" htmlFor="watchep22" type="text" id='watchep22' placeholder='Ep-22 Embed Link'
                            value={watchEp22}
                            onChange={ev => setWatchEp22(ev.target.value)}
                        />

                        {/*Watch Online Ep23 Link*/}
                        <input className="downloadsec" htmlFor="watchep23" type="text" id='watchep23' placeholder='Ep-23 Embed Link'
                            value={watchEp23}
                            onChange={ev => setWatchEp23(ev.target.value)}
                        />

                        {/*Watch Online Ep24 Link*/}
                        <input className="downloadsec" htmlFor="watchep24" type="text" id='watchep24' placeholder='Ep-24 Embed Link'
                            value={watchEp24}
                            onChange={ev => setWatchEp24(ev.target.value)}
                        />

                        {/*Watch Online Ep25 Link*/}
                        <input className="downloadsec" htmlFor="watchep25" type="text" id='watchep25' placeholder='Ep-25 Embed Link'
                            value={watchEp25}
                            onChange={ev => setWatchEp25(ev.target.value)}
                        />

                    </div> : null}


                    {/* If Streaming For Series (watchonline) Server - 2 */}
                    <div className='dresolbtn' onClick={() => setShowS2(!shows2)}>Streaming Links For Series - S2</div>

                    {shows2 ? <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label >Streaming Links For Series - S2</label>


                        {/*Watch Online Ep01 Link*/}
                        <input className="downloadsec" htmlFor="watchep01S2" type="text" id='watchep01S2' placeholder='Ep-01 Embed Link'
                            value={watchep01s2}
                            onChange={ev => setWatchep01S2(ev.target.value)}
                        />

                        {/*Watch Online Ep02 Link*/}
                        <input className="downloadsec" htmlFor="watchEp02S2" type="text" id='watchEp02S2' placeholder='Ep-02 Embed Link'
                            value={watchEp02s2}
                            onChange={ev => setWatchEp02S2(ev.target.value)}
                        />

                        {/*Watch Online Ep03 Link*/}
                        <input className="downloadsec" htmlFor="watchep03S2" type="text" id='watchEp03S2' placeholder='Ep-03 Embed Link'
                            value={watchEp03s2}
                            onChange={ev => setWatchEp03S2(ev.target.value)}
                        />

                        {/*Watch Online Ep04 Link*/}
                        <input className="downloadsec" htmlFor="watchep04S2" type="text" id='watchEp04S2' placeholder='Ep-04 Embed Link'
                            value={watchEp04s2}
                            onChange={ev => setWatchEp04S2(ev.target.value)}
                        />

                        {/*Watch Online Ep05 Link*/}
                        <input className="downloadsec" htmlFor="watchep05S2" type="text" id='watchEp05S2' placeholder='Ep-05 Embed Link'
                            value={watchEp05s2}
                            onChange={ev => setWatchEp05S2(ev.target.value)}
                        />

                        {/*Watch Online Ep06 Link*/}
                        <input className="downloadsec" htmlFor="watchep06S2" type="text" id='watchEp06S2' placeholder='Ep-06 Embed Link'
                            value={watchEp06s2}
                            onChange={ev => setWatchEp06S2(ev.target.value)}
                        />

                        {/*Watch Online Ep07 Link*/}
                        <input className="downloadsec" htmlFor="watchep07S2" type="text" id='watchEp07S2' placeholder='Ep-07 Embed Link'
                            value={watchEp07s2}
                            onChange={ev => setWatchEp07S2(ev.target.value)}
                        />

                        {/*Watch Online Ep08 Link*/}
                        <input className="downloadsec" htmlFor="watchep08S2" type="text" id='watchEp08S2' placeholder='Ep-08 Embed Link'
                            value={watchEp08s2}
                            onChange={ev => setWatchEp08S2(ev.target.value)}
                        />

                        {/*Watch Online Ep09 Link*/}
                        <input className="downloadsec" htmlFor="watchep09S2" type="text" id='watchEp09S2' placeholder='Ep-09 Embed Link'
                            value={watchEp09s2}
                            onChange={ev => setWatchEp09S2(ev.target.value)}
                        />

                        {/*Watch Online Ep10 Link*/}
                        <input className="downloadsec" htmlFor="watchep10S2" type="text" id='watchEp10S2' placeholder='Ep-10 Embed Link'
                            value={watchEp10s2}
                            onChange={ev => setWatchEp10S2(ev.target.value)}
                        />

                        {/*Watch Online Ep11 Link*/}
                        <input className="downloadsec" htmlFor="watchep11S2" type="text" id='watchEp11S2' placeholder='Ep-11 Embed Link'
                            value={watchEp11s2}
                            onChange={ev => setWatchEp11S2(ev.target.value)}
                        />

                        {/*Watch Online Ep12 Link*/}
                        <input className="downloadsec" htmlFor="watchep12S2" type="text" id='watchEp12S2' placeholder='Ep-12 Embed Link'
                            value={watchEp12s2}
                            onChange={ev => setWatchEp12S2(ev.target.value)}
                        />

                        {/*Watch Online Ep13 Link*/}
                        <input className="downloadsec" htmlFor="watchEp13S2" type="text" id='watchEp13S2' placeholder='Ep-13 Embed Link'
                            value={watchEp13s2}
                            onChange={ev => setWatchEp13S2(ev.target.value)}
                        />

                        {/*Watch Online Ep14 Link*/}
                        <input className="downloadsec" htmlFor="watchep14S2" type="text" id='watchep14S2' placeholder='Ep-14 Embed Link'
                            value={watchEp14s2}
                            onChange={ev => setWatchEp14S2(ev.target.value)}
                        />

                        {/*Watch Online Ep15 Link*/}
                        <input className="downloadsec" htmlFor="watchep15S2" type="text" id='watchep15S2' placeholder='Ep-15 Embed Link'
                            value={watchEp15s2}
                            onChange={ev => setWatchEp15S2(ev.target.value)}
                        />

                        {/*Watch Online Ep16 Link*/}
                        <input className="downloadsec" htmlFor="watchep16S2" type="text" id='watchep16S2' placeholder='Ep-16 Embed Link'
                            value={watchEp16s2}
                            onChange={ev => setWatchEp16S2(ev.target.value)}
                        />

                        {/*Watch Online Ep17 Link*/}
                        <input className="downloadsec" htmlFor="watchep17S2" type="text" id='watchep17S2' placeholder='Ep-17 Embed Link'
                            value={watchEp17s2}
                            onChange={ev => setWatchEp17S2(ev.target.value)}
                        />

                        {/*Watch Online Ep18 Link*/}
                        <input className="downloadsec" htmlFor="watchep18S2" type="text" id='watchep18S2' placeholder='Ep-18 Embed Link'
                            value={watchEp18s2}
                            onChange={ev => setWatchEp18S2(ev.target.value)}
                        />

                        {/*Watch Online Ep19 Link*/}
                        <input className="downloadsec" htmlFor="watchep19S2" type="text" id='watchep19S2' placeholder='Ep-19 Embed Link'
                            value={watchEp19s2}
                            onChange={ev => setWatchEp19S2(ev.target.value)}
                        />

                        {/*Watch Online Ep20 Link*/}
                        <input className="downloadsec" htmlFor="watchep20S2" type="text" id='watchep20S2' placeholder='Ep-20 Embed Link'
                            value={watchEp20s2}
                            onChange={ev => setWatchEp20S2(ev.target.value)}
                        />

                        {/*Watch Online Ep21 Link*/}
                        <input className="downloadsec" htmlFor="watchep21S2" type="text" id='watchep21S2' placeholder='Ep-21 Embed Link'
                            value={watchEp21s2}
                            onChange={ev => setWatchEp21S2(ev.target.value)}
                        />

                        {/*Watch Online Ep22 Link*/}
                        <input className="downloadsec" htmlFor="watchep22S2" type="text" id='watchep22S2' placeholder='Ep-22 Embed Link'
                            value={watchEp22s2}
                            onChange={ev => setWatchEp22S2(ev.target.value)}
                        />

                        {/*Watch Online Ep23 Link*/}
                        <input className="downloadsec" htmlFor="watchep23S2" type="text" id='watchep23S2' placeholder='Ep-23 Embed Link'
                            value={watchEp23s2}
                            onChange={ev => setWatchEp23S2(ev.target.value)}
                        />

                        {/*Watch Online Ep24 Link*/}
                        <input className="downloadsec" htmlFor="watchep24S2" type="text" id='watchep24S2' placeholder='Ep-24 Embed Link'
                            value={watchEp24s2}
                            onChange={ev => setWatchEp24S2(ev.target.value)}
                        />

                        {/*Watch Online Ep25 Link*/}
                        <input className="downloadsec" htmlFor="watchep25S2" type="text" id='watchep25S2' placeholder='Ep-25 Embed Link'
                            value={watchEp25s2}
                            onChange={ev => setWatchEp25S2(ev.target.value)}
                        />

                    </div> : null}

                    {/* If Streaming For Series (watchonline) Server - 3 */}
                    <div className='dresolbtn' onClick={() => setShowS3(!shows3)}>Streaming Links For Series - S3</div>

                    {shows3 ? <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label >Streaming Links For Series - S3</label>


                        {/*Watch Online Ep01 Link*/}
                        <input className="downloadsec" htmlFor="watchep01S3" type="text" id='watchep01S3' placeholder='Ep-01 Embed Link'
                            value={watchep01s3}
                            onChange={ev => setWatchep01S3(ev.target.value)}
                        />

                        {/*Watch Online Ep02 Link*/}
                        <input className="downloadsec" htmlFor="watchEp02S3" type="text" id='watchEp02S3' placeholder='Ep-02 Embed Link'
                            value={watchEp02s3}
                            onChange={ev => setWatchEp02S3(ev.target.value)}
                        />

                        {/*Watch Online Ep03 Link*/}
                        <input className="downloadsec" htmlFor="watchep03S2" type="text" id='watchEp03S3' placeholder='Ep-03 Embed Link'
                            value={watchEp03s3}
                            onChange={ev => setWatchEp03S3(ev.target.value)}
                        />

                        {/*Watch Online Ep04 Link*/}
                        <input className="downloadsec" htmlFor="watchep04S3" type="text" id='watchEp04S3' placeholder='Ep-04 Embed Link'
                            value={watchEp04s3}
                            onChange={ev => setWatchEp04S3(ev.target.value)}
                        />

                        {/*Watch Online Ep05 Link*/}
                        <input className="downloadsec" htmlFor="watchep05S3" type="text" id='watchEp05S3' placeholder='Ep-05 Embed Link'
                            value={watchEp05s3}
                            onChange={ev => setWatchEp05S3(ev.target.value)}
                        />

                        {/*Watch Online Ep06 Link*/}
                        <input className="downloadsec" htmlFor="watchep06S3" type="text" id='watchEp06S3' placeholder='Ep-06 Embed Link'
                            value={watchEp06s3}
                            onChange={ev => setWatchEp06S3(ev.target.value)}
                        />

                        {/*Watch Online Ep07 Link*/}
                        <input className="downloadsec" htmlFor="watchep07S3" type="text" id='watchEp07S3' placeholder='Ep-07 Embed Link'
                            value={watchEp07s3}
                            onChange={ev => setWatchEp07S3(ev.target.value)}
                        />

                        {/*Watch Online Ep08 Link*/}
                        <input className="downloadsec" htmlFor="watchep08S3" type="text" id='watchEp08S3' placeholder='Ep-08 Embed Link'
                            value={watchEp08s3}
                            onChange={ev => setWatchEp08S3(ev.target.value)}
                        />

                        {/*Watch Online Ep09 Link*/}
                        <input className="downloadsec" htmlFor="watchep09S3" type="text" id='watchEp09S3' placeholder='Ep-09 Embed Link'
                            value={watchEp09s3}
                            onChange={ev => setWatchEp09S3(ev.target.value)}
                        />

                        {/*Watch Online Ep10 Link*/}
                        <input className="downloadsec" htmlFor="watchep10S3" type="text" id='watchEp10S3' placeholder='Ep-10 Embed Link'
                            value={watchEp10s3}
                            onChange={ev => setWatchEp10S3(ev.target.value)}
                        />

                        {/*Watch Online Ep11 Link*/}
                        <input className="downloadsec" htmlFor="watchep11S3" type="text" id='watchEp11S3' placeholder='Ep-11 Embed Link'
                            value={watchEp11s3}
                            onChange={ev => setWatchEp11S3(ev.target.value)}
                        />

                        {/*Watch Online Ep12 Link*/}
                        <input className="downloadsec" htmlFor="watchep12S3" type="text" id='watchEp12S3' placeholder='Ep-12 Embed Link'
                            value={watchEp12s3}
                            onChange={ev => setWatchEp12S3(ev.target.value)}
                        />

                        {/*Watch Online Ep13 Link*/}
                        <input className="downloadsec" htmlFor="watchEp13S3" type="text" id='watchEp13S3' placeholder='Ep-13 Embed Link'
                            value={watchEp13s3}
                            onChange={ev => setWatchEp13S3(ev.target.value)}
                        />

                        {/*Watch Online Ep14 Link*/}
                        <input className="downloadsec" htmlFor="watchep14S3" type="text" id='watchep14S3' placeholder='Ep-14 Embed Link'
                            value={watchEp14s3}
                            onChange={ev => setWatchEp14S3(ev.target.value)}
                        />

                        {/*Watch Online Ep15 Link*/}
                        <input className="downloadsec" htmlFor="watchep15S3" type="text" id='watchep15S3' placeholder='Ep-15 Embed Link'
                            value={watchEp15s3}
                            onChange={ev => setWatchEp15S3(ev.target.value)}
                        />

                        {/*Watch Online Ep16 Link*/}
                        <input className="downloadsec" htmlFor="watchep16S3" type="text" id='watchep16S3' placeholder='Ep-16 Embed Link'
                            value={watchEp16s3}
                            onChange={ev => setWatchEp16S3(ev.target.value)}
                        />

                        {/*Watch Online Ep17 Link*/}
                        <input className="downloadsec" htmlFor="watchep17S3" type="text" id='watchep17S3' placeholder='Ep-17 Embed Link'
                            value={watchEp17s3}
                            onChange={ev => setWatchEp17S3(ev.target.value)}
                        />

                        {/*Watch Online Ep18 Link*/}
                        <input className="downloadsec" htmlFor="watchep18S3" type="text" id='watchep18S3' placeholder='Ep-18 Embed Link'
                            value={watchEp18s3}
                            onChange={ev => setWatchEp18S3(ev.target.value)}
                        />

                        {/*Watch Online Ep19 Link*/}
                        <input className="downloadsec" htmlFor="watchep19S3" type="text" id='watchep19S3' placeholder='Ep-19 Embed Link'
                            value={watchEp19s3}
                            onChange={ev => setWatchEp19S3(ev.target.value)}
                        />

                        {/*Watch Online Ep20 Link*/}
                        <input className="downloadsec" htmlFor="watchep20S3" type="text" id='watchep20S3' placeholder='Ep-20 Embed Link'
                            value={watchEp20s3}
                            onChange={ev => setWatchEp20S3(ev.target.value)}
                        />

                        {/*Watch Online Ep21 Link*/}
                        <input className="downloadsec" htmlFor="watchep21S3" type="text" id='watchep21S3' placeholder='Ep-21 Embed Link'
                            value={watchEp21s3}
                            onChange={ev => setWatchEp21S3(ev.target.value)}
                        />

                        {/*Watch Online Ep22 Link*/}
                        <input className="downloadsec" htmlFor="watchep22S3" type="text" id='watchep22S3' placeholder='Ep-22 Embed Link'
                            value={watchEp22s3}
                            onChange={ev => setWatchEp22S3(ev.target.value)}
                        />

                        {/*Watch Online Ep23 Link*/}
                        <input className="downloadsec" htmlFor="watchep23S3" type="text" id='watchep23S3' placeholder='Ep-23 Embed Link'
                            value={watchEp23s3}
                            onChange={ev => setWatchEp23S3(ev.target.value)}
                        />

                        {/*Watch Online Ep24 Link*/}
                        <input className="downloadsec" htmlFor="watchep24S3" type="text" id='watchep24S3' placeholder='Ep-24 Embed Link'
                            value={watchEp24s3}
                            onChange={ev => setWatchEp24S3(ev.target.value)}
                        />

                        {/*Watch Online Ep25 Link*/}
                        <input className="downloadsec" htmlFor="watchep25S3" type="text" id='watchep25S3' placeholder='Ep-25 Embed Link'
                            value={watchEp25s3}
                            onChange={ev => setWatchEp25S3(ev.target.value)}
                        />

                    </div> : null}

                    {/* If Screes Shots */}

                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label >ScreenShot :</label>

                        <input className="downloadsec" htmlFor="sshot1" type="text" id='sshot1' placeholder='Screen Shot - 1'
                            value={sshot1}
                            onChange={ev => setSshot1(ev.target.value)}
                        />

                        <input className="downloadsec" htmlFor="sshot2" type="text" id='sshot2' placeholder='Screen Shot - 2'
                            value={sshot2}
                            onChange={ev => setSshot2(ev.target.value)}
                        />

                        <input className="downloadsec" htmlFor="sshot3" type="text" id='sshot3' placeholder='Screen Shot - 3'
                            value={sshot3}
                            onChange={ev => setSshot3(ev.target.value)}
                        />

                        <input className="downloadsec" htmlFor="sshot4" type="text" id='sshot4' placeholder='Screen Shot - 4'
                            value={sshot4}
                            onChange={ev => setSshot4(ev.target.value)}
                        />

                    </div>

                    <div className="moviecategory flex flex-sb flex-left">
                        {/* Movie Title category */}
                        <div className='w-50 flex flex-col flex-left mb-2'>
                            <label>Title Category :</label>
                            {['Movies', 'Series', 'Shows', 'Anime'].map((cat) => (
                                <div key={cat} className="flex gap-05">
                                    <input
                                        type="radio"
                                        id={cat.toLowerCase()}
                                        name="titlecategory"
                                        value={cat.toLowerCase()}
                                        checked={titlecategory === cat.toLowerCase()}
                                        onChange={(e) => setTitlecategory(e.target.value)}
                                    />
                                    <label htmlFor={cat.toLowerCase()}>{cat}</label>
                                </div>
                            ))}
                        </div>

                        {/* Movie category */}
                        <div className='w-50 flex flex-col flex-left mb-2'>
                            <label>Category :</label>
                            {categories.map((cat) => (
                                <div key={cat} className="flex gap-05">
                                    <input
                                        type="radio"
                                        id={cat.toLowerCase()}
                                        name="category"
                                        value={cat.toLowerCase()}
                                        checked={category === cat.toLowerCase()}
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                    <label htmlFor={cat.toLowerCase()}>{cat}</label>
                                </div>
                            ))}
                        </div>

                        {/* Movie Genre */}
                        <div className='w-50 flex flex-col flex-left mb-2'>
                            <label>Genre:</label>
                            <div className='flex flex-col flex-left'>
                                {['Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 'Crime', 'Fantasy', 'Horror', 'Romance', 'Thriller', 'Science_Fiction', 'Korean_Drama', 'Cheinese_Drama'].map((genreOption) => (
                                    <label key={genreOption} className="flex gap-05">
                                        <input
                                            type="checkbox"
                                            value={genreOption.toLowerCase()}
                                            checked={genre.includes(genreOption.toLowerCase())}
                                            onChange={(e) => {
                                                const selectedGenre = e.target.value;
                                                setGenre((prevGenres) => {
                                                    if (prevGenres.includes(selectedGenre)) {
                                                        return prevGenres.filter((genre) => genre !== selectedGenre);
                                                    } else {
                                                        return [...prevGenres, selectedGenre];
                                                    }
                                                });
                                            }}
                                        />
                                        {genreOption}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    


                </div>

            </div>

            {/* for save all data in mongodb for sumbmit button */}
            <div className='w-100 mb-2'>
                <button type='submit' className='w-100 flex-center'>SAVE DATA</button>
            </div>

        </form>

    </>
}

