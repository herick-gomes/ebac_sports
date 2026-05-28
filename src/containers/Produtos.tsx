import { useDispatch, useSelector } from 'react-redux'

import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { adicionar } from '../store/reducers/carrinho'
import { favoritar } from '../store/reducers/favoritos'
import { RootReducer } from '../store'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
}

const ProdutosComponent = ({ produtos }: Props) => {
  const dispatch = useDispatch()

  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={(produto) => dispatch(favoritar(produto))}
            aoComprar={(produto) => dispatch(adicionar(produto))}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
