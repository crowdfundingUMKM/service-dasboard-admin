import NotifFromUserLayout from '@/pages/notify/notify-from-user/layout';
import Link from 'next/link'

export default function NotifFromUser() {

    return (
        <NotifFromUserLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>Notif dari User</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Pages</li>
                    <li className="breadcrumb-item active">Notif dari User</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                <div className="row">
                    <div className="col-lg">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">
                            Judul Informasi{" "}
                            <strong className="badge bg-warning">Warning</strong>
                        </h5>
                        <p>
                            This is an examle page with no contrnt. You can use it as a
                            starter for your custom pages.
                        </p>
                        <br />
                        <div className="user-admin ">
                            <p>Name user - 12 Mei 2023</p>
                        </div>
                        {/* Move to User data */}
                        <a href="#">
                            <button className="btn btn-primary m-1">Check User</button>
                        </a>
                        {/* dokument lampiran */}
                        <a href="#">
                            <button className="btn btn-secondary m-1">Link</button>
                        </a>
                        {/* Button status */}
                        <a href="#">
                            <button className="btn btn-success m-1">Done</button>
                        </a>
                        <a href="#">
                            <button className="btn btn-danger m-1">Delete</button>
                        </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">
                            Judul Informasi{" "}
                            <strong className="badge bg-danger">Fatal</strong>
                        </h5>
                        <p>
                            This is an examle page with no contrnt. You can use it as a
                            starter for your custom pages.
                        </p>
                        <br />
                        <div className="user-admin">
                            <p>Julian Androw - 12 Mei 2023</p>
                        </div>
                        <a href="#">
                            <button className="btn btn-primary m-1">Check User</button>
                        </a>
                        <a href="#">
                            <button className="btn btn-secondary m-1">Link</button>
                        </a>
                        {/* Button status */}
                        <a href="#">
                            <button className="btn btn-success m-1">Done</button>
                        </a>
                        <a href="#">
                            <button className="btn btn-danger m-1">Delete</button>
                        </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">
                            Judul Informasi <strong className="badge bg-info">Info</strong>
                        </h5>
                        <p>
                            This is an examle page with no contrnt. You can use it as a
                            starter for your custom pages.
                        </p>
                        <br />
                        <div className="user-admin">
                            <p>Julian Androw - 12 Mei 2023</p>
                        </div>
                        <a href="#">
                            <button className="btn btn-primary m-1">Check User</button>
                        </a>
                        <a href="#">
                            <button className="btn btn-secondary m-1">Link</button>
                        </a>
                        {/* Button status */}
                        <a href="#">
                            <button className="btn btn-success m-1">Done</button>
                        </a>
                        <a href="#">
                            <button className="btn btn-danger m-1">Delete</button>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </main>

        </NotifFromUserLayout>
    )
}