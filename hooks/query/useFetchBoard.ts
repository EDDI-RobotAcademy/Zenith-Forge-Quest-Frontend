import { useQuery } from 'react-query'
import axios from 'axios'
import { M_Board } from '@/types/model/board'

const fetchBoard = async () => {
  const { data } = await axios.get<M_Board.I_BoardData>('http://localhost:7777/board/list')
  return data
}

export function useFetchBoard() {
  return useQuery<M_Board.I_BoardData>('board', fetchBoard, {
    staleTime: Infinity,
  })
}
