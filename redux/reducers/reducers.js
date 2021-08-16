import { combineReducers } from "redux";

// PUBLIKASI
import {
  allArtikelReducer,
  newArtikelReducer,
  deleteArtikelReducer,
  detailArtikelReducer,
  updateArtikelReducer,
} from "./publikasi/artikel.reducers";
import {
  allBeritaReducer,
  newBeritaReducer,
  deleteBeritaReducer,
  detailBeritaReducer,
  updateBeritaReducer,
} from "./publikasi/berita.reducers";
import {
  allImagetronReducer,
  newImagetronReducer,
  deleteImagetronReducer,
} from "./publikasi/imagetron.reducers";
import {
  allKategoriReducer,
  newKategoriReducer,
  deleteKategoriReducer,
} from "./publikasi/kategori.reducers";
import {
  allGaleriReducer,
  newGaleriReducer,
  deleteGaleriReducer,
} from "./publikasi/galeri.reducers";
import { allFaqReducer, newFaqReducer } from "./publikasi/faq.reducers";
import {
  allVideoReducer,
  newVideoReducer,
  deleteVideoReducer,
  detailVideoReducer,
  updateVideoReducer,
} from "./publikasi/video.reducers";

// Subvit
// ============== substansi ===============
import {
  allSubtanceQuestionBanksReducer,
  newSubtanceQuestionBanksReducer,
  detailSubtanceQuestionBanksReducer,
  updateSubtanceQuestionReducer,
  deleteSubtanceQuestionBanksReducer,
  updateSubtanceQuestionBanksPublishReducer,
  allReportSubtanceQuestionBanksReducer,
  newCloneSubtanceQuestionBanksReducer,
} from "./subvit/subtance.reducers";
import {
  allSubtanceQuestionTypeReducer,
  newSubtanceQuestionTypeReducer,
  detailSubtanceQuestionTypeReducer,
  deleteSubtanceQuestionTypeReducer,
  updateSubtanceQuestionTypeReducer,
} from "./subvit/subtance-question-type.reducers";
import {
  allSubtanceQuestionDetailReducer,
  newSubtanceQuestionDetailReducer,
  deleteSubtanceQuestionDetailReducer,
  importFileSubtanceQuestionDetailReducer,
  importImagesSubtanceQuestionDetailReducer,
} from "./subvit/subtance-question-detail.reducers";
// ============== substansi ===============

// ============== survey ===============
import {
  allSurveyQuestionBanksReducer,
  newSurveyQuestionBanksReducer,
  detailSurveyQuestionBanksReducer,
  updateSurveyQuestionReducer,
  deleteSurveyQuestionBanksReducer,
  updateSurveyQuestionBanksPublishReducer,
  allReportSurveyQuestionBanksReducer,
} from "./subvit/survey-question.reducers";
import {
  allSurveyQuestionDetailReducer,
  newSurveyQuestionDetailReducer,
  deleteSurveyQuestionDetailReducer,
  importFileSurveyQuestionDetailReducer,
  importImagesSurveyQuestionDetailReducer,
} from "./subvit/survey-question-detail.reducers";
// ============== survey ===============

// ============== trivia ===============
import {
  allTriviaQuestionBanksReducer,
  newTriviaQuestionBanksReducer,
  detailTriviaQuestionBanksReducer,
  updateTriviaQuestionReducer,
  deleteTriviaQuestionBanksReducer,
  updateTriviaQuestionBanksPublishReducer,
  allReportTriviaQuestionBanksReducer,
} from "./subvit/trivia-question.reducers";
import {
  allTriviaQuestionDetailReducer,
  newTriviaQuestionDetailReducer,
  deleteTriviaQuestionDetailReducer,
  importFileTriviaQuestionDetailReducer,
  importImagesTriviaQuestionDetailReducer,
} from "./subvit/trivia-question-detail.reducers";
// ============== trivia ===============

// Partnership
import { allMitraReducer, newMitraReducer } from "./partnership/mitra.reducers";
import {
  allTandaTanganReducer,
  newTandaTanganReducer,
  deleteTandaTanganReducer,
  detailTandaTanganReducer,
  updateTandaTanganReducer,
  // updateStatusTandaTanganReducer,
} from "./partnership/tandaTangan.reducers";

