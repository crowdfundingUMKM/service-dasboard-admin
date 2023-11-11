import CreateNotifLayout from '@/pages/notify/create-notify/layout.jsx'
import Link from 'next/link'

export default function CreateNotif() {

    return (
        <CreateNotifLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>Buat Notif</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Pages</li>
                    <li className="breadcrumb-item active">Buat Notif</li>
                    </ol>
                </nav>
                </div>
                <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Buat Notif Untuk User</h5>
                        {/* General Form Elements */}
                        <form>
                            <div className="row mb-3">
                            <label htmlFor="inputText" className="col-sm-2 col-form-label">
                                Nama
                            </label>
                            <div className="col-sm-10">
                                <input
                                type="text"
                                className="form-control"
                                defaultValue="yourName"
                                disabled=""
                                />
                            </div>
                            </div>
                            <div className="row mb-3">
                            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                                Email
                            </label>
                            <div className="col-sm-10">
                                <input
                                type="email"
                                className="form-control"
                                defaultValue="youremai@userinvestor.com"
                                disabled=""
                                />
                            </div>
                            </div>
                            <div className="row mb-3">
                            <label
                                htmlFor="inputText"
                                className="col-sm-2 col-form-label"
                            >
                                Judul
                            </label>
                            <div className="col-sm-10">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Judul"
                                />
                            </div>
                            </div>
                            <div className="row mb-3">
                            <label
                                htmlFor="inputPassword"
                                className="col-sm-2 col-form-label"
                            >
                                Deskripsi Info
                            </label>
                            <div className="col-sm-10">
                                <textarea
                                className="form-control"
                                style={{ height: 100 }}
                                placeholder="Informasi admin"
                                defaultValue={""}
                                />
                            </div>
                            </div>
                            <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Untuk</label>
                            <div className="col-sm-10">
                                <select
                                className="form-select"
                                aria-label="Default select example"
                                >
                                <option selected="">All</option>
                                <option value={2}>User Investor</option>
                                <option value={3}>User Campaign</option>
                                <option value={3}>User Konsultan</option>
                                </select>
                            </div>
                            </div>
                            <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">
                                Submit Button
                            </label>
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary">
                                Submit Info
                                </button>
                            </div>
                            </div>
                        </form>
                        {/* End General Form Elements */}
                        </div>
                    </div>
                    </div>
                </div>
                {/* /.container-fluid */}
                </section>
            </main>

        </CreateNotifLayout>
    )
}