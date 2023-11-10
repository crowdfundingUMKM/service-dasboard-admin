import ListUserAdminLayout from '@/pages/user-admin/list-user-admin/layout';
import DataTable from '@/components/utils/DataTable';
import Link from 'next/link'

export default function ListUserAdmin() {
    return (
        <ListUserAdminLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>Daftar User Admin</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">User Admin</li>
                    <li className="breadcrumb-item active">Daftar User Admin</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                <div className="row">
                    <div className="col-lg">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Daftar User Admin</h5>
                        {/* Table with hoverable rows */}
                        <DataTable>
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Unix ID</th>
                                <th scope="col">Nama User Admin</th>
                                <th scope="col">Email</th>
                                <th scope="col">No Hp</th>
                                <th scope="col">Status Admin</th>
                                <th scope="col">Update Status Admin</th>
                                <th scope="col">Create Date</th>
                                <th scope="col">UpdateIdAdmin</th>
                                <th scope="col">UpdateAtAdmin</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* user 1 */}
                            <tr>
                                <th scope="row">1</th>
                                <td>882342-21a</td>
                                <td>Kane Wesker</td>
                                <td>kene@gmail.com</td>
                                <td>0823232134</td>
                                <td>
                                <div className="badge bg-primary">active</div>
                                </td>
                                <td>
                                <a href="#">
                                    <button className="btn btn-success btn-sm mt-sm-1">
                                    active
                                    </button>
                                </a>
                                <a href="#">
                                    <button className="btn btn-warning btn-sm mt-sm-1">
                                    deactive
                                    </button>
                                </a>
                                <a href="#">
                                    <button className="btn btn-danger btn-sm mt-sm-1">
                                    delete
                                    </button>
                                </a>
                                </td>
                                <td>2016-05-25</td>
                                <td>552242-21a</td>
                                <td>2016-05-25</td>
                            </tr>
                            {/* end user 1 */}
                            {/* user 2 */}
                            <tr>
                                <th scope="row">2</th>
                                <td>181242-21a</td>
                                <td>Kalpin Dermawan</td>
                                <td>kalpin@gmail.com</td>
                                <td>0521232134</td>
                                <td>
                                <div className="badge bg-danger">deactive</div>
                                </td>
                                <td>
                                <a href="#">
                                    <button className="btn btn-success btn-sm mt-sm-1">
                                    active
                                    </button>
                                </a>
                                <a href="#">
                                    <button className="btn btn-warning btn-sm mt-sm-1">
                                    deactive
                                    </button>
                                </a>
                                <a href="#">
                                    <button className="btn btn-danger btn-sm mt-sm-1">
                                    delete
                                    </button>
                                </a>
                                </td>
                                <td>2016-02-25</td>
                                <td>552242-21a</td>
                                <td>2016-05-25</td>
                            </tr>
                            {/* end user 2 */}
                            {/* user 3 */}
                            <tr>
                                <th scope="row">3</th>
                                <td>345242-21a</td>
                                <td>Robert Crawls</td>
                                <td>robert@gmail.com</td>
                                <td>0862232134</td>
                                <td>
                                <div className="badge bg-primary">active</div>
                                </td>
                                <td>
                                <a href="#">
                                    <button className="btn btn-success btn-sm mt-sm-1">
                                    active
                                    </button>
                                </a>
                                <a href="#">
                                    <button className="btn btn-warning btn-sm mt-sm-1">
                                    deactive
                                    </button>
                                </a>
                                <a href="#">
                                    <button className="btn btn-danger btn-sm mt-sm-1">
                                    delete
                                    </button>
                                </a>
                                </td>
                                <td>2016-05-25</td>
                                <td>552242-21a</td>
                                <td>2016-05-25</td>
                            </tr>
                            {/* end user 3 */}
                            {/* user 4 */}
                            <tr>
                                <th scope="row">4</th>
                                <td>942242-21a</td>
                                <td>Rudi Salam</td>
                                <td>rurudi@gmail.com</td>
                                <td>0823232134</td>
                                <td>
                                <div className="badge bg-danger">deactive</div>
                                </td>
                                <td>
                                <a href="#">
                                    <button className="btn btn-success btn-sm mt-sm-1">
                                    active
                                    </button>
                                </a>
                                <a href="#">
                                    <button className="btn btn-warning btn-sm mt-sm-1">
                                    deactive
                                    </button>
                                </a>
                                <a href="#">
                                    <button className="btn btn-danger btn-sm mt-sm-1">
                                    delete
                                    </button>
                                </a>
                                </td>
                                <td>2016-05-25</td>
                                <td>552242-21a</td>
                                <td>2016-05-25</td>
                            </tr>
                            {/* end user 4 */}
                            </tbody>
                        </DataTable>
                        {/* End Table with hoverable rows */}
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </main>

        </ListUserAdminLayout>
    ); 
}