import '../App.css';
import styled, { ThemeProvider } from 'styled-components';
import React from 'react';
import Header from './Components/Header';
import MainBox from './Components/MainBox';
import QuestionHeader from './Components/QuestionContainer';
import QuestionBox from './Components/QuestionBox';
import { LargeChoiceContainer, BeginEnd, ChoiceContainer, Choice } from './Components/AnswerContainer';
import Submit from './Components/Submit';
import Questions from './Components/Questions';
import Results, {ResultName, ResultImage, SmallResultPckg, ResultPckg, Retry} from './Components/Results';


const Background = styled.div`
  display: flex;
  flex-direction: column;
`;

const theme = {
  font: "Impact",
  color1: "#E0CBA8",
  color2: "#779FA1",
  color3: "#FF6542",
  color4: "#D5614C",
  color5: "#A47963"
};

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          number: 0,
          question: "Are you ready?",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          option5: "",
          option6: "",
          option7: "",
          answer1: "",
          answer2: "",
          phase: "Begin",
          tempAnswer: "",
          hasAnswered: false,
          name1: "",
          image1: "",
          url1: "",
          url2: "",
          name2: "",
          image2: "",
      }
  }
//Increments the question counter and changes the options accordingly
  incrementQ = () => {
    if (this.state.hasAnswered === false) {
      alert("You must choose an option!");
    }
    else {
      if (this.state.number === 1) {
        this.setState({
          number: this.state.number + 1,
          question: Questions(this.state.number),
          option1: "Animals",
          option2: "Scary",
          option3: "Trivia",
          option4: "Niche",
          option5: "Strategy",
          option6: "Mythology/Fantasy",
          option7: "Money",
          answer1: this.state.tempAnswer,
          hasAnswered: false
        })
      }
      else if (this.state.number === 2) {
        this.setState({
          answer2: this.state.tempAnswer
        })
        this.clickDone()
      }
    }
    //Removes all highlighted options upon increment
    let selected = document.querySelectorAll(".option");
    for (let i = 0; i < selected.length; i++) {
      selected[i].classList.remove("selected");
    }
  }

  //Results dependent on the answers
  result = () => {
    let categoryOptions, catOptionOneFinal, catOptionTwoFinal, rand;
    const randNum = amt => {
      return Math.floor(Math.random() * amt)
    }
    const firstCatArray = ["Creative", "Historic", "Action-Packed", "Friends", "Mysterious", "Nautical", "Sci-fi"];
    for (let i = 0; i < firstCatArray.length; i++) {
      if(this.state.answer1.includes(firstCatArray[i]) ) {
        switch (i) {
          case 0:
            categoryOptions = ["k0dglq5j6N", "hBqZ3Ar4RJ","Bq6M0TJyg7", "herNFAxMdz", "vRbkg1W0AB", "gsekjrPJz0"];
            rand = randNum(categoryOptions.length);
            catOptionOneFinal = categoryOptions[rand];
            break;
          case 1:
            categoryOptions = ["dghLhwyxVb", "4mOtRRwSoj", "a8NM5cugJX", "20iDvpbh7A", "CBboNLI1Uj", "w8XD66FUZ2","bVMxJo31bS", "bSzUpE5oOZ", "yq6hVlbM2R", "Eyuf8PzjDo", "KzEQIwIub7", "3souLOXUqI", "QAYkTHK1Dd", "YyszHun1HP", "KSBdPfxs6F", "jS8aA9kDFW", "wTLJSVEbm6", "fl3TogdUzX", "5APB1MWk6X", "nuHYRFmMjU"];
            rand = randNum(categoryOptions.length);
            catOptionOneFinal = categoryOptions[rand];
            break;
          case 2:
            categoryOptions = ["FmGV9rVu1c", "OlkGBmu4Va", "jX8asGGR6o", "tQGLgwdbYH", "2Gu62aKdma", "dAyk5NtNTV", "8Z7nWG2kOw", "L6NUwNdblq", "upXZ8vNfNO", "g2Hwv8t0Y5", "7DfHn28Pcf", "gscaL52VDG", "eFaACC6y2c", "KUBCKBkGxV"];
            rand = randNum(categoryOptions.length);
            catOptionOneFinal = categoryOptions[rand];
            break;
          case 3:
            categoryOptions = ["ge8pIhEUGE", "We3MM46qBr", "7rV11PKqME", "ZhlfIPxYsw", "X8J7RM6dxX", "WCMkyAqVlf", "rHvAx4hH2f", "TYnxiuiI3X", "YrDuNj8lvr"];
            rand = randNum(categoryOptions.length);
            catOptionOneFinal = categoryOptions[rand];
            break;
          case 4:
            categoryOptions = ["Kk70K0524Z", "bCBXJy9qDw", "7DfHn28Pcf", "PinhJrhnxU"];
            rand = randNum(categoryOptions.length);
            catOptionOneFinal = categoryOptions[rand];
            break;
          case 5:
            categoryOptions = ["9EIayX6n5a", "vqZ5XzGWQD"];
            rand = randNum(categoryOptions.length);
            catOptionOneFinal = categoryOptions[rand];
            break;
          case 6: 
          categoryOptions = ["tJxatX2ZbW", "Ef4oYLHNhI", "oojGpMQQ2l", "3B3QpKvXD3", "0MdRqhkNpw", "2KVQJ2k60k"];
          rand = randNum(categoryOptions.length);
          catOptionOneFinal = categoryOptions[rand];
          break;
          default:
            console.error();
        }
      }
    }
    const secondCatArray = ["Animals", "Scary", "Trivia", "Niche", "Strategy", "Mythology", "Money"];
    for (let i = 0; i < secondCatArray.length; i++) {
      if(this.state.answer2.includes(secondCatArray[i]) ) {
        switch (i) {
          case 0: 
            catOptionTwoFinal = "MWoxgHrOJD";
            break;
          case 1:
            categoryOptions = ["eFaACC6y2c", "8Z7nWG2kOw", "uJgSEPT6zE", "FmGV9rVu1c", "cAIkk5aLdQ"];
            rand = randNum(categoryOptions.length);
            catOptionTwoFinal = categoryOptions[rand];
            break;
          case 2:
            categoryOptions = ["B3NRLMK4xD", "AujCle9cUq", "Sod2YBWMKi", "YGHGDjahKY", "rHvAx4hH2f"];
            rand = randNum(categoryOptions.length);
            catOptionTwoFinal = categoryOptions[rand];
            break;
          case 3: 
            categoryOptions = ["36WFElclV3", "vXxLT0FDTZ", "ctumBZyj5l", "rrvd68LjOR", "FC6ElKI9tk", "Sod2YBWMKi", "dO9HVl2TW7", "DRqeVkXWqX", "hShsL2DktG", "djokexoK0U", "4hZlqoitAY", "G5kfqnPBP6"];
            rand = randNum(categoryOptions.length);
            catOptionTwoFinal = categoryOptions[rand];
            break;
          case 4:
            categoryOptions = ["85OKv8p5Ow", "ODWOjWAJj3", "329DxyFL9D", "u5ZiYctU6T", "v4SfYtS2Lr", "XeYUw9159M", "ruQAhyLfum", "jZEDOpx07e", "TKQncFVX74", "dAyk5NtNTV", "WVMOS3s2pb", "zyj9ZK3mHB", "SzUZdSjCN2", "Hc6vcim5DS", "buDTYyPw4D", "BHxvD7ZjfA", "B1N2QOByCl"];
            rand = randNum(categoryOptions.length);
            catOptionTwoFinal = categoryOptions[rand];
            break;
          case 5:
            categoryOptions = ["MHkqIVxwtx", "ZTneo8TaIO"];
            rand = randNum(categoryOptions.length);
            catOptionTwoFinal = categoryOptions[rand];
            break;
          case 6:
            categoryOptions = ["ELg06sncRX", "N0TkEGfEsF", "wpItJuRDiz"];
            rand = randNum(categoryOptions.length);
            catOptionTwoFinal = categoryOptions[rand];
            break;
          default:
            console.error();
        }
      }
    }
    let apiLinkOne, apiLinkTwo;
    apiLinkOne = `https://api.boardgameatlas.com/api/search?categories=${catOptionOneFinal}&gt_year_published=2014&fields=name,id,categories,description,image_url,max_players,min_players,max_playtime,url&client_id=cAAzRV0ENd`;
    apiLinkTwo = `https://api.boardgameatlas.com/api/search?categories=${catOptionTwoFinal}&gt_year_published=2014&fields=name,id,categories,description,image_url,max_players,min_players,max_playtime,url&client_id=cAAzRV0ENd`;
    Promise.all([
      fetch(apiLinkOne)
        .then(resp => resp.json())
        .then(data => {
          if(data.count > 0) {
            let recomm = randNum(data.games.length);
            let chosenGame = data.games[recomm];
            this.setState({
              name1: chosenGame.name,
              image1: chosenGame.image_url,
              url1: chosenGame.url
            })
          }
          else {
            this.setState({
              name1: "Oops!",
              image1: null,
              url1: ""
            })
          }
        }),
      fetch(apiLinkTwo)
        .then(resp => resp.json())
        .then(data => {
          if(data.count > 0) {
            let recomm = randNum(data.games.length);
            let chosenGame = data.games[recomm];
            this.setState({
              name2: chosenGame.name,
              image2: chosenGame.image_url,
              url2: chosenGame.url
            })
          }
          else {
            this.setState({
              name2: "Oops!",
              image2: null,
              url2: ""
            })
          }
        })
    ])
  }

  clickBegin = () => {
    if(this.state.phase === "Begin") {
      document.getElementById("answers").style.display="flex";
      document.getElementById("beginEnd").style.display="none";
      document.getElementById("results").style.display = "none";
      this.setState({
        number: this.state.number + 1,
        question: Questions(this.state.number),
        option1: "Creative",
        option2: "Historic",
        option3: "Action-Packed",
        option4: "Friends",
        option5: "Mysterious",
        option6: "Nautical",
        option7: "Sci-fi",
      })
    }
    else {
      this.showResults()
    }
  }

  clickDone = () => {
    this.setState({
      number: 0,
      question: "",
      phase: "Results",
      tempAnswer: ""
    })
    document.getElementById("beginEnd").style.display = "flex";
    document.getElementById("answers").style.display = "none";
  }

  tempAnswerChange = (option) => {
    this.setState({
      tempAnswer: option,
      hasAnswered: true,
    })
    let selected = document.querySelectorAll(".option");
    for (let i = 0; i < selected.length; i++) {
      selected[i].classList.remove("selected");
    }
  }

  enterButton = event => {
    if (event.code === "Enter" && this.state.number < 4) 
    {
      this.incrementQ();
      let selected  = document.querySelectorAll(".option");
      for (let i = 0; i < selected.length; i++) {
        selected[i].blur();
      }
    }
  }

  showResults = () => {
    if (this.state.phase === "Results") {
      document.getElementById("results").style.display = "flex";
      document.getElementById("beginEnd").style.display = "none";
      this.result();
      this.setState({
        question: "Click the image to learn more",
        phase: "Begin"
      })
    }
  }

  retry = () => {
    this.clickBegin()
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Background>
          <Header>
            What Will Your Next Board Game Be?
          </Header>
          <MainBox>
            <QuestionHeader>
              {this.state.question}
            </QuestionHeader>
            <QuestionBox>
              <BeginEnd id="beginEnd" onClick={() => {this.clickBegin()}}>
                {this.state.phase}!
              </BeginEnd>
              <ResultPckg id="results">
                <SmallResultPckg>
                  <Results>
                    <ResultName>
                      {this.state.name1}
                    </ResultName>
                    <a href={this.state.url1}>
                      <ResultImage>
                        <img src={this.state.image1} alt={this.state.name1}/>
                      </ResultImage>
                    </a>
                  </Results>
                  <Results>
                      <ResultName>
                        {this.state.name2}
                      </ResultName>
                    <a href={this.state.url2}>
                      <ResultImage>
                        <img src={this.state.image2} alt={this.state.name2}/>
                      </ResultImage>
                    </a>
                  </Results>
                </SmallResultPckg>
                <Retry onClick={() => {this.retry()}}>
                  Retry
                </Retry>
              </ResultPckg>
              <LargeChoiceContainer id="answers">
                <ChoiceContainer id="a1" className="option" tabIndex={1} onKeyDown={e => {this.enterButton(e)} } onFocus={() => {this.tempAnswerChange(this.state.option1)} } onClick={() => {this.tempAnswerChange(this.state.option1, "a1")}}>
                    <Choice>
                      {this.state.option1}
                    </Choice>
                  </ChoiceContainer>
                  <ChoiceContainer id="a2" className="option" tabIndex={2} onKeyDown={e => {this.enterButton(e)} } onFocus={() => {this.setState({ hasAnswered: true }) } } onClick={() => {this.tempAnswerChange(this.state.option2, "a2")}}>
                    <Choice>
                      {this.state.option2}
                    </Choice>
                  </ChoiceContainer>
                  <ChoiceContainer id="a3" className="option" tabIndex={3} onKeyDown={e => {this.enterButton(e)} } onFocus={() => {this.setState({ hasAnswered: true }) } } onClick={() => {this.tempAnswerChange(this.state.option3, "a3")}}>
                    <Choice>
                      {this.state.option3}
                    </Choice>
                  </ChoiceContainer>
                  <ChoiceContainer id="a4" className="option" tabIndex={4} onKeyDown={e => {this.enterButton(e)} } onFocus={() => {this.setState({ hasAnswered: true }) } } onClick={() => {this.tempAnswerChange(this.state.option4, "a4")}}>
                    <Choice>
                      {this.state.option4}
                    </Choice>
                  </ChoiceContainer>
                  <ChoiceContainer id="a5" className="option" tabIndex={5} onKeyDown={e => {this.enterButton(e)} } onFocus={() => {this.setState({ hasAnswered: true }) } } onClick={() => {this.tempAnswerChange(this.state.option5, "a5")}}>
                    <Choice>
                      {this.state.option5}
                    </Choice>
                  </ChoiceContainer>
                  <ChoiceContainer id="a6" className="option" tabIndex={6} onKeyDown={e => {this.enterButton(e)} } onFocus={() => {this.setState({ hasAnswered: true }) } } onClick={() => {this.tempAnswerChange(this.state.option6, "a6")}}>
                    <Choice>
                      {this.state.option6}
                    </Choice>
                  </ChoiceContainer>
                  <ChoiceContainer id="a7" className="option" tabIndex={7} onKeyDown={e => {this.enterButton(e)} } onFocus={() => {this.setState({ hasAnswered: true }) } } onClick={() => {this.tempAnswerChange(this.state.option7, "a7")}}>
                    <Choice>
                      {this.state.option7}
                    </Choice>
                  </ChoiceContainer>
                <Submit tabIndex={8} onClick={this.incrementQ}>
                  Next
                </Submit>
              </LargeChoiceContainer>
            </QuestionBox>
          </MainBox>
      </Background>
    </ThemeProvider>
    )
  }
}

export default App;