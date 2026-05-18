'use client'

import { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { RecipeGrid } from './components/RecipeGrid'
import { Meal } from '@/lib/types'

export default function Home() {
  const [recipes, setRecipes] = useState<Meal[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (meals: Meal[]) => {
    setIsLoading(true)
    try {
      setRecipes(meals)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-orange-900">
          Buscador de Recetas
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Encuentra deliciosas recetas
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          <RecipeGrid recipes={recipes} />
        </div>
      </div>
    </main>
  )
}
