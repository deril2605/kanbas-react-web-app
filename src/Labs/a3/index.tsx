import JavaScript from './JavaScript'
import Classes from "./Classes";
import PathParameters from './PathParameters/PathParameters';
import Styles from './Styles';
import ConditionalOutput from "./ConditionalOutput";
import Highlight from './Highlight';
import Add from './Add';
import TodoItem from './Todos/TodoItem';
import TodoList from './Todos/TodoList';

function Assignment3() {
    return (
        <div className="container">
            <h1>Assignment 3</h1>
            <TodoList />
            <hr />
            <TodoItem />
            <hr />
            <Add a={3} b={4} />
            <hr />
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <hr />
            <ConditionalOutput />
            <hr />
            <Styles />
            <hr />
            <Classes />
            <hr />
            <JavaScript />
            <hr />
            <PathParameters />
        </div>
    );
}
export default Assignment3;