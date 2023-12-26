import ListUserCampaignLayout from '@/pages/user-campaign/list-user-campaign/layout';
import Link from 'next/link';
import Image from 'next/image';
import DataTable from '@/components/utils/DataTable';

export default function ListUserCampaign() {
    return (
        <ListUserCampaignLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>Daftar User Campaign</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                         <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">User Investor</li>
                    <li className="breadcrumb-item active">Daftar User Campaign</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                <div className="row">
                    <div className="col-lg">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Daftar User Campaign</h5>
                        {/* Table with hoverable rows */}
                        <DataTable>
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Unix ID</th>
                                <th scope="col">Nama User Investor</th>
                                <th scope="col">Email</th>
                                <th scope="col">No Hp</th>
                                <th scope="col">Status Admin</th>
                                <th scope="col">Update Status Admin</th>
                                <th scope="col">Create Date</th>
                                <th scope="col">UpdateIdAdmin</th>
                                {/* more */}
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* user 1 */}
                            <tr>
                                <th scope="row">1</th>
                                <td>382342-21a</td>
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
                                <td>
                                <button className="btn btn-primary">More</button>
                                </td>
                                {/* end user 1 */}
                                {/* user 2 */}
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>681242-21a</td>
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
                                <td>
                                <button className="btn btn-primary">More</button>
                                </td>
                            </tr>
                            {/* end user 2 */}
                            {/* user 3 */}
                            <tr>
                                <th scope="row">3</th>
                                <td>745242-21a</td>
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
                                <td>
                                <button className="btn btn-primary">More</button>
                                </td>
                            </tr>
                            {/* end user 3 */}
                            {/* user 4 */}
                            <tr>
                                <th scope="row">4</th>
                                <td>442242-21a</td>
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
                                <td>
                                <button className="btn btn-primary">More</button>
                                </td>
                            </tr>
                            {/* end user 4 */}
                            </tbody>
                        </DataTable>
                        {/* End Table with hoverable rows */}
                        </div>
                    </div>
                    </div>
                </div>
                {/* Infor Moe when user Click from table */}
                <div className="col-lg">
                    {/* Bio User */}
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Profile User</h5>
                        <div className="row">
                        <div className="col-lg-1">
                            {/* Gambar Profil */}
                            <Image 
                            src="/assets/img/profile-img.jpg"
                            alt="User Profile Image"
                            className="img-fluid rounded-2 p-0"
                            width={100}
                            height={100}
                            layout="responsive"
                            />
                        </div>
                        <div className="col-lg">
                            {/* Informasi Pengguna */}
                            <h4>Profile User Campaign</h4>
                            <p>
                            <strong>Nama:</strong> John Doe
                            </p>
                            {/* nomor hp */}
                            <p>
                            <strong>Nomor HP:</strong> 0823232134
                            </p>
                            <p>
                            <strong>Negara:</strong> USA
                            </p>
                            <p>
                            <strong>Alamat:</strong> Jl. Groft Street No. 23
                            </p>
                            <p>
                            <strong>Bio User:</strong> Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Tenetur ratione, quidem dolores
                            impedit ea repellat quisquam dolorem est? Neque illum facilis
                            voluptatem ipsam enim explicabo minima quod et, nostrum
                            impedit.
                            </p>
                            {/* make button instagaram and facebook use bi-instagram and bi-facebook */}
                            <div className="bisnis">
                                <a href="#" className="btn btn-primary m-1">
                                <i className="bi bi-instagram"/> Instagram
                                </a>
                                <a href="#" className="btn btn-primary m-1">
                                <i className="bi bi-facebook"/> Facebook
                                </a>
                                {/* Button for link campign */}
                                <a href="#" className="btn btn-primary m-1">
                                <i className="bi bi-shop"/> Link Campaign
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </main>

        </ListUserCampaignLayout>
    )
}