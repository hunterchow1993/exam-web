import { useDispatch, useSelector } from 'react-redux'

// 使用这些hooks代替普通的useDispatch和useSelector
export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector