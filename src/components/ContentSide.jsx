// Path: src/components/ContentSide.js 
import Image from 'next/image';
import Link from 'next/link';


export default function ContentSide (){

    return (
        <div className="col-lg-4">
            {/* Recent Activity */}
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                Aktifitas Admin <span>| Awal Mula</span>
                </h5>
                <div className="activity">
                <div className="activity-item d-flex">
                    <div className="activite-label">Langkah 1</div>
                    <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                    <div className="activity-content">
                    Perbarui profil dengan melengkapi data yang diperlukan.
                    </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                    <div className="activite-label">Langkah 2</div>
                    <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
                    <div className="activity-content">
                    Pantau status layanan dan service di platform Crowdfunding UMKM.
                    </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                    <div className="activite-label">Langkah 3</div>
                    <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                    <div className="activity-content">
                    Kelola password untuk semua jenis pengguna terdaftar.
                    </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                    <div className="activite-label">Langkah 4</div>
                    <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
                    <div className="activity-content">
                    Setujui campaign yang diajukan oleh user campaign.
                    </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                    <div className="activite-label">Langkah 5</div>
                    <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
                    <div className="activity-content">Nonaktifkan akun pengguna.</div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                    <div className="activite-label">Langkah 6</div>
                    <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                    <div className="activity-content">
                    Kirim notifikasi kesalahan atau permasalahan dalam sistem.
                    </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                    <div className="activite-label">Langkah 7</div>
                    <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                    <div className="activity-content">
                    Awasi aktivitas dan transaksi pengguna.
                    </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                    <div className="activite-label">Langkah 8</div>
                    <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                    <div className="activity-content">
                    Kelola laporan, termasuk laporan bug.
                    </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                    <div className="activite-label">Langkah 9</div>
                    <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                    <div className="activity-content">
                    Tinjau dan verifikasi campaign yang diajukan oleh user campaign.
                    </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                    <div className="activite-label">Langkah10</div>
                    <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                    <div className="activity-content">
                    Kirim pemberitahuan perkembangan platform.
                    </div>
                </div>
                {/* End activity item*/}
                </div>
            </div>
            </div>
            {/* End Recent Activity */}
            {/* News & Updates Traffic */}
            <div className="card">
            <div className="card-body pb-0">
                <h5 className="card-title">
                Campaign UMKM &amp; Update <span>| Campaign</span>
                </h5>
                <div className="news">
                <div className="post-item clearfix">
                    <Image src="/assets/img/news-1.jpg" alt="" width={80} height={60} />
                    <h4>
                    <Link href="#">Nihil blanditiis at in nihil autem</Link>
                    </h4>
                    <p>
                    Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed
                    ut harum...
                    </p>
                </div>
                <div className="post-item clearfix">
                    <Image src="/assets/img/news-2.jpg" alt="" width={80} height={60} />
                    <h4>
                    <Link href="#">Quidem autem et impedit</Link>
                    </h4>
                    <p>
                    Illo nemo neque maiores vitae officiis cum eum turos elan dries
                    werona nande...
                    </p>
                </div>
                <div className="post-item clearfix">
                    <Image src="/assets/img/news-3.jpg" alt="" width={80} height={60}/>
                    <h4>
                    <Link href="#">Id quia et et ut maxime similique occaecati ut</Link>
                    </h4>
                    <p>
                    Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam
                    et totam...
                    </p>
                </div>
                <div className="post-item clearfix">
                    <Image src="/assets/img/news-4.jpg" alt="" width={80} height={60}/>
                    <h4>
                    <Link href="#">Laborum corporis quo dara net para</Link>
                    </h4>
                    <p>
                    Qui enim quia optio. Eligendi aut asperiores enim repellendusvel
                    rerum cuder...
                    </p>
                </div>
                <div className="post-item clearfix">
                    <Image src="/assets/img/news-5.jpg" alt="" width={80} height={60}/>
                    <h4>
                    <Link href="#">Et dolores corrupti quae illo quod dolor</Link>
                    </h4>
                    <p>
                    Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae
                    dignissimos eius...
                    </p>
                </div>
                </div>
                {/* End sidebar recent posts*/}
            </div>
            </div>
            {/* End News & Updates */}
        </div>

    )
}