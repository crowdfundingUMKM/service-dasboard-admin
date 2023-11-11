import TransactionInvestorLayout from 'src/pages/service-transaction/investor/layout';
import Link from 'next/link';
import DataTable from '@/components/utils/DataTable';


export default function TransactionInvestor() {

    return (
        <TransactionInvestorLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>Semua Transaksi</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Service Transaction</li>
                    <li className="breadcrumb-item active">Semua Transaksi Investor</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                <div className="row">
                    {/* Left side columns */}
                    <div className="col-lg">
                    <div className="row">
                        <div className="col-12">
                        <div className="card recent-sales overflow-auto">
                            <div className="card-body">
                            <h5 className="card-title">Transkasi User Investor</h5>
                            <p>
                                Semua Transaksi yang dilakukan oleh investor akan dicatat
                            </p>
                            <DataTable>
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nama Investor</th>
                                    <th scope="col">Campign UMKM</th>
                                    <th scope="col">Investor Bayar</th>
                                    <th scope="col">Status Transaksi</th>
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
                                    <td>Rp.600.400</td>
                                    <td>
                                    <span className="badge bg-success">Approved</span>
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
                                    <td>$147</td>
                                    <td>
                                    <span className="badge bg-success">Approved</span>
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
                                    <td>$165</td>
                                    <td>
                                    <span className="badge bg-success">Approved</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                    <a href="#">#2645</a>
                                    </th>
                                    <td>Anthony Leonhard</td>
                                    <td>
                                    <a href="#" className="text-primary">
                                        Sunt yuliotos distinctio
                                    </a>
                                    </td>
                                    <td>$165</td>
                                    <td>
                                    <span className="badge bg-success">Approved</span>
                                    </td>
                                </tr>
                                </tbody>
                            </DataTable>
                            </div>
                        </div>
                        </div>
                        {/* End Transaksi */}
                    </div>
                    </div>
                </div>
                </section>
            </main>

        </TransactionInvestorLayout>
    )
}