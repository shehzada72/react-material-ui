import React, {Component} from 'react';
import {Header, Footer} from "./layouts";
import Exercises from "./components/excercises";
import {muscles, exercises} from "./store";

class App extends Component {
    state = {
        exercises,
        category: '',
        exercise: '',
        editMode: false
    };

    getExercisesByMuscles = () => {
        const initExercises = muscles.reduce((exercises, category) => ({
            ...exercises,
            [category]: []
        }), {});

        return Object.entries(
            this.state.exercises.reduce((exercises, exercise) => {
                const {muscles} = exercise;

                exercises[muscles] = [...exercises[muscles], exercise];

                return exercises;
            }, initExercises)
        )
    };

    handleCategorySelect = category => {
        this.setState({category})
    };

    handleExerciseSelect = id => {
        this.setState((({exercises}) => ({
            exercise: exercises.find(exercise => exercise.id === id),
            editMode: false
        })))
    };

    onExerciseSubmit = exercise => {
        this.setState(({exercises}) => {
            let findExercise = exercises.find(ex => ex.id === exercise.id);

            if (findExercise) {
                exercises = exercises.filter(ex => ex.id !== exercise.id);
            }

            return ({
                exercises: [...exercises, exercise]
            })
        })
    };

    onExerciseDelete = id => {
        this.setState(({exercises}) => ({
            exercises: exercises.filter(ex => ex.id !== id),
            editMode: false
        }))
    };

    onExerciseEdit = id => {
        this.setState(({exercises}) => ({
            exercise: exercises.find(ex => ex.id === id),
            editMode: true
        }))
    };

    render() {
        const exercises = this.getExercisesByMuscles();
        const {category, exercise, editMode} = this.state;
        return (
            <>
                <Header
                    onExerciseSubmit={this.onExerciseSubmit}
                />
                <Exercises
                    onExerciseDelete={this.onExerciseDelete}
                    onExerciseEdit={this.onExerciseEdit}
                    exercises={exercises}
                    category={category}
                    onExerciseSelect={this.handleExerciseSelect}
                    exercise={exercise}
                    editMode={editMode}
                    onExerciseSubmit={this.onExerciseSubmit}
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
