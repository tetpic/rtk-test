import { mockServer } from "../constants"

//можно было сделать через axios, но fetch мне более привычен и в данном случае кода меньше
//получаем объект с данными таблицы
export async function getTable() {
    let response = await fetch(mockServer+'table')    
    let result= response.ok?response.json():{error: "Ошибка загрузки данных"}
    return result
}

export async function getFlow() {
  let response = await fetch(mockServer+'flow')    
  let result= response.ok?response.json():{error: "Ошибка загрузки данных"}
  return result
}
