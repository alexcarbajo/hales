import React from 'react';
import Header from '../Header/Header';

function Hero({ loading, tasks, onPinTask, onArchiveTask }) {
    const events = {
        onPinTask,
        onArchiveTask,
    };

    const LoadingRow = (
        <>
            Loading cool state
        </>
    );


    if (loading) {
        return (
            <>
                {LoadingRow}
                {LoadingRow}
            </>
        );
    }

    if (tasks.length === 0) {
        return <>empty</>;
    }

    return (
        <>
            {tasks.map(task => <Header key={task.id} task={task} {...events} />)}
        </>
    );
}

export default Hero;
