import ProfileLayout from '@/pages/information/profile/layout';
import Link from 'next/link'
import Image from 'next/image'
export default function Profile() {

    return (

        <ProfileLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Profile</h1>
                    <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                        </li>
                        <li className="breadcrumb-item">Pages</li>
                        <li className="breadcrumb-item active">Profile</li>
                    </ol>
                    </nav>
                </div>
                {/* End Page Title */}
                <section className="section profile">
                    <div className="row">
                    <div className="col-xl-4">
                        <div className="card">
                        <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                            <Image
                            src="/assets/img/profile-img.jpg"
                            alt="Profile"
                            className="rounded-circle"
                            width={100}
                            height={100}
                            />
                            <h2>Ahmad Zaky</h2>
                            <h3>Admin Crowdfunding</h3>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="card">
                        <div className="card-body pt-3">
                            {/* Bordered Tabs */}
                            <ul className="nav nav-tabs nav-tabs-bordered">
                            <li className="nav-item">
                                <button
                                className="nav-link active"
                                data-bs-toggle="tab"
                                data-bs-target="#profile-overview"
                                >
                                Overview
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#profile-edit"
                                >
                                Edit Profile
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#profile-change-password"
                                >
                                Change Password
                                </button>
                            </li>
                            </ul>
                            <div className="tab-content pt-2">
                            <div
                                className="tab-pane fade show active profile-overview"
                                id="profile-overview"
                            >
                                {/* Profile Details */}
                                <h5 className="card-title">Profile Details</h5>
                                <div className="row">
                                <div className="col-lg-3 col-md-4 label">Nama Anda</div>
                                <div className="col-lg-9 col-md-8">Ahmad Zaky</div>
                                </div>
                                <div className="row">
                                <div className="col-lg-3 col-md-4 label">Nomor Hp</div>
                                <div className="col-lg-9 col-md-8">(436) 486-3538 x29071</div>
                                </div>
                                <div className="row">
                                <div className="col-lg-3 col-md-4 label">Email</div>
                                <div className="col-lg-9 col-md-8">ahmadzaky@example.com</div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade profile-edit pt-3"
                                id="profile-edit"
                            >
                                {/* Profile Edit Form */}
                                <form>
                                <div className="row mb-3">
                                    <label
                                    htmlFor="profileImage"
                                    className="col-md-4 col-lg-3 col-form-label"
                                    >
                                    Profile Image
                                    </label>
                                    <div className="col-md-8 col-lg-9">
                                    <Image src="/assets/img/profile-img.jpg" alt="Profile" width={100} height={100}/>
                                    <div className="pt-2">
                                        <a
                                        href="#"
                                        className="btn btn-primary btn-sm"
                                        title="Upload new profile image"
                                        >
                                        <i className="bi bi-upload" />
                                        </a>
                                        <a
                                        href="#"
                                        className="btn btn-danger btn-sm"
                                        title="Remove my profile image"
                                        >
                                        <i className="bi bi-trash" />
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                {/* Edit Profile */}
                                <div className="row mb-3">
                                    <label
                                    htmlFor="fullName"
                                    className="col-md-4 col-lg-3 col-form-label"
                                    >
                                    Nama Anda
                                    </label>
                                    <div className="col-md-8 col-lg-9">
                                    <input
                                        name="fullName"
                                        type="text"
                                        className="form-control"
                                        id="fullName"
                                        defaultValue="Kevin Anderson"
                                    />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label
                                    htmlFor="Phone"
                                    className="col-md-4 col-lg-3 col-form-label"
                                    >
                                    Nomor Hp
                                    </label>
                                    <div className="col-md-8 col-lg-9">
                                    <input
                                        name="phone"
                                        type="text"
                                        className="form-control"
                                        id="Phone"
                                        defaultValue="(436) 486-3538 x29071"
                                    />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label
                                    htmlFor="Email"
                                    className="col-md-4 col-lg-3 col-form-label"
                                    >
                                    Email
                                    </label>
                                    <div className="col-md-8 col-lg-9">
                                    <input
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        id="Email"
                                        defaultValue="youremaiuserinvestor@example.com"
                                        disabled=""
                                    />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">
                                    Save Changes
                                    </button>
                                </div>
                                </form>
                                {/* End Profile Edit Form */}
                            </div>
                            <div className="tab-pane fade pt-3" id="profile-change-password">
                                {/* Change Password Form */}
                                <form>
                                <div className="row mb-3">
                                    <label
                                    htmlFor="currentPassword"
                                    className="col-md-4 col-lg-3 col-form-label"
                                    >
                                    Current Password
                                    </label>
                                    <div className="col-md-8 col-lg-9">
                                    <input
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        id="currentPassword"
                                    />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label
                                    htmlFor="newPassword"
                                    className="col-md-4 col-lg-3 col-form-label"
                                    >
                                    New Password
                                    </label>
                                    <div className="col-md-8 col-lg-9">
                                    <input
                                        name="newpassword"
                                        type="password"
                                        className="form-control"
                                        id="newPassword"
                                    />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label
                                    htmlFor="renewPassword"
                                    className="col-md-4 col-lg-3 col-form-label"
                                    >
                                    Re-enter New Password
                                    </label>
                                    <div className="col-md-8 col-lg-9">
                                    <input
                                        name="renewpassword"
                                        type="password"
                                        className="form-control"
                                        id="renewPassword"
                                    />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">
                                    Change Password
                                    </button>
                                </div>
                                </form>
                                {/* End Change Password Form */}
                            </div>
                            </div>
                            {/* End Bordered Tabs */}
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </main>

        </ProfileLayout>
    );
}