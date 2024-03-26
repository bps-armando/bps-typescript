import FullList from "../FullList";

interface DOMList{
    ul: HTMLUListElement,
    clear(): void,
    render(FullList: FullList): void
}

export default class ListTemplate implements DOMList{
    ul: HTMLUListElement
    private constructor(){
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }
    
    clear(): void{
        this.ul.innerHTML = ''
    }

    render(fullList: FullList): void{
        this.clear()
        fullList.list.forEach(item => {
            const li = document.createElement("li") as HTMLLIElement
            li.className = "item"

            const check = document.createElement("input") as HTMLInputElement
            check.type = "checkbox"
            check.id = item.id
            check.tabIndex = 0
            check.checked = item.checked
            li.append(check)
            check.addEventListener('change', () => {
                item.checked = !item.checked
                fullList.save()
                //4:31:51
            })
        })
    }
}