import { Exam } from "./jstTypes";

const exam: Exam = {
  title: "Generalist",
  questionsArr: [
    {
      scenario: "You take a call from a customer praising the helpful service offered by a colleague in your team.",
      choosings: {
        choice_A: "Tell your colleague about the feedback on a one-to-one basis.",
        choice_B: "Inform your team leader and let them relay the praise personally.",
        choice_C: "Wait until the team meeting tomorrow and announce the feedback to everyone.",
        choice_D: "Email the whole company so that everyone hears about this great feedback."
      },
      rubricBest: 'choice_A',
      rubricWorst: 'choice_D'
    },
    {
      scenario:
        "You are working on a task for a senior manager that is due to be completed today. Another colleague asks you to update a spreadsheet urgently. This will take three hours. However, you only have an hour spare today if you are going to complete the task for the senior manager by the deadline. Therefore, updating the spreadsheet will delay the task you are working on for the senior manager.",
      choosings: {
        choice_A:
          "Ask your colleague to contact your manager as you are already busy on another task and perhaps your manager could task someone else to help.",
        choice_B:
          "Update the spreadsheet for your colleague as it is urgent and then move to the task for the senior manager as soon as you finish.",
        choice_C:
          "Talk to the senior manager and ask if you can extend their deadline as you need to complete an urgent task for another colleague.",
        choice_D:
          "Explain to your colleague that you can help, but you only have an hour available today so you will not be able to complete all of the updates today."
      },
      rubricBest: 'choice_C',
      rubricWorst: 'choice_B'
    },
    {
      scenario: "You take a call from a different energy supplier, who explains they are opening a new account for a customer and they need the final meter readings from the account the customer currently has with you.",
      choosings: {
        choice_A:
          "Give them the most recent meter readings from the account and pass the account details to the appropriate team to close.",
        choice_B:
          "Offer to call them back, then phone the customer to verify the final meter readings.",
        choice_C:
          "Give them the most recent meter readings and phone the customer to find out why they are moving suppliers.",
        choice_D:
          "Offer to call them back, phone the customer to verify the final readings and ask them why they are moving suppliers."
      },
      rubricBest: 'choice_D',
      rubricWorst: 'choice_A'
    },
    {
      scenario:
        "You are working on a strategy project. You have informal daily meetings with your supportive line manager. Three months in, your manager is suddenly reassigned, leaving you to finish the project on your own. Your only support is the department manager who can only meet with you once a week and is not familiar with the project. Working on your own feels very demotivating.",
      choosings: {
        choice_A:
          "Ask the department manager to identify another line manager who can give you the support you need on the project to complete it.",
        choice_B:
          "Identify the work remaining and ask the department manager to schedule time to help you on key points and keep you on track with deadlines.",
        choice_C:
          "Keep yourself motivated on the project by focusing on the task at hand and use your weekly meetings with the department manager to discuss issues you are unable to resolve.",
        choice_D:
          "Keep your weekly meetings with the department manager focused on your task list and find support from colleagues sitting near you in helping you continue with this role."
      },
      rubricBest: 'choice_B',
      rubricWorst: 'choice_D'
    },
  ]
}

export default exam;

// Rubric summary

// Q1  rubricBest: 'choice_A',
//     rubricWorst: 'choice_D'

// Q2  rubricBest: 'choice_C',
//     rubricWorst: 'choice_B'

// Q3  rubricBest: 'choice_D',
//     rubricWorst: 'choice_A'

// Q4  rubricBest: 'choice_B',
//     rubricWorst: 'choice_D'