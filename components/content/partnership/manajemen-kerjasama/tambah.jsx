import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import PageWrapper from "../../../wrapper/page.wrapper";

const Tambah = () => {
  return (
    <PageWrapper>
      <div className="col-lg-12 col-xxl-12 order-1 order-xxl-2 px-0">
        <div className="card card-custom card-stretch gutter-b">
          <div className="card-header border-0">
            <h3 className="card-title font-weight-bolder text-dark">
              Tambah Kerjasama
            </h3>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Nama Lembaga
                </label>
                <div className="col-sm-3">
                  <select name="" id="" className="form-control">
                    <option value="Kategori" selected>
                      Dqlab
                    </option>
                    <option value="Kategori">Microsoft</option>
                    <option value="Kategori">Google</option>
                  </select>
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
                  <select name="" id="" className="form-control">
                    <option value="Kategori" selected>
                      info@dqlab.co.id
                    </option>
                    <option value="Kategori">pengajuan - pembahasan</option>
                    <option value="Kategori">pengajuan - revisi</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Tanggal
                </label>
                <div className="col-sm-3">
                  <input type="date" className="form-control" />
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
                  <select name="" id="" className="form-control">
                    <option value="Kategori">Pilih Kategori Kerjasama</option>
                    <option value="Kategori" selected>
                      Pelatihan
                    </option>
                    <option value="Kategori">Bootcamp</option>
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
                      <input
                        type="date"
                        className="form-control form-control-sm"
                      />
                    </div>
                    <div className="col-lg-3 col-xl-3 mt-5 mt-lg-5">
                      <input
                        type="date"
                        className="form-control form-control-sm"
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
                  Tujuan Kerjasama
                </label>
                <div className="col-sm-10">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    className="form-control"
                    placeholder="Masukan Tujuan Kerjasama"
                  ></textarea>
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Ruang Lingkup Kerjasama
                </label>
                <div className="col-sm-10">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    className="form-control"
                    placeholder="Masukan Ruang Lingkup Kerjasama"
                  ></textarea>
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Target Kerjasama
                </label>
                <div className="col-sm-10">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    className="form-control"
                    placeholder="Masukan Target Kerjasama disini"
                  ></textarea>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-2"></div>
                <div className="col-sm-10">
                  <Link href="/">
                    <a className="btn btn-outline-primary mr-2 btn-sm">
                      Kembali
                    </a>
                  </Link>
                  <Link href="/partnership/manajemen-kerjasama/submit ">
                    {/* <a className="btn btn-outline-primary mr-2 btn-sm">
                      Kembali
                    </a> */}
                    <button className="btn btn-primary btn-sm">Submit</button>
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

export default Tambah;