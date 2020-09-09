import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import './style.css'

class SimpleForm extends Component {
  render() {
    return (
      <>
      <h5>Welcome to Convenienc Support Team 
      <a className="btn ml-2 chatbotBtn" href=" https://bit.ly/39lrV6T">
            BACK
        </a>
      </h5>

      <div className="chat"> 
      <ChatBot className="chatbot" style={{color: "blue"}}
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! What question would you like to ask me?',
            trigger: 'question'
            // trigger: 'gender',
          },
          {
            id : 'question',
            options: [
                { value: 'How do I use this app?', label: 'How do I use this app?', trigger: '4' },
                { value: 'how do search for I store', label: 'How do I search for I store', trigger: '5' },
                { value: 'how do I contact the convenienC team?', label: 'How do I contact the convenienC team?', trigger: '6' },
              ]
          },
          {
            id: '4',
            message: 'Use the search bar to filter information',
            trigger: '7'
          },
          {
            id: '5',
            message: 'You can search using zipcode, product item, or name of the store',
            trigger: '7',
          },
          {
            id: '6',
            message: 'Go to the about page and fill out the form to send email',
            trigger: '7',
          },
        
          {
            id: '7',
            message: 'Was this helpful?',
            trigger: 'answer',
          },
          {
            id: 'answer',
            options: [
                { value: 'yes', label: 'Yes?', trigger: '8' },
                { value: 'no', label: 'No', trigger: '9' },
              ]
          },
          {
            id: '8',
            message: 'Thank you for using ConvenienC, have a nice day!!',
            end: true,
          },
          {
            id: '9',
            message: 'For further assistance, please contact us at convinienc@gmail.com',
            end: true,
          }
        ]}
      />
      </div>
      </>
    );
  }
}

export default SimpleForm;