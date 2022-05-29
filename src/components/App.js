import { useState } from 'react';
import FeedbackOptions from './Feedback'
import Statistics from './Statistics';
import Section from './Section';
import NotificationMessage from './Statistics';

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const options = { good, neutral, bad };

    const objValues = options => {
        return Object.keys(options);
    };

    const onLeaveFeedback = event => {
        switch (event.target.name) {
            case 'good':
                setGood(good + 1);
                break;
            case 'neutral':
                setNeutral(neutral + 1);
                break;
            case 'bad':
                setBad(bad + 1);
                break;

            default:
                break;
        }
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        return Math.round((good / (good + neutral + bad)) * 100);
    };

    return <>

        <Section
            title='Please leave feedback'>

            <FeedbackOptions
                options={objValues(options)}
                onLeaveFeedback={onLeaveFeedback}
            />
        </Section>


        <Section title="Statistics">
            {countTotalFeedback() > 0 ? (
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                />
            ) : (
                <NotificationMessage message="There is no feedback" />
            )}

        </Section>
    </>


}



// class App extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     };


// onLeaveFeedback = e => {
//     return this.setState({ [e]: this.state[e] + 1 });
// };



// countTotalFeedback = () => {
//     const total = Object.values(this.state).reduce((previousValue, number) => {
//         return previousValue + number;
//     }, 0);

//     return total;

// }

// countPositiveFeedbackPercentage = () => {
//     const positiveFeedback = Math.round(
//         ((this.state.good) / this.countTotalFeedback()) * 100);
//     return positiveFeedback;

// }
// render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
// return (
// <>

//     <Section
//         title='Please leave feedback'>

//         <FeedbackOptions
//             options={options}
//             onLeaveFeedback={onLeaveFeedback}
//         />
//     </Section>


//     <Section title="Statistics">
//         {countTotalFeedback() > 0 ? (
//             <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={countTotalFeedback()}
//                 positivePercentage={countPositiveFeedbackPercentage()}
//             />
//         ) : (
//             <NotificationMessage message="There is no feedback" />
//         )}

//     </Section>
// </>
//     );

// }

// };



export default App;


