"use client";
import Link from "next/link";
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

//   use for preview campaign and active
  const { asPath } = useRouter();
  // Cek apakah path saat ini diawali dengan '/user-campaign/preview-campaign'
  const isPreviewActive = asPath.startsWith('/user-campaign/preview-campaign');

  
  
    // useEffect(() => {
    //     import('bootstrap/dist/js/bootstrap.bundle.min.js');
    //   }, []);

    //   if (typeof window !== "undefined") {
    //     require('bootstrap/dist/js/bootstrap.bundle.min.js');
    //   }


    return (
    <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
            <Link href="/dashboard">
                <div className={`nav-link  ${pathname === '/dashboard' ? '' : 'collapsed'}`}>
                    <i className="bi bi-grid" />
                    <span>Dashboard</span>
                </div>
            </Link>
        </li>
        {/* End Dashboard Nav */}
        {/* TIHIS my sidebar UP*/}
        {/* Service Status */}
        <li className="nav-item side-service">
            <a href="" className="nav-link collapsed" data-bs-target="#service-status" data-bs-toggle="collapse" >
                <i className="bi bi-lock-fill" />
                <span>Service Status</span>
                <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="service-status" className="nav-content collapse " data-bs-parent="#sidebar-nav" >
            <li>
                <Link href="/service-status/list-service" className={`${pathname === '/service-status/list-service' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Daftar Service Status </span>
                </Link>
            </li>
            </ul>
        </li>
        {/* End Service Status*/}
        {/* User Admin  */}
        <li className="nav-item side-service">
            <a href="#" className="nav-link collapsed" data-bs-target="#side-user-admin" data-bs-toggle="collapse" >
                <i className="bi bi-person-gear" />
                <span>User Admin</span>
                <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="side-user-admin" className="nav-content collapse " data-bs-parent="#sidebar-nav" >
            <li>
                <Link href="/user-admin/list-user-admin" className={`${pathname === '/user-admin/list-user-admin' ? 'active' : ''}`}>
                    <i className="bi bi-circle" />
                    <span>Daftar User Admin</span>
                </Link>
            </li>
            <li>
                <Link href="/user-admin/update-password" className={`${pathname === '/user-admin/update-password' ? 'active' : ''}`}>
                    <i className="bi bi-circle" />
                    <span>Update Password User Admin</span>
                </Link>
            </li>
            </ul>
        </li>
        {/* End User Admin */}
        {/* User investor */}
        <li className="nav-item side-service">
            <a className="nav-link collapsed" data-bs-target="#side-user-investor" data-bs-toggle="collapse" href="#">
                <i className="bi bi-person-fill" />
                    <span>User Investor</span>
                <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="side-user-investor" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
                <Link href="/user-investor/list-user-investor" className={`${pathname === '/user-investor/list-user-investor' ? 'active' : ''}`}>
                    <i className="bi bi-circle" />
                    <span>Daftar User Investor</span>
                </Link>
            </li>
            <li>
                <Link href="/user-investor/update-password" className={`${pathname === '/user-investor/update-password' ? 'active' : ''}`}>
                    <i className="bi bi-circle" />
                <span>Update Password User Investor</span>
                </Link>
            </li>
            </ul>
        </li>
        {/* End User investor*/}
        {/* User Campaign */}
        <li className="nav-item side-service">
            <a href="#" className="nav-link collapsed" data-bs-target="#side-user-campaign" data-bs-toggle="collapse">
                <i className="bi bi-people-fill" />
                <span>User Campaign</span>
                <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="side-user-campaign" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
                <Link href="/user-campaign/list-user-campaign" className={`${pathname === '/user-campaign/list-user-campaign' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Daftar User Campaign</span>
                </Link>
            </li>
            <li>
                <Link href="/user-campaign/update-password" className={`${pathname === '/user-campaign/update-password' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Update Pass User Campaign</span>
                </Link>
            </li>
            <li>
                <Link href="/user-campaign/list-campaign-umkm" className={`${pathname === '/user-campaign/list-campaign-umkm' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Daftar Campaign UMKM</span>
                </Link>
            </li>
            <li>
                <Link href="/user-campaign/preview-campaign" className={isPreviewActive ? 'active' : ''}>
                <i className="bi bi-circle" />
                <span>Preview Campaign</span>
                </Link>
            </li>
            <li>
                <Link href="/user-campaign/fund-donation" className={`${pathname === '/user-campaign/fund-donation' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Pengajuan Pencairan Dana</span>
                </Link>
            </li>
            </ul>
        </li>
        {/* End User Campaign*/}
        {/* User Reviewer */}
        <li className="nav-item side-service">
            <a href="#" className="nav-link collapsed" data-bs-target="#side-user-reviewer" data-bs-toggle="collapse">
                <i className="bi bi-person-lines-fill" />
                <span>User Konsultan</span>
                <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="side-user-reviewer" className="nav-content collapse "data-bs-parent="#sidebar-nav"
            >
            <li>
                <Link href="/user-reviewer/list-user-reviewer" className={`${pathname === '/user-reviewer/list-user-reviewer' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Daftar User Konsultan</span>
                </Link>
            </li>
            <li>
                <Link href="/user-reviewer/update-password" className={`${pathname === '/user-reviewer/update-password' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Update User Konsultan</span>
                </Link>
            </li>
            <li>
                <Link href="/user-reviewer/list-review" className={`${pathname === '/user-reviewer/list-review' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Daftar Review Konsultan</span>
                </Link>
            </li>
            </ul>
        </li>
        {/* End User Campaign*/}
        {/* Service Transaction*/}
        <li className="nav-item side-service">
            <a href="#" className="nav-link collapsed" data-bs-target="#side-service-transaction" data-bs-toggle="collapse">
                <i className="bi bi-cash" />
                <span>Service Transaction</span>
                <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="side-service-transaction" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
                <Link href="/service-transaction/investor" className={`${pathname === '/service-transaction/investor' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Semua Transaksi Investor</span>
                </Link>
            </li>
            </ul>
        </li>
        {/* End Service Transaction*/}
        {/* Notif Admin */}
        <li className="nav-item side-service">
            <a href="#" className="nav-link collapsed" data-bs-target="#side-notif-admin" data-bs-toggle="collapse" >
                <i className="bi bi-app-indicator" />
                <span>Notifikasi Admin</span>
                <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="side-notif-admin" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
                <Link href="/notify/notif-admin" className={`${pathname === '/notify/notif-admin' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Notif Admin</span>
                </Link>
            </li>
            <li>
                <Link href="/notify/notif-from-user" className={`${pathname === '/notify/notif-from-user' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Notif dari User</span>
                </Link>
            </li>
            <li>
                <Link href="/notify/create-notify" className={`${pathname === '/notify/create-notify' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Buat Notifikasi</span>
                </Link>
            </li>
            </ul>
        </li>
        {/* End Notif Admin*/}
        {/* End this my sidabar UP */}
        <li className="nav-heading">Pages</li>
        <li className="nav-item">
            <div className={`nav-link  ${pathname === '/information/profile' ? '' : 'collapsed'}`}>
            <i className="bi bi-person" />
            <span>Profile</span>
            </div>
        </li>
        {/* End Profile Page Nav */}
        <li className="nav-item">
            <div className={`nav-link  ${pathname === '/information/faq' ? '' : 'collapsed'}`}>
            <i className="bi bi-question-circle" />
            <span>F.A.Q</span>
            </div>
        </li>
        {/* End F.A.Q Page Nav */}
        </ul>
    </aside>

    )
}