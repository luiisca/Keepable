import domHandler from "./scripts/domHandler.js";
import Layout from "./scripts/views/layout.js";
import NotesView from "./scripts/views/notes-view.js";

const App = domHandler("#root");
App.render(Layout);

const Main = domHandler(".js-main");
Main.render(NotesView);

export { Main };