import React from 'react'

import { render, screen } from '@testing-library/react'

import Home from '../../src/pages'

describe("E-Form test", () => {
    test("it should see a button", () => {
        const eFromData: any[] = []

        render(<Home eFromData={eFromData}/>)

        expect(screen.queryByRole('button')).toBeInTheDocument()
        expect(screen.queryByRole('button', { name: /Submit/i})).toBeTruthy()
    })
})