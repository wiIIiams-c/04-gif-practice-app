import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en GifGrid', () => {
    const category = 'lelouch'

    test('Debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })

    test('Debe de mostrar items cuando se cargan imagenes en useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'lelouch',
                url: 'https://localhost:8080/lelouch01.jpg'
            },
            {
                id: 'DEF',
                title: 'bocchi',
                url: 'https://localhost:8080/bocchi.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(2);
    })
})