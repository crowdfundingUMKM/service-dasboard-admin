import Head from 'next/head'


export default function RegisterLayout({ children }) {
    return (
      <>
        <Head>
            <title>Register Akun | Admin Mode</title>
            <meta name="description" content="Silahkan Register sebagai Admin Crowdfunding UMKM"/>
        </Head>
        {children}
      </>
    );
  }


  
  