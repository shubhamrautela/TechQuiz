import React,{useState, useEffect} from "react";
import {
  Text,
  View,
  
  StyleSheet,
  } from "react-native";

export default function QuizPage2({navigation}) {
  const language = navigation.getParam('language')
  const difficulty = navigation.getParam('difficulty')

  const [questions, setQuestions] = useState([]);

  useEffect(()=> {
    fetch(
      `http://techquiz.us-east-1.elasticbeanstalk.com/question/${language}/${difficulty}/`
    )
      .then((response) => response.json())
      .then((json) => {
        setQuestions(json);
        var questionMap = questions.map((question) => {
          return {
            questionText: question.question,
            answerOptions: [
              { Option: question.option1 },
              { Option: question.option2 },
              { Option: question.option3 },
              { Option: question.option4 },
            ].map((e) => {
              if (e.Option === question.answer) {
                return {
                  Option: e.Option,
                  isCorrect: true,
                };
              } else {
                return {
                  Option: e.Option,
                };
              }
            }),
          };
        });
        setQuestions(questionMap);
        // console.log("Question Map ", questionMap);
        // console.log(this.state.subQuestion);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
 
  
  })
    
  
return (
  <View style={styles.container}>
      <View style={styles.select}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Choose difficulty Level
        </Text>
      </View>
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#36485f",
    borderRadius: 15,
    padding: 20,
    alignItems: "stretch",
    alignContent:"space-between",
    flex: 1,
  },
  QuestionSection: {
    marginVertical: 16,
    width: "auto",
    position: "relative",
    color: "white",
    fontSize: 20,
  },
  QuestionCount: {
    marginBottom: 20,
    alignItems: "stretch",

    color: "#fff",
  },
  QuestionText: {
    marginBottom: 12,
    padding: 20,
  },
  noOfQuestion: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    alignContent: "stretch",
    alignItems: "stretch",
  },
  AnswerSection: {
    width: "auto",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 10,
    color:"white"
  },
  ScoreSection: {
    fontSize: 24,
    alignItems: "center",
    color: "#fff",
    padding: 40,
  },
  button: {
    backgroundColor: "#59cbbd",
    padding: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#F3E5AB",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
});

