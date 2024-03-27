'use client'
import { initApp } from "@/main";
import FullList from "@/model/FullList";
import ListItem from "@/model/ListItem";
import ListTemplate from "@/templates/ListTemplate";
import { init } from "next/dist/compiled/webpack/webpack";

export default function Home() {
  const fullList = FullList.instance
    const template = ListTemplate.instance

    const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement
    itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
        event.preventDefault()

        const input = document.getElementById("newItem") as HTMLInputElement
        const newEntryText: string = input.value.trim()
        if(!newEntryText.length) return

        const itemId: number = fullList.list.length ? parseInt(fullList.list[fullList.list.length - 1].id)+1 : 1

        const newItem = new ListItem(itemId.toString(), newEntryText)

        fullList.addItem(newItem)

        template.render(fullList)
    })

    const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement

    clearItems.addEventListener('click', (): void =>{
        fullList.clearList()
        template.clear()
    })

    fullList.load()
    template.render(fullList)

  return (
    <main>
      <section className="newItemEntry">
        <form className="newItemEntry__form" id="itemEntryForm">
          <label htmlFor="newItem" className="offscreen">
            Enter a new to do item
          </label>
          <input className="newItemEntry__input" id="newItem" type="text" data-maxlength="40" autoComplete="off" placeholder="Add item" />
          <button type="button" id="addItem" className="button newItemEntry__button" title="Add new item" aria-label="Add new item to list">
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
      
      </ul>
    </section>
    </main>
  );
}

document.addEventListener("DOMContentLoaded", initApp)