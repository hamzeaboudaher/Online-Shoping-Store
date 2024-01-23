import { useReducer } from "react";
import Data from "./DataContext";
// Funktion zum Erstellen des Anfangszustands
function createInitialState(username) {
  const addProduct = [];
  for (let i = 0; i < 1; i++) {
    addProduct.push({
      id: i,
      //   text: username + "Beispiel" + (i + 1),
    });
  }
  return {
    draft: "",
    todos: addProduct,
  };
}

// Reducer-Funktion
function reducer(state, action) {
  switch (action.type) {
    case "changed_draft":
      return {
        ...state,
        draft: action.nextDraft,
      };
    case "added_product":
      if (state.draft === "") {
        return state; // Verhindert das Hinzufügen leerer Todos
      }
      return {
        draft: "",
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: state.draft,
          },
        ],
      };
    case "removed_product": {
      const newTodos = state.todos.slice(0, -1);
      return {
        ...state,
        todos: newTodos,
      };
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
}

// TodoList-Komponente
export default function TodoList({ username }) {
  const [state, dispatch] = useReducer(reducer, username, createInitialState);

  return (
    <>
      <div style={{ width: "400px", border: "2px solid black" }}>
        {" "}
        <input
          value={state.draft}
          onChange={(e) =>
            dispatch({ type: "changed_draft", nextDraft: e.target.value })
          }
          style={{ marginTop: "200px", border: "2px solid blue" }}
        />
        <div>
          {" "}
          <button onClick={() => dispatch({ type: "added_product" })}>
            Add
          </button>
          <button
            style={{ marginLeft: "50px" }}
            onClick={() => dispatch({ type: "removed_product" })}
          >
            Remove
          </button>
        </div>
        <ul>
          {state.todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
