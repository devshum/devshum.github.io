import Question from './Question';

export const createQuestions = () => {
    const allQuestions = [];

    const q1 = new Question(
        1, // ID
        'Is HTML technically a programming language?', // Quesiton
        ['Yes', 'No'], // Answers
        1, // Correct one
        ['| HTML is technically a markup language', 'What is HTML?'] // State | Tip
    ); 

    const q2 = new Question(
        2, // ID
        'The head element may contain:', // Question
        ['The website title, images, information for search engines and more.', // Answer 1
        'The website title, images, information for search engines and more.', // Answer 2
        'Paragraphs, CSS styles, information for search engines and more.', // Answer 3
        'The website title, CSS styles, information for search engines and more.'], // Answer 4
        3, // Correct one
        ['', 'The structure of an HTML document(head)'] // Tips
    ); 

    const q3 = new Question(
        3, // ID
        'The body element may contain:', // Question
        ['Text, images, lists and others.', // Answer 1
        'Title, text, links, images and others.', // Answer 2
        'Text, images and lists.'], // Answer 3
        0, // Correct one
        ['| It can be text, images, lists, videos, and so much more.', 'The structure of an HTML document(body)'] // Tips
    ); 

    const q4 = new Question(
        4, // ID
        'How many different heading (such as h1) elements are there?', // Question
        ['3', '4', '5', '6'], // Answers 
        3, // Correct one
        ['', 'Fill the structure'] // Tips
    ); 

    const q5 = new Question(
        5, // ID
        'What is an attribute?', // Question
        ['Additional information about an element.', // Answer 1
        'A special HTML element for displaying attributes on a website.', // Answer 2
        'Additional information about a website.'], // Answer 3
        0, // Correct one
        ['', 'Attributes'] // Tips
    );  

    const q6 = new Question(
        6, // ID
        'What is the attribute for indicating the image path in an <img> element?', // Question
        ['alt', 'src', 'img'], // Answers
        1, // Correct one
        ['', 'Images'] // Tips
    ); 

    const q7 = new Question(
        7, // ID
        'What is an external link?', // Question
        ['A link that opens in a new tab.', // Answer 1
        'A link to an image.', // Answer 2
        'A link to a website that isn NOT part of our project.'], // Answer 3
        2, // Correct one
        ['', 'Links'] // Tips
    );

    const q8 = new Question(
        8, // ID
        'Do older HTML files work on newer browsers?', // Question
        ['Yes', 'No'], // Answers
        0, // Correct one
        ['| Older HTML files are compliant to the HTML standard', 'Browser support'] // Tips
    );

    const q9 = new Question(
        9, // ID
        'Who is making the Web standards?', // Question
        ['The World Wide Web Consortium', 'Google', 'Microsoft', 'Mozilla'], // Answers
        0, // Correct one
        ['', 'Web standarts'] // Tips
    );

    const q10 = new Question(
        10, // ID
        'Which character is used to indicate an end tag?', // Question
        ['*', '<', '>', '/'], // Answers
        3, // Correct one
        ['', 'Html tags'] // Tips
    );

    for(let i = 1; i <= 10; i++) {
        allQuestions.push(eval('q' + i));
    }

    return allQuestions;
}

export const updateData = (arr, question) => {
    arr.push(question);
};
