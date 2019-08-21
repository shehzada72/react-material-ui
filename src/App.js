import React, {Component} from 'react';
import {Header, Footer} from "./layouts";
import Exercises from "./components/excercises";
import {muscles, exercises} from "./store";

class App extends Component {
    state = {
        exercises,
        category: '',
        exercise: ''
    };

    getExercisesByMuscles = () => {
        return Object.entries(
            this.state.exercises.reduce((exercises, exercise) => {
                const {muscles} = exercise;

                exercises[muscles] = exercises[muscles]
                    ? [...exercises[muscles], exercise]
                    : [exercise];

                return exercises;
            }, {})
        )
    };

    handleCategorySelect = category => {
        this.setState({category})
    };

    handleExerciseSelect = id => {
        this.setState((({exercises}) => ({
            exercise: exercises.find(exercise => exercise.id === id)
        })))
    };

    render() {
        const exercises = this.getExercisesByMuscles();
        const {category, exercise} = this.state;
        return (
            <>
                <Header/>
                <Exercises
                    exercises={exercises}
                    category={category}
                    onExerciseSelect={this.handleExerciseSelect}
                    exercise={exercise}
                />
                <Footer
                    category={category}
                    muscles={muscles}
                    onSelect={this.handleCategorySelect}
                />
            </>
        );
    }
}

export default App;