import {Item} from './style'


function ItemList({title, description}){
  return (
    <Item>
      <strong>Título do Projeto: {title}</strong>
      <br/>
       <p>Descrição do Projeto: {description}</p>
    </Item>
  )
}

export {ItemList}