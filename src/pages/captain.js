import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Roadmap from "../containers/home/roadmap1";
// import TeampPageContainer from "../containers/team-page-container";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const CaptainPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="VIAN – Team" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Be A Captain"
                        excerpt="Pleasure rationally encounter consequences <br />
                        are extremely painful great oppurtunity"
                        image="./images/team/10.png"
                    />
                    <Roadmap />
                    {/* <TeampPageContainer /> */}
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default CaptainPage;
