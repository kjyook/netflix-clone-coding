import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

const getServerSideProps = async (context: NextPageContext) => {
    const session = await getSession(context);
  
    if (!session) {
      return {
        redirect: {
          destination: "/auth",
          permanent: false,
        },
      };
    }
  
    return {
      props: {}
    }
  };