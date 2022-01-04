import React from "react";
import { StyledIndex } from "./style";
import TopBanner from "../../components/TopBanner/TopBanner";
import RegisteredCard from "../../components/RegisterCard/RegisterCard";
import { StyledCardsWrap, StyledCardSection } from "./style";
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
    content:
      "Whether you are new to foreign exchange trading or already have some market experience, we believe that a solid FX trading education is vital to your success as a trader.",
  };

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

  return (
    <StyledIndex>
      <TopBanner {...bannerText} />

      <StyledCardSection className="cardSection">
        <StyledCardsWrap>
          {webinarList &&
            webinarList.map((eachWebinar: any) => {
              const { title, content, created_at } = eachWebinar;
              return (
                <RegisteredCard
                  key={eachWebinar["id"]}
                  createdAt={created_at}
                  title={title}
                  content={content}
                />
              );
            })}
        </StyledCardsWrap>
      </StyledCardSection>
    </StyledIndex>
  );
};

export default Index;
