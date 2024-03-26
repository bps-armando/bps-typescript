import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="newItemEntry">
      <h2>New Item Entry</h2>
      <form className="newItemEntry__form" id="itemEntryForm">
      <label form="newItem" className="offscreen">Enter a new to do item</label>
      <input className="newItemEntry__input" id="newItem" type="text" data-maxLength="40" autoComplete="off"
          placeholder="Add item" />
        <button id="addItem" className="button newItemEntry__button" title="Add new item" aria-label="Add new item to list">
          +
        </button>
      </form>
      </section>

      <section className="listContainer">
        <header className="listTitle">
        <h2 id="listName">List</h2>
        <button id="clearItemsButton" className="button listTitle__button" title="Clear the list"
          aria-label="Remove all items from the list">
          Clear
        </button>
        </header>
        <hr />
        <ul id="listItems">
        {/* <li class="item">
                    <input type="checkbox" id="1">
                    <label for="1">eat</label>
                    <button class="button">X</button>
                </li>
                <li class="item">
                    <input type="checkbox" id="2">
                    <label for="2">sleep</label>
                    <button class="button">X</button>
                </li>
                <li class="item">
                    <input type="checkbox" id="3">
                    <label for="3">code</label>
                    <button class="button">X</button>
                </li> */}
      </ul>
      </section>

    </main>
  );
}
