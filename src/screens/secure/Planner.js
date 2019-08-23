import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity

} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';


import DashboardCard from '../../components/common/DashboardCard';
import { COLOR } from '../../components/helpers/helpers';


const todaySchedule = [
  {id: 1, task: "Read a book", priorityLevel: 1, timeBudget: 20},
  {id: 2, task: "Read a book", priorityLevel: 3, timeBudget: 20},
  {id: 3, task: "Read a book", priorityLevel: 5, timeBudget: 20},
  {id: 4, task: "Read a book", priorityLevel: 2, timeBudget: 20},
  {id: 5, task: "Read a book", priorityLevel: 2, timeBudget: 20},
]

class Planner extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={{ flex: 1, paddingHorizontal: 20, flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={ () => navigation.navigate("tabDashboard") }>
        <Icon name="md-arrow-back" size={30} style={{marginLeft: 10, marginRight: 10}} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, marginHorizontal: 10}}>Planner</Text>
      </View>
    )
  });
  render() {

    let timeSchedule;
   timeSchedule = todaySchedule.length > 0 ? (
      todaySchedule.map(task => (
        <View
        style={{
          borderWidth: 1,
          marginHorizontal: 30,
          marginVertical: 10,
          paddingVertical: 20
        }}
        key={task.id} >
          <View
          style={{
            flexDirection:"row",
            width: "100%",
            justifyContent:"space-around"
          }}
          >
          <CheckBox
          title={task.task}
          containerStyle={{
            padding: 0,
            margin: 0,
            backgroundColor:"transparent",
            borderWidth: 0,
          }}
          />
          <Text>{task.timeBudget} minutes</Text>
          </View>

          <View
          style={{
            flexDirection:"row",
            width: "100%",
            justifyContent:"space-around"
          }}
          >
          <Text
          style={{
            // borderWidth: 2,
            marginLeft: 20
          }}
          >{task.priorityLevel === 1 ? "High" : task.priorityLevel ===2 ? "Medium" : task.priorityLevel === 3 ? "Low" : "Peripheral" }</Text>

          <Text
          style={{
            fontWeight:"bold"
          }}
          >In progress</Text>
          </View>

        </View>
      ))
    ) : (
      <Text> No goal planned for the day. Enjoy the moment. </Text>
     )


    return (
      <View
      style={{
        flex: 1,
        backgroundColor: COLOR.themeBackground
      }}
      >
        <View
        style={{
          paddingHorizontal: 20,
          marginVertical: 15
        }}
        >
          <Text
          style={{
            color:"rgba(199, 74, 52, 0.7)",
            textAlign:"center"
          }}
          >Welcome Oluwaseyi. It's another day to be world class. Another opportunity to make the world a better place</Text>

        </View>
        <View>
        <DashboardCard
       cardTitle="Life Goals"
       plan
       cardText="Set and review your big top 3 long terms goals and start moving towards it."
       onPress={() => this.props.navigation.navigate("SchedulePlanner")}
      //  onPress={() => alert(" Working on it ")}
       />
        <DashboardCard
       cardTitle="Schedule Planner"
       plan
       cardText="Plan each day. Assign tasks in order of priority that will lead to the attainment of your goal"
       onPress={() => this.props.navigation.navigate("PriorityGoal")}
      //  onPress={() => alert(" Working on it ")}
       />
        </View>

        {/* <Text> BUTTONS </Text> */}
        {/* <Text> Schedule Planner . . .choose the date and add a schedule for each day </Text> */}
        {/* <Text> Apart from the above buttons, this page retrieves and displays the schedule for today depending on the date on the phone's calender, you can only add the schedule in the Schedule Planner section </Text> */}
        <Text
        style={{
          textAlign:"center",
          fontSize: 25,
          marginVertical: 10
        }}
        >Top 5 Goals for the day </Text>
        <ScrollView>
          <View>
        {timeSchedule}
          </View>
        </ScrollView>


      </View>

    )
  }
}

export default Planner
