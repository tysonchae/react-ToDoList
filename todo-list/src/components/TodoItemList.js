import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
      return this.props.todos !== nextProps.todos;
    }

    render() {

      const { todos, onToggle, onRemove } = this.props;

      const todoList = todos.map(
         ({id, text, checked}) => (
           <TodoItem
             id={id}
             text={text}
             checked={checked}
             onToggle={onToggle}
             onRemove={onRemove}
             key={id}
           />
         )
       );

    //  이런 식으로도 할 수 있습니다. 이렇게 {...todo}라고 넣어주면, 내부의 값들이 모두 자동으로 props로 설정이 됩니다.
    //    const todoList = todos.map(
    //   (todo) => (
    //     <TodoItem
    //       {...todo}
    //       onToggle={onToggle}
    //       onRemove={onRemove}
    //       key={todo.id}
    //     />
    //   )
    // );

      return (
         <div>
           {todoList}
         </div>
      );
    }
}

export default TodoItemList;
