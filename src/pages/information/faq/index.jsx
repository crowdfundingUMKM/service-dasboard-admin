import FaqLayout from '@/pages/information/faq/layout';
import Link from 'next/link';

export default function Faq() {

    return (

        <FaqLayout>
            <main id="main" className="main">
                {/* start title */}
                <div className="pagetitle">
                <h1>F.A.Q Page</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Pages</li>
                    <li className="breadcrumb-item active">F.A.Q</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                <div className="row">
                    <div className="col-lg">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Tentang Crowdfunding UMKM</h5>
                        <p>
                            Crowdfunding UMKM merupakan platform inovatif yang didedikasikan
                            untuk mendukung dan mengembangkan Usaha Mikro, Kecil, dan
                            Menengah (UMKM) di Indonesia. Kami bertujuan untuk memberikan
                            akses keuangan yang lebih mudah bagi para pelaku usaha UMKM yang
                            membutuhkan modal untuk mengembangkan bisnis mereka. Dengan
                            pendekatan crowdfunding, kami mempertemukan para pelaku usaha
                            dengan para investor yang tertarik untuk berinvestasi pada
                            proyek-proyek UMKM yang menjanjikan.
                        </p>
                        <p>
                            Dalam Crowdfunding UMKM, para pelaku usaha dapat mengajukan
                            proposal bisnis mereka yang terperinci dan meyakinkan. Proposal
                            tersebut mencakup visi, misi, model bisnis, dan rencana
                            penggunaan modal. Para investor dapat memilih proyek UMKM yang
                            sesuai dengan minat dan tujuan investasi mereka. Selain
                            memberikan kesempatan bagi UMKM untuk mendapatkan modal,
                            Crowdfunding UMKM juga memberdayakan para investor dengan
                            kesempatan untuk mendapatkan keuntungan dari keberhasilan proyek
                            UMKM yang mereka dukung. Selain itu, kami juga menyediakan
                            layanan konsultan yang ahli di bidangnya untuk memberikan
                            bimbingan dan pengawasan agar proyek-proyek UMKM dapat berjalan
                            dengan sukses dan memenuhi standar keberlanjutan yang tinggi.
                            Dengan semangat kolaborasi dan transparansi, Crowdfunding UMKM
                            berkomitmen untuk menjadi mitra terpercaya dalam pertumbuhan dan
                            kesuksesan UMKM di Indonesia, serta terus berkontribusi dalam
                            memajukan sektor UMKM dan ekonomi negara secara keseluruhan.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Tata cara kerja Admin</h5>
                        <p>
                            Sebagai Admin Crowdfunding UMKM, kami memiliki beberapa tugas
                            dan tanggung jawab dalam mengimplementasikan crowdfunding
                            sebagai platform yang efektif dan terpercaya. Berikut adalah
                            beberapa point mengenai cara kerja kami:
                        </p>
                        <ul>
                            <li>
                            Memantau dan mengelola user: Sebagai admin, tugas kami adalah
                            memantau aktivitas user, termasuk investor, pelaku usaha
                            (campaign creator), dan konsultan. Kami akan memverifikasi
                            data user, mengonfirmasi akun baru, dan mengelola akses serta
                            hak-hak pengguna untuk menjaga keamanan platform.
                            </li>
                            <li>
                            Menangani transaksi: Kami akan mengelola dan memastikan
                            kelancaran proses transaksi antara investor dan pelaku usaha.
                            Ini meliputi memfasilitasi pembayaran menggunakan sistem
                            pembayaran terintegrasi seperti Midtrans, serta memastikan
                            bahwa setiap transaksi berjalan dengan aman dan transparan.
                            </li>
                            <li>
                            Mengawasi campaign dan proposal: Sebagai admin, kami akan
                            meninjau dan mengevaluasi proposal yang diajukan oleh pelaku
                            usaha untuk memastikan keaslian dan kelayakan proyek. Kami
                            akan memverifikasi legalitas dan kesesuaian proposal dengan
                            aturan dan regulasi yang berlaku.
                            </li>
                            <li>
                            Menyediakan bimbingan: Kami akan memberikan bimbingan kepada
                            pelaku usaha dan konsultan dalam hal pelaksanaan dan
                            pengelolaan campaign. Kami akan membantu mereka memahami cara
                            kerja platform, memberikan saran untuk meningkatkan proyek,
                            dan menjawab pertanyaan terkait.
                            </li>
                            <li>
                            Menyediakan layanan pelanggan: Sebagai admin, kami akan
                            menjadi pusat komunikasi untuk pengguna. Kami siap membantu
                            dalam menyelesaikan masalah atau pertanyaan yang mungkin
                            timbul dari investor, pelaku usaha, atau konsultan.
                            </li>
                            <li>
                            Mengawasi kepatuhan dan keamanan: Kami bertanggung jawab untuk
                            memastikan platform beroperasi sesuai dengan undang-undang dan
                            regulasi yang berlaku. Kami juga akan mengawasi keamanan data
                            dan informasi pengguna agar terhindar dari risiko kebocoran
                            atau penyalahgunaan.
                            </li>
                            <li>
                            Melakukan pemantauan dan evaluasi: Sebagai admin, kami akan
                            terus memantau kinerja platform, mengumpulkan umpan balik dari
                            pengguna, dan melakukan evaluasi untuk terus meningkatkan
                            layanan dan pengalaman pengguna.
                            </li>
                            <p>
                            Dalam menjalankan tugas ini, kami berkomitmen untuk memberikan
                            pengalaman crowdfunding yang transparan, aman, dan berdaya
                            guna bagi seluruh pengguna platform Crowdfunding UMKM.
                            </p>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">
                            Disclaimer: Crowdfunding UMKM - Platform dalam Tahapan
                            Pengembangan{" "}
                        </h5>
                        <p>
                            Harap diperhatikan bahwa platform Crowdfunding UMKM yang kami
                            sajikan saat ini sedang dalam tahapan pengembangan dan hanya
                            ditujukan untuk penyelesaian kuliah skripsi. Segala fitur,
                            layanan, dan informasi yang terdapat di dalamnya belum
                            sepenuhnya beroperasi atau telah diuji secara menyeluruh. Kami
                            ingin menegaskan bahwa platform ini tidak boleh digunakan untuk
                            tujuan komersial atau kegiatan bisnis dalam skala penuh, dan
                            tidak bertanggung jawab atas akibat yang timbul dari penggunaan
                            yang salah atau penyalahgunaan informasi yang terdapat di
                            dalamnya.
                        </p>
                        <p>
                            Perlu kami sampaikan bahwa platform ini mengandalkan
                            implementasi dari 8 service dan 4 frontend yang dibangun
                            menggunakan teknologi Golang, Gin, Gorm, dan database MySQL,
                            serta memanfaatkan Next.js sebagai frontend. Meskipun kami telah
                            berusaha untuk memastikan keamanan dan akurasi informasi, namun
                            kami tidak dapat menjamin ketepatan dan kesempurnaan data yang
                            ada pada saat ini.
                        </p>
                        <p>
                            Kami sangat menghargai partisipasi Anda dalam mengeksplorasi
                            platform ini, namun harap diingat bahwa semua yang terdapat di
                            dalamnya belum memiliki lisensi untuk digunakan secara komersial
                            atau sebagaimana ditentukan oleh hukum dan regulasi yang
                            berlaku. Terima kasih atas pemahaman dan dukungan Anda dalam
                            menghadapi tahapan pengembangan ini, dan kami berharap dapat
                            terus memberikan platform yang lebih baik untuk mendukung
                            pertumbuhan UMKM di masa depan.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </main>
        </FaqLayout>

    );
}