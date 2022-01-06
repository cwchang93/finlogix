import React from "react";
import { StyledIndex } from "./style";
import TopBanner from "../../components/TopBanner/TopBanner";
import RegisteredCard from "../../components/RegisterCard/RegisterCard";
import Loading from "../../components/Loading/Loading";
import ContentVideo from "../../components/ContentVideo/ContentVideo";
import GeneralForm from "../../components/GeneralForm/GeneralForm";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";

import {
  StyledCardsWrap,
  StyledCardSection,
  StyledVideoSect,
  StyledFormSect,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { IInitState } from "../../store/index";
import { fetchWebinarData } from "../../store/webnar-actions";
import { useHistory } from "react-router-dom";

const Index = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: IInitState) => state.user);
  const webinarList = useSelector((state: IInitState) => state.webinarLists);
  const [filteredWebinarData, setFilteredWebinarData] = React.useState<[]>([]);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
  };

  const formText = {
    title: "Register for a Webinar now",
    description:
      "Please fill in the form below and you will be contacted within 1 working day by our professional business experts.",
  };

  React.useEffect(() => {
    dispatch(fetchWebinarData(12));
  }, []);

  // React.useEffect(() => {
  //   const filteredWebinarList = webinarList.filter(
  //     (eachWebinar: any) => eachWebinar.favourited
  //   );
  //   setFilteredWebinarData(filteredWebinarList);
  // }, [webinarList]);

  const handleRegister = (id: number) => {
    if (!user) {
      history.push("/login");
    } else {
      console.log("registered!");
    }
  };

  const onSubmit = (data: any) => {
    console.log("submit");
    console.log(data);
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
                  onClickRegister={handleRegister.bind(null, eachWebinar["id"])}
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
      </StyledCardSection>

      <StyledVideoSect className="videoSect layoutContainer">
        <ContentVideo {...contentVideoData}>
          <p>
            With more than 15 years of experience covering both the FX and CFD
            markets, Alistair has extensive knowledge covering algorithmic
            trading, market analysis & an impressive educational background.
          </p>
          <p>
            As the author of Essentials for Trading Students – An Overview of
            the Basics for Aspiring Traders', which was released in 2017,
            Alistair will take any aspiring trader from the basics right through
            to advanced analytics used in institutional funds.
          </p>
          <p>
            At the core of Alistair's teachings is the ability to help each
            trader uncover their 'Trading DNA', helping them flourish with the
            skills and timeframes that work best for them.`
          </p>
        </ContentVideo>
      </StyledVideoSect>

      <StyledFormSect className="formSect layoutContainer">
        <GeneralForm {...formText}>
          <Input label="Topic" />
          <Input
            label="First Name"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span>This field is required</span>}
          <Input
            label="Last Name"
            {...register("lastName", { required: true })}
          />
          <Input
            label="Email"
            {...register("email", {
              required: true,
              validate: (value: string) => value.includes("@"),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors.email && <span>It's not a valid email </span>}

          <Button className={"registerBtn"} onClick={handleSubmit(onSubmit)}>
            Register
          </Button>
        </GeneralForm>
      </StyledFormSect>
    </StyledIndex>
  );
};

export default Index;
