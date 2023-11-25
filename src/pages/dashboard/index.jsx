import Image from 'next/image'
import Link from 'next/link'


import ContentSide from '@/components/ContentSide'
// import layotu from this folder
import DashboardLayout from '@/pages/dashboard/layout'


import DataTable from '@/components/utils/DataTable';

export default function Home() {
  return (

    <DashboardLayout>
    <main id="main" className="main">
        <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
            <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
            </ol>
        </nav>
        </div>
        {/* End Page Title */}
        <section className="section dashboard">
        <div className="row">
            {/* Left side columns */}
            <div className="col-lg-8">
            <div className="row">
                {/* User Investor Card */}
                <div className="col-xxl-4 col-md-6">
                <div className="card info-card sales-card">
                    <div className="card-body">
                    <h5 className="card-title">
                        User Investor <span>| Total</span>
                    </h5>
                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people" />
                        </div>
                        <div className="ps-3">
                        <h6>145</h6>
                        <span className="text-success small pt-1 fw-bold">
                            12%
                        </span>{" "}
                        <span className="text-muted small pt-2 ps-1">
                            increase
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* User Investor Card */}
                {/* User Campaign Card */}
                <div className="col-xxl-4 col-md-6">
                <div className="card info-card revenue-card">
                    <div className="card-body">
                    <h5 className="card-title">
                        User Campaign <span>| Total</span>
                    </h5>
                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-person-rolodex" />
                        </div>
                        <div className="ps-3">
                        <h6>20</h6>
                        <span className="text-success small pt-1 fw-bold">
                            8%
                        </span>{" "}
                        <span className="text-muted small pt-2 ps-1">
                            increase
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* End User Campaign Card */}
                {/* User Konsultan Card */}
                <div className="col-xxl-4 col-xl-12">
                <div className="card info-card customers-card">
                    <div className="card-body">
                    <h5 className="card-title">
                        User Konsultan<span>| Total</span>
                    </h5>
                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people" />
                        </div>
                        <div className="ps-3">
                        <h6>40</h6>
                        <span className="text-danger small pt-1 fw-bold">
                            13%
                        </span>{" "}
                        <span className="text-muted small pt-2 ps-1">
                            decrease
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* End Customers Card */}
                {/* Recent Sales */}
                <div className="col-12">
                <div className="card recent-sales overflow-auto">
                    <div className="card-body">
                    <h5 className="card-title">
                        Total User Transaksi <span>| Semua Campaign</span>
                    </h5>
                    <DataTable>
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Investor</th>
                            <th scope="col">Campaign</th>
                            <th scope="col">Donasi</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">
                            <a href="#">#2457</a>
                            </th>
                            <td>Brandon Jacob</td>
                            <td>
                            <a href="#" className="text-primary">
                                At praesentium minu
                            </a>
                            </td>
                            <td>Rp. 50.000</td>
                            <td>
                            <span className="badge bg-success">Approved</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                            <a href="#">#2147</a>
                            </th>
                            <td>Bridie Kessler</td>
                            <td>
                            <a href="#" className="text-primary">
                                Blanditiis dolor omnis similique
                            </a>
                            </td>
                            <td>Rp. 400.000</td>
                            <td>
                            <span className="badge bg-warning">Pending</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                            <a href="#">#2049</a>
                            </th>
                            <td>Ashleigh Langosh</td>
                            <td>
                            <a href="#" className="text-primary">
                                At recusandae consectetur
                            </a>
                            </td>
                            <td>Rp. 200.000</td>
                            <td>
                            <span className="badge bg-success">Approved</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                            <a href="#">#2644</a>
                            </th>
                            <td>Angus Grady</td>
                            <td>
                            <a href="#" className="text-primar">
                                Ut voluptatem id earum et
                            </a>
                            </td>
                            <td>Rp. 100.000</td>
                            <td>
                            <span className="badge bg-danger">Rejected</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                            <a href="#">#2644</a>
                            </th>
                            <td>Raheem Lehner</td>
                            <td>
                            <a href="#" className="text-primary">
                                Sunt similique distinctio
                            </a>
                            </td>
                            <td>Rp. 700.000</td>
                            <td>
                            <span className="badge bg-success">Approved</span>
                            </td>
                        </tr>
                        </tbody>
                    </DataTable>
                    </div>
                </div>
                </div>
                {/* End Recent Sales */}
                {/* Top Campaign */}
                <div className="col-12">
                <div className="card top-selling overflow-auto">
                    <div className="card-body pb-0">
                    <h5 className="card-title">
                        Top Campaign UMKM <span>| Tahun ini</span>
                    </h5>
                    <table className="table table-borderless ">
                        <thead>
                        <tr>
                            <th scope="col">Preview Campaign</th>
                            <th scope="col">Campaign UMKM</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Banyak Kontributor</th>
                            <th scope="col">Suku Bunga</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">
                            <a href="#">
                                <Image src="/assets/img/product-1.jpg" alt="" width={70} height={70}/>
                            </a>
                            </th>
                            <td>
                            <a href="#" className="text-primary fw-bold">
                                Ut inventore ipsa voluptas nulla
                            </a>
                            </td>
                            <td>Rp. 31.000.000</td>
                            <td className="fw-bold">124</td>
                            <td>%2</td>
                        </tr>
                        <tr>
                            <th scope="row">
                            <a href="#">
                                <Image src="/assets/img/product-2.jpg" alt="" width={70} height={70}/>
                            </a>
                            </th>
                            <td>
                            <a href="#" className="text-primary fw-bold">
                                Exercitationem similique doloremque
                            </a>
                            </td>
                            <td>Rp. 10.000.000</td>
                            <td className="fw-bold">98</td>
                            <td>%2</td>
                        </tr>
                        <tr>
                            <th scope="row">
                            <a href="#">
                                <Image src="/assets/img/product-3.jpg" alt="" width={70} height={70} />
                            </a>
                            </th>
                            <td>
                            <a href="#" className="text-primary fw-bold">
                                Doloribus nisi exercitationem
                            </a>
                            </td>
                            <td>Rp. 3.000.000</td>
                            <td className="fw-bold">74</td>
                            <td>%2</td>
                        </tr>
                        <tr>
                            <th scope="row">
                            <a href="#">
                                <Image src="/assets/img/product-4.jpg" alt="" width={70} height={70} />
                            </a>
                            </th>
                            <td>
                            <a href="#" className="text-primary fw-bold">
                                Officiis quaerat sint rerum error
                            </a>
                            </td>
                            <td>Rp. 300.000</td>
                            <td className="fw-bold">63</td>
                            <td>%2</td>
                        </tr>
                        <tr>
                            <th scope="row">
                            <a href="#">
                                <Image src="/assets/img/product-5.jpg" alt="" width={70} height={70}/>
                            </a>
                            </th>
                            <td>
                            <a href="#" className="text-primary fw-bold">
                                Sit unde debitis delectus repellendus
                            </a>
                            </td>
                            <td>Rp. 4.000.000</td>
                            <td className="fw-bold">41</td>
                            <td>%2</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
                {/* End Top Campign */}
            </div>
            </div>
            {/* End Left side columns */}
            {/* Right side columns */}
            <ContentSide/>
            {/* End Right side columns */}
        </div>
        </section>
    </main>       
        
    </DashboardLayout>
    )
}