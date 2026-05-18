'use client'

import { useState, FormEvent } from 'react'
import { Meal } from '@/lib/types'

interface SearchProps {
  onSearch: (meals: Meal[]) => void
  isLoading: boolean
}

//DICCIONARIO DE TRADUCCIÓN
const translations: { [key: string]: string } = {
  // Carnes
  'pollo': 'chicken',
  'carne': 'beef',
  'cerdo': 'pork',
  'pavo': 'turkey',
  'cordero': 'lamb',
  'jamón': 'ham',
  'tocino': 'bacon',
  
  // Pescados
  'pescado': 'fish',
  'salmón': 'salmon',
  'atún': 'tuna',
  'camarones': 'shrimp',
  
  // Verduras
  'tomate': 'tomato',
  'cebolla': 'onion',
  'ajo': 'garlic',
  'zanahoria': 'carrot',
  'brócoli': 'broccoli',
  'espinaca': 'spinach',
  'champiñones': 'mushroom',
  'papa': 'potato',
  'pimiento': 'pepper',
  'apio': 'celery',
  'lechuga': 'lettuce',
  'maíz': 'corn',
  
  // Granos
  'arroz': 'rice',
  'pasta': 'pasta',
  'pan': 'bread',
  'harina': 'flour',
  
  // Lácteos
  'queso': 'cheese',
  'leche': 'milk',
  'mantequilla': 'butter',
  'crema': 'cream',
  'yogur': 'yogurt',
  
  // Otros
  'pizza': 'pizza',
  'huevo': 'egg',
  'sal': 'salt',
  'aceite': 'oil',
  'azúcar': 'sugar',
  'chocolate': 'chocolate',
  
  // Frutas
  'limón': 'lemon',
  'naranja': 'orange',
  'manzana': 'apple',
  'plátano': 'banana',
}

export function SearchBar({ onSearch, isLoading }: SearchProps) {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setError('')
    try {
      // Convertir a minúsculas y buscar traducción
      const searchQuery = query.toLowerCase().trim()
      const englishQuery = translations[searchQuery] || searchQuery
      
      const response = await fetch(`/api/recipes/search?q=${encodeURIComponent(englishQuery)}`)
      const data = await response.json()

      if (data.error || !data.meals) {
        setError('No recipes found. Try another ingredient!')
        onSearch([])
      } else {
        onSearch(data.meals)
      }
    } catch (err) {
      setError('Failed to search recipes')
      console.error(err)
    }
  }

  return (
    <div className="w-full mb-8">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busca por ingrediente (ej: pollo, pizza)..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition disabled:opacity-50"
        >
          {isLoading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}