const reducer = combineReducers({
  // PUBLIKASI
  allArtikel: allArtikelReducer,
  newArtikel: newArtikelReducer,
  deleteArtikel: deleteArtikelReducer,
  detailArtikel: detailArtikelReducer,
  updatedArtikel: updateArtikelReducer,

  allBerita: allBeritaReducer,
  newBerita: newBeritaReducer,
  deleteBerita: deleteBeritaReducer,
  detailBerita: detailBeritaReducer,
  updatedBerita: updateBeritaReducer,

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
  deleteVideo: deleteVideoReducer,
  detailVideo: detailVideoReducer,
  updatedVideo: updateVideoReducer,

  allKategori: allKategoriReducer,
  newKategori: newKategoriReducer,
  deleteKategori: deleteKategoriReducer,

  // Subvit
  // =============== substansi ==================
  allSubtanceQuestionBanks: allSubtanceQuestionBanksReducer,
  newSubtanceQuestionBanks: newSubtanceQuestionBanksReducer,
  deleteSubtanceQuestionBanks: deleteSubtanceQuestionBanksReducer,
  detailSubtanceQuestionBanks: detailSubtanceQuestionBanksReducer,
  updateSubtanceQuestion: updateSubtanceQuestionReducer,
  updateSubtanceQuestionBanksPublish: updateSubtanceQuestionBanksPublishReducer,
  allReportSubtanceQuestionBanks: allReportSubtanceQuestionBanksReducer,
  newCloneSubtanceQuestionBanks: newCloneSubtanceQuestionBanksReducer,

  allSubtanceQuestionType: allSubtanceQuestionTypeReducer,
  newSubtanceQuestionType: newSubtanceQuestionTypeReducer,
  detailSubtanceQuestionType: detailSubtanceQuestionTypeReducer,
  deleteSubtanceQuestionType: deleteSubtanceQuestionTypeReducer,
  updateSubtanceQuestionType: updateSubtanceQuestionTypeReducer,

  allSubtanceQuestionDetail: allSubtanceQuestionDetailReducer,
  newSubtanceQuestionDetail: newSubtanceQuestionDetailReducer,
  deleteSubtanceQuestionDetail: deleteSubtanceQuestionDetailReducer,
  importFileSubtanceQuestionDetail: importFileSubtanceQuestionDetailReducer,
  importImagesSubtanceQuestionDetail: importImagesSubtanceQuestionDetailReducer,
  // =============== end substansi ==================

  // =============== survey ==================
  allSurveyQuestionBanks: allSurveyQuestionBanksReducer,
  newSurveyQuestionBanks: newSurveyQuestionBanksReducer,
  deleteSurveyQuestionBanks: deleteSurveyQuestionBanksReducer,
  detailSurveyQuestionBanks: detailSurveyQuestionBanksReducer,
  updateSurveyQuestion: updateSurveyQuestionReducer,
  updateSurveyQuestionBanksPublish: updateSurveyQuestionBanksPublishReducer,
  allReportSurveyQuestionBanks: allReportSurveyQuestionBanksReducer,

  allSurveyQuestionDetail: allSurveyQuestionDetailReducer,
  newSurveyQuestionDetail: newSurveyQuestionDetailReducer,
  deleteSurveyQuestionDetail: deleteSurveyQuestionDetailReducer,
  importFileSurveyQuestionDetail: importFileSurveyQuestionDetailReducer,
  importImagesSurveyQuestionDetail: importImagesSurveyQuestionDetailReducer,
  // =============== end substansi ==================

  // =============== trivia ==================
  allTriviaQuestionBanks: allTriviaQuestionBanksReducer,
  newTriviaQuestionBanks: newTriviaQuestionBanksReducer,
  deleteTriviaQuestionBanks: deleteTriviaQuestionBanksReducer,
  detailTriviaQuestionBanks: detailTriviaQuestionBanksReducer,
  updateTriviaQuestion: updateTriviaQuestionReducer,
  updateTriviaQuestionBanksPublish: updateTriviaQuestionBanksPublishReducer,
  allReportTriviaQuestionBanks: allReportTriviaQuestionBanksReducer,

  allTriviaQuestionDetail: allTriviaQuestionDetailReducer,
  newTriviaQuestionDetail: newTriviaQuestionDetailReducer,
  deleteTriviaQuestionDetail: deleteTriviaQuestionDetailReducer,
  importFileTriviaQuestionDetail: importFileTriviaQuestionDetailReducer,
  importImagesTriviaQuestionDetail: importImagesTriviaQuestionDetailReducer,
  // =============== end trivia ==================

  // PARTNERSHIP

  // kerjasama mitra
  allMitra: allMitraReducer,
  newMitra: newMitraReducer,

  // tanda tangan
  allTandaTangan: allTandaTanganReducer,
  newTandaTangan: newTandaTanganReducer,
  deleteTandaTangan: deleteTandaTanganReducer,
  updateTandaTangan: updateTandaTanganReducer,
  detailTandaTangan: detailTandaTanganReducer,
  // updateStatusTandaTangan: updateStatusTandaTanganReducer,
});

export default reducer;
