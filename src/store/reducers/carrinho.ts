import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Produto = {
  id: number
  nome: string
  imagem: string
  preco: number
}

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      state.itens.push(action.payload)
    },

    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
  },
})

export const { adicionar, remover } = carrinhoSlice.actions

export default carrinhoSlice.reducer
