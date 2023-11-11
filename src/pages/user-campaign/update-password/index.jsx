import UpdateUserCampaignLayout from '@/pages/user-campaign/update-password/layout';
import Link from 'next/link'
import DataTable from '@/components/utils/DataTable';

export default function UpdateUserCampaign() {

    return (
        <UpdateUserCampaignLayout>
          <main id="main" className="main">
            <div className="pagetitle">
              <h1>Update Password User Campaign</h1>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item">User Campaign</li>
                  <li className="breadcrumb-item active">
                    Update Password User Campaign
                  </li>
                </ol>
              </nav>
            </div>
            {/* End Page Title */}
            <section className="section">
              <div className="row">
                <div className="col-lg">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Update Password User Campaign</h5>
                      {/* Table with hoverable rows */}
                      <DataTable>
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Unix ID</th>
                            <th scope="col">Nama User Admin</th>
                            <th scope="col">Email</th>
                            <th scope="col">No Hp</th>
                            <th scope="col">Status Akun</th>
                            <th scope="col">Update Password</th>
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
                              <form className="row g-3 needs-validation" noValidate="">
                                <div className="col">
                                  <div className="input-group has-validation">
                                    <div className="input-group-prepend">
                                      {/* toggle must difrent ex:(1) value="LASTPASSWORD" */}
                                      <button
                                        type="button"
                                        id="showHideBtn1"
                                        onclick="togglePasswordVisibility(1)"
                                        className="btn btn-outline-secondary"
                                      >
                                        <i className="bi bi-eye-slash" />
                                      </button>
                                    </div>
                                    <input
                                      type="password"
                                      name="password"
                                      className="form-control"
                                      id="yourPassword1"
                                      defaultValue="LASTPASSWORD"
                                      required=""
                                    />
                                    <a href="#">
                                      <button
                                        className="btn btn-success btn-sm mt-sm-1 p-1"
                                        type="submit"
                                      >
                                        update
                                      </button>
                                    </a>
                                    <div className="invalid-feedback">
                                      Tolong, masukkan password Update!
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </td>
                            <td>772322-21a</td>
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
                              <form className="row g-3 needs-validation" noValidate="">
                                <div className="col">
                                  <div className="input-group has-validation">
                                    <div className="input-group-prepend">
                                      <button
                                        type="button"
                                        id="showHideBtn2"
                                        onclick="togglePasswordVisibility(2)"
                                        className="btn btn-outline-secondary"
                                      >
                                        <i className="bi bi-eye-slash" />
                                      </button>
                                    </div>
                                    <input
                                      type="password"
                                      name="password"
                                      className="form-control"
                                      id="yourPassword2"
                                      defaultValue="LASTPASSWORD"
                                      required=""
                                    />
                                    <a href="#">
                                      <button
                                        className="btn btn-success btn-sm mt-sm-1 p-1"
                                        type="submit"
                                      >
                                        update
                                      </button>
                                    </a>
                                    <div className="invalid-feedback">
                                      Tolong, masukkan password Update!
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </td>
                            <td>772322-21a</td>
                            <td>2017-05-25</td>
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
                              <form className="row g-3 needs-validation" noValidate="">
                                <div className="col">
                                  <div className="input-group has-validation">
                                    <div className="input-group-prepend">
                                      <button
                                        type="button"
                                        id="showHideBtn3"
                                        onclick="togglePasswordVisibility(3)"
                                        className="btn btn-outline-secondary"
                                      >
                                        <i className="bi bi-eye-slash" />
                                      </button>
                                    </div>
                                    <input
                                      type="password"
                                      name="password"
                                      className="form-control"
                                      id="yourPassword3"
                                      defaultValue="LASTPASSWORD"
                                      required=""
                                    />
                                    <a href="#">
                                      <button
                                        className="btn btn-success btn-sm mt-sm-1 p-1"
                                        type="submit"
                                      >
                                        update
                                      </button>
                                    </a>
                                    <div className="invalid-feedback">
                                      Tolong, masukkan password Update!
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </td>
                            <td>772322-21a</td>
                            <td>2016-05-25</td>
                            {/* end user 3 */}
                            {/* user 4 */}
                          </tr>
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
                              <form className="row g-3 needs-validation" noValidate="">
                                <div className="col">
                                  <div className="input-group has-validation">
                                    <div className="input-group-prepend">
                                      <button
                                        type="button"
                                        id="showHideBtn4"
                                        onclick="togglePasswordVisibility(4)"
                                        className="btn btn-outline-secondary"
                                      >
                                        <i className="bi bi-eye-slash" />
                                      </button>
                                    </div>
                                    <input
                                      type="password"
                                      name="password"
                                      className="form-control"
                                      id="yourPassword4"
                                      defaultValue="LASTPASSWORD"
                                      required=""
                                    />
                                    <a href="#">
                                      <button
                                        className="btn btn-success btn-sm mt-sm-1 p-1"
                                        type="submit"
                                      >
                                        update
                                      </button>
                                    </a>
                                    <div className="invalid-feedback">
                                      Tolong, masukkan password Update!
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </td>
                            <td>772322-21a</td>
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

        </UpdateUserCampaignLayout>
    )
}