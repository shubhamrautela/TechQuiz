// import React, { useState } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// export default async function QuizPage({ navigation }) {

//   let questions = [];

// //   const response = await fetch('http://techquiz.us-east-1.elasticbeanstalk.com/basic_question?skip=0&limit=10',{
// //   method:'GET',

// // })

// bindGrade=()=>{
//   fetch("http://techquiz.us-east-1.elasticbeanstalk.com/basic_question?skip=0&limit=10")
//     .then((response) => response.json())
//     .then((json) => {

//       this.setState({ GradeData: json.returnObject, data: json.returnObject, });
//     })
//     .catch((error) => {

//       alert(JSON.stringify(error));
//       console.error(error);
//     });
// }

//   const data = await response.json()
//   var questionMap = await data.map(question => {
//     return {
//       questionText: question.question,
//       answerOptions:[
//         { Option:question.option1 },
//         { Option:question.option2 },
//         { Option:question.option3 },
//         { Option:question.option4 }
//       ].map(e => {
//         if(e.Option === question.answer){
//           return {
//             Option: e.Option, isCorrect:true
//           }
//         }else{
//           return {
//             Option:e.Option
//           }
//         }
//       })
//     }
//   })

//   questions = [...questionMap]

//   const [currentQuestion, setCurrentQuestion] = useState(0);

//   const [showScore, setShowScore] = useState(false);

//   const [score, setScore] = useState(0);

//   const handleAnswerButtonClick = (isCorrect) => {
//     if (isCorrect === true) {
//       setScore(score + 1);
//     }

//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < questions.length) {
//       setCurrentQuestion(nextQuestion);
//     } else {
//       setShowScore(true);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* {showScore ? (
//         <View>
//           <View style={styles.ScoreSection}>
//             Your Score:   {score} / {questions.length}
//           </View>
//           <View padding="80">
//             <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('QuizLevel')}>
//               <Text style={styles.buttonText}>Get Back to Quiz</Text>
//             </TouchableOpacity>
//           </View>
//           <View>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
//               <Text style={styles.buttonText} >Go Back to Home Page</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       ) : (
//         <View>
//           <View style={styles.QuestionSection}>
//             <View style={styles.QuestionCount}>
//               <Text style={styles.noOfQuestion} >
//                 Question  {currentQuestion + 1}/{questions.length}
//               </Text>
//             </View>
//             <View style={styles.QuestionText}>
//               {questions[currentQuestion].questionText}
//             </View>
//           </View>

//           <View style={styles.AnswerSection}>
//             {questions[currentQuestion].answerOptions.map((answerOption) => (
//               <View style={styles.optionButton}>
//                 <button
//                   onClick={() =>
//                     handleAnswerButtonClick(answerOption.isCorrect)
//                   }
//                 >
//                   {answerOption.Option}
//                 </button>
//               </View>
//             ))}
//           </View>
//         </View>
//       )} */}
//       <Text>Screen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     paddingHorizontal: 20,
//     backgroundColor: "#36485f",
//     borderRadius: 15,
//     padding: 20,
//     alignItems: "stretch",
//     flex: 1,
//   },
//   QuestionSection: {
//     marginVertical: 16,
//     width: "auto",
//     position: "relative",
//     color: "#fff",
//     fontSize: 20,
//   },
//   QuestionCount: {
//     marginBottom: 20,
//     alignItems: "stretch",

//     color: "#fff",
//   },
//   QuestionText: {
//     marginBottom: 12,
//     padding: 20,
//   },
//   noOfQuestion: {
//     fontSize: 16,
//     fontWeight:'bold',
//     color: "red",
//     alignContent: "stretch",
//     alignItems: "stretch",
//   },
//   AnswerSection: {
//     width: "auto",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     paddingBottom: 10,
//   },
//   ScoreSection: {
//     fontSize: 24,
//     alignItems: "center",
//     color: "#fff",
//     padding: 40,
//   },
//   button: {
//     backgroundColor: "#59cbbd",
//     padding: 10,
//     paddingHorizontal: 16,
//     borderRadius: 16,
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   optionButton: {
//     paddingVertical: 12,
//     marginVertical: 6,
//     backgroundColor: "#F3E5AB",
//     paddingHorizontal: 12,
//     borderRadius: 12,
//   },
// });

import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  BackHandler,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Button,
} from "react-native";

export default class QuizPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: [],
      subQuestion: [],
    };
  }
  bindData = () => {
    fetch(
      "http://techquiz.us-east-1.elasticbeanstalk.com/basic_question?skip=0&limit=10"
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({ question: json });
        var questionMap = this.state.question.map((question) => {
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
        this.setState({ subQuestion: questionMap });
        console.log("Question Map ", questionMap);
        console.log(this.state.subQuestion);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  };
  componentDidMount() {
    this.bindData();
  }
  renderItem = ({ item, index }) => {
    return (
      <View style={{ padding: 16 }}>
        <Text style={styles.QuestionSection}
        >
          {`${index + 1} - ${item.questionText}`}
        </Text>
        {item.answerOptions.map(({ Option }) => (
          <TouchableOpacity style={styles.AnswerSection}
            key={Option}
            onPress={() => {
              Alert.alert("Title", Option);
            }}
          >
            <Text style={styles.optionButton} key={Option}>
              {Option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.subQuestion}
          keyExtractor={(item) => {
            return item.id;
          }}
          horizontal={false}
          renderItem={this.renderItem}
          ListFooterComponent={() => (
            <Button style={{marginVertical: 16}} title="Submit" onPress={() => {}} />
          )}
        />
      </View>
    );
  }
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

// var items = [1, 2, 3, 4, 5];
// var newItems = [];
// for (var i = 0; i < 2; i++) {
//   var idx = Math.floor(Math.random() * items.length);
//   newItems.push(items[idx]);
//   items.splice(idx, 1);
// }
// console.log(newItems);
