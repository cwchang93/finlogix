import React from 'react';
import { StyledIndex } from './style';
import TopBanner from '../../components/TopBanner/TopBanner';


const Index = () => {

    const bannerText = {
        title: "Forex Webinars",
        content: "Whether you are new to foreign exchange trading or already have some market experience, we believe that a solid FX trading education is vital to your success as a trader."
    }

    return (
        <StyledIndex>
            <TopBanner {...bannerText} />
        </StyledIndex>
    )


}

export default Index;