import ListCampaignLayout from '@/pages/user-campaign/list-campaign-umkm/layout';
import Link from 'next/link';
import Image from 'next/image';

export default function ListCampaignUMKM() {
    return (
        <ListCampaignLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>List Campaign</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">User Campaign</li>
                    <li className="breadcrumb-item active">Daftar Campaign UMKM</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                <div className="col-lg">
                    <div
                    className="alert alert-info alert-dismissible fade show"
                    role="alert"
                    >
                    <h5 className="alert-heading">Tentang Daftar Campaign UMKM</h5>
                    <p>
                        Anda dapat menemukan beragam proyek UMKM yang membutuhkan donasi dan
                        dukungan dari para investor. Jika Anda tertarik untuk mendukung
                        salah satu campaign, Anda dapat mengklik tombol &quot;Donate&rdquo; untuk
                        menuju halaman detail campaign dan memberikan donasi sesuai dengan
                        keinginan Anda.
                    </p>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    />
                    </div>
                </div>
                {/* content */}
                <div className="conrainer">
                    <div className="row">
                    <div className="col-4">
                        {/* Default Card */}
                        <div className="card">
                        <Image
                            src="/assets/img/card.jpg"
                            className="card-img-top"
                            alt="..."
                            width={100}
                            height={100}
                            layout="responsive"
                        />
                        <div className="card-body">
                            <div className="pt-4">
                            <p className="mb-3">
                                14 Mar, 2020 -{" "}
                                <strong className="badge bg-primary">Active</strong>
                            </p>
                            {/*  bar loan*/}
                            <div className="progress mb-2">
                                <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                role="progressbar"
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "75%" }}
                                >
                                75%
                                </div>
                            </div>
                            <div className="row d-flex justify-content-between pb-2">
                                <div className="col">Rp.600000</div>
                            </div>
                            <h2 className="h4">
                                <a
                                className="text-black shorten-text-card"
                                href="blog-details.html"
                                >
                                Cheerful Loving Couple Bakers Drinking Coffee
                                </a>
                            </h2>
                            <p className="shorten-text-card">
                                It’s no secret that the digital industry is booming. Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit.
                                Architecto reprehenderit praesentium facere quo voluptatem
                                aliquam rerum quibusdam adipisci quis illum.
                            </p>
                            <div className="row pb-1">
                                <div className="col m-1">
                                <button className="btn btn-success w-100" type="button">
                                    <i className="bi-check-circle" />
                                    Active
                                </button>
                                </div>
                                <div className="col m-1">
                                <button className="btn btn-danger w-100" type="button">
                                    <i className="bi-x-circle" />
                                    Deactive
                                </button>
                                </div>
                            </div>
                            {/* Button for preview */}
                            <div className="col m-1">
                                <a href="list-campaign-umkm-preview.html">
                                <button className="btn btn-primary w-100" type="button">
                                    <i className="bi-info-circle" />
                                    Preview
                                </button>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* End Default Card */}
                    </div>
                    <div className="col-4">
                        {/* Default Card */}
                        <div className="card">
                        <Image
                            src="/assets/img/card.jpg"
                            className="card-img-top"
                            alt="..."
                            width={100}
                            height={100}
                            layout="responsive"
                        />
                        <div className="card-body">
                            <div className="pt-4">
                            <p className="mb-3">
                                14 Mar, 2020 -{" "}
                                <strong className="badge bg-primary">Active</strong>
                            </p>
                            {/*  bar loan*/}
                            <div className="progress mb-2">
                                <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                role="progressbar"
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "75%" }}
                                >
                                75%
                                </div>
                            </div>
                            <div className="row d-flex justify-content-between pb-2">
                                <div className="col">Rp.600000</div>
                            </div>
                            <h2 className="h4">
                                <a
                                className="text-black shorten-text-card"
                                href="blog-details.html"
                                >
                                Cheerful Loving Couple Bakers Drinking Coffee
                                </a>
                            </h2>
                            <p className="shorten-text-card">
                                It’s no secret that the digital industry is booming. From
                                exciting startups to global good qualioty for proses and
                                then all
                            </p>
                            {/* Button for active, deactive */}
                            <div className="row pb-1">
                                <div className="col m-1">
                                <button className="btn btn-success w-100" type="button">
                                    <i className="bi-check-circle" />
                                    Active
                                </button>
                                </div>
                                <div className="col m-1">
                                <button className="btn btn-danger w-100" type="button">
                                    <i className="bi-x-circle" />
                                    Deactive
                                </button>
                                </div>
                            </div>
                            {/* Button for preview */}
                            <div className="col m-1">
                                <a href="list-campaign-umkm-preview.html">
                                <button className="btn btn-primary w-100" type="button">
                                    <i className="bi-info-circle" />
                                    Preview
                                </button>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* End Default Card */}
                    </div>
                    <div className="col-4">
                        {/* Default Card */}
                        <div className="card">
                        <Image
                            src="/assets/img/card.jpg"
                            className="card-img-top"
                            alt="..."
                            width={100}
                            height={100}
                            layout="responsive"
                        />
                        <div className="card-body">
                            <div className="pt-4">
                            <p className="mb-3">
                                14 Mar, 2020 -{" "}
                                <strong className="badge bg-danger">Deactive</strong>
                            </p>
                            {/*  bar loan*/}
                            <div className="progress mb-2">
                                <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                role="progressbar"
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "75%" }}
                                >
                                75%
                                </div>
                            </div>
                            <div className="row d-flex justify-content-between pb-2">
                                <div className="col">Rp.600000</div>
                            </div>
                            <h2 className="h4">
                                <a
                                className="text-black shorten-text-card"
                                href="blog-details.html"
                                >
                                Cheerful Loving Couple Bakers Drinking Coffee
                                </a>
                            </h2>
                            <p className="shorten-text-card">
                                It’s no secret that the digital industry is booming. From
                                exciting startups to global good qualioty for proses and
                                then all
                            </p>
                            {/* Button for active, deactive */}
                            <div className="row pb-1">
                                <div className="col m-1">
                                <button className="btn btn-success w-100" type="button">
                                    <i className="bi-check-circle" />
                                    Active
                                </button>
                                </div>
                                <div className="col m-1">
                                <button className="btn btn-danger w-100" type="button">
                                    <i className="bi-x-circle" />
                                    Deactive
                                </button>
                                </div>
                            </div>
                            {/* Button for preview */}
                            <div className="col m-1">
                                <a href="list-campaign-umkm-preview.html">
                                <button className="btn btn-primary w-100" type="button">
                                    <i className="bi-info-circle" />
                                    Preview
                                </button>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* End Default Card */}
                    </div>
                    <div className="col-4">
                        {/* Default Card */}
                        <div className="card">
                        <Image
                            src="/assets/img/card.jpg"
                            className="card-img-top"
                            alt="..."
                            width={100}
                            height={100}
                            layout="responsive"
                        />
                        <div className="card-body">
                            <div className="pt-4">
                            <p className="mb-3">
                                14 Mar, 2020 -{" "}
                                <strong className="badge bg-danger">Deactive</strong>
                            </p>
                            {/*  bar loan*/}
                            <div className="progress mb-2">
                                <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                role="progressbar"
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "75%" }}
                                >
                                75%
                                </div>
                            </div>
                            <div className="row d-flex justify-content-between pb-2">
                                <div className="col">Rp.600000</div>
                            </div>
                            <h2 className="h4">
                                <a
                                className="text-black shorten-text-card"
                                href="blog-details.html"
                                >
                                Cheerful Loving Couple Bakers Drinking Coffee
                                </a>
                            </h2>
                            <p className="shorten-text-card">
                                It’s no secret that the digital industry is booming. From
                                exciting startups to global good qualioty for proses and
                                then all Lorem ipsum dolor sit amet.
                            </p>
                            <div className="row pb-1">
                                <div className="col m-1">
                                <button className="btn btn-success w-100" type="button">
                                    <i className="bi-check-circle" />
                                    Active
                                </button>
                                </div>
                                <div className="col m-1">
                                <button className="btn btn-danger w-100" type="button">
                                    <i className="bi-x-circle" />
                                    Deactive
                                </button>
                                </div>
                            </div>
                            {/* Button for preview */}
                            <div className="col m-1">
                                <a href="list-campaign-umkm-preview.html">
                                <button className="btn btn-primary w-100" type="button">
                                    <i className="bi-info-circle" />
                                    Preview
                                </button>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* End Default Card */}
                    </div>
                    <div className="col-4">
                        {/* Default Card */}
                        <div className="card">
                        <Image
                            src="/assets/img/card.jpg"
                            className="card-img-top"
                            alt="..."
                            width={100}
                            height={100}
                            layout="responsive"
                        />
                        <div className="card-body">
                            <div className="pt-4">
                            <p className="mb-3">
                                14 Mar, 2020 -{" "}
                                <strong className="badge bg-primary">Active</strong>
                            </p>
                            {/*  bar loan*/}
                            <div className="progress mb-2">
                                <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                role="progressbar"
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "75%" }}
                                >
                                75%
                                </div>
                            </div>
                            <div className="row d-flex justify-content-between pb-2">
                                <div className="col">Rp.600000</div>
                            </div>
                            <h2 className="h4">
                                <a
                                className="text-black shorten-text-card"
                                href="blog-details.html"
                                >
                                Cheerful Loving Couple Bakers Drinking Coffee
                                </a>
                            </h2>
                            <p className="shorten-text-card">
                                It’s no secret that the digital industry is booming. From
                                exciting startups to global good qualioty for proses and
                                then all
                            </p>
                            {/* Button for active, deactive */}
                            <div className="row pb-1">
                                <div className="col m-1">
                                <button className="btn btn-success w-100" type="button">
                                    <i className="bi-check-circle" />
                                    Active
                                </button>
                                </div>
                                <div className="col m-1">
                                <button className="btn btn-danger w-100" type="button">
                                    <i className="bi-x-circle" />
                                    Deactive
                                </button>
                                </div>
                            </div>
                            {/* Button for preview */}
                            <div className="col m-1">
                                <a href="list-campaign-umkm-preview.html">
                                <button className="btn btn-primary w-100" type="button">
                                    <i className="bi-info-circle" />
                                    Preview
                                </button>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* End Default Card */}
                    </div>
                    </div>
                </div>
                </section>
            </main>


        </ListCampaignLayout>
    );
}