import React from "react";
import { StyledIndex } from "./style";
import TopBanner from "../../components/TopBanner/TopBanner";
import RegisteredCard from "../../components/RegisterCard/RegisterCard";
import Loading from "../../components/Loading/Loading";
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
    </StyledIndex>
  );
};

export default Index;
