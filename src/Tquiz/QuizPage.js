
import React,{useState, useEffect} from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  ScrollView,
  document,

  } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function QuizPage({navigation}) {
  const language = navigation.getParam('language')
  const difficulty = navigation.getParam('difficulty')
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [token, setToken] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState({});
    
      const STORAGE_KEY = '@save_token'

 
  useEffect(()=> {
    fetch(
      `http://techquiz.us-east-1.elasticbeanstalk.com/question/${language}/${difficulty}?skip=${Math.round(Math.random()*20)}` 
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setQuestions(json)
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error("error with questions",error);
      })
      .finally(setLoading(false));
 
  
  },[])
    
function getNextQuestion(){
  setIndex(() => index + 1)
}

function updateScores(){
  try{

  
  fetch(`http://techquiz.us-east-1.elasticbeanstalk.com/user/score?score=${score}`, {
      method: "PATCH",  
      headers: {"Authorization" : `Bearer ${token}`},  
      }).then(response => {
         console.log(response);
              return response.json();  
            }).then(data => console.log('This is the reponse data',data))
            .catch((error) => alert(e))

          }catch(e){
            alert(e)
          }
            
}

const readData = async () => {
  try {
    const token = await AsyncStorage.getItem(STORAGE_KEY)

    if (token !== null) {
      setToken(token)
      console.log(token)
    }

  } catch (e) {
    alert('Failed to fetch the data from storage')
  }
}

useEffect(()=> {
    readData();
},[])



return (
  

  <View style={styles.container}>

    {questions && questions[index] && index < 10 ?
    
      
              

<View style={{ padding: 16 }}>
<ScrollView>
       <Text style={styles.QuestionSection}
        >
          {`${index + 1} - ${questions[index].question}`}
        </Text>
        {[
          questions[index].option1, 
          questions[index].option2,
          questions[index].option3,
          questions[index].option4
    ].map((option) => (
          <TouchableOpacity style={styles.AnswerSection}
            key = {option}
            onPress={() => {
              if(option === questions[index].answer) setScore(()=> score + 1)
              getNextQuestion()
            }}
          >
            <Text style={styles.optionButton} key={option}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
        </ScrollView>
      </View>



            :
            <View>
              {index>=10 && !showScore ?
              <View>
                <TouchableOpacity style={styles.AnswerSection}
            
            onPress={() => {
              setShowScore(true)
            }}
          >
            <Button style={{margin: 160}} title="Show Score" onPress={() => {updateScores();setShowScore(true)}} />
          </TouchableOpacity>
             
             </View>
             : 
              <View style={styles.ScoreSection}>
                {
                  
}
                   <Text style={{fontSize: 80, color: 'white'}}>{showScore ? score + "/10" : ""}</Text>
                   
                  
              </View>
              }
              
              </View>
 }
    </View>
      

)
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: "#36485f",
    borderRadius: 15,
    alignItems: "stretch",
    alignContent:"space-between",
    flex: 1,
  },
  QuestionSection: {
    marginVertical: 20,
    width: '100%',
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
    fontSize: 50,
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
    marginTop: 30,
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#F3E5AB",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
});

