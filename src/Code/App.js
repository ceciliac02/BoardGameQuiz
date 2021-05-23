import '../App.css';
import styled, { ThemeProvider } from 'styled-components';
import React from 'react';
import Header from './Components/Header';
import MainBox from './Components/MainBox';
import QuestionHeader from './Components/QuestionContainer';
import QuestionBox from './Components/QuestionBox';
import { LargeChoiceContainer, Begin, ChoiceContainer, Choice } from './Components/AnswerContainer';
import Submit from './Components/Submit';
import Questions from './Components/Questions';
import Loading from './Components/Done';


const Background = styled.div`
  display: flex;
  flex-direction: column;
`;

const theme = {
  font: "Impact",
  color1: "#AD3535",
  color2: "#209F84",
  color3: "#E3AE9D",
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
          answer3: "",

          tempAnswer: "",
          hasAnswered: false
      }
  }

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
          option3: "Sci-Fi",
          option4: "Niche",
          option5: "Mysterious",
          option6: "Mythology/Fantasy",
          option7: "Money",
          answer1: this.state.tempAnswer,
          hasAnswered: false
        })
      }
      else if (this.state.number === 2) {
        this.setState({
          number: this.state.number + 1,
          question: Questions(this.state.number),
          option1: "1",
          option2: "2",
          option3: "3",
          option4: "4",
          option5: "5",
          option6: "6",
          option7: "As many as it takes",
          answer2: this.state.tempAnswer,
          hasAnswered: false
        })
      }
      else if (this.state.number === 3) {
        this.setState({
          number: this.state.number + 1,
          question: Questions(this.state.number),
          option1: "Less than an hour",
          option2: "Around 1 hour",
          option3: "Around 2 hours",
          option4: "Around 3 hours",
          option5: "Around 4 hours",
          option6: "Around 5 hours",
          option7: "As long as it takes",
          answer3: this.state.tempAnswer,
          hasAnswered: false
        })
      }
      else if (this.state.number === 4) {
        this.setState({
          answer4: this.state.tempAnswer
        })
      }
    }
    let selected = document.querySelectorAll(".option");
    for (let i = 0; i < selected.length; i++) {
      selected[i].classList.remove("selected");
    }
  }

  result = () => {
    let categoryOptions, catOptionOneFinal, catOptionTwoFinal, finalCat, players, maxPlaytime, rand;
    const randNum = amt => {
      return Math.floor(Math.random() * amt)
    }
    const firstCatArray = ["Creative", "Historic", "Action-Packed", "Friends", "Strategy", "Nautical", "Trivia"];
    for (let i = 0; i < firstCatArray.length; i++) {
      if(this.state.answer1.includes(firstCatArray[i]) ) {
        console.log(i + ":# of first cat option");
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
            categoryOptions = ["85OKv8p5Ow", "ODWOjWAJj3", "329DxyFL9D", "u5ZiYctU6T", "v4SfYtS2Lr", "XeYUw9159M", "POlqwScVxD", "ruQAhyLfum", "jZEDOpx07e", "TKQncFVX74", "dAyk5NtNTV", "WVMOS3s2pb", "zyj9ZK3mHB", "SzUZdSjCN2", "Hc6vcim5DS", "buDTYyPw4D", "BHxvD7ZjfA", "B1N2QOByCl"];
            rand = randNum(categoryOptions.length);
            catOptionOneFinal = categoryOptions[rand];
            break;
          case 5:
            categoryOptions = ["9EIayX6n5a", "vqZ5XzGWQD"];
            rand = randNum(categoryOptions.length);
            catOptionOneFinal = categoryOptions[rand];
            break;
          case 6:
            categoryOptions = ["B3NRLMK4xD", "AujCle9cUq", "Sod2YBWMKi", "YGHGDjahKY", "rHvAx4hH2f"];
            rand = randNum(categoryOptions.length);
            catOptionOneFinal = categoryOptions[rand];
            break;
          default:
            console.error();
        }
      }
    }
    const secondCatArray = ["Animals", "Scary", "Sci-fi", "Niche", "Mysterious", "Mythology", "Money"];
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
            categoryOptions = ["tJxatX2ZbW", "Ef4oYLHNhI", "oojGpMQQ2l", "3B3QpKvXD3", "0MdRqhkNpw", "2KVQJ2k60k"];
            rand = randNum(categoryOptions.length);
            catOptionTwoFinal = categoryOptions[rand];
            break;
          case 3: 
            categoryOptions = ["36WFElclV3", "vXxLT0FDTZ", "ctumBZyj5l", "rrvd68LjOR", "FC6ElKI9tk", "Sod2YBWMKi", "dO9HVl2TW7", "DRqeVkXWqX", "hShsL2DktG", "djokexoK0U", "4hZlqoitAY", "G5kfqnPBP6"];
            rand = randNum(categoryOptions.length);
            catOptionTwoFinal = categoryOptions[rand];
            break;
          case 4:
            categoryOptions = ["Kk70K0524Z", "bCBXJy9qDw", "7DfHn28Pcf", "PinhJrhnxU"];
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
    for (let i = 1; i < 7; i++) {
      if (this.state.answer3.includes(i)) {
        switch (i) {
          case 1:
            players = 1;
            break;
          case 2: 
            players = 2;
            break;
          case 3:
            players = 3;
            break;
          case 4: 
            players = 4;
            break;
          case 5:
            players = 5;
            break;
          case 6: 
            players = 6;
            break;
          default:
            players = 10;
        }
      }
    }
    if (this.state.answer4.includes("less than")) {
      maxPlaytime = 40
    }
    else if (this.state.answer4.includes("as long")) {
      maxPlaytime = null
    }
    else {
      for (let i = 1; i < 6; i++) {
        if (this.state.answer4.includes(i)) {
          switch (i) {
            case 1:
              maxPlaytime = 70;
              break;
            case 2:
              maxPlaytime = 130;
              break;
            case 3:
              maxPlaytime = 190;
              break;
            case 4:
              maxPlaytime = 250;
              break;
            case 5:
              maxPlaytime = 310;
              break;
            default:
              maxPlaytime = 60;
          }
        }
      }
    }
    let random = Math.floor(Math.random() * 2);
    if (random === 0) {
      finalCat = catOptionOneFinal;
    }
    else {
      finalCat = catOptionTwoFinal;
    }
    console.log(catOptionOneFinal + " catOne", catOptionTwoFinal + " catTwo", players, maxPlaytime, finalCat + "finalCat", random);
    let apiLink = `https://api.boardgameatlas.com/api/search?categories=${finalCat}&max_players=${players}&lt_max_playtime=${maxPlaytime}&fields=name,id,categories,description,image_url,max_players,max_playtime&client_id=cAAzRV0ENd`;
    console.log(apiLink)
    fetch (apiLink)
      .then(response => response.json())
      .then(data => {
        if (data.count > 0) {
          let recommended = randNum(data.games.length);
          console.log(data.games[recommended])
        }
        else {
          console.log("Try again")
        }
      })
  }

  clickBegin = () => {
    document.getElementById("answers").style.display="flex";
    document.getElementById("begin").style.display="none";
    this.setState({
      number: this.state.number + 1,
      question: Questions(this.state.number),
      option1: "Creative",
      option2: "Historic",
      option3: "Action-Packed",
      option4: "Friends",
      option5: "Strategy",
      option6: "Nautical",
      option7: "Trivia",
    })
  }

  clickDone = () => {
    document.getElementById("load")
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
    console.log(option)
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
              <Begin id="begin" onClick={() => {this.clickBegin()}}>
                Begin!
              </Begin>
              <Loading id="load">
                On to your board game!
              </Loading>
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