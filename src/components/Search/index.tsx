import Button from './Button'
import Input from './Input'
import styles from './Search.module.css'

const Search = () => {
  return (
    <div className={styles.search}>
      <form action="/">
        <Input placeholder="Digite o que você procura"/>
        <Button 
          label="Buscar"
        />
    </form>
  </div>
  )
}

export default Search