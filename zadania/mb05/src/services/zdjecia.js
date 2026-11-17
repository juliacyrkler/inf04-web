let zdjecia = null

/**
 * Pobiera tablicę obiektów ze zdjęciami z pliku public/photos.json.
 * @returns tablica obiektów z pliku.
 */
export async function pobierzZdjecia() {
  if (zdjecia) return zdjecia
  const odpowiedz = await fetch('/photos.json')
  if (!odpowiedz.ok) throw new Error('Błąd serwera: ' + odpowiedz.status)
  zdjecia = await odpowiedz.json()
  return zdjecia
}

/**
 * Wyszukuje obiekt zdjęcia o konkretnym ID z tablicy zdjęć.
 * @param {*} id - ID zdjęcia
 * @returns obiekt zdjęcia o ID z parametru
 */
export async function pobierzZdjecie(id) {
  const lista = await pobierzZdjecia()
  return lista.find(z => z.id === Number(id)) ?? null
}

/**
 * Usuwa z tablicy obiekt zdjęcia o konkretnym ID.
 * @param {*} id - ID zdjęcia
 * @returns tablica zdjęć pozbawiona obiektu o ID z parametru
 */
export function usunZdjecie(id) {
  zdjecia = zdjecia.filter(z => z.id !== id)
  return zdjecia
}

/**
 * Zmienia własność 'favourite' obiektu zdjęcia o konkretnym ID na true, jeśli wcześniej wynosiła false i odwrotnie.
 * @param {*} id - ID zdjęcia
 * @returns tablica zdjęć z przełączoną własnością 'favourite' obiektu o ID z parametru
 */
export function przelaczUlubione(id) {
  zdjecia = zdjecia.map(z => (z.id === id ? { ...z, favorite: !z.favorite } : z))
  return zdjecia
}

/**
 * Dodaje do tablicy ze zdjęciami nowy obiekt.
 * @param {*} nowe - obiekt zdjęcia do dodania
 * @returns tablica zdjęć powiększona o obiekt z parametru.
 */
export function dodajZdjecie(nowe) {
  const noweId = Math.max(...zdjecia.map(z => z.id)) + 1
  zdjecia = [...zdjecia, { ...nowe, id: noweId, favorite: false }]
  return zdjecia
}
