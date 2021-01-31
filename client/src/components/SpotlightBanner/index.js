import "./style.css";

import ContainerFluid from "../ContainerFluid";
import Row from "../Row";
import Col from "../Col";

import BannerMainHeadingType from "./BannerMain/BannerMainHeadingType";
import BannerMainListType from "./BannerMain/BannerMainListType";
import BannerMainSideListType from "./BannerMain/BannerMainSide/BannerMainSideListType";

const SpotlightBanner = () => {
    return (
        <div className="banner mb-3">
            <ContainerFluid>
                <Row>
                    <Col size="col-md-7">
                        <div className="banner-main-container">
                            <BannerMainHeadingType 
                                headingTitle={`Leader's Message`}
                                headingText={`Four days until launch day. You can do it! P.S. Starbucks in the lounge!`}   
                            />
                            <BannerMainListType
                                headingTitle={`GOALS`}
                                headingItems={
                                    [
                                        `88% customer satisfaction ratings for January surveys.`,
                                        `5% increase in site traffic from December.`
                                    ]
                                }
                            />
                        </div>
                    </Col>

                    <Col size="col-md-5">
                        <div className="banner-main-side-container">
                                <BannerMainSideListType
                                    headingTitle={`SHOUT-OUTS`}
                                    headingItems={
                                        [
                                            `Alejandra NAILED that pitch to Amazon!`,
                                            `Blake's logo redesign perfectly matched our vision for 2021!`,
                                            `Eric doubled our team's revenue using that ad space!`
                                        ]
                                    }
                                />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    </Col>
                </Row>
            </ContainerFluid>
        </div>
    );
}

export default SpotlightBanner;