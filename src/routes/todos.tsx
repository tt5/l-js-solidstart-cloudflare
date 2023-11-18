import { For, Show, createResource } from "solid-js";
import { useRouteData, createRouteData } from "solid-start";
 
//type Todos = { name: string; house: string; }
 
export function routeData() {
  return createRouteData(async () => {
    const response = await fetch("https://tt15551.cc/todos");
    return await response.json() //as Student[];
  });
}
 
export default function Page() {
  const todos = useRouteData<typeof routeData>();
 
  return (
    <ul>
    <Show when={todos()}>
      <For each={todos().data}>
        {(todo) => <li>{todo.title}, {todo.done.toString()}</li>}
      </For>
      </Show>
    </ul>
  );
}
