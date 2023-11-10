import FundDonationLayout from '@/pages/user-campaign/fund-donation/layout';
import DataTable from '@/components/utils/DataTable';
import Link from 'next/link'

export default function FundDonation() {
    return (

        <FundDonationLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>Pengajuan Pencairan dana</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                    <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">User Campaign</li>
                    <li className="breadcrumb-item active">Pengajuan Pencaairan Dana</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                <div className="row">
                    <div className="col-lg">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Pengajuan yang dilakukan</h5>
                        <p>
                            Berikut data yang sedang diajukan untuk proses pencairan dana
                            yang akan di berikan oleh Crowdfunding UMKM, Request ini didapat
                            dari Request User Campaign
                        </p>
                        {/* Table Status Penarikan */}
                        {/* Table with hoverable rows */}
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nama Pemilik</th>
                                <th scope="col">Nama Campaign</th>
                                <th scope="col">Status Campaign</th>
                                <th scope="col">Status Pengajuan</th>
                                <th scope="col">Waktu Pengajuan</th>
                                <th scope="col">Terima Pencairan</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Brandon Jacob</td>
                                <td>Penjualan Buah Naga</td>
                                <td>
                                <span className="badge bg-success">Active</span>
                                </td>
                                <td>
                                <span className="badge bg-danger">Ditolak</span>
                                </td>
                                <td>2016-05-25</td>
                                <td>
                                {/* make button  */}
                                <div className="col">
                                    <button type="button" className="btn btn-success">
                                    Disetujui
                                    </button>
                                    <button type="button" className="btn btn-danger">
                                    Ditolak
                                    </button>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Bridie Kessler</td>
                                <td>Penjualan Buah Naga</td>
                                <td>
                                <span className="badge bg-success">Active</span>
                                </td>
                                <td>
                                <span className="badge bg-success">Disetujui</span>
                                </td>
                                <td>2014-12-05</td>
                                <td>
                                {/* make button  */}
                                <div className="col">
                                    <button type="button" className="btn btn-success">
                                    Disetujui
                                    </button>
                                    <button type="button" className="btn btn-danger">
                                    Ditolak
                                    </button>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Ashleigh Langosh</td>
                                <td>Penjualan Buah Naga</td>
                                <td>
                                <span className="badge bg-success">Active</span>
                                </td>
                                <td>
                                <span className="badge bg-success">Disetujui</span>
                                </td>
                                <td>2011-08-12</td>
                                <td>
                                {/* make button  */}
                                <div className="col">
                                    <button type="button" className="btn btn-success">
                                    Disetujui
                                    </button>
                                    <button type="button" className="btn btn-danger">
                                    Ditolak
                                    </button>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Ashleigh Langosh</td>
                                <td>Penjualan Buah Naga</td>
                                <td>
                                <span className="badge bg-success">Active</span>
                                </td>
                                <td>
                                <span className="badge bg-warning">Waiting</span>
                                </td>
                                <td>2011-08-12</td>
                                <td>
                                {/* make button  */}
                                <div className="col">
                                    <button type="button" className="btn btn-success">
                                    Disetujui
                                    </button>
                                    <button type="button" className="btn btn-danger">
                                    Ditolak
                                    </button>
                                </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        {/* End Table with hoverable rows */}
                        </div>
                    </div>
                    </div>
                </div>
                {/* end table pengajuan */}
                <div className="row">
                    <div className="col-lg">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">
                            Pengembalian dana oleh user campaign
                        </h5>
                        <p>
                            Admin akan menghubungi jika ada user campaign yang akan
                            mengembalikan dana. Admin akan update jika dana sudah
                            dikembalikan oleh user campaign.
                        </p>
                        {/* Table Status Penarikan */}
                        {/* Table with hoverable rows */}
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nama Pemilik</th>
                                <th scope="col">Nama Campaign</th>
                                <th scope="col">Status Pengembalian</th>
                                <th scope="col">Progres pengembalian</th>
                                <th scope="col">Selesai pengembalian</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Brandon Jacob</td>
                                <td>Penjualan Buah Naga</td>
                                <td>
                                <span className="badge bg-primary">Reuqest</span>
                                </td>
                                <td>
                                <span className="badge bg-success">Finished</span>
                                </td>
                                <td>
                                {/* make button  */}
                                <div className="col">
                                    <button type="button" className="btn btn-success">
                                    Finished
                                    </button>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Brandon Jacob</td>
                                <td>Penjualan Buah Naga</td>
                                <td>
                                <span className="badge bg-primary">Reuqest</span>
                                </td>
                                <td>
                                <span className="badge bg-success">Finished</span>
                                </td>
                                <td>
                                {/* make button  */}
                                <div className="col">
                                    <button type="button" className="btn btn-success">
                                    Finished
                                    </button>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Kane Wesker</td>
                                <td>Penjualan Minuman Tea</td>
                                <td>
                                <span className="badge bg-primary">Reuqest</span>
                                </td>
                                <td>
                                <span className="badge bg-success">Finished</span>
                                </td>
                                <td>
                                {/* make button  */}
                                <div className="col">
                                    <button type="button" className="btn btn-success">
                                    Finished
                                    </button>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Malih Salim</td>
                                <td>Penjualan Buah Semangka</td>
                                <td>
                                <span className="badge bg-primary">Reuqest</span>
                                </td>
                                <td>
                                <span className="badge bg-success">Finished</span>
                                </td>
                                <td>
                                {/* make button  */}
                                <div className="col">
                                    <button type="button" className="btn btn-success">
                                    Finished
                                    </button>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Rudi Salam</td>
                                <td>Penjualan Mobil Tuner</td>
                                <td>
                                <span className="badge bg-primary">Reuqest</span>
                                </td>
                                <td>
                                <span className="badge bg-success">Finished</span>
                                </td>
                                <td>
                                {/* make button  */}
                                <div className="col">
                                    <button type="button" className="btn btn-success">
                                    Finished
                                    </button>
                                </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        {/* End Table with hoverable rows */}
                        </div>
                    </div>
                    </div>
                </div>
                {/* end table pencairan dana */}
                </section>
            </main>

            </FundDonationLayout>
    );
}