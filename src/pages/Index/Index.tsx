import React from "react";
import { StyledIndex } from "./style";
import TopBanner from "../../components/TopBanner/TopBanner";
import RegisteredCard from "../../components/RegisterCard/RegisterCard";
import Loading from "../../components/Loading/Loading";
import ContentVideo from "../../components/ContentVideo/ContentVideo";
import { StyledCardsWrap, StyledCardSection, StyledVideoSect } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { totalActions, IInitState } from "../../store/index";
import { fetchWebinarData } from "../../store/webnar-actions";

const Index = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: IInitState) => state.user);
    const webinarList = useSelector((state: IInitState) => state.webinarLists);
    const [filteredWebinarData, setFilteredWebinarData] = React.useState<[]>([]);

    const bannerText = {
        title: "Forex Webinars",
        content: `Whether you are new to foreign exchange trading or already have some
             market experience, we believe that a solid FX trading education is vital 
             to your success as a trader.`,
    };

    const contentVideoData = {
        title: "Meet Your Host - Alistair Schultz",
        moreLink: "https://chun-wei.com",
        videoSrc: "https://www.youtube.com/embed/R5wt_6oNA78",
    }

    React.useEffect(() => {
        console.log("user", user);
        dispatch(fetchWebinarData(12));
    }, []);

    // React.useEffect(() => {
    //   const filteredWebinarList = webinarList.filter(
    //     (eachWebinar: any) => eachWebinar.favourited
    //   );
    //   setFilteredWebinarData(filteredWebinarList);
    // }, [webinarList]);

    const renderWebinarList = (listData: any) => {
        var groupSize = 2;
        var rows = listData
            .map(function (eachWebinar: any) {
                // map content to html elements
                const { title, content, created_at } = eachWebinar;
                return (
                    <RegisteredCard
                        key={eachWebinar["id"]}
                        createdAt={created_at}
                        title={title}
                        content={content}
                    />
                );
            })
            .reduce(function (r: any, element: any, index: number) {
                // create element groups with size 3, result looks like:
                // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
                index % groupSize === 0 && r.push([]);
                r[r.length - 1].push(element);
                return r;
            }, [])
            .map(function (rowContent: any) {
                // surround every group with 'row'
                return <div className="row">{rowContent}</div>;
            });
        return <StyledCardsWrap>{rows}</StyledCardsWrap>;
    };

    return (
        <StyledIndex>
            <TopBanner {...bannerText} />

            <StyledCardSection className="cardSection">
                <StyledCardsWrap className="cardsWrap">
                    {webinarList ? (
                        webinarList.map((eachWebinar: any, i: number) => {
                            const { title, content, created_at } = eachWebinar;
                            return (
                                <RegisteredCard
                                    key={eachWebinar["id"]}
                                    createdAt={created_at}
                                    title={title}
                                    content={content}
                                />
                            );
                        })
                    ) : (
                        <Loading />
                    )}
                </StyledCardsWrap>

                {/* {webinarList && renderWebinarList(webinarList)} */}
            </StyledCardSection>

            <StyledVideoSect className="videoSect layoutContainer">
                <ContentVideo {...contentVideoData}>
                    <p>With more than 15 years of experience covering
                        both the FX and CFD markets, Alistair has extensive knowledge
                        covering algorithmic trading, market analysis & an impressive
                        educational background.</p>
                    <p>
                        As the author of Essentials for Trading Students – An Overview of
                        the Basics for Aspiring Traders', which was released in 2017,
                        Alistair will take any aspiring trader from the basics right through to advanced analytics used in institutional funds.
                    </p>
                    <p>
                        At the core of Alistair's teachings is the ability to help each
                        trader uncover their 'Trading DNA', helping them flourish with the skills and timeframes that work best for them.`
                    </p>
                </ContentVideo>

            </StyledVideoSect>

        </StyledIndex>
    );
};

export default Index;
