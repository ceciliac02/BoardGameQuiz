import '../App.css';
import styled, { ThemeProvider } from 'styled-components';
import React from 'react';
import Header from './Components/Header';
import MainBox from './Components/MainBox';
import QuestionHeader from './Components/QuestionContainer';
import QuestionBox from './Components/QuestionBox';
import { Form, Input, Label, InputContainer } from './Components/Answers';
import Submit from './Components/Submit';
import Questions from './Components/Questions';


const Background = styled.div`
  display: flex;
  flex-direction: column;
`;

const theme = {
  font: "Impact",
  color1: "#AD3535",
  color2: "#6F9052",
  color3: "#CE9D8D",
  color4: "#D5614C",
  color5: "#A47963"
};

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          number: 0,
          question: "Are You Ready?",
          answers: "Test",
          hasAnswered: false,
          answer: null
      }
  }

  incrementQ = () => {
    if (this.state.hasAnswered === false) {
      alert("You must choose an option!");
    }
    else {
      this.setState({
        number: this.state.number + 1,
        question: Questions(this.state.number)
      })
    }
    console.log(this.state.number)
  }


  api = "https://api.boardgameatlas.com/api/search?order_by=ascending=true&fields=name,id,description,image_url,min_players,year_published&client_id=cAAzRV0ENd";
  fetch = () => {
    fetch(this.api)
    .then(result => result.json())
    .then(data => console.log(data))
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
              <Form>
                <InputContainer>
                  <Input type="radio" value={this.state.answers} />
                  <Label>
                    {this.state.answers}
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Input type="radio" value={this.state.answers} />
                  <Label>
                    {this.state.answers}
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Input type="radio" value={this.state.answers} />
                  <Label>
                    {this.state.answers}
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Input type="radio" value={this.state.answers} />
                  <Label>
                    {this.state.answers}
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Input type="radio" value={this.state.answers} />
                  <Label>
                    {this.state.answers}
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
