import ListServiceLayout from '@/pages/service-status/list-service/layout'
import DataTable from '@/components/utils/DataTable'
export default function ListService() {
    return (
    <ListServiceLayout>
        <main id="main" className="main">
            <div className="pagetitle">
            <h1>Daftar Service Status</h1>
            <nav>
                <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">Service Status</li>
                <li className="breadcrumb-item active">Daftar Service Status</li>
                </ol>
            </nav>
            </div>
            {/* End Page Title */}
            <section className="section">
            <div className="row">
                <div className="col-lg">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Data Service Backend</h5>
                    {/* Default Table */}
                    {/* Info untuk admin jika Informasi service dan log tidak bisa di lihat ytang bukan Master Node */}
                    <DataTable>
                        <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Nama Service</th>
                            <th scope="col">Status Service</th>
                            <th scope="col">Infomarsi Service</th>
                            <th scope="col">Log</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Service User Admin</td>
                            <td>
                            <div className="badge bg-primary">True</div>
                            </td>
                            <td>
                            <div className="dropdown">
                                <button
                                className="btn btn-primary dropdown-toggle"
                                data-bs-target="#charts-nav"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >
                                Enviroment : Service
                                </button>
                                <div
                                id="dropdown-menu"
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                                >
                                <ul>
                                    <li>env : data 1</li>
                                    <li>data : data 2</li>
                                    <li>data : data 3</li>
                                    <li>data : data 4</li>
                                    <li>data : data 5</li>
                                    <li>data : data 6</li>
                                    <li>data : data 7</li>
                                    <li>data : data 8</li>
                                </ul>
                                </div>
                            </div>
                            </td>
                            <td>
                            <a href="#">
                                <button className="btn btn-success btn-sm">
                                Download
                                </button>
                            </a>
                            <a href="#">
                                <button className="btn btn-primary btn-sm">Link</button>
                            </a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Service User Investor</td>
                            <td>
                            <div className="badge bg-primary">True</div>
                            </td>
                            <td>
                            <div className="dropdown">
                                <button
                                className="btn btn-primary dropdown-toggle"
                                data-bs-target="#charts-nav"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >
                                Enviroment : Service
                                </button>
                                <div
                                id="dropdown-menu"
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                                >
                                <ul>
                                    <li>data : data 1</li>
                                    <li>data : data 2</li>
                                    <li>data : data 3</li>
                                    <li>data : data 4</li>
                                    <li>data : data 5</li>
                                    <li>data : data 6</li>
                                    <li>data : data 7</li>
                                    <li>data : data 8</li>
                                </ul>
                                </div>
                            </div>
                            </td>
                            <td>
                            <a href="#">
                                <button className="btn btn-success btn-sm">
                                Download
                                </button>
                            </a>
                            <a href="#">
                                <button className="btn btn-primary btn-sm">Link</button>
                            </a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Service User Campaign</td>
                            <td>
                            <div className="badge bg-danger">False</div>
                            </td>
                            <td>
                            <div className="dropdown">
                                <button
                                className="btn btn-primary dropdown-toggle"
                                data-bs-target="#charts-nav"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >
                                Enviroment : Service
                                </button>
                                <div
                                id="dropdown-menu"
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                                >
                                <ul>
                                    <li>data : data 1</li>
                                    <li>data : data 2</li>
                                    <li>data : data 3</li>
                                    <li>data : data 4</li>
                                    <li>data : data 5</li>
                                    <li>data : data 6</li>
                                    <li>data : data 7</li>
                                    <li>data : data 8</li>
                                </ul>
                                </div>
                            </div>
                            </td>
                            <td>
                            <a href="#">
                                <button className="btn btn-success btn-sm">
                                Download
                                </button>
                            </a>
                            <a href="#">
                                <button className="btn btn-primary btn-sm">Link</button>
                            </a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Service User Reviewer</td>
                            <td>
                            <div className="badge bg-primary">True</div>
                            </td>
                            <td>
                            <div className="dropdown">
                                <button
                                className="btn btn-primary dropdown-toggle"
                                data-bs-target="#charts-nav"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >
                                Enviroment : Service
                                </button>
                                <div
                                id="dropdown-menu"
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                                >
                                <ul>
                                    <li>data : data 1</li>
                                    <li>data : data 2</li>
                                    <li>data : data 3</li>
                                    <li>data : data 4</li>
                                    <li>data : data 5</li>
                                    <li>data : data 6</li>
                                    <li>data : data 7</li>
                                    <li>data : data 8</li>
                                </ul>
                                </div>
                            </div>
                            </td>
                            <td>
                            <a href="#">
                                <button className="btn btn-success btn-sm">
                                Download
                                </button>
                            </a>
                            <a href="#">
                                <button className="btn btn-primary btn-sm">Link</button>
                            </a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Service Campaign Details</td>
                            <td>
                            <div className="badge bg-primary">True</div>
                            </td>
                            <td>
                            <div className="dropdown">
                                <button
                                className="btn btn-primary dropdown-toggle"
                                data-bs-target="#charts-nav"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >
                                Enviroment : Service
                                </button>
                                <div
                                id="dropdown-menu"
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                                >
                                <ul>
                                    <li>data : data 1</li>
                                    <li>data : data 2</li>
                                    <li>data : data 3</li>
                                    <li>data : data 4</li>
                                    <li>data : data 5</li>
                                    <li>data : data 6</li>
                                    <li>data : data 7</li>
                                    <li>data : data 8</li>
                                </ul>
                                </div>
                            </div>
                            </td>
                            <td>
                            <a href="#">
                                <button className="btn btn-success btn-sm">
                                Download
                                </button>
                            </a>
                            <a href="#">
                                <button className="btn btn-primary btn-sm">Link</button>
                            </a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Service Reviewer details</td>
                            <td>
                            <div className="badge bg-primary">True</div>
                            </td>
                            <td>
                            <div className="dropdown">
                                <button
                                className="btn btn-primary dropdown-toggle"
                                data-bs-target="#charts-nav"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >
                                Enviroment : Service
                                </button>
                                <div
                                id="dropdown-menu"
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                                >
                                <ul>
                                    <li>data : data 1</li>
                                    <li>data : data 2</li>
                                    <li>data : data 3</li>
                                    <li>data : data 4</li>
                                    <li>data : data 5</li>
                                    <li>data : data 6</li>
                                    <li>data : data 7</li>
                                    <li>data : data 8</li>
                                </ul>
                                </div>
                            </div>
                            </td>
                            <td>
                            <a href="#">
                                <button className="btn btn-success btn-sm">
                                Download
                                </button>
                            </a>
                            <a href="#">
                                <button className="btn btn-primary btn-sm">Link</button>
                            </a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Service Transaction</td>
                            <td>
                            <div className="badge bg-primary">True</div>
                            </td>
                            <td>
                            <div className="dropdown">
                                <button
                                className="btn btn-primary dropdown-toggle"
                                data-bs-target="#charts-nav"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >
                                Enviroment : Service
                                </button>
                                <div
                                id="dropdown-menu"
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                                >
                                <ul>
                                    <li>data : data 1</li>
                                    <li>data : data 2</li>
                                    <li>data : data 3</li>
                                    <li>data : data 4</li>
                                    <li>data : data 5</li>
                                    <li>data : data 6</li>
                                    <li>data : data 7</li>
                                    <li>data : data 8</li>
                                </ul>
                                </div>
                            </div>
                            </td>
                            <td>
                            <a href="#">
                                <button className="btn btn-success btn-sm">
                                Download
                                </button>
                            </a>
                            <a href="#">
                                <button className="btn btn-primary btn-sm">Link</button>
                            </a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>Service Histori Profit</td>
                            <td>
                            <div className="badge bg-primary">True</div>
                            </td>
                            <td>
                            <div className="dropdown">
                                <button
                                className="btn btn-primary dropdown-toggle"
                                data-bs-target="#charts-nav"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >
                                Enviroment : Service
                                </button>
                                <div
                                id="dropdown-menu"
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                                >
                                <ul>
                                    <li>data : data 1</li>
                                    <li>data : data 2</li>
                                    <li>data : data 3</li>
                                    <li>data : data 4</li>
                                    <li>data : data 5</li>
                                    <li>data : data 6</li>
                                    <li>data : data 7</li>
                                    <li>data : data 8</li>
                                </ul>
                                </div>
                            </div>
                            </td>
                            <td>
                            <a href="#">
                                <button className="btn btn-success btn-sm">
                                Download
                                </button>
                            </a>
                            <a href="#">
                                <button className="btn btn-primary btn-sm">Link</button>
                            </a>
                            </td>
                        </tr>
                        </tbody>
                    </DataTable>
                    {/* End Default Table Example */}
                    </div>
                </div>
                </div>
            </div>
            </section>
        </main>
    </ListServiceLayout>
    )
}