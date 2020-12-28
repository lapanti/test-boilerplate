import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { isDarkModeSelector } from '../../store/ducks/theme/selectors'
import themeSlice from '../../store/ducks/theme/slice'

const Form = styled.form`
    justify-self: end;
    padding: 0 var(--m);
`

const Toggle = styled.label`
    --border-radius: calc(var(--l) / 2);

    position: relative;
    display: inline-block;
    cursor: pointer;
`

const HiddenInput = styled.input`
    display: none;
`

const Track = styled.div`
    position: relative;
    width: calc(var(--xl) + var(--xs));
    height: var(--xm);
    border-radius: var(--border-radius);
    background: var(--background-secondary);
    transition: background 0.25s ease;
`

const Moon = styled.span<{ visible: boolean }>`
    position: absolute;
    font-size: 14px;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transition: opacity 0.25s ease;
`

const Sun = styled(Moon)`
    left: calc(var(--m) + var(--xs));
`

const Thumb = styled.button<{ isDarkMode: boolean }>`
    position: absolute;
    top: 0;
    cursor: pointer;
    background: white;
    height: var(--xm);
    width: var(--xm);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    border-radius: var(--border-radius);
    border: 0;
    padding: 0;
    transition: transform 0.25s ease;
    transform: translateX(${({ isDarkMode }) => (isDarkMode ? 'calc(var(--m) + var(--xs))' : 0)});
`

const ThemeToggle: React.FunctionComponent = () => {
    const isDarkMode = useSelector(isDarkModeSelector)
    const dispatch = useDispatch()
    const toggle = useCallback(() => void dispatch(themeSlice.actions.toggleDarkMode()), [dispatch])
    return (
        <Form>
            <Toggle>
                <HiddenInput checked={isDarkMode} type="checkbox" onChange={toggle} />
                <Track>
                    <Moon visible={isDarkMode}>🌙</Moon>
                    <Sun visible={!isDarkMode}>☀️</Sun>
                </Track>
                <Thumb
                    aria-checked={isDarkMode ? 'true' : 'false'}
                    aria-label="Toggle dark/light mode"
                    isDarkMode={isDarkMode}
                    role="switch"
                    type="button"
                    onClick={toggle}
                />
            </Toggle>
        </Form>
    )
}

export default ThemeToggle
