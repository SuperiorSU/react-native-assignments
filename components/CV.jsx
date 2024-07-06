import { View, Text } from 'react-native'
import React from 'react'

const CV = () => {
  return (
    <ScrollView>
      <View style={{backgroundColor: 'white', padding: 10}}>
        <Text
          style={{
            textAlign: 'center',
            paddingTop: 20,
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black',
          }}>
          KUMAR SUJAL
        </Text>

        <View
          style={{
            height: 1,
            backgroundColor: 'black',
            width: '95%',
            margin: 'auto',
          }}></View>
        <View>
          <Header text="SUMMARY" />
          <Points
            points={[
              'Software developer with extensive experience in front-end and full-stack development, actively participating in hackathons and coding competitions. Proficient numerous technologies, with various certifications. Committed to teaching and volunteering in tech communities, with a strong foundation in problem-solving and programming.'
            ]}
          />
        </View>
        <View>
          <Header text="EDUCATION" />
          <Points
            points={[
              'Matriculate via D.A.V. Public School hehal, Ranchi, Jharkhand - 834005 (91.6%)',
              'Senior Secondary via D.A.V. Public School hehal, Ranchi, Jharkhand - 834005 (90.6%)',
              'University - PTU | College - SVIET',
              'B.tech in Computer Science and Engineering (ongoing)',
            ]}
          />
        </View>
        <View>
          <Header text="CERIFICATION" />
          <Points
            points={[
              "GitHub Foundation (GitHub)",
              "React.js (Coding Ninjas)",
              "SQL Basics (Hacker Rank)",
              "C Programming (Coding Ninjas)",
              "Python Programming (Coding Ninjas)"
          ]}
          />
        </View>
        <View>
          <Header text="PROJECTS" />
          <Points
            points={[
              "CodeQuest Hackathon Web App",
              "SVIET College (Frontend)",
              "Alliance International School (Frontend)",
              "Blissful Event Solution (Frontend)",
              "The Uniques Community (Frontend)",
              "EmpowerMend (Google Solution Challenge 2023) (Frontend)",
              "Yummy Restaurant Site Clone (Frontend)",
              "Notice.net (Fullstack)",
              "AlertWise (React Native Application)",
              "Project Prototype (Fullstack)",
              "Gif Generator",
              "Blog App (Fullstack)",
              "Bagisto E-commerce Website Clone (Fullstack)"
          ]}
          />
        </View>
        <View>
          <Header text="EXTRACURRICULARS" />
          <Points
            points={[
              "Coding and Problem Solving (Won numerous inter-college coding competitions)",
              "Active participation in various Hackathons and a National Level Hackathon",
              "Active participation and volunteering in GDSC and GDG Events",
              "Taught over 600 school students about tech and modern innovation via workshops and seminars",
              "Proficiency in Adobe Tools and Canva",
              "Volunteering and managing events as a core volunteer and team member"
          ]}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default CV