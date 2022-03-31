import Head from "next/head";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import Image from "next/image";
import plusIcon from "../public/icons/plusIcon.svg";
import CreateToDo from "../components/CreateToDo";
import InputForm from "../components/InputForm";

export default function Home({ addNewData, formData }) {
  console.log(formData);
  return (
    <>
      <Head>
        <title>Do I? I Do!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainWrapper>
        <TextWrapperStyle>
          <BigFontStyle className="BigFontStyle">
            {formData === null ? (
              <p>Ihr Name & Sein Name </p>
            ) : (
              <p>
                {formData.brideName} & {formData.groomName}
              </p>
            )}
          </BigFontStyle>
          <Line>________________________________________</Line>
          <MediumFontStyle className="MediumFontStyle">
            {formData === null ? <p>XX.XX.XXXX</p> : <p>{formData.date}</p>}
            {formData === null ? (
              <p>Ort, Beginn</p>
            ) : (
              <p>
                {formData.place}, {formData.time}
              </p>
            )}
          </MediumFontStyle>
          <IconStyle>
            <Image src={plusIcon} alt="Plus" width={40} height={40} />
          </IconStyle>
          <InputForm addNewData={addNewData} />
          <BigFontStyle2 className="BigFontStyle">
            <p>Eure wichtigsten To-Do´s</p>
          </BigFontStyle2>
          <Line>________________________________________</Line>
          <CreateToDo />
        </TextWrapperStyle>
      </MainWrapper>
      <NavBar />
    </>
  );
}

const MainWrapper = styled.main`
  margin: 0;
  padding: 1rem;
`;

const TextWrapperStyle = styled.div`
  text-align: center;
`;

const BigFontStyle = styled.div`
  margin-top: 3em;
`;

const BigFontStyle2 = styled.div`
  margin-top: 1.5em;
`;

const Line = styled.p`
  color: #f5b424;
  font-weight: 900;
  margin-bottom: 2rem;
`;

const MediumFontStyle = styled.div`
  margin-bottom: 0.5em;
`;

const IconStyle = styled.p`
  cursor: pointer;
  margin: auto;
  width: 10%;
`;
