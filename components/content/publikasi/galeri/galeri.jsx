import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Pagination from 'react-js-pagination';
import { css } from '@emotion/react'
import BeatLoader from 'react-spinners/BeatLoader'
import DatePicker from 'react-datepicker'
import { addDays } from 'date-fns'

import PageWrapper from '../../../wrapper/page.wrapper'
import CardPage from '../../../CardPage'
import ButtonAction from '../../../ButtonAction'
import LoadingTable from "../../../LoadingTable";
import ButtonNewTab from "../../../ButtonNewTab";

import { useDispatch, useSelector } from 'react-redux'
import { deleteGaleri, clearErrors } from '../../../../redux/actions/publikasi/galeri.actions'

import {
    DELETE_GALERI_RESET
  } from '../../../../redux/types/publikasi/galeri.type'

const Galeri = () => {

    const dispatch = useDispatch()
    const router = useRouter()

    // const { loading, error, galeri } = useSelector(state => state.allGaleri)
    const { loading: allLoading, error, galeri } = useSelector((state) => state.allGaleri);
    const { loading: deleteLoading, error: deleteError, isDeleted } = useSelector((state) => state.deleteGaleri);

    const [search, setSearch] = useState('')
    const [limit, setLimit] = useState(null)
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    let loading = false

    let { page = 1, keyword, success } = router.query;
    if (allLoading) {
        loading = allLoading
    } else if (deleteLoading) {
        loading = deleteLoading
    }
    page = Number(page);

    useEffect(() => {
        if (limit) {
          router.push(`${router.pathname}?page=1&limit=${limit}`)
        }
        if (isDeleted) {
          Swal.fire("Berhasil ", "Data berhasil dihapus.", "success").then((result) => {
            if (result.isConfirmed) {
              window.location.reload()
            }
          });
          dispatch({
            type: DELETE_GALERI_RESET
          })
        }
      }, [limit, isDeleted]);

    // const override = css`
    //     margin: 0 auto;
    // `;

    const onNewReset = () => {
        router.replace('/publikasi/galeri', undefined, { shallow: true })
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Apakah anda yakin ?",
            text: "Data ini tidak bisa dikembalikan !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya !",
            cancelButtonText: "Batal",
        }).then((result) => {
            if (result.isConfirmed) {
            dispatch(deleteGaleri(id));
            }
        });
    };

    const handlePagination = (pageNumber) => {
        if (limit != null) {
            router.push(`${router.pathname}?page=${pageNumber}&limit=${limit}`)
        } else {
            router.push(`${router.pathname}?page=${pageNumber}`)
        }
    }

    const handleSearch = () => {
        if (limit != null) {
            router.push(`${router.pathname}?page=1&keyword=${search}&limit=${limit}`)
        } else {
            router.push(`${router.pathname}?page=1&keyword=${search}`)
        }
    }

    const handleSearchDate = () => {
        router.push(`${router.pathname}?page=1&startdate=${moment(startDate).format('YYYY-MM-DD')}&enddate=${moment(endDate).format('YYYY-MM-DD')}`)
    }

    const handleLimit = (val) => {
        setLimit(val)
    }

    return (
        <PageWrapper>
            {error ?
                <div className="alert alert-custom alert-light-danger fade show mb-5" role="alert">
                    <div className="alert-icon"><i className="flaticon-warning"></i></div>
                    <div className="alert-text">{error}</div>
                    <div className="alert-close">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true"><i className="ki ki-close"></i></span>
                        </button>
                    </div>
                </div>
                : ''
            }

            {success ?
                    <div className="alert alert-custom alert-light-success fade show mb-5" role="alert">
                    <div className="alert-icon"><i className="flaticon2-checkmark"></i></div>
                    <div className="alert-text">Berhasil Menambah Data</div>
                    <div className="alert-close">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onNewReset} >
                        <span aria-hidden="true"><i className="ki ki-close"></i></span>
                        </button>
                    </div>
                    </div>
                    : ''
                }

            <div className="col-lg-12 col-md-12">
                <div className="row">
                    <CardPage background='bg-light-info' icon='mail-purple.svg' color='#8A50FC' value='90' titleValue='Galeri' title='Total Publish' />
                    <CardPage background='bg-light-warning' icon='garis-yellow.svg' color='#634100' value='64' titleValue='Galeri' title='Total Author' />
                    <CardPage background='bg-light-success' icon='orang-tambah-green.svg' color='#74BBB7' value='64' titleValue='K' title='Total Yang Baca' />
                    <CardPage background='bg-light-danger' icon='kotak-kotak-red.svg' color='#F65464' value='64' titleValue='Galeri' title='Total Unpublish' />
                </div>
            </div>


            <div className="col-lg-12 order-1 px-0">
                <div className="card card-custom card-stretch gutter-b">
                    <div className="card-header border-0">
                        <h3 className="card-title font-weight-bolder text-dark">Managemen Galeri</h3>
                        <div className="card-toolbar">
                            <Link href='/publikasi/galeri/tambah'>
                                <a className="btn btn-light-success px-6 font-weight-bold btn-block ">
                                    Tambah Galeri
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="card-body pt-0">

                        <div className="table-filter">
                            <div className="row align-items-center">
                                <div className="col-lg-10 col-xl-10">
                                    <div className="input-icon">
                                        <input
                                        style={{ background: "#F3F6F9", border: "none" }}
                                        type="text"
                                        className="form-control"
                                        placeholder="Search..."
                                        id="kt_datatable_search_query"
                                        onChange={e => setSearch(e.target.value)}
                                        />
                                        <span>
                                        <i className="flaticon2-search-1 text-muted"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-xl-2">
                                    <button type="button" className='btn btn-light-primary btn-block' onClick={handleSearch}>Cari</button>
                                </div>
                            </div>
                            <div className="row align-items-right">
                                <div className="col-lg-2 col-xl-2 mt-5 mt-lg-5">
                                    <DatePicker
                                        className="form-search-date form-control-sm form-control"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                        dateFormat="dd/MM/yyyy"
                                    // minDate={addDays(new Date(), 20)}
                                    />
                                    <small className="form-text text-muted">
                                        Dari Tanggal
                                    </small>
                                </div>
                                <div className="col-lg-2 col-xl-2 mt-5 mt-lg-5">
                                    <DatePicker
                                        className="form-search-date form-control-sm form-control"
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={startDate}
                                        maxDate={addDays(startDate, 20)}
                                        dateFormat="dd/MM/yyyy"
                                    />
                                    <small className="form-text text-muted">
                                        Sampai Tanggal
                                    </small>
                                </div>
                                <div className="col-lg-2 col-xl-2 mt-5 mt-lg-5">
                                    <button
                                        type='button'
                                        className="btn btn-sm btn-light-primary px-6 font-weight-bold btn-block"
                                        onClick={handleSearchDate}
                                    >
                                        Cari
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="table-page mt-5">
                            <div className="table-responsive">

                                <LoadingTable loading={loading} />

                                {loading === false ?
                                    <table className='table table-separate table-head-custom table-checkable'>
                                        <thead style={{ background: '#F3F6F9' }}>
                                            <tr>
                                                <th className='text-center'>Thumbnail</th>
                                                <th>Kategori</th>
                                                <th>Judul</th>
                                                <th>Tanggal Membuat</th>
                                                <th>Dibuat</th>
                                                <th>Status</th>
                                                <th>Role</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        {/* {
                                            console.log (galeri)
                                        } */}
                                        <tbody>
                                            {
                                                !galeri || galeri && galeri.gallery.length === 0 ?
                                                    <td className='align-middle text-center' colSpan={8}>Data Masih Kosong</td> :
                                                    galeri && galeri.gallery.map((row) => {
                                                        return <tr key={row.id}>
                                                            <td className='text-center'>
                                                                <Image alt='name_image' 
                                                                unoptimized={
                                                                    process.env.ENVIRONMENT !== "PRODUCTION"
                                                                }
                                                                src={
                                                                    process.env.END_POINT_API_IMAGE_PUBLIKASI +
                                                                    "publikasi/images/" +
                                                                    row.gambar
                                                                } 
                                                                width={80} height={50} />
                                                            </td>
                                                            <td className='align-middle'>{row.kategori_id}</td>
                                                            <td className='align-middle'>{row.judul}</td>
                                                            <td className='align-middle'>{new Date (row.created_at).toLocaleDateString("fr-CA")}</td>
                                                            <td className='align-middle'>{row.role_name}</td>
                                                            <td className='align-middle'>
                                                                { row.status  === 1 ? (
                                                                    <span class="label label-inline label-light-success font-weight-bold">
                                                                    Publish
                                                                  </span>
                                                                ) : (
                                                                  <span class="label label-inline label-light-warning font-weight-bold">
                                                                    Belum di publish
                                                                  </span>
                                                                )}
                                                            </td>
                                                            <td className='align-middle'>Admin Publikasi</td>
                                                            <td className='align-middle'>
                                                                <ButtonAction icon='setting.svg' data-toggle="modal" data-target="#exampleModalCenter" />
                                                                <ButtonAction icon='write.svg' link={`/publikasi/galeri/${row.id_gallery}`}/>
                                                                <button
                                                                    onClick={() => handleDelete(row.id_gallery)}
                                                                    className="btn mr-1"
                                                                    style={{
                                                                        background: "#F3F6F9",
                                                                        borderRadius: "6px",
                                                                    }}
                                                                    >
                                                                    <Image
                                                                        alt="button-action"
                                                                        src={`/assets/icon/trash.svg`}
                                                                        width={18}
                                                                        height={18}
                                                                    />
                                                                </button>
                                                            </td>
                                                        </tr>

                                                    })
                                            }
                                        </tbody>
                                    </table> : ''
                                }
                            </div>

                            <div className="row">
                                {galeri && galeri.perPage < galeri.total &&
                                    <div className="table-pagination">
                                        <Pagination
                                            activePage={page}
                                            itemsCountPerPage={galeri.perPage}
                                            totalItemsCount={galeri.total}
                                            pageRangeDisplayed={3}
                                            onChange={handlePagination}
                                            nextPageText={'>'}
                                            prevPageText={'<'}
                                            firstPageText={'<<'}
                                            lastPageText={'>>'}
                                            itemClass='page-item'
                                            linkClass='page-link'
                                        />
                                    </div>
                                }
                                {galeri && galeri.total > 5 ?
                                    <div className="table-total ml-auto">
                                        <div className="row">
                                            <div className="col-4 mr-0 p-0">
                                                <select className="form-control" id="exampleFormControlSelect2" style={{ width: '65px', background: '#F3F6F9', borderColor: '#F3F6F9', color: '#9E9E9E' }} onChange={e => handleLimit(e.target.value)} onBlur={e => handleLimit(e.target.value)}>
                                                    <option>5</option>
                                                    <option>10</option>
                                                    <option>30</option>
                                                    <option>40</option>
                                                    <option>50</option>
                                                </select>
                                            </div>
                                            <div className="col-8 my-auto">
                                                <p className='align-middle mt-3' style={{ color: '#B5B5C3' }}>Total Data 120</p>
                                            </div>
                                        </div>
                                    </div> : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Image Preview</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-center" style={{ height: '400px' }}>
                            <Image
                                src={
                                    process.env.END_POINT_API_IMAGE_PUBLIKASI +
                                    "publikasi/images/" +
                                    row.gambar
                                } 
                                alt='image'
                                layout='fill'
                                objectFit='cover'
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default Galeri