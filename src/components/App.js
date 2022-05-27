import React, { Component } from 'react';
import FeedbackOptions from './Feedback'
import Statistics from './Statistics';
import Section from './Section';
import NotificationMessage from './Statistics';



class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };


    onLeaveFeedback = e => {
        return this.setState({ [e]: this.state[e] + 1 });
    };



    countTotalFeedback = () => {
        const total = Object.values(this.state).reduce((previousValue, number) => {
            return previousValue + number;
        }, 0);

        return total;

    }

    countPositiveFeedbackPercentage = () => {
        const positiveFeedback = Math.round(
            ((this.state.good) / this.countTotalFeedback()) * 100);
        return positiveFeedback;

    }
    render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        return (
            <>

                <Section
                    title='Please leave feedback'>

                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={this.onLeaveFeedback}
                    />
                </Section>


                <Section title="Statistics">
                    {this.countTotalFeedback() > 0 ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        <NotificationMessage message="There is no feedback" />
                    )}

                </Section>
            </>
        );

    }

};



export default App;


