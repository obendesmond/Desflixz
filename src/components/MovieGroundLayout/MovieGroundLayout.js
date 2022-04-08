import React from "react";
import Layout from "components/Layout";
import bgImage from "assets/bg.jpg";

function MovieGroundLayout({ children, isLogin }) {
  return (
    <Layout isLogin={isLogin}>
      <div
        style={{
          height: "100vh",
          width: "auto",
          background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.8) 100%), url(${bgImage})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            top: "20%",
            position: "absolute",
            marginRight: "auto",
            marginLeft: "auto",
            textAlign: "center",
            width: "100%",
          }}
        >
          {children}
        </div>
      </div>
    </Layout>
  );
}

export default MovieGroundLayout;
