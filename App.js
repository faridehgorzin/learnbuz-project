import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



export default function App() {
  const [users, setUser] = useState([{ id: "1", first_name: "حامد ", last_name: "کیانی", rank: "مدیر و مدرس مجموعه", discription: "مدرس زبان انگلیسی با سابقه 10 سال تدریس زبان عمومی و 6 سال بصورت تخصصی برای آمادگی آزمون آیلتس", src: "flower1.jpg" },
  { id: "2", first_name: "ژاله ", last_name: "طاهری", rank: "مدیر تیم فنی", discription: " برنامه نویس ارشد با بیش از 8 سال سابقه", src: "flower2.jpg" }])

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>

        {/******************Header learnbuz***************/}
        <View style={styles.wrapper_header}>
          <View style={styles.wrapper_about_us}>
            <Text style={styles.text_about_us}>درباره لرن باز</Text>
            <Image source={require('./assets/images/arrow.jpg')} style={styles.header_arrow} />
          </View>
          <Image source={require('./assets/images/team.jpg')} style={styles.image_header} />
        </View>

        {/***********Goal learnbuz***************/}
        <View style={styles.wrapper_goal}>
          <Text style={styles.heading_goal}>هدف تیم لرن باز</Text>
          <Text style={styles.paragraph_goal}> داستان ما از اونجائی شروع میشه با خودمون فکر کردیم یادگیری زبان باید خیلی آسون تر از چیزی که الان هست بشه. داستان های زیادی رو میشنویم که خیلی از زبان آموزان عزیز سال ها به کلاس های آموزشگاه های مختلف رفتن ولی نتیجه مطلوبی کسب نکردن. لرن باز اومده که</Text>
        </View>

        {/********* rank ***********/}
        
        <View style={styles.members}>
          <View>
            {users.map(user => {
              return (
                <View style={styles.member_img} key={user.id}>
                   {/* <Image source={require('./assets/images/{user.src}')}></Image>  */}
                </View>
              )
            })}

          </View>
          <View >
            {users.map(user => {
              return (
                
                <View style={styles.wrapper_rank} key={user.id}>
                  <View style={styles.rank_position} >
                    <Text style={styles.rank_heading}>{user.rank}</Text>
                    <Text style={styles.rank_name}>{user.first_name}{user.last_name}</Text>
                    <Text style={styles.rank_paragragh}>{user.discription}</Text>
                  </View>
                </View>
              )
            })}
          </View>
        </View>
        <View>
        </View>
        {/* <StatusBar style="auto" /> */}
          {/* footer */}
          <View style={styles.footer}>
          <Image source={require('./assets/images/email.jpg')} ></Image>
          <View style={styles.footer_wrapper_email}>
            <Text style={styles.footer_email}>ارسال ایمیل به ما</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  wrapper: {
    fontFamily:"Dana",
    backgroundColor: "rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative"

  },

  wrapper_header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 375,
    height: "30%"

  },
  wrapper_about_us: {
    display: "flex",
    width: 375,
    flexDirection: "row"

  }
  ,
  text_about_us: {
    fontSize: 16,
    color: "#4b4453",
    width: 350,
    textAlign: "center"

  },
  header_arrow: {
    width: 20,
    height: 20,
    position: "relative",
    left: -10
  },

  image_header: {
    width: 350,
    height: 200
  },

  wrapper_goal: {
    width: 375,
    height: 168,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#9ad0e7",
    borderRadius: 7
  },
  heading_goal: {
    fontSize: 15,
    color: "#000000",
    textAlign: "center",
    fontWeight: '500'
  },
  paragraph_goal: {
    textAlign: "right",
    width: 343,
    height: 686,
    fontSize: 15,
    color: "#6e6e6e"
  },
  members: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },

  rank_position: {
    width: 219,
    height: 177,
    borderRadius: 7,
    backgroundColor: "#fcfcfc",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#b9b9b9",
    textAlign: "right",
    display: "flex",
    flexDirection: "column",


  },
  rank_heading: {
    fontSize: 15,
    color: "#000000",
    fontWeight: '500',
  },
  rank_name: {
    fontSize: 15,
    color: "#000000",
    fontWeight: '500',
  },
  rank_discription: {
    width: 187,
    height: 374,
    fontSize: 14,
    color: "#6e6e6e",
    fontWeight: "bold"
  },
  member_img: {
    width: 143,
    height: 175,
    borderRadius: 40,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#9ad0e7"

  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-evenly'
  },

  footer_wrapper_email: {
    width: 215,
    height: 48,
    borderRadius: 7,
    backgroundColor: "#fcfcfc",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#b9b9b9"
   
  },
  footer_email: {
    width: 183,
    height: 366,
    fontSize: 14,
    color: "#6e6e6e",
    fontWeight: "bold",
    textAlign: "center"

  }

});
