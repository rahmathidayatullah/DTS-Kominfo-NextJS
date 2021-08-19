import React, { useState, useEffect, useRef } from "react";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import SimpleReactValidator from 'simple-react-validator'
import Swal from "sweetalert2"

import {
  newTriviaQuestionBanks,
  clearErrors,
} from "../../../../../redux/actions/subvit/trivia-question.actions";
import { NEW_TRIVIA_QUESTION_BANKS_RESET } from "../../../../../redux/types/subvit/trivia-question.type";

import PageWrapper from "/components/wrapper/page.wrapper";
import StepInput from "/components/StepInput";
import LoadingPage from "../../../../LoadingPage";

const TambahTriviaStepOne = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, error, success, trivia } = useSelector((state) => state.newTriviaQuestionBanks);
  const simpleValidator = useRef(new SimpleReactValidator({ locale: 'id' }))
  const [, forceUpdate] = useState();
  const [typeSave, setTypeSave] = useState('lanjut')

  useEffect(() => {
    // if (error) {
    //     dispatch(clearErrors())
    // }

    if (success) {
      const id = trivia.id
      if (typeSave === 'lanjut') {
        router.push({
          pathname: `/subvit/trivia/tambah/step-2-${metode}`,
<<<<<<< HEAD
          query: { id }
=======
          query: { id, metode }
>>>>>>> 8f98c0c98aed522953f188098266e73c67e33da0
        })
      } else if (typeSave === 'draft') {
        router.push({
          pathname: `/subvit/trivia`,
          query: { success: true },
        });
      }
    }

  }, [dispatch, error, success, typeSave]);

  const [academy_id, setAcademyId] = useState("");
  const [theme_id, setThemeId] = useState("");
  const [training_id, setTrainingId] = useState("");
<<<<<<< HEAD
  const [category, setCategory] = useState("");
