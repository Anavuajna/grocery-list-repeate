import { Component } from "react";
import check from './bought.png' // импортируем изображение

export class GroceryList extends Component {
    state = { // прописываем состояние
        userInput: '', // то, что будет вводить пользователь
        groceryList: [] // значение того, что будет введено пользователем, будет записано в массив groceryList[]
    }

    onChangeEvent(e) { // функция onChangeEvent от события e - в данном случае нажатие кнопки
        this.setState({userInput: e}) // изменение состояния userInput от e (каждый раз, когда меняется значение e.target.value, меняется состояние свойства userInput, от события e (нажатие на клавишу) )
        console.log(e)
    }

    addItem(input) { // создаем функцию, которая будет вызываться по кнопке "добавить"
        if (input === '') { // убираем возможность добавлять пустую строку в список - если значение
            alert('Введите текст')
        }
        else {
        let listArray = this.state.groceryList; // создаем переменную, к которой приравниваем массив groceryList - тут будут храниться данные, которые ввел пользователь
        listArray.push(input); // методом push добавляем элементы (покупки) в массив
        this.setState({groceryList: listArray, userInput: ''}) // меняем состояние groceryList, и опустошаем поле userInput
       }
    }

    crossedWord(event) { // функция от события event - в данном случае клик onClick
        const li = event.target; // константа, которая отражает: как только произойдет клик на тег <li> (Название константы const может быть любое, не обязательно li)
        li.classList.toggle('crossed'); // на элемент поставится/снимется класс 'crossed' методом toggle. Сам класс прописываем в App.css
    }

    // 1 вариант опустошить массив (удалить список) - как я сделала
    // deleteItems() {
    //     this.setState({groceryList: []});
    // }

     // 2 вариант опустошить массив - как в уроке
     deleteItems() {
        let listArray = this.state.groceryList; // еще раз (тк предыдущая listArray не видется в этом блоке, т.к. это переменная let - локальная переменная) создаем переменную, к которой приравниваем массив groceryList
        listArray = []; // опусташаем массив приравнивая его к пустому массиву
        this.setState({groceryList: listArray}) // меняем состояние groceryList на пустой listArray
    }

    onFormSubmit(e) { // метод, вызывающийся при событии (e)
        e.preventDefault(); // чтобы при отправке формы страница не перезагружалась, прописываем e.preventDefault()
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}> {/*оборачиваем весь код ниже в тег form. Прописываем обработчик событий onSubmit. Через this привязываем метод onFormSubmit, который пропишем выше переде render. onSubmit отправляет форму */}
                <div className="container">
                    <input type='text'
                    placeholder="Что вы хотите купить?"
                    //onChange={this.onChangeEvent}  // onChangeEvent выполняется при каждом нажатии клавиши, это приводит к обновлению состояния React, поэтому отображаемое значение будет обновляться по мере ввода данных пользователем.
                    onChange={(e) => {this.onChangeEvent(e.target.value)}} // сразу прописываем реагирование (e) на изменения состояния this и получение значения target.value из того, что ввел пользователь в <input>
                    value={this.state.userInput}/> {/* значение value берется из того, что вводит пользователь в input через свойство userInput */}
                </div>
                    <div className="container">
                        <button className="btn add" onClick={() => this.addItem(this.state.userInput)}>Добавить</button> {/* onClick по клику будет вызываться метод addItem (прописан выше), который берет значение из this.state.userInput */}
                    </div>
                <ul> {/* в ul будет сохранен список */}
                    {this.state.groceryList.map((item, index) => ( // с помощью this.state.groceryList получаем доступ ко всем элементам списка (тому, что вводит пользователь), с помощью метода map() добавляем каждую позицию в массив. Метод map() принимает до 3х аргументов. item - каждый элемент, index - порядковый номер этого элемента. Чтобы не было ошибки, обязательно прописываем эти 2 аргумента!
                        <li onClick={this.crossedWord} key={index}>
                            <img src={check} alt='check' width='40px'/> {/* добавляем img перед {item} */}
                            {item}
                            </li> // каждый элемент item будет отображет в li через key={index}. Название index может быть заменено на любое другое (i итд), но атрибут key может называться только "key". 
                        // onClick={this.crossedWord} - при клике будет вызван метод crossedWord - прописываем его перед render()
                    ))}
                    
                </ul>
                <div className="container">
                    <button className="btn delete" onClick={() => this.deleteItems()}>Удалить список</button> {/*при нажатии на кнопку вызовется функция deleteItems. Саму функцию прописываем перед render */}
                </div>
                </form>
            </div>
        )
    }
}