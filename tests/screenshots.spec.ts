import { test, expect } from '@playwright/test';

test('title', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle(/Situational Judgement Test/);
});

test('link to demo page', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('link')).toMatchAriaSnapshot(`
    - link "Return to demo page":
      - /url: ../
    `);
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - main:
      - heading "Situational Judgement Test" [level=1]
      - heading "Instructions" [level=2]
      - paragraph:
        - text: Please select one of the buttons on the left to pick your
        - strong: best
        - text: (most effective) response, AND select one of the buttons on the right to pick your
        - strong: worst
        - text: (least effective) response.
      - paragraph: Pressing the same Best or Worst button a second time deselects your answer and resets your choices.
      - paragraph:
        - text: After selecting your answers, press the
        - strong: submit
        - text: button to submit your
        - emphasis: final
        - text: answer.
      - text: Progress:-
      - progressbar
      - separator
      - heading "Question 1" [level=2]
      - paragraph: You take a call from a customer praising the helpful service offered by a colleague in your team.
      - paragraph: "Do you:"
      - button "choice_A is best"
      - text: Tell your colleague about the feedback on a one-to-one basis.
      - button "choice_A is worst"
      - button "choice_B is best"
      - text: Inform your team leader and let them relay the praise personally.
      - button "choice_B is worst"
      - button "choice_C is best"
      - text: Wait until the team meeting tomorrow and announce the feedback to everyone.
      - button "choice_C is worst"
      - button "choice_D is best"
      - text: Email the whole company so that everyone hears about this great feedback.
      - button "choice_D is worst"
      - button "Submit" [disabled]
    - alert
    `);
  await page.getByRole('button', { name: 'choice_D is best' }).click();
  await page.getByRole('button', { name: 'choice_A is worst' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - main:
      - heading "Situational Judgement Test" [level=1]
      - heading "Instructions" [level=2]
      - paragraph:
        - text: Please select one of the buttons on the left to pick your
        - strong: best
        - text: (most effective) response, AND select one of the buttons on the right to pick your
        - strong: worst
        - text: (least effective) response.
      - paragraph: Pressing the same Best or Worst button a second time deselects your answer and resets your choices.
      - paragraph:
        - text: After selecting your answers, press the
        - strong: submit
        - text: button to submit your
        - emphasis: final
        - text: answer.
      - text: Progress:-
      - progressbar
      - separator
      - heading "Question 2" [level=2]
      - paragraph: You are working on a task for a senior manager that is due to be completed today. Another colleague asks you to update a spreadsheet urgently. This will take three hours. However, you only have an hour spare today if you are going to complete the task for the senior manager by the deadline. Therefore, updating the spreadsheet will delay the task you are working on for the senior manager.
      - paragraph: "Do you:"
      - button "choice_A is best"
      - text: Ask your colleague to contact your manager as you are already busy on another task and perhaps your manager could task someone else to help.
      - button "choice_A is worst"
      - button "choice_B is best"
      - text: Update the spreadsheet for your colleague as it is urgent and then move to the task for the senior manager as soon as you finish.
      - button "choice_B is worst"
      - button "choice_C is best"
      - text: Talk to the senior manager and ask if you can extend their deadline as you need to complete an urgent task for another colleague.
      - button "choice_C is worst"
      - button "choice_D is best"
      - text: Explain to your colleague that you can help, but you only have an hour available today so you will not be able to complete all of the updates today.
      - button "choice_D is worst"
      - button "Submit" [disabled]
    - alert
    `);
  await page.getByRole('button', { name: 'choice_B is best' }).click();
  await page.getByRole('button', { name: 'choice_C is worst' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('html')).toMatchAriaSnapshot(`
    - document:
      - main:
        - heading "Situational Judgement Test" [level=1]
        - heading "Instructions" [level=2]
        - paragraph:
          - text: Please select one of the buttons on the left to pick your
          - strong: best
          - text: (most effective) response, AND select one of the buttons on the right to pick your
          - strong: worst
          - text: (least effective) response.
        - paragraph: Pressing the same Best or Worst button a second time deselects your answer and resets your choices.
        - paragraph:
          - text: After selecting your answers, press the
          - strong: submit
          - text: button to submit your
          - emphasis: final
          - text: answer.
        - text: Progress:-
        - progressbar
        - separator
        - heading "Question 3" [level=2]
        - paragraph: You take a call from a different energy supplier, who explains they are opening a new account for a customer and they need the final meter readings from the account the customer currently has with you.
        - paragraph: "Do you:"
        - button "choice_A is best"
        - text: Give them the most recent meter readings from the account and pass the account details to the appropriate team to close.
        - button "choice_A is worst"
        - button "choice_B is best"
        - text: Offer to call them back, then phone the customer to verify the final meter readings.
        - button "choice_B is worst"
        - button "choice_C is best"
        - text: Give them the most recent meter readings and phone the customer to find out why they are moving suppliers.
        - button "choice_C is worst"
        - button "choice_D is best"
        - text: Offer to call them back, phone the customer to verify the final readings and ask them why they are moving suppliers.
        - button "choice_D is worst"
        - button "Submit" [disabled]
      - alert
    `);
  await page.getByRole('button', { name: 'choice_A is best' }).click();
  await page.getByRole('button', { name: 'choice_D is worst' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('html')).toMatchAriaSnapshot(`
    - document:
      - main:
        - heading "Situational Judgement Test" [level=1]
        - heading "Instructions" [level=2]
        - paragraph:
          - text: Please select one of the buttons on the left to pick your
          - strong: best
          - text: (most effective) response, AND select one of the buttons on the right to pick your
          - strong: worst
          - text: (least effective) response.
        - paragraph: Pressing the same Best or Worst button a second time deselects your answer and resets your choices.
        - paragraph:
          - text: After selecting your answers, press the
          - strong: submit
          - text: button to submit your
          - emphasis: final
          - text: answer.
        - text: Progress:-
        - progressbar
        - separator
        - heading "Question 4" [level=2]
        - paragraph: You are working on a strategy project. You have informal daily meetings with your supportive line manager. Three months in, your manager is suddenly reassigned, leaving you to finish the project on your own. Your only support is the department manager who can only meet with you once a week and is not familiar with the project. Working on your own feels very demotivating.
        - paragraph: "Do you:"
        - button "choice_A is best"
        - text: Ask the department manager to identify another line manager who can give you the support you need on the project to complete it.
        - button "choice_A is worst"
        - button "choice_B is best"
        - text: Identify the work remaining and ask the department manager to schedule time to help you on key points and keep you on track with deadlines.
        - button "choice_B is worst"
        - button "choice_C is best"
        - text: Keep yourself motivated on the project by focusing on the task at hand and use your weekly meetings with the department manager to discuss issues you are unable to resolve.
        - button "choice_C is worst"
        - button "choice_D is best"
        - text: Keep your weekly meetings with the department manager focused on your task list and find support from colleagues sitting near you in helping you continue with this role.
        - button "choice_D is worst"
        - button "Submit" [disabled]
      - alert
    `);
  await page.getByRole('button', { name: 'choice_D is best' }).click();
  await page.getByRole('button', { name: 'choice_B is worst' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - alert
    - main:
      - heading "Congratulations" [level=1]
      - paragraph: You successfully finished this demo test.
      - paragraph: You achieved Unclassified.
      - paragraph: Thank you and goodbye.
      - paragraph:
        - link "Return to demo page":
          - /url: ../
    `);
});