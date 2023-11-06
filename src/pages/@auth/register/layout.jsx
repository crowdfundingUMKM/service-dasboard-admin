import Head from 'next/head'


export default function RegisterLayout({ children }) {
    return (
      <>
        <Head>
            <title>Register Akun | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }


  
  