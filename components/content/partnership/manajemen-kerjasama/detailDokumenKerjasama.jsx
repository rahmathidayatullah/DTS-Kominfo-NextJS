import React, { useState, useRef, useEffect } from "react";

import Link from "next/link";
import PageWrapper from "../../../wrapper/page.wrapper";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getSingleCooperation } from "../../../../redux/actions/partnership/managementCooporation.actions";
// import { PDFReader } from 'react-read-pdf';

const DetailDokumenKerjasama = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const allMK = useSelector(state => state.allMK)
  console.log("allMK page detail",allMK)


  useEffect(() => {
    dispatch(getSingleCooperation(router.query.id));
  }, [router.query.id]);
  return (
    <PageWrapper>
      <div className="col-lg-12 col-xxl-12 order-1 order-xxl-2 px-0">
        <div className="card card-custom card-stretch gutter-b">
          <div className="card-header border-0">
            <h3 className="card-title font-weight-bolder text-dark">
              Detail Dokumen Kerjasama
            </h3>
          </div>

          <div className="card-body">
            <form>
              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Tanggal
                </label>
                <div className="col-sm-3">
                  <input type="date" className="form-control"  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Judul kerjasama
                </label>
                <div className="col-sm-10">
                  <input
                  readOnly
                  value={allMK.cooperationById.length===0 ? "":allMK.cooperationById.data.title}
                    type="text"
                    className="form-control"
                    placeholder="Judul Kerjasama"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Kategori kerjasama
                </label>
                <div className="col-sm-10">
                  <select
                    name=""
                    id=""
                    className="form-control"
                    disabled
                    // onChange={(e) => setKategoriId(e.target.value)}
                  >
                    <option value="Kategori" selected>
                    {allMK.cooperationById.length===0 ? "":allMK.cooperationById.data.cooperation_category}
                      
                    </option>
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Periode
                </label>
                <div className="col-sm-10">
                  <div className="row align-items-right">
                    <div className="col-lg-3 col-xl-3 mt-5 mt-lg-5">
                      <DatePicker
                        className="form-control-sm form-control"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        readOnly
                        // startDate={startDate}
                        // endDate={endDate}
                         value={allMK.cooperationById.length===0 ? "":allMK.cooperationById.data.period_date_start}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Dari Tanggal"
                        // minDate={addDays(new Date(), 20)}
                      />
                      
                    </div>
                    <div className="col-lg-3 col-xl-3 mt-5 mt-lg-5">
                      <DatePicker
                        className="form-control-sm form-control"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        value={allMK.cooperationById.length===0 ? "":allMK.cooperationById.data.period_date_end}
                        // startDate={startDate}
                        // endDate={endDate}
                        minDate={startDate}
                        readOnly
                        maxDate={addDays(startDate, 20)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Sampai Tanggal"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Periode Kerjasama
                </label>
                <div className="col-sm-10">
                  <div className="row align-items-right">
                    <div className="col-lg-3 col-xl-3 mt-5 mt-lg-5">
                      {/* <DatePicker
                        className="form-control-sm form-control"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        value={allMK.cooperationById.length===0 ? "":allMK.cooperationById.data.period}
                        readOnly
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Dari Tanggal"
                        // minDate={addDays(new Date(), 20)}
                      /> */}
                      <input type="text" value={allMK.cooperationById.length===0 ? "":allMK.cooperationById.data.period} readOnly className="form-control" />
                    </div>
                    <div className="col-lg-3 col-xl-3 mt-5 mt-lg-5">
                      {/* <DatePicker
                        className="form-control-sm form-control"
                        // selected={endDate}
                        readOnly
                        
                        // onChange={(date) => setEndDate(date)}
                        selectsEnd
                        // startDate={startDate}
                        // endDate={endDate}
                        // minDate={startDate}
                        // maxDate={addDays(startDate, 20)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Sampai Tanggal"
                      /> */}
                      <input type="text" value={allMK.cooperationById.length===0 ? "":allMK.cooperationById.data.period_unit} readOnly className="form-control" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Nama Lembaga
                </label>
                <div className="col-sm-3">
                  {/* <select name="" id="" className="form-control">
                    <option value="Kategori" selected>
                      Dqlab
                    </option>
                    <option value="Kategori">Microsoft</option>
                    <option value="Kategori">Google</option>
                  </select> */}
                   <input type="text" value={allMK.cooperationById.length===0 ? "":allMK.cooperationById.data.institution_name} readOnly className="form-control" />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-3">
                  {/* <select name="" id="" className="form-control">
                    <option value="Kategori" selected>
                      info@dqlab.co.id
                    </option>
                    <option value="Kategori">pengajuan - pembahasan</option>
                    <option value="Kategori">pengajuan - revisi</option>
                  </select> */}
                  <input type="text" value={allMK.cooperationById.length===0 ? "":allMK.cooperationById.data.email} readOnly className="form-control" />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Nomor Perjanjian Lembaga
                </label>
                <div className="col-sm-10">
                  {/* <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan Nomor Perjanjian Lembaga"
                  /> */}
                  <input type="text" value={allMK.cooperationById.length===0 ? "":allMK.cooperationById.data.agreement_number_partner} readOnly className="form-control" />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Nomor Perjanjian KemKominfo
                </label>
                <div className="col-sm-10">
                  {/* <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan Nomor Perjanjian Kemkominfo"
                  /> */}
                  <input type="text" value={allMK.cooperationById.length===0 ? "":allMK.cooperationById.data.agreement_number_kemkominfo} readOnly className="form-control" />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Tanggal Penandatanganan
                </label>
                <div className="col-sm-10">
                  <div className="row align-items-right">
                    <div className="col-lg-3 col-xl-3 mt-5 mt-lg-5">
                      <input
                      readOnly
                      value={allMK.cooperationById.length===0 ? "":allMK.cooperationById.data.signing_date}
                        type="date"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>



{/* <div style={{overflow:'scroll',height:600}}>
            <MobilePDFReader url="http://localhost:3000/test.pdf"/>
           </div> */}
              
              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Dokumen Kerjasama
                  


                </label>
                <div className="col-sm-10">
                  <div className="row align-items-right">
                    <div className="col-sm-10">
                      <button className="btn btn-primary btn-sm">
                        Lihat Dokumen
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Dokumen Penandatangan Virtual
                </label>
                <div className="col-sm-10">
                  <div className="row align-items-right">
                    <div className="col-sm-10">
                      <button className="btn btn-primary btn-sm">
                        Lihat Dokumen
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* start loop */}

              {allMK.cooperationById.length===0 ? "":allMK.cooperationById.data.data_content.map((items,i)=>{
                return(
                  
              

              
              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  {/* Tujuan Kerjasama
                   */}
                   {allMK.cooperationById.data.data_content[i].cooperation_form}
                </label>
                <div className="col-sm-10">
                  <textarea
                  readOnly
                  value={items.cooperation_form_content}
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    className="form-control"
                    placeholder="Masukkan Tujuan Kerjasama disini"
                  ></textarea>
                </div>
              </div>


                )
              })}
{/* loop end loop*/}
              <div className="form-group row">
                <div className="col-sm-2"></div>
                <div className="col-sm-10">
                  <Link href="/partnership/manajemen-kerjasama">
                    <a className="btn btn-outline-primary mr-2 btn-sm">
                      Kembali
                    </a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default DetailDokumenKerjasama;
