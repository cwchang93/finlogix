import React from "react";
import RegisterCard from "components/RegisterCard/RegisterCard";
import { StyledRegistered } from "./style";
import { useSelector } from "react-redux";
import { IInitState } from "../../store/index";

const Registered = () => {
  const webinarList = useSelector((state: IInitState) => state.webinarLists);
  const [filteredWebinarList, setFilteredWebinarList] =
    React.useState<any>(null);

  React.useEffect(() => {
    const filteredData =
      webinarList &&
      webinarList.filter((eachWebinar: any) => eachWebinar.favourited);
    setFilteredWebinarList(filteredData);
  }, [webinarList]);

  return (
    <h1>
      THis is the Registered Courses
      <StyledRegistered>
        {filteredWebinarList &&
          filteredWebinarList.map((eachPost: any, i: number) => {
            const { title, content, created_at } = eachPost;
            return (
              <RegisterCard
                title={title}
                content={content}
                createdAt={created_at}
                key={eachPost["id"]}
              />
            );
          })}
      </StyledRegistered>
    </h1>
  );
};

export default Registered;