=======
>>>>>>> 8f98c0c98aed522953f188098266e73c67e33da0
  const [metode, setMetode] = useState('entry')

  const saveDraft = () => {
    setTypeSave('draft')
    if (error) {
      dispatch(clearErrors())
    }
    if (success) {
      dispatch({
        type: NEW_TRIVIA_QUESTION_BANKS_RESET
      })
    }
    if (simpleValidator.current.allValid()) {

      const data = {
        academy_id,
        theme_id,
        training_id,
<<<<<<< HEAD
        category,
=======
>>>>>>> 8f98c0c98aed522953f188098266e73c67e33da0
      }

      dispatch(newTriviaQuestionBanks(data))

    } else {
      simpleValidator.current.showMessages()
      forceUpdate(1)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Isi data dengan benar !'
      })
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTypeSave('lanjut')

    if (error) {
      dispatch(clearErrors())
    }
    if (success) {
      dispatch({
        type: NEW_TRIVIA_QUESTION_BANKS_RESET
      })
    }
    if (simpleValidator.current.allValid()) {

      const data = {
        academy_id,
        theme_id,
        training_id,
<<<<<<< HEAD
        category,
=======
>>>>>>> 8f98c0c98aed522953f188098266e73c67e33da0
      }

      dispatch(newTriviaQuestionBanks(data))

    } else {
      simpleValidator.current.showMessages()
      forceUpdate(1)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Isi data dengan benar !'
      })
    }
  };

  return (
    <PageWrapper>
      {error ? (
        <div
          className="alert alert-custom alert-light-danger fade show mb-5"
          role="alert"
        >
          <div className="alert-icon">
            <i className="flaticon-warning"></i>
          </div>
          <div className="alert-text">{error}</div>
          <div className="alert-close">
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="ki ki-close"></i>
              </span>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="col-lg-12 order-1 order-xxl-2 px-0">
        {
          loading ?
            <LoadingPage loading={loading} />
            : ''
        }
        <div className="card card-custom card-stretch gutter-b">
          <StepInput step="1"></StepInput>
          <div className="card-header border-0">
            <h3 className="card-title font-weight-bolder text-dark">
              Tambah Test Trivia
            </h3>
          </div>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label "
                >
                  Akademi
                </label>
                <div className="col-sm-10">
                  <select
                    name="academy_id"
                    id=""
                    value={academy_id}
                    onChange={(e) => setAcademyId(e.target.value)}
                    onBlur={e => { setAcademyId(e.target.value); simpleValidator.current.showMessageFor('academy_id') }}
                    className="form-control"
                  >
                    <option selected disabled value=''> -Pilih Akademi -</option>
                    <option value="1"> Computer Scientist </option>
                    <option value="2"> Designer </option>
                  </select>
                  <span className="text-muted">Silahkan Pilih Akademi</span>
                  {simpleValidator.current.message('academy_id', academy_id, 'required', { className: 'text-danger' })}
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label "
                >
                  Tema
                </label>
                <div className="col-sm-10">
                  <select
                    name="the_id"
                    id=""
                    onChange={(e) => setThemeId(e.target.value)}
                    onBlur={e => { setThemeId(e.target.value); simpleValidator.current.showMessageFor('theme_id') }}
                    className="form-control"
                  >
                    <option selected disabled value=''> -Pilih Tema-</option>
                    <option value="1"> Cloud Computing </option>
                    <option value="2"> UI/UX Designer </option>
                  </select>
                  <span className="text-muted">Silahkan Pilih Tema</span>
                  {simpleValidator.current.message('theme_id', theme_id, 'required', { className: 'text-danger' })}
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label "
                >
                  Pelatihan
                </label>
                <div className="col-sm-10">
                  <select
                    name="training_id"
                    id=""
                    onChange={(e) => setTrainingId(e.target.value)}
                    onBlur={e => setTrainingId(e.target.value)}
                    className="form-control"
                  >
                    <option selected disabled> -Pilih Pelatihan-</option>
                    <option value="1"> Google Cloud Computing </option>
                    <option value="1"> Adobe UI/UX Designer </option>
                  </select>
                  <span className="text-muted">Silahkan Pilih Pelatihan</span>
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label "
                >
<<<<<<< HEAD
                  Kategori
                </label>
                <div className="col-sm-10">
                  <select
                    name="category"
                    id=""
                    onChange={(e) => setCategory(e.target.value)}
                    onBlur={e => { setCategory(e.target.value); simpleValidator.current.showMessageFor('category') }}
                    className="form-control"
                  >
                    <option selected disabled> -Pilih Kategori-</option>
                    <option value="test_subtansi"> Tes Substansi </option>
                    <option value="mid_test"> Mid Tes </option>
                  </select>
                  <span className="text-muted">Silahkan Pilih Kategori</span>
                  {simpleValidator.current.message('category', category, 'required', { className: 'text-danger' })}
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label "
                >
=======
>>>>>>> 8f98c0c98aed522953f188098266e73c67e33da0
                  Metode
                </label>
                <div className="col-sm-10">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="method"
                      value="entry"
                      checked={metode === 'entry'}
                      onClick={() => setMetode('entry')}
                    />
                    <label className="form-check-label">Entry Soal</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="method"
                      value="import"
                      checked={metode === 'import'}
                      onClick={() => setMetode('import')}
                    />
                    <label className="form-check-label">Import .csv/.xls</label>
                  </div>

                  <div>
                    <span className="text-muted">
                      Silahkan Pilih Metode Tambah Test Substansi
                    </span>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-2"></div>
                <div className="col-sm-10 text-right">
                  <button
                    type='submit'
                    className="btn btn-light-primary btn-sm mr-2"
                  >
                    Simpan & Lanjut
                  </button>
                  <button
                    onClick={saveDraft}
                    className="btn btn-primary btn-sm"
                    type='button'
                  >
                    Simpan Draft
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TambahTriviaStepOne;
