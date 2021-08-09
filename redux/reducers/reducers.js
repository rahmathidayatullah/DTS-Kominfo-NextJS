import { combineReducers } from 'redux'

// PUBLIKASI
import { allArtikelReducer, newArtikelReducer, deleteArtikelReducer, detailArtikelReducer } from './publikasi/artikel.reducers'
import { allBeritaReducer, newBeritaReducer, deleteBeritaReducer } from './publikasi/berita.reducers'
import { allImagetronReducer, newImagetronReducer, deleteImagetronReducer } from './publikasi/imagetron.reducers'
import { allKategoriReducer, newKategoriReducer, deleteKategoriReducer } from './publikasi/kategori.reducers'
import { allGaleriReducer, newGaleriReducer, deleteGaleriReducer } from './publikasi/galeri.reducers'
import { allFaqReducer, newFaqReducer } from './publikasi/faq.reducers'
import { allVideoReducer, newVideoReducer } from './publikasi/video.reducers'

// Subvit
import {
    allSubtanceQuestionBanksReducer,
    newSubtanceQuestionBanksReducer,
    deleteSubtanceQuestionBanksReducer,
    updateSubtanceQuestionBanksPublishReducer
} from './subvit/subtance.reducers'
import { allSubtanceQuestionTypeReducer } from './subvit/subtance-question-type.reducers'
import { newSubtanceQuestionDetailReducer } from './subvit/subtance-question-detail.reducers'

// Partnership
import { allMitraReducer } from './partnership/mitra.reducers'

const reducer = combineReducers({

    // PUBLIKASI
    allArtikel: allArtikelReducer,
    newArtikel: newArtikelReducer,
    deleteArtikel: deleteArtikelReducer,
    detailArtikel: detailArtikelReducer,

    allBerita: allBeritaReducer,
    newBerita: newBeritaReducer,
    deleteBerita: deleteBeritaReducer,

    allImagetron: allImagetronReducer,
    newImagetron: newImagetronReducer,
    deleteImagetron: deleteImagetronReducer,

    allGaleri: allGaleriReducer,
    newGaleri: newGaleriReducer,
    deleteGaleri: deleteGaleriReducer,

    allFaq: allFaqReducer,
    newFaq: newFaqReducer,

    allVideo: allVideoReducer,
    newVideo: newVideoReducer,

    allKategori: allKategoriReducer,
    newKategori: newKategoriReducer,
    deleteKategori: deleteKategoriReducer,

    // Subvit
    allSubtanceQuestionBanks: allSubtanceQuestionBanksReducer,
    newSubtanceQuestionBanks: newSubtanceQuestionBanksReducer,
    deleteSubtanceQuestionBanks: deleteSubtanceQuestionBanksReducer,
    updateSubtanceQuestionBanksPublish: updateSubtanceQuestionBanksPublishReducer,

    allSubtanceQuestionType: allSubtanceQuestionTypeReducer,

    newSubtanceQuestionDetail: newSubtanceQuestionDetailReducer,

    // PARTNERSHIP
    allMitra: allMitraReducer,
})

export default reducer