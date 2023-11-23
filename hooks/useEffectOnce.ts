import { EffectCallback, useEffect } from 'react'

/**
 * `useEffectOnce`는 컴포넌트가 마운트될 때 한 번만 실행되는 useEffect 훅
 *
 * @param effect - 컴포넌트가 마운트될 때 실행할 함수 이 함수는
 *                 필요한 경우 정리(clean-up) 함수를 반환 가능
 *
 * 이 훅은 React의 useEffect 훅을 사용하여 구현되었으며, 의존성 배열에
 * `effect` 함수 자체를 넣어, 해당 함수가 변경될 때만 effect가 다시 실행
 * 그러나 일반적으로 `effect` 함수는 컴포넌트 내에서 변하지 않으므로,
 * 이 훅은 실질적으로 컴포넌트 마운트 시에만 effect를 실행하고, 언마운트 시에는
 * 정리 함수를 실행(정리 함수가 제공된 경우).
 */

const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, [effect])
}

export default useEffectOnce
