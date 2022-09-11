import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/actions/todosAction';

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <section className="">
      <h1>Todos</h1>
      {isLoading && <h3>Loading for the last time..</h3>}
      {error && <h3>{error.message}</h3>}

      <div>
        {todos &&
          todos.map((todo) => {
            const { id, title } = todo;
            return (
              <article key={id}>
                <h4>{id}</h4>
                <h4>{title}</h4>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default Todos;
