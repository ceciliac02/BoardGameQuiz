import '../App.css';
import styled, { ThemeProvider } from 'styled-components';
import React from 'react';
import Header from './Components/Header';
import MainBox from './Components/MainBox';
import QuestionHeader from './Components/QuestionContainer';
import QuestionBox from './Components/QuestionBox';
import { Form, Input, Label, InputContainer } from './Components/AnswerContainer';
import Submit from './Components/Submit';
import Questions from './Components/Questions';


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
          option1: "Yes!",
          option2: "Absolutely",
          option3: "Next!",
          option4: "Yep",
          option5: "Vamanos",
          option6: "",
          option7: "",
          answer1: "",
          answer2: "",
          answer3: "",
          answer4: "",
          answer5: "",
          tempAnswer: "",
          hasAnswered: false
      }
  }

  incrementQ = () => {
    if (this.state.hasAnswered === false) {
      alert("You must choose an option!");
    }
    else {
      let category, players, minPlaytime, maxPlaytime;
      if (this.state.number === 0) {
        this.setState({
          number: this.state.number + 1,
          question: Questions(this.state.number),
          option1: "Creative",
          option2: "Historic",
          option3: "Action-Packed",
          option4: "Friends",
          option5: "Strategy",
          option6: "Nautical",
          option7: "Trivia"
        })
      }
      else if (this.state.number === 1) {
        this.setState({
          number: this.state.number + 1,
          question: Questions(this.state.number),
          option1: "Friendly Critters",
          option2: "Scary",
          option3: "Techno",
          option4: "Romantic",
          option5: "Mysterious",
          option6: "Mythology",
          option7: "Money",
          answer1: this.state.tempAnswer
        })
      }
      else if (this.state.number === 2) {
        this.setState({
          number: this.state.number + 1,
          question: Questions(this.state.number),
          option1: "Less than an hour",
          option2: "Around an hour",
          option3: "Around 2 hours",
          option4: "Around 3 hours",
          option5: "As long as it takes",
          answer2: this.state.tempAnswer
        })
      }
      else if (this.state.number === 3) {
        this.setState({
          number: this.state.number + 1,
          question: Questions(this.state.number),
          option1: "Less than an hour",
          option2: "Around an hour",
          option3: "Around 2 hours",
          option4: "Around 3 hours",
          option5: "As long as it takes",
          answer3: this.state.tempAnswer
        })
      }
      else if (this.state.number === 4) {
        this.setState({
          number: this.state.number + 1,
          question: Questions(this.state.number),
          option1: "Aviation",
          option2: "Deception",
          option3: "Children's",
          option4: "Card Game",
          option5: "None of these",
          answer4: this.state.tempAnswer
        })
      }
      else if (this.state.number === 5) {
        if (this.state.answer1.includes("Abstract")) {
          category = "hBqZ3Ar4RJ,MWoxgHrOJD,k0dglq5j6N,Bq6M0TJyg7,eX8uuNlQkQ,gsekjrPJz0,herNFAxMdz,vRbkg1W0AB,nuHYRFmMjU"
        }
        else if (this.state.answer1.includes("Adventure")) {
          category = "KUBCKBkGxV"
        }
        else if (this.state.answer1.includes("Sci-Fi")) {
          category = "3B3QpKvXD3"
        }
        else if (this.state.answer1.includes("Deception")) {
          category = "PinhJrhnxU"
        }
        else if (this.state.answer1.includes("Strategy")) {
          category = "ODWOjWAJj3"
        }
        if(this.state.answer2.includes("1")) {
          players = 1
        }
        else if(this.state.answer2.includes("2")) {
          players = 2
        }
        else if(this.state.answer2.includes("3")) {
          players = 3
        }
        else if(this.state.answer2.includes("4")) {
          players = 4
        }
        else if(this.state.answer2.includes("5")) {
          players = 5
        }
        if(this.state.answer3.includes("less")) {
          maxPlaytime = 30;
          minPlaytime = 0
        }
        else if(this.state.answer3.includes("an")) {
          maxPlaytime = 70;
          minPlaytime = 30
        }
        else if(this.state.answer3.includes("2")) {
          maxPlaytime = 130;
          minPlaytime = 60
        }
        else if(this.state.answer3.includes("3")) {
          maxPlaytime = 190;
          minPlaytime = 120
        }
        else if(this.state.answer3.includes("1")) {
          maxPlaytime = null
        }
        console.log(category, players, maxPlaytime, minPlaytime);
        let apiLink = `https://api.boardgameatlas.com/api/search?categories=${category}&max_players=${players}&lt_max_playtime=${maxPlaytime}&fields=name,id,categories,description,image_url,max_players,max_playtime&client_id=cAAzRV0ENd`;
        console.log(apiLink)
      }
    }
  }

  changeSelected = () => {
    this.setState({
      hasAnswered: true
    })
  }

  tempAnswerChange = e => {
    this.setState({
      tempAnswer: e
    })
    console.log(e)
  }

  enterButton = event => {
    if (event.code === "Enter") 
    {this.incrementQ()}
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
              <Form onKeyDown={e => {this.enterButton(e)}}>
                <InputContainer>
                  <Input type="radio" value={this.state.option1} name="question" id="a1" onClick={e => {this.tempAnswerChange(e.target.value)} } onChange={this.changeSelected} />
                  <Label htmlFor="a1">
                    {this.state.option1}
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Input type="radio" value={this.state.option2} name="question" id="a2" onClick={e => {this.tempAnswerChange(e.target.value)}} onChange={this.changeSelected} />
                  <Label htmlFor="a2">
                    {this.state.option2}
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Input type="radio" value={this.state.option3} name="question" id="a3" onClick={e => {this.tempAnswerChange(e.target.value)}} onChange={this.changeSelected}/>
                  <Label htmlFor="a3">
                    {this.state.option3}
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Input type="radio" value={this.state.option4} name="question" id="a4" onClick={e => {this.tempAnswerChange(e.target.value)}} onChange={this.changeSelected} />
                  <Label htmlFor="a4">
                    {this.state.option4}
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Input type="radio" value={this.state.option5} name="question" id="a5" onClick={e => {this.tempAnswerChange(e.target.value)}} onChange={this.changeSelected} />
                  <Label htmlFor="a5">
                    {this.state.option5}
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Input type="radio" value={this.state.option6} name="question" id="a6" onClick={e => {this.tempAnswerChange(e.target.value)}} onChange={this.changeSelected} />
                  <Label htmlFor="a6">
                    {this.state.option6}
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Input type="radio" value={this.state.option7} name="question" id="a7" onClick={e => {this.tempAnswerChange(e.target.value)}} onChange={this.changeSelected} />
                  <Label htmlFor="a7">
                    {this.state.option7}
                  </Label>
                </InputContainer>
              </Form>
              <Submit onClick={this.incrementQ}>
                Next
              </Submit>
            </QuestionBox>
          </MainBox>
      </Background>
    </ThemeProvider>
    )
  }
}

export default App;
