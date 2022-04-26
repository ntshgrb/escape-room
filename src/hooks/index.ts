import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { State, AppDispatch } from '../types/state';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
