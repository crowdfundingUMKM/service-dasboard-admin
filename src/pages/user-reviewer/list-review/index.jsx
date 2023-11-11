import ListReviewLayout from '@/pages/user-reviewer/list-review/layout';
import Link from 'next/link';
import Image from 'next/image';

export default function ListReview() {

    return (
        <ListReviewLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>Daftar Review Konsultan</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Review Konsultan</li>
                    <li className="breadcrumb-item active">Daftar Review Konsultan</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                <div className="col-lg">
                    <div className="alert alert-info alert-dismissible fade show" role="alert" >
                    <h5 className="alert-heading">Tentang Daftar Review UMKM</h5>
                    <p>
                        Anda akan menemukan daftar UMKM yang telah direview oleh konsultan.
                        Anda memiliki kontrol penuh atas ulasan yang Adiberikan konsultan,
                        termasuk kemampuan untuk melakukan penghapusan. Halaman ini
                        memberikan akses cepat ke semua UMKM yang telah ditinjau oleh User
                        Konsultan. Langkah ini bertujuan untuk memonitoring review yang
                        telah diberikan oleh user konsultan.
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
                    <div className="col">
                    {/* Card Campaign */}
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
                                <a className="text-black shorten-text-card" href="blog-details.html">
                                    Cheerful Loving Couple Bakers Drinking Coffee
                                </a>
                                </h2>
                                <p className="shorten-text-card">
                                It’s no secret that the digital industry is booming. Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit.
                                Architecto reprehenderit praesentium facere quo voluptatem
                                aliquam rerum quibusdam adipisci quis illum.
                                </p>
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
                        {/* Campaign Review */}
                        <div className="col-8">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">
                                Nama Campaign: Lorem ipsum dolor, sit amet consectetur
                                adipisicing Lorem ipsum dolor sit amet Lorem, ipsum dolor
                                sit amet consectetur adipisicing.
                            </h5>
                            <div className="Review1">
                                <h4>Nama Reviewer 1</h4>
                                <p>
                                Sunt est soluta temporibus accusantium neque nam maiores
                                cumque temporibus. Tempora libero non est unde veniam est
                                qui dolor. Ut sunt iure rerum quae quisquam autem eveniet
                                perspiciatis odit. Fuga sequi sed ea saepe at unde.
                                </p>
                                <div id="rating_review">
                                <p>Review UMKM: ⭐⭐⭐⭐4/5 </p>
                                </div>
                                {/* Button Review */}
                                <div className="row m-1">
                                <div className="col">
                                    <a href="#">
                                    <button className="btn btn-primary w-100" type="button">
                                        <i className="bi-person-fill-exclamation" />
                                        Profile Review
                                    </button>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="#">
                                    <button className="btn btn-danger w-100"
                                        type="button" >
                                        <i className="bi-x-circle" />
                                        Hapus Review
                                    </button>
                                    </a>
                                </div>
                                </div>
                            </div>
                            {/* End Review 1*/}
                            <hr />
                            <div className="Review2">
                                <h4>Nama Reviewer 2</h4>
                                <p>
                                Sunt est soluta temporibus accusantium neque nam maiores
                                cumque temporibus. Tempora libero non est unde veniam est
                                qui dolor. Ut sunt iure rerum quae quisquam autem eveniet
                                perspiciatis odit. Fuga sequi sed ea saepe at unde.
                                </p>
                                <div id="rating_review">
                                <p>Review UMKM: ⭐⭐⭐⭐4/5 </p>
                                </div>
                                {/* Button Review */}
                                <div className="row m-1">
                                <div className="col">
                                    <a href="#">
                                        <button  className="btn btn-primary w-100" type="button" >
                                            <i className="bi-person-fill-exclamation" />
                                            Profile Review
                                        </button>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="#">
                                    <button className="btn btn-danger w-100"
                                        type="button">
                                        <i className="bi-x-circle" />
                                        Hapus Review
                                    </button>
                                    </a>
                                </div>
                                </div>
                            </div>
                            {/* End Review 2 */}
                            <hr />
                            {/* Review 3 */}
                            <div className="Review3">
                                <h4>Nama Reviewer 3</h4>
                                <p>
                                Sunt est soluta temporibus accusantium neque nam maiores
                                cumque temporibus. Tempora libero non est unde veniam est
                                qui dolor. Ut sunt iure rerum quae quisquam autem eveniet
                                perspiciatis odit. Fuga sequi sed ea saepe at unde.
                                </p>
                                <div id="rating_review">
                                <p>Review UMKM: ⭐⭐⭐⭐4/5 </p>
                                </div>
                                {/* Button Review */}
                                <div className="row m-1">
                                <div className="col">
                                    <a href="#">
                                    <button className="btn btn-primary w-100" type="button" >
                                        <i className="bi-person-fill-exclamation" />
                                        Profile Review
                                    </button>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="#">
                                    <button className="btn btn-danger w-100"type="button" >
                                        <i className="bi-x-circle" />
                                        Hapus Review
                                    </button>
                                    </a>
                                </div>
                                </div>
                            </div>
                            {/* End Review 3 */}
                            </div>
                        </div>
                        </div>
                    </div>
                    <hr />
                    {/* End Card Campaign */}
                    {/* Card Campaign */}
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
                                <a className="text-black shorten-text-card" href="blog-details.html" >
                                    Cheerful Loving Couple Bakers Drinking Coffee
                                </a>
                                </h2>
                                <p className="shorten-text-card">
                                It’s no secret that the digital industry is booming. Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit.
                                Architecto reprehenderit praesentium facere quo voluptatem
                                aliquam rerum quibusdam adipisci quis illum.
                                </p>
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
                        {/* Campaign Review */}
                        <div className="col-8">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">
                                Name Campaign: Lorem ipsum dolor, sit amet consectetur
                                adipisicing.
                            </h5>
                            <div className="Review1">
                                <h4>Nama Reviewer 1</h4>
                                <p>
                                Sunt est soluta temporibus accusantium neque nam maiores
                                cumque temporibus. Tempora libero non est unde veniam est
                                qui dolor. Ut sunt iure rerum quae quisquam autem eveniet
                                perspiciatis odit. Fuga sequi sed ea saepe at unde.
                                </p>
                                <div id="rating_review">
                                <p>Review UMKM: ⭐⭐⭐⭐4/5 </p>
                                </div>
                                {/* Button Review */}
                                <div className="row m-1">
                                <div className="col">
                                    <a href="#">
                                    <button className="btn btn-primary w-100" type="button">
                                        <i className="bi-person-fill-exclamation" />
                                        Profile Review
                                    </button>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="#">
                                    <button className="btn btn-danger w-100" type="button">
                                        <i className="bi-x-circle" />
                                        Hapus Review
                                    </button>
                                    </a>
                                </div>
                                </div>
                            </div>
                            {/* End Review 1*/}
                            <hr />
                            <div className="Review2">
                                <h4>Nama Reviewer 2</h4>
                                <p>
                                Sunt est soluta temporibus accusantium neque nam maiores
                                cumque temporibus. Tempora libero non est unde veniam est
                                qui dolor. Ut sunt iure rerum quae quisquam autem eveniet
                                perspiciatis odit. Fuga sequi sed ea saepe at unde.
                                </p>
                                <div id="rating_review">
                                <p>Review UMKM: ⭐⭐⭐⭐4/5 </p>
                                </div>
                                {/* Button Review */}
                                <div className="row m-1">
                                <div className="col">
                                    <a href="#">
                                    <button className="btn btn-primary w-100"type="button" >
                                        <i className="bi-person-fill-exclamation" />
                                        Profile Review
                                    </button>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="#">
                                    <button className="btn btn-danger w-100" type="button">
                                        <i className="bi-x-circle" />
                                        Hapus Review
                                    </button>
                                    </a>
                                </div>
                                </div>
                            </div>
                            {/* End Review 2 */}
                            <hr />
                            {/* Review 3 */}
                            <div className="Review3">
                                <h4>Nama Reviewer 3</h4>
                                <p>
                                Sunt est soluta temporibus accusantium neque nam maiores
                                cumque temporibus. Tempora libero non est unde veniam est
                                qui dolor. Ut sunt iure rerum quae quisquam autem eveniet
                                perspiciatis odit. Fuga sequi sed ea saepe at unde.
                                </p>
                                <div id="rating_review">
                                <p>Review UMKM: ⭐⭐⭐⭐4/5 </p>
                                </div>
                                {/* Button Review */}
                                <div className="row m-1">
                                <div className="col">
                                    <a href="#">
                                    <button className="btn btn-primary w-100" type="button" >
                                        <i className="bi-person-fill-exclamation" />
                                        Profile Review
                                    </button>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="#">
                                    <button className="btn btn-danger w-100" type="button" >
                                        <i className="bi-x-circle" />
                                        Hapus Review
                                    </button>
                                    </a>
                                </div>
                                </div>
                            </div>
                            {/* End Review 3 */}
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* End Card Campaign */}
                    </div>
                </div>
                </section>
            </main>

        </ListReviewLayout>
    )
}