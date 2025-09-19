# React + Vite
Grocery List App

=====================

A simple React application for creating and managing a grocery shopping list.
You can add, mark, and delete items easily.

**Description**

This app consists of two main components:

App.jsx - the main application component with header and images.

GroceryList.jsx - the grocery list component with input field and action buttons.

**Features:**

Add new grocery items

Click on an item to mark it as purchased (crossed out)

Delete all items from the list

**App.jsx**

Functional Component – function App() is a function component.

React Hooks – useState is imported and used to create state variables inside a function component.

JSX – The return statement contains HTML-like JSX markup.

Component Composition – It imports and renders another component (<GroceryList />) inside App.

**GroceryList.jsx**

The app demonstrates both React paradigms at once:

1) Functional component + Hooks (App.jsx)

React Hooks – useState is imported and used to create state variables inside a function component.
JSX – The return statement contains HTML-like JSX markup
Component Composition – It imports and renders another component (<GroceryList />) inside App.

3) Class component + State/lifecycle style (GroceryList.jsx)

Class Component – export class GroceryList extends Component is a class-based React component.

Component State – this.state holds userInput and groceryList.

Event Handling – Methods handle input changes, form submit, adding/deleting items, and clicking to cross out items.

Updating State – this.setState() is used to update the component’s state when the user types, adds, or deletes.

JSX – Render method returns JSX with elements, attributes, and event handlers.

Conditional Rendering / Lists – It uses .map() to dynamically render a list of <li> elements based on this.state.groceryList.

Props / Imports – Imports an image (check.png) and uses it inside JSX.


**Installation and Running Locally**

Clone the repository:

git clone 


Navigate to the project folder:

cd grocery-list-app


Install dependencies:

npm install


Start the development server:

npm run dev

**Project Structure**
- App.jsx:	Main app component (header, images, GroceryList)
- GroceryList.jsx:	Grocery list component (input, buttons, list)
- App.css:	App styling
- assets/check.png:	Check icon for items
- assets/shopping.jpg:	Shopping image
- assets/man.jpg:	User image


**How to Use**

Enter an item name in the input field.

Click ADD to add the item to the list.

Click an item to cross it out (mark as purchased).

Click DELETE to clear the entire list.

<img width="400" height="500" alt="image" src="https://github.com/user-attachments/assets/e469f915-8bd8-4cd0-b17a-925aaff02f4f" />

**Author**
Elena B
