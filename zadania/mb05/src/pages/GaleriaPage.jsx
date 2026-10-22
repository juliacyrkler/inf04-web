import { useZdjecia } from '../hooks/useZdjecia.js'

function GaleriaPage() {
    const {zdjecia, setZdjecia, isLoading, error} = useZdjecia()
}