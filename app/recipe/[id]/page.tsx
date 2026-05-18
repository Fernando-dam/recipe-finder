'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { MealDetails } from '@/lib/types'

interface RecipeDetailProps {
  params: {
    id: string
  }
}

export default function RecipeDetail({ params }: RecipeDetailProps) {
  const [meal, setMeal] = useState<MealDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch(`/api/recipes/${params.id}`)
        const data = await response.json()
        if (data.error) {
          setError(data.error)
        } else {
          setMeal(data.meal)
        }
      } catch (err) {
        setError('Failed to load recipe')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchMeal()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
        <p className="text-gray-500">Loading recipe...</p>
      </div>
    )
  }

  if (error || !meal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex flex-col items-center justify-center">
        <p className="text-red-500 mb-4">{error}</p>
        <Link href="/" className="text-orange-600 hover:text-orange-700 underline">
          ← Back to search
        </Link>
      </div>
    )
  }

  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]
    if (ingredient) {
      ingredients.push({ ingredient, measure })
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="text-orange-600 hover:text-orange-700 underline mb-6 inline-block">
          ← Back to search
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {meal.strMealThumb && (
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-96 object-cover"
            />
          )}

          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">{meal.strMeal}</h1>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {meal.strCategory && (
                <div>
                  <p className="text-gray-600">Category</p>
                  <p className="font-semibold text-lg">{meal.strCategory}</p>
                </div>
              )}
              {meal.strArea && (
                <div>
                  <p className="text-gray-600">Cuisine</p>
                  <p className="font-semibold text-lg">{meal.strArea}</p>
                </div>
              )}
            </div>

            {ingredients.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {ingredients.map((item, idx) => (
                    <li key={idx} className="flex justify-between bg-orange-50 p-3 rounded">
                      <span>{item.ingredient}</span>
                      <span className="font-semibold text-orange-600">{item.measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {meal.strInstructions && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {meal.strInstructions}
                </p>
              </div>
            )}

            {meal.strYoutube && (
              <div className="mt-8">
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Watch on YouTube
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
