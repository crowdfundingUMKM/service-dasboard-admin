// "use client"; 
import Link from "next/link";
import Image from "next/image";


export default function ProfileDropdown() {

    return (
        <li className="nav-item dropdown pe-3">
            <Link href="#" data-bs-toggle="dropdown" data-bs-target="#profileDropdown">
                <div className="nav-link nav-profile d-flex align-items-center pe-0 " >
                    <div className="rounded-circle">
                        <Image src="/assets/img/profile-img.jpg" alt="Profile" width={36} height={36} className="rounded-circle"/>
                    </div>
                    <span className="d-none d-md-block dropdown-toggle ps-2">Ahmad Zaky</span>
                </div>
            </Link>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"  id="#profileDropdown">
                <li className="dropdown-header"> 
                    <h6>Ahmad Zaky</h6>
                    <span>Crowdfunding Admin</span>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                    <Link href="/information/profile">
                        <div className="dropdown-item d-flex align-items-center">
                            <i className="bi bi-person" />
                            <span>My Profile</span>
                        </div>
                    </Link>
                </li>
                <li>
                <hr className="dropdown-divider" />
                </li>
                <li>
                <Link href="/inforamtion/faq" >
                <div className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-question-circle " />
                    <span>Need Help?</span>
                    </div> 
                </Link>
                </li>
                <li>
                <hr className="dropdown-divider" />
                </li>
                <li>
                <Link href="#">
                    <div className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-box-arrow-right" />
                    <span>Sign Out</span>
                    </div>
                </Link>
                </li>

            </ul>
        </li>
    );
}
