import Head from 'next/head'

export default function UpdatePassAdminLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar User Admin | Admin Mode</title>
            <meta name="description" content="Update user yang ada sebagai Admin, Khusus Admin Master."/>

        </Head>
        {children}
      </>
    );
  }
  