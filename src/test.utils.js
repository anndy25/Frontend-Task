import { render } from '@testing-library/react'
import { ContextProvider } from './context/ArugumentContext';




const customRender = (ui, options) =>
    render(ui, { wrapper: ContextProvider, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }