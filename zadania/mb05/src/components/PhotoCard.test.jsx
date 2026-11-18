import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import PhotoCard from './PhotoCard.jsx'

const zdjecie = {
    id:7,
    title:'Grań nad doliną',
    description:'Szlak granią w poranej mgle',
    category:'gory',
    image:'https://przyklad.pl/7.jpg',
    alt:'Grań nad doliną',
    favourite:false,
}

describe('PhotoCard', () => {
    it('klik w gwiazdkę wywołuje onPrzelacz', async () => {
        const onPrzelacz = vi.fn()
        render(
            <MemoryRouter>
                <PhotoCard {...zdjecie} onUsun={() => {}} onPrzelacz={onPrzelacz}/>
            </MemoryRouter>
        )
        await userEvent.click(screen.getByRole('button',{name:'Dodaj do ulubionych'}))
        expect(onPrzelacz).toHaveBeenCalled()
    })
